// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use crate::{ArgminError, Error};
use serde::de::DeserializeOwned;
use serde::{Deserialize, Serialize};
use std::default::Default;
use std::fs::File;
use std::io::{BufReader, BufWriter};
use std::path::Path;

#[derive(Clone, Serialize, Deserialize, Eq, PartialEq, Ord, PartialOrd, Debug, Hash, Copy)]
pub enum CheckpointMode {
    Never,
    Every(u64),
    Always,
}

impl Default for CheckpointMode {
    fn default() -> CheckpointMode {
        CheckpointMode::Never
    }
}

#[derive(Clone, Serialize, Deserialize, Eq, PartialEq, Ord, PartialOrd, Debug, Hash)]
pub struct ArgminCheckpoint {
    mode: CheckpointMode,
    directory: String,
    name: String,
}

impl Default for ArgminCheckpoint {
    fn default() -> ArgminCheckpoint {
        ArgminCheckpoint {
            mode: CheckpointMode::Never,
            directory: ".checkpoints".to_string(),
            name: "default".to_string(),
        }
    }
}

impl ArgminCheckpoint {
    pub fn new(directory: &str, mode: CheckpointMode) -> Result<Self, Error> {
        match mode {
            CheckpointMode::Every(_) | CheckpointMode::Always => {
                std::fs::create_dir_all(&directory)?
            }
            _ => {}
        }
        let name = "solver".to_string();
        let directory = directory.to_string();
        Ok(ArgminCheckpoint {
            mode,
            directory,
            name,
        })
    }

    #[inline]
    pub fn set_dir(&mut self, dir: &str) {
        self.directory = dir.to_string();
    }

    #[inline]
    pub fn dir(&self) -> String {
        self.directory.clone()
    }

    #[inline]
    pub fn set_name(&mut self, name: &str) {
        self.name = name.to_string();
    }

    #[inline]
    pub fn name(&self) -> String {
        self.name.clone()
    }

    #[inline]
    pub fn set_mode(&mut self, mode: CheckpointMode) {
        self.mode = mode
    }

    #[inline]
    pub fn store<T: Serialize>(&self, solver: &T, filename: String) -> Result<(), Error> {
        let dir = Path::new(&self.directory);
        if !dir.exists() {
            std::fs::create_dir_all(&dir)?
        }
        let fname = dir.join(Path::new(&filename));

        let f = BufWriter::new(File::create(fname)?);
        bincode::serialize_into(f, solver)?;
        Ok(())
    }

    #[inline]
    pub fn store_cond<T: Serialize>(&self, solver: &T, iter: u64) -> Result<(), Error> {
        let mut filename = self.name();
        filename.push_str(".arg");
        match self.mode {
            CheckpointMode::Always => self.store(solver, filename)?,
            CheckpointMode::Every(it) if iter % it == 0 => self.store(solver, filename)?,
            CheckpointMode::Never | CheckpointMode::Every(_) => {}
        };
        Ok(())
    }
}

pub fn load_checkpoint<T: DeserializeOwned, P: AsRef<Path>>(path: P) -> Result<T, Error> {
    let path = path.as_ref();
    if !path.exists() {
        return Err(ArgminError::CheckpointNotFound {
            text: path.to_str().unwrap().to_string(),
        }
        .into());
    }
    let file = File::open(path)?;
    let reader = BufReader::new(file);
    Ok(bincode::deserialize_from(reader)?)
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::nooperator::MinimalNoOperator;
    use crate::*;
    use argmin_codegen::ArgminSolver;

    #[derive(ArgminSolver, Serialize, Deserialize, Clone, Debug)]
    pub struct PhonySolver<O>
    where
        O: ArgminOp,
    {
        base: ArgminBase<O>,
    }

    impl<O> PhonySolver<O>
    where
        O: ArgminOp,
    {
        /// Constructor
        pub fn new(op: O, init_param: <O as ArgminOp>::Param) -> Self {
            PhonySolver {
                base: ArgminBase::new(op, init_param),
            }
        }
    }

    impl<O> ArgminIter for PhonySolver<O>
    where
        O: ArgminOp,
    {
        type Param = <O as ArgminOp>::Param;
        type Output = <O as ArgminOp>::Output;
        type Hessian = <O as ArgminOp>::Hessian;

        fn next_iter(&mut self) -> Result<ArgminIterData<Self::Param>, Error> {
            unimplemented!()
        }
    }

    #[test]
    fn test_store() {
        let op: MinimalNoOperator = MinimalNoOperator::new();
        let solver = PhonySolver::new(op, vec![0.0, 0.0]);
        let check = ArgminCheckpoint::new("checkpoints", CheckpointMode::Always).unwrap();
        check.store_cond(&solver, 20).unwrap();

        let loaded: PhonySolver<MinimalNoOperator> =
            load_checkpoint("checkpoints/solver.arg").unwrap();
        println!("{:?}", loaded);
    }
}

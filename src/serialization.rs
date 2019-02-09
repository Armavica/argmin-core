// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use crate::Error;
use serde::{Deserialize, Serialize};
use std::default::Default;
use std::fs::File;
use std::io::BufWriter;
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
    prefix: String,
}

impl Default for ArgminCheckpoint {
    fn default() -> ArgminCheckpoint {
        let out = ArgminCheckpoint::new("checkpoints".to_string(), CheckpointMode::default());
        match out {
            Ok(cp) => cp,
            Err(_) => panic!("Cannot create default ArgminCheckpoint."),
        }
    }
}

impl ArgminCheckpoint {
    pub fn new(directory: String, mode: CheckpointMode) -> Result<Self, Error> {
        match mode {
            CheckpointMode::Every(_) | CheckpointMode::Always => {
                std::fs::create_dir_all(&directory)?
            }
            _ => {}
        }
        let prefix = "solver".to_string();
        Ok(ArgminCheckpoint {
            mode,
            directory,
            prefix,
        })
    }

    pub fn dir(&self) -> String {
        self.directory.clone()
    }

    pub fn set_prefix(&mut self, prefix: String) {
        self.prefix = prefix;
    }

    pub fn prefix(&self) -> String {
        self.prefix.clone()
    }

    pub fn store<T: Serialize>(&self, solver: &T) -> Result<(), Error> {
        let mut filename = self.prefix();
        filename.push_str(".arg");
        let dir = Path::new(&self.dir()).join(Path::new(&filename));
        let f = BufWriter::new(File::create(dir).unwrap());
        serde_json::to_writer_pretty(f, solver).unwrap();
        // serde_json::to_string_pretty(self).unwrap()
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::nooperator::NoOperator;
    use crate::*;
    use argmin_codegen::ArgminSolver;

    #[derive(ArgminSolver, Serialize, Deserialize, Clone)]
    pub struct PhonySolver<T, O>
    where
        T: Clone + Default,
        O: ArgminOperator<Parameters = T, OperatorOutput = f64, Hessian = ()>,
    {
        base: ArgminBase<T, f64, (), O>,
    }

    impl<T, O> PhonySolver<T, O>
    where
        T: Clone + Default + ArgminScaledSub<T, f64, T>,
        O: ArgminOperator<Parameters = T, OperatorOutput = f64, Hessian = ()>,
    {
        /// Constructor
        pub fn new(op: O, init_param: T) -> Self {
            PhonySolver {
                base: ArgminBase::new(op, init_param),
            }
        }
    }

    impl<T, O> ArgminNextIter for PhonySolver<T, O>
    where
        T: Clone + Default,
        O: ArgminOperator<Parameters = T, OperatorOutput = f64, Hessian = ()>,
    {
        type Parameters = T;
        type OperatorOutput = f64;
        type Hessian = ();

        fn next_iter(&mut self) -> Result<ArgminIterationData<Self::Parameters>, Error> {
            unimplemented!()
        }
    }

    #[test]
    fn test_store() {
        let op: NoOperator<Vec<f64>, f64, ()> = NoOperator::new();
        let solver = PhonySolver::new(op, vec![0.0, 0.0]);
        let check =
            ArgminCheckpoint::new("checkpoints".to_string(), CheckpointMode::Always).unwrap();
        check.store(&solver).unwrap();
    }
}

// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

use crate::ArgminSolver;
use crate::Error;
use serde::{Deserialize, Serialize};
use std::fs::File;
use std::io::BufWriter;
use std::path::Path;

#[derive(Clone, Serialize, Deserialize, Eq, PartialEq, Debug, Hash, Copy)]
pub enum CheckpointMode {
    Never,
    Every(u64),
    Always,
}

#[derive(Clone, Serialize, Deserialize, Eq, PartialEq, Debug, Hash)]
pub struct ArgminCheckpointInfo {
    mode: CheckpointMode,
    directory: String,
}

impl ArgminCheckpointInfo {
    pub fn new(directory: String, mode: CheckpointMode) -> Result<Self, Error> {
        match mode {
            CheckpointMode::Every(_) | CheckpointMode::Always => {
                std::fs::create_dir_all(&directory)?
            }
            _ => {}
        }
        Ok(ArgminCheckpointInfo { mode, directory })
    }

    pub fn dir(&self) -> String {
        self.directory.clone()
    }
}

pub trait ArgminCheckpoint {
    fn store(&self, info: ArgminCheckpointInfo) -> String;
    fn load() -> Self;
}

impl<'de, T> ArgminCheckpoint for T
where
    T: ArgminSolver + Serialize + Deserialize<'de>,
{
    fn store(&self, info: ArgminCheckpointInfo) -> String {
        let dir = Path::new(&info.dir()).join(Path::new("bla.arg"));
        println!("{:?}", dir);
        let f = BufWriter::new(File::create(dir).unwrap());
        serde_json::to_writer_pretty(f, self).unwrap();
        // serde_json::to_string_pretty(self).unwrap()
        String::default()
    }

    fn load() -> Self {
        unimplemented!();
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
        let checkinfo =
            ArgminCheckpointInfo::new("checkpoints".to_string(), CheckpointMode::Always).unwrap();
        println!("{}", solver.store(checkinfo));
    }
}
var N=null,E="",T="t",U="u",searchIndex={};
var r_0a="argminresult",r_0b="argminwriter",r_1a="set_termination_reason",r_1b="ordering",r_2a="set_max_iters",r_2b="option",r_3a="max_iters",r_3b="partial_cmp",r_4a="cur_iter",r_4b="fmt",r_5a="increment_iter",r_5b="serialize",r_6a="cur_cost",r_6b="deserialize",r_7a="set_cur_cost",r_7b="backtrace",r_8a="Get current cost function value",r_8b="cause",r_9a="best_cost",r_9b="context",r_Aa="Calculation of the Jacobian J(x) of a vector function `fs`…",r_Ab="Set the initial step length",r_Ac="ArgminWeightedDot",r_Ba="Calculation of the product of the Jacobian J(x) of a…",r_Bb="Set the gradient at the starting point",r_Bc="ArgminZero",r_Ca="Calculation of the product of the Hessian H(x) of a…",r_Cb="param",r_Cc="ArgminEye",r_Da="Dot/scalar product of `T` and `self`",r_Db="try_from",r_Dc="ArgminAdd",r_Ea="Return zero(s)",r_Eb="borrow",r_Ec="ArgminSub",r_Fa="Add a `T` to `self`",r_Fb="type_id",r_Fc="ArgminMul",r_Ga="Subtract a `T` from `self`",r_Gb="typeid",r_Gc="ArgminDiv",r_Ha="(Pointwise) Multiply a `T` with `self`",r_Hb="borrow_mut",r_Hc="ArgminScaledAdd",r_Ia="(Pointwise) Divide a `T` by `self`",r_Ib="try_into",r_Ic="ArgminScaledSub",r_Ja="Add a `T` scaled by an `U` to `self`",r_Jb="to_string",r_Jc="ArgminNorm",r_Ka="Subtract a `T` scaled by an `U` from `self`",r_Kb="string",r_Kc="ArgminTranspose",r_La="Compute the l2-norm (`U`) of `self`",r_Lb="from",r_Lc="ArgminInv",r_Ma="apply",r_Mb="into",r_Mc="ArgminSolver",r_Na="gradient",r_Nb="to_owned",r_Nc="ArgminNextIter",r_Oa="hessian",r_Ob="clone_into",r_Oc="ArgminLog",r_Pa="modify",r_Pb="as_fail",r_Pc="ArgminWrite",r_Qa="cur_param",r_Qb="argmin_core::finitediff",r_Qc="ArgminOperator",r_Ra="cur_grad",r_Rb="fail",r_Rc="ArgminLineSearch",r_Sa="cur_hessian",r_Sb="formatter",r_Sc="ArgminTrustRegion",r_Ta="return current gradient",r_Tb="perturbationvector",r_Tc="ArgminNLCGBetaUpdate",r_Ua="set_cur_param",r_Ub="Log general info",r_Uc="ArgminIterationData",r_Va="set_cur_grad",r_Vb="This should be used to log iteration data only (because…",r_Vc="Error",r_Wa="set_cur_hessian",r_Wb="bool",r_Xa="set current gradient",r_Xb="default",r_Ya="set_best_param",r_Yb="clone",r_Za="set current parameter vector",r_Zb="argminlogger",r_aa="argmin_core",r_ab="set_best_cost",r_ac="compat",r_ba="argmin_core::ArgminError",r_bb="set_target_cost",r_bc="causes",r_ca="text",r_cb="add_logger",r_cc="Attempts to downcast this `Error` to a particular `Fail`…",r_da="Aborted",r_db="add_writer",r_dc="mod_cholesky_gmw81",r_ea="self",r_eb="increment_cost_func_count",r_ec="Computes the modified Cholesky decomposition with the…",r_fa="argminkv",r_fb="Increment the cost function evaluation count",r_fc="mod_cholesky_se99",r_ga="result",r_gb="increase_cost_func_count",r_gc="Computes the modified Cholesky decomposition with the SE99…",r_ha="error",r_hb="Increaese the cost function evaluation count by a given…",r_hc="mod_cholesky_se90",r_ia="f64",r_ib="cost_func_count",r_ic="Computes the modified Cholesky decomposition with the SE90…",r_ja="u64",r_jb="Return the cost function evaluation count",r_jc="ArgminKV",r_ka="Return the gradient evaluation count",r_kb="increment_grad_func_count",r_kc="ArgminResult",r_la="termination_reason",r_lb="Increment the gradient evaluation count",r_lc="ArgminError",r_ma="terminationreason",r_mb="increase_grad_func_count",r_mc="TerminationReason",r_na="terminated",r_nb="Increase the gradient evaluation count by a given value",r_nc="ArgminBase",r_oa="duration",r_ob="grad_func_count",r_oc="ArgminSlogLogger",r_pa="Constructor",r_pb="increment_hessian_func_count",r_pc="ArgminLogger",r_qa="arc",r_qb="Increment the hessian evaluation count",r_qc="WriteToFile",r_ra="argminlog",r_rb="increase_hessian_func_count",r_rc="ArgminWriter",r_sa="push",r_sb="Increase the hessian evaluation count by a given value",r_sc="Decomposition",r_ta="argminwrite",r_tb="hessian_func_count",r_tc="GershgorinCircles",r_ua="new",r_ub="OperatorOutput",r_uc="ModCholeskyGMW81",r_va="str",r_vb="Hessian",r_vc="ModCholeskySE99",r_wa="arraybase",r_wb="log_info",r_wc="ModCholeskySE90",r_xa="usize",r_xb="log_iter",r_xc="FiniteDiff",r_ya="argmin_core::modcholesky",r_yb="write",r_yc="PerturbationVector",r_za="decomposition",r_zb="Parameters",r_zc="ArgminDot";

searchIndex[r_aa]={"doc":"Argmin Optimizaton toolbox core","i":[[3,r_Vc,r_aa,"The `Error` type, which can contain any failure.",N,N],[3,r_nc,E,"Storage for data needed by most solvers",N,N],[3,r_jc,E,"A simple key-value storage",N,N],[12,"kv",E,"The actual key value storage",0,N],[3,r_oc,E,"A logger based on `slog`",N,N],[3,r_pc,E,"Container for `ArgminLog`gers",N,N],[3,r_qc,E,E,N,N],[3,r_rc,E,E,N,N],[3,r_kc,E,"Return struct for all solvers.",N,N],[12,r_Cb,E,"Final parameter vector",1,N],[12,"cost",E,"Final cost value",1,N],[12,"iters",E,"Number of iterations",1,N],[12,r_na,E,"Indicated whether it terminated or not",1,N],[12,r_la,E,"Reason of termination",1,N],[3,r_Uc,E,"The datastructure which is returned by the `next_iter`…",N,N],[4,r_lc,E,E,N,N],[13,"InvalidParameter",E,"Indicates and invalid parameter",2,N],[12,r_ca,r_ba,E,2,N],[13,"NotImplemented",r_aa,"Indicates that a function is not implemented",2,N],[12,r_ca,r_ba,E,2,N],[13,"NotInitialized",r_aa,"Indicates that a function is not initialized",2,N],[12,r_ca,r_ba,E,2,N],[13,"ConditionViolated",r_aa,"Indicates that a condition is violated",2,N],[12,r_ca,r_ba,E,2,N],[13,"ImpossibleError",r_aa,"Indicates an impossible error",2,N],[12,r_ca,r_ba,E,2,N],[4,r_mc,r_aa,"Indicates why the optimization algorithm stopped",N,N],[13,"NotTerminated",E,"In case it has not terminated yet",3,N],[13,"MaxItersReached",E,"Maximum number of iterations reached",3,N],[13,"TargetCostReached",E,"Target cost function value reached",3,N],[13,"TargetPrecisionReached",E,"Target precision reached",3,N],[13,"AcceptedStallIterExceeded",E,"Acceped stall iter exceeded",3,N],[13,"BestStallIterExceeded",E,"Best stall iter exceeded",3,N],[13,"LineSearchConditionMet",E,"Condition for Line search met",3,N],[13,r_da,E,r_da,3,N],[0,"macros",E,"Macros # Macros",N,N],[11,r_ua,E,r_pa,4,[[["o"],[T]],[r_ea]]],[11,"kv_for_logs",E,"Return the KV for the initial logging",4,[[[r_ea]],[r_fa]]],[11,"kv_for_iter",E,"Return the KV for logging of the iterations",4,[[[r_ea]],[r_fa]]],[11,"reset",E,"Reset `self` to its initial state.",4,[[[r_ea]]]],[11,r_Ma,E,"Apply the operator to `param`",4,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,r_Na,E,"Compute the gradient at `param`",4,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,r_Oa,E,"Compute the hessian at `param`",4,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,r_Pa,E,"Modify a `param` with the `modify` method of `operator`.",4,[[[r_ea],[T],[r_ia]],[r_ga,[r_ha]]]],[11,r_Ua,E,"Set the current parameter vector",4,[[[r_ea],[T]],[r_ea]]],[11,r_Qa,E,"Return the current parameter vector",4,[[[r_ea]],[T]]],[11,r_Ya,E,"Set the new best parameter vector",4,[[[r_ea],[T]],[r_ea]]],[11,"best_param",E,"Return the current best parameter vector",4,[[[r_ea]],[T]]],[11,r_7a,E,"Set the current cost function value",4,[[[r_ea],[r_ia]],[r_ea]]],[11,r_6a,E,"Return the current cost function value",4,[[[r_ea]],[r_ia]]],[11,r_ab,E,"Set the cost function value of the current best parameter…",4,[[[r_ea],[r_ia]],[r_ea]]],[11,r_9a,E,"Return the cost function value of the current best…",4,[[[r_ea]],[r_ia]]],[11,r_Va,E,"Set the current gradient",4,[[[r_ea],[T]],[r_ea]]],[11,r_Ra,E,"Return the current gradient",4,[[[r_ea]],[T]]],[11,r_Wa,E,"Set the current hessian",4,[[[r_ea],["h"]],[r_ea]]],[11,r_Sa,E,"Return the current hessian",4,[[[r_ea]],["h"]]],[11,r_bb,E,"Set the target cost function value",4,[[[r_ea],[r_ia]],[r_ea]]],[11,"target_cost",E,"Return the target cost function value",4,[[[r_ea]],[r_ia]]],[11,r_5a,E,"Increment the number of iterations.",4,[[[r_ea]],[r_ea]]],[11,r_4a,E,"Return the current number of iterations",4,[[[r_ea]],[r_ja]]],[11,r_eb,E,r_fb,4,[[[r_ea]],[r_ea]]],[11,r_gb,E,r_hb,4,[[[r_ea],[r_ja]],[r_ea]]],[11,r_ib,E,r_jb,4,[[[r_ea]],[r_ja]]],[11,r_kb,E,r_lb,4,[[[r_ea]],[r_ea]]],[11,r_mb,E,r_nb,4,[[[r_ea],[r_ja]],[r_ea]]],[11,r_ob,E,r_ka,4,[[[r_ea]],[r_ja]]],[11,r_pb,E,r_qb,4,[[[r_ea]],[r_ea]]],[11,r_rb,E,r_sb,4,[[[r_ea],[r_ja]],[r_ea]]],[11,r_tb,E,r_ka,4,[[[r_ea]],[r_ja]]],[11,r_2a,E,"Set the maximum number of iterations.",4,[[[r_ea],[r_ja]],[r_ea]]],[11,r_3a,E,"Return the maximum number of iterations",4,[[[r_ea]],[r_ja]]],[11,r_1a,E,"Set the `TerminationReason`",4,[[[r_ea],[r_ma]],[r_ea]]],[11,r_la,E,"Return the `TerminationReason`",4,[[[r_ea]],[r_ma]]],[11,"termination_reason_text",E,"Return the textual representation of the `TerminationReason`",4,[[[r_ea]],[r_va]]],[11,r_na,E,"Return whether the algorithm has terminated or not",4,[[[r_ea]],[r_Wb]]],[11,r_ga,E,"Return the result.",4,[[[r_ea]],[r_0a]]],[11,"set_total_time",E,"Set the total time needed by the solver",4,[[[r_ea],[r_oa]],[r_ea]]],[11,"total_time",E,"Return the total time",4,[[[r_ea]],[r_oa]]],[11,r_cb,E,"Add a logger to the list of loggers",4,[[[r_ea],[r_qa,[r_ra]]],[r_ea]]],[11,r_db,E,"Add a writer to the list of writers",4,[[[r_ea],[r_qa,[r_ta]]],[r_ea]]],[11,r_xb,E,"Log a `kv`",4,[[[r_ea],[r_fa]],[r_ga,[r_ha]]]],[11,r_wb,E,"Log a message and a `kv`",4,[[[r_ea],[r_va],[r_fa]],[r_ga,[r_ha]]]],[11,r_yb,E,"Write (TODO)",4,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,r_ua,E,r_pa,0,[[],[r_ea]]],[11,r_sa,E,"Push a key-value pair to the `kv` vector.",0,[[[r_ea],[r_va],[T]],[r_ea]]],[11,"merge",E,"Merge another `kv` into `self.kv`",0,[[[r_ea],[r_fa]],[r_ea]]],[11,"term",E,"Log to the terminal in a blocking way",5,[[],[r_qa]]],[11,"term_noblock",E,"Log to the terminal in a non-blocking way (in case of…",5,[[],[r_qa]]],[11,"file",E,"Log JSON to a file in a blocking way",5,[[[r_va]],[r_ga,[r_qa,r_ha]]]],[11,"file_noblock",E,"Log JSON to a file in a non-blocking way (in case of…",5,[[[r_va]],[r_ga,[r_qa,r_ha]]]],[11,r_ua,E,r_pa,6,[[],[r_ea]]],[11,r_sa,E,"Push another `ArgminLog` to the `logger` field",6,[[[r_ea],[r_qa,[r_ra]]],[r_ea]]],[11,r_ua,E,E,7,[[],[r_qa]]],[11,r_ua,E,E,8,[[],[r_ea]]],[11,r_sa,E,E,8,[[[r_ea],[r_qa,[r_ta]]],[r_ea]]],[11,r_ua,E,r_pa,1,[[[T],[r_ia],[r_ja],[r_ma]],[r_ea]]],[11,r_na,E,"Returns `true` if a solver terminated and `false` otherwise",3,[[[r_ea]],[r_Wb]]],[11,r_ca,E,"Returns a texual representation of what happened",3,[[[r_ea]],[r_va]]],[0,"modcholesky",E,"Modified Cholesky decompositions Modified Cholesky…",N,N],[0,"utils",r_ya,"Utility functions",N,N],[5,"eigenvalues_2x2","argmin_core::modcholesky::utils","Computes the Eigenvalues of a 2x2 matrix",N,N],[5,"swap_columns",E,"Swaps columns `idx1` and `idx2` of matrix `mat`",N,N],[5,"swap_rows",E,"Swaps rows `idx1` and `idx2` of matrix `mat`",N,N],[5,"index_of_largest",E,"Returns the index of the largest element in a 1D array",N,[[[r_wa]],[r_xa]]],[5,"index_of_largest_abs",E,"Returns the index of the element with the largest absolute…",N,[[[r_wa]],[r_xa]]],[5,"index_to_permutation_mat",E,"Returns the permutation matrix for a vector of permuted…",N,N],[5,"diag_mat_from_arr",E,"Builds a diagonal matrix from a 1D slice",N,N],[5,"random_householder",E,"Returns a random Householder matrix of dimension `dim` and…",N,[[[r_xa],["u8"]],[r_wa,["ownedrepr","dim"]]]],[5,"random_diagonal",E,"Returns a random diagonal matrix with Eigenvalues…",N,N],[3,r_sc,r_ya,E,N,N],[12,"l",E,E,9,N],[12,"e",E,E,9,N],[12,"p",E,E,9,N],[8,r_tc,E,"Gershgorin circles",N,N],[10,"gershgorin_circles",E,"Computes the Gershgorin Circles of a matrix",10,[[[r_ea]],["vec"]]],[8,r_uc,E,"Gill, Murray and Wright (1981)",N,N],[11,r_dc,E,r_ec,11,[[[r_ea]],[r_za]]],[8,r_vc,E,"Schnabel & Eskow algorithm (1999)",N,N],[11,r_fc,E,r_gc,12,[[[r_ea]],[r_za]]],[8,r_wc,E,"Schnabel & Eskow algorithm (1990)",N,N],[11,r_hc,E,r_ic,13,[[[r_ea]],[r_za]]],[0,"finitediff",r_aa,"Finite Differentiation",N,N],[8,r_xc,r_Qb,E,N,N],[16,"Jacobian",E,E,14,N],[16,r_vb,E,E,14,N],[16,r_ub,E,E,14,N],[10,"forward_diff",E,"Forward difference calculated as",14,[[[r_ea],["fn"]],[r_ea]]],[10,"central_diff",E,"Central difference calculated as",14,[[[r_ea],["fn"]],[r_ea]]],[10,"forward_jacobian",E,r_Aa,14,N],[10,"central_jacobian",E,r_Aa,14,N],[10,"forward_jacobian_vec_prod",E,r_Ba,14,[[[r_ea],["fn"],[r_ea]],[r_ea]]],[10,"central_jacobian_vec_prod",E,r_Ba,14,[[[r_ea],["fn"],[r_ea]],[r_ea]]],[10,"forward_jacobian_pert",E,E,14,N],[10,"central_jacobian_pert",E,E,14,N],[10,"forward_hessian",E,"Calculation of the Hessian using forward differences",14,N],[10,"central_hessian",E,"Calculation of the Hessian using central differences",14,N],[10,"forward_hessian_vec_prod",E,r_Ca,14,[[[r_ea],["fn"],[r_ea]],[r_ea]]],[10,"central_hessian_vec_prod",E,r_Ca,14,[[[r_ea],["fn"],[r_ea]],[r_ea]]],[10,"forward_hessian_nograd",E,"Calculation of the Hessian using forward differences…",14,N],[10,"forward_hessian_nograd_sparse",E,"Calculation of a sparse Hessian using forward differences…",14,N],[3,r_yc,E,"Perturbation Vector for the accelerated computation of the…",N,N],[12,"x_idx",E,"x indices",15,N],[12,"r_idx",E,"correspoding function indices",15,N],[6,"PerturbationVectors",E,"A collection of `PerturbationVector`s",N,N],[8,r_zc,r_aa,r_Da,N,N],[10,"dot",E,r_Da,16,[[[r_ea],[T]],[U]]],[8,r_Ac,E,"Dot/scalar product of `T` and `self` weighted by W (p^TWv)",N,N],[10,"weighted_dot",E,r_Da,17,[[[r_ea],["v"],[T]],[U]]],[8,r_Bc,E,"Return param vector of all zeros (for now, this is a hack.…",N,N],[10,"zero_like",E,r_Ea,18,[[[r_ea]],[r_ea]]],[10,"zero",E,r_Ea,18,[[],[r_ea]]],[8,r_Cc,E,E,N,N],[10,"eye",E,E,19,[[[r_xa]],[r_ea]]],[10,"eye_like",E,E,19,[[[r_ea]],[r_ea]]],[8,r_Dc,E,r_Fa,N,N],[10,"add",E,r_Fa,20,[[[r_ea],[T]],[U]]],[8,r_Ec,E,r_Ga,N,N],[10,"sub",E,r_Ga,21,[[[r_ea],[T]],[U]]],[8,r_Fc,E,r_Ha,N,N],[10,"mul",E,r_Ha,22,[[[r_ea],[T]],[U]]],[8,r_Gc,E,r_Ia,N,N],[10,"div",E,r_Ia,23,[[[r_ea],[T]],[U]]],[8,r_Hc,E,r_Ja,N,N],[10,"scaled_add",E,r_Ja,24,[[[r_ea],[U],[T]],["v"]]],[8,r_Ic,E,r_Ka,N,N],[10,"scaled_sub",E,r_Ka,25,[[[r_ea],[U],[T]],["v"]]],[8,r_Jc,E,r_La,N,N],[10,"norm",E,r_La,26,[[[r_ea]],[U]]],[8,r_Kc,E,E,N,N],[10,T,E,E,27,[[[r_ea]],[r_ea]]],[8,r_Lc,E,"Compute the inverse (`T`) of `self`",N,N],[10,"inv",E,E,28,[[[r_ea]],[r_ga,[r_ha]]]],[8,r_Mc,E,"Defines the interface to a solver. Usually, there is no…",N,N],[10,r_Ma,E,"apply cost function or operator to a parameter vector",29,N],[10,r_Na,E,"compute the gradient for a parameter vector",29,N],[10,r_Oa,E,"compute the hessian for a parameter vector",29,N],[10,r_Pa,E,"modify the parameter vector",29,N],[10,r_Qa,E,"return current parameter vector",29,N],[10,r_Ra,E,r_Ta,29,N],[10,r_Sa,E,r_Ta,29,N],[10,r_Ua,E,r_Za,29,N],[10,r_Va,E,r_Xa,29,N],[10,r_Wa,E,r_Xa,29,N],[10,r_Ya,E,r_Za,29,N],[10,"run",E,"Execute the optimization algorithm.",29,[[[r_ea]],[r_ga,[r_0a,r_ha]]]],[10,"run_fast",E,"Execute the optimization algorithm without Ctrl-C…",29,[[[r_ea]],[r_ga,[r_0a,r_ha]]]],[10,r_ga,E,"Returns the best solution found during optimization.",29,[[[r_ea]],[r_0a]]],[10,r_1a,E,"Set termination reason (doesn't terminate yet! -- this is…",29,[[[r_ea],[r_ma]]]],[10,"terminate",E,"Evaluate all stopping criterions and return the…",29,[[[r_ea]],[r_ma]]],[10,r_2a,E,"Set max number of iterations.",29,[[[r_ea],[r_ja]]]],[10,r_3a,E,"Get max number of iterations.",29,[[[r_ea]],[r_ja]]],[10,r_4a,E,"Get current iteration number.",29,[[[r_ea]],[r_ja]]],[10,r_5a,E,"Increment the iteration number by one",29,[[[r_ea]]]],[10,r_6a,E,r_8a,29,[[[r_ea]],[r_ia]]],[10,r_7a,E,r_8a,29,[[[r_ea],[r_ia]]]],[10,r_9a,E,"Get best cost function value",29,[[[r_ea]],[r_ia]]],[10,r_ab,E,"set best cost value",29,[[[r_ea],[r_ia]]]],[10,r_bb,E,"Set the target cost function value which is used as a…",29,[[[r_ea],[r_ia]]]],[10,r_cb,E,"Add a logger to the array of loggers",29,[[[r_ea],[r_qa,[r_ra]]]]],[10,r_db,E,"Add a writer to the array of writers",29,[[[r_ea],[r_qa,[r_ta]]]]],[10,"base_reset",E,"Reset the base of the algorithm to its initial state",29,[[[r_ea]]]],[10,r_eb,E,r_fb,29,[[[r_ea]]]],[10,r_gb,E,r_hb,29,[[[r_ea],[r_ja]]]],[10,r_ib,E,r_jb,29,[[[r_ea]],[r_ja]]],[10,r_kb,E,r_lb,29,[[[r_ea]]]],[10,r_mb,E,r_nb,29,[[[r_ea],[r_ja]]]],[10,r_ob,E,r_ka,29,[[[r_ea]],[r_ja]]],[10,r_pb,E,r_qb,29,[[[r_ea]]]],[10,r_rb,E,r_sb,29,[[[r_ea],[r_ja]]]],[10,r_tb,E,r_ka,29,[[[r_ea]],[r_ja]]],[8,r_Nc,E,"Main part of every solver: `next_iter` computes one…",N,N],[16,r_zb,E,"Parameter vectors",30,N],[16,r_ub,E,"Output of the operator",30,N],[16,r_vb,E,r_vb,30,N],[10,"next_iter",E,"Computes one iteration of the algorithm.",30,[[[r_ea]],[r_ga,["argminiterationdata",r_ha]]]],[11,"init",E,"Initializes the algorithm",30,[[[r_ea]],[r_ga,[r_ha]]]],[8,r_Oc,E,"Defince the interface every logger needs to expose",N,N],[10,r_wb,E,"Logs general information (a message `msg` and/or key-value…",31,[[[r_ea],[r_va],[r_fa]],[r_ga,[r_ha]]]],[10,r_xb,E,"Logs information from iterations. Only accepts key-value…",31,[[[r_ea],[r_fa]],[r_ga,[r_ha]]]],[8,r_Pc,E,"Every writer (which is something that writes parameter…",N,N],[16,"Param",E,E,32,N],[10,r_yb,E,"Writes the parameter vector somewhere",32,N],[8,r_Qc,E,"This trait needs to be implemented for every operator/cost…",N,N],[16,r_zb,E,"Type of the parameter vector",33,N],[16,r_ub,E,"Output of the operator. Most solvers expect `f64`.",33,N],[16,r_vb,E,"Type of Hessian",33,N],[11,r_Ma,E,"Applies the operator/cost function to parameters",33,N],[11,r_Na,E,"Computes the gradient at the given parameters",33,N],[11,r_Oa,E,"Computes the hessian at the given parameters",33,N],[11,r_Pa,E,"Modifies a parameter vector. Comes with a variable that…",33,N],[8,r_Rc,E,"Defines a common interface to line search methods.…",N,N],[10,"set_initial_parameter",E,"Set the initial parameter (starting point)",34,N],[10,"set_search_direction",E,"Set the search direction",34,N],[10,"set_initial_alpha",E,r_Ab,34,[[[r_ea],[r_ia]],[r_ga,[r_ha]]]],[10,"set_initial_cost",E,"Set the cost function value at the starting point as…",34,[[[r_ea],[r_ia]]]],[10,"set_initial_gradient",E,"Set the gradient at the starting point as opposed to…",34,N],[10,"calc_initial_cost",E,"calculate the initial cost function value using an…",34,[[[r_ea]],[r_ga,[r_ha]]]],[10,"calc_initial_gradient",E,"calculate the initial gradient using an operator as…",34,[[[r_ea]],[r_ga,[r_ha]]]],[8,r_Sc,E,"Defines a common interface to methods which calculate…",N,N],[10,"set_radius",E,r_Ab,35,[[[r_ea],[r_ia]]]],[10,"set_grad",E,r_Bb,35,N],[10,"set_hessian",E,r_Bb,35,N],[8,r_Tc,E,"Every method for the update of beta needs to implement…",N,N],[10,"update",E,"Update beta Parameter 1: \\nabla f_k Parameter 2: \\nabla…",36,[[[r_ea],[T],[T],[T]],[r_ia]]],[11,r_ua,E,r_pa,37,[[[T],[r_ia]],[r_ea]]],[11,r_Cb,E,"Returns the parameter vector",37,[[[r_ea]],[T]]],[11,"cost",E,"Returns the cost function value",37,[[[r_ea]],[r_ia]]],[11,"add_kv",E,"Adds an `ArgminKV`",37,[[[r_ea],[r_fa]],[r_ea]]],[11,"get_kv",E,"Returns an `ArgminKV`",37,[[[r_ea]],[r_2b,[r_fa]]]],[14,"make_kv",E,"Creates an `ArgminKV` at compile time in order to avoid…",N,N],[14,"check_param",E,"Release an `T` from an `Option<T>` if it is not `None`. If…",N,N],[11,r_Jb,E,E,38,[[[r_ea]],[r_Kb]]],[11,r_Lb,E,E,38,[[[T]],[T]]],[11,r_Mb,E,E,38,[[[r_ea]],[U]]],[11,r_Db,E,E,38,[[[U]],[r_ga]]],[11,r_Eb,E,E,38,[[[r_ea]],[T]]],[11,r_Fb,E,E,38,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,38,[[[r_ea]],[T]]],[11,r_Ib,E,E,38,[[[r_ea]],[r_ga]]],[11,r_Pb,E,E,38,[[[r_ea]],[r_Rb]]],[11,r_Lb,E,E,4,[[[T]],[T]]],[11,r_Mb,E,E,4,[[[r_ea]],[U]]],[11,r_Nb,E,E,4,[[[r_ea]],[T]]],[11,r_Ob,E,E,4,N],[11,r_Db,E,E,4,[[[U]],[r_ga]]],[11,r_Eb,E,E,4,[[[r_ea]],[T]]],[11,r_Fb,E,E,4,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,4,[[[r_ea]],[T]]],[11,r_Ib,E,E,4,[[[r_ea]],[r_ga]]],[11,r_Jb,E,E,0,[[[r_ea]],[r_Kb]]],[11,r_Lb,E,E,0,[[[T]],[T]]],[11,r_Mb,E,E,0,[[[r_ea]],[U]]],[11,r_Nb,E,E,0,[[[r_ea]],[T]]],[11,r_Ob,E,E,0,N],[11,r_Db,E,E,0,[[[U]],[r_ga]]],[11,r_Eb,E,E,0,[[[r_ea]],[T]]],[11,r_Fb,E,E,0,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,0,[[[r_ea]],[T]]],[11,r_Ib,E,E,0,[[[r_ea]],[r_ga]]],[11,r_Lb,E,E,5,[[[T]],[T]]],[11,r_Mb,E,E,5,[[[r_ea]],[U]]],[11,r_Nb,E,E,5,[[[r_ea]],[T]]],[11,r_Ob,E,E,5,N],[11,r_Db,E,E,5,[[[U]],[r_ga]]],[11,r_Eb,E,E,5,[[[r_ea]],[T]]],[11,r_Fb,E,E,5,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,5,[[[r_ea]],[T]]],[11,r_Ib,E,E,5,[[[r_ea]],[r_ga]]],[11,r_Lb,E,E,6,[[[T]],[T]]],[11,r_Mb,E,E,6,[[[r_ea]],[U]]],[11,r_Nb,E,E,6,[[[r_ea]],[T]]],[11,r_Ob,E,E,6,N],[11,r_Db,E,E,6,[[[U]],[r_ga]]],[11,r_Eb,E,E,6,[[[r_ea]],[T]]],[11,r_Fb,E,E,6,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,6,[[[r_ea]],[T]]],[11,r_Ib,E,E,6,[[[r_ea]],[r_ga]]],[11,r_Lb,E,E,7,[[[T]],[T]]],[11,r_Mb,E,E,7,[[[r_ea]],[U]]],[11,r_Db,E,E,7,[[[U]],[r_ga]]],[11,r_Eb,E,E,7,[[[r_ea]],[T]]],[11,r_Fb,E,E,7,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,7,[[[r_ea]],[T]]],[11,r_Ib,E,E,7,[[[r_ea]],[r_ga]]],[11,r_Lb,E,E,8,[[[T]],[T]]],[11,r_Mb,E,E,8,[[[r_ea]],[U]]],[11,r_Nb,E,E,8,[[[r_ea]],[T]]],[11,r_Ob,E,E,8,N],[11,r_Db,E,E,8,[[[U]],[r_ga]]],[11,r_Eb,E,E,8,[[[r_ea]],[T]]],[11,r_Fb,E,E,8,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,8,[[[r_ea]],[T]]],[11,r_Ib,E,E,8,[[[r_ea]],[r_ga]]],[11,r_Jb,E,E,1,[[[r_ea]],[r_Kb]]],[11,r_Lb,E,E,1,[[[T]],[T]]],[11,r_Mb,E,E,1,[[[r_ea]],[U]]],[11,r_Nb,E,E,1,[[[r_ea]],[T]]],[11,r_Ob,E,E,1,N],[11,r_Db,E,E,1,[[[U]],[r_ga]]],[11,r_Eb,E,E,1,[[[r_ea]],[T]]],[11,r_Fb,E,E,1,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,1,[[[r_ea]],[T]]],[11,r_Ib,E,E,1,[[[r_ea]],[r_ga]]],[11,r_Lb,E,E,37,[[[T]],[T]]],[11,r_Mb,E,E,37,[[[r_ea]],[U]]],[11,r_Db,E,E,37,[[[U]],[r_ga]]],[11,r_Eb,E,E,37,[[[r_ea]],[T]]],[11,r_Fb,E,E,37,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,37,[[[r_ea]],[T]]],[11,r_Ib,E,E,37,[[[r_ea]],[r_ga]]],[11,r_Jb,E,E,2,[[[r_ea]],[r_Kb]]],[11,r_Lb,E,E,2,[[[T]],[T]]],[11,r_Mb,E,E,2,[[[r_ea]],[U]]],[11,r_Db,E,E,2,[[[U]],[r_ga]]],[11,r_Eb,E,E,2,[[[r_ea]],[T]]],[11,r_Fb,E,E,2,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,2,[[[r_ea]],[T]]],[11,r_Ib,E,E,2,[[[r_ea]],[r_ga]]],[11,r_Pb,E,E,2,[[[r_ea]],[r_Rb]]],[11,r_Jb,E,E,3,[[[r_ea]],[r_Kb]]],[11,r_Lb,E,E,3,[[[T]],[T]]],[11,r_Mb,E,E,3,[[[r_ea]],[U]]],[11,r_Nb,E,E,3,[[[r_ea]],[T]]],[11,r_Ob,E,E,3,N],[11,r_Db,E,E,3,[[[U]],[r_ga]]],[11,r_Eb,E,E,3,[[[r_ea]],[T]]],[11,r_Fb,E,E,3,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,3,[[[r_ea]],[T]]],[11,r_Ib,E,E,3,[[[r_ea]],[r_ga]]],[11,r_Lb,r_ya,E,9,[[[T]],[T]]],[11,r_Mb,E,E,9,[[[r_ea]],[U]]],[11,r_Db,E,E,9,[[[U]],[r_ga]]],[11,r_Eb,E,E,9,[[[r_ea]],[T]]],[11,r_Fb,E,E,9,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,9,[[[r_ea]],[T]]],[11,r_Ib,E,E,9,[[[r_ea]],[r_ga]]],[11,r_Lb,r_Qb,E,15,[[[T]],[T]]],[11,r_Mb,E,E,15,[[[r_ea]],[U]]],[11,r_Nb,E,E,15,[[[r_ea]],[T]]],[11,r_Ob,E,E,15,N],[11,r_Db,E,E,15,[[[U]],[r_ga]]],[11,r_Eb,E,E,15,[[[r_ea]],[T]]],[11,r_Fb,E,E,15,[[[r_ea]],[r_Gb]]],[11,r_Hb,E,E,15,[[[r_ea]],[T]]],[11,r_Ib,E,E,15,[[[r_ea]],[r_ga]]],[11,r_4b,r_aa,E,38,[[[r_ea],[r_Sb]],[r_ga,[r_ha]]]],[11,r_Pb,E,E,38,[[[r_ea]],[r_Rb]]],[11,"as_ref",E,E,38,[[[r_ea]],[r_Rb]]],[11,r_4b,E,E,38,[[[r_ea],[r_Sb]],[r_ga,[r_ha]]]],[11,r_Lb,E,E,38,[[["f"]],[r_ha]]],[11,r_Xb,r_Qb,E,15,[[],[r_Tb]]],[11,r_Yb,E,E,15,[[[r_ea]],[r_Tb]]],[11,r_wb,r_aa,r_Ub,5,[[[r_ea],[r_va],[r_fa]],[r_ga,[r_ha]]]],[11,r_xb,E,r_Vb,5,[[[r_ea],[r_fa]],[r_ga,[r_ha]]]],[11,r_wb,E,r_Ub,6,[[[r_ea],[r_va],[r_fa]],[r_ga,[r_ha]]]],[11,r_xb,E,r_Vb,6,[[[r_ea],[r_fa]],[r_ga,[r_ha]]]],[11,r_yb,E,E,7,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,r_yb,E,E,8,[[[r_ea],[T]],[r_ga,[r_ha]]]],[11,"eq",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,"ne",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,"eq",E,E,1,[[[r_ea],[r_0a]],[r_Wb]]],[11,"eq",E,E,3,[[[r_ea],[r_ma]],[r_Wb]]],[11,r_Xb,E,E,0,[[],[r_fa]]],[11,r_Xb,E,E,6,[[],[r_Zb]]],[11,r_Xb,E,E,8,[[],[r_0b]]],[11,r_Xb,E,E,1,[[],[r_0a]]],[11,r_Xb,E,E,3,[[],[r_ea]]],[11,r_Yb,E,E,4,[[[r_ea]],["argminbase"]]],[11,r_Yb,E,E,0,[[[r_ea]],[r_fa]]],[11,r_Yb,E,E,5,[[[r_ea]],["argminsloglogger"]]],[11,r_Yb,E,E,6,[[[r_ea]],[r_Zb]]],[11,r_Yb,E,E,8,[[[r_ea]],[r_0b]]],[11,r_Yb,E,E,1,[[[r_ea]],[r_0a]]],[11,r_Yb,E,E,3,[[[r_ea]],[r_ma]]],[11,"cmp",E,E,0,[[[r_ea],[r_fa]],[r_1b]]],[11,"cmp",E,E,1,[[[r_ea],[r_0a]],[r_1b]]],[11,"cmp",E,E,3,[[[r_ea],[r_ma]],[r_1b]]],[11,"extend",E,E,0,[[[r_ea],["i"]]]],[11,r_3b,E,E,0,[[[r_ea],[r_fa]],[r_2b,[r_1b]]]],[11,"lt",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,"le",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,"gt",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,"ge",E,E,0,[[[r_ea],[r_fa]],[r_Wb]]],[11,r_3b,E,E,1,[[[r_ea],[r_0a]],[r_2b,[r_1b]]]],[11,r_3b,E,E,3,[[[r_ea],[r_ma]],[r_2b,[r_1b]]]],[11,r_4b,E,E,2,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,0,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,1,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,3,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,4,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,2,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,0,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,1,[[[r_ea],[r_Sb]],[r_ga]]],[11,r_4b,E,E,3,[[[r_ea],[r_Sb]],[r_ga]]],[11,"hash",E,E,0,N],[11,"hash",E,E,3,N],[11,"from_iter",E,E,0,[[["i"]],[r_ea]]],[11,r_5b,E,E,4,[[[r_ea],["__s"]],[r_ga]]],[11,r_5b,E,E,0,[[[r_ea],["__s"]],[r_ga]]],[11,r_5b,E,E,1,[[[r_ea],["__s"]],[r_ga]]],[11,r_5b,E,E,3,[[[r_ea],["__s"]],[r_ga]]],[11,r_6b,E,E,0,[[["__d"]],[r_ga]]],[11,r_6b,E,E,1,[[["__d"]],[r_ga]]],[11,r_6b,E,E,3,[[["__d"]],[r_ga]]],[11,"name",E,E,2,[[[r_ea]],[r_2b,[r_va]]]],[11,r_8b,E,E,2,[[[r_ea]],[r_2b,[r_Rb]]]],[11,r_7b,E,E,2,[[[r_ea]],[r_2b,[r_7b]]]],[11,"from_boxed_compat",E,"Creates an `Error` from `Box<std::error::Error>`.",38,[[["box",[r_ha]]],[r_ha]]],[11,r_Pb,E,"Return a reference to the underlying failure that this…",38,[[[r_ea]],[r_Rb]]],[11,"name",E,"Returns the name of the underlying fail.",38,[[[r_ea]],[r_2b,[r_va]]]],[11,r_8b,E,"Returns a reference to the underlying cause of this…",38,[[[r_ea]],[r_Rb]]],[11,r_7b,E,"Gets a reference to the `Backtrace` for this `Error`.",38,[[[r_ea]],[r_7b]]],[11,r_9b,E,"Provides context for this `Error`.",38,[[[r_ea],["d"]],[r_9b]]],[11,r_ac,E,"Wraps `Error` in a compatibility type.",38,[[[r_ea]],[r_ac,[r_ha]]]],[11,"downcast",E,r_cc,38,[[[r_ea]],[r_ga,[r_ha]]]],[11,"find_root_cause",E,"Returns the \"root cause\" of this error - the last value in…",38,[[[r_ea]],[r_Rb]]],[11,"iter_causes",E,"Returns a iterator over the causes of this error with the…",38,[[[r_ea]],[r_bc]]],[11,"iter_chain",E,"Returns a iterator over all fails up the chain from the…",38,[[[r_ea]],[r_bc]]],[11,"downcast_ref",E,r_cc,38,[[[r_ea]],[r_2b]]],[11,"downcast_mut",E,r_cc,38,[[[r_ea]],[r_2b]]],[11,"root_cause",E,"Deprecated alias to `find_root_cause`.",38,[[[r_ea]],[r_Rb]]],[11,r_bc,E,"Deprecated alias to `iter_causes`.",38,[[[r_ea]],[r_bc]]],[11,r_ua,r_ya,E,9,[[["l"],["e"],["p"]],[r_za]]],[11,r_dc,E,r_ec,11,[[[r_ea]],[r_za]]],[11,r_fc,E,r_gc,12,[[[r_ea]],[r_za]]],[11,r_hc,E,r_ic,13,[[[r_ea]],[r_za]]],[11,r_ua,r_Qb,"Create a new empty `PerturbationVector`",15,[[],[r_Tb]]],[11,"add",E,"Add an index `x_idx` and the corresponding function…",15,[[[r_ea],[r_xa],["vec",[r_xa]]],[r_Tb]]]],"p":[[3,r_jc],[3,r_kc],[4,r_lc],[4,r_mc],[3,r_nc],[3,r_oc],[3,r_pc],[3,r_qc],[3,r_rc],[3,r_sc],[8,r_tc],[8,r_uc],[8,r_vc],[8,r_wc],[8,r_xc],[3,r_yc],[8,r_zc],[8,r_Ac],[8,r_Bc],[8,r_Cc],[8,r_Dc],[8,r_Ec],[8,r_Fc],[8,r_Gc],[8,r_Hc],[8,r_Ic],[8,r_Jc],[8,r_Kc],[8,r_Lc],[8,r_Mc],[8,r_Nc],[8,r_Oc],[8,r_Pc],[8,r_Qc],[8,r_Rc],[8,r_Sc],[8,r_Tc],[3,r_Uc],[3,r_Vc]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
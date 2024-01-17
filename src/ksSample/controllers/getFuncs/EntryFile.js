import {
    GetFunc as GetFuncRepo, GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncRepo, GetFromModalFunc as GetFromModalFuncRepo,
    GetIdFunc as GetIdFuncRepo, GetBodyCheckFunc as GetBodyCheckFuncRepo
} from '../../repos/getFuncs/EntryFile.js';


let GetFunc = async (req, res) => {
    let LocalFromRepo = await GetFuncRepo();

    res.json(LocalFromRepo);
};

let GetDataOnlyFunc = async (req, res) => {
    let LocalFromRepo = await GetDataOnlyFuncRepo();

    res.json(LocalFromRepo);
};
let GetIdFunc = (req, res) => {
    let LocalParams = req.params;
    let LocalIfFromParam = LocalParams.id;

    let LocalFromRepo = GetIdFuncRepo({ inId: LocalIfFromParam });
    res.json(LocalFromRepo);
};

let GetFromModalFunc = (req, res) => {
    let LocalFromRepo = GetFromModalFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidAndTSFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidAndTSFuncRepo();
    res.json(LocalFromRepo);
};

let GetBodyCheckFunc = async (req, res) => {
    let LocalFromRepo = await GetBodyCheckFuncRepo();
    res.json(LocalFromRepo);
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc,
    GetBodyCheckFunc
};
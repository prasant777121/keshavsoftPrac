import { GetFunc as GetFuncRepo } from '../../repos/getFuncs/EntryFile.js';

let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo({
        inResponse: res,
        callback: () => {
        }
    });
    // console.log("LocalFromRepo:", LocalFromRepo);

    // res.json(LocalFromRepo);
};


export {
    GetFunc
};
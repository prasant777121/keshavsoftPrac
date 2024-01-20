import { ColumnsPullFunc } from '../../DataColumns.js';

import {
    PutFunc as PutFuncRepo
} from '../../repos/putFuncs/EntryFile.js';

let PutFunc = async (req, res) => {
    let LocalDataToUpdate = ColumnsPullFunc()(req.body);

    let LocalFromRepo = await PutFuncRepo({ ...LocalDataToUpdate });
    res.json(LocalFromRepo);
};

export {
    PutFunc
};

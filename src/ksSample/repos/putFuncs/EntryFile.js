import {
    PutFunc as PutFuncDalsForSequelize
} from '../../dalsForSequelize/putFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let PutFunc = async (inModalObject) => {
    if (configJson.isSequelize) {
        return await PutFuncDalsForSequelize(inModalObject);
    };

    return PutFuncDal({ inBodyKeys: inModalObject });
};

export {
    PutFunc
};


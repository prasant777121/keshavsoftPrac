import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalsForSequelize,
    GetBodyCheckFunc as GetBodyCheckFuncFromSequelize,
    GetFuncById as GetFuncByIdForSequelize,GetRowCountFunc as GetRowCountFuncFromSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let GetFunc = async () => {
    if (configJson.isSequelize) {
        return await GetFuncDalsForSequelize();
    };

    return GetFuncDal();
};

let GetDataOnlyFunc = async () => {
    if (configJson.isSequelize) {
        return await GetFuncDalsForSequelize();
    };

    return GetDataOnlyFuncDal();
};
let GetIdFunc = async ({ inId }) => {
    if (configJson.isSequelize) {
        return await GetFuncByIdForSequelize({ inId });
    };
    return GetIdFuncDal({ inId });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    if (configJson.isSequelize) {
        let LocalFromSequelize = await GetBodyCheckFuncFromSequelize();
        return LocalFromSequelize;
    };

    return GetFuncDal();
};

let GetRowCountFunc = async () => {
    if (configJson.isSequelize) {
        let LocalFromSequelize = await GetRowCountFuncFromSequelize();
        return LocalFromSequelize;
    };

    return GetFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc,GetRowCountFunc
};
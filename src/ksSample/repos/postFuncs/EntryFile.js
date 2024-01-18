import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostFunc as PostFuncDalsForSequelize, PostUploadFromModalFunc as PostUploadFromModalFuncDalsForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let PostFunc = async (inModalObject) => {
    if (configJson.isSequelize) {
        return await PostFuncDalsForSequelize(inModalObject);
    };

    return PostFuncDal({ inBodyKeys: inModalObject });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = async ({ LocalBodyAsModal }) => {
    if (configJson.isSequelize) {
        return await PostUploadFromModalFuncDalsForSequelize({ inDataToInsert: LocalBodyAsModal });
    };

    return PostUploadFromModalFuncDal({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

export {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
};
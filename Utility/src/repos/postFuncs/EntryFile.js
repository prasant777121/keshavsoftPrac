import {
    PostGetUserFunc as PostGetUserFuncDal
} from '../../dals/postFuncs/EntryFile.js';

import {
    PostGetUserFunc as PostGetUserFuncForSequelize
} from '../../dalsForSequelize/postFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let PostGetUserFunc = async ({ inUserName, inPassword }) => {
    if (configJson.isSequelize) {
        return await PostGetUserFuncForSequelize({ inUserName, inPassword });
    };
    return PostGetUserFuncDal({ LocalBodyAsModal });
};

export {
    PostGetUserFunc
};
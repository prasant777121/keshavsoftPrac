import { DeleteFunc as DeleteFuncDal } from '../../dals/DeleteFuncs/EntryFile.js';
import { DeleteFunc as DeleteSequelizeFuncDal } from '../../dalsForSequelize/DeleteFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let DeleteFunc = async ({ inId }) => {
    if (configJson.isSequelize) {
        return await DeleteSequelizeFuncDal({inId});
    };

    return await DeleteFuncDal({ inId });
};

export { DeleteFunc };
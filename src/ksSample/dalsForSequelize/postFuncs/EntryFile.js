import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';
import { StartFunc as StartFuncImportToFile } from '../../kSequelize/WriteFileList/ImportToFile.js';

let PostFunc = async (inModalObject) => {
    return await StartFuncwriteFile({ inDataToInsert: inModalObject });
};

let PostUploadFromModalFunc = async ({ inDataToInsert }) => {
    return await StartFuncImportToFile({ inDataToInsert });
};

export {
    PostFunc, PostUploadFromModalFunc
};
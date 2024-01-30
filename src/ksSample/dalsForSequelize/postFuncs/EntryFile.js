import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';
import { StartFunc as StartFuncImportToFile } from '../../kSequelize/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncreadFileUserAndPassword } from '../../kSequelize/ReadFileList/readFileUserAndPassword.js';

let PostFunc = async (inModalObject) => {
    return await StartFuncwriteFile({ inDataToInsert: inModalObject });
};

let PostUploadFromModalFunc = async ({ inDataToInsert }) => {
    return await StartFuncImportToFile({ inDataToInsert });
};


let PostGetUserFunc = async ({ LocalBodyAsModal }) => {
    return await StartFuncreadFileUserAndPassword({ LocalBodyAsModal });
};

export {
    PostFunc, PostUploadFromModalFunc, PostGetUserFunc
};
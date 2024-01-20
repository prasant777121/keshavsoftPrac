import { StartFunc as StartFuncUpdateTableRow } from '../../kSequelize/UpdateTableRow/AllColumns.js';

let PutFunc = async (inModalObject) => {
    return await StartFuncUpdateTableRow({ inDataToUpdate: inModalObject });
};

export {
    PutFunc
};
import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';
import { StartFunc as StartFunreadFileFromId } from '../../kSequelize/ReadFileList/readFileFromId.js';
// import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';
import { ColumnsForAlter as ColumnsForAlterInTableColumns } from '../../kSequelize/modals/GetTableInfo/TableColumns.js';

let GetFunc = async () => {
    return await StartFuncreadFile();
};

let GetFuncById = async ({ inId }) => {
    return await StartFunreadFileFromId({ inId });
};

let GetBodyCheckFunc = async () => {
    let LocalColumnsObject = await ColumnsForAlterInTableColumns();
    return await ColumnsForAlterInTableColumns();
};

export {
    GetFunc, GetBodyCheckFunc, GetFuncById
};
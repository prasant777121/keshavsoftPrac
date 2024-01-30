import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';
import { StartFunc as StartFunreadFileFromId } from '../../kSequelize/ReadFileList/readFileFromId.js';
// import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';
import { ColumnsForAlter as ColumnsForAlterInTableColumns } from '../../kSequelize/modals/GetTableInfo/TableColumnsAsObject.js';
import { StartFunc as StartFuncRowCount } from '../../kSequelize/ReadFileList/rowCount.js';


let GetFunc = async () => {
    return await StartFuncreadFile();
};

let GetFuncById = async ({ inId }) => {
    return await StartFunreadFileFromId({ inId });
};

let GetBodyCheckFunc = async () => {
    let LocalColumnsObject = await ColumnsForAlterInTableColumns();

    return await LocalColumnsObject;
};

let GetRowCountFunc = async () => {
    return await StartFuncRowCount();
};

export {
    GetFunc, GetBodyCheckFunc, GetFuncById,GetRowCountFunc
};
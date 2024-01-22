import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';
import { StartFunc as StartFunreadFileFromId } from '../../kSequelize/ReadFileList/readFileFromId.js';
// import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';
import { ColumnsForAlter as ColumnsForAlterInTableColumns } from '../../kSequelize/modals/GetTableInfo/TableColumnsAsObject.js';

let GetFunc = async () => {
    return await StartFuncreadFile();
};

let GetFuncById = async ({ inId }) => {
    return await StartFunreadFileFromId({ inId });
};

let GetBodyCheckFunc = async () => {
    let LocalColumnsObject = await ColumnsForAlterInTableColumns();

    // Object.entries(LocalColumnsObject).forEach(
    //     ([key, value]) => {
    //         value = value.defaultValue;
    //     }
    // );

    // for (const property in LocalColumnsObject) {
    //     if ("defaultValue" in LocalColumnsObject[property] && LocalColumnsObject[property].defaultValue === undefined === false) {
    //         LocalColumnsObject[property] = LocalColumnsObject[property].defaultValue;
    //     } else {
    //         if (LocalColumnsObject[property].type === "NUMBER") {
    //             LocalColumnsObject[property] = 0;
    //         };

    //         LocalColumnsObject[property] = "";
    //     };
    // };

    return await LocalColumnsObject;
};

export {
    GetFunc, GetBodyCheckFunc, GetFuncById
};
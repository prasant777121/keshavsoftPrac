import {
    AllColumns as AllColumnsFromTableColumns,
    ColumnsForAlter as ColumnsForAlterFromTableColumns
} from './TableColumns.js';

let AllColumns = async () => {
    let LocalTableName = await AllColumnsFromTableColumns();

    return await LocalTableName;
};

let ColumnsForAlter = async () => {
    let LocalTableName = await ColumnsForAlterFromTableColumns();

    return await LocalTableName;
};

export { AllColumns, ColumnsForAlter };
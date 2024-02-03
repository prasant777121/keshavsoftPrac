import { StartFunc as StartFuncInitializeSequelize } from '../../../../kSequelize/initializeSequelize.js';
import tableNameJson from '../../../tableName.json' assert { type: 'json' };

let AllColumns = async () => {
    let LocalTableName = tableNameJson.tableName;

    const sequelize = await StartFuncInitializeSequelize();

    let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(LocalTableName);

    return await LocalColumnsInfo;
};

let ColumnsForAlter = async () => {
    let LocalTableName = tableNameJson.tableName;

    const sequelize = await StartFuncInitializeSequelize();

    let LocalColumnsInfo = await sequelize.getQueryInterface().describeTable(LocalTableName);

    delete LocalColumnsInfo.id;
    delete LocalColumnsInfo.createdAt;
    delete LocalColumnsInfo.updatedAt;
    
    return await LocalColumnsInfo;
};

export { AllColumns, ColumnsForAlter };
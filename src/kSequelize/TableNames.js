import { StartFunc as StartFuncInitializeSequelize } from './initializeSequelize.js';

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    let LocalTablesData = await sequelize.getQueryInterface().showAllSchemas();
    let k1 = await sequelize.getQueryInterface().describeTable("ksSample");

    return await LocalTablesData;
};

export { StartFunc };
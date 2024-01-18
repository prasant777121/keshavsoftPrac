import { StartFunc as StartFuncInitializeSequelize } from './initializeSequelize.js';

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    let LocalTablesData = await sequelize.getQueryInterface().showAllSchemas();

    return await LocalTablesData;
};

export { StartFunc };
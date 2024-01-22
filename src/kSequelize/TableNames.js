import { StartFunc as StartFuncInitializeSequelize } from './initializeSequelize.js';

import dotenv from 'dotenv';
dotenv.config();

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    let LocalTablesData;

    try {
        LocalTablesData = await sequelize.getQueryInterface().showAllSchemas();

    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await LocalTablesData;
};

export { StartFunc };
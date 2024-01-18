import { Sequelize, DataTypes } from "sequelize";

import columnsJson from './modals/columns.json' assert {type: 'json'};

import dotenv from 'dotenv';
dotenv.config();

let commonDbName = `KData/JSON/316/data.db`

let StartFunc = async () => {
    let LocalPassword = process.env.KS_SQLITE_PASSWORD;

    const sequelize = new Sequelize("database", "", LocalPassword, {
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonDbName}` // You can specify the path for your SQLite database file
    });

    columnsJson.Name.type = DataTypes.STRING;
    columnsJson.Mobile.type = DataTypes.NUMBER;

    sequelize.define('sample', columnsJson, { freezeTableName: true }
    );

    sequelize.sync({ force: true });
};

StartFunc().then();

// export { StartFunc };
import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kSequelize/modals";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });
};

let LocalFuncForreadFile = ({ inElement, inTo, inTypeName }) => {
    let LocalFileName = "columns.json";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    let LocalFileData1 = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`);

    console.log("LocalfileNameJsonData : ",LocalfileNameJsonData);
  //  LocalfileNameJsonData.fileName = `${LocalElement}.json`;

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };


import { Sequelize, DataTypes } from "sequelize";
import { dataColumns } from './modals/prepareColumns.js';

import columnsJson from './modals/columns.json' assert {type: 'json'};

import dotenv from 'dotenv';
dotenv.config();

let commonDbName = `sample.db`

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
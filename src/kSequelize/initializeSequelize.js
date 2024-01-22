import { Sequelize, DataTypes } from "sequelize";
import Configjson from '../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = async () => {
    if ("KS_SQLITE_PASSWORD" in process.env === false) {
        console.log("KS_SQLITE_PASSWORD not found in .env file")
    };

    let sequelize;

    try {
        let LocalPassword = process.env.KS_SQLITE_PASSWORD;

        sequelize = new Sequelize("database", "", LocalPassword, {
            dialect: 'sqlite',
            logging: false,
            dialectModulePath: '@journeyapps/sqlcipher',
            storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
        });

    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await sequelize;
};

export { StartFunc };
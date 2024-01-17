import { Sequelize } from "sequelize";
import Configjson from '../../../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = () => {
    let LocalPassword = process.env.KS_EMAIL_PUBLIC;

    const sequelize = new Sequelize("database", "", LocalPassword, {
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
    });

    return sequelize;
};

export { StartFunc };
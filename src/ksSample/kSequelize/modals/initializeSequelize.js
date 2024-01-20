import { Sequelize } from "sequelize";
import Configjson from '../../../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = () => {
    if ("KS_SQLITE_PASSWORD" in process.env === false) {
        console.log("KS_SQLITE_PASSWORD not found in .env file")        
    };
    
    let LocalPassword = process.env.KS_SQLITE_PASSWORD;

    const sequelize = new Sequelize("database", "", LocalPassword, {
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
    });

    return sequelize;
};

export { StartFunc };
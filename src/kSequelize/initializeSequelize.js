import { Sequelize } from "sequelize";
import Configjson from '../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = async () => {
    let sequelize;

    try {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            logging: false,
            storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
        });

    } catch (error) {
        return await { KTF: false, KReason: error, ErrorFrom: process.cwd() };
    };

    return await sequelize;
};

export { StartFunc };
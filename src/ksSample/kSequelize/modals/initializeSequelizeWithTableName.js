import { Sequelize, DataTypes } from "sequelize";
import Configjson from '../../../Config.json' assert { type: 'json' };
import ColumnsJson from './columns.json' assert { type: 'json' };
import tableNameJson from '../../tableName.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = async () => {
    let LocalTableName = tableNameJson.tableName;

    if ("KS_SQLITE_PASSWORD" in process.env === false) {
        console.log("KS_SQLITE_PASSWORD not found in .env file")
    }
    let LocalPassword = process.env.KS_SQLITE_PASSWORD;

    const sequelize = new Sequelize("database", "", LocalPassword, {
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
    });

    let LocalColumnsNeeded = ColumnsJson.find(element => element.tableName === LocalTableName);

    Object.entries(LocalColumnsNeeded.tableColumns).forEach(
        ([key, value]) => {
            if (value.type === "STRING") {
                value.type = DataTypes.STRING;
            };

            if (value.type === "NUMBER") {
                value.type = DataTypes.NUMBER;
            };
        }
    );

    return await sequelize.define(LocalTableName, LocalColumnsNeeded.tableColumns, { freezeTableName: true });
};

export { StartFunc };
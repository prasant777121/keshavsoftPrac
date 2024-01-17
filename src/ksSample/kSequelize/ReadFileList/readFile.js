import { Sequelize, DataTypes } from "sequelize";
import Configjson from '../../../Config.json' assert { type: 'json' };
import { dataColumns } from '../modals/prepareColumns.js';

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;

let StartFunc = async () => {
    try {
        const sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
        });

        const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
        );

        const users = await Tickets.findAll();

        const records = users.map(function (result) {
            return result.dataValues
        });

        return await records;
    } catch (error) {
        return await error;
    };
};

let StartFunc_15Jan2024 = async () => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${commonJonPth}/${commonDbName}` // You can specify the path for your SQLite database file
    });

    const Tickets = sequelize.define('sample', {
        // Define columns in the Customer table
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    const users = await Tickets.findAll();

    const records = users.map(function (result) {
        return result.dataValues
    })

    // sequelize.sync({ force: true });
    // console.log("users : ", records);
    return await records;
};

export { StartFunc };

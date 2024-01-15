import { Sequelize, DataTypes } from "sequelize";
import { dataColumns } from '../../../src/ksSample/kSequelize/modals/prepareColumns.js';

let commonDbName = "sample.db";

let StartFunc = async () => {
    const sequelize = new Sequelize("database","","password",{
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonDbName}` // You can specify the path for your SQLite database file
    });

    const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
    );

    const users = await Tickets.findAll();

    const records = users.map(function (result) {
        return result.dataValues
    });

    return await records;
};
StartFunc().then(PromiseData => {
    console.log("aaa : ", PromiseData);
});

// export { StartFunc };

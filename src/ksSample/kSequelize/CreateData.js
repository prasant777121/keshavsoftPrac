import { Sequelize, DataTypes } from "sequelize";
import { dataColumns } from './modals/prepareColumns.js';
import dotenv from 'dotenv';
dotenv.config();

let commonDbName = `sample.db`

let StartFunc = async () => {
    let LocalPassword = process.env.KS_EMAIL_PUBLIC;
    console.log("LocalPassword : ", LocalPassword);
    const sequelize = new Sequelize("database", "", "", {
        dialect: 'sqlite',
        dialectModulePath: '@journeyapps/sqlcipher',
        storage: `${commonDbName}` // You can specify the path for your SQLite database file
    });


    const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
    );

    sequelize.sync({ force: true });

};
StartFunc();

// export { StartFunc };
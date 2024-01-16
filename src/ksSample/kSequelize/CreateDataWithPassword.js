import { Sequelize, DataTypes } from "sequelize";
import { dataColumns } from './modals/prepareColumns.js';

let commonDbName = `sample.db`

let StartFunc = async () => {
    const sequelize = new Sequelize("database","","password",{
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
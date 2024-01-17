import { dataColumns } from '../modals/prepareColumns.js';
import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';

let StartFunc = async () => {
    try {
        const sequelize = StartFuncInitializeSequelize();

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

export { StartFunc };

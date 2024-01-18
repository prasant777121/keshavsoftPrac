import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async () => {
    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const users = await LocalTableData.findAll();

        const records = users.map(function (result) {
            return result.dataValues
        });

        return await records;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };

// let StartFunc = async () => {
//     try {
//         const sequelize = StartFuncInitializeSequelize();

//         const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
//         );

//         const users = await Tickets.findAll();

//         const records = users.map(function (result) {
//             return result.dataValues
//         });

//         return await records;
//     } catch (error) {
//         return await error;
//     };
// };

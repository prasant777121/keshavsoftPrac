import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({inId}) => {
    let LocalId=inId;

    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    let LocalFromDelete;

    try {
        LocalFromDelete = await LocalTableData.destroy({ where: { id: LocalId } }); 
        
    } catch (error) {
        return await error;

    }

    return await LocalFromDelete;
};

export { StartFunc };
// let StartFunc = async ({inId}) => {
//     let LocalId=inId;

//     const sequelize = StartFuncInitializeSequelize();

//     const Tickets = sequelize.define('sample', {
//         Name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     }, { freezeTableName: true }
//     );

//     let LocalFromDelete;

//     try {
//         LocalFromDelete = await Tickets.destroy({ where: { id: LocalId } }); 
        
//     } catch (error) {
//         return await error;

//     }

//     return await LocalFromDelete;
// };

// export { StartFunc };


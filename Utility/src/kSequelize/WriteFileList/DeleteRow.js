import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";

let StartFunc = async ({ inId }) => {
  let LocalId = inId;

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

  let LocalFromDelete;

  const LocalFindId = await LocalTableData.findAll({
    where: {
      id: inId,
    },
  });

  if (LocalFindId.length === 0) {
    return await { KTF: false, KReason: "Id not found in data" };
  }

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

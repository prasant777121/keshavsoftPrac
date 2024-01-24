import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inDataToInsert }) => {
    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    if ("KTF" in LocalTableData) {
        if (LocalTableData.KTF === false) {
            return await LocalTableData;
        };
    };

    const LocalFromBuild = await LocalTableData.bulkCreate(inDataToInsert);

    return await LocalFromBuild;
};

export { StartFunc };


import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inUserName, inPassword }) => {
    let localUserName = inUserName;
    let localPassword = inPassword;

    try {
        const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

        const result = await LocalTableData.findOne({
            where: {
                UserName: localUserName,
                Password: localPassword
            },
        });

        return await result.dataValues;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };
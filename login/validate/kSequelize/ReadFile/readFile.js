// import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';
import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../../../../bin/Users/kSequelize/ReadFileList/readFile.js';

let StartFunc = async ({ inUserName, inPassword }) => {
    let localUserName = inUserName;
    let localPassword = inPassword;

    try {
        const LocalUserData = await StartFuncInitializeSequelizeWithTableName();

        let LocalFindUser = LocalUserData.find(element => element.UserName === localUserName && element.Password === localPassword);

        return await LocalFindUser;
    } catch (error) {
        return await error;
    };
};

export { StartFunc };
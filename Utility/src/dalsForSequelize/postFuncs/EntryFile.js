import { StartFunc as StartFuncreadFileUserAndPassword } from '../../kSequelize/ReadFile/readFile.js';

let PostGetUserFunc = async ({ inUserName, inPassword }) => {
    return await StartFuncreadFileUserAndPassword({ inUserName, inPassword });
};

export {
    PostGetUserFunc
};
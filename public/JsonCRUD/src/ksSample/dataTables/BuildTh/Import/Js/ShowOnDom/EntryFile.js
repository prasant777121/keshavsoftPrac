import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = async () => {
    await StartFuncFetchFromFuncs();
};

export { StartFunc };
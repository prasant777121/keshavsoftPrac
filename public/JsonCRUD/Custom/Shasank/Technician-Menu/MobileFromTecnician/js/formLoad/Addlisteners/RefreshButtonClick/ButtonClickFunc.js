import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

let StartFunc = async () => {
    await StartFuncFetchFunc();

    StartFuncAfterFetch();
};

export { StartFunc };
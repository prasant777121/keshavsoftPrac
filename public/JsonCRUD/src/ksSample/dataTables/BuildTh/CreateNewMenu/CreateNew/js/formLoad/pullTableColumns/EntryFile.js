import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

const StartFunc = async () => {
    let jVarLocalFromFetch = await StartFuncFetchFunc();

    StartFuncAfterFetch({ inFromFetch: jVarLocalFromFetch });
};

export { StartFunc };

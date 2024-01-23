import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/AfterFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await StartFuncFetchFunc();

    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData });
};
export { StartFunc };
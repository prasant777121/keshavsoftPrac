import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";


let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocaluuid = jVarLocalCurrentTarget.dataset.uuid;

    let jVarLocalFetchData = await StartFuncFetchFunc({ UuId: jVarLocaluuid });
    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData });

};
export { StartFunc };
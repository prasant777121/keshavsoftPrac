import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {
    console.log("jVarLocalDataNeeded:",jVarLocalDataNeeded.JsonData);

            StartFuncAfterFetch({ inFromFetch: jVarLocalDataNeeded.JsonData });
        };
    };
};

export { StartFunc }
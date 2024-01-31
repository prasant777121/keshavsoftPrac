import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalFetchData = await LocalFetchFiles();

    StartFuncAfterFetch({ inFromFetch: jVarLocalFetchData });
};

let LocalFetchFiles = async () => {
    let jVarLocalFetchUrl = "/src/ksSample/DataOnly";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

export { StartFunc };
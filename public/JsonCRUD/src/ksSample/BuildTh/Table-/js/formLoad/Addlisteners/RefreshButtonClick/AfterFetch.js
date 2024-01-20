import { StartFunc as StartFuncCommonCode } from "./CommonCode/ShowTable.js";

let StartFunc = ({ inFromFetch }) => {
    JFLocalColumns({ inFromFetch });
    StartFuncCommonCode();
};

const JFLocalColumns = ({ inFromFetch }) => {
    let LocalColumnsKeysArray = Object.keys(inFromFetch[0]);
    let JVarLocalColumnsArray = [];

    // JVarLocalColumnsArray.push({ title: "Delete", formatter: "operateFormatter" })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));
    localStorage.setItem("TableColumns", JSON.stringify(JVarLocalColumnsArray));
}

export { StartFunc };
// import { StartFunc as StartFuncFetchFunc } from "./DeleteButton/FetchFunc.js";;
// import { Json } from "sequelize/types/utils.js";
import { StartFunc as StartFuncCommonCode } from "./CommonCode/ShowTable.js";
// import { StartFunc as StartFuncFetchFunc } from "../DeleteButton/FetchFunc.js";
let CommonTableColumns;

let StartFunc = ({ inFromFetch }) => {
    JFLocalColumns({ inFromFetch });
    // jFLocalShowTable();
    StartFuncCommonCode();
};

let jFLocalShowTable = () => {
    var $table = $('#table');

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        onClickRow: LocalOnClickRow,
        columns: CommonTableColumns
    });
};



const JFLocalColumns = ({ inFromFetch }) => {
    let LocalColumnsKeysArray = Object.keys(inFromFetch[0]);
    let JVarLocalColumnsArray = [];

    JVarLocalColumnsArray.push({ title: "Delete", formatter: "operateFormatter" })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));
    console.log('JVarLocalColumnsArray:',JVarLocalColumnsArray);
    localStorage.setItem("TableColumns", JSON.stringify(JVarLocalColumnsArray));
    // CommonTableColumns = JVarLocalColumnsArray;
}

export { StartFunc };
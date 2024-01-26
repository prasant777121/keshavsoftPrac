import { StartFunc as StartFuncFetchFunc } from "../../DeleteButton/FetchFunc.js";

const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableData = localStorage.getItem("tableData");
    let jVarLocalTableDataParsed = JSON.parse(jVarLocalTableData);

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        // onClickRow: LocalOnClickRow,
        // columns: JFLocalColumns(),
        data: jVarLocalTableDataParsed
    });
};

const JFLocalColumns = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = Object.keys(JSON.parse(jVarLocalDataFromLocalStorage)[0]);
    let JVarLocalColumnsArray = [];

    // comment this line if u don't want have delete column the in the table

    JVarLocalColumnsArray.push({ formatter: "operateFormatter" })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));

    let jVarLocalFindColumn = JVarLocalColumnsArray.find(element => element.field === "Status");
    jVarLocalFindColumn["filter-control"] = "select";
    console.log("JVarLocalColumnsArray : ", JVarLocalColumnsArray, jVarLocalFindColumn);
    return JVarLocalColumnsArray;
};

export { StartFunc };
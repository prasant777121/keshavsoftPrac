import { StartFunc as StartFuncFetchFunc } from "../../DeleteButton/FetchFunc.js";

const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableData = localStorage.getItem("tableData");
    let jVarLocalTableDataParsed = JSON.parse(jVarLocalTableData);
    console.log("jVarLocalTableDataParsed : ", jVarLocalTableDataParsed);
    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        // onClickRow: LocalOnClickRow,
        columns: JFLocalColumns(),
        data: jVarLocalTableDataParsed
    });
};

const JFLocalColumns = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = Object.keys(JSON.parse(jVarLocalDataFromLocalStorage)[0]);
    let JVarLocalColumnsArray = [];

    // comment this line if u don't want have delete column the in the table
    JVarLocalColumnsArray.push({ formatter: "operateFormatter", title: "Edit" })

    // this is to nagivate to image upload
    JVarLocalColumnsArray.push({ formatter: "ImageFormatter", title: "Image" })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));

    return JVarLocalColumnsArray;
};

export { StartFunc };
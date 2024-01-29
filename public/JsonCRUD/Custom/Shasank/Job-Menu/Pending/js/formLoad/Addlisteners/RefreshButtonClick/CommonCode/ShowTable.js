const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableData = localStorage.getItem("tableData");
    let jVarLocalTableDataParsed = JSON.parse(jVarLocalTableData);
    let JVarLocalFilterUnAssinData = JFLocalUnAssingnData({ InTableData: jVarLocalTableDataParsed });

    if (JVarLocalFilterUnAssinData.length === 0) {
        Swal.fire({
            title: "No data found?",
            icon: "question"
        });
    };

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        // columns: JFLocalColumns(),
        data: JVarLocalFilterUnAssinData
    });
};

const JFLocalColumns = () => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("tableData");

    let LocalColumnsKeysArray = Object.keys(JSON.parse(jVarLocalDataFromLocalStorage)[0]);
    let JVarLocalColumnsArray = [];

    JVarLocalColumnsArray.push({
        formatter: "jFGlobalAssignButtonClick",
        title: "Assign"
    })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));

    return JVarLocalColumnsArray;
};

const JFLocalUnAssingnData = ({ InTableData }) => {

    let LocalUnAssingnData = InTableData.filter(element => element.Engineer !== null && element.InternalStatus !== "Complated");
    return LocalUnAssingnData;

};

export { StartFunc };
const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableData = localStorage.getItem("tableData");
    let jVarLocalTableDataParsed = JSON.parse(jVarLocalTableData);
    let JVarLocalFilterUnAssinData = JFLocalUnAssingnData({ InTableData: jVarLocalTableDataParsed });
    let jVarLocalEngineer = getUrlQueryParams({ inGetKey: "Engineer" });

    if (JVarLocalFilterUnAssinData.length === 0) {
        Swal.fire({
            title: "No data found?",
            text: `There is no data found in Technician name is ${jVarLocalEngineer}?`,
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
    LocalFuncForjVarLocalTechNmaeId();
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
    let jVarLocalEngineer = getUrlQueryParams({ inGetKey: "Engineer" });

    let LocalUnAssingnData = InTableData.filter(element => element.Engineer !== null && element.Engineer == jVarLocalEngineer && element.InternalStatus !== "Complated");
    return LocalUnAssingnData;

};

let LocalFuncForjVarLocalTechNmaeId = () => {
    let jVarLocalEngineer = getUrlQueryParams({ inGetKey: "Engineer" });

    let jVarLocalTechNmaeId = document.getElementById('TechNmaeId');

    if (jVarLocalTechNmaeId === null === false) {
        jVarLocalTechNmaeId.innerHTML = jVarLocalEngineer
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };
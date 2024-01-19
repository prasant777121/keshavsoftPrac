
const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableColumns = localStorage.getItem("TableColumns");

    let jVarLocalParsed = JSON.parse(jVarLocalTableColumns);

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        columns: jVarLocalParsed
    });
};


export { StartFunc };
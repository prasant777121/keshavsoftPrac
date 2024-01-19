let StartFunc = ({ inFromFetch }) => {
    var $table = $('#table');

    $table.bootstrapTable('destroy')
    $table.bootstrapTable({
        data: inFromFetch,
        columns: LocalColumns({ inFromFetch })
    });
};

const LocalColumns = ({ inFromFetch }) => {
    let LocalColumnsKeysArray = Object.keys(inFromFetch[0]);

    let JVarLocalColumnsArray = LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj

    });
    return JVarLocalColumnsArray;
}

export { StartFunc };
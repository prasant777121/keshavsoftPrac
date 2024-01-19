let StartFunc = ({ inFromFetch }) => {
    var $table = $('#table');
    console.log("inFromFetch : ", inFromFetch);
    $table.bootstrapTable('destroy')
    $table.bootstrapTable({ data: inFromFetch });
};

export { StartFunc };
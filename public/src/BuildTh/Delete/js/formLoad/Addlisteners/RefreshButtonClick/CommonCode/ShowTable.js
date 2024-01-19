const StartFunc = () => {
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

export { StartFunc };
import { StartFunc as StartFuncFetchFunc } from "../../DeleteButton/FetchFunc.js";

const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalTableColumns = localStorage.getItem("TableColumns");

    let jVarLocalParsed = JSON.parse(jVarLocalTableColumns);

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        onClickRow: LocalOnClickRow,
        columns: jVarLocalParsed
    });
};

let LocalOnClickRow = async (row, $element, field) => {
    if (field === 0) {
        let LocalFromSwal = await swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!"
        });

        if (LocalFromSwal.isConfirmed) {
            if ("UuId" in row) {
                StartFuncFetchFunc({ inUuId: row.UuId });
            } else {
                StartFuncFetchFunc({ inUuId: row.id });
            };

        };
    };
};

export { StartFunc };
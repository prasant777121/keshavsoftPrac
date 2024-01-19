import { StartFunc as StartFuncFetchFunc } from "./DeleteButton/FetchFunc.js";;
let CommonTableColumns;

let StartFunc = ({ inFromFetch }) => {
    LocalColumns({ inFromFetch });
    jFLocalShowTable();
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
            let LocalFromDeleteFetch;

            if ("UuId" in row) {
                LocalFromDeleteFetch = await StartFuncFetchFunc({ inUuId: row.UuId });
            } else {
                LocalFromDeleteFetch = await StartFuncFetchFunc({ inUuId: row.id });
            };

            if (LocalFromDeleteFetch) {
                jFLocalShowTable();
            };
        };
    };
};

const LocalColumns = ({ inFromFetch }) => {
    let LocalColumnsKeysArray = Object.keys(inFromFetch[0]);
    let JVarLocalColumnsArray = [];

    JVarLocalColumnsArray.push({ title: "Delete", formatter: "operateFormatter" })

    JVarLocalColumnsArray.push(...LocalColumnsKeysArray.map(element => {
        let LocalObj = {};
        LocalObj.field = element;
        LocalObj.title = element;
        return LocalObj
    }));

    CommonTableColumns = JVarLocalColumnsArray;
}

export { StartFunc };
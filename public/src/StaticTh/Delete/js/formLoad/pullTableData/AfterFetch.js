import { StartFunc as StartFuncFetchFunc } from "./DeleteButton/FetchFunc.js";;

let StartFunc = ({ inFromFetch }) => {
    var $table = $('#table');

    $table.bootstrapTable('destroy');

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        onClickRow: LocalOnClickRow
    });

};

let LocalOnClickRow = async (row, $element, field) => {   
    console.log("Row", row); 
    if (field === 2) {
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
                
            }

            console.log("LocalFromDeleteFetch", LocalFromDeleteFetch);

            if (LocalFromDeleteFetch) {
                var $table = $('#table');

                $table.bootstrapTable('destroy');

                $table.bootstrapTable({
                    onPostBody: function () {
                        $(".fixed-table-toolbar .search .search-input").focus()
                    },
                    onClickRow: LocalOnClickRow
                });

            };

        };

        // console.log("aaaaa", row, $element, field, field === 2);
    };
};

export { StartFunc };
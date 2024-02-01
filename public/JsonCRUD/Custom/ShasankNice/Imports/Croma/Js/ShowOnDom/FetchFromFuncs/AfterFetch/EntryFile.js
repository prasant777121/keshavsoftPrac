import { StartFunc as StartFuncTableHead } from "./TableHead.js";

let StartFunc = ({ inFromFetch }) => {
    console.log("inFromFetch:",inFromFetch);
    var $table = $('#table');
    $table.bootstrapTable('destroy')

    StartFuncTableHead();

    $table.bootstrapTable({ data: inFromFetch });
};

export { StartFunc };
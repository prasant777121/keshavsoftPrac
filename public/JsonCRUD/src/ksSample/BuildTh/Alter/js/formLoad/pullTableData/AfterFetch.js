let StartFunc = ({ inFromFetch }) => {
    console.log("inFromFetch:", inFromFetch);
    let LocalTableId = document.getElementById("TableId");
    let LocalNameId = document.getElementById("NameId");

    LocalTableId.innerHTML = inFromFetch.id
    LocalNameId.value = inFromFetch.Name

};

export { StartFunc };
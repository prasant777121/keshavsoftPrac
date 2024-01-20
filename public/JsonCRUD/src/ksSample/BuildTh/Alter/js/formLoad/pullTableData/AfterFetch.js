let StartFunc = ({ inFromFetch }) => {
    console.log("inFromFetch:", inFromFetch);
    let LocalNameId = document.getElementById("NameId");

    LocalNameId.value = inFromFetch.Name

};

export { StartFunc };
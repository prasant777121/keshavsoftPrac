let StartFunc = ({ inFromFetch }) => {
    let jVarLocalKeysArray = Object.keys(inFromFetch);
    let jVarLocalVerticalRowsDivID = document.getElementById("VerticalRowsDivID");

    let jVarLocalHtmlRows = jVarLocalKeysArray.map(element => {
        let jVarLoopInsideCol = document.createElement("div");
        jVarLoopInsideCol.classList.add("col-12");

        return jVarLoopInsideCol;
    });

    jVarLocalHtmlRows.forEach(element => {
        jVarLocalVerticalRowsDivID.appendChild(element);
    });
};

export { StartFunc };
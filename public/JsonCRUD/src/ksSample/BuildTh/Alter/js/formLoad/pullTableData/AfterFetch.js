let StartFunc = ({ inFromFetch }) => {
    let jVarLocalKeysArray = Object.keys(inFromFetch);
    let jVarLocalVerticalRowsDivID = document.getElementById("VerticalRowsDivID");

    let jVarLocalHtmlRows = jVarLocalKeysArray.map(element => {
        let template = document.getElementById("templateForVerticalRow")
        const clone = template.content.cloneNode(true);

        return clone;
    });

    jVarLocalHtmlRows.forEach(element => {
        jVarLocalVerticalRowsDivID.appendChild(element);
    });
};

export { StartFunc };
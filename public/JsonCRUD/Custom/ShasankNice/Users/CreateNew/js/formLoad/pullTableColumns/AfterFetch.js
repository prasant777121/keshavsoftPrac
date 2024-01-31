let StartFunc = ({ inFromFetch }) => {
    try {
        let jVarLocalVerticalRowsDivID = document.getElementById("VerticalRowsDivID");

        for (const [key, value] of Object.entries(inFromFetch)) {
            let template = document.getElementById("templateForVerticalRow");
            const clone = template.content.cloneNode(true);

            let javrlocalDisplayTextClass = clone.querySelector(".DisplayTextClass");
            let javrlocalInputClass = clone.querySelector(".InputClass");

            javrlocalDisplayTextClass.innerHTML = key;
            javrlocalInputClass.name = key;
            javrlocalInputClass.value = value;

            jVarLocalVerticalRowsDivID.appendChild(clone);
        }
    } catch (error) {
        console.error("Error in StartFunc:", error);
    }
};

export { StartFunc };

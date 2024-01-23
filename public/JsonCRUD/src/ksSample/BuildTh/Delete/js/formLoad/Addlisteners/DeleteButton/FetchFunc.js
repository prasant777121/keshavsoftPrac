import ConfigJson from "../../../Config.json" assert { type: "json" };

let StartFunc = async ({ inUuId }) => {
    console.log("inUuId:",inUuId);
    let LocalinUuId = inUuId;
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${LocalinUuId}`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    });

    if (jVarFromFetch.status === 200) {
        jFLocalCallbuttonClick();
        jFLocalAlert({inUuId});
    };
};

const jFLocalCallbuttonClick = () => {
    let ButtonClickId = "RefreshbuttonIn";
    let jVarLocalButtonClass = document.getElementById(ButtonClickId);
    jVarLocalButtonClass.click();
};

const jFLocalAlert = ({inUuId}) => {

    let jVarLocalAlertDivId = document.getElementById("DeletealertId");
    jVarLocalAlertDivId.classList.add("show");
    jVarLocalAlertDivId.querySelector("strong").innerText=`${inUuId}`


}

export { StartFunc };

import ConfigJson from "../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let jVarLocalid = getUrlQueryParams({ inGetKey: "id" });

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${jVarLocalid}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};



























// let StartFunc = async ({ inBodyData }) => {
//     let jVarLocalBodyData = inBodyData;

//     let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

//     let jVarLocalFetchHeaderObject = {
//         method: "post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jVarLocalBodyData)
//     };

//     let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
//     let jVarLocalResponse = await response.json();

//     return jVarLocalResponse;
// };

export { StartFunc };

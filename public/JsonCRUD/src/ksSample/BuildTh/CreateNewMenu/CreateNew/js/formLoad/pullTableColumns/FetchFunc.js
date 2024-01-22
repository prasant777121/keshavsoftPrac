import ConfigJson from "../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let jVarLocalSubRoute = ConfigJson.routePath;
    let jVarLocaltableName = ConfigJson.tableName;

    let jVarLocalFetchUrl = `/${jVarLocalSubRoute}/${jVarLocaltableName}/BodyCheck`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl);

    let data = await jVarFromFetch.json();

    return await data;
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

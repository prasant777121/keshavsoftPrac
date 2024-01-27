import ConfigJson from "../../Config.json" assert { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;
    let jVarLocalid = getUrlQueryParams({ inGetKey: "id" });

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${jVarLocalid}`;
    let jVarLocalFetchUrl2 = `/${LocalroutePath}/Technicians`;
    
    try {
        let Data = {}
        const response1 = await fetch(jVarLocalFetchUrl);
        const data1 = await response1.json();
        Data.AssingData = data1;
        const response2 = await fetch(jVarLocalFetchUrl2);
        const data2 = await response2.json();
        Data.TechnicianData = data2;

        return await Data
    } catch (error) {
        console.error('Error fetching data:', error);
    }


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

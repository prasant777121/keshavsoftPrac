import ConfigJson from "../../Config.json" assert { type: "json" };

let StartFunc = async ({ inBodyData }) => {
    let LocalroutePath = ConfigJson.routePath;
    let LocaltableName = ConfigJson.tableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/UploadFromModal`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    });

    let data = await jVarFromFetch.json();

    return await data;
};


export { StartFunc };

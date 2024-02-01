let StartFunc = async ({ inBodyData }) => {

    // let jVarLocalFetchUrl = `/api/Tickets/Upload`;
    let jVarLocalFetchUrl = `/bin/Tickets/UploadFromModal`;
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
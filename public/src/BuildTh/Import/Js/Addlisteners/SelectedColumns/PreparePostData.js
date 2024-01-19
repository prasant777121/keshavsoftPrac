let StartFunc = async ({ inCsvJsonData }) => {
    console.log("inCsvJsonData:",inCsvJsonData);

    let formData = {};

    formData.inDataToInsert = inCsvJsonData

    return await formData;
};



export { StartFunc };
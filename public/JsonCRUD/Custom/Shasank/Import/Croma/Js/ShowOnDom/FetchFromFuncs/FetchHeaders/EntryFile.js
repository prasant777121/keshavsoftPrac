import KeysJson from './Keys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeys = {};
    jVarLocalBodyKeys.inDataToInsert = {};

    let LocalFoam = document.forms[0];
    let LocalNerFormData = new FormData(LocalFoam);

    jVarLocalBodyKeys.inDataToInsert.ItemName = LocalNerFormData.get("ItemName");
    jVarLocalBodyKeys.inDataToInsert.ItemRate = parseInt(LocalNerFormData.get("ItemRate"));
    console.log("v:", jVarLocalBodyKeys);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeys);

    return KeysJson;
};

export { StartFunc }
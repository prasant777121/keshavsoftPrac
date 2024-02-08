import ConfigJson from '../../Config.json' assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalConfigJson = ConfigJson;
    let jVarLocalHeadingId = document.getElementById("HeadingId");
    jVarLocalHeadingId.innerHTML=jVarLocalConfigJson.tableName;
};

export { StartFunc };
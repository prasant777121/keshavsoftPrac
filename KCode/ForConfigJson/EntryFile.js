import fs from 'fs';
// import { StartFunc as StartFuncForSequelize } from '../ForSequelize/EntryFile.js';

let StartFunc = async ({ inTableConfig, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    // LocalfileNameJsonData.DbName = "data.db";
    LocalfileNameJsonData.DbName = LocalfileNameJsonData.ToDataDetails.DbName;

    LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTableConfig;
    LocalfileNameJsonData.JsonPath =`${ LocalfileNameJsonData.ToDataDetails.DataPath}/${LocalfileNameJsonData.ToDataDetails.DataPk}`;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));

    // LocalFuncCreateFolders({
    //     inTableConfig, inTo,
    //     inJsonPath: `${LocalfileNameJsonData.ToDataDetails.DataPath}/${LocalfileNameJsonData.ToDataDetails.DataPk}`
    // });

    // StartFuncForSequelize({ inColumnsJson: inTableConfig });
};

let LocalFuncCreateFolders = ({ inJsonPath, inTableConfig, inTo }) => {
    let LocalDataPath = inJsonPath;

    try {
        inTableConfig.forEach(element => {
            fs.mkdirSync(`${LocalDataPath}/${element.tableName}`)
        });
    } catch (err) {
        console.log(err);
    };
};

export { StartFunc };
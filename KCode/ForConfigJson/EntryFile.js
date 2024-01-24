import fs from 'fs';
import { StartFunc as StartFuncForSequelize } from '../ForSequelize/EntryFile.js';

let StartFunc = ({ inTableConfig, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.DbName = "data.db";

    LocalfileNameJsonData.sequelizeConfig.tableAndColumns = inTableConfig;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));

    StartFuncForSequelize({ inColumnsJson: inTableConfig });
};

export { StartFunc };
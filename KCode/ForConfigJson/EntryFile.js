import fs from 'fs';
import { StartFunc as StartFuncForSequelize } from '../ForSequelize/EntryFile.js';

let StartFunc = ({ inTableConfig, inFrom, inTo }) => {
    let LocalFileName = "Config.json";
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.DbName = "data.db";

    let LocalNewArray = inTableConfig.map(element => {
        let LoopInsideObject = {};
        LoopInsideObject.tableName = element.FileName;
        LoopInsideObject.tableColumns = {};

        element.Columns.forEach(LoopColumn => {
            LoopInsideObject.tableColumns[LoopColumn] = {};
            LoopInsideObject.tableColumns[LoopColumn].type = "STRING";
            LoopInsideObject.tableColumns[LoopColumn].allowNull = true;
        });

        return LoopInsideObject;
    });

    LocalfileNameJsonData.sequelizeConfig.tableAndColumns = LocalNewArray;

    fs.writeFileSync(`${LocalTo}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));

    StartFuncForSequelize({ inColumnsJson: LocalNewArray });
};

export { StartFunc };
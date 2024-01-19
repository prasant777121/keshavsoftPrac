import express from "express";
import fs from "fs";

// import { StartFunc as StartFuncSeq } from "../src/ksSample/kSequelize/Config/TableNames.js";

import { StartFunc as StartFuncSeq } from "../src/kSequelize/TableNames.js";

import myJson from "../src/Config.json" assert { type: "json" };

var router = express.Router();

router.get("/files", async (req, res) => {
    if (myJson.isSequelize) {
        let LocalTablesArray = await StartFuncSeq();
        
        let LocalReturnArray = LocalTablesArray.map(function (element) {
            return element.name;
        });

        res.json(LocalReturnArray);
        return;
    }

    let LocalFilesArray = LocalFuncForFiles();

    res.json(LocalFilesArray);
});

router.get("/dataSource", (req, res) => {
    let mySequelizeJsonData = {};
    mySequelizeJsonData.isSequelize = myJson.isSequelize;

    res.json(mySequelizeJsonData);
});

let LocalFuncForFiles = () => {
    let LocalFilesPath = "KData/JSON/316";
    let CommonFiles = fs.readdirSync(LocalFilesPath);
    let LocalFilesArray = [];

    CommonFiles.forEach(function (file, index) {
        let result = file.endsWith(".json");
        if (result === true) {
            LocalFilesArray.push(file);
        }
    });

    return LocalFilesArray;
};

export { router };

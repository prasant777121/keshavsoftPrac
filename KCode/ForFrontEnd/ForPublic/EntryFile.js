import fs from 'fs';
import { walk, CallBackFunc } from './LoopFiles.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFrom = 'public/JsonCRUD/src';
    let LocalTo = 'public/JsonCRUD/bin';
    let LocalFilesArray = inFilesArray;

    fs.cpSync(LocalFrom, LocalTo, { recursive: true });

    LocalFuncForIndex({ inTo: LocalTo });

    LocalFilesArray.forEach(element => {
        fs.cpSync(`${LocalTo}/ksSample`, `${LocalTo}/${element.FileName}`, { recursive: true });
    });

    fs.readdir(LocalTo, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
        };

        files.forEach(function (file, index) {
            fs.stat(`${LocalTo}/${file}`, function (err, stat) {
                if (stat && stat.isDirectory()) {
                    // console.log("aaaaaaaa : ", `${LocalTo}/${file}`);
                    walk(`${LocalTo}/${file}`, "", "bin", file, CallBackFunc);
                };
            });
        });
    });
};

let LocalFuncForIndex = ({ inTo }) => {
    let LocalTo = inTo;

    let LocalFilePath = `${LocalTo}/index/js/Config.json`;
    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataParsed = JSON.parse(LocalFileData);

    LocalFileDataParsed.routePath = "bin";

    fs.writeFileSync(LocalFilePath, JSON.stringify(LocalFileDataParsed));
};

export { StartFunc };
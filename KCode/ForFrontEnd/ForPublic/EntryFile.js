import fs from 'fs';
import { walk, CallBackFunc } from './LoopFiles.js';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    LocalFilesArray.forEach(element => {
        fs.cpSync("public/src", `public/JsonUi/${element.FileName}`, { recursive: true });
        // walk("public/src", "", "", element, CallBackFunc);
    });

    fs.readdir("public/JsonUi", function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
        };

        files.forEach(function (file, index) {
            walk(`public/JsonUi/${file}`, "", "bin", file, CallBackFunc);

            // console.error(file);
        });
    });
};

export { StartFunc };
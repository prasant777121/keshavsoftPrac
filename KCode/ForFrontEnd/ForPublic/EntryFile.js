import fs from 'fs';

let StartFunc = ({ inFilesArray }) => {
    let LocalFilesArray = inFilesArray;

    LocalFilesArray.forEach(element => {
        fs.cpSync("public/src", `public/JsonUi/${element}`, { recursive: true });
    });
};

export { StartFunc };
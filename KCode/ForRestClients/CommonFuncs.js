import fs from "fs";

let StartFunc = ({ inElement, inTo, inTypeName, inFileName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFileName = inFileName;

    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);
    let LocalBinReplaced = LocalFileDataReplaced.replaceAll("/src", "/bin");

    fs.writeFileSync(LocalFilePath, LocalBinReplaced);
};

export { StartFunc };
import fs from 'fs';

let StartFunc = ({ inElement, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "restClients/crud";
    let LocalTo = inTo;

    LocalForGet({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
    LocalForPost({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
    LocalForDelete({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
    LocalForImage({ inElement: LocalElement, inTo: LocalTo, inTypeName: LocalTypeName });
};

let LocalForGet = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/get.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);
    let LocalBinReplaced = LocalFileDataReplaced.replaceAll("/src", "/bin");

    fs.writeFileSync(LocalFilePath, LocalBinReplaced);
};

let LocalForPost = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/post.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);
    let LocalBinReplaced = LocalFileDataReplaced.replaceAll("/src", "/bin");

    fs.writeFileSync(LocalFilePath, LocalBinReplaced);
};

let LocalForDelete = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/delete.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);
    let LocalBinReplaced = LocalFileDataReplaced.replaceAll("/src", "/bin");

    fs.writeFileSync(LocalFilePath, LocalBinReplaced);
};

let LocalForImage = ({ inElement, inTo, inTypeName }) => {
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalTypeName}/image.http`;

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalFileDataReplaced = LocalFileData.toString().replaceAll("ksSample", LocalElement);
    let LocalBinReplaced = LocalFileDataReplaced.replaceAll("/src", "/bin");

    fs.writeFileSync(LocalFilePath, LocalBinReplaced);
};

export { StartFunc };
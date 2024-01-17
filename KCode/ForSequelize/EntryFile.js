import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kSequelize/modals";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });
};

let LocalFuncForreadFile = ({ inElement, inTo, inTypeName }) => {
    let LocalFileName = "columns.json";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    let LocalFileData1 = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`);

    console.log("LocalfileNameJsonData : ",LocalfileNameJsonData);
  //  LocalfileNameJsonData.fileName = `${LocalElement}.json`;

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };
import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kSequelize/modals";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);

    let LocalFileData1 = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`);

    console.log("LocalfileNameJsonData : ",LocalfileNameJsonData);
  //  LocalfileNameJsonData.fileName = `${LocalElement}.json`;

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/prepareColumns.js`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };
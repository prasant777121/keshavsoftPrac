import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
  let LocalFileName = "tableName.json";
  let LocalFrom = inFrom;
  let LocalTo = inTo;

  let LocalFileData = fs.readFileSync(`${LocalFrom}/${inElement}/${LocalFileName}`);
  let LocalfileNameJsonData = JSON.parse(LocalFileData);
  LocalfileNameJsonData.tableName = inElement;

  fs.writeFileSync(`${LocalTo}/${inElement}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };
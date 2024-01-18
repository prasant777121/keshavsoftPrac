import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
  let LocalFileName = "ModalClass.js";
  let LocalFrom = inFrom;
  let LocalTo = inTo;

  let LocalFileData = fs.readFileSync(`${LocalTo}/${inElement}/${LocalFileName}`);

  let LocalFileDataReplaced = LocalFileData.toString().replaceAll("{ Name }", `{ ${inColumnsArray.toString()} }`);

  let LocalArrayWithProperty = inColumnsArray.map(element => {
    return `this.${element} = ${element};`;
  });

  let LocalWithProperty = LocalFileDataReplaced.replaceAll("this.Name = Name;", LocalArrayWithProperty.join("\r\n\t\t"));

  fs.writeFileSync(`${LocalTo}/${inElement}/${LocalFileName}`, LocalWithProperty);
};

export { StartFunc };
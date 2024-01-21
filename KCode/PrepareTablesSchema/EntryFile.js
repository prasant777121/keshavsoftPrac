import fs from "fs";
import path from "path";

let CommonFromFolderName = "FromData";
let CommonRoutes = [];

let StartFunc = ({ inFilesArray }) => {
  let CommonFiles = fs.readdirSync(CommonFromFolderName);

  CommonFiles.forEach(function (file, index) {
    let LoopInsideObject = {};
    LoopInsideObject.FileName = path.parse(file).name;
    let LoopInsideFileData = fs.readFileSync(`${CommonFromFolderName}/${file}`);
    let LoopInsideJsonData = JSON.parse(LoopInsideFileData);

    LoopInsideObject.Columns = Object.keys(LoopInsideJsonData[0]);
    CommonRoutes.push(LoopInsideObject);
  });
}

export{ StartFunc };

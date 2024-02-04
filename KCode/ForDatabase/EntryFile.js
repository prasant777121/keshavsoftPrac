import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/EntryFile.js";

let StartFunc = ({ inFilesArray, inFrom }) => {
    StartFuncForSequelize({
        inColumnsJson: inFilesArray,
        inFrom
    });
};

export { StartFunc };

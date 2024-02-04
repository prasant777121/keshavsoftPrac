import { StartFunc as StartFuncForSequelize } from "./sqlite/ForSequelize/EntryFile.js";

let StartFunc = ({ inFilesArray }) => {
    StartFuncForSequelize({
        inColumnsJson: inFilesArray
    });
};

export { StartFunc };

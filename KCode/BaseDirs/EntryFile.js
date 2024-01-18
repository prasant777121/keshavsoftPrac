import fs from 'fs';
import { StartFunc as StartFuncForKSequelize } from './ForKSequelize/EntryFile.js';

let StartFunc = () => {
    try {
        fs.mkdirSync("bin");
        
        StartFuncForKSequelize();
    } catch (error) {
        console.log("error  : ", error);
    };
};

export { StartFunc };
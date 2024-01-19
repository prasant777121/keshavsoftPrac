// import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/pullTableData/ButtonClickFunc.js";
// import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    // StartFuncNavMenu();
    StartFuncformLoad().then(() => {
        // StartFuncAddlisteners();
    });
};

StartFunc();
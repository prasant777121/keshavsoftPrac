// import { StartFunc as StartFuncNavMenu } from "./NavMenu/EntryFile.js";
import { StartFunc as StartFuncformLoad } from "./formLoad/pullTableData/ButtonClickFunc.js";

const StartFunc = () => {
    // StartFuncNavMenu();
    StartFuncformLoad().then();
};

StartFunc();
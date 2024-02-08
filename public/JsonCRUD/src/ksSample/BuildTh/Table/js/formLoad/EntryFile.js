import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";
import { StartFunc as StartFuncFromConfig } from "./FromConfig/EntryFile.js";

const StartFunc = () => {
    StartFuncFromConfig();
    StartFuncAddlisteners();

    jFLocalCallbuttonClick();
};

const jFLocalCallbuttonClick = () => {
    let ButtonClickId = "RefreshbuttonIn";
    let jVarLocalButtonClass = document.getElementById(ButtonClickId);
    jVarLocalButtonClass.click();
};

export { StartFunc };
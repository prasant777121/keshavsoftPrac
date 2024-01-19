import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/StartFunc.js";

const StartFunc = () => {
    StartFuncAddlisteners();

    jFLocalCallbuttonClick();
};

const jFLocalCallbuttonClick = () => {
    let ButtonClickId = "RefreshbuttonIn";
    let jVarLocalButtonClass = document.getElementById(ButtonClickId);
    jVarLocalButtonClass.click();
};

export { StartFunc };
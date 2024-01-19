import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let ButtonClickId = "RefreshbuttonIn";
    let jVarLocalButtonClass = document.getElementById(ButtonClickId);

    jVarLocalButtonClass.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc };

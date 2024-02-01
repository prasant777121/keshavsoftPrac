import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let ButtonClickId = "DeleteButtonClass";
    let jVarLocalButtonClass = document.getElementsByClassName(ButtonClickId);

    for (let i = 0; i < jVarLocalButtonClass.length; i++) {
        jVarLocalButtonClass[i].addEventListener("click", (event) => {
            StartFuncButtonClickFunc({ inevent: event })
        });
    };

    console.log("aaaaa");

};

export { StartFunc };

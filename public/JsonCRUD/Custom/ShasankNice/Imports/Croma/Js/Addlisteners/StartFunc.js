import { StartFunc as StartFuncSelectedColumns } from "./SelectedColumns/StartFunc.js";
import { StartFunc as StartFuncHelpModal } from "./HelpModal/StartFunc.js";

let StartFunc = () => {
    StartFuncSelectedColumns();
    StartFuncHelpModal();
};

export { StartFunc };
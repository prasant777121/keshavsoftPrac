import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/DeleteRow.js';

let DeleteFunc = ({ inId }) => {
    return StartFuncwriteFile({ inId });
};

export { DeleteFunc };
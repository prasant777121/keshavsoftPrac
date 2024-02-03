import { StartFunc as StartFuncUpdateTableRow } from "../../kSequelize/UpdateTableRow/AllColumns.js";

let PutFunc = async ({ inDataToUpdate, inId }) => {
  return await StartFuncUpdateTableRow({ inDataToUpdate, inId });
};

export { PutFunc };

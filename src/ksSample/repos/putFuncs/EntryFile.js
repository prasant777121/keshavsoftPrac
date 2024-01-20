import { PutFunc as PutFuncDalsForSequelize } from "../../dalsForSequelize/putFuncs/EntryFile.js";

import configJson from "../../../Config.json" assert { type: "json" };

let PutFunc = async ({ inDataToUpdate, inId }) => {
  if (configJson.isSequelize) {
    return await PutFuncDalsForSequelize({ inDataToUpdate, inId });
  }

  return PutFuncDal({ inBodyKeys: inModalObject });
};

export { PutFunc };

import { ColumnsPullFunc } from "../../DataColumns.js";
import { StartFunc as StartFuncInitializeSequelizeWithTableName } from "../modals/initializeSequelizeWithTableName.js";

let StartFunc = async ({ inDataToUpdate, inId }) => {
  let LocalDataToUpdate = ColumnsPullFunc()(inDataToUpdate);

  const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

  const LocalFindId = await LocalTableData.findAll({
    where: {
      id: inId,
    },
  });

  if (LocalFindId.length === 0) {
    return await { KTF: false, KReason: "Id not found in data" };
  }

  const LocalAfterUpdate = await LocalTableData.update(LocalDataToUpdate, {
    where: { id: inId },
  });

  return await LocalAfterUpdate;
};

export { StartFunc };

import { ColumnsPullFunc } from '../../DataColumns.js';
import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inDataToInsert }) => {
    let localInDataToInsert = ColumnsPullFunc()(inDataToInsert);

    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    const LocalFromBuild = LocalTableData.build(localInDataToInsert);

    let localNewAfterSave = await LocalFromBuild.save();

    return await localNewAfterSave.id;
};

export { StartFunc };


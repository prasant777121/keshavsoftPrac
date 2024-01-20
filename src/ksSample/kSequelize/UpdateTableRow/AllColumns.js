import { ColumnsPullFunc } from '../../DataColumns.js';
import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inDataToUpdate }) => {
    let LocalDataToUpdate = ColumnsPullFunc()(inDataToUpdate);

    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    const LocalAfterUpdate = await LocalTableData.update(LocalDataToUpdate, { where: { id: 1 } });

    return await LocalAfterUpdate;
};

export { StartFunc };


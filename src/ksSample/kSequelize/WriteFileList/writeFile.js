import { dataColumns } from '../modals/prepareColumns.js';

import { ClassSample } from '../../ModalClass.js';
import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';

let StartFunc = async ({ inDataToInsert }) => {
    let localInDataToInsert = new ClassSample(inDataToInsert);

    const sequelize = StartFuncInitializeSequelize();

    const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
    );

    const users = await Tickets.findAll();

    const records = users.map(function (result) {
        return result.dataValues
    })

    const LocalFromBuild = Tickets.build(localInDataToInsert);

    let localNewAfterSave = await LocalFromBuild.save();

    return await localNewAfterSave.id;
};

export { StartFunc };


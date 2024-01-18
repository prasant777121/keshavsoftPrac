import { dataColumns } from '../modals/prepareColumns.js';

import { ClassSample } from '../../ModalClass.js';
import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';

let StartFunc = async ({ inDataToInsert }) => {
    let localInDataToInsert = LocalFromArray({ inArray: inDataToInsert });

    const sequelize = StartFuncInitializeSequelize();

    const Tickets = sequelize.define('sample', dataColumns, { freezeTableName: true }
    );

    const users = await Tickets.findAll();

    const LocalFromBuild = await Tickets.bulkCreate(localInDataToInsert, { fields: ['Name'] });

    // let localNewAfterSave = await LocalFromBuild.save();

    return await LocalFromBuild;
};

let LocalFromArray = ({ inArray }) => {
    let LocalNewAray = [];

    LocalNewAray = inArray.map(element => {
        return new ClassSample({ ...element });
    });

    return LocalNewAray;
};

export { StartFunc };


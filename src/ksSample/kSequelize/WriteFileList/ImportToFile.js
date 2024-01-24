// import { dataColumns } from '../modals/prepareColumns.js';
// import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

// import { ClassSample } from '../../ModalClass.js';
// import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';

import { StartFunc as StartFuncInitializeSequelizeWithTableName } from '../modals/initializeSequelizeWithTableName.js';

let StartFunc = async ({ inDataToInsert }) => {

    const LocalTableData = await StartFuncInitializeSequelizeWithTableName();

    const LocalFromBuild = await LocalTableData.bulkCreate(inDataToInsert);

    // let localNewAfterSave = await LocalFromBuild.save();

    return await LocalFromBuild;
};


let StartFunc1 = async ({ inDataToInsert }) => {
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


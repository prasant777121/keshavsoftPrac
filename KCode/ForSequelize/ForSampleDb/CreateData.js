// import { StartFunc as StartFuncInitializeSequelize } from "../../../src/ksSample/kSequelize/modals/initializeSequelize.js";
import { StartFunc as StartFuncInitializeSequelize } from "../../../src/ksSample/kSequelize/modals/RetSeqWithTableNames.js";

let StartFunc = async () => {
    const sequelize = await StartFuncInitializeSequelize();

    // sequelize.define("ksSample", {
    //     Name: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     },
    //     Mobile: {
    //         type: DataTypes.NUMBER,
    //         allowNull: true
    //     },
    //     City: {
    //         type: DataTypes.STRING,
    //         allowNull: true
    //     }
    // }, { freezeTableName: true });

    sequelize.sync({ force: true });
};

StartFunc();

// export { StartFunc };
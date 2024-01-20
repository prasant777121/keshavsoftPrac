import { DataTypes } from "sequelize";

import dotenv from 'dotenv';
dotenv.config();

import { StartFunc as StartFuncInitializeSequelize } from "../../../src/ksSample/kSequelize/modals/initializeSequelize.js";

let StartFunc = async () => {
    const sequelize = StartFuncInitializeSequelize();

    sequelize.define("ksSample", {
        Name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, { freezeTableName: true });

    sequelize.sync({ force: true });
};

StartFunc();

// export { StartFunc };
import { DataTypes } from "sequelize";
import { StartFunc as StartFuncInitializeSequelize } from '../modals/initializeSequelize.js';


let StartFunc = async ({inId}) => {
    let LocalId=inId;

    const sequelize = StartFuncInitializeSequelize();

    const Tickets = sequelize.define('sample', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { freezeTableName: true }
    );

    let LocalFromDelete;

    try {
        LocalFromDelete = await Tickets.destroy({ where: { id: LocalId } }); 
        
    } catch (error) {
        return await error;

    }
    

    return await LocalFromDelete;
};

export { StartFunc };


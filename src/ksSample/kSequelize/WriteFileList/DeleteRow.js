import { Sequelize, DataTypes } from "sequelize";

import Configjson from '../../../Config.json' assert { type: 'json' };

let commonJonPth = Configjson.JsonPath;
let commonDbName = Configjson.DbName;


let StartFunc = async ({inId}) => {
    let LocalId=inId;

    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: `${commonJonPth}/${commonDbName}`, // You can specify the path for your SQLite database file
    });

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


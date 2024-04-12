import { Model, Sequelize, DataTypes } from "sequelize";

export default class Line extends Model {
    public id?: string;
    public line!: string;
}

export const LineMap = (sequelize:Sequelize) => {
    Line.init({
        id:{
            type : DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        line:{
            type: DataTypes.STRING(255)
        },
        delete_at : {
            type:DataTypes.DATE,
            allowNull:true
        }
    }, {
        sequelize,
        tableName:'lines',
        timestamps:true,
        paranoid:true,
        deletedAt:'delete_at'
    });
    Line.sync();
}
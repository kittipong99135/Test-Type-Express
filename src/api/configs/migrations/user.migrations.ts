import {Model, Sequelize, DataTypes } from 'sequelize';

export default class User extends Model{
    public id? :string;
    public emial!:string;
    public password!:string;
    public fname!:string;
    public lname!:string;
    public nname!:string;
    public role!:string;
}
export const UserMap = (sequelize:Sequelize) => {
    User.init({
        id:{
            type : DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        email:{
            type: DataTypes.STRING(255),
        },
        password : {
            type:DataTypes.DATE,
        },
        fname:{
            type: DataTypes.STRING(255),
        },
        lname:{
            type: DataTypes.STRING(255),
        },
        nname:{
            type: DataTypes.STRING(255),
        },
        role:{
            type: DataTypes.STRING(255),
            }, 
        delete_at : {
            type:DataTypes.DATE,
            allowNull:true
        }
    },{
        sequelize,
        tableName:'users',
        timestamps:true,
        paranoid:true,
        deletedAt:'delete_at'
    })
    User.sync();
}
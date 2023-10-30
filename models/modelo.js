
const { DataTypes, Model } = require('sequelize');
import sequelize from '../db';

class modelo extends Model {}

modelo.init({
    int: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
    float: {
            type: DataTypes.FLOAT,
            allowNull: true,
            unique: false
        },
    date: {
            type: DataTypes.DATE,
            allowNull: true,
            unique: false
        },
    string: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false
        },
    bool: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            unique: false
        }
}, {
    sequelize,
    modelName: 'modelo',
    timestamps: false
});



module.exports = modelo;

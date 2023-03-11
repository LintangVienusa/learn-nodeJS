const sequelize = require('../../config/sequelize');
const { Sequelize, DataTypes } = require('sequelize');

const Catalog = sequelize.define('catalogs', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_display: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    image_path: {
        type: DataTypes.TEXT
    }
});



module.exports = Catalog ;

const { DataTypes } = require("sequelize");

var initLogModel = async function (sequelize) {
    return sequelize.define('logs', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sender: {
            type: DataTypes.STRING,
        },
        headers: {
            type: DataTypes.TEXT
        }
    });
}




module.exports = { initLogModel }
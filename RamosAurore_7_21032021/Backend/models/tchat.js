'use strict';
//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    const Tchat = sequelize.define('Tchat', {
        idUsers: DataTypes.INTEGER,
        idTchat: DataTypes.STRING,
        title: DataTypes.STRING,
        tchat: DataTypes.STRING,
        attachment: DataTypes.STRING,
        likes: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Tchat',
        paranoid: true
    });
    return Tchat;
};
'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Tchat = database.define('Tchat', {
    IdUser:DataTypes.INTEGER,
    content: DataTypes.STRING
    }, {
    Sequelize,
    modelName: 'Tchat',
    paranoid: false
    }
);

module.exports = Tchat;






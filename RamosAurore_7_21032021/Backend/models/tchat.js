'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Tchat = database.define('Tchat', {
    content: DataTypes.STRING,
    attachment: DataTypes.STRING
    }, {
    Sequelize,
    modelName: 'Tchat',
    paranoid: false
    }
);

module.exports = Tchat;






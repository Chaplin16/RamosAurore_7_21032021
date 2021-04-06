'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Tchat = database.define('Tchat', {
    /*idUser: {
        type:DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        references: {
            model: 'users',
            key: 'id'
        },
    }, */
    content: DataTypes.STRING
}, {
    Sequelize,
    modelName: 'Tchat',
    paranoid: false
}
);

module.exports = Tchat;






'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Comment = database.define('Comment', {
    /*idUser: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        references: {
            model: 'users',
            key: 'id'
        }
    },*/
    comment: DataTypes.STRING
    }, {
    Sequelize,
    modelName: 'Comment',
    paranoid: false
    } 
);

module.exports = Comment;


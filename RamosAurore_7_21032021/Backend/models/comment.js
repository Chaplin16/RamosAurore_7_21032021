'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Comment = database.define('Comment', {
    TchatId: DataTypes.INTEGER,
    comment: DataTypes.STRING
    }, {
    Sequelize,
    modelName: 'Comment',
    paranoid: false
    } 
);

module.exports = Comment;


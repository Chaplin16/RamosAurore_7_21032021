'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const Tchat = database.define('Tchat', {
    idUser: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    comment: DataTypes.STRING
}, {
    Sequelize,
    modelName: 'Tchat',
    paranoid: true
}, {
    classMethods: {
        associate: function(models) {
            models.Tchat.belongsTo(models.User, {
                foreignKey: {
                    allowNull:false
                }
            })
        }
    }
});

//Tchat.sync({alter:true})
module.exports = Tchat;




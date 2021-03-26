'use strict';
const {Sequelize,DataTypes, database} = require('./connexion');

const User = database.define('User', {
    username: {
        type: DataTypes.STRING,
        unique:true
    },
    email: {
        type: DataTypes.STRING,
        unique:true
    },
    password: DataTypes.STRING,
    job: DataTypes.STRING,
    avatar: DataTypes.STRING,
    isAdmin: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}, {
    Sequelize,
    modelName: 'User',
    underscored: true,
    paranoid: true
}, {
    classMethods: {
        associate: function(models) {
            models.User.hasMany(models.Tchat)
        }
    }
});

//User.sync({alter:true})
module.exports = User;







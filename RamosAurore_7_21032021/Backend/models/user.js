'use strict';
//const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        username: {
          type: Sequelize.DataTypes.STRING,
          unique:true
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          unique:true
        },
        password: DataTypes.STRING,
        bio: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'User',
        underscored: true,
        paranoid: true
    }
);
  return User;
};
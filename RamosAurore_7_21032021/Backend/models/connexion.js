const {Sequelize,DataTypes} = require('sequelize');
require('dotenv').config(); 

//connction à la base de données
const database = new Sequelize(`mysql://${process.env.BD_USERNAME}:${process.env.BD_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`);

database.authenticate()
    .then(() => console.log("REUSSIE!!! connectée a Mysql"))
    .catch(err =>console.log("error: " + err));


module.exports = {Sequelize, DataTypes,database};



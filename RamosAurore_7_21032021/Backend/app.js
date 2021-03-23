const express = require("express");
const app = express();
const path = require('path'); //donne acces au chemin de notre systeme de fichier

const mysql2 = require('mysql2');
require('dotenv').config(); 
const Sequelize = require('sequelize');

//connction à la base de données
const sequelize = new Sequelize(`mysql://${process.env.BD_USERNAME}:${process.env.BD_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`);

//routes
//const userRoutes = require('./routes/user');

//entetes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * = tout le monde peut acceder à l api 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //methode acceptées
    next();
  });

sequelize.authenticate()
    .then(() => console.log("REUSSIE!!! connectée a Mysql"))
    .catch(err =>console.log("error: " + err));

  //remplace body-parser deprecié
app.use(express.urlencoded({extended: true})); //remplace bodyParser.json() deprecié depuis 2014
app.use(express.json());

module.exports = app; //devient accessible pour les autres fichiers
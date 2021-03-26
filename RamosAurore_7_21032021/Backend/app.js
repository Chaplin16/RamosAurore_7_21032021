const express = require("express");
const app = express();
const path = require('path'); //donne acces au chemin de notre systeme de fichier

const mysql2 = require('mysql2');
require('dotenv').config(); 

//routes
const userRoutes = require('./routes/user');
const tchatRoutes = require('./routes/tchat');

//entetes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // * = tout le monde peut acceder à l api 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); //methode acceptées
    next();
});

  //remplace body-parser deprecié
app.use(express.urlencoded({extended: true})); //remplace bodyParser.json() deprecié depuis 2014
app.use(express.json());


app.use('/user', userRoutes);
app.use('/tchat', tchatRoutes);

module.exports = app; //devient accessible pour les autres fichiers
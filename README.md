# RamosAurore_7_21032021
Projet 7 d'OpenclassRooms Groupomania


Prérequis:
Avoir Node.js et MySQL installés localement sur la machine.

Installation :
Backend :
Clonez ce repository,

Ouvrir le fichier example.env dans le backend en remplaçant les valeurs par défaut pour accéder à la BDD:
(données dans le fichier.env envoyé à part)

const database = new Sequelize(`mysql://${process.env.BD_USERNAME}:${process.env.BD_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`);
//Base de données MySql

BD_USERNAME = <nom d'utilisateur> 
BD_PASSWORD = <mot de passe>
DB_HOST = <le port de connection>
DB_DATABASE = <le nom de la BDD>


//clef d'authentification
//TOP_SECRET = <nom de la clef>


A partir du dossier backend, exécutez nodemon server, 
Le serveur doit fonctionner sur localhost avec le port par défaut 3000.

Importer les tables dans la base de données :
Créer la base de données dans MySQL (groupomania)

Exécutez sequelize db:migrate pour intégrer les modèles créés dans la base de données ;
fichier pushé sous le nom   tables_groupomania.sql

Si sequelize et mysql2 ne sont pas installés localement faire ceci: npm i -g sequelize-cli npm install -g sequelize npm install mysql2 -g
 
Frontend :
Le frontend de l'application doit fonctionner sur localhost avec le port par défaut 8080.

Accèder au site sur http://localhost:8080/
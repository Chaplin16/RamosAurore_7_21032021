const User = require('../models/user');
const firesystem = require('fs');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken'); //creation de token et verification
const passwordValidator = require('password-validator');
//const maskData = require('maskdata'); //masque email dans BDD


//creation du schema
let schema = new passwordValidator();
schema
    .is().min(8) //au moins 8 caractères
    .is().max(20) // pas plus de 20 caractères
    .has().uppercase() // au moins une minuscule
    .has().lowercase() // au moins une majuscule
    .has().digits(1) // au moins un chiffre
    .has().not().spaces()  //pas d espaces                         
    .is().not().oneOf(['Passw0rd', 'Password123']); // pas de mdp bateau


//enregistrement des nouveaux utilisateurs dans BDD
//regex et hachage du mot de passe
exports.createAccount = (req, res, next) => {
    if (!schema.validate(req.body.password)) {
        res.status(400).json({ error: "le mot de passe doit contenir au moins 8 caractères dont 1chiffre, 1 lettre majuscule et 1 minuscule" });
    } else {
        bcrypt.hash(req.body.password, 10) //hash le mot de passe, on execute 10 fois l algorithme de hachage
            .then(hash => {//on recupere le hash du MDP et on le met ds un objet pour l enregistrer dans la BDD
                User.create({
                    avatar: `${req.protocol}://${req.get("host")}/images/avatarDefault.png` ,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    job: req.body.job
                }).then(() => res.status(201).send({ message: "Nouvel utilisateur créé !" }))
                .catch(error => res.status(400).json({ error: "éléments manquants" }));
            })
            .catch(error => res.status(500).json({ error }));
    }
};

// connections des utilisateurs deja existants
exports.login = (req, res, next) => {
    const email = req.body.email;
    User.findOne({ where: { email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: `Il n y a pas d'utilisateur avec ce mail ${email}!` });
            }

            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
            if (!regexEmail.test(req.body.email)) {
                res.status(401).json({ error: "Rentrez un mail valide" })
                return false
            }

            bcrypt.compare(req.body.password, user.password) // on compare le mdp qui est envoye dans la requete avec le mdp hashé qui est dans la BDD,
                .then(valid => {
                    if (!valid) {
                        return res.status(401).send({ error: 'Mot de passe incorrect !' });
                    } 
                    res.status(200).json({
                        userId: user.id,
                        token: jsonwebtoken.sign( //fonction sign prend en argument
                            { userId: user.id }, //1 argument : les données que l on veut encoder à l int de ce token
                            `${process.env.TOP_SECRET}`, // 2ieme argument : clef secrete de l encodage 
                            { expiresIn: '24h' } // chq TOKEN dure 24h 
                        )
                    });
                })
                .catch(error => res.status(500).send({ error }));
        })
        .catch(error =>
            res.status(500).send({ error })
        );
};

//route pour voir le profil d'un utilisateur
exports.getOneUser = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

//route pour voir le profil d'un utilisateur   
exports.getAllUsers = (req, res, next) => {  //NE FONCTIONNE PAS
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

//route pour modifier le pseudo
exports.modifyUsername = (req, res, next) => {
        User.findOne({ where: { id: req.params.id } })
            .then(username => {
                username.update(
                    { username: req.body.username }
                )
                    .then(() =>
                        res.status(200).json({ message: 'Votre pseudo est modifié!' }))
                    .catch(error =>
                        res.status(400).json({ error }));
            })
            .catch(error =>
                res.status(500).json({ error: 'Problème de serveur!!' })
            );
};

//route pour changer d'avatar NE FONCTIONNE PAS 
exports.modifyUserAvatar = (req, res, next) => {
    const id = req.params.id
    User.findOne({ where: { id: id } })
        .then(user => {
            const filename = user.avatar.split('/images/')[1];
            firesystem.unlink(`images/${filename}`, (error => {
                if(error) 
                    {console.log(error)}
                else {
                    console.log("image effacée");
                }
            }))
        })
    const avatarObject = { 
            avatar: `${req.protocol}://${req.get('host')}/images/avatarDefault3.png`
    }
    avatar.updateOne({ where: { id: id } }, { ...avatarObject, id: req.params.id }) //
        .then(() => res.status(200).json({ message: 'avatar modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

//route pour modifier l'email(avec securité)
exports.modifyUserEmail = (req, res, next) => {
    const id = req.params.id
    User.findOne({ where: { id: req.params.id } })
        .then(email => {
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
            if (!regexEmail.test(req.body.email)) {
                res.status(401).json({ error: "Rentrez un mail valide" })
                return false
            }
            email.update({ email: req.body.email })
                .then(() =>
                    res.status(200).json({ message: 'Votre email est modifié!' }))
                .catch(error =>
                    res.status(400).json({ error }));
        })
        .catch(error =>
            res.status(500).json({ error: 'Problème de serveur!!' })
        );
};

//route pour modifier le mot de passe(avec securité)
exports.modifyUserPassword = (req, res, next) => {
    const id = req.params.id
    User.findOne({ where: { id: id } })
        .then(password => {
            if (!schema.validate(req.body.password)) {
                res.status(400).json({ error: "Votre mot de passe doit contenir au moins 8 caractères dont 1chiffre, 1 lettre majuscule et 1 lettre minuscule" });
            } else {
                bcrypt.hash(req.body.password, 10)
                    .then(hash => {
                        password.update({ password: hash })
                            .then(() =>
                                res.status(200).json({ message: 'Votre mot de passe est modifié!' }))
                            .catch(error =>
                                res.status(400).json({ error }));
                    })
               
            } 
        })       
        .catch(error =>
            res.status(500).json({ error: 'Problème de serveur!!' })
        );
};

//route pour modifier le mot de passe(avec securité)
exports.modifyUserJob = (req, res, next) => {
    const id = req.params.id
    User.findOne({ where: { id: id } })
        .then(job => {
                job.update({ job: req.body.job })
                    .then(() =>
                        res.status(200).json({ message: 'Votre métier est modifié!' }))
                    .catch(error =>
                        res.status(400).json({ error }));    
        })
        .catch(error =>
            res.status(500).json({ error: 'Problème de serveur!!' })
        );
};


// route pour supprimer le compte de l'utilisateur
exports.userDelete = (req, res, next) => {
    const id = req.params.id
    User.findOne({ where: { id: id } })
        .then(user => {
            user.destroy({ where: { id: id } })
                .then(() => 
                res.status(200).json({ 
                    message: 'utilisateur supprimé !' 
                }))
                .catch(error => 
                    res.status(400).json({ 
                        error 
                }));
        })
        .catch(error =>
            res.status(500).json({ error })
        );
};

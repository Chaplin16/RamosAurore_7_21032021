const Tchat = require('../models/tchat');
const firesystem = require('fs');
const multer = require('../middlewares/multer');
const User = require('../models/user');


//route pour creer un tchat
exports.createTchat = (req, res, next) => {
    const tchat = JSON.parse(req.body.tchat);
    Tchat.create({
            title: tchat.title,
            content: tchat.content,
            attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
            likes: tchat.likes,
            idUser:tchat.userId
        }).then(tchat => {
                res.status(201).json({ message: "Nouveau message créé !" })
            
        })
        .catch(error => res.status(404).json({ error:"erreur dans la requête" }));
};

//route pour voir un tchat
exports.getOneTchat = (req, res, next) => {
    Tchat.findOne({ where: {id:req.params.id}, include:'User'})
        .then(tchat => res.status(200).json(tchat))
        .catch(error => res.status(404).json({ error:"erreur dans la requête" }));;
};

//route pour voir tous les tchats
exports.getAllTchat = (req, res, next) => {
    Tchat.findAll()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};
        
//route pour supprimer un tchat
exports.tchatDelete = (req, res, next) => {
    Tchat.findOne({ where: { id: req.params.id } })
    .then(tchat => {
        if(tchat.userId == req.token.userId || req.token.isAdmin){
            tchat.destroy({ where: { id: id } })
            .then(() =>
                res.status(200).json({ 
                    message: 'Votre message est supprimé!' 
                }))
            .catch(error =>
                res.status(400).json({
                    error: 'message non supprimé' 
            }));
        }    
    })
    .catch(error =>
        res.status(500).json({ 
            error: 'Problème de serveur!!' 
        })
    );
};



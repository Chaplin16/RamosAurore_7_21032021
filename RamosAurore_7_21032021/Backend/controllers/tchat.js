const {User, Tchat, Comment} = require('../models/index');
const firesystem = require('fs');
const multer = require('../middlewares/multer');
const auth = require('../middlewares/auth');


//route pour creer un tchat
exports.createTchat = (req, res, next) => {
    const tchat = JSON.parse(req.body.tchat);
    Tchat.create({
            content: tchat.content,
            attachment: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
            userid:tchat.userId
        }).then(tchat => {
                res.status(201).json({ message: "Nouveau message créé !" })
            
        })
        .catch(error => res.status(404).json({ error:"erreur dans la requête" }));
};

//route pour voir un tchat
exports.getOneTchat = (req, res, next) => {
    Tchat.findOne({ 
        where: {
            id:req.params.id
        },
        // include: [{
        //     models: User   
        // }]   
    }).then(tchat => res.status(200).json(tchat))
    .catch(error => res.status(404).json({ error:"erreur dans la requête" }));;
};

//route pour voir tous les tchats
exports.getAllTchats = (req, res, next) => {
    Tchat.findAll()
        .then(tchats => res.status(200).json(tchats))
        .catch(error => res.status(404).json({ error }));
};
        
//route pour supprimer un tchat
exports.tchatDelete = (req, res, next) => {
    const id = req.params.id;
        if(Tchat.userId == req.token.id || req.token.isAdmin){
            Tchat.destroy({ where: { id: id } })
            .then(() => 
                res.status(200).json({ 
                    message: 'Votre message est supprimé !' 
            }))
            .catch(error => 
                res.status(400).json({ 
                    error 
            }))
        }    
};
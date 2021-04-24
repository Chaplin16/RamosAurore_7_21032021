const {User, Tchat, Comment} = require('../models/index');
const firesystem = require('fs');
const multer = require('../middlewares/multer');
const multerTchat = require('../middlewares/multerTchat');
const auth = require('../middlewares/auth');


//route pour creer un tchat
exports.createTchat = (req, res, next) => {
    const tchat = req.body;
    if(req.file) {
        Tchat.create({
                content: tchat.content,
                UserId:tchat.userId,
                attachment: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
            }).then(tchat => {
                    res.status(201).json({ 
                        message: tchat 
                    })            
            })
            .catch(error => res.status(404).json({ error:"erreur dans la requête" }));
    }else {
        delete (req.body.attachment)
            Tchat.create({
                content: req.body.content,
                UserId:req.body.userId,
            }).then(tchat => {
                    res.status(201).json({ 
                        message: tchat 
                    })            
            })
            .catch(error => res.status(404).json({ error:"erreur dans la requête" })); 
               
        }
}

//route pour voir un tchat
exports.getOneTchat = (req, res, next) => {
    Tchat.findOne({ 
        where: {
            id:req.params.id
        } 
    }).then(tchat => res.status(200).json(tchat))
    .catch(error => res.status(404).json({ error:"erreur dans la requête" }));;
};

//route pour voir tous les tchats
exports.getAllTchats = (req, res, next) => {
    Tchat.findAll({ 
        include: [ 
            { model: User} ,
            { model : Comment }
        ],
        order:[[
            "createdAt", "DESC"
        ]]
     })
        .then(tchats => 
            
            res.status(200).json(tchats)
            )
        .catch(error => 
            res.status(404).json({ error })
            );
};
        
//route pour supprimer un tchat
exports.tchatDelete = (req, res, next) => {
    Tchat.findOne({ 
        where: {
            id:req.params.id
        }
    }).then(tchat => {
        if(tchat.UserId == req.token.userId || req.token.isAdmin){
            Tchat.destroy({ where: { id: req.params.id } })
            .then(() => 
                res.status(200).json({ 
                    message: 'Votre message est supprimé !' 
            }))
            .catch(error => 
                res.status(400).json({ 
                    error 
            }))
        }else {
            res.status(401).json({ "message":"Vous n'avez pas les droits pour supprimer ce tchat" }) 
        }    
    })
        
};
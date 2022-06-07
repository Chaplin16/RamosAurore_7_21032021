const {User, Tchat, Comment} = require('../models/index');


exports.createComment = (req, res, next) => {
    const comment = req.body;
    Comment.create({
        UserId:comment.UserId,
        TchatId:comment.TchatId,
        comment:comment.comment
    }).then(comment => { 
        res.status(201).json({ 
            message : comment
        })
    }).catch(error => res.status(404).json({ error:"erreur dans la requête" }));
};

exports.getOneComment = (req, res, next) => {
    Comment.findOne({ 
        where: {
            id:req.params.id
        }, include: [
            { model: User }
        ] 

    }).then(comment => 
        res.status(200).json(
            comment
    )).catch(error => res.status(404).json({ error:"erreur dans la requête" }));;
};


exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        include: [
            { model: User }
         ] ,
        order:[[
            "createdAt", "ASC"
        ]]
    })
        .then(comments => 
            res.status(200).json(
                comments
            ))
        .catch(error => res.status(404).json( error ));
}

exports.deleteComment = (req, res, next) => {
    Comment.findOne({ 
        where: {
            id:req.params.id
        }
    }).then(comment => {
        if(comment.UserId == req.token.userId || req.token.isAdmin){
            Comment.destroy({ where: { id: req.params.id } })
            .then(() => 
                res.status(200).json({ 
                    message: 'Votre commentaire est supprimé !' 
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

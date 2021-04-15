const {User, Tchat, Comment} = require('../models/index');


exports.createComment = (req, res, next) => {
    const comment = req.body;
    Comment.create({
        userId:comment.userId,
        TchatId:comment.TchatId,
        comment:comment.comment
    }).then(comment => { 
        res.status(201).json({ 
            message : comment
        })
    }).catch(error => res.status(404).json({ error:"erreur dans la requête" }));
};


exports.getComment = (req, res, next) => {
    Comment.findAll()
        .then(tchats => res.status(200).json(comments))
        .catch(error => res.status(404).json( error ));
}

exports.deleteComment = (req, res, next) => {
    const id = req.params.id;
       // if(Comment.userId == req.token.userId || req.token.isAdmin){
            Comment.destroy({ where: {id: id}  })
            .then(id =>
                res.status(200).json({ 
                    message: 'Votre commentaire est supprimé!' 
            }))
            .catch(error =>
                res.status(400).json({
                    error: 'erreur dans la suppression du commentaire' 
        }));
     //}    
};



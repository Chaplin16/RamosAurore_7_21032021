const Comment = require('../models/comment');


// exports.createComment = (req, res, next) => {
//     const comment = JSON.parse(req.body.comment);
//     Comment.create({
//         idUser:comment.idUser,
//         comment:comment.comment
//     }).then(comment => {
//         res.status(201).json({ message: "Nouveau commentaire créé !" })
//     }).catch(error => res.status(404).json({ error:"erreur dans la requête" }));
// };

// exports.commentDelete = (req, res, next) => {
//     Comment.findOne({ where: { id: req.params.id } })
//     .then(comment => {
//         if(comment.userId == req.token.userId || req.token.isAdmin){
//             comment.destroy({ where: { id: id } })
//             .then(() =>
//                 res.status(200).json({ 
//                     message: 'Votre commentaire est supprimé!' 
//                 }))
//             .catch(error =>
//                 res.status(400).json({
//                     error: 'commentaire non supprimé' 
//             }));
//         }    
//     })
//     .catch(error =>
//         res.status(500).json({ 
//             error: 'Problème de serveur!!' 
//         })
//     );
// };
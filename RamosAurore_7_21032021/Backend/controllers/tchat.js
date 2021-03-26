const Tchat = require('../models/tchat');
//require('../models/connexion');

//route pour creer un tchat
exports.createTchat = (req, res, next) => {
        Tchat.create({
            title: req.body.title,
            content: req.body.content,
            attachment: req.body.attachment,
            likes: req.body.likes,
            comment: req.body.comment
        }).then(() => res.status(201).send({ message: "Nouveau message créé !" }))
        .catch(error => res.status(404).json({ error }));
};

//route pour modifier le tchat
exports.modifyTchatContent = (req, res, next) => {
    const id = req.params.id  
    Tchat.findOne({ where: { id: id } })
    .then(content => {
        content.update({ content: req.body.content })
            .then(() => 
                res.status(200).json({ message: 'Votre message est modifié!' }))
            .catch(error =>
                res.status(400).json({ error }));
    })
    .catch(error => 
        res.status(500).json({ error: 'Problème de serveur!!' })
    );
};


//route pour modifier la photo
//exports.modifyTchatAttachment = (req, res, next) => {

        
// //route pour supprimer un tchat
// exports.tchatDelete = (req, res, next) => {
//     const id = req.params.id  
//     Tchat.findOne({ where: { id: id } })
//     .then(tchat => {
//         tchat.destroy({ where: { id: id } })
//         .then(() =>
//             res.status(200).json({ 
//                 message: 'Votre message est supprimé!' 
//             }))
//         .catch(error =>
//             res.status(400).json({
//                  error: 'message non supprimé' 
//             }));
//     })
//     .catch(error =>
//         res.status(500).json({ 
//             error: 'Problème de serveur!!' 
//         })
//     );
// };
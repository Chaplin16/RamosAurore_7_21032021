const Tchat = require('../models/tchat');
const firesystem = require('fs');
const multer = require('../middlewares/multer');



//route pour creer un tchat
exports.createTchat = (req, res, next) => {
    Tchat.create({
            title: req.body.title,
            content: req.body.content,
            attachment: `${req.protocol}://${req.get("host")}/images/${req.body.attachment}`,
            likes: req.body.likes,
            comment: req.body.comment
        }).then(tchat => {
            if (req.body.title === null || req.body.content === null) {
                res.status(400).json({ message: 'Les champs "titre" et "commentaire" doivent être remplis!' });
            } else {
                res.status(201).json({ message: "Nouveau message créé !" })
            }
        })
        .catch(error => res.status(404).json({ error:"erreur dans la requête" }));
};

//route pour voir un tchat
exports.getOneTchat = (req, res, next) => {
    Tchat.findOne({ id: req.params.id })
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
    const id = req.params.id  
    Tchat.findOne({ where: { id: id } })
    .then(tchat => {
        tchat.destroy({ where: { id: id } })
        .then(() =>
            res.status(200).json({ 
                message: 'Votre message est supprimé!' 
            }))
        .catch(error =>
            res.status(400).json({
                 error: 'message non supprimé' 
            }));
    })
    .catch(error =>
        res.status(500).json({ 
            error: 'Problème de serveur!!' 
        })
    );
};

//route des likes                A VOIR    A VOIR    A VOIR 
exports.likeTchat = (req, res, next) => {
    Tchat.findOne({ id: req.params.id }) //  findOne c est pour trouver un seul objet (on veut que l id trouvé soit le meme que le id de la requete)
        .then(tchat => {
            switch (req.body.likes) {
                case 1: //si un utilisateur clique sur un like 
                    tchat.likes += 1;
                    tchat.userLiked.push(req.body.id);
                    break;
                case 0: //si un utilisateur enleve son like
                    tchat.usersLiked.some(id => id == req.body.id) //methode some : si un element du tableau repond a la fonction/retourne un booleen
                    tchat.likes -= 1;
                    tchat.userLiked = tchat.userLiked.filter(id => id != req.body.id); //methode filter: retourne un new tableau contenant tous les elements du tableau qui repond à la fonction
                    break;
                default: //si un autre cas arrive
                    console.log('erreur dans les likes/dislikes');
            }
            tchat.save() //enregistrement
                .then(() => res.status(200).json())
                .catch(error => res.status(400).json({ error }));
        })
}


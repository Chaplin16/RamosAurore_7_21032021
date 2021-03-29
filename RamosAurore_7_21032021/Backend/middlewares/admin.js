const jwt = require('jsonwebtoken');


const admin = (req, res, next) => {
    User.findOne({ where: { id: req.params.id } })
        .then(user => {
            if(user.isAdmin == true) {
                next();
            }else {
                res.status(400).json({ error: "Accès refusé! Vous n'êtes pas administrateur" }) 
            }
        })
        .catch(error =>
            res.status(500).json({ error: 'Problème de serveur!!' })
        );
}

module.exports = admin;
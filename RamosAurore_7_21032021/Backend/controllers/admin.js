exports.getAllTchatsByAdmin = (req, res, next) => {
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllUsersByAdmin = (req, res, next) => {
    User.findAll()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};


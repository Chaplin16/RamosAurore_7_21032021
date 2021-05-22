const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const commentControllers = require('../controllers/comment');


//ROUTE COMMENT

//creer un commentaire
router.post('/', auth, commentControllers.createComment);
//afficher un seul commentaire
router.get('/getOne/:id/', auth, commentControllers.getOneComment);
//afficher tous les commentaires
router.get('/getAllComments', auth, commentControllers.getAllComments);
//supprimer un commentaire
router.delete('/:id/delete', auth, commentControllers.deleteComment);

module.exports = router;
const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multerTchat = require('../middlewares/multerTchat');

// ROUTES TCHAT

//creer unn tchat
router.post('/', auth, multerTchat, tchatControllers.createTchat);
//afficher un tchat
router.get('/getTchats/:UserId', auth, tchatControllers.getTchats);
//afficher tous les tchats
router.get('/getAll', auth, tchatControllers.getAllTchats);
//supprimer un tchat
router.delete('/:id/delete', auth, tchatControllers.tchatDelete);

module.exports = router;
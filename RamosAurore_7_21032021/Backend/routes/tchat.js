const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multerTchat = require('../middlewares/multerTchat');

// ROUTES TCHAT
router.post('/', auth, multerTchat, tchatControllers.createTchat);

router.get('/getTchats/:UserId', auth, tchatControllers.getTchats);
router.get('/getAll', auth, tchatControllers.getAllTchats);

router.delete('/:id/delete', auth, tchatControllers.tchatDelete);


module.exports = router;
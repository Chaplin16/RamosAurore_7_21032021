const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multerTchat = require('../middlewares/multerTchat');

// ROUTES TCHAT
router.post('/', multerTchat, tchatControllers.createTchat);

router.get('/getOne/:id', auth, tchatControllers.getOneTchat);
router.get('/getAll', tchatControllers.getAllTchats);

router.delete('/:id/delete', auth, tchatControllers.tchatDelete);


module.exports = router;
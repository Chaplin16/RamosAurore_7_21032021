const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer');

// ROUTES TCHAT
router.post('/', multer,tchatControllers.createTchat);

router.get('/getOne/:id', tchatControllers.getOneTchat);
router.get('/getAll', auth, tchatControllers.getAllTchats);

router.delete('/:id/delete', auth, tchatControllers.tchatDelete);


module.exports = router;
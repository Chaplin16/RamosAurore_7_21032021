const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer');

// ROUTES TCHAT
router.post('/', multer,tchatControllers.createTchat);

router.get('/:id',auth, tchatControllers.getOneTchat);
router.get('/allTchats', auth, tchatControllers.getAllTchats);

router.delete('/:id/delete', auth, tchatControllers.tchatDelete);


module.exports = router;
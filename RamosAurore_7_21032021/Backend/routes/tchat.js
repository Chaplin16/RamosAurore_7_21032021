const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer');

// ROUTES TCHAT
router.post('/', multer,tchatControllers.createTchat);

router.get('/:id',auth, tchatControllers.getOneTchat);
router.get('/all', auth, tchatControllers.getAllTchat);

router.delete('/:id/delete', tchatControllers.tchatDelete);


module.exports = router;
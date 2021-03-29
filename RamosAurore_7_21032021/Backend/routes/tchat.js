const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer-config');

// ROUTES TCHAT
router.post('/', tchatControllers.createTchat);

router.get('/:id',auth, tchatControllers.getOneTchat);
router.get('/all', auth, tchatControllers.getAllTchat);
router.post('/:id/likes', tchatControllers.likeTchat);

router.delete('/:id/delete', tchatControllers.tchatDelete);


module.exports = router;
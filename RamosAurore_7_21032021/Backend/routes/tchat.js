const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');

// ROUTES TCHAT
router.post('/', tchatControllers.createTchat);

router.get('/getOne/:id', auth, tchatControllers.getOneTchat);
router.get('/getAll',  tchatControllers.getAllTchats);

router.delete('/:id/delete', tchatControllers.tchatDelete);


module.exports = router;
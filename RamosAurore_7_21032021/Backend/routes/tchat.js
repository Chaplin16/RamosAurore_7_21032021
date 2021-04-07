const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');

// ROUTES TCHAT
router.post('/', tchatControllers.createTchat);

router.get('/getOne/:id', tchatControllers.getOneTchat);
router.get('/getAll', auth, tchatControllers.getAllTchats);

router.delete('/:id/delete', auth, tchatControllers.tchatDelete);


module.exports = router;
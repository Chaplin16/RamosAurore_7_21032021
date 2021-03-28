const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer-config');

// ROUTES TCHAT
router.post('/', tchatControllers.createTchat);

router.put('/:id/content/update',auth, tchatControllers.modifyTchatContent);
router.put('/:id/title/update', auth, tchatControllers.modifyTchatTitle);
router.put('/:id/attachment/update', auth, multer, tchatControllers.modifyTchatAttachment);

router.delete('/:id/delete', tchatControllers.tchatDelete);


module.exports = router;
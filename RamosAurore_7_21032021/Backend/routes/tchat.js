const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');
const multer = require('../middlewares/multer-config');

// ROUTES TCHAT
router.post('/', multer, tchatControllers.createTchat);

router.put('/:id/content/update',auth, tchatControllers.modifyTchatContent);
router.put('/:id/title/update', tchatControllers.modifyTchatTitle);
router.put('/:id/attachment/update', multer, tchatControllers.modifyTchatAttachment);

router.delete('/:id/delete', tchatControllers.tchatDelete);


module.exports = router;
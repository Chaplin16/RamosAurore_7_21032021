// ROUTES TCHAT//

// CREER UN TCHAT                      POST
// VOIR TOUS LES TCHATS                GET
// VOIR UN TCHAT D 1 USER PARTICULIER  GET
// LIKER UN TCHAT                      POST
// DISLIKER UN TCHAT                   POST
// SUPPRIMER SON TCHAT                 PUT

//FORUM
//     -TCHAT                                      POST     
//          avec texte
//          avec photo  
//          avec date de creation
const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const tchatControllers = require('../controllers/tchat');

router.post('/', tchatControllers.createTchat);
router.put('/:id/content/update', tchatControllers.modifyTchatContent);
//router.put('/:id/title/update', tchatControllers.modifyTchatTitle);
//router.put('/:id/attachment/update', tchatControllers.modifyTchatAttachment);

//router.delete('/:id/delete', tchatControllers.tchatDelete);

module.exports = router;
const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');


router.post('/signup', multer, userControllers.createAccount);
router.post('/login',  userControllers.login);

//router.get('/getOne/:id', userControllers.getOneUser); //oter AUTH
router.get('/getAllUsers', auth, userControllers.getAllUsers);

router.put('/:id/profil/update',auth, userControllers.modifyProfil);
router.put('/:id/avatar/update', auth, multer, userControllers.modifyUserAvatar);
router.put('/:id/password/update', auth, userControllers.modifyUserPassword);

router.delete('/:id/delete', auth, userControllers.userDelete);

module.exports = router;

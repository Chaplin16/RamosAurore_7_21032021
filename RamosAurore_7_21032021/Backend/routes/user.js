const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');

//ROUTES USER

//creer un compte
router.post('/signup', multer, userControllers.createAccount);
//s authentifier 
router.post('/login',  userControllers.login);
//afficher tous lse utilisateurs
router.get('/getAllUsers', auth, userControllers.getAllUsers);
//modifier son profil
router.put('/:id/profil/update',auth, userControllers.modifyProfil);
//modifier son avatar
router.put('/:id/avatar/update', auth, multer, userControllers.modifyUserAvatar);
//modifier son password
router.put('/:id/password/update', auth, userControllers.modifyUserPassword);
//supprimer son compte
router.delete('/:id/delete', auth, userControllers.userDelete);

module.exports = router;

//ROUTE USER

// SIGNUP
// CREER SON PROFIL
//     - ID                                        POST
//     - PSEUDO   (UNIQUE)                         POST
//     - EMAIL (UNIQUE)                            POST

//LOGIN
//     - MOT DE PASSE FORT                         POST


// MODIFIER SON PROFIL                             PUT
// SUPPRIMER SON PROFIL                            DELETE

                                     
const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');

router.post('/signup', userControllers.create_account);
router.post('/login', userControllers.login);

router.put('/:id/username/update', userControllers.usernameUpdate);
router.put('/:id/email/update', userControllers.userEmailUpdate);
router.put('/:id/password/update', userControllers.userPasswordUpdate);
router.put('/:id/job/update', userControllers.userJobUpdate);

router.delete('/:id/delete', userControllers.userDelete);

module.exports = router;

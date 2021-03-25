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

router.get('/:id', userControllers.getOneUser);
router.get('/users', userControllers.getAllUsers);

router.put('/:id/username/update', userControllers.modifyUsername);
router.put('/:id/email/update', userControllers.modifyUserEmail);
router.put('/:id/password/update', userControllers.modifyUserPassword);
router.put('/:id/job/update', userControllers.modifyUserJob);

router.delete('/:id/delete', userControllers.userDelete);

module.exports = router;

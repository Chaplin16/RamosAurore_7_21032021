const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');

router.post('/signup', userControllers.createAccount);
router.post('/login', userControllers.login);

router.get('/:id', auth, userControllers.getOneUser);
router.get('/all', auth, userControllers.getAllUsers); //NE FONCTIONNE PAS

router.put('/:id/username/update', auth, userControllers.modifyUsername);
router.put('/:id/avatar/update', auth, userControllers.modifyUserAvatar);
router.put('/:id/email/update', auth, userControllers.modifyUserEmail);
router.put('/:id/password/update', auth, userControllers.modifyUserPassword);
router.put('/:id/job/update', auth, userControllers.modifyUserJob);

router.delete('/:id/delete', auth, userControllers.userDelete);

module.exports = router;

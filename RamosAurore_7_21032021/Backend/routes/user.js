const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');

router.post('/signup', userControllers.createAccount);
router.post('/login', userControllers.login);

router.get('/:id', userControllers.getOneUser);
router.get('/', userControllers.getAllUsers);

router.put('/:id/username/update', auth, userControllers.modifyUsername);
router.put('/:id/avatar/update', userControllers.modifyUserAvatar);
router.put('/:id/email/update', userControllers.modifyUserEmail);
router.put('/:id/password/update', userControllers.modifyUserPassword);
router.put('/:id/job/update', userControllers.modifyUserJob);

router.delete('/:id/delete', userControllers.userDelete);

module.exports = router;

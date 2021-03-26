const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');

router.post('/signup', userControllers.createAccount);
router.post('/login', userControllers.login);

router.get('/:id', userControllers.getOneUser);
router.get('/', userControllers.getAllUsers);

router.put('/:id/username/update', userControllers.modifyUsername);
router.put('/:id/email/update', userControllers.modifyUserEmail);
router.put('/:id/password/update', userControllers.modifyUserPassword);
router.put('/:id/job/update', userControllers.modifyUserJob);

router.delete('/:id/delete', userControllers.userDelete);

module.exports = router;

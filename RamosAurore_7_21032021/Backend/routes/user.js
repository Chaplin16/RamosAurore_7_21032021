const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');
const multerAvatar = require('../middlewares/multerAvatar');


router.post('/signup', userControllers.createAccount);
router.post('/login', userControllers.login);

router.get('/:id', userControllers.getOneUser); //oter AUTH
router.get('/all', auth, userControllers.getAllUsers);
router.get('/:email/userId', auth, userControllers.getUserId);

router.put('/:id/username/update', auth, userControllers.modifyUsername);
router.put('/:id/avatar/update', auth, multerAvatar, userControllers.modifyUserAvatar);
router.put('/:id/email/update', auth, userControllers.modifyUserEmail);
router.put('/:id/password/update', auth, userControllers.modifyUserPassword);
router.put('/:id/job/update', auth, userControllers.modifyUserJob);

router.delete('/:id/delete', auth, userControllers.userDelete);

module.exports = router;

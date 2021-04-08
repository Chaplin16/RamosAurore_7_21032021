const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');
const userControllers = require('../controllers/user');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');


router.post('/signup', multer, userControllers.createAccount);
router.post('/login', userControllers.login);

router.get('/getOne/:id', auth, userControllers.getOneUser); //oter AUTH
router.get('/getAll', userControllers.getAllUsers);
router.get('/:email/userId', auth, userControllers.getUserId);

router.put('/:id/username/update', auth, userControllers.modifyUsername);
router.put('/:id/avatar/update', multer, userControllers.modifyUserAvatar);
router.put('/:id/email/update', auth, userControllers.modifyUserEmail);
router.put('/:id/password/update', auth, userControllers.modifyUserPassword);
router.put('/:id/job/update', auth, userControllers.modifyUserJob);

router.delete('/:id/delete', auth, userControllers.userDelete);

module.exports = router;

const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const commentControllers = require('../controllers/comment');


router.post('/', auth, commentControllers.createComment);

router.get('/getOne/:id/', auth, commentControllers.getOneComment);
router.get('/getAllComments', auth, commentControllers.getAllComments);

router.delete('/:id/delete', auth, commentControllers.deleteComment);


module.exports = router;
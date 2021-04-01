const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const commentControllers = require('../controllers/comment');


router.post('/', auth, commentControllers.createComment);
router.delete('/:id/delete', auth, commentControllers.commentDelete);


module.exports = router;
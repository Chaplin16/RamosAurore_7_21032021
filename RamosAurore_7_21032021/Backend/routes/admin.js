const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const adminControllers = require('../controllers/admin');

//ROUTES
router.delete('/:id', auth, admin, adminControllers, deleteUserByAdmin );
router.delete('/:id', auth, admin, adminControllers, deleteTchatByAdmin );
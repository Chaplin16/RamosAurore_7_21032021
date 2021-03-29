const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const adminControllers = require('../controllers/admin');

//ROUTES
router.get('/', auth, admin, adminControllers, getAllTchatsByAdmin );
router.get('/', auth, admin, adminControllers, getAllUsersByAdmin );
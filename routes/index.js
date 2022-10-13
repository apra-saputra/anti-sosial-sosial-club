const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const Help = require('../helpers');
const home = require('./home')
const profile = require('./profile')


router.get('/', UserController.landingpage)
router.get('/register', UserController.getRegister )
router.post('/register', UserController.postRegister )
router.post('/login', UserController.postLogin )
router.get('/logout', UserController.getLogout)


router.use(Help.validate)
router.use('/home', home)
router.use('/profile', profile)

module.exports = router
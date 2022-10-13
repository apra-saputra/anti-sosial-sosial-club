const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const Help = require('../helpers');
const home = require('./home')


router.get('/', UserController.landingpage)
router.get('/register', UserController.getRegister )
router.post('/register', UserController.postRegister )
router.post('/login', UserController.postLogin )
router.get('/logout', UserController.getLogout)
router.get('/profil', Help.validate , UserController.profil)

router.use(Help.validate)
router.use('/home', home)

module.exports = router
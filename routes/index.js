const express = require('express');
const router = express.Router()
// const routeStore = require('./store');
// const routeEmploy = require('./employ');
const UserController = require('../controllers/UserController');

router.get('/', UserController.redirect)

router.get('/register', UserController.getRegister )

router.post('/register', UserController.postRegister )

router.get('/login', UserController.getLogin )

router.post('/login', UserController.postLogin )

// router.use('/stores', routeStore)
// router.use('/employees', routeEmploy)

module.exports = router
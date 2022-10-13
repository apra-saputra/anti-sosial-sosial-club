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

router.get('/logout', UserController.getLogout)

router.use((req, res, next) => {
  const error = `Please login first`
  if(!req.session.userId) {
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
})

const validate = (req,res, next) => {
  const error = `please login first`
  if(!req.session.userId) {
    res.redirect(`/login?error=${error}`)
  } else {
    next()
  }
}

router.get('/home', validate , UserController.home)

router.get('/profil', validate, UserController.profil)



module.exports = router
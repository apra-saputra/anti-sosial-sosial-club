const {User} = require('../models');
const bcrypt = require('bcryptjs');

class UserController {
  static redirect(req, res) {
    res.redirect('/login')
  }

  static getRegister(req, res) {
    res.render('register')
  }

  static postRegister(req, res) {
    const {username, email, password, role} = req.body
    User.create({username, email, password, role})
    .then(newUser => {
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getLogin(req, res) {
    const {error} = req.query
    // res.send(error)
    res.render('login', {error})
  }

  static postLogin(req, res) {
    const {username, password} = req.body
    User.findOne({where: { username }})
    .then(user => {
      if(user) {
        const validPassword = bcrypt.compareSync(password, user.password);
        if(validPassword) {
          req.session.userId = user.id
          return res.redirect(`/home`)
        } else {
          const error = `invalid username / password`
          return res.redirect(`/login?error=${error}`)
        }
      } else {
        const error = `invalid username / password`
        return res.redirect(`/login?error=${error}`)
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static home(req, res) {
    res.render(`home`)
    // res.send(`masuk`)
  }

  static profil(req,res) {
    res.render('profil')
  }

  static getLogout(req, res) {
    req.session.destroy(err => {
      if(err) res.send(err)
      else {
        res.redirect('/login')
      }
    })
  }
}
module.exports = UserController
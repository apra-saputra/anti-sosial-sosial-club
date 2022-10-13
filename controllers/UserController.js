const { User, Profile } = require('../models');
const bcrypt = require('bcryptjs');

class UserController {
  static landingpage(req,res){
    const {error} = req.query
    res.render('landing-page', {error})
  }

  static getRegister(req, res) {
    res.render('register')
  }

  static postRegister(req, res) {
    const {username, email, password, role} = req.body
    User.create({username, email, password, role})
    .then(() =>{
      return User.findOne({where: {username:username}})
    })
    .then((user) => {
      const firstName =  "first name"
      const lastName = "last name"
      const dateOfBirth = "01/01/1999"
      const gender = "L"
      const phoneNumber = "133456798"
      const imageUrl = "http://placekitten.com/200/300"
      const UserId = user.id
      return Profile.create({ firstName,lastName,dateOfBirth,gender,phoneNumber,imageUrl,UserId })
    })
    .then(()=>{
      res.redirect('/')
    })
    .catch(err => {
      res.send(err)
    })
  }

  static postLogin(req, res) {
    const {username, password} = req.body
    User.findOne({where: { username }})
    .then(user => {
      console.log(user)
      if(user) {
        const validPassword = bcrypt.compareSync(password, user.password);
        if(validPassword) {
          req.session.user = user
          return res.redirect(`/home`)
        } else {
          const error = `invalid username / password`
          return res.redirect(`/?error=${error}`)
        }
      } else {
        const error = `invalid username / password`
        return res.redirect(`/?error=${error}`)
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static profil(req,res) {
    res.render('profil')
  }

  static getLogout(req, res) {
    req.session.destroy(err => {
      if(err) res.send(err)
      else {
        res.redirect('/')
      }
    })
  }
}
module.exports = UserController
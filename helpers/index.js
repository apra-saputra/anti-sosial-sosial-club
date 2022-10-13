const bcrypt = require('bcryptjs');
const moment = require('moment/moment');

class Help {
  static bcrypt(password) {
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(password, salt);
    return hash
  }

  static validate(req,res, next){
    const error = `please login first`
    if(!req.session.user) {
      res.redirect(`/login?error=${error}`)
    } else {
      next()
    }
  }

  static dateAgo(date) {
    return moment(date).fromNow()
  }
}

module.exports = Help
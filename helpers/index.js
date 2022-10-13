const bcrypt = require('bcryptjs');

class Help {
  static bcrypt(password) {
    var salt = bcrypt.genSaltSync(8);
    var hash = bcrypt.hashSync(password, salt);
    return hash
  }
}
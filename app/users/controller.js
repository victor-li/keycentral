var User = require('./schema');

exports.createUser = function(username, password_hash, cb){
  User.getUserByUsername(username, function(err, user) {
    if (err) cb(err)
    if (user.length) {
      cb('User already exists')
      return;
    }
    var new_user = new User({
      'username' : username,
      'password_hash': password_hash
    })
    new_user.save(function (err) {
      cb(err)
    })
  })
};

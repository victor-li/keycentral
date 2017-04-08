var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    validate: {
      validator: function(v) {
        return /[a-z0-9]([\-\_]?[a-z0-9])*/.test(v) && /.{1,40}/.test(v);
      },
      message: '{VALUE} is not a valid username'
    },
    required: [true, 'Username is required']
  },

  password_hash: {
    type: String,
    validate: {
      validator: function(v) {
        return /[a-f0-9]{64}/.test(v); // PBKDF2 hash 256 bits
      },
      message: 'Password hash is not valid'
    },
    required: [true, 'Password hash is required']
  },

  vault: { type: Buffer },
  created_at: { type: Date },
  updated_at: { type: Date }
})

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

UserSchema.statics.getUserByUsername = function (username, cb) {
  return this.find({ username : username }, cb);
}

module.exports = mongoose.model('User', UserSchema);

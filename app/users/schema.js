var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: { type: String, index: true },
  password_hash: { type: String },
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

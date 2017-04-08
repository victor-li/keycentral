var express = require('express');
var router = express.Router();
var user = require('./controller');

router.post('/register', function(req, res) {
  console.log(req.body);
  user.createUser(req.body.username, req.body.password_hash, function(err) {
    if (err) {
      res.json({'success': 0, 'error': err})
    } else {
      res.json({'success': 1})
    }
  })
})

module.exports = router;

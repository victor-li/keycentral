var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var app = require('./routes')

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("KeyCentral Server listening at http://%s:%s", host, port)
})

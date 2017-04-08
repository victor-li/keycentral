var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello KeyCentral!');
})

app.use('/users', require('./app/users/routes'));

module.exports = app

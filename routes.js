var express = require('express');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello KeyCentral!');
})

module.exports = app

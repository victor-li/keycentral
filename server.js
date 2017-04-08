var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
       res.send('Hello KeyCentral!');
})

var server = app.listen(8000, function () {
       var host = server.address().address
       var port = server.address().port
             
       console.log("KeyCentral Server listening at http://%s:%s", host, port)
})

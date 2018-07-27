var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('This is a Nodejs application and it is deployed on Docker container');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

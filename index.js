var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('EMS Spinnaker Kubernetes Demo!! v11.8 on 28 Feb 2019');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

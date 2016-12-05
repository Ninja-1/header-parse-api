var express = require('express');
var useragent = require('express-useragent');

var app = express();
app.use(useragent.express());

app.get('/', function(req, res) {
  res.status(200).send({
    'ipaddress': req.ip,
    'language': req.acceptsLanguages()[0],
    'software': req.useragent.os
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  // running
});

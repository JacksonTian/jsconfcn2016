var http = require('http');
var crypto = require('crypto');

http.createServer(function (req, res) {

  var password = 'fjalsdfjas';
  var salt = crypto.randomBytes(128).toString('base64');
  var hash = crypto.pbkdf2Sync(password, salt, 10000, 512);

  res.writeHead(200);
  res.end('Hello world!\n');

}).listen(8989);

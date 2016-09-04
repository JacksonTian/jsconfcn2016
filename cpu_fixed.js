var http = require('http');
var crypto = require('crypto');

// fixed it
http.createServer(function (req, res) {
  var password = 'fjalsdfjas';

  var salt = crypto.randomBytes(128).toString('base64');

  crypto.pbkdf2(password, salt, 10000, 512, function(err, hash) {
    res.writeHead(200);
    res.end('Hello world!\n');
  });

}).listen(8990);

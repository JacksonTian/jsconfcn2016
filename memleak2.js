var leaks = [];

var http = require('http');

http.createServer(function (req, res) {
  leaks.push({id: 'id'});

  res.writeHead(200);
  res.end('Hello world!\n');
}).listen(9001);

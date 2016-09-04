'use strict';

var http = require('http');

var GIANT;

function leak() {
  var HUGE = GIANT;

  function unusedClosure() {
    HUGE.slice(1);
  }

  GIANT = {
    willBeLeaked: new Array(1e5).join('.'),
    notAClosure: function notAClosure() {
      return 1;
    }
  }

  HUGE = null;  /* not used anymore! */
}

http.createServer(function(req, res) {
  leak();
  res.writeHead(200);
  res.end('Hello World!\n');
}).listen(3001);

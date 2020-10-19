"use strict";

var aedes = require('aedes')();

var httpServer = require('http').createServer();

var ws = require('websocket-stream');

var port = 8888;
ws.createServer({
  server: httpServer
}, aedes.handle);
httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port);
});
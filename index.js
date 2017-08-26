
// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
// Routing
app.use(express.static(path.join(__dirname, 'html')));


io.on('connection', function(socket){
  console.log('user connected');
  io.emit('this', { will: 'be received by everyone'});
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
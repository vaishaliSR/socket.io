
// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var http = require('http').Server(app);

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var idArray = [];
// Routing
app.use(express.static(path.join(__dirname, 'html')));


io.on('connection', function(socket){
	var id =  socket.id;
  idArray.push(id);
  console.log('user connected');
    socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(dis){
    console.log('user disconnected');
    for(i=0; i<idArray.length; i++){
    if(socket.id === idArray[i]){
     var index =  idArray.indexOf(idArray[i]);
     idArray.splice(index, 1);
     console.log(idArray);
    }
    }
    
  /*if(dis){
  	arr = [];
  	x =0;
   	console.log(dis);
   	var val = arr.indexOf(this);
  	console.log(val);
  	arr.splice(val, 1);
  }*/


  });
  socket.on('reconnect', function(dis){   
  });
  console.log(idArray);
  console.log(socket.rooms);

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
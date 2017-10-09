
// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var http = require('http').Server(app);
var fs = require('fs');

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var idArray = [];


// Routing
app.use(express.static(path.join(__dirname, 'html')));


io.on('connection', function(socket){
	var id =  socket.id;
  idArray.push({id : id});

  fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
    console.log(fs.readFileSync("./html/data.json").toString());

  console.log('user connected');
    socket.on('chat message', function(msg){
    io.emit('chat message', msg);
     socket.to(id).emit('hey', 'I just met you');
  });
  socket.on('disconnect', function(dis){
    console.log('user disconnected');
    for(i=0; i<idArray.length; i++){
    //console.log("run");
    
    if(socket.id === idArray[i].id){
      console.log(idArray[i]);
     var index =  idArray.indexOf(idArray[i]);
     idArray.splice(index, 1);
     console.log(index);
     console.log(idArray);
     fs.readFileSync("./html/data.json");
      fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
     // console.log(socket.client);

    }
    }

  });
  socket.on('reconnect', function(dis){  
 // idArray = []; 
 console.log("reconnected");
     fs.readFileSync("./html/data.json");
      fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
  });
  //console.log(idArray);
  //console.log(id);
 // console.log(socket.rooms);

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
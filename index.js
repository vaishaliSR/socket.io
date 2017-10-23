
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
var clickedId = "";

// Routing
app.use(express.static(path.join(__dirname, 'html')));

io.on('connection', function(socket){
	var id =  socket.id;
  idArray.push({id : id, clickedId: 0});

  fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
    //console.log(fs.readFileSync("./html/data.json").toString());

    socket.on('chat tab', function(id){
      //fs.readFileSync("./html/data.json");
      fs.writeFileSync("./html/data.json", JSON.stringify(id, null));
      idArray = id;
    //console.log(id, idArray);
    });
  socket.on('clicked id', function(clickedid){
    //console.log(clickedid, "clickedid");
    clickedId = clickedid;
  });
    console.log('user connected');
    socket.on('chat message', function(msg){
      console.log(clickedId);
    //io.emit('chat message', msg);
    //var check = JSON.parse(localStorage.ids);

          // console.log(idArray , "hi");
    /////////////////////////////////////////////////////////

  for(var i=0; i<idArray.length; i++){
       if(idArray[i].id == clickedId && idArray[i].clickedId != 0){
          // io.emit('chat message', msg);
          console.log(idArray[i]);
     io.to(idArray[i].id).emit('chat message', msg);

       }
    }
    ///////////////////////////////////////////////////////// 
    // console.log(idArray[idArray.length-1].id);
    // socket.to(id).emit('hey', 'I just met you');
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
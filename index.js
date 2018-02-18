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

io.on('connection', function(socket) {
    var id = socket.id;
    idArray.push({ id: id, clickedId: 0, text: {} });


    fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
    //console.log(fs.readFileSync("./html/data.json").toString());

    socket.on('chat tab', function(id) {

        //fs.readFileSync("./html/data.json");
        fs.writeFileSync("./html/data.json", JSON.stringify(id, null));
        idArray = id;

        //console.log(id, idArray);
    });
    var sender;
    socket.on('clicked id', function(clickedid) {
        //console.log(clickedid, "clickedid");
        clickedId = clickedid;
    });
    console.log('user connected');
    //////////////////////////////////////////////
    socket.on('val', function(senderId) {
        sender = senderId;
        // console.log(use);
    });
    ////////////////////////////////////////////////  
    socket.on('chat push', function(msg) {
        //console.log(clickedId);
        //io.emit('chat message', msg);
        //var check = JSON.parse(localStorage.ids);
        // console.log(idArray , "hi");
        /////////////////////////////////////////////////////////
        console.log(sender);
        for (var i = 0; i < idArray.length; i++) {
            var reciever;
            if (idArray[i].id === socket.id) {

                reciever = idArray[i].clickedId;
                console.log(reciever, "reciever");
                // io.emit('chat message', msg);
                //console.log(idArray[i]);

                //console.log(msg);

                for (var j = 0; j < idArray.length; j++) {

                    if (idArray[j].id === reciever && idArray[j].clickedId != 0) {
                        // console.log(idArray[i].id, sender, idArray[i].clickedId, clickedId, "yes");
                        io.to(idArray[i].clickedId).emit('push message', msg);
                        io.to(idArray[i].id).emit('my message', msg);
                        fs.readFileSync("./html/data.json");
                        fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
                        io.to(idArray[i].id).emit('update', idArray);
                        console.log(idArray);

                    } else {
                        console.log("no");
                        var sender_id = idArray[i].id;
                        io.to(idArray[i].id).emit('update', idArray);
                        // console.log(idArray[i].id, sender, idArray[i].clickedId, clickedId, "no");
                        if (Object.keys(idArray[i].text).length === 0) {
                            idArray[i].text[idArray[i].clickedId] = [msg];
                            fs.readFileSync("./html/data.json");
                            fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
                        } else {
                            idArray[i].text[idArray[i].clickedId].push(msg);


                            fs.readFileSync("./html/data.json");
                            fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
                            //console.log(idArray);
                            io.to(idArray[i].clickedId).emit('chat message');
                            io.to(idArray[i].id).emit('my message', msg);
                        }
                    }
                }
            }

        }
        ///////////////////////////////////////////////////////// 
        // console.log(idArray[idArray.length-1].id);
        // socket.to(id).emit('hey', 'I just met you');
    });
    socket.on('disconnect', function(dis) {
        console.log('user disconnected');
        for (i = 0; i < idArray.length; i++) {
            //console.log("run");

            if (socket.id === idArray[i].id) {
                console.log(idArray[i]);
                var index = idArray.indexOf(idArray[i]);
                idArray.splice(index, 1);
                console.log(index);
                console.log(idArray);
                fs.readFileSync("./html/data.json");
                fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
                // console.log(socket.client);

            }
        }

    });
    socket.on('reconnect', function(dis) {
        // idArray = []; 
        console.log("reconnected");
        fs.readFileSync("./html/data.json");
        fs.writeFileSync("./html/data.json", JSON.stringify(idArray, null));
    });
    //console.log(idArray);
    //console.log(id);
    // console.log(socket.rooms);

});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
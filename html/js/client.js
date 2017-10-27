 $(function() {
     var socket = io();
     socket.on('connect', function() {
         // var id =self.io.managers[Object.keys(self.io.managers)].connecting[0].id;
         
        
         // FETCHING JSON DATA
         $.getJSON('data.json', function(ids) {
             // STORING JSON DATA TO LOCAL STORAGE
             console.log(ids);
             localStorage.setItem('ids', JSON.stringify(ids));
             var userId = JSON.parse(localStorage.getItem('ids'));

             // EVENT LISTENER FOR UPDATE IN LOCAL STORAGE(ADDITTION OF A NEW MEMBER)
             window.addEventListener('storage', function(data) {
                 $("#profile").empty();
                 userId = JSON.parse(data.newValue);
                 //debugger;
                 // APPENDIND THE NEW DATA/PROFILES TO HTML
                 for (i = 0; i < userId.length; i++) {
                     // to add profiles
                     $("#profile").append("<div class='clearfix' id =" + userId[i].id + " onclick='chatTab(this.id)'><div class='picture'><img src='images/profilePicture_sm.jpg' alt='' /></div><div class='content'><div class='userPro'><h2 class='name heading_color P_M0'>" + userId[i].id + "</h2><p class='status text_color P_M0'>Hey there! I am using WhatsApp.</p> </div><div id='messageNumber'></div></div></div>");
                 }
             });

             for (i = 0; i < userId.length; i++) {
                 // to add profiles
                 $("#profile").append("<div class='clearfix' id =" + userId[i].id + " onclick='chatTab(this.id)'><div class='picture'><img src='images/profilePicture_sm.jpg' alt='' /></div><div class='content'><div class='userPro'><h2 class='name heading_color P_M0'>" + userId[i].id + "</h2><p class='status text_color P_M0'>Hey there! I am using WhatsApp.</p> </div><div id='messageNumber'></div></div></div>");
             }

         });

     });
     // SUBMITTING MESSAGES TEXT
     $('form').submit(function() {
     var socId = socket.id;
         socket.emit('chat message');
         socket.emit('chat push', $('#m .input_parent input').val());
             $('#m .input_parent input').val('');
     //console.log(socId);
         return false;
     });

     var x = 0;
     // to add messages
     socket.on('chat message', function() {
       //console.log(socId);
         x++;
         if (x <= 1) {
             $("#messageNumber").append("<span id='number'>" + x + "</span>");
         } else {
             document.getElementById("number").innerHTML = x;
         }
     });
     socket.on('chat push', function(msg){
      var currentId = this.id;
      var jasonData = JSON.parse(localStorage.ids);
      for (var i = 0; i < jasonData.length; i++) {
        console.log(i, jasonData[i].id, currentId, jasonData[i].clickedId, "before");
        
         if(currentId === jasonData[i].id){
            console.log(jasonData[i].id, currentId);
          if(jasonData[i].clickedId !== 0 && socket.id === jasonData[i].clickedId){
          console.log(jasonData[i].id, currentId, jasonData[i].clickedId, socket.id);
        /* $( "#messages").append( "<div class='chatbox'><img src='images/sidecopy.png'><p class='addText'>"+ msg +"</p></div>");*/
          } 

      } 
      else {
        console.log("no");
      }
      }
    
            
             //console.log(localStorage.ids);
           });
     // var check = JSON.parse(localStorage.ids);
     // console.log(check[check.length-1].id);
     // socket.to(check[check.length-1].id).emit('hey', 'I just met you');
     // console.log(idArray);
 });
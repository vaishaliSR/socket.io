$(document).ready(function() {
$(".section1").hide();
$(".navigation div").click(function () {
    $(".navigation div").removeClass("border-bottom");
    $(this).toggleClass("border-bottom");   
});
$(".navigation div").click(function () {

	// for user profile section
	if(this.className === "users center border-bottom"){
     $(".section1").show();
     $(".section2").hide();
     $("body").addClass("bg_none");
     $(".green").addClass("shadow");

	}

	// for chat box section
	else if(this.className === "chats center border-bottom"){
     $(".section1").hide();
     $(".section2").show();
     $("body").removeClass("bg_none");
     $(".green").removeClass("shadow");
	}
});

});
// CHAT TAB FUNCTION - PROFILES TAB
function chatTab(id){
    var js = JSON.parse(localStorage.ids);
    for(i=0; i<js.length; i++){
       if(js[i].id === id){
        js[i].clickedId = id;
       // var x = js[i].clickedId;
        console.log(js[i].id, js[i].clickedId);
       }
      //  console.log(js[i].id, js[i].clickedId);
     //  JSON.parse(js);
      // JSON.parse(x);
      //localStorage.ids = js;

    }
    localStorage.setItem("ids", JSON.stringify(js));
    var data = JSON.parse(localStorage.getItem('ids'))
    ///////////////////////////////////////////////////
  /*  var x = new XMLHttpRequest();

  x.onreadystatechange = function(){
    if( x.status === 200 && x.readyState === 4) {
      // Optional callback for when request completes
      console.log(x.responseText);
    }
  }

  x.open('POST', '/data.json', true);
  x.send(data); */
    ///////////////////////////////////////////////////

    console.log(js);
    console.log(localStorage.ids);
   // console.log(js);
     $(".section1").hide();
     $(".section2").show();
     $("body").removeClass("bg_none");
     $(".green").removeClass("shadow");
    $(".navigation div").toggleClass("border-bottom");  
    $( ".userInfoheader").append("<div class='userInfo clearfix'><div class='picture'><img src='images/profilePicture_sm.jpg' alt='' /></div> <div class='userName'>"+id+" <span class='closeChat' onclick='remove()'> X </span></div></div>");
}
function remove(){
    $( ".userInfo").remove();
}
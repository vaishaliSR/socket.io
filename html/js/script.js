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
    //console.log(data);
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
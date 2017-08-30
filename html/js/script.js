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

	}

	// for chat box section
	else if(this.className === "chats center border-bottom"){
     $(".section1").hide();
     $(".section2").show();
     $("body").removeClass("bg_none");
	}
});
});


$(document).ready(function() {


	 $(".section1").hide();
$(".navigation div").click(function () {
    $(".navigation div").removeClass("border-bottom");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).toggleClass("border-bottom");   
});
$(".navigation div").click(function () {
	//$(".section1").show();
	if(this.className === "users center border-bottom"){
     $(".section1").show();
     $(".section2").hide();
     $("body").addClass("bg_none");

	}
	else if(this.className === "chats center border-bottom"){
     $(".section1").hide();
     $(".section2").show();
     $("body").removeClass("bg_none");
	}
    //$(".section1").toggle();
    // $(".tab").addClass("active"); // instead of this do the below 
   // $(".section2").toggle();   
    
});
});


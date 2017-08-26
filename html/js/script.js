$(document).ready(function() {


	 $(".section1").hide();
$(".navigation div").click(function () {
    $(".navigation div").removeClass("border-bottom");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("border-bottom");   
});
$(".navigation div").click(function () {
    $(".section1").toggle();
    // $(".tab").addClass("active"); // instead of this do the below 
    $(".section2").toggle();   
    $("body").toggleClass("bg_none");
});
});


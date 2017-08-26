$(document).ready(function(){
$(".button_nav").click(function(){
    $(".xs-hide").slideToggle();
});
});
$(document).on("scroll", function(){
if(($(window).width() > 987)&& ($(document).scrollTop() > 100))
	{
$(".design_pattern").css("position", "fixed");
$(".design_pattern").css("z-index", "100");
$(".design_pattern").css("width", "100%");
$(".design_pattern").css("top", "0px");
	

}
else
{
$(".design_pattern").css("position", "static");

}
});



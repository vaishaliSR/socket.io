$(document).ready(function() {
    $(".section1").hide();
    $(".navigation div").click(function() {
        $(".navigation div").removeClass("border-bottom");
        $(this).toggleClass("border-bottom");
    });
    $(".navigation div").click(function() {

        // for user profile section
        if (this.className === "users center border-bottom") {
            $(".section1").show();
            $(".section2").hide();
            $("body").addClass("bg_none");
            $(".green").addClass("shadow");

        }

        // for chat box section
        else if (this.className === "chats center border-bottom") {
            $(".section1").hide();
            $(".section2").show();
            $("body").removeClass("bg_none");
            $(".green").removeClass("shadow");
        }
    });

});
// CHAT TAB FUNCTION - PROFILES TAB
function chatTab(id) {
    var socket = io();
    // var soctedIdd = socket.id;
    // console.log(scktid);

    var js = JSON.parse(localStorage.ids);
    console.log('js', js);
    for (i = 0; i < js.length; i++) {
        console.log(js[i].text[id], "right", js[i]);
        if (js[i].text[js[i]] === id && Object.keys(js[i].text).length === 0) {
            for (j = 0; j < Object.keys(js[i].text).length; j++) {
                console.log(js[i].text[id]);
            }
        }
    }
    for (i = 0; i < js.length; i++) {
        if (js[i].id === scktid) {
            js[i].clickedId = id;

            socket.emit('clicked id', id);
            // var x = js[i].clickedId;
            //console.log(js[i].id, js[i].clickedId);
        }
        //  console.log(js[i].id, js[i].clickedId);
        //  JSON.parse(js);
        // JSON.parse(x);
        //localStorage.ids = js;

    }
    localStorage.setItem("ids", JSON.stringify(js));
    var parsedId = JSON.parse(localStorage.ids);

    // console.log(parsedId);
    socket.emit('chat tab', parsedId);
    //JSON.parse();
    // console.log(js);
    // console.log(localStorage.ids);
    // console.log(js);
    $(".section1").hide();
    $(".section2").show();
    $("body").removeClass("bg_none");
    $(".green").removeClass("shadow");
    $(".navigation div").toggleClass("border-bottom");
    $(".userInfoheader").append("<div class='userInfo clearfix'><div class='picture'><img src='images/profilePicture_sm.jpg' alt='' /></div> <div class='userName' id =" + id + ">" + id + " <span class='closeChat' onclick='remove()'> X </span></div></div>");
    // var val = $('#number').text();

}

function remove() {
    $(".userInfo").remove();
}
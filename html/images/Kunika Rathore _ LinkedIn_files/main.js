// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var loopCount = 0;
var maxLoopCount = 2;


var SITE = {

    initEB : function (){
        bgExit = document.getElementById("background_exit");
        bgExit.addEventListener('click', SITE.addListeners.bgExitHandler);
         SITE.init();
       

    },

    init : function (){
      console.log("hit")
       TweenLite.to($("#content"),0.7, {alpha:1, ease: Sine.easeInOut});
       TweenLite.to($("#image1"),0.7, {alpha:1, ease: Sine.easeInOut});
       TweenLite.delayedCall(0.7, SITE.animate,[0]);
    },

    animate : function (whichStep) {

            switch (whichStep) {

                case 0:
                    TweenLite.to($("#image1"),0.7, {delay:0.8, alpha:0, ease: Sine.easeInOut});
                    TweenLite.to($("#copy0"),0.7, {delay:0.8, alpha:1, ease: Sine.easeInOut});
                    TweenLite.to($("#image2"),0.7, {delay:0.8, alpha:1, ease: Sine.easeInOut});
                    
					
					TweenLite.to($("#image2"),0.7, {delay:3.8, alpha:0, ease: Sine.easeInOut});
                    TweenLite.to($("#copy0"),0.7, {delay:3.8, alpha:0, ease: Sine.easeInOut});
                    TweenLite.to($("#image3"),0.7, {delay:3.8, alpha:1, ease: Sine.easeInOut});
                    TweenLite.to($("#cta"),0.7, {delay:3.8, alpha:1, ease: Sine.easeInOut});
				  
				  	if(loopCount < maxLoopCount){
                     TweenLite.to($("#image3"),0.7, {delay:6.6, alpha:0, ease: Sine.easeInOut});
                     TweenLite.to($("#cta"),0.7, {delay:6.6, alpha:0, ease: Sine.easeInOut});
                     TweenLite.delayedCall(6.6,function(){
                        loopCount++
                     SITE.init();
                     });
                     
                    }

                break;
               
            }
    },
   
    addListeners : {

        bgExitHandler : function() {

            window.open(window.clickTag);
            
        },
    }
}


window.addEventListener("load", function() {
    
    document.getElementById("banner_border").style.display = "block";
    SITE.initEB();

});

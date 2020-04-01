// // ------------- VARIABLES ------------- //
// var ticking = false;
// var isFirefox = (/Firefox/i.test(navigator.userAgent));
// var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
// var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
// var slideDurationSetting = 600; //Amount of time for which slide is "locked"
// var currentSlideNumber = 0;
// var totalSlideNumber = $(".background").length;

// // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
// function parallaxScroll(evt) {
//     if (isFirefox) {
//         //Set delta for Firefox
//         delta = evt.detail * (-120);
//     } else if (isIe) {
//         //Set delta for IE
//         delta = -evt.deltaY;
//     } else {
//         //Set delta for all other browsers
//         delta = evt.wheelDelta;
//     }

//     if (ticking != true) {
//         if (delta <= -scrollSensitivitySetting) {
//             //Down scroll
//             ticking = true;
//             if (currentSlideNumber !== totalSlideNumber - 1) {
//                 currentSlideNumber++;
//                 nextItem();
//             }
//             slideDurationTimeout(slideDurationSetting);
//         }
//         if (delta >= scrollSensitivitySetting) {
//             //Up scroll
//             ticking = true;
//             if (currentSlideNumber !== 0) {
//                 currentSlideNumber--;
//             }
//             previousItem();
//             slideDurationTimeout(slideDurationSetting);
//         }
//     }
// }

// // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
// function slideDurationTimeout(slideDuration) {
//     setTimeout(function() {
//         ticking = false;
//     }, slideDuration);
// }

// // ------------- ADD EVENT LISTENER ------------- //
// var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
// window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// // ------------- SLIDE MOTION ------------- //
// function nextItem() {
//     var $previousSlide = $(".background").eq(currentSlideNumber - 1);
//     $previousSlide.removeClass("up-scroll").addClass("down-scroll");
// }

// function previousItem() {
//     var $currentSlide = $(".background").eq(currentSlideNumber);
//     $currentSlide.removeClass("down-scroll").addClass("up-scroll");
// }

// // scroll down button
// let mouse = document.querySelector(".mouse-icon");

// mouse.addEventListener("click", () => {
//     if (currentSlideNumber === 0) {
//         var $currentSlide = $(".background").eq(currentSlideNumber);
//         $currentSlide.addClass("down-scroll");
//     }

// });

// if(screen.width <=500)
// {

//     const isMobile = {
//     Android: function() {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function() {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function() {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function() {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function() {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function() {
//         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//     }
// };


// }


var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 60; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
//var totalSlideNumber = (".background").length;
var totalSlideNumber = 4;

function parallaxScroll(evt) {    
    var touchobj = evt.changedTouches[0]; 
    var dist = parseInt(touchobj.clientX) - startx; 
}



window.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser(X and Y upto the choice)
        e.preventDefault();
    }, false);



var touchobj = evt.changedTouches[0]; 
var dist = parseInt(touchobj.clientX) - startx;




function parallaxScroll(evt) {    
    var touchobj = evt.changedTouches[0]; 
    var dist = parseInt(touchobj.clientX) - startx; 

    if (ticking != true) {
        if (dist <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
    }
    slideDurationTimeout(slideDurationSetting);
}
if (dist >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
    }
    previousItem();
    slideDurationTimeout(slideDurationSetting);
}
}
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
}, slideDuration);
}

// ------------- SLIDE MOTION ------------- //

function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}


var startx = 0;
var dist = 0;
window.addEventListener('load', function(){ 
    window.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
        startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
        e.preventDefault();
    }, false);
    window.addEventListener('touchmove', _.throttle(parallaxScroll, 60), false);
}, false);


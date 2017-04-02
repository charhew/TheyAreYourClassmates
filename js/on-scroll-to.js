$(document).ready(function() {
  var videoVivianOutro = document.getElementById("video-vivian-outro");
  var audioVivianWorry = document.getElementById("audio-vivian-worry");
  var audioVivianHuh = document.getElementById("audio-vivian-huh");
  var audioVivianAnnoying = document.getElementById("audio-vivian-annoying");
  var audioVivianContribute= document.getElementById("audio-vivian-contribute");

  var videoAndyOutro = document.getElementById("video-andy-outro");
  var audioAndyWelcoming= document.getElementById("audio-andy-welcoming");
  var audioAndyDivide = document.getElementById("audio-andy-divide");
  var audioAndyHalloween = document.getElementById("audio-andy-halloween");
  var audioAndyInvited= document.getElementById("audio-andy-invited");
  var audioAndyTemporary= document.getElementById("audio-andy-temporary");

  //mobile only
  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent) ) {
    var i = 0,
        f = function () {
            $('#assumptions-li-'+ i).addClass('animated');
            i++;
            setTimeout(f, 0);
        };
    f();
  }
  else { //desktop only
    // This is the function used to detect if the element is scrolled into view
    var initScrollPos = 0;
    var playSoundWelcoming = true;
    var playSoundDivide = true;

    $(window).scroll(function(){

      var curScrollPos = $(this).scrollTop();
      var scrollingDown;

      if (curScrollPos > initScrollPos) {
        scrollingDown = true;
      } else {
        scrollingDown = false;
      }
      initScrollPos = curScrollPos;

      function elementScrolled(elem, offsetTop)
      {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          if (scrollingDown) {
            var elemTop = $(elem).offset().top + offsetTop;
          } else {
            var elemTop = $(elem).offset().top - offsetTop + 50; // adding 50px to make it a nicer place where audio comes in
          }
          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }

      function insideBuffer(elem) {
        var elemPos = $(elem).offset().top;
        var elemTopBuffer = $(elem).offset().top - 200;
        var elemBottomBuffer = $(elem).offset().top + 200;
        console.log("elem pos", elemPos);
        console.log("top", elemTopBuffer);
        console.log("bottom", elemBottomBuffer);
        return ((elemPos > elemTopBuffer) && (elemPos < elemBottomBuffer));
      }

      if(elementScrolled('#assumptions', 300)) {
          var i = 0,
              f = function () {
                  $('#assumptions-li-'+ i).addClass('animated');
                  i++;
                  setTimeout(f, 1500);
              };
          f();
      }

      // vivian quotes
      // if(elementScrolled('#video-vivian-outro')) {
      //   if (videoVivianOutro.played.length === 0 ) {
      //     videoVivianOutro.play();
      //   }
      // }
      //
      // if(elementScrolled('#quote-worry')) {
      //   if (audioVivianWorry.played.length === 0 ) {
      //     audioVivianWorry.play();
      //   }
      // }
      //
      // if(elementScrolled('#quote-huh')) {
      //   if (audioVivianHuh.played.length === 0 ) {
      //     audioVivianHuh.play();
      //   }
      // }
      //
      // if(elementScrolled('#quote-annoying')) {
      //   if (audioVivianAnnoying.played.length === 0 ) {
      //     audioVivianAnnoying.play();
      //   }
      // }
      //
      // if(elementScrolled('#quote-contribute')) {
      //   if (audioVivianContribute.played.length === 0 ) {
      //     audioVivianContribute.play();
      //   }
      // }

      // andy quotes
      if(elementScrolled('#video-andy-outro', 350)) {
        if (videoAndyOutro.played.length === 0 ) {
          videoAndyOutro.play();
        }
      }

      if(elementScrolled('#quote-welcoming', 350)) {
        if (insideBuffer('#quote-welcoming')) {
          // if (audioAndyWelcoming.played.length === 0 ) {
          console.log("inside welcoming quote");
          if (playSoundWelcoming) {
            audioAndyWelcoming.play();
            playSoundWelcoming = false;
          }
          // }
        } else {
          playSoundWelcoming = true;
          console.log("outside welcoming quote");
        }
      }

      if(elementScrolled('#quote-divide', 350)) {
        // if (audioAndyDivide.played.length === 0 ) {
        if (insideBuffer('#quote-welcoming')) {
          if (playSoundDivide) {
            audioAndyDivide.play();
            playSoundDivide = false;
          }
        } else {
          playSoundDivide = true;
        }
        // }
      }

      if(elementScrolled('#quote-halloween', 350)) {
        if (audioAndyHalloween.played.length === 0 ) {
          audioAndyHalloween.play();
        }
      }

      if(elementScrolled('#quote-invited', 350)) {
        if (audioAndyInvited.played.length === 0 ) {
          audioAndyInvited.play();
        }
      }

      if(elementScrolled('#quote-temporary', 350)) {
        if (audioAndyTemporary.played.length === 0 ) {
          audioAndyTemporary.play();
        }
      }

    });
  }

  // to pause all the other audio files if one audio file is playing
  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    var videos = document.getElementsByTagName('video');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
    for(var i = 0, len = videos.length; i < len;i++){
        if(videos[i] != e.target){
            videos[i].pause();
        }
    }
  }, true);
});

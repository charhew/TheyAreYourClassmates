$(document).ready(function() {
  var videoVivianOutro = document.getElementById("video-vivian-outro");

  var audioVivianWorry = document.getElementById("audio-vivian-worry");
  var audioVivianHuh = document.getElementById("audio-vivian-huh");
  var audioVivianAnnoying = document.getElementById("audio-vivian-annoying");
  var audioVivianContribute= document.getElementById("audio-vivian-contribute");

  //mobile only
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var i = 0,
        f = function () {
            $('#assumptions-li-'+ i).addClass('animated');
            i++;
            setTimeout(f, 0);
        };
    f();
  }
  else { //desktop only
    // This is then function used to detect if the element is scrolled into view
    $(window).scroll(function(){
      function elementScrolled(elem)
      {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          var elemTop = $(elem).offset().top + 300;
          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
      }

      // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
      if(elementScrolled('#assumptions')) {
          var i = 0,
              f = function () {
                  $('#assumptions-li-'+ i).addClass('animated');
                  i++;
                  setTimeout(f, 1500);
              };
          f();
      }

      if(elementScrolled('#video-vivian-outro')) {
        if (videoVivianOutro.played.length === 0 ) {
          videoVivianOutro.play();
        }
      }

      if(elementScrolled('#quote-worry')) {
        if (audioVivianWorry.played.length === 0 ) {
          audioVivianWorry.play();
        }
      }

      if(elementScrolled('#quote-huh')) {
        if (audioVivianHuh.played.length === 0 ) {
          audioVivianHuh.play();
        }
      }

      if(elementScrolled('#quote-annoying')) {
        if (audioVivianAnnoying.played.length === 0 ) {
          audioVivianAnnoying.play();
        }
      }

      if(elementScrolled('#quote-contribute')) {
        if (audioVivianContribute.played.length === 0 ) {
          audioVivianContribute.play();
        }
      }
    });
  }

  // to pause all the other audio files if one audio file is playing
  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
  }, true);
});

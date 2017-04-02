var videoAndyIntro = document.getElementById("video-andy-intro");
var videoAndyOutro = document.getElementById("video-andy-outro");

$(document).ready(function() {
  // testing if we're on mobile device
  if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    $('#skip-andy-video-link').hide();
    $('.language-panel').hide();
    $('body').removeClass('noscroll');
    $('video').css('min-width', '100%');
    $('video').css('min-height', 'auto');
    videoAndyIntro.controls = 'controls';
    videoAndyOutro.controls = 'controls';
    videoAndyIntro.poster = 'img/andy/andy-intro-poster.png'
    videoAndyOutro.poster = 'img/andy/andy-outro-poster.png'
  }

  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    $('#container-video').click(function() {
      console.log("play video");
      videoAndyIntro.play();
    });
  }
});

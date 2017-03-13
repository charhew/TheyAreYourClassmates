$(document).ready(function() {
  var videoVivianIntro = document.getElementById("video-vivian-intro");
  var videoVivianOutro = document.getElementById("video-vivian-outro");

  var audioVivianWorry = document.getElementById("audio-vivian-worry");
  var audioVivianHuh = document.getElementById("audio-vivian-huh");
  var audioVivianAnnoying = document.getElementById("audio-vivian-annoying");
  var audioVivianContribute= document.getElementById("audio-vivian-contribute");

  $('#chinese').click(function() {
    //intro
    videoVivianIntro.pause();
    videoVivianIntro.src = "res/vivian-intro-ch.mp4";
    if($(window).scrollTop() === 0) {
      console.log("at the top");
      videoVivianIntro.load();
      videoVivianIntro.play();
    }
    //outro
    videoVivianOutro.pause();
    videoVivianOutro.src = "res/vivian-outro-ch.mp4";
    videoVivianOutro.load();
    $("#button-replay-outro").hide();

    //worry
    audioVivianWorry.src = "res/vivian-quote-worry-ch.mp3";
    audioVivianWorry.load();
    audioVivianWorry.play();

    //huh
    audioVivianHuh.src = "res/vivian-quote-huh-ch.mp3";
    audioVivianHuh.load();
    audioVivianHuh.play();

    //annoying
    audioVivianAnnoying.src = "res/vivian-quote-annoying-ch.mp3";
    audioVivianAnnoying.load();
    audioVivianAnnoying.play();

    //contribute
    audioVivianContribute.src = "res/vivian-quote-contribute-ch.mp3";
    audioVivianContribute.load();
    audioVivianContribute.play();
  });

  $('#eng').click(function() {
    //intro
    videoVivianIntro.pause();
    videoVivianIntro.src = "res/vivian-intro-eng.mp4";
    if($(window).scrollTop() === 0) {
      videoVivianIntro.load();
      videoVivianIntro.play();
    }

    //outro
    videoVivianOutro.pause();
    videoVivianOutro.src = "res/vivian-outro-eng.mp4";
    videoVivianOutro.load();
    $("#button-replay-outro").hide();

    //worry
    audioVivianWorry.src = "res/vivian-quote-worry-eng.mp3";
    audioVivianWorry.load();
    audioVivianWorry.play();

    //huh
    audioVivianHuh.src = "res/vivian-quote-huh-eng.mp3";
    audioVivianHuh.load();
    audioVivianHuh.play();

    //annoying
    audioVivianAnnoying.src = "res/vivian-quote-annoying-eng.mp3";
    audioVivianAnnoying.load();
    audioVivianAnnoying.play();

    //contribute
    audioVivianContribute.src = "res/vivian-quote-contribute-eng.mp3";
    audioVivianContribute.load();
    audioVivianContribute.play();
  });
});

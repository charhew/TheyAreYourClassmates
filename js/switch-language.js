$(document).ready(function() {
  // var videoVivianIntro = document.getElementById("video-vivian-intro");
  // var videoVivianOutro = document.getElementById("video-vivian-outro");

  // var audioVivianWorry = document.getElementById("audio-vivian-worry");
  // var audioVivianHuh = document.getElementById("audio-vivian-huh");
  // var audioVivianAnnoying = document.getElementById("audio-vivian-annoying");
  // var audioVivianContribute= document.getElementById("audio-vivian-contribute");

  var videoAndyIntro = document.getElementById("video-andy-intro");
  var videoAndyOutro = document.getElementById("video-andy-outro");

  var videoAndyOutro = document.getElementById("video-andy-outro");
  var audioAndyWelcoming= document.getElementById("audio-andy-welcoming");
  var audioAndyDivide = document.getElementById("audio-andy-divide");
  var audioAndyHalloween = document.getElementById("audio-andy-halloween");
  var audioAndyInvited= document.getElementById("audio-andy-invited");
  var audioAndyTemporary= document.getElementById("audio-andy-temporary");

  $('#chinese').click(function() {

    // vivian --------------------------------------------------

    //intro
    // videoVivianIntro.pause();
    // videoVivianIntro.src = "res/vivian-intro-ch.mp4";
    // if($(window).scrollTop() === 0) {
    //   videoVivianIntro.load();
    //   videoVivianIntro.play();
    // }
    // //outro
    // videoVivianOutro.pause();
    // videoVivianOutro.src = "res/vivian-outro-ch.mp4";
    // videoVivianOutro.load();
    // $("#button-replay-outro").hide();
    //
    // //worry
    // audioVivianWorry.src = "res/vivian-quote-worry-ch.mp3";
    // audioVivianWorry.load();
    // audioVivianWorry.play();
    //
    // //huh
    // audioVivianHuh.src = "res/vivian-quote-huh-ch.mp3";
    // audioVivianHuh.load();
    // audioVivianHuh.play();
    //
    // //annoying
    // audioVivianAnnoying.src = "res/vivian-quote-annoying-ch.mp3";
    // audioVivianAnnoying.load();
    // audioVivianAnnoying.play();
    //
    // //contribute
    // audioVivianContribute.src = "res/vivian-quote-contribute-ch.mp3";
    // audioVivianContribute.load();
    // audioVivianContribute.play();

    // andy --------------------------------------------------

    //intro
    videoAndyIntro.pause();
    videoAndyIntro.src = "res/andy-intro-zh.mp4";
    if($(window).scrollTop() === 0) {
      videoAndyIntro.load();
      videoAndyIntro.play();
    }
    //outro
    // videoAndyOutro.pause();
    // videoAndyOutro.src = "res/andy-outro-zh.mp4";
    // videoAndyOutro.load();
    // $("#button-replay-outro").hide();

    //welcoming
    audioAndyWelcoming.src = "res/andy-quote-welcoming-zh.mp3";
    audioAndyWelcoming.load();
    audioAndyWelcoming.play();

    //divide
    audioAndyDivide.src = "res/andy-quote-divide-zh.mp3";
    audioAndyDivide.load();
    audioAndyDivide.play();

    //halloween
    audioAndyHalloween.src = "res/andy-quote-halloween-zh.mp3";
    audioAndyHalloween.load();
    audioAndyHalloween.play();

    //invited
    audioAndyInvited.src = "res/andy-quote-invited-zh.mp3";
    audioAndyInvited.load();
    audioAndyInvited.play();

    //temporary
    audioAndyTemporary.src = "res/andy-quote-temporary-zh.mp3";
    audioAndyTemporary.load();
    audioAndyTemporary.play();
  });

  $('#eng').click(function() {

    // vivian --------------------------------------------------

    // //intro
    // videoVivianIntro.pause();
    // videoVivianIntro.src = "res/vivian-intro-eng.mp4";
    // if($(window).scrollTop() === 0) {
    //   videoVivianIntro.load();
    //   videoVivianIntro.play();
    // }
    //
    // //outro
    // videoVivianOutro.pause();
    // videoVivianOutro.src = "res/vivian-outro-eng.mp4";
    // videoVivianOutro.load();
    // $("#button-replay-outro").hide();
    //
    // //worry
    // audioVivianWorry.src = "res/vivian-quote-worry-eng.mp3";
    // audioVivianWorry.load();
    // audioVivianWorry.play();
    //
    // //huh
    // audioVivianHuh.src = "res/vivian-quote-huh-eng.mp3";
    // audioVivianHuh.load();
    // audioVivianHuh.play();
    //
    // //annoying
    // audioVivianAnnoying.src = "res/vivian-quote-annoying-eng.mp3";
    // audioVivianAnnoying.load();
    // audioVivianAnnoying.play();
    //
    // //contribute
    // audioVivianContribute.src = "res/vivian-quote-contribute-eng.mp3";
    // audioVivianContribute.load();
    // audioVivianContribute.play();

    // andy --------------------------------------------------

    //intro
    videoAndyIntro.pause();
    videoAndyIntro.src = "res/andy-intro-eng.mp4";
    if($(window).scrollTop() === 0) {
      videoAndyIntro.load();
      videoAndyIntro.play();
    }
    //outro
    // videoAndyOutro.pause();
    // videoAndyOutro.src = "res/andy-outro-eng.mp4";
    // videoAndyOutro.load();
    // $("#button-replay-outro").hide();

    //welcoming
    audioAndyWelcoming.src = "res/andy-quote-welcoming-eng.mp3";
    audioAndyWelcoming.load();
    audioAndyWelcoming.play();

    //divide
    audioAndyDivide.src = "res/andy-quote-divide-eng.mp3";
    audioAndyDivide.load();
    audioAndyDivide.play();

    //halloween
    audioAndyHalloween.src = "res/andy-quote-halloween-eng.mp3";
    audioAndyHalloween.load();
    audioAndyHalloween.play();

    //invited
    audioAndyInvited.src = "res/andy-quote-invited-eng.mp3";
    audioAndyInvited.load();
    audioAndyInvited.play();

    //temporary
    audioAndyTemporary.src = "res/andy-quote-temporary-eng.mp3";
    audioAndyTemporary.load();
    audioAndyTemporary.play();
  });
});

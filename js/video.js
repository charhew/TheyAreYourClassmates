var videoVivianIntro = document.getElementById("video-vivian-intro");
var skipVideoLink = document.getElementById("skip-video-link");
var videoVivianOutro = document.getElementById("video-vivian-outro");

$(document).ready(function() {
		$("#skip-video-link").click(function(event) {
			console.log("You clicked me!");
      $('body').removeClass('noscroll');
      videoVivianIntro.pause();
      $("#button-replay").show();
      $(".container-story-title").hide();
		});

    $("#button-replay").click(function(event) {
      videoVivianIntro.currentTime = 0;
      videoVivianIntro.play();
      $("#button-replay").hide();
      $(".container-story-title").show();
    })
});

function startExperience() {
  console.log("video ended");
  skipVideoLink.innerHTML = "View Vivian's experience.";
  $(skipVideoLink).removeClass("text-link").removeClass("skip-video-link-playing").addClass("button-default").addClass("skip-video-link-ended");
}

function checkScroll() {
  var fraction = 0.8;

    var x = videoVivianOutro.offsetLeft, y = videoVivianOutro.offsetTop, w = videoVivianOutro.offsetWidth, h = videoVivianOutro.offsetHeight, r = x + w, //right
        b = y + h, //bottom
        visibleX, visibleY, visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
            videoVivianOutro.play();
            console.log("visible greater than fraction");
        } else {
            videoVivianOutro.pause();
        }
}


window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

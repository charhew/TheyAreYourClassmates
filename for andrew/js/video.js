var videoVivianIntro = document.getElementById("video-vivian-intro");
var skipAndyVideoLink = document.getElementById("skip-andy-video-link");
var videoVivianOutro = document.getElementById("video-vivian-outro");

var videoAndyIntro = document.getElementById("video-andy-intro");
var videoAndyOutro = document.getElementById("video-andy-outro");

var videoEnded = false;
var scrolling = false;

$(document).ready(function() {
	// videoVivianIntro.play();
	videoAndyIntro.play();

	$(window).on("mousewheel DOMMouseScroll", function() {
		if ($('body').hasClass('noscroll')) {
			if (videoEnded === false) {
				if (scrolling === false) {
					scrolling = true;
					$('#skip-andy-video-link').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		     		$(this).removeClass("bounce");
					}).addClass("bounce");
					setTimeout(function() {scrolling = false}, 1500);
				}
			}
		}
	});

	$("#skip-andy-video-link").click(function(event) {
		console.log("You clicked me!");
		$('body').removeClass('noscroll');
		// videoVivianIntro.pause();
		videoAndyIntro.pause();
		$("#button-replay-intro").show();
		$(".container-story-title").hide();
	});

  $("#button-replay-intro").click(function(event) {
		// videoVivianIntro.currentTime = 0;
		// videoVivianIntro.play();

		videoAndyIntro.currentTime = 0;
		videoAndyIntro.play();
		$("#button-replay-intro").hide();
		$(".container-story-title").show();
  });

	$("#button-replay-outro").click(function(event) {
		// videoVivianOutro.currentTime = 0;
		// videoVivianOutro.play();
		videoAndyOutro.currentTime = 0;
		videoAndyOutro.play();
		$("#button-replay-outro").hide();
  });
});

function startExperience() {
	videoEnded = true;
	console.log("video ended");
	skipAndyVideoLink.innerHTML = "View Andy's experience";
	$(skipAndyVideoLink).removeClass("text-link").removeClass("skip-video-link-playing").addClass("button-default").addClass("skip-video-link-ended");
}

function replayOutro() {
	if (!(/Mobi/.test(navigator.userAgent))) {
		$("#button-replay-outro").show();
	}
}

var videoVivianIntro = document.getElementById("video-vivian-intro");
var skipVideoLink = document.getElementById("skip-video-link");
var videoVivianOutro = document.getElementById("video-vivian-outro");

var videoEnded = false;
var scrolling = false;

$(document).ready(function() {
	videoVivianIntro.play();
	
	$(window).on("mousewheel DOMMouseScroll", function() {
		if ($('body').hasClass('noscroll')) {
			if (videoEnded === false) {
				if (scrolling === false) {
					scrolling = true;
					$('#skip-video-link').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		     		$(this).removeClass("bounce");
					}).addClass("bounce");
					setTimeout(function() {scrolling = false}, 1500);
				}
			}
		}
	});

	$("#skip-video-link").click(function(event) {
		console.log("You clicked me!");
		$('body').removeClass('noscroll');
		videoVivianIntro.pause();
		$("#button-replay-intro").show();
		$(".container-story-title").hide();
	});

  $("#button-replay-intro").click(function(event) {
		videoVivianIntro.currentTime = 0;
		videoVivianIntro.play();
		$("#button-replay-intro").hide();
		$(".container-story-title").show();
  });

	$("#button-replay-outro").click(function(event) {
		videoVivianOutro.currentTime = 0;
		videoVivianOutro.play();
		$("#button-replay-outro").hide();
  });
});

function startExperience() {
	videoEnded = true;
	console.log("video ended");
	skipVideoLink.innerHTML = "View Vivian's experience";
	$(skipVideoLink).removeClass("text-link").removeClass("skip-video-link-playing").addClass("button-default").addClass("skip-video-link-ended");
}

function replayOutro() {
	$("#button-replay-outro").show();
	console.log("outro video's over");
}

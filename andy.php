<?php
session_start();
?>
<!doctype html>
<html lang="en">
<head>
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/animation.css">
	<link rel="stylesheet" href="css/andy.css">
	<meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
	<meta charset="utf-8">
	<title>Andy's Story | They Are Your Classmates</title>
	<link rel="shortcut icon" type="image/png" href="favicon.png"/>
</head>
<body class="noscroll" id="story-andy">
	<div id="skrollr-body">

		<div class="language-panel">
			<div class="language-panel-caller">
				<img src="img/switch-language2.png" alt="switch language icon">
			</div>
			<div class="language-options">
				<button id="eng">ENG</button>
				<button id="chinese">中文</button>
			</div>
		</div>

		<section id="intro">
			<div class="container-video">
				<a class="button-back" href="stories.html">
					<img src="img/back.png" alt="back button">
					<span>all stories</span>
				</a>
				<video id="video-andy-intro" onended="startExperience()">
					<source src="res/andy-intro-eng.mp4" type="video/mp4">
				</video>
				<div class="container-story-title">
					<h6>story</h6>
					<h1>Andy</h1>
				</div>
				<img src="img/video-replay.png" alt="replay video button" id="button-replay-intro" class="replay">
				<a id="skip-andy-video-link" class="text-link skip-video-link-playing" href="#story-content">Already seen this? Skip this video.</a>
			</div>
		</section>

		<!-- container for all the other assets -->
		<div class="story-container" id="story-content">

			<!-- welcoming section -->
			<section class="row" id="welcoming">
				<div class="col-full">
					<img src="img/andy/paint1.png" class="paint" alt="paint brush stroke"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">
					<h2 id="quote-welcoming"
						data-bottom-top="opacity: 0; bottom: 0px;"
						data-top-bottom="opacity: 1; bottom: 50px;">I begged to go to Canada instead of America because I heard they were more open and welcoming.</h2>
					<audio id="audio-andy-welcoming">
						<source src="res/andy-quote-welcoming-eng.mp3" type="audio/mpeg">
					</audio>
				</div>
			</section>

			<!-- multicultural section -->
			<section class="row" id="multicultural">
				<div class="col-left">
					<img src="img/andy/website.jpg" class="website" alt="Government of Canada website featuring multicultural promo"
						data-bottom-top="opacity: 0; left: -100px;"
						data-center-top="opacity: 1; left: 0;"
						>
				</div>
				<div class="col-right">
					<p
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">
						I knew Canada was multicultural and I imagined high school to have people of different cultures laughing together while walking down the hallways. I wanted to meet people from all over the world and maybe get to visit their home countries with them.</p>
				</div>
			</section>

			<!-- divide section -->
			<section class="row" id="divide">
				<div class="col-full">
					<img src="img/andy/paint3.png" class="paint" alt="paint brush stroke"
						data-bottom-top="opacity: 0;;"
						data-center-top="opacity: 1;"
						>
					<img src="img/andy/divide.png" class="divide" alt="classroom with a diagonal line across"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">
					<p
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">The reality turned out quite different from what I expected. When I started high school, a month after moving here, I noticed that Canadian students never talked to me unless they needed to. We didn't really have a presence to them, it seemed.</p>
					<h2 id="quote-divide"
						data-bottom-top="opacity: 0; top: 400px;"
						data-top-bottom="opacity: 1; top: 300px;">There was a divide between Canadian students and International students.</h2>
						<audio id="audio-andy-divide">
							<source src="res/andy-quote-divide-eng.mp3" type="audio/mpeg">
						</audio>
				</div>
			</section>

			<!-- halloween section -->
			<section class="row" id="halloween">
				<div class="col-full">
					<p
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">Halloween came around and so many Canadian students dressed up. We don’t celebrate Halloween in China and I was so confused when I saw all the costumes. It was awkward because none of my friends dressed up. I felt like we missed the memo.</p>

					<img src="img/andy/halloween.jpg" class="halloween" alt="picture of a yearbook, featuring the Halloween page"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 0.7;"
						>
					<img src="img/andy/paint4.png" class="paint" alt="paint brush stroke"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;"
						>
					<h2 id="quote-halloween"
						data-bottom-top="opacity: 0; right: 60px;"
						data-center-top="opacity: 1; right: 80px;"
						data-top-bottom="opacity: 1; right: 100px;"
						>By not dressing up for Halloween, we missed an opportunity for our classmates to accept us as part of the school.</h2>
					<audio id="audio-andy-halloween">
						<source src="res/andy-quote-halloween-eng.mp3" type="audio/mpeg">
					</audio>
				</div>
			</section>



			<!-- invited section -->
			<section class="row" id="invited">
				<div class="col-full">
					<p
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">With every school spirit event like Pajama Day, no one in my group really understood what school spirit was. We never had these events back home and no one told us why these events happened. That's why we didn’t take part in these events. </p>
					<img src="img/andy/paint5.png" class="paint" alt="paint brush stroke"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">
					<h2 id="quote-invited"
						data-bottom-top="opacity: 0; bottom: -10px;"
						data-top-bottom="opacity: 1; bottom: 40px;">I know everyone in the school is invited to these events, but I never felt invited because it was like we were never part of the school to begin with anyways.</h2>
					<audio id="audio-andy-invited">
						<source src="res/andy-quote-invited-eng.mp3" type="audio/mpeg">
					</audio>
				</div>
			</section>

			<!-- lemonade section -->
			<section class="row" id="lemonade">
				<div class="col-full">
					<p
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;">After the very first day of school, some Canadian students in my class were laughing and talking to each other. When other classmates walked past, they said hi and asked them for their names. But when my friends and I walked past, they looked at us but didn't approach us or include us.</p>

					<img src="img/andy/lemonade.gif" class="lemonade" alt="gif of Canadian students ignoring the person in the POV"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 0.7;"
						>
					<img src="img/andy/paint6.png" class="paint" alt="paint brush stroke"
						data-bottom-top="opacity: 0;"
						data-center-top="opacity: 1;"
						>
					<h2 id="quote-temporary"
						data-bottom-top="opacity: 0; right: 60px;"
						data-center-top="opacity: 1; right: 80px;"
						data-top-bottom="opacity: 1; right: 100px;"
						>Maybe Canadian students didn’t bother to talk with us because they saw us as temporary.</h2>
					<audio id="audio-andy-temporary">
						<source src="res/andy-quote-temporary-eng.mp3" type="audio/mpeg">
					</audio>
				</div>
			</section>

		</div>
		<!-- end story-container div -->

		<section id="outro">
			<div class="container-video">
				<video id="video-andy-outro" onended="replayOutro()">
					<source src="res/andy-outro-eng.mp4" type="video/mp4">
				</video>
				<img src="img/video-replay.png" alt="replay video button" id="button-replay-outro" class="replay">
			</div>
		</section>

		<section class="row" id="assumptions">
			<div class="col-left">
				<h3>Andy's Experience</h3>
				<h4>from his perspective</h4>
				<ul>
					<li id="assumptions-li-0">I came here because my dad wanted me to have a better education, but I didn't want to leave my friends in Beijing.</li>
					<li id="assumptions-li-2">I believed Canada would be inclusive of me because it is known for its multiculturalism.</li>
				</ul>
			</div>
			<div class="col-right">
				<h3>Your Perspective</h3>
				<h4>from the questions you answered</h4>
				<ul>
					<?php
						//if the questions were answered
						if(!empty($_SESSION['answer2'])&&!empty($_SESSION['answer3'])) {
							//display answer 2 (why they came here)
							if($_SESSION['answer2']=="learn english") {
								echo "<li id='assumptions-li-1'>Chinese international students chose to come to Canada <strong>to learn English</strong>.</li>";
							}
							else if($_SESSION['answer2']=="better education") {
								echo "<li id='assumptions-li-1'>Chinese international students came to Canada because <strong>education is better</strong> here.</li>";
							}
							else if($_SESSION['answer2']=="better life") {
								echo "<li id='assumptions-li-1'>Chinese international students came to Canada to <strong>have a better life</strong>.</li>";
							}

							//display answer 3 (how i feel when they stick together)
							if($_SESSION['answer3']=="annoyed") {
								echo "<li id='assumptions-li-3'>I feel <strong>annoyed</strong> when Chinese international students stick together and speak their own language.</li>";
							}
							else if($_SESSION['answer3']=="frustrated") {
								echo "<li id='assumptions-li-3'>I feel <strong>frustrated</strong> when Chinese international students stick together and speak their own language.</li>";
							}
							else if($_SESSION['answer3']=="dont mind") {
								echo "<li id='assumptions-li-3'>I <strong>don't mind</strong> when Chinese international students stick together and speak their own language.</li>";
							}
							else if($_SESSION['answer3']=="no opinion") {
								echo "<li id='assumptions-li-3'>I have <strong>no opinion</strong> about Chinese international students sticking together and speaking their own language.</li>";
							}
						}
						//but if they werent answered
						else {
							//display error message
							echo "<li id='assumptions-li-1'>We don't know your perspective. <a href='questions.html' class='inline-link'>Click here to tell us</a>.</li>";
						}
					?>
				</ul>
			</div>
		</section>

		<section class="row" id="footer">
			<div class="container-conclusion-text">
				<h6>Finished the stories?</h6>
				<a class="button-default" href="conclusion.html">Read Conclusion</a>
			</div>
			<a class="arrow-link" href="">
				<div class="next-story">
					<img class="arrow-next-story" src="img/arrow-right.png" alt="right arrow">
        	<p>Ruiwen's Story</p>
      	</div>
			</a>
			<a class="arrow-link" href="">
      	<div class="prev-story">
					<img class="arrow-next-story" src="img/arrow-left.png" alt="left arrow">
        	<p>Vivian's Story</p>
      	</div>
			</a>
		</section>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="js/skrollr.min.js"></script>
	<script src="js/skrollr-story.js"></script>
	<script src="js/video.js"></script>
	<script src="js/switch-language.js"></script>
	<script src="js/smooth-scroll.js"></script>
	<script src="js/on-scroll-to.js"></script>
	<script src="js/mobile.js"></script>
</body>
</html>

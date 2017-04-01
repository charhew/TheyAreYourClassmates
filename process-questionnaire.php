<?php
session_start();
if(isset($_GET['submit'])) {
	if(!empty($_GET['answer1'])&&!empty($_GET['answer2'])&&!empty($_GET['answer3'])&&!empty($_GET['answer4'])&&!empty($_GET['answer4b'])&&!empty($_GET['answer5'])){
		$_SESSION['answer1'] = $_GET['answer1'];
		$_SESSION['answer2'] = $_GET['answer2'];
		$_SESSION['answer3'] = $_GET['answer3'];
		$_SESSION['answer4'] = $_GET['answer4'];
		$_SESSION['answer4b'] = $_GET['answer4b'];
		$_SESSION['answer5'] = $_GET['answer5'];
		echo "<p>".$_SESSION['answer1']."</p>";
		echo "<p>".$_SESSION['answer2']."</p>";
		echo "<p>".$_SESSION['answer3']."</p>";
		echo "<p>".$_SESSION['answer4']."</p>";
		echo "<p>".$_SESSION['answer4b']."</p>";
		echo "<p>".$_SESSION['answer5']."</p>";
	} else {
		echo "Answers were incomplete.";
	}
} else {
	echo "No answers were submitted.";
}

?>
var answer1, answer2, answer3, answer4, answer4b, answer5;
$(document).ready(function() {

  var goToPart2;

  $('#container-questions-explanation .button-next').click(function() {
    $('#container-questions-explanation div').removeClass('fade-in');
    $('#container-questions-explanation div').addClass('fade-out');
    setTimeout(function() {
      showQuestionOne();
      $('#container-questions-explanation div').hide();
    }, 1000);
  });

  function showQuestionOne(){
    $('#question-one').fadeIn(1000);
    $('#yes, #no').click(function () {
      if (this.id == 'yes') {
          answer1="yes";
      }
      else if (this.id == 'no') {
          answer1="no";
      }
      $('#question-one').fadeOut(500);
      showQuestionTwo();
    });
  }

  function showQuestionTwo(){
    setTimeout(function() {
      $('#question-two').fadeIn(500);
      $('#learn-english, #better-education, #better-life').click(function () {
        if (this.id == 'learn-english') {
            answer2="learn english";
        }
        else if (this.id == 'better-education') {
            answer2="better education";
        }
        else if (this.id == 'better-life') {
            answer2="better life";
        }
        $('#question-two').fadeOut(500);
        showQuestionThree();
      });
    }, 1000);
  }

  function showQuestionThree(){
    setTimeout(function() {
      $('#question-three').fadeIn(500);
      $('#language-annoyed, #language-angry, #language-dont-mind, #language-no-opinion').click(function () {
        if (this.id == 'language-annoyed') {
            answer3="annoyed";
        }
        else if (this.id == 'language-angry') {
            answer3="frustrated";
        }
        else if (this.id == 'language-dont-mind') {
            answer3="dont mind";
        }
        else if (this.id == 'language-no-opinion') {
            answer3="no opinion";
        }
        $('#question-three').fadeOut(500);
        showQuestionFour();
      });
    }, 1000);
  }

  function showQuestionFour(){
    setTimeout(function() {
      $('#question-four').fadeIn(500);
      $('#accept, #avoid').click(function () {
        if (this.id == 'accept') {
            answer4="accept";
            answer4b="N/A";
        }
        else if (this.id == 'avoid') {
            answer4="avoid";
            goToPart2 = true;
        }
        $('#question-four').fadeOut(500);

        if (goToPart2) {
          showQuestionFourPart2();
          goToPart2 = false;
        } else {
          showQuestionFive();
        }
      });
    }, 1000);
  }

  function showQuestionFourPart2(){
    setTimeout(function() {
      $('#question-four-p2').fadeIn(500);
      $('#focus-work, #dont-contribute, #other-submit, #bad-grade').click(function () {
        if (this.id == 'focus-work') {
            answer4b="focus on work";
        }
        else if (this.id == 'dont-contribute') {
            answer4b="dont contribute";
        }
        else if (this.id == 'bad-grade') {
            answer4b="bad grade";
        }
        else if (this.id == 'other-submit') {
            answer4b="they typed their own answer";
        }
        $('#question-four-p2').fadeOut(500);
        showQuestionFive();
      });
    }, 1000);
  }

  function showQuestionFive(){
    setTimeout(function() {
      $('#question-five').fadeIn(500);
      $('#presenting-annoyed, #feel-bad, #shouldnt-be-afraid, #doesnt-bother').click(function () {
        if (this.id == 'presenting-annoyed') {
            answer5="presenting annoyed";
        }
        else if (this.id == 'feel-bad') {
            answer5="feel bad";
        }
        else if (this.id == 'shouldnt-be-afraid') {
            answer5="shouldnt be afraid";
        }
        else if (this.id == 'doesnt-bother') {
            answer5="doesnt bother";
        }
        $('#question-five').fadeOut(500);
        finishQuestionnaire();
      });
    }, 1000);
  }

  function finishQuestionnaire(){
    if (window.XMLHttpRequest){
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
      if (xmlhttp.readyState==4 && xmlhttp.status==200){
        window.location.href = 'stories.html';
      }
    }

    xmlhttp.open("GET","process-questionnaire.php?submit=true&answer1="+answer1+"&answer2="+answer2+"&answer3="+answer3+"&answer4="+answer4+"&answer4b="+answer4b+"&answer5="+answer5,true);
    xmlhttp.send();
  }

});

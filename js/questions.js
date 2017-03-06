$(document).ready(function() {

  setTimeout(function(){
    $('#container-questions-explanation').fadeOut(1000);
    showQuestionOne();
  }, 10000);

  function showQuestionOne(){
    $('#question-one').fadeIn(2000);
    $('#yes, #no').click(function () {
      if (this.id == 'yes') {
          console.log('yes clicked');
      }
      else if (this.id == 'no') {
          console.log('no clicked');
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
            console.log('learn english clicked');
        }
        else if (this.id == 'better-education') {
            console.log('better education clicked');
        }
        else if (this.id == 'better-life') {
            console.log('better life clicked');
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
            console.log('annoyed clicked');
        }
        else if (this.id == 'language-angry') {
            console.log('angry clicked');
        }
        else if (this.id == 'language-dont-mind,') {
            console.log('dont mind clicked');
        }
        else if (this.id == 'language-no-opinion,') {
            console.log('no opinion clicked');
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
            console.log('accept clicked');
        }
        else if (this.id == 'avoid') {
            console.log('avoid clicked');
        }
        $('#question-four').fadeOut(500);
        showQuestionFourPart2();
      });
    }, 1000);
  }

  function showQuestionFourPart2(){
    setTimeout(function() {
      $('#question-four-p2').fadeIn(500);
      $('#focus-work, #dont-contribute, #other-submit').click(function () {
        if (this.id == 'focus-work') {
            console.log('focus work clicked');
        }
        else if (this.id == 'dont-contribute') {
            console.log('dont contribute clicked');
        }
        else if (this.id == 'other-submit') {
            console.log('submitted');
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
            console.log('presenting annoyed');
        }
        else if (this.id == 'feel-bad') {
            console.log('feel bad');
        }
        else if (this.id == 'shouldnt-be-afraid') {
            console.log('shouldnt be afraid');
        }
        else if (this.id == 'doesnt-bother') {
            console.log('doesnt bother');
        }
        $('#question-five').fadeOut(500);
        window.location.href = 'stories.html';
      });
    }, 1000);
  }

});

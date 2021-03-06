$(document).ready(function() {
  $('#button-share-thoughts').addClass('disable-click');
  $('.brush-link').addClass('disable-click');
  $('#container-thankyou-fade-2').hide();

  $('#index-container-fade-1 button').click(function() {
    $('#index-container-fade-1').removeClass('fade-in');
    $('#index-container-fade-1').addClass('fade-out');

    setTimeout(function() {
      $('#index-container-fade-2').removeClass('not-initially-visible');
      $('#index-container-fade-2').addClass('fade-in');
      $('#index-container-fade-1').hide();
    }, 700);
  });

  $('#index-container-fade-2 button').click(function() {
    $('#index-container-fade-2').removeClass('fade-in');
    $('#index-container-fade-2').addClass('fade-out');

    setTimeout(function() {
      $('#index-container-fade-3').removeClass('not-initially-visible');
      $('#index-container-fade-3').addClass('fade-in');
      $('#button-share-thoughts').removeClass('disable-click');
      $('#index-container-fade-2').hide();
    }, 700);
  });

  $('#container-stories-explanation-1 button').click(function() {
    $('#container-stories-explanation-1 div').removeClass('fade-in');
    $('#container-stories-explanation-1 div').addClass('fade-out');

    setTimeout(function() {
      $('#container-stories-explanation-2').removeClass('not-initially-visible');
      $('#container-stories-explanation-2 div').addClass('fade-in');
      $('#container-stories-explanation-1').hide();
      $('.brush-link').removeClass('disable-click');
      $('#container-brushes').fadeIn(1000);
    }, 700);
  });
});

/* this js allows the stories and share thoughst button to be clickable after 18 seconds (when the whole fadey stuff finishes) */

$(document).ready(function() {
  $('#button-share-thoughts').addClass('disable-click');
  $('.brush-link').addClass('disable-click');
  setTimeout(function(){
    $('.brush-link').removeClass('disable-click');
  }, 18000);
  setTimeout(function(){
    $('#button-share-thoughts').removeClass('disable-click');
  }, 16000);
});

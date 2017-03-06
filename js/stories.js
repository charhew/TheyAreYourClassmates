/* this js allows the stories to be clickable after 18 seconds (when the whole fadey stuff finishes)
I disabled pointer-events in the css by default because otherwise,
users can click on the stories before the fadey stuff ends since it's only opacity: 0 not display: none */

$(document).ready(function() {
  setTimeout(function(){
    $('.brush-link').css('pointer-events', 'auto');
  }, 18000);
});

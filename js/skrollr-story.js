$(document).ready(function() {

  var total_images = $(".story-container img").length;
  var images_loaded = 0;

  $(".story-container").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').on('load', function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                // now all images are loaded.
                $(".story-container img").show();
                var s = skrollr.init();
            }
        });

    });
});

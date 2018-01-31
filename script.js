$( document ).ready(function() {
  $('#share-button').click(function(){
    $("#share-bill").removeClass("hidden-bill");
    $("#bill-button").removeClass("hidden");
    $("#private-bill").addClass("hidden-bill");
    $("#share-button").addClass("active-bill-button");
    $("#private-button").removeClass("active-bill-button");
  });

  $('#private-button') .click(function(){
    $("#private-bill").removeClass('hidden-bill');
    $("#bill-button").removeClass("hidden");
    $("#share-bill").addClass('hidden-bill');
    $("#private-button").addClass("active-bill-button");
    $("#share-button").removeClass("active-bill-button");
  });



  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

});

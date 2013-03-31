(function ($) {
  $(document).ready(function() {
    // menu dropdown
    $('ul.nav li.dropdown').mouseenter(function() {
      $(this).addClass('open');
    });
    $('ul.nav li.dropdown').mouseleave(function() {
      $(this).removeClass('open');
    });

    // navbar collapse
    $('.btn-navbar').click(function() {
      var target = $($(this).data().target);
      if (target.hasClass('in')) {
        target.animate({
          height: 0
        }, 500, function() {
          $(this).removeClass('in');
        });
      } else {
        target.animate({
          height: target.find('.inner').height()
        }, 500, function() {
          $(this).addClass('in');
        });
      }
    });
  });
})(jQuery);

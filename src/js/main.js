(function($) {
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 66,
          },
          1000,
          "easeInOutExpo",
        );
        return false;
      }
    }
  });

  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  $("body").scrollspy({
    target: "#mNav",
    offset: 100,
  });

  var navbarCollapse = function() {
    if ($("#mNav").offset().top > 100) {
      $("#mNav").addClass("navbar-shrink");
    } else {
      $("#mNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);
})(jQuery);

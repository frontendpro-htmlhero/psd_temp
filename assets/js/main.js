$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoPlay: true,
    nav: true,
    // slideSpeed: 200,
    mouseDrag: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutDown',
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 1,

      },
      1000: {
        items: 1,

      }
    }
  });
});
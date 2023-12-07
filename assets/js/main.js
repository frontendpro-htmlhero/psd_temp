jQuery(document).ready(function ($) {
  $(".lsp-owl").owlCarousel({
    items: 1,
    loop: true,
    autoPlay: true,
    nav: true,
    center: true,
    autoWidth:true,
    slideBy:true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive: {
      1024:{
        items: 1
      },
      768:{
        items:1
      },
      425:{
        items: 1
      }
    } 
  });
  $(".galley").owlCarousel({
    items: 1,
    loop: true,
    autoPlay: true,
    nav: true,
    center: true,
    autoWidth:true,
    slideBy:true,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive: {
      1024:{
        items: 1,
        loop: true
      },
      768:{
        items:1
      },
      425:{
        items: 1
      },
      320:{
        items: 1
      }
  } 
  });
  $("#hover_button").click(function(){
    $(".main-menue").toggle();
  })
  Fancybox.bind("[data-fancybox]", {
    // Your custom options

});

});

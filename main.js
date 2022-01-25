$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    items: 1,
    nav: false,
    dots:false,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive: {
      0: {
        loop: false,
        autoplay: false,
      },
      
      900: {
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
      }
    }
  });
});

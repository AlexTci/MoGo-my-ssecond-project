$(document).ready(function () {
  // Слайдер 1, настройки
  $(".reviews__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  // Слайдер 2, настройки
  $(".ourworks__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Настройки верхнего, главного меню
  /* Fixed Header */

  var headerTOP = $("#header__top"),
      headerH = $("#header").innerHeight();
      scrollOffset =  $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset); 
  });

  function checkScroll(scrollOffset) { 
    if (scrollOffset >= headerH) {
      headerTOP.addClass("header__top--fixed");
    } else {
      headerTOP.removeClass("header__top--fixed");
    }
  }


  // Плавный скролл к элементам меню
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 1000);
});


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
      event.preventDefault();

      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
  });




});

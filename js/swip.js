var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    preloadImages: true,
    lazy: true,  
    lazy: {
      loadPrevNext: true,
    },
    autoplay: {
        delay: 3000, //animation
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    //   Навигация
    //   Буллеты, текущее положение, прогрессбар
    pagination: {
      el: ".swiper-pagination",
      // Буллеты
      type: "bullets",
      clickable: true,
      // Динамические буллеты
      // dynamicBullets: true,
      // Кастомные буллеты
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
        );
      },
    },
  });
  

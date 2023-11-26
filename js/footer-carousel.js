const swiper = new Swiper('.footer__swiper-container',{
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      simulateTouch: true,
      touchRadio: 1,
      touchAngle: 45,
      grabCursor: true,
      autoHeight: true,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        480:{
            slidesPerView: 1,
        },
        480:{
            slidesPerView: 2,
        },
        770:{
            slidesPerView:3
        },
        1000:{
            slidesPerView:6
        },
      }
});

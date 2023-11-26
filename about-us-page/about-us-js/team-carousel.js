(function () {
const swiperProject = new Swiper('.swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  observer: true, 
  observeParents: true,
  simulateTouch: true,
      touchRadio: 1,
      touchAngle: 45,
      grabCursor: true,
      autoHeight: true,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        768:{
            slidesPerView: 2,
        },
        996:{
            slidesPerView:3
        },
      }
});
})();

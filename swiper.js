var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 15,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024:{
      slidesPerView: 4
    },
    1280:{
      slidesPerView: 5
    }
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 5,
  spaceBetween: 15,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 5,
  spaceBetween: 15,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

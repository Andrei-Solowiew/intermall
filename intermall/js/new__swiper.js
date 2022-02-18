let new__swiper = new Swiper(".new__swiper", {
  // Optional parameters
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 80,

  // If we need pagination
  pagination: {
    el: ".new__pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".new__button_next",
    prevEl: ".new__button_prev",
  },

  // And if we need scrollbar
  grabCursor: true,
  breakpoints: {
    400: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 10,
    },

    400: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 80,
    },

    500: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 80,
    },

    600: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 100,
    },

    700: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 150,
    },

    800: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 60,
    },

    1000: {
      slidesPerView: 4,
      grid: {
        rows: 1,
      },
      spaceBetween: 60,
    },
  },
});

document.querySelector(".new__slide").tabindex = -1;
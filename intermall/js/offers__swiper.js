let offers__swiper = new Swiper(".offers__swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".offers__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".offers__button_next",
    prevEl: ".offers__button_prev",
  },

  // And if we need scrollbar
  grabCursor: true,

  
});

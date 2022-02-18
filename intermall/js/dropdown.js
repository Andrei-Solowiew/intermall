window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header__btn").addEventListener("click", function () {
    document.querySelector(".header__btn").classList.toggle("header__btn_active");
    document.querySelector(".header__drop-list").classList.toggle("header__drop-list_open");
  });
  $(".header__btn").on("click", function (event) {
    $(".header__drop-list").slideToggle(400);
    event.preventDefault();
  });
})
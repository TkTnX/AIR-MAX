const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  autoplay: {
    delay: 2500,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* HEADER BURGER  */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#burger").addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("open");
    document
      .querySelector("#burger")
      .classList.toggle("header__burger-btn-cross");
  });
});

document.querySelector("#menu").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.querySelector("#burger").addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
  document.querySelector("#menu").classList.remove("open");
});

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
});

/* SLIDER 2 (TOP SELLERS) */

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: ".sellers__btn-next",
    prevEl: ".sellers__btn-prev",
  },
  breakpoints: {
    575: {
      slidesPerView: 2,
    },
    1000: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    1385: {
      slidesPerView: 4,
    },
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

/* TOP SELLERS GRID MODE */

const gridBtn = document.querySelector("#top-sellers__grid-btn");
const sortBtn = document.querySelector("#top-sellers__sort-btn");

const topSellersGrid = document.querySelector("#top-sellers__grid");
const topSellersSwiper = document.querySelector("#top-sellers__swiper");
const gridSvg = document.querySelector("#gridSvg");
const sortSvg = document.querySelector("#sortSvg");

gridBtn.addEventListener("click", () => {
  topSellersSwiper.classList.add("top-sellers__grid-invisible");
  topSellersGrid.classList.add("top-sellers__grid-visible");
  const gridSvgBlack = (gridSvg.style.fill = "black");
  const sortSvgGray = (sortSvg.style.fill = "#808080");
});

sortBtn.addEventListener("click", () => {
  topSellersSwiper.classList.remove("top-sellers__grid-invisible");
  topSellersGrid.classList.remove("top-sellers__grid-visible");
  const gridSvgBlack = (gridSvg.style.fill = "#808080");
  const sortSvgGray = (sortSvg.style.fill = "black");
});

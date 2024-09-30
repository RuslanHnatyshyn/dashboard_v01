
document.querySelector(".header-mobile__link").addEventListener("click", function (e) {
  e.preventDefault();

  const menu = document.querySelector(".menu-mobile");
  menu.classList.add("active");

  document.body.style.overflow = "hidden";
})

document.querySelector(".header-mobile__link-close").addEventListener("click", function (e) {
  e.preventDefault();

  const menu = document.querySelector(".menu-mobile");

  menu.classList.remove("active");

  document.body.style.overflow = "auto";
})




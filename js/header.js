window.addEventListener("scroll", function () {
  const header = document.querySelector(".js-header");
  const topbar = document.querySelector(".js-topbar");
  const menubar = document.querySelector(".js-menu-bar");

  header.classList.toggle("fixed", window.scrollY > 0);
  topbar.classList.toggle("display-none", window.scrollY > 0);
  menubar.classList.toggle("menu-bar-white", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  const fixedHeader = document.querySelector(".header");
  const topbar = document.querySelector(".topbar");
  const menubar = document.querySelector(".menubar");
  const logoNavy = document.querySelector(".logo-navy");
  const logoWhite = document.querySelector(".logo-white");

  fixedHeader.classList.toggle("fixed", window.scrollY > 0);
  topbar.classList.toggle("display-none", window.scrollY > 0);
  menubar.classList.toggle("menubar-white", window.scrollY > 0);
});

const searchIcon = document.querySelector('.fa-search');
const searchBar = document.querySelector('.topbar__form-input input');
const closeIcon = document.querySelector('.fa-times');

searchIcon.addEventListener('click', function() {
  this.classList.toggle("fa-times");
  searchBar.classList.toggle('active');
});
closeIcon.addEventListener('click', function() {
  searchBar.classList.toggle('active');
});

function toggleInput() {
  searchBar.classList.toggle('active');
}

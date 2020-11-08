const searchIcon = document.querySelector('.js-fa-search');
const searchBar = document.querySelector('.js-topbar__form-input input');
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

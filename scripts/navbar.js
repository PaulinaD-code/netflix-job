let navbar = document.querySelector('.js-media-navbar');
let logoJob = document.querySelector('.js-netflix-logo-jobs');
let navbarImg = document.querySelector('.js-navbar-shadow');
let jobSearch = document.querySelector('.js-job-search');
let searchIcon = document.querySelector('.js-search-icon');
let arrowIcons = document.querySelectorAll('.js-arrow-down');
let navbarList = document.querySelectorAll('.js-list-anchor');
let burgerButtonElements = document.querySelectorAll('.js-burger-line');

window.addEventListener('scroll', ()=>{
  const scrolled = window.scrollY;
  activeNav();
  if(scrolled === 0){
    unActiveNav();
  }
});

function activeNav(){
  navbar.classList.add('navbar-scrolled');
  logoJob.classList.add('media-nav-scrolled');
  navbarImg.classList.add('navbar-shadow-image-visible');
  jobSearch.classList.add('black');
  searchIcon.classList.add('search-icon-black');
  navbarList.forEach(list => list.classList.add('black'));
  arrowIcons.forEach(icon => icon.classList.add('arrow-down-black'));
  burgerButtonElements.forEach(element => element.classList.add('black-background'));
}

function unActiveNav(){
  navbar.classList.remove('navbar-scrolled');
  logoJob.classList.remove('media-nav-scrolled');
  navbarImg.classList.remove('navbar-shadow-image-visible');
  jobSearch.classList.remove('black');
  searchIcon.classList.remove('search-icon-black');
  burgerButtonElements.forEach(element => element.classList.remove('black-background'));
  arrowIcons.forEach(icon => icon.classList.remove('arrow-down-black'));
  navbarList.forEach(list => list.classList.remove('black'));
}

//63 - 38


const hamburgerIcon = document.querySelector('.hamburger-icon');
// const slidingMenu = document.querySelector('.slide-out');

const handleClick = () => {
  hamburgerIcon.classList.toggle('toggled');
};

hamburgerIcon.addEventListener('click', handleClick);

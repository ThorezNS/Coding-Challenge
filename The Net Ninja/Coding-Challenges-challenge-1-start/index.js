const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuContainer = document.querySelector('.menu');

const handleClick = () => {
  hamburgerIcon.classList.toggle('toggled-icon');
  menuContainer.classList.toggle('toggled-menu');
};

hamburgerIcon.addEventListener('click', handleClick);

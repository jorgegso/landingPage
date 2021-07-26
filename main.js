const menuIcon = document.querySelector('.nav_btn_ham');
const navBar = document.querySelector('.nav_menu_hamburguer');
const navBarLink = document.querySelector('.nav_link');


menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

navBarLink.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

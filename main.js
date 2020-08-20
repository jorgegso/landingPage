const menuIcon = document.querySelector('.nav_btn_ham');
const navBar = document.querySelector('.nav_menu_hamburguer');

menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('change');
});

// Adicione o seu JavaScript aqui

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');

  hamburgerMenu.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  closeMenu.addEventListener('click', function () {
    menu.classList.remove('open');
  });
});

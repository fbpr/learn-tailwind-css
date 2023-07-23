let mainMenu = document.getElementById('main-menu');

let closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('hidden');
})

let openMenu = document.getElementById('open-menu');
openMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('hidden');
})
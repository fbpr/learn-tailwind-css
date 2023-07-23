// Dark Mode and Light Mode
let html = document.getElementById('html');
let changeModeDesktop = document.getElementById('change-mode-desktop');
let changeModeMobile = document.getElementById('change-mode-mobile');

const toggleMode = (device) => {
  html.classList.toggle('dark');
  if (device === 'Desktop') {
    changeModeDesktop.children[0].classList.toggle('hidden');
    changeModeDesktop.children[1].classList.toggle('hidden');
  } else {
    changeModeMobile.children[0].classList.toggle('hidden');
    changeModeMobile.children[1].classList.toggle('hidden');
  }
}

changeModeDesktop.addEventListener('click', () => {
  toggleMode('Desktop');
});

changeModeMobile.addEventListener('click',  () => {
  toggleMode('Mobile');
});

// Mobile Menu
let mainMenu = document.getElementById('main-menu');
let mobileBtn = document.getElementById('mobile-btn');

mobileBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('hidden');
});
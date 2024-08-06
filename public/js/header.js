let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos && currentScrollPos < 200) {
    document.querySelector('.main-navbar-mobile').classList.remove('main-navbar-color');
  }
  else {
    document.querySelector('.main-navbar-mobile').classList.add('main-navbar-color');
  }

  if (prevScrollPos > currentScrollPos && currentScrollPos < 960) {
    document.querySelector('.main-navbar').classList.remove('main-navbar-color');    
  } else {
    document.querySelector('.main-navbar').classList.add('main-navbar-color');
  }
  prevScrollPos = currentScrollPos;
}

const buttonMenu = document.getElementById('button-menu');
const nav = document.getElementById('nav');

// Agrega un evento de clic al botón del menú
buttonMenu.addEventListener('click', () => {
    // Alterna la clase 'show' en la navegación para mostrar u ocultar el menú
    nav.classList.toggle('show');
});

const closeButtons = document.querySelectorAll('.close-menu');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});



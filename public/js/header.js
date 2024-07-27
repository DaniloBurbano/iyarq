let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.main-navbar').classList.remove('main-navbar-color');
    
  } else {
    document.querySelector('.main-navbar').classList.add('main-navbar-color');
    
  }
  prevScrollPos = currentScrollPos;
}

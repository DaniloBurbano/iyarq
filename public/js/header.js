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

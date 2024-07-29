let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  console.log("ypos: " + currentScrollPos);
  if (prevScrollPos > currentScrollPos && currentScrollPos < 960) {
    document.querySelector('.main-navbar').classList.remove('main-navbar-color');
    
  } else {
    document.querySelector('.main-navbar').classList.add('main-navbar-color');
    
  }
  prevScrollPos = currentScrollPos;
}

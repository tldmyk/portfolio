navbar = document.querySelector("nav");

var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top="0";
} else {
      navbar.style.top="-59px";
  }
  prevScrollpos = currentScrollPos;
};

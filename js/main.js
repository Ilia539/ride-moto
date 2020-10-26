// ....SCROLL MENU
window.addEventListener("scroll", function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});
// nav menu open
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')
  toggleMenu.addEventListener('click', ()=>{
      navMenu.classList.toggle('show')
  })
  closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction));
// .....SLIDER
$(document).ready(function(){
$('.slider').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true,
    arrows: false
});
});
// .......SCROLL EASY...
$(document).ready(function() {
    $('.nav__link').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
        duration: 1000,
        easing: 'swing'
      });
      return false;
    });
});
// ..............MAP OPEN
var acc = document.getElementsByClassName("map__open");
var i;
for(i = 0;i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}



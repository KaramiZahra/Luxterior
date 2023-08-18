// Side menu
let menu = document.querySelector (".menu")
let menuBtn = document.querySelector (".nav-icon")
let menuBtnIcon = document.querySelector (".nav-icon i")

menuBtn.addEventListener ("click", function (){
    if (menuBtnIcon.classList.contains ("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else {
        menu.style.left = "-18rem"
        menuBtnIcon.classList = "fa fa-bars"
    }
})
// Counter
let numbers = document.querySelectorAll('.num')
let intervalDuration = 2000

numbers.forEach(function(number) {
    let startValue = 0
    let endValue = parseInt(number.getAttribute('data-value'))
    let duration = Math.floor(intervalDuration / endValue)

    let counter = setInterval(function() {
        startValue++
        number.innerHTML = startValue
        if(startValue === endValue) {
            clearInterval(counter)
        }
    }, duration)
})
// Swiper
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-right",
      prevEl: ".swiper-left",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
        576: {
            slidesPerView: 1,
            spaceBetween: 30
          },
        0: {
            slidesPerView: 1,
            spaceBetween: 30
          }
    }
  });
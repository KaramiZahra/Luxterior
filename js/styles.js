// Side menu
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".nav-icon");
let menuBtnIcon = document.querySelector(".nav-icon i");

menuBtn.addEventListener("click", function () {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.left = "-18rem";
    menuBtnIcon.classList = "fa fa-bars";
  }
});
// Counter
let numbers = document.querySelectorAll(".num");
let intervalDuration = 2000;

numbers.forEach(function (number) {
  let startValue = 0;
  let endValue = parseInt(number.getAttribute("data-value"));
  let duration = Math.floor(intervalDuration / endValue);

  let counter = setInterval(function () {
    startValue++;
    number.innerHTML = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// User's database
let userArray = [
  {
    id: 1,
    subjText: "Subj-1-Lorem ipsum dolor sit amet",
    descText:
      "Desc-1-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile1.jpg",
    name: "Courteney Cox",
  },
  {
    id: 2,
    subjText: "Subj-2-Lorem ipsum dolor sit amet",
    descText:
      "Desc-2-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile2.jpg",
    name: "Jennifer Aniston",
  },
  {
    id: 3,
    subjText: "Subj-3-Lorem ipsum dolor sit amet",
    descText:
      "Desc-3-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile3.jpg",
    name: "David Schwimmer",
  },
  {
    id: 4,
    subjText: "Subj-4-Lorem ipsum dolor sit amet",
    descText:
      "Desc-4-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile4.jpg",
    name: "Matt LeBlanc",
  },
  {
    id: 5,
    subjText: "Subj-5-Lorem ipsum dolor sit amet",
    descText:
      "Desc-5-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile5.jpg",
    name: "Lisa Kudrow",
  },
  {
    id: 6,
    subjText: "Subj-6-Lorem ipsum dolor sit amet",
    descText:
      "Desc-6-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile6.jpg",
    name: "Matthew Perry",
  },
  {
    id: 7,
    subjText: "Subj-7-Lorem ipsum dolor sit amet",
    descText:
      "Desc-7-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quo, beatae dignissimos dolorum fuga commodi eligendi esse consectetur cumque",
    img: "images/profile7.jpg",
    name: "Noelle Sheldon",
  },
];
let swiperWrapper = document.querySelector(".swiper-wrapper");
// create slide for each user
function createSwiperSlide(users) {
  users.forEach((user) => {
    swiperWrapper.insertAdjacentHTML(
      "beforeend",
      '<div class="swiper-slide"><i class="fa-solid fa-quote-left sm:text-5xl sm:p-3"></i><h3 class="swiper-main-text sm:text-lg">' +
        user.subjText +
        '</h3><p class="swiper-desc-text sm:hidden">' +
        user.descText +
        '</p><div class="customer-profile"><img src="' +
        user.img +
        '"/><h4>' +
        user.name +
        "</h4></div></div>"
    );
  });
}
createSwiperSlide(userArray);

// Swiper
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

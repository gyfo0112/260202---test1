AOS.init();

const body = document.querySelector("body");
const header = document.querySelector("header");
const fixedArrow = document.querySelector(".fixed-arrow");
const mobNavBtn = document.querySelector(".mob-nav-btn");
const navList = document.querySelectorAll(".nav-list li");

navList.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(`#sec-${i + 1}`).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

mobNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    body.classList.toggle("mob-nav-open");
});


window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        body.classList.add("scroll");
    } else {
        body.classList.remove("scroll");
    }
});

fixedArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

const sec5MenuList = document.querySelectorAll(".sec-5-menu li");
const sec5ContentList = document.querySelectorAll(".sec-5-content-wrap .content");

function init(x) {
    sec5MenuList[x].classList.add("active");
    sec5ContentList[x].classList.add("on");
}

function reset() {
    for (let i = 0; i < sec5MenuList.length; i++) {
        sec5MenuList[i].classList.remove("active");
        sec5ContentList[i].classList.remove("on");
    }
}

sec5MenuList.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault();
        reset();
        init(index);
    });
});


const swiperSec1 = new Swiper(".sec-1-slider", {
    loop: true,
    speed: 1000,
    effect: 'fade',
    pagination: {
        el: ".sec-1 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".sec-1 .swiper-button-next",
        prevEl: ".sec-1 .swiper-button-prev",
    },
});

const bgWrap = document.querySelectorAll(".sec-3 .bg-wrap > div");

if(bgWrap.length > 0) {
    bgWrap[0].classList.add("active");
}

var swiperSec3 = new Swiper(".sec-3-slider", {
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".sec-3 .next",
        prevEl: ".sec-3 .prev",
    },
    pagination: {
        el: ".sec-3 .swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const i = this.realIndex;
            bgWrap.forEach((bg) => bg.classList.remove("active"));
            if(bgWrap[i]) {
                bgWrap[i].classList.add("active");
            }
        },
    },
});
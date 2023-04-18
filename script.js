alert('Disclaimer: this website does not support other devices view and is on the process of adding more sections :)');

// preloader 
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = "none"
});


// Nav bar 
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
})

// section reveal on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');

        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

// Home section fade on scroll 
var fadeOnScroll = document.getElementById('home');
window.addEventListener('scroll', function () {
    fadeOnScroll.style.opacity = 1 - +this.window.pageYOffset / 550 + '';
    fadeOnScroll.style.top = +this.window.pageXOffset + 'px';
    fadeOnScroll.style.backgroundPositionY = +this.window.pageXOffset / 2 + 'px';
});



// charachter changes 
const tabsBox = document.querySelector(".vertical-display");
const allTabs = document.querySelectorAll(".vertical-display img");
const arrowIcons = document.querySelectorAll(".icon svg");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        tabsBox.scrollTop += icon.id === "up" ? -350 : 350;
    });
});

allTabs.forEach(img => {
    img.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        img.classList.add("active");
    });
});


// Jquery select img
$(document).ready(function () {
    $('.vertical-display > img').click(function () {
        var $smallImages = $(this).attr('src');
        $('.main-display .profil-pic > img').attr('src', $smallImages);
    });
});



// titan section 

const titanBox = document.querySelector(".imgDisplay");
const arrwIcons = document.querySelectorAll(".icon i");

const handleIcons = () => {
    let scrollVal = Math.round(titanBox.scrollLeft);
    let maxScrollableWidth = titanBox.scrollWidth - titanBox.clientWidth;
    arrwIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrwIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal ? "flex" : "none";

}

arrwIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        titanBox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => handleIcons(), 50);
    });
});











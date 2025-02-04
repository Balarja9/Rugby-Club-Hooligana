// Gallery Slider
let currentSlide = 0;
const slides = document.querySelector('.gallery-slider');
const totalSlides = slides.children.length;

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; 
    }
    updateSlider();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; 
    }
    updateSlider();
}

function updateSlider() {
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Cookie 
document.getElementById("cookie-notification").style.display = "block";

document.getElementById("accept-cookies").addEventListener("click", function() {
    document.getElementById("cookie-notification").style.display = "none";
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate name
    if (name === "") {
        alert("გთხოვთ შეიყვანოთ სახელი.");
        return;
    }

    // Validate email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა.");
        return;
    }

    alert("თქვენი მოთხოვნა მიღებულია.");
    document.getElementById("contact-form").reset();
});

// Background ფოტოს გამოსწორება
const heroSection = document.querySelector('.hero');
heroSection.style.backgroundSize = 'cover';
heroSection.style.backgroundPosition = 'center';

// Sticky Navigation
window.onscroll = function () {
    stickyNav();
};

const header = document.querySelector("header");

function stickyNav() {
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Burger Menu 
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// =============================
// AOS Scroll Animation
// =============================
AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out"
});

// =============================
// Typing Effect
// =============================
const text = "ASHISH BHARTI";
const typingElement = document.getElementById("typing");

let index = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    if (!deleting) {
        typingElement.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
        }

    }

    setTimeout(typeEffect, deleting ? 80 : 150);
}

typeEffect();


// =============================
// Navbar Shadow on Scroll
// =============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";
    }

});


// =============================
// Smooth Scroll
// =============================
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =============================
// Card Mouse Glow Effect
// =============================
document.querySelectorAll(".card, .project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px,
            rgba(37,99,235,0.20),
            white 70%)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#ffffff";

    });

});


// =============================
// Fade Hero on Scroll
// =============================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.opacity = 1 - window.scrollY / 700;

});


// =============================
// Button Hover Animation
// =============================
const button = document.querySelector(".btn");

if (button) {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

}

let currencyDiv = document.getElementById("currency-converter");

currencyDiv.addEventListener("click", function () {
    window.open("https://bhartiashisharvind-afk.github.io/FullAI/", "_self");
});

let birthdayWishesDiv = document.getElementById("birthday-wishes");

birthdayWishesDiv.addEventListener("click", function () {
    window.open("https://bhartiashisharvind-afk.github.io/BIRTHDAY/BirthdayWishes.html", "_blank");
});
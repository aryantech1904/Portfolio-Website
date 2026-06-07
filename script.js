/* ==========================
   AOS INITIALIZATION
========================== */

AOS.init({
    duration: 1000,
    once: true
});


/* ==========================
   TYPING ANIMATION
========================== */

const roles = [

    "Aspiring Full Stack Developer",

    "Future Software Engineer",

    "AI Engineer",

    "Generative AI Enthusiast",

    "React & Node.js Learner"

];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let currentChar = "";

function typeEffect() {

    if (roleIndex >= roles.length) {
        roleIndex = 0;
    }

    currentRole = roles[roleIndex];

    currentChar = currentRole.slice(0, ++charIndex);

    document.getElementById("typing").textContent = currentChar;

    if (currentChar.length === currentRole.length) {

        setTimeout(() => {

            eraseEffect();

        }, 1500);

        return;
    }

    setTimeout(typeEffect, 100);
}


function eraseEffect() {

    currentRole = roles[roleIndex];

    currentChar = currentRole.slice(0, --charIndex);

    document.getElementById("typing").textContent = currentChar;

    if (charIndex === 0) {

        roleIndex++;

        setTimeout(typeEffect, 300);

        return;
    }

    setTimeout(eraseEffect, 50);
}

typeEffect();


/* ==========================
   NAVBAR BACKGROUND EFFECT
========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(10,15,31,0.98)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background =
            "rgba(10,15,31,0.9)";

        navbar.style.boxShadow = "none";
    }

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >=
            sectionTop - 200
        ) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


/* ==========================
   REVEAL CARDS ON HOVER
========================== */

const cards =
document.querySelectorAll(
    ".skill-category, .cert-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";
    });

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
    "%cWelcome Recruiter 👋",
    "color:#38bdf8;font-size:22px;font-weight:bold;"
);

console.log(
    "Portfolio Developed by Aryan Raj Srivastava"
);

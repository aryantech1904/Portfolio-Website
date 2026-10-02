/* ==========================
   PORTFOLIO INITIALIZATION
========================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       AOS INITIALIZATION
    ========================== */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }


    /* ==========================
       TYPING ANIMATION
    ========================== */

    const typingElement = document.getElementById("typing");

    const roles = [
        "Aspiring Full Stack Developer",
        "Future Software Engineer",
        "AI Engineer",
        "Generative AI Enthusiast",
        "React & Node.js Learner"
    ];

    if (
        typingElement &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingElement.textContent =
                currentRole.substring(0, charIndex);

            let delay = isDeleting ? 45 : 90;

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                delay = 1500;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 350;
            }

            setTimeout(typeEffect, delay);
        }

        typeEffect();
    }


    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector("nav");

    function updateNavbar() {
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(10, 15, 31, 0.98)";
            navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.4)";
        } else {
            navbar.style.background = "rgba(10, 15, 31, 0.9)";
            navbar.style.boxShadow = "none";
        }
    }

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

    updateNavbar();


    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");

    function updateActiveNavigation() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive =
                link.getAttribute("href") === "#" + currentSection;

            link.classList.toggle("active", isActive);

            if (isActive) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNavigation, {
        passive: true
    });

    updateActiveNavigation();


    /* ==========================
       CARD HOVER EFFECTS
    ========================== */

    const cards = document.querySelectorAll(
        ".skill-category, .cert-card"
    );

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.03)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });


    /* ==========================
       CONSOLE MESSAGE
    ========================== */

    console.log(
        "%cWelcome Recruiter!",
        "color:#38bdf8;font-size:22px;font-weight:bold;"
    );

    console.log(
        "Portfolio developed by Aryan Raj Srivastava."
    );

});

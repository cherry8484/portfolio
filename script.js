// -------- Typing Animation --------
const typingText = document.querySelector(".typing");

if (typingText) {
    typingText.innerHTML = "A Computer Science Student & Web Developer";
}

// -------- Fade-in on Scroll --------
const elements = document.querySelectorAll(".project-card, .section-title, p, h1");

function reveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            el.classList.add("fade-in");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

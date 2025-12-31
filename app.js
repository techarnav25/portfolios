const links = document.querySelectorAll(".nav-links a");
const pages = document.querySelectorAll(".page");
const indicator = document.querySelector(".indicator");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function activate(hash) {
  pages.forEach(p => {
    p.classList.toggle("active", `#${p.id}` === hash);
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });

  const active = document.querySelector(`.nav-links a[href="${hash}"]`);
  if (active && indicator) {
    indicator.style.width = active.offsetWidth + "px";
    indicator.style.left = active.offsetLeft + "px";
  }

  navLinks.classList.remove("show");
  menuBtn.classList.remove("active");
}

window.addEventListener("hashchange", () => {
  activate(location.hash);
});

window.addEventListener("load", () => {
  activate(location.hash || "#home");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("show");
});

// Animate Home Section on load
window.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.querySelector('.home-section');
    homeSection.classList.add('active');
});

// Animate skill cards and bars on scroll
const skillCards = document.querySelectorAll('.skill-card');
const skillSpans = document.querySelectorAll('.skill-bar span');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;

    skillCards.forEach((card, i) => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
            // Animate skill bar
            skillSpans[i].style.width = skillSpans[i].getAttribute('data-width');
        }
    });
});



const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.85;
    projectCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if(top < trigger){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});


// Disable mouse wheel
window.addEventListener('wheel', e => e.preventDefault(), { passive: false });

// Disable touch scroll
window.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

// Disable keyboard scroll
window.addEventListener('keydown', e => {
    if (
        ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"].includes(e.code)
    ) {
        e.preventDefault();
    }
});



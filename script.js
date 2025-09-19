// Smooth scroll active link highlight
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const sections = navLinks.map(l => document.querySelector(l.getAttribute('href')));

function setActiveLink() {
  const scrollPos = window.scrollY + 100;
  let activeIndex = 0;
  sections.forEach((sec, idx) => {
    if (sec && sec.offsetTop <= scrollPos) {
      activeIndex = idx;
    }
  });
  navLinks.forEach((l, idx) => l.classList.toggle('active', idx === activeIndex));
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// Reveal on scroll animations
const animated = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animated.forEach(el => observer.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Initial page enter transition
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
  document.body.classList.add('loaded');
});



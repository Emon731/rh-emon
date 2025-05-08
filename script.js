// Reveal sections on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

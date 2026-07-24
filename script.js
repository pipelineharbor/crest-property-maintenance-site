const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.primary-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form?.addEventListener('submit', event => {
  event.preventDefault();
  status.textContent = 'This demo form is ready to connect to Formspree, Basin, HubSpot, or your CRM. Replace the placeholder endpoint before launch.';
});

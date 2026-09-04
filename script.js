const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const people = document.getElementById('people').value.trim();
  const destination = document.getElementById('destination').value.trim();
  const date = document.getElementById('date').value.trim();
  const tripType = document.getElementById('tripType').value;
  const details = document.getElementById('details').value.trim();

  const message = `Hola Blue Moon 🌛%0A%0AMe gustaría cotizar un viaje.%0A%0A👤 Nombre: ${encodeURIComponent(name)}%0A👥 Personas: ${encodeURIComponent(people)}%0A🌎 Destino: ${encodeURIComponent(destination)}%0A📅 Fecha aproximada: ${encodeURIComponent(date || 'Por definir')}%0A✈️ Tipo de viaje: ${encodeURIComponent(tripType)}%0A📝 Detalles: ${encodeURIComponent(details || 'Sin detalles adicionales')}`;

  window.open(`https://wa.me/525583946770?text=${message}`, '_blank', 'noopener');
});

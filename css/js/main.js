/* ===== Navbar móvil ===== */
const burger  = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/* ===== Scroll suave (enlaces internos) ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navMenu.classList.remove('active');          // cierra menú en móvil
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({behavior:'smooth'});
  });
});

/* ===== Formulario dummy ===== */
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Mensaje enviado! (demo)');
});

// Inicia AOS (animaciones al hacer scroll)
AOS.init({ once: true });

// Scroll suave (fallback para Safari / iOS)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

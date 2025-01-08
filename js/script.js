document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.hero-title', { delay: 200, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.hero-subtitle', { delay: 400, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.cta-button', { delay: 600, origin: 'bottom', distance: '50px' });
    ScrollReveal().reveal('.section h2', { delay: 200, origin: 'left', distance: '50px' });
    ScrollReveal().reveal('.section p', { delay: 400, origin: 'right', distance: '50px' });
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
  
      // Hide all content sections
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
  
      // Show the target section
      const target = event.target.getAttribute('href').substring(1);
      document.getElementById(target).classList.add('active');
    });
  });
  
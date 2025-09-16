 
document.addEventListener("DOMContentLoaded", function () {
  const appear = (els, offset = 0.85) => {
    const trigger = window.innerHeight * offset;
    els.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.style.opacity = 1, el.style.transform = 'translateY(0)';
      else { el.style.opacity = 0; el.style.transform='translateY(20px)'; }
    });
  };

  const fadeables = Array.from(document.querySelectorAll('.legend, .video-card, .stadium-media, .hero-image'));
  fadeables.forEach(el => { el.style.transition = 'all 0.6s cubic-bezier(.2,.8,.2,1)'; el.style.opacity = 0; el.style.transform = 'translateY(20px)'; });
  const run = () => appear(fadeables);
  window.addEventListener('scroll', run);
  window.addEventListener('resize', run);
  run();


});

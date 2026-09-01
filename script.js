document.addEventListener('DOMContentLoaded', () => {
  // 1. Preloader Fadeout Logic
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.6s ease';
      setTimeout(() => preloader.style.display = 'none', 600);
    });
    // Fallback if load takes too long
    setTimeout(() => {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.style.display = 'none', 600);
    }, 2500);
  }

  // 2. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal, .reveal-head, .animate-up, .animate-fade');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Dynamic 3D Tilt Effect on Cards (Adel Style Interaction)
  const cards = document.querySelectorAll('.glass-card, .project-card, .featured-project');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  // 4. Case Study Modal Logic
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtns = document.querySelectorAll('[data-close]');

  const projectDetails = {
    match: `
      <h2>Match Factory 3D Puzzle</h2>
      <p style="color: #9ca3af; margin-top: 0.5rem;">Commercial Mobile Game · Unity & C#</p>
      <hr style="border-color: rgba(255,255,255,0.1); margin: 1rem 0;">
      <p>Developed core gameplay loop, custom booster systems (vacuum, fireworks, spring), and physics optimizations supporting 100+ active Rigidbodies on mobile platforms.</p>
    `,
    hospital: `
      <h2>Hospital Escape</h2>
      <p style="color: #9ca3af; margin-top: 0.5rem;">First-Person Survival Horror</p>
      <hr style="border-color: rgba(255,255,255,0.1); margin: 1rem 0;">
      <p>Built modular interaction logic, flexible inventory architecture, and state-machine based environment hazards.</p>
    `
  };

  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pKey = btn.getAttribute('data-project');
      if (modal && modalContent) {
        modalContent.innerHTML = projectDetails[pKey] || `<h2>${pKey.toUpperCase()} Project</h2><p style="color: #9ca3af; margin-top: 1rem;">Detailed case study coming soon.</p>`;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });
});

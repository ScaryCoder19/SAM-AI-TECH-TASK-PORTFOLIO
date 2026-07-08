const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.skills-grid, .projects-grid').forEach(grid => {
  grid.querySelectorAll('.skill-card, .project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });
});

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Sent ✓';
  btn.style.background = '#059669';
  setTimeout(() => {
    btn.textContent = 'Send Message →';
    btn.style.background = '';
    e.target.reset();
  }, 2800);
}

const secs = document.querySelectorAll('[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  links.forEach(l => { l.style.color = l.getAttribute('href') === `#${cur}` ? 'var(--white)' : ''; });
});
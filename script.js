// Small enhancement: mark the current page in the navigation.
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
  });
});

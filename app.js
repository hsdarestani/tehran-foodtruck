(() => {
  'use strict';
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  const links = [...document.querySelectorAll('.menu-nav a')];
  const targets = [...document.querySelectorAll('.menu-group')];
  if ('IntersectionObserver' in window && links.length && targets.length) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length) {
        const id = visible[0].target.id;
        links.forEach(link => {
          const active = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-30% 0px -45% 0px', threshold: [0, .15, .4] });
    targets.forEach(target => observer.observe(target));
  }
})();

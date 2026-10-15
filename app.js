(() => {
  "use strict";
  const categories = [...document.querySelectorAll("[data-category]")];
  const panels = [...document.querySelectorAll(".menu-panel")];
  const menuButton = document.querySelector("#nav-toggle");
  const mobileNav = document.querySelector("#mobile-nav");

  function activateCategory(category) {
    const target = panels.find(panel => panel.id === category);
    if (!target) return;
    categories.forEach(button => {
      const isSelected = button.dataset.category === category;
      button.classList.toggle("is-current", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
    panels.forEach(panel => {
      panel.hidden = panel !== target;
    });
  }

  // Without JavaScript the complete menu remains available and visible.
  if (categories.length && panels.length) {
    const initial = window.location.hash.substring(1);
    activateCategory(panels.some(panel => panel.id === initial) ? initial : "sandwich");
    categories.forEach(button => {
      button.addEventListener("click", () => {
        activateCategory(button.dataset.category);
      });
    });
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1);
      if (panels.some(panel => panel.id === hash)) activateCategory(hash);
    });
  }

  function closeMobileNav() {
    if (!menuButton || !mobileNav) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Navigation öffnen");
    mobileNav.hidden = true;
  }

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const opening = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(opening));
      menuButton.setAttribute("aria-label", opening ? "Navigation schließen" : "Navigation öffnen");
      mobileNav.hidden = !opening;
    });
    mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileNav));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !mobileNav.hidden) {
        closeMobileNav();
        menuButton.focus();
      }
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", event => {
      if (event.matches) closeMobileNav();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
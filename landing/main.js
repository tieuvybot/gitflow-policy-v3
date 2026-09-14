const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

function setMenuOpen(open) {
  if (!toggle || !mobileNav) return;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobileNav.hidden = !open;
}

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  setMenuOpen(open);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 860px)").matches) {
    setMenuOpen(false);
  }
});

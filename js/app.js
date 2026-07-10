/**
 * Mohamed Ali — Portfolio
 * Global elements
 */
const sections = Array.from(document.querySelectorAll("main section[id]"));
const menu = document.getElementById("navbar__list");
const toTop = document.getElementById("to-top");
const header = document.querySelector(".page__header");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector(".navbar__menu");

/**
 * Build the nav from each section's data-nav attribute
 */
function buildNav() {
  sections.forEach((section) => {
    const name = section.getAttribute("data-nav");
    const id = section.getAttribute("id");
    const li = document.createElement("li");
    li.innerHTML = `<a class="menu__link" href="#${id}">${name}</a>`;
    menu.appendChild(li);
  });
}
buildNav();

/**
 * Highlight the nav link for the section currently in view
 */
function setActiveLink() {
  let current = sections[0];
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top <= 140) current = section;
  });
  document.querySelectorAll(".menu__link").forEach((link) => {
    link.classList.toggle("active-link", link.getAttribute("href") === `#${current.id}`);
  });
}

/**
 * Hide header on scroll down, reveal on scroll up. Toggle back-to-top button.
 */
let lastScroll = 0;
function handleScroll() {
  const y = window.scrollY;

  if (y > lastScroll && y > 400) {
    header.classList.add("is-hidden");
  } else {
    header.classList.remove("is-hidden");
  }
  lastScroll = y;

  toTop.classList.toggle("is-visible", y > 600);

  setActiveLink();
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * Mobile nav toggle
 */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-open");
  });
  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("is-open"));
  });
}

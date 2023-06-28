//onScroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

const menu = document.querySelector(".mobileMenu");
const menuBtn = document.querySelector(".menuIcon");
const navLinks = document.querySelector(".links");

menu.onclick = (e) => {
  e.preventDefault();
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("move");
};

// Close mobile menu when clicking on a link
const links = document.querySelectorAll(".links a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("move");
  });
});

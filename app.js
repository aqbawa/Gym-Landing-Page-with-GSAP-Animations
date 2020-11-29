const mobileMenu = document.querySelector("#mobile__navbar");
const navbarMenu = document.querySelector(".navbar__menu");
const navbarLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

const displayMenu = () => {
  mobileMenu.classList.toggle("is-active");
  navbarMenu.classList.toggle("active");
  body.classList.toggle("active");
};

mobileMenu.addEventListener("click", displayMenu);

// ! Animations

gsap.registerPlugin("ScrollTrigger");

gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
gsap.from(".animate-services", {
  scrollTrigger: ".animate-services",
  duration: 0.5,
  opacity: 1,
  x: -200,
  stagger: 0.1,
});
gsap.from(".animate-img", {
  scrollTrigger: ".animate-services",
  duration: 1.2,
  opacity: 0,
  x: -250,
});
gsap.from(".animate-memberships", {
  scrollTrigger: ".animate-memberships",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
});
gsap.from(".animate-card", {
  scrollTrigger: ".animate-card",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2,
});
gsap.from(".animate-team", {
  scrollTrigger: ".animate-team",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});
gsap.from(".animate-email", {
  scrollTrigger: ".animate-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.5,
});

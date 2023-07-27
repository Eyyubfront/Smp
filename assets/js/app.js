const bars = document.querySelector(".bars");
const mobileMenu = document.querySelector(".mobileMenu");

bars.onclick = () => {
  mobileMenu.classList.toggle("showMobileMenu");
};
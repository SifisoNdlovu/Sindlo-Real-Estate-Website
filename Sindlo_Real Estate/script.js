// Sticky Navbar
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Scroll Spy
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Mobile Menu
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("open");
  const icon = menuIcon.querySelector("i");
  icon.classList.toggle("bx-menu");
  icon.classList.toggle("bx-x");
};

navbar.onclick = () => {
  navbar.classList.remove("open");
  const icon = menuIcon.querySelector("i");
  icon.classList.add("bx-menu");
  icon.classList.remove("bx-x");
};

// Video Modal
const modal = document.getElementById("videoModal");
const btn = document.getElementById("watchVideoBtn");
const span = document.getElementsByClassName("close-modal")[0];
const videoPlayer = document.getElementById("videoFrame");

btn.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "flex";
  videoPlayer.play();
};

span.onclick = function () {
  modal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }
};

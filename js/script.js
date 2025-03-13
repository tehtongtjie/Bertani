// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//when menu click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click dluar sidebar menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const menu = document.querySelector("#menu");
const navbarNav = document.querySelector(".navbar-nav");

// Toggle menu saat tombol diklik
menu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

// Tutup menu jika klik di luar sidebar
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

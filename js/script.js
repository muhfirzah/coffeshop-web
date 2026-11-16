const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    navToggle.classList.toggle("open");

    const sudahBuka = navMenu.classList.contains("show");
    navToggle.setAttribute("aria-expanded", sudahBuka);
  });

  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    if (nama.length < 3) {
      alert("Nama minimal 3 karakter.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email belum valid.");
      return;
    }

    if (pesan.length < 10) {
      alert("Pesan minimal 10 karakter.");
      return;
    }

    alert("Terima kasih, " + nama + "! Pesan kamu sudah kami terima.");
    contactForm.reset();
  });
}

// ==========================
// DARK MODE
// ==========================
const darkModeToggle = document.getElementById("darkModeToggle");

// Setează starea inițială la încărcarea paginii
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark-mode");
  if (darkModeToggle) darkModeToggle.textContent = "☀️ Light";
} else {
  document.body.classList.remove("dark-mode");
  if (darkModeToggle) darkModeToggle.textContent = "🌙 Dark";
}

// Toggle dark/light mode la click
if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "on");
      darkModeToggle.textContent = "☀️ Light";
    } else {
      localStorage.setItem("darkMode", "off");
      darkModeToggle.textContent = "🌙 Dark";
    }
  });
}

// ==========================
// NAVBAR - LINK ACTIV PE BAZA URL-ULUI
// ==========================
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

// ==========================
// DOMContentLoaded - REGISTER / LOGIN / NAVBAR
// ==========================
document.addEventListener("DOMContentLoaded", function () {

  const nameEl = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");
  const profilBtn = document.getElementById("profilBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userSection = document.getElementById("userSection");

  const nume = localStorage.getItem("nume");
  const email = localStorage.getItem("email");

  // ==========================
  // REGISTER FORM
  // ==========================
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const numeInput = document.getElementById("nume").value;
      const emailInput = document.getElementById("email").value;

      localStorage.setItem("nume", numeInput);
      localStorage.setItem("email", emailInput);
      localStorage.setItem("userLogat", "true");

      window.location.href = "comenzi.html";
    });
  }

  // ==========================
  // LOGIN FORM
  // ==========================
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = document.getElementById("emailLogin").value;

      localStorage.setItem("email", emailInput);
      localStorage.setItem("userLogat", "true");

      window.location.href = "comenzi.html";
    });
  }

  // ==========================
  // AFIȘARE DATE USER ÎN NAVBAR
  // ==========================
  if (nume && email) {
    if (nameEl) nameEl.textContent = nume + " | ";
    if (emailEl) emailEl.textContent = email;

    // Afișăm butoanele profil și logout
    if (profilBtn) profilBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

    // Ascundem butonul Login / Înregistrează-te
    const loginBtn = userSection.querySelector("a[href='login.html']");
    if (loginBtn) loginBtn.style.display = "none";

    // BUTON LOGOUT
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("nume");
        localStorage.removeItem("email");
        localStorage.removeItem("userLogat");

        window.location.href = "login.html";
      });
    }

  } else {
    // Dacă userul NU e logat
    if (profilBtn) profilBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";

    const loginBtn = userSection.querySelector("a[href='login.html']");
    if (loginBtn) loginBtn.style.display = "inline-block";
  }

  // ==========================
  // AFIȘARE DATE PE PAGINA CONTULUI
  // ==========================
  const accountName = document.getElementById("accountName");
  const accountEmail = document.getElementById("accountEmail");

  if (accountName && nume) accountName.textContent = nume;
  if (accountEmail && email) accountEmail.textContent = email;
});
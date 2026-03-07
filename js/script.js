// dark mode
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
});

if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark-mode");
}

// nav bar - link activ pe baza URL-ului
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  // elimină eventualul 'active'
  link.classList.remove('active');

  // compară href-ul linkului cu path-ul curent
  if (link.getAttribute('href') === currentPath.split("/").pop()) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", function () {

  // REGISTER
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

      e.preventDefault();

      const nume = document.getElementById("nume").value;
      const email = document.getElementById("email").value;

      localStorage.setItem("nume", nume);
      localStorage.setItem("email", email);
      localStorage.setItem("userLogat", "true");

      window.location.href = "comenzi.html";

    });

  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

      e.preventDefault();

      const email = document.getElementById("emailLogin").value;

      localStorage.setItem("email", email);
      localStorage.setItem("userLogat", "true");

      window.location.href = "comenzi.html";

    });

  }

  // AFIȘARE NUME ȘI EMAIL ÎN NAVBAR
  const nume = localStorage.getItem("nume");
  const email = localStorage.getItem("email");

  const nameEl = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");

  if (nameEl && nume) {
    nameEl.textContent = nume;
  }

  if (emailEl && email) {
    emailEl.textContent = email;
  }

});

// afisare date in pagina contului
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");

const nume = localStorage.getItem("nume");
const email = localStorage.getItem("email");

if (accountName && nume) {
  accountName.textContent = nume;
}

if (accountEmail && email) {
  accountEmail.textContent = email;
}


document.addEventListener("DOMContentLoaded", function () {
  const nume = localStorage.getItem("nume");
  const email = localStorage.getItem("email");

  const nameEl = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");
  const profilBtn = document.getElementById("profilBtn");
  const userSection = document.getElementById("userSection");

  if (nume && email) {
    // afiseaza datele userului
    if(nameEl) nameEl.textContent = nume + " | ";
    if(emailEl) emailEl.textContent = email;

    // buton logout
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn){
      logoutBtn.addEventListener("click", function(){
        // sterge datele userului
        localStorage.removeItem("nume");
        localStorage.removeItem("email");
        localStorage.removeItem("userLogat");

        // redirect catre login
        window.location.href = "login.html";
      });
    }

  } else {
    // daca nu e logat, arata buton login
    if(userSection){
      userSection.innerHTML = `
        <a href="login.html" class="btn btn-primary btn-sm">
          Login / Înregistrează-te
        </a>
        <button id="darkModeToggle" class="btn btn-darkmode btn-sm ms-2">
          🌙 Dark
        </button>
      `;
    }
  }
});
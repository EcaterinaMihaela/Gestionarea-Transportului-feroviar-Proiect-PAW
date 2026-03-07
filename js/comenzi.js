document.addEventListener("DOMContentLoaded", function () {
  const nume = localStorage.getItem("nume"); // verificăm dacă e logat

  // 1. Buton Rute + cumpără
  const cumparaBtn = document.getElementById("cumparaBtn");
  if (cumparaBtn) {
    cumparaBtn.addEventListener("click", function () {
      if (!nume) {
        alert("Trebuie să fii logat pentru a cumpăra bilete!");
        window.location.href = "login.html";
      } else {
        window.location.href = "rute-trenuri.html";
      }
    });
  }

  // 2. Buton Lista comenzilor
  const listaComenziBtn = document.getElementById("listaComenziBtn");
  if (listaComenziBtn) {
    listaComenziBtn.addEventListener("click", function () {
      if (!nume) {
        alert("Trebuie să fii logat pentru a vedea comenzile!");
        window.location.href = "login.html";
      } else {
        window.location.href = "lista-comenzi.html";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nume = localStorage.getItem("nume"); // verificăm dacă e logat

  // Buton Cumpără bilet
  const cumparaBtn = document.getElementById("cumparaBtn");
  if (cumparaBtn) {
    cumparaBtn.addEventListener("click", function (e) {
      if (!nume) {
        e.preventDefault();
        alert("Trebuie să fii logat pentru a cumpăra bilete!");
        window.location.href = "login.html";
      } else {
        // redirect normal către pagina de rute
        window.location.href = "rute-trenuri.html";
      }
    });
  }

  //3. Buton Cumpără abonament
  const abonamentBtn = document.querySelector('a.btn-card[href="register.html"], #abonamentBtn') || 
                       document.querySelectorAll('.card a.btn-card')[1]; // a doua card
  if (abonamentBtn) {
    abonamentBtn.addEventListener("click", function (e) {
      if (!nume) {
        e.preventDefault();
        alert("Trebuie să fii logat pentru a cumpăra un abonament!");
        window.location.href = "login.html";
        return;
      }

      // întreabă pe câte zile
      const zile = prompt("Alege numărul de zile pentru abonament (5, 14, 30):", "5");
      if (!zile || ![5,14,30].includes(parseInt(zile))) {
        alert("Număr de zile invalid!");
        return;
      }

      // întreabă ruta de abonament (poți să adaptezi la stații reale)
      const plecare = prompt("Stația de plecare:");
      const destinatie = prompt("Stația de destinație:");

      // creează obiectul abonament
      const abonament = {
        id: Date.now(), // id unic
        cumparat: new Date().toISOString().split("T")[0],
        data: new Date().toISOString().split("T")[0],
        plecare: plecare || "-",
        destinatie: destinatie || "-",
        tip: "abonament",
        zile: parseInt(zile)
      };

      // citește comenzi existente, adaugă abonamentul și salvează
      const comenzi = JSON.parse(localStorage.getItem("comenzi")) || [];
      comenzi.push(abonament);
      localStorage.setItem("comenzi", JSON.stringify(comenzi));

      alert(`Abonament ${zile} zile cumpărat cu succes!`);
    });
  }

});
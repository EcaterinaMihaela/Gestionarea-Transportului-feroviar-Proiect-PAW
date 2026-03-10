document.addEventListener("DOMContentLoaded", function () {

  const nume = localStorage.getItem("nume");

  // Rute + cumpără- redirectionare login sau rute+cumpara
  const cumparaBtn = document.getElementById("cumparaBtn");
  if (cumparaBtn) {
    cumparaBtn.addEventListener("click", function () {

      if (!nume) {
        alert("Trebuie să fii logat pentru a cumpăra bilete!");
        window.location.href = "login.html";
        return;
      }

      window.location.href = "rute-trenuri.html";
    });
  }

  // Lista comenzilor
  const listaComenziBtn = document.getElementById("listaComenziBtn");
  if (listaComenziBtn) {
    listaComenziBtn.addEventListener("click", function () {

      if (!nume) {
        alert("Trebuie să fii logat pentru a vedea comenzile!");
        window.location.href = "login.html";
        return;
      }

      window.location.href = "lista-comenzi.html";
    });
  }

  // Cumpără abonament
  const abonamentBtn = document.getElementById("abonamentBtn");

  if (abonamentBtn) {
    abonamentBtn.addEventListener("click", function (e) {

      if (!nume) {
        e.preventDefault();
        alert("Trebuie să fii logat pentru a cumpăra un abonament!");
        window.location.href = "login.html";
        return;
      }

      const zile = prompt("Alege numărul de zile pentru abonament (5, 14, 30):", "5");

      if (!zile || ![5,14,30].includes(parseInt(zile))) {
        alert("Număr de zile invalid!");
        return;
      }

      const plecare = prompt("Stația de plecare:");
      const destinatie = prompt("Stația de destinație:");

      //se creeaza obj abonament si se salv in localStorage
      const abonament = {
        id: Date.now(),
        data: new Date().toISOString().split("T")[0],
        plecare: plecare || "-",
        destinatie: destinatie || "-",
        tip: "abonament",
        zile: parseInt(zile)
      };

      const comenzi = JSON.parse(localStorage.getItem("comenzi")) || [];
      comenzi.push(abonament);

      localStorage.setItem("comenzi", JSON.stringify(comenzi));

      alert(`Abonament ${zile} zile cumpărat cu succes!`);
    });
  }

});
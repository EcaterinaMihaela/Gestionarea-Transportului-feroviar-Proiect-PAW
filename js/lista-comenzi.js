document.addEventListener("DOMContentLoaded", function () {

  // citește comenzile din localStorage
  let comenzi = JSON.parse(localStorage.getItem("comenzi")) || [];

  // funcție pentru afișare în tabel cu buton de ștergere
  function afiseaza(lista) {
  const tabelBilete = document.getElementById("tabelComenzi");
  tabelBilete.innerHTML = "";

  // afișăm biletele
  const bilete = lista.filter(c => c.tip !== "abonament");
  const abonamente = lista.filter(c => c.tip === "abonament");

  if (bilete.length) {
    bilete.forEach((c, index) => {
      tabelBilete.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${c.cumparat || "-"}</td>
          <td>${c.data || "-"}</td>
          <td>${c.plecare || c.ruta?.split(":")[1]?.split("–")[0]?.trim() || "-"}</td>
          <td>${c.destinatie || c.ruta?.split("–")[1]?.trim() || "-"}</td>
          <td>
            <button class="btn btn-sm btn-danger deleteBtn" data-index="${index}" data-tip="bilet">Șterge</button>
          </td>
        </tr>
      `;
    });
  }

  // afișăm abonamentele
  if (abonamente.length) {
    tabelBilete.innerHTML += `
      <tr><td colspan="6" class="table-info text-center">Abonamente</td></tr>
    `;
    abonamente.forEach((c, index) => {
      tabelBilete.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${c.cumparat}</td>
          <td>${c.data}</td>
          <td>${c.plecare}</td>
          <td>${c.destinatie}</td>
          <td>${c.zile} zile
            <button class="btn btn-sm btn-danger deleteBtn" data-index="${index}" data-tip="abonament">Șterge</button>
          </td>
        </tr>
      `;
    });
  }

  // event listener pentru ștergere
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      const idx = parseInt(this.getAttribute("data-index"));
      const tip = this.getAttribute("data-tip");

      let comenzi = JSON.parse(localStorage.getItem("comenzi")) || [];

      if (tip === "bilet") {
        const bilete = comenzi.filter(c => c.tip !== "abonament");
        const bileteRest = bilete.splice(idx, 1);
        // reconstruim lista completă
        const abonamente = comenzi.filter(c => c.tip === "abonament");
        comenzi = [...bilete, ...abonamente];
      } else if (tip === "abonament") {
        const abonamente = comenzi.filter(c => c.tip === "abonament");
        const abonamenteRest = abonamente.splice(idx, 1);
        const bilete = comenzi.filter(c => c.tip !== "abonament");
        comenzi = [...bilete, ...abonamente];
      }

      localStorage.setItem("comenzi", JSON.stringify(comenzi));
      afiseaza(comenzi);
    });
  });
}

  // funcție pentru filtrare după date
  window.filtreaza = function() {
    const start = document.getElementById("dataStart").value;
    const end = document.getElementById("dataEnd").value;

    if (!start && !end) {
      afiseaza(comenzi);
      return;            
    }

    const filtrate = comenzi.filter(c => {
      const dataBilet = c.data || "";
      return (!start || dataBilet >= start) && (!end || dataBilet <= end);
    });

    afiseaza(filtrate);
  }

  // afișează toate comenzile la încărcarea paginii
  afiseaza(comenzi);

});
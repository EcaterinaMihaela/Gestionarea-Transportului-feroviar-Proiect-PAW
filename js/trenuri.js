// trenuri.js

// normalizează textul ca să meargă cu diacritice
function normalize(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// caută trenuri în tabel
function cautaTren() {
    let plecare = normalize(document.getElementById("plecare").value);
    let sosire = normalize(document.getElementById("sosire").value);

    let randuri = document.querySelectorAll("#tabelTrenuri tr");

    randuri.forEach(function(rand){
        let ruta = normalize(rand.cells[1].innerText);
        if(ruta.includes(plecare) && ruta.includes(sosire)){
            rand.style.display = "";
        } else {
            rand.style.display = "none";
        }
    });
}

// eveniment pentru formular (dacă ai un form cu submit)
document.getElementById("searchForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let plecare = document.getElementById("plecare").value;
    let sosire = document.getElementById("sosire").value;
    let data = document.getElementById("data").value;

    if(plecare === "" || sosire === "" || data === "") {
        alert("Te rog completează toate câmpurile!");
        return;
    }

    if(plecare === sosire) {
        alert("Stația de plecare și sosire nu pot fi identice!");
        return;
    }

    alert("Căutare realizată cu succes!\n" +
          "Plecare: " + plecare + "\n" +
          "Sosire: " + sosire + "\n" +
          "Data: " + data);

    cautaTren();
});
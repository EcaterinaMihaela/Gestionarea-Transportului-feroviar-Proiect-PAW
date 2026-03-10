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

    let id = document.getElementById("idTren").value.toLowerCase();
    let tabel = document.getElementById("tabelTrenuri");
    let randuri = tabel.getElementsByTagName("tr");

    for (let i = 0; i < randuri.length; i++) {
        let coloane = randuri[i].getElementsByTagName("td");

        if (coloane.length > 0) {

            let idTren = coloane[0].innerText.toLowerCase();

            if (id === "" || idTren.includes(id)) {
                randuri[i].style.display = "";
            } else {
                randuri[i].style.display = "none";
            }

        }
    }

}

// eveniment pentru formular
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
document.getElementById("searchForm").addEventListener("submit", function(e) {
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
});
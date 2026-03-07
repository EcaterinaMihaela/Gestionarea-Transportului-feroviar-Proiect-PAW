// funcție pentru normalizare text (diacritice și litere mici)
function normalize(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

document.getElementById("searchRouteForm").addEventListener("submit", function(e){
  e.preventDefault();

  const from = normalize(document.getElementById("from").value);
  const to = normalize(document.getElementById("to").value);

  const routes = document.querySelectorAll("#routeList li");

  let found = false;

  routes.forEach(route => {
    const text = normalize(route.innerText);
    if(text.includes(from) && text.includes(to)) {
      route.style.display = "";
      found = true;
    } else {
      route.style.display = "none";
    }
  });

  if(!found) {
    alert("Nu s-au găsit rute pentru stațiile selectate.");
  }
});


// butoane pentru modificarea datei
const dateInput = document.getElementById("travelDate");
const prevBtn = document.getElementById("prevDay");
const nextBtn = document.getElementById("nextDay");

// setează data implicită ca azi
dateInput.valueAsDate = new Date();

// funcție pentru schimbarea zilei
function changeDate(days) {
  let currentDate = new Date(dateInput.value);
  currentDate.setDate(currentDate.getDate() + days);
  dateInput.valueAsDate = currentDate;
}

// click pe butoane
prevBtn.addEventListener("click", () => changeDate(-1));
nextBtn.addEventListener("click", () => changeDate(1));


document.getElementById("searchRouteForm").addEventListener("submit", function(e){
  e.preventDefault();

  const from = normalize(document.getElementById("from").value);
  const to = normalize(document.getElementById("to").value);
  const date = document.getElementById("travelDate").value;

  const routes = document.querySelectorAll("#routeList li");

  let found = false;
  routes.forEach(route => {
    const text = normalize(route.innerText);
    if(text.includes(from) && text.includes(to)) {
      route.style.display = "";
      found = true;
    } else {
      route.style.display = "none";
    }
  });

  if(!found) {
    alert("Nu s-au găsit rute pentru stațiile selectate la data selectată.");
  } else {
    alert("Căutare realizată cu succes!\nData: " + date);
  }
});

//selectare ruta dorita pt a cumpara bilet
document.addEventListener("DOMContentLoaded", function () {

  const routeList = document.getElementById("routeList");

  // verificare logat
  const userLogat = localStorage.getItem("nume");

  if (routeList) {
    routeList.addEventListener("click", function (e) {
      if (e.target && e.target.nodeName === "LI") {
        const ruta = e.target.textContent;

        if (!userLogat) {
          alert("Trebuie să fii logat pentru a cumpăra bilete!");
          window.location.href = "login.html";
          return;
        }

        // salvam comanda in localStorage
        let comenzi = JSON.parse(localStorage.getItem("comenzi")) || [];
        comenzi.push({
          ruta: ruta,
          data: document.getElementById("travelDate").value || "Azi"
        });
        localStorage.setItem("comenzi", JSON.stringify(comenzi));

        alert("Comanda a fost adăugată cu succes!");
      }
    });
  }

});
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("listaComenziBtn");

  if (btn) {

    btn.addEventListener("click", function () {

      const userLogat = localStorage.getItem("userLogat");

      if (userLogat) {
        window.location.href = "lista-comenzi.html";
      } else {
        window.location.href = "register.html";
      }

    });

  }

});
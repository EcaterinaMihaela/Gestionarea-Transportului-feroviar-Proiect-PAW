// Inițializare hartă centrată pe România
var map = L.map('map').setView([44.3, 25.0], 8);

// TileLayer OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Stații
var stations = [
  { name: "București Nord", coords: [44.447, 26.075] },
  { name: "Videle", coords: [44.277, 25.525] },
  { name: "Roșiori Nord", coords: [44.111, 24.966] },
  { name: "Caracal", coords: [44.113, 24.345] },
  { name: "Craiova", coords: [44.329, 23.812] }
];

// Adăugare markere pe hartă
stations.forEach(function(s) {
  L.marker(s.coords).addTo(map).bindPopup("<b>" + s.name + "</b><br>Stație CFR");
});

// Funcție pentru zoom pe stație
function focusStation(lat, lng) {
  map.flyTo([lat, lng], 13);
}


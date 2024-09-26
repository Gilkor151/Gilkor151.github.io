document.addEventListener('DOMContentLoaded', function() {
    // Skapar en Leaflet-karta
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Lägger till ett OpenStreetMap-lager på kartan
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lägger till en markör på koordinaterna [51.5, -0.09]
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('Butik')
        .openPopup();
});
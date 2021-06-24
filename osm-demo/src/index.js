const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const globe_map = L.map('map').setView([0, 0], 2);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tile_Url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tile = L.tileLayer(tile_Url, { attribution });

tile.addTo(globe_map);

const iss_icon = L.icon({ 
  iconUrl: '../markers/iss.png',
  iconSize: [50, 32] 
});

var iss = L.marker([0, 0], { icon: iss_icon }).addTo(globe_map);

/** Other Unplanned Marks */
var marker = L.marker([6.3690, 34.8888]).addTo(globe_map);
var mark1 = L.marker([37.0902, 95.7129]).addTo(globe_map);
var mark2 = L.marker([25.2744, 133.7751]).addTo(globe_map);

marker.bindPopup('Demo Marker').openPopup();

let init = true;

const getLocation = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude, altitude, velocity, visibility } = data;

  iss.setLatLng([latitude, longitude]);

  /** Disable Map Zoom Reset */
  if (init) {
    globe_map.setView([latitude, longitude], 3);
    init = false;
  }

  document.getElementById('display').innerHTML = `
        <p>
        Latitude: ${latitude.toFixed(2)}° |    Longitude: ${longitude.toFixed(2)}° |    Orbiting at: ${altitude.toFixed(2)} kilometers <br>
        Velocity of: ${velocity.toFixed(2)} km/h and its currently '${visibility}'
        </p>
  `
}

getLocation();

setInterval(getLocation, 1000);
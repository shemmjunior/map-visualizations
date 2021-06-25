const kim_kiv = "../geojson/kim-posta.geojson";
const kkoo_mh = "../geojson/ko-mh.geojson";
let layers;

mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbW1qdW5pb3IiLCJhIjoiY2s4eXF5M24zMGtrcjNsdGFnODZlYnRybCJ9.X3IoNq1TeftY1LLGbeDVtw";

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "../layers/layer.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init() {
  loadJSON(function (response) {
    layers = JSON.parse(response);
  });
}

init();

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [39.2307205, -6.8023832],
  zoom: 12,
  maxZoom: 15,
  minZoom: 13,
});

map.on("load", () => {
  map.addSource("kim_kiv", { type: "geojson", data: kim_kiv });
  map.addSource("kkoo_muh", { type: "geojson", data: kkoo_mh });

  layers.forEach((layer) => map.addLayer(layer));
});

changeRoute = (event) => {
  const selectedRoute = event.target.value;
  if (selectedRoute === "kim-kiv") {
    map.setLayoutProperty("kkoo_muh", "visibility", "none");
    map.setLayoutProperty("kim_kiv", "visibility", "visible");
  } else if (selectedRoute === "muh-kkoo") {
    map.setLayoutProperty("kim_kiv", "visibility", "none");
    map.setLayoutProperty("kkoo_muh", "visibility", "visible");
  } else if (selectedRoute === "all") {
    map.setLayoutProperty("kim_kiv", "visibility", "visible");
    map.setLayoutProperty("kkoo_muh", "visibility", "visible");
  }
};

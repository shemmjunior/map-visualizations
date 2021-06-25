const kim_kiv = "../geojson/kim-posta.geojson";
const kkoo_mh = "../geojson/ko-mh.geojson";
const mbezi_makumbusho = "../geojson/mbezi-makumbusho.geojson"
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
  center: [39.199683, -6.7767275],
  zoom: 12,
  maxZoom: 15,
  minZoom: 10,
});

map.on("load", () => {
  map.addSource("kim_kiv", { type: "geojson", data: kim_kiv });
  map.addSource("kkoo_muh", { type: "geojson", data: kkoo_mh });
  map.addSource("mbezi_makumbusho", { type: "geojson", data: mbezi_makumbusho });


  layers.forEach((layer) => map.addLayer(layer));
});

changeRoute = (event) => {
  const selectedRoute = event.target.value;
  if (selectedRoute === "all") {
    /** Lines */
    map.setLayoutProperty("kim_kiv", "visibility", "visible");
    map.setLayoutProperty("kkoo_muh", "visibility", "visible");
    map.setLayoutProperty("mbezi_makumbusho", "visibility", "visible");
    /** Symbols */
    map.setLayoutProperty("symbol_mbezi_makumbusho", "visibility", "visible");
    map.setLayoutProperty("symbol_kimara_kivukoni", "visibility", "visible");


  } else if (selectedRoute === "muh-kkoo") {
    /** Lines */
    map.setLayoutProperty("kim_kiv", "visibility", "none");
    map.setLayoutProperty("mbezi_makumbusho", "visibility", "none");
    map.setLayoutProperty("kkoo_muh", "visibility", "visible");
    /** Symbols */
    map.setLayoutProperty("symbol_mbezi_makumbusho", "visibility", "none");
    map.setLayoutProperty("symbol_kimara_kivukoni", "visibility", "none");

  } else if (selectedRoute === "kim-kiv") {
    /** Lines */
    map.setLayoutProperty("kkoo_muh", "visibility", "none");
    map.setLayoutProperty("mbezi_makumbusho", "visibility", "none");
    map.setLayoutProperty("kim_kiv", "visibility", "visible");
    /** Symbols */
    map.setLayoutProperty("symbol_kimara_kivukoni", "visibility", "visible");
    map.setLayoutProperty("symbol_mbezi_makumbusho", "visibility", "none");


  } else if (selectedRoute === "mbezi-makumbusho") {
    /** Lines */
    map.setLayoutProperty("kim_kiv", "visibility", "none");
    map.setLayoutProperty("kkoo_muh", "visibility", "none");
    map.setLayoutProperty("mbezi_makumbusho", "visibility", "visible");
    /** Symbols */
    map.setLayoutProperty("symbol_mbezi_makumbusho", "visibility", "visible");
    map.setLayoutProperty("symbol_kimara_kivukoni", "visibility", "none");


  }
};

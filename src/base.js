/**
 * Get All GEOJSON Data as Route Mapping Source
 */
const kimara_kivukoni = "../geojson/kimara_kivukoni.geojson";
const mbezi_makumbusho = "../geojson/mbezi-makumbusho.geojson";
const morroco_kivukoin = "../geojson/morroco-kivukoni.geojson";
const mbezi_kim_makumbusho = "../geojson/mbezi-kim-makumbusho.geojson";
const makumbusho_posta = "../geojson/makumbusho-posta.geojson"

let layers;

/** Access Token is Public! It doesn't matter any security concerns because its similar to @ user */
mapboxgl.accessToken = "pk.eyJ1Ijoic2hlbW1qdW5pb3IiLCJhIjoiY2s4eXF5M24zMGtrcjNsdGFnODZlYnRybCJ9.X3IoNq1TeftY1LLGbeDVtw";

/**
 * Load JSON From Local FIle
 * @param {*} callback 
 */
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

/**
 * Initialize Layers Loading
 */
function init() {
  loadJSON(function (response) {
    layers = JSON.parse(response);
  });
}

init();

/**
 * Construct MapBoxGL Configs
 */
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [ 39.28409788063419, -6.824144057848329],
  zoom: 16,
  minZoom: 10,
  bearing: -17.6,
  pitch: 60,
});

map.on("load", () => {
  map.addSource("kimara_kivukoni", { type: "geojson", data: kimara_kivukoni });
  map.addSource("mbezi_makumbusho", { type: "geojson", data: mbezi_makumbusho });
  map.addSource("morroco_kivukoni", { type: "geojson", data: morroco_kivukoin });
  map.addSource("mbezi_kim_makumbusho", { type: "geojson", data: mbezi_kim_makumbusho });
  map.addSource("makumbusho_posta", { type: "geojson", data: makumbusho_posta });

  layers.forEach((layer) => map.addLayer(layer));

});

map.addControl(new mapboxgl.NavigationControl());

/**
 * Handle OnSelect Change Route
 */
changeRoute = (event) => {
  const selectedRoute = event.target.value;

  if (selectedRoute === "all") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "visible");
    });
  } else if (selectedRoute === "kimara_kivukoni") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "kimara_kivukoni") {
        map.setLayoutProperty("kimara_kivukoni", "visibility", "visible");
        map.setLayoutProperty("symbol_kimara_kivukoni", "visibility", "visible");
      }
    });
  } else if (selectedRoute === "mbezi_makumbusho") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "mbezi_makumbusho") {
        map.setLayoutProperty("mbezi_makumbusho", "visibility", "visible");
        map.setLayoutProperty("symbol_mbezi_makumbusho", "visibility", "visible");
      }
    });
  } else if (selectedRoute === "morroco_kivukoni") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "morroco_kivukoni") {
        map.setLayoutProperty("morroco_kivukoni", "visibility", "visible");
        map.setLayoutProperty("symbol_morroco_kivukoni", "visibility", "visible");
      }
    });
  } else if (selectedRoute === "mbezi_kim_makumbusho") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "mbezi_kim_makumbusho") {
        map.setLayoutProperty("mbezi_kim_makumbusho", "visibility", "visible");
        map.setLayoutProperty("symbol_mbezi_kim_makumbusho", "visibility", "visible");
      }
    });
  }  else if (selectedRoute === "makumbusho_posta") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "makumbusho_posta") {
        map.setLayoutProperty("makumbusho_posta", "visibility", "visible");
        map.setLayoutProperty("symbol_makumbusho_posta", "visibility", "visible");
      }
    });
  } 
};

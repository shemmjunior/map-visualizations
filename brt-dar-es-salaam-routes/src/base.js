const kimara_kivukoni = "../geojson/kimara_kivukoni.geojson";
const kkoo_mh = "../geojson/ko-mh.geojson";
const mbezi_makumbusho = "../geojson/mbezi-makumbusho.geojson";
const morroco_kivukoin = "../geojson/morroco-kivukoni.geojson";

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
  map.addSource("kimara_kivukoni", { type: "geojson", data: kimara_kivukoni });
  map.addSource("muh_kkoo", { type: "geojson", data: kkoo_mh });
  map.addSource("mbezi_makumbusho", { type: "geojson", data: mbezi_makumbusho });
  map.addSource("morroco_kivukoni", { type: "geojson", data: morroco_kivukoin });

  layers.forEach((layer) => map.addLayer(layer));
});

changeRoute = (event) => {
  const selectedRoute = event.target.value;
  if (selectedRoute === "all") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "visible");
    });
  } else if (selectedRoute === "muh_kkoo") {
    layers.forEach((layer) => {
      map.setLayoutProperty(layer.id, "visibility", "none");

      if (layer.id === "muh_kkoo") {
        map.setLayoutProperty("muh_kkoo", "visibility", "visible");
      }
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
  }
};

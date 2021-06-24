const kim_kiv = '../geojson/kim-posta.geojson'
const kkoo_mh = '../geojson/ko-mh.geojson'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hlbW1qdW5pb3IiLCJhIjoiY2s4eXF5M24zMGtrcjNsdGFnODZlYnRybCJ9.X3IoNq1TeftY1LLGbeDVtw';



var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/dark-v10",
    center: [39.2307205, -6.8023832],
    zoom: 12,
});

map.on("load", () => {
    map.addSource("route", { type: "geojson", data: kim_kiv });
    map.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#96453f",
        "line-width": 3,
      },
    });
  });

  changeRoute = (event) => {
    const selectedRoute = event.target.value;
    if (selectedRoute === "kim-kiv") {
      map.getSource("route").setData(kim_kiv);
    } else if (selectedRoute === "muh-kkoo") {
      map.getSource("route").setData(kkoo_mh);
    }
}
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ (() => {

eval("const kimara_kivukoni = \"../geojson/kimara_kivukoni.geojson\";\r\nconst kkoo_mh = \"../geojson/ko-mh.geojson\";\r\nconst mbezi_makumbusho = \"../geojson/mbezi-makumbusho.geojson\";\r\nconst morroco_kivukoin = \"../geojson/morroco-kivukoni.geojson\";\r\n\r\nlet layers;\r\n\r\nmapboxgl.accessToken = \"pk.eyJ1Ijoic2hlbW1qdW5pb3IiLCJhIjoiY2s4eXF5M24zMGtrcjNsdGFnODZlYnRybCJ9.X3IoNq1TeftY1LLGbeDVtw\";\r\n\r\nfunction loadJSON(callback) {\r\n  var xobj = new XMLHttpRequest();\r\n  xobj.overrideMimeType(\"application/json\");\r\n  xobj.open(\"GET\", \"../layers/layer.json\", true);\r\n  xobj.onreadystatechange = function () {\r\n    if (xobj.readyState == 4 && xobj.status == \"200\") {\r\n      callback(xobj.responseText);\r\n    }\r\n  };\r\n  xobj.send(null);\r\n}\r\n\r\nfunction init() {\r\n  loadJSON(function (response) {\r\n    layers = JSON.parse(response);\r\n  });\r\n}\r\n\r\ninit();\r\n\r\nvar map = new mapboxgl.Map({\r\n  container: \"map\",\r\n  style: \"mapbox://styles/mapbox/dark-v10\",\r\n  center: [39.199683, -6.7767275],\r\n  zoom: 12,\r\n  maxZoom: 15,\r\n  minZoom: 10,\r\n});\r\n\r\nmap.on(\"load\", () => {\r\n  map.addSource(\"kimara_kivukoni\", { type: \"geojson\", data: kimara_kivukoni });\r\n  map.addSource(\"muh_kkoo\", { type: \"geojson\", data: kkoo_mh });\r\n  map.addSource(\"mbezi_makumbusho\", { type: \"geojson\", data: mbezi_makumbusho });\r\n  map.addSource(\"morroco_kivukoni\", { type: \"geojson\", data: morroco_kivukoin });\r\n\r\n  layers.forEach((layer) => map.addLayer(layer));\r\n});\r\n\r\nchangeRoute = (event) => {\r\n  const selectedRoute = event.target.value;\r\n  if (selectedRoute === \"all\") {\r\n    layers.forEach((layer) => {\r\n      map.setLayoutProperty(layer.id, \"visibility\", \"visible\");\r\n    });\r\n  } else if (selectedRoute === \"muh_kkoo\") {\r\n    layers.forEach((layer) => {\r\n      map.setLayoutProperty(layer.id, \"visibility\", \"none\");\r\n\r\n      if (layer.id === \"muh_kkoo\") {\r\n        map.setLayoutProperty(\"muh_kkoo\", \"visibility\", \"visible\");\r\n      }\r\n    });\r\n  } else if (selectedRoute === \"kimara_kivukoni\") {\r\n    layers.forEach((layer) => {\r\n      map.setLayoutProperty(layer.id, \"visibility\", \"none\");\r\n\r\n      if (layer.id === \"kimara_kivukoni\") {\r\n        map.setLayoutProperty(\"kimara_kivukoni\", \"visibility\", \"visible\");\r\n        map.setLayoutProperty(\"symbol_kimara_kivukoni\", \"visibility\", \"visible\");\r\n      }\r\n    });\r\n  } else if (selectedRoute === \"mbezi_makumbusho\") {\r\n    layers.forEach((layer) => {\r\n      map.setLayoutProperty(layer.id, \"visibility\", \"none\");\r\n\r\n      if (layer.id === \"mbezi_makumbusho\") {\r\n        map.setLayoutProperty(\"mbezi_makumbusho\", \"visibility\", \"visible\");\r\n        map.setLayoutProperty(\"symbol_mbezi_makumbusho\", \"visibility\", \"visible\");\r\n      }\r\n    });\r\n  } else if (selectedRoute === \"morroco_kivukoni\") {\r\n    layers.forEach((layer) => {\r\n      map.setLayoutProperty(layer.id, \"visibility\", \"none\");\r\n\r\n      if (layer.id === \"morroco_kivukoni\") {\r\n        map.setLayoutProperty(\"morroco_kivukoni\", \"visibility\", \"visible\");\r\n        map.setLayoutProperty(\"symbol_morroco_kivukoni\", \"visibility\", \"visible\");\r\n      }\r\n    });\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://brt-dar-es-salaam-routes/./src/base.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/base.js"]();
/******/ 	
/******/ })()
;
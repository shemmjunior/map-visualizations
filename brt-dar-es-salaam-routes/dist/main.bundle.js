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

eval("const kim_kiv = '../geojson/kim-posta.geojson'\r\nconst kkoo_mh = '../geojson/ko-mh.geojson'\r\nmapboxgl.accessToken = 'pk.eyJ1Ijoic2hlbW1qdW5pb3IiLCJhIjoiY2s4eXF5M24zMGtrcjNsdGFnODZlYnRybCJ9.X3IoNq1TeftY1LLGbeDVtw';\r\n\r\n\r\n\r\nvar map = new mapboxgl.Map({\r\n    container: 'map',\r\n    style: \"mapbox://styles/mapbox/dark-v10\",\r\n    center: [39.2307205, -6.8023832],\r\n    zoom: 12,\r\n});\r\n\r\nmap.on(\"load\", () => {\r\n    map.addSource(\"route\", { type: \"geojson\", data: kim_kiv });\r\n    map.addLayer({\r\n      id: \"route\",\r\n      type: \"line\",\r\n      source: \"route\",\r\n      layout: {\r\n        \"line-join\": \"round\",\r\n        \"line-cap\": \"round\",\r\n      },\r\n      paint: {\r\n        \"line-color\": \"#96453f\",\r\n        \"line-width\": 3,\r\n      },\r\n    });\r\n  });\r\n\r\n  changeRoute = (event) => {\r\n    const selectedRoute = event.target.value;\r\n    if (selectedRoute === \"kim-kiv\") {\r\n      map.getSource(\"route\").setData(kim_kiv);\r\n    } else if (selectedRoute === \"muh-kkoo\") {\r\n      map.getSource(\"route\").setData(kkoo_mh);\r\n    }\r\n}\n\n//# sourceURL=webpack://brt-dar-es-salaam-routes/./src/base.js?");

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
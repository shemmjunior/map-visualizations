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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';\r\n\r\nconst globe_map = L.map('map').setView([0, 0], 2);\r\nconst attribution = '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors';\r\nconst tile_Url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';\r\nconst tile = L.tileLayer(tile_Url, { attribution });\r\n\r\ntile.addTo(globe_map);\r\n\r\nconst iss_icon = L.icon({ \r\n  iconUrl: '../markers/iss.png',\r\n  iconSize: [50, 32] \r\n});\r\n\r\nvar iss = L.marker([0, 0], { icon: iss_icon }).addTo(globe_map);\r\n\r\n/** Other Unplanned Marks */\r\nvar marker = L.marker([6.3690, 34.8888]).addTo(globe_map);\r\nvar mark1 = L.marker([37.0902, 95.7129]).addTo(globe_map);\r\nvar mark2 = L.marker([25.2744, 133.7751]).addTo(globe_map);\r\n\r\nmarker.bindPopup('Demo Marker').openPopup();\r\n\r\nlet init = true;\r\n\r\nconst getLocation = async () => {\r\n  const response = await fetch(api_url);\r\n  const data = await response.json();\r\n  const { latitude, longitude, altitude, velocity, visibility } = data;\r\n\r\n  iss.setLatLng([latitude, longitude]);\r\n\r\n  /** Disable Map Zoom Reset */\r\n  if (init) {\r\n    globe_map.setView([latitude, longitude], 3);\r\n    init = false;\r\n  }\r\n\r\n  document.getElementById('display').innerHTML = `\r\n        <p>\r\n        Latitude: ${latitude.toFixed(2)}° |    Longitude: ${longitude.toFixed(2)}° |    Orbiting at: ${altitude.toFixed(2)} kilometers <br>\r\n        Velocity of: ${velocity.toFixed(2)} km/h and its currently '${visibility}'\r\n        </p>\r\n  `\r\n}\r\n\r\ngetLocation();\r\n\r\nsetInterval(getLocation, 1000);\n\n//# sourceURL=webpack://open-street-map-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Jollof-rmbg.png"
/*!*****************************!*\
  !*** ./src/Jollof-rmbg.png ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fb240c56b463cd75d0a6.png\";\n\n//# sourceURL=webpack://nutridish/./src/Jollof-rmbg.png?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\nfunction loadAbout (){\r\nconst content = document.getElementById(\"content\");\r\n\r\ncontent.innerHTML = \"\";\r\n\r\nconst container = document.createElement(\"div\");\r\n\r\nconst header = document.createElement(\"h2\");\r\nheader.textContent = \"Nutridish Inc.\";\r\n\r\n\r\nconst description = document.createElement(\"p\");\r\n\r\ndescription.textContent = \"We are a nutrition-first 5-star restaurant that serves people from all around the world\";\r\n\r\n\r\ncontainer.appendChild(header);\r\ncontainer.appendChild(description);\r\n\r\ncontent.appendChild(container);\r\n}\n\n//# sourceURL=webpack://nutridish/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _Jollof_rmbg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jollof-rmbg.png */ \"./src/Jollof-rmbg.png\");\n\r\n\r\nfunction loadHome(){\r\nconst content = document.getElementById(\"content\");\r\n\r\ncontent.innerHTML = \"\";\r\n\r\nconst image = document.createElement(\"img\");\r\nimage.src = _Jollof_rmbg_png__WEBPACK_IMPORTED_MODULE_0__;\r\nimage.alt = \"Delicious Jollof Rice\";\r\n\r\nconst tagline = document.createElement(\"h2\");\r\ntagline.textContent = \"Nutrition first 😊\";\r\n\r\nconst description = document.createElement(\"pre\");\r\ndescription.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto dicta ducimusillum minima aspernatur praesentium ea voluptas, eligendi quaerat vel doloremque perspiciatis numquam neque iste eos sed non corporis.\";\r\n\r\ncontent.appendChild(image);\r\ncontent.appendChild(tagline);\r\ncontent.appendChild(description);\r\n}\n\n//# sourceURL=webpack://nutridish/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nalert(\"Welcome to Nutridish 🥗 🥪. We are a nutrition-first 5-star restaurant\");\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n\r\nconst homeBtn = document.getElementById(\"home\");\r\nhomeBtn.addEventListener(\"click\", () => {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n});\r\n\r\n\r\nconst menuBtn = document.getElementById(\"menu\");\r\nmenuBtn.addEventListener(\"click\", () => {\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n})\r\n\r\nconst aboutBtn = document.getElementById(\"about\");\r\naboutBtn.addEventListener(\"click\", () => {\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();\r\n})\n\n//# sourceURL=webpack://nutridish/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu (){\r\nconst content = document.getElementById(\"content\");\r\n\r\ncontent.innerHTML = \"\";\r\n\r\nconst container = document.createElement(\"div\");\r\n\r\nconst header = document.createElement(\"h2\");\r\nheader.textContent = \"Select from our nutrient-rich international dishes 🥗 🥪.\";\r\n\r\n\r\nconst dishList = document.createElement(\"ol\");\r\n\r\nconst fufu = document.createElement(\"li\");\r\nfufu.textContent = \"Fufu and Chicken Soup\";\r\n\r\nconst jollof = document.createElement(\"li\");\r\njollof.textContent = \"Jollof rice and Goat meat\";\r\n\r\nconst assorted = document.createElement(\"li\");\r\nassorted.textContent = \"Assorted Fried Rice\";\r\n\r\nconst riceBall = document.createElement(\"li\");\r\nriceBall.textContent = \"Rice Balls and Groundnut Soup\";\r\n\r\n\r\ndishList.appendChild(fufu);\r\ndishList.appendChild(jollof);\r\ndishList.appendChild(assorted);\r\ndishList.appendChild(riceBall);\r\n\r\n\r\ncontainer.appendChild(header);\r\ncontainer.appendChild(dishList);\r\n\r\ncontent.appendChild(container);\r\n}\n\n//# sourceURL=webpack://nutridish/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/styles/styles.sass":
/*!********************************!*\
  !*** ./src/styles/styles.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-store/./src/styles/styles.sass?");

/***/ }),

/***/ "./src/TS/index.ts":
/*!*************************!*\
  !*** ./src/TS/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.sass */ \"./src/styles/styles.sass\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/TS/slider.ts\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://book-store/./src/TS/index.ts?");

/***/ }),

/***/ "./src/TS/slider.ts":
/*!**************************!*\
  !*** ./src/TS/slider.ts ***!
  \**************************/
/***/ (() => {

eval("var dots = document.querySelectorAll('.slider-dots');\nvar banner = document.getElementById('banner');\nvar activeSlideIndex = 0;\ndots.forEach(function (dot) {\n    var bannerSrcOne = '/src/images/banner-01.png';\n    var bannerSrcTwo = '/src/images/banner-02.svg';\n    var bannerSrcThree = '/src/images/banner-03.svg';\n    dot.addEventListener('click', function (event) {\n        var dotObj = event.target;\n        console.log(dotObj.classList);\n        if (dotObj.classList.contains('slider-dots__dot-1')) {\n            clearActiveEllipse();\n            banner.src = bannerSrcOne;\n            dotObj.classList.add('active-dot');\n        }\n        if (dotObj.classList.contains('slider-dots__dot-2')) {\n            clearActiveEllipse();\n            banner.src = bannerSrcTwo;\n            dotObj.classList.add('active-dot');\n        }\n        if (dotObj.classList.contains('slider-dots__dot-3')) {\n            clearActiveEllipse();\n            banner.src = bannerSrcThree;\n            dotObj.classList.add('active-dot');\n        }\n    });\n});\nfunction clearActiveEllipse() {\n    dots.forEach(function (dot) {\n        console.log(dot);\n        dot.classList.remove('active-dot');\n    });\n}\n;\n\n\n//# sourceURL=webpack://book-store/./src/TS/slider.ts?");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/TS/index.ts");
/******/ 	
/******/ })()
;
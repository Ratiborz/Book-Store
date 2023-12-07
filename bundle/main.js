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

/***/ "./src/TS/BookInBasket.ts":
/*!********************************!*\
  !*** ./src/TS/BookInBasket.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBookInBasket: () => (/* binding */ addBookInBasket),\n/* harmony export */   deleteBookFromBasket: () => (/* binding */ deleteBookFromBasket),\n/* harmony export */   totalCountBooks: () => (/* binding */ totalCountBooks)\n/* harmony export */ });\n/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiRequests */ \"./src/TS/apiRequests.ts\");\n\nfunction addBookInBasket(btnObj) {\n    const bookCard = btnObj.parentNode.parentNode;\n    btnObj.classList.add('active-button');\n    const dataIndex = btnObj.getAttribute('data-index');\n    const bookAuthors = bookCard.querySelector('.book-card-info__author');\n    const bookTitle = bookCard.querySelector('.book-card-info__book-name');\n    const bookAverRating = bookCard.querySelectorAll('.star');\n    const bookRatingCount = bookCard.querySelector('.reviews');\n    const bookDescription = bookCard.querySelector('.book-card-info__description');\n    const bookImageLinks = bookCard.querySelector('.book-card__main-photo');\n    let book = {\n        dataIndex: dataIndex,\n        authors: bookAuthors.textContent,\n        title: bookTitle.textContent,\n        averageRating: bookAverRating,\n        ratingsCount: bookRatingCount,\n        description: bookDescription.textContent,\n        imageLinks: bookImageLinks\n    };\n    _apiRequests__WEBPACK_IMPORTED_MODULE_0__.books.push(book);\n    saveBooks();\n    console.log(localStorage);\n}\nfunction deleteBookFromBasket(btnObj) {\n    const dataIndex = btnObj.getAttribute('data-index');\n    const indexToDelete = _apiRequests__WEBPACK_IMPORTED_MODULE_0__.books.findIndex(book => book.dataIndex === dataIndex);\n    // Удаление книги из массива\n    if (indexToDelete > -1) {\n        _apiRequests__WEBPACK_IMPORTED_MODULE_0__.books.splice(indexToDelete, 1);\n        saveBooks();\n    }\n    // Удаление класса 'active-button'\n    btnObj.classList.remove('active-button');\n    console.log(localStorage);\n}\nfunction totalCountBooks() {\n    const containerCount = document.querySelector('.container-basket');\n    let totalCount = containerCount.querySelector('.active-basket');\n    let booksCount = _apiRequests__WEBPACK_IMPORTED_MODULE_0__.books.length;\n    if (booksCount >= 1) {\n        if (!totalCount) {\n            totalCount = document.createElement('span');\n            totalCount.classList.add('active-basket');\n            containerCount.appendChild(totalCount);\n        }\n        totalCount.textContent = booksCount.toString();\n    }\n    else if (totalCount) {\n        totalCount.remove();\n    }\n}\nfunction saveBooks() {\n    localStorage.setItem('books', JSON.stringify(_apiRequests__WEBPACK_IMPORTED_MODULE_0__.books));\n}\n\n\n//# sourceURL=webpack://book-store/./src/TS/BookInBasket.ts?");

/***/ }),

/***/ "./src/TS/apiRequests.ts":
/*!*******************************!*\
  !*** ./src/TS/apiRequests.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   books: () => (/* binding */ books),\n/* harmony export */   drawBookCard: () => (/* binding */ drawBookCard),\n/* harmony export */   startIndex: () => (/* binding */ startIndex),\n/* harmony export */   subject: () => (/* binding */ subject)\n/* harmony export */ });\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ \"./src/TS/interfaces.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BookInBasket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookInBasket */ \"./src/TS/BookInBasket.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/TS/utils.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst loadMoreBtn = document.querySelector('.load-more__btn');\nconst bookCard = document.querySelector('.book-cards');\nconst categoryList = document.querySelectorAll('.list__item');\nlet subject = '';\nlet startIndex = 0;\nlet books = [];\nloadBooks();\nfunction loadBooks() {\n    const storedBooks = localStorage.getItem('books');\n    if (storedBooks) {\n        books = JSON.parse(storedBooks);\n    }\n    drawBookCard();\n    (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.totalCountBooks)();\n    console.log(books);\n}\nloadMoreBtn.addEventListener('click', drawBookCard);\ncategoryList.forEach((category) => {\n    category.addEventListener('click', (event) => {\n        const categoryObj = event.target;\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clearActiveCategory)();\n        categoryObj.classList.add('list__item-active');\n        const activePoint = document.createElement('div');\n        activePoint.classList.add('active-point');\n        categoryObj.appendChild(activePoint);\n        subject = `subject:${categoryObj.textContent}`;\n        startIndex = 0;\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.cleanPastCategory)();\n        drawBookCard();\n        books = [];\n        localStorage.clear();\n        (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.totalCountBooks)();\n    });\n});\nfunction apiRequests() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const url = `https://www.googleapis.com/books/v1/volumes?q=\"${subject ? subject : 'subject:Architecture'}\"&key=AIzaSyCkmsYtqK_Z-5kvEdmYoDq372osdOunrLA&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;\n            const response = yield fetch(url);\n            if (!response.ok) {\n                throw new Error('Network response was not ok');\n            }\n            const data = yield response.json();\n            return data;\n        }\n        catch (error) {\n            console.error('Error fetching data: ', error);\n            throw error;\n        }\n    });\n}\nfunction drawBookCard() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = yield apiRequests();\n        const dataItems = data.items;\n        let out = '';\n        dataItems.forEach(function (item) {\n            var _a, _b, _c, _d, _e, _f, _g, _h, _j;\n            out += `<div class=\"book-card__universal\" data-index=\"${item.id}\">\r\n        <img class=\"book-card__main-photo\" \r\n        src=\"${((_b = (_a = item.volumeInfo) === null || _a === void 0 ? void 0 : _a.imageLinks) === null || _b === void 0 ? void 0 : _b.thumbnail)\n                ? item.volumeInfo.imageLinks.thumbnail\n                : '/src/images/universal-cover.png'}\" alt=\"book-cover\">\r\n        <div class=\"book-card-info\">\r\n        <p class=\"book-card-info__author\">\r\n        ${((_c = item.volumeInfo) === null || _c === void 0 ? void 0 : _c.authors) ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.authorsProcessing)((_d = item.volumeInfo) === null || _d === void 0 ? void 0 : _d.authors) : 'No authors available'}\r\n        </p>\r\n        <h3 class=\"book-card-info__book-name\">${((_e = item.volumeInfo) === null || _e === void 0 ? void 0 : _e.title)\n                ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.descriptionProcessing)(item.volumeInfo.title)\n                : 'No title'}</h3>\r\n        <div class=\"book-card-info__rating\"> \r\n        ${((_f = item.volumeInfo) === null || _f === void 0 ? void 0 : _f.averageRating)\n                ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.ratingProcessing)(item.volumeInfo.averageRating)\n                : '<span class=\"no-rating\">No rating</span>'}\r\n        <span class=\"reviews\">${((_g = item.volumeInfo) === null || _g === void 0 ? void 0 : _g.ratingsCount) ? item.volumeInfo.ratingsCount : 14} review</span></div>\r\n        <p class=\"book-card-info__description\">${((_h = item.volumeInfo) === null || _h === void 0 ? void 0 : _h.description)\n                ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.descriptionProcessing)(item.volumeInfo.description)\n                : 'No description available'}</p>\r\n        <span class=\"book-card-info__price\">${typeof ((_j = item.saleInfo) === null || _j === void 0 ? void 0 : _j.retailPrice) === 'number' ? item.saleInfo.retailPrice : '12.35$'}</span>\r\n        <button class=\"book-card-info__button\" data-index=\"${item.id}\">buy now</button>\r\n        </div>\r\n    </div>`;\n        });\n        bookCard.insertAdjacentHTML('beforeend', out);\n        startIndex += 7;\n    });\n}\ndocument.addEventListener('click', (event) => {\n    const btnObj = event.target;\n    if (btnObj.classList.contains('book-card-info__button')) {\n        if (btnObj.textContent === 'In the Cart') {\n            btnObj.innerText = 'buy now';\n            (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.deleteBookFromBasket)(btnObj);\n            (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.totalCountBooks)();\n        }\n        else {\n            btnObj.innerText = 'In the Cart';\n            (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.addBookInBasket)(btnObj);\n            (0,_BookInBasket__WEBPACK_IMPORTED_MODULE_1__.totalCountBooks)();\n        }\n    }\n});\n\n\n//# sourceURL=webpack://book-store/./src/TS/apiRequests.ts?");

/***/ }),

/***/ "./src/TS/index.ts":
/*!*************************!*\
  !*** ./src/TS/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.sass */ \"./src/styles/styles.sass\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/TS/slider.ts\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiRequests */ \"./src/TS/apiRequests.ts\");\n\n\n\n\n\n//# sourceURL=webpack://book-store/./src/TS/index.ts?");

/***/ }),

/***/ "./src/TS/interfaces.ts":
/*!******************************!*\
  !*** ./src/TS/interfaces.ts ***!
  \******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://book-store/./src/TS/interfaces.ts?");

/***/ }),

/***/ "./src/TS/slider.ts":
/*!**************************!*\
  !*** ./src/TS/slider.ts ***!
  \**************************/
/***/ (() => {

eval("const dots = document.querySelectorAll('.slider-dots');\nconst dot01 = document.querySelector('.slider-dots__dot-1');\nconst dot02 = document.querySelector('.slider-dots__dot-2');\nconst dot03 = document.querySelector('.slider-dots__dot-3');\nconst banner = document.getElementById('banner');\nconst bannerSrcOne = '/src/images/banner-01.png';\nconst bannerSrcTwo = '/src/images/banner-02.svg';\nconst bannerSrcThree = '/src/images/banner-03.svg';\nlet activeSlideIndex = 1;\ndots.forEach((dot) => {\n    dot.addEventListener('click', (event) => {\n        const dotObj = event.target;\n        if (dotObj.classList.contains('slider-dots__dot-1')) {\n            banner.src = bannerSrcOne;\n            clearActiveEllipse();\n            activeSlideIndex = 1;\n            dotObj.classList.add('active-dot');\n        }\n        if (dotObj.classList.contains('slider-dots__dot-2')) {\n            banner.src = bannerSrcTwo;\n            clearActiveEllipse();\n            activeSlideIndex = 2;\n            dotObj.classList.add('active-dot');\n        }\n        if (dotObj.classList.contains('slider-dots__dot-3')) {\n            banner.src = bannerSrcThree;\n            clearActiveEllipse();\n            activeSlideIndex = 3;\n            dotObj.classList.add('active-dot');\n        }\n    });\n});\nfunction autoSwitchSlide() {\n    if (activeSlideIndex === 1) {\n        banner.src = bannerSrcTwo;\n        clearActiveEllipse();\n        dot02.classList.add('active-dot');\n        activeSlideIndex = 2;\n    }\n    else if (activeSlideIndex === 2) {\n        banner.src = bannerSrcThree;\n        clearActiveEllipse();\n        dot03.classList.add('active-dot');\n        activeSlideIndex = 3;\n    }\n    else if (activeSlideIndex === 3) {\n        banner.src = bannerSrcOne;\n        clearActiveEllipse();\n        dot01.classList.add('active-dot');\n        activeSlideIndex = 1;\n    }\n}\nsetInterval(autoSwitchSlide, 5000);\nfunction clearActiveEllipse() {\n    dot01.classList.remove('active-dot');\n    dot02.classList.remove('active-dot');\n    dot03.classList.remove('active-dot');\n}\n;\n\n\n//# sourceURL=webpack://book-store/./src/TS/slider.ts?");

/***/ }),

/***/ "./src/TS/utils.ts":
/*!*************************!*\
  !*** ./src/TS/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authorsProcessing: () => (/* binding */ authorsProcessing),\n/* harmony export */   cleanPastCategory: () => (/* binding */ cleanPastCategory),\n/* harmony export */   clearActiveCategory: () => (/* binding */ clearActiveCategory),\n/* harmony export */   descriptionProcessing: () => (/* binding */ descriptionProcessing),\n/* harmony export */   ratingProcessing: () => (/* binding */ ratingProcessing)\n/* harmony export */ });\nfunction descriptionProcessing(description) {\n    let outDescription = '';\n    if (description.length > 85) {\n        outDescription += description.slice(0, 86);\n    }\n    if (description.length < 85) {\n        return description;\n    }\n    return `${outDescription}...`;\n}\nfunction authorsProcessing(authors) {\n    let totalAuthors = `${authors[0]}`;\n    if (authors.length > 1) {\n        authors.forEach((author) => {\n            totalAuthors += `, ${author}`;\n        });\n        return descriptionProcessing(totalAuthors);\n    }\n    else {\n        return authors[0];\n    }\n}\nfunction ratingProcessing(ratingCount) {\n    const starColor = '<img class=\"star\" src=\"/src/images/Star-color.svg\" alt=\"star-color\">';\n    const star = '<img class=\"star\" src=\"/src/images/Star.svg\" alt=\"star\">';\n    let finalStars = '';\n    for (let i = 0; i < 5; i++) {\n        if (i < ratingCount) {\n            finalStars += starColor;\n        }\n        else {\n            finalStars += star;\n        }\n    }\n    return finalStars;\n}\nfunction cleanPastCategory() {\n    const booksPastCategory = document.querySelectorAll('.book-card__universal');\n    booksPastCategory.forEach((book) => {\n        book.remove();\n    });\n}\nfunction clearActiveCategory() {\n    document.querySelector('.list__item.list__item-active').classList.remove('list__item-active');\n    document.querySelector('.active-point').remove();\n}\n\n\n//# sourceURL=webpack://book-store/./src/TS/utils.ts?");

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
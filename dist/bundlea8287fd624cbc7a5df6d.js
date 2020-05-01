/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/config.js":
/*!******************************!*\
  !*** ./src/script/config.js ***!
  \******************************/
/*! exports provided: imgPreloadConfig, provinceConfig, pageArrowConfig, ajaxConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imgPreloadConfig\", function() { return imgPreloadConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"provinceConfig\", function() { return provinceConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageArrowConfig\", function() { return pageArrowConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajaxConfig\", function() { return ajaxConfig; });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/script/utils.js\");\n\r\n\r\nconst imgPreloadConfig = ['img/bc.jpg', 'img/mn.jpg', 'img/nb.jpg', 'img/nl.jpg', 'img/ns.jpg', 'img/on.jpg', 'img/pe.jpg', 'img/qc.jpg', 'img/sk.jpg'];\r\n\r\nconst provinceConfig = [{\r\n    name: 'Alberta',\r\n    cellRotateDeg: [0],\r\n    jsonIndex: 9,\r\n    img: 'img-ab'\r\n}, {\r\n    name: 'British Columbia',\r\n    cellRotateDeg: [36, -324],\r\n    jsonIndex: 10,\r\n    img: 'img-bc'\r\n}, {\r\n    name: 'Manitoba',\r\n    cellRotateDeg: [72, -288],\r\n    jsonIndex: 12,\r\n    img: 'img-mn'\r\n}, {\r\n    name: 'New Brunswick',\r\n    cellRotateDeg: [108, -252],\r\n    jsonIndex: 13,\r\n    img: 'img-nb'\r\n}, {\r\n    name: 'Newfoundland And Labrador',\r\n    cellRotateDeg: [144, -216],\r\n    jsonIndex: 14,\r\n    img: 'img-nl'\r\n}, {\r\n    name: 'Nova Scotia',\r\n    cellRotateDeg: [180, -180],\r\n    jsonIndex: 15,\r\n    img: 'img-ns'\r\n}, {\r\n    name: 'Ontario',\r\n    cellRotateDeg: [216, -144],\r\n    jsonIndex: 16,\r\n    img: 'img-on'\r\n}, {\r\n    name: 'Prince Edward Island',\r\n    cellRotateDeg: [252, -108],\r\n    jsonIndex: 17,\r\n    img: 'img-pe'\r\n}, {\r\n    name: 'Quebec',\r\n    cellRotateDeg: [288, -72],\r\n    jsonIndex: 18,\r\n    img: 'img-qc'\r\n}, {\r\n    name: 'Saskatchewan',\r\n    cellRotateDeg: [324, -36],\r\n    jsonIndex: 19,\r\n    img: 'img-sk'\r\n}];\r\n\r\nconst pageArrowConfig = [{\r\n    page: 1,\r\n    arrowClicked: 'arrow-bot',\r\n    arrowHandled: 'arrow-top',\r\n    method: 'show'\r\n}, {\r\n    page: 2,\r\n    arrowClicked: 'arrow-top',\r\n    arrowHandled: 'arrow-top',\r\n    method: 'hide'\r\n}, {\r\n    page: 3,\r\n    arrowClicked: 'arrow-bot',\r\n    arrowHandled: 'arrow-bot',\r\n    method: 'hide'\r\n}, {\r\n    page: 4,\r\n    arrowClicked: 'arrow-top',\r\n    arrowHandled: 'arrow-bot',\r\n    method: 'show'\r\n}];\r\n\r\nconst ajaxConfig = {\r\n    'national': {\r\n        method: 'GET',\r\n        url: 'data.json',\r\n        async: true,\r\n        fn(responseText) {\r\n            const population = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"getJSONPopulation\"])(responseText, 'national');\r\n            const result = population[11] || 'Select a date';\r\n            _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"btnNational\"].textContent = result;\r\n        }\r\n    },\r\n    'provincial': {\r\n        method: 'GET',\r\n        url: 'data.json',\r\n        async: true,\r\n        fn(responseText) {\r\n            const population = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"getJSONPopulation\"])(responseText, 'provincial');\r\n            const getResult = () => {\r\n                const index = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"getProvinceJSONIndex\"])(provinceConfig);\r\n                const populationData = population[index] || 'Select a date';\r\n                return populationData;\r\n            };\r\n            const result = getResult();\r\n            _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"btnProvincial\"].textContent = result;\r\n        }\r\n    }\r\n};\n\n//# sourceURL=webpack:///./src/script/config.js?");

/***/ }),

/***/ "./src/script/events.js":
/*!******************************!*\
  !*** ./src/script/events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers.js */ \"./src/script/handlers.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/script/utils.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ \"./src/script/config.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\r\n    target: window,\r\n    events: [{\r\n        name: 'load',\r\n        handlers: [Object(_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"preloadImg\"])(..._config_js__WEBPACK_IMPORTED_MODULE_2__[\"imgPreloadConfig\"]), _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"setSectionHeight\"]]\r\n    }, {\r\n        name: 'beforeunload',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"goTop\"]]\r\n    }, {\r\n        name: 'scroll',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"scrollEnd\"], _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"preventDefault\"]]\r\n    }, {\r\n        name: 'touchmove',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"preventDefault\"]]\r\n    }, {\r\n        name: 'orientationchange',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"goTop\"]]\r\n    }, {\r\n        name: 'resize',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"restorePage\"], _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"setSectionHeight\"]]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"carousel\"],\r\n    events: [{\r\n        name: 'wheel',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"scrollCell\"], _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"msCellDisplayBugFix\"], _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"wheelEnd\"]]\r\n    }, {\r\n        name: 'touchstart',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"scrollCellMobile\"].setTouchStart]\r\n    }, {\r\n        name: 'touchmove',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"touchmoveMobile\"]]\r\n    }, {\r\n        name: 'touchend',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"wheelEnd\"]]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"btnArrow\"],\r\n    events: [{\r\n        name: 'click',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"scrollPage\"], _handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"position\"].toggleArrow]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"btnNational\"],\r\n    events: [{\r\n        name: 'click',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"showResultNational\"]]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"btnProvincial\"],\r\n    events: [{\r\n        name: 'click',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"showResultProvincial\"]]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"datePicker\"][0],\r\n    events: [{\r\n        name: 'focus',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"safariRestorePage\"]]\r\n    }, {\r\n        name: 'blur',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"safariRestorePage\"]]\r\n    }]\r\n}, {\r\n    target: _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"datePicker\"][1],\r\n    events: [{\r\n        name: 'focus',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"safariRestorePage\"]]\r\n    }, {\r\n        name: 'blur',\r\n        handlers: [_handlers_js__WEBPACK_IMPORTED_MODULE_0__[\"safariRestorePage\"]]\r\n    }]\r\n}]);\n\n//# sourceURL=webpack:///./src/script/events.js?");

/***/ }),

/***/ "./src/script/handlers.js":
/*!********************************!*\
  !*** ./src/script/handlers.js ***!
  \********************************/
/*! exports provided: preloadImg, setSectionHeight, goTop, scrollCell, scrollCellMobile, showResultNational, showResultProvincial, scrollPage, scrollEnd, touchmoveMobile, position, restorePage, safariRestorePage, msCellDisplayBugFix, wheelEnd, preventDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preloadImg\", function() { return preloadImg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSectionHeight\", function() { return setSectionHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"goTop\", function() { return goTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollCell\", function() { return scrollCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollCellMobile\", function() { return scrollCellMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showResultNational\", function() { return showResultNational; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showResultProvincial\", function() { return showResultProvincial; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollPage\", function() { return scrollPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollEnd\", function() { return scrollEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"touchmoveMobile\", function() { return touchmoveMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"position\", function() { return position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restorePage\", function() { return restorePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safariRestorePage\", function() { return safariRestorePage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"msCellDisplayBugFix\", function() { return msCellDisplayBugFix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wheelEnd\", function() { return wheelEnd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preventDefault\", function() { return preventDefault; });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/script/config.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/script/utils.js\");\n// e.deltaY ios\r\n// find() includes() ie\r\n// scrollBy options ie edge79-\r\n// scrollBy ie 11-\r\n// classList remove add ie10-\r\n// setProperty ie9-\r\n// hover: none pointer: coarse ios9-\r\n\r\n\r\n\r\n\r\nconst preloadImg = (...urls) => {\r\n    const toolDiv = document.createElement('div');\r\n    toolDiv.className = 'd-none';\r\n    toolDiv.setAttribute('title', '<div> for async img preload as rel=preload && data attribute not working well');\r\n\r\n    const load = url => {\r\n        return new Promise(res => {\r\n            const img = new Image();\r\n            img.src = url;\r\n            img.onload = () => res(img);\r\n        });\r\n    };\r\n    const getImgs = imgs => {\r\n        const promises = imgs.map(async url => {\r\n            const img = await load(url);\r\n            toolDiv.appendChild(img);\r\n        });\r\n        return Promise.all(promises);\r\n    }\r\n    getImgs(urls).then(() => {\r\n        document.body.appendChild(toolDiv);\r\n    });\r\n};\r\n\r\nconst setSectionHeight = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(() => {\r\n    const match = mq => matchMedia(mq).matches;\r\n    const chrome = (/Chrome.*Mobile/).test(navigator.userAgent);\r\n    const mobile = match(\"(hover: none)\") || match(\"(pointer: coarse)\") || chrome;\r\n    if (mobile) {\r\n        const vh = window.innerHeight / 100;\r\n        document.documentElement.style.setProperty('--vh', `${vh}px`);\r\n    } else {\r\n        document.documentElement.removeAttribute('style');\r\n    }\r\n}, 66);\r\n\r\nconst goTop = () => {\r\n    window.scrollTo(0, 0);\r\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleArrows\"])('arrow-top', 'hide');\r\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleArrows\"])('arrow-bot', 'show');\r\n};\r\n\r\nconst scrollCell = e => {\r\n    const dY = e.deltaY;\r\n    const deg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRotateDeg\"])();\r\n    const newDeg = dY < 0 ? deg - 36 : deg + 36;\r\n\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"carousel\"].style.transform = `rotateX(${newDeg}deg)`;\r\n};\r\n\r\nconst scrollCellMobile = (() => {\r\n    let touchStart;\r\n    const setTouchStart = e => {\r\n        touchStart = e.changedTouches[0];\r\n    };\r\n    const getTouchEnd = e => {\r\n        const deg = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRotateDeg\"])();\r\n        const touchEnd = e.changedTouches[0];\r\n        const newDeg = touchEnd.pageY > touchStart.pageY ? deg - 36 : deg + 36;\r\n\r\n        _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"carousel\"].style.transform = `rotateX(${newDeg}deg)`;\r\n    };\r\n    return { setTouchStart, getTouchEnd };\r\n})();\r\n\r\nconst showResultNational = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ajax\"].bind(null, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"ajaxConfig\"].national);\r\n\r\nconst showResultProvincial = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"ajax\"].bind(null, _config_js__WEBPACK_IMPORTED_MODULE_0__[\"ajaxConfig\"].provincial);\r\n\r\nconst scrollPage = e => {\r\n    const direction = e.target === _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"btnArrow\"].firstElementChild ? '-' : '+';\r\n    const innerHeight = window.innerHeight;\r\n    const ua = navigator.userAgent;\r\n    const isMFirefox = (/Android/).test(ua) && (/Firefox/).test(ua);\r\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"scrollBehavior\"] && !isMFirefox) {\r\n        window.scrollBy({\r\n            top: +`${direction}${innerHeight}`,\r\n            behavior: 'smooth'\r\n        });\r\n    } else {\r\n        window.scrollBy(0, +`${direction}${innerHeight}`);\r\n    }\r\n    e.currentTarget.removeEventListener('click', scrollPage);\r\n};\r\n\r\nconst scrollEnd = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(() => {\r\n    position.updatePageNum();\r\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"btnArrow\"].addEventListener('click', scrollPage);\r\n}, 66);\r\n\r\nconst touchmoveMobile = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(scrollCellMobile.getTouchEnd, 66);\r\n\r\nconst position = (() => {\r\n    let pageNum = 0;\r\n    const updatePageNum = () => {\r\n        pageNum = Math.round(window.pageYOffset / window.innerHeight);\r\n    };\r\n    const restorePage = () => {\r\n        const scrollY = pageNum * window.innerHeight;\r\n        window.scrollTo(0, scrollY);\r\n    };\r\n    const toggleArrow = e => {\r\n        const arrow = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"pageArrowConfig\"][pageNum];\r\n        const currentPage = pageNum in _config_js__WEBPACK_IMPORTED_MODULE_0__[\"pageArrowConfig\"];\r\n        const isClicked = e.target === document.getElementsByClassName(arrow.arrowClicked)[0];\r\n\r\n        if (currentPage && isClicked) Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"toggleArrows\"])(arrow.arrowHandled, arrow.method);\r\n    };\r\n    return { updatePageNum, restorePage, toggleArrow };\r\n})();\r\n\r\nconst restorePage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(position.restorePage, 66);\r\n\r\nconst safariRestorePage = () => {\r\n    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"isSafari\"])()) restorePage();\r\n};\r\n\r\nconst msCellDisplayBugFix = (setOverflowX = true) => {\r\n    const ms = (/Edge/).test(navigator.userAgent);\r\n    if (ms && setOverflowX) {\r\n        document.body.style.overflowX = 'visible';\r\n        return;\r\n    }\r\n    document.body.removeAttribute('style');\r\n};\r\n\r\nconst wheelEnd = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"debounce\"])(() => {\r\n    Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"changeImg\"])(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"provinceConfig\"]);\r\n    msCellDisplayBugFix(false);\r\n}, 500);\r\n\r\nconst preventDefault = e => {\r\n    e.preventDefault();\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/script/handlers.js?");

/***/ }),

/***/ "./src/script/main.js":
/*!****************************!*\
  !*** ./src/script/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/script/utils.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ \"./src/script/events.js\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.css */ \"./src/style/main.css\");\n/* harmony import */ var _style_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n_events_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach(currentTarget => {\r\n    currentTarget.events.forEach(e => {\r\n        e.handlers.forEach(handler => {\r\n            Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"on\"])(currentTarget.target, e.name, handler);\r\n        });\r\n    });\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/script/main.js?");

/***/ }),

/***/ "./src/script/utils.js":
/*!*****************************!*\
  !*** ./src/script/utils.js ***!
  \*****************************/
/*! exports provided: carousel, btnNational, btnProvincial, btnArrow, datePicker, on, ajax, debounce, isSafari, scrollBehavior, getRotateDeg, toggleArrows, getProvinceJSONIndex, getJSONPopulation, changeImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carousel\", function() { return carousel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnNational\", function() { return btnNational; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnProvincial\", function() { return btnProvincial; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btnArrow\", function() { return btnArrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"datePicker\", function() { return datePicker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"on\", function() { return on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ajax\", function() { return ajax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSafari\", function() { return isSafari; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollBehavior\", function() { return scrollBehavior; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRotateDeg\", function() { return getRotateDeg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleArrows\", function() { return toggleArrows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProvinceJSONIndex\", function() { return getProvinceJSONIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getJSONPopulation\", function() { return getJSONPopulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeImg\", function() { return changeImg; });\nconst carousel = document.getElementsByClassName('carousel')[0];\r\nconst btnNational = document.querySelector('#national .btn-txt');\r\nconst btnProvincial = document.querySelector('#provincial .btn-txt');\r\nconst btnArrow = document.getElementById('arrows');\r\nconst datePicker = document.getElementsByClassName('date');\r\n\r\nconst on = function (currentTarget, type, handler) {\r\n    currentTarget.addEventListener(type, handler);\r\n};\r\n\r\nconst ajax = option => {\r\n    return new Promise(res => {\r\n        const xhr = new XMLHttpRequest() || new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n        xhr.open(option.method, option.url, option.async);\r\n        xhr.send();\r\n        xhr.onload = function () {\r\n            res(this.responseText);\r\n        };\r\n    }).then(option.fn);\r\n};\r\n\r\nconst debounce = (fn, delay, immediate) => {\r\n    let timer;\r\n    return function () {\r\n        const that = this;\r\n        const args = arguments;\r\n\r\n        clearTimeout(timer);\r\n\r\n        if (immediate && !timer) fn.apply(that, args);\r\n\r\n        timer = setTimeout(() => {\r\n            timer = null;\r\n            fn.apply(that, args);\r\n        }, delay);\r\n    };\r\n};\r\n\r\nconst isSafari = () => {\r\n    const ua = navigator.userAgent;\r\n    const safari = (/Mac|iPhone|iPad/).test(ua);\r\n    return safari;\r\n};\r\n\r\nconst scrollBehavior = 'scrollBehavior' in document.documentElement.style;\r\n\r\nconst getRotateDeg = () => {\r\n    const rotate = carousel.style.transform || '0';\r\n    const deg = +rotate.match(/-*\\d+/)[0];\r\n    return deg;\r\n};\r\n\r\nconst toggleArrows = (arrows, method) => {\r\n    const arrow = document.getElementsByClassName(arrows)[0].classList;\r\n    if (method === 'hide') {\r\n        arrow.add('d-none');\r\n    }\r\n    if (method === 'show') {\r\n        arrow.remove('d-none');\r\n    }\r\n};\r\n\r\nconst getProvinceByIndex = provinces => {\r\n    const deg = getRotateDeg() % 360;\r\n    const index = (() => {\r\n        for (let province of provinces) {\r\n            if (province.cellRotateDeg.includes(deg)) {\r\n                return provinces.indexOf(province);\r\n            }\r\n        }\r\n    })();\r\n    return provinces[index];\r\n};\r\nconst getProvinceJSONIndex = provinceConfig => getProvinceByIndex(provinceConfig).jsonIndex;\r\n\r\nconst getJSONPopulation = (responseText, section) => {\r\n    const getValidDate = i => {\r\n        const date = datePicker[i].value;\r\n        const year = date.match(/^\\d{4}-/);\r\n        const monthNDay = date.match(/\\d{2}-\\d{2}$/);\r\n        const validDate =\r\n            monthNDay >= '10-01' ? '10-01' :\r\n                monthNDay >= '07-01' ? '07-01' :\r\n                    monthNDay >= '04-01' ? '04-01' :\r\n                        '01-01';\r\n        return year + validDate;\r\n    };\r\n\r\n    const sectionList = ['national', 'provincial'];\r\n    const data = JSON.parse(responseText).data;\r\n    const id = sectionList.indexOf(section);\r\n    const date = getValidDate(id);\r\n    const population = data.find(i => i[8].includes(date)) || '';\r\n    return population;\r\n};\r\n\r\nconst changeImg = provinceImgs => {\r\n    const getProvinceImg = () => getProvinceByIndex(provinceImgs).img;\r\n    const img = getProvinceImg();\r\n    const aside = document.getElementById('province-img');\r\n\r\n    aside.className = `img ${img}`;\r\n};\n\n//# sourceURL=webpack:///./src/script/utils.js?");

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style/main.css?");

/***/ })

/******/ });
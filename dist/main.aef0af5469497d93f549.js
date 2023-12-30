/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/icons/cloud-rain.svg":
/*!*************************************!*\
  !*** ./assets/icons/cloud-rain.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/af179e4434960a44c19b.svg";

/***/ }),

/***/ "./assets/icons/cloud-snow.svg":
/*!*************************************!*\
  !*** ./assets/icons/cloud-snow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/04d1a3c9be7dee21bc55.svg";

/***/ }),

/***/ "./assets/icons/pause.svg":
/*!********************************!*\
  !*** ./assets/icons/pause.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/deec60fb06362588e4eb.svg";

/***/ }),

/***/ "./assets/icons/sun.svg":
/*!******************************!*\
  !*** ./assets/icons/sun.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ed5b7b0f0e5100107cd9.svg";

/***/ }),

/***/ "./assets/rainy-bg.jpg":
/*!*****************************!*\
  !*** ./assets/rainy-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1672d521b7666cc32eb6.jpg";

/***/ }),

/***/ "./assets/sounds/rain.mp3":
/*!********************************!*\
  !*** ./assets/sounds/rain.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b7ee8a84e7ecf1112c27.mp3";

/***/ }),

/***/ "./assets/sounds/summer.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/summer.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ba837e3ecc073286cbc4.mp3";

/***/ }),

/***/ "./assets/sounds/winter.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/winter.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/24f5c09b90641ef35477.mp3";

/***/ }),

/***/ "./assets/summer-bg.jpg":
/*!******************************!*\
  !*** ./assets/summer-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2230c1de657eb63bd969.jpg";

/***/ }),

/***/ "./assets/winter-bg.jpg":
/*!******************************!*\
  !*** ./assets/winter-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d4a503e0077fa690f494.jpg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");
/* harmony import */ var _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/summer-bg.jpg */ "./assets/summer-bg.jpg");
/* harmony import */ var _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/rainy-bg.jpg */ "./assets/rainy-bg.jpg");
/* harmony import */ var _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/winter-bg.jpg */ "./assets/winter-bg.jpg");
/* harmony import */ var _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/sun.svg */ "./assets/icons/sun.svg");
/* harmony import */ var _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/cloud-rain.svg */ "./assets/icons/cloud-rain.svg");
/* harmony import */ var _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/cloud-snow.svg */ "./assets/icons/cloud-snow.svg");
/* harmony import */ var _assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/pause.svg */ "./assets/icons/pause.svg");
/* harmony import */ var _assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sounds/summer.mp3 */ "./assets/sounds/summer.mp3");
/* harmony import */ var _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/sounds/rain.mp3 */ "./assets/sounds/rain.mp3");
/* harmony import */ var _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/sounds/winter.mp3 */ "./assets/sounds/winter.mp3");












const img = new Image()
img.src = _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__
img.src = _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__
img.src = _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__
img.src = _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__
img.src = _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__
img.src = _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__
img.src = _assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__

const sunAudio = new Audio(_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__)
const rainAudio = new Audio(_assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__)
const snowAudio = new Audio(_assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__)

const volumeSlider = document.getElementById('volume')

const sunButton = document.getElementById('sun-button')
const rainButton = document.getElementById('rain-button')
const snowButton = document.getElementById('snow-button')

const sunIcon = document.getElementById('sun')
const rainIcon = document.getElementById('rain')
const snowIcon = document.getElementById('snow')

const body = document.body

const changeBackground = (button, image) => {
  sunButton.classList.remove('active')
  rainButton.classList.remove('active')
  snowButton.classList.remove('active')
  button.classList.add('active')
  body.style.backgroundImage = `url(${image})`
}

let index = 0

const toggleCurrentIconOrPauseIcon = (el, arrTwoImages) => {
  index = (index + 1) % arrTwoImages.length
  el.style.backgroundImage = arrTwoImages[index]
}

sunButton.addEventListener('click', () => {
  rainIcon.style.backgroundImage = `url(${_assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__})`
  snowIcon.style.backgroundImage = `url(${_assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__})`

  toggleCurrentIconOrPauseIcon(sunIcon, [
    `url(${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__})`,
    `url(${_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__})`,
  ])

  changeBackground(sunButton, _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__)
  playOrPauseAudio(sunAudio)
})

rainButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = `url(${_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__})`
  snowIcon.style.backgroundImage = `url(${_assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__})`

  toggleCurrentIconOrPauseIcon(rainIcon, [
    `url(${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__})`,
    `url(${_assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__})`,
  ])

  changeBackground(rainButton, _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__)
  playOrPauseAudio(rainAudio)
})

snowButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = `url(${_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__})`
  rainIcon.style.backgroundImage = `url(${_assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__})`

  toggleCurrentIconOrPauseIcon(snowIcon, [
    `url(${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__})`,
    `url(${_assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__})`,
  ])

  changeBackground(snowButton, _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__)
  playOrPauseAudio(snowAudio)
})

const allAudio = [sunAudio, rainAudio, snowAudio]

const stopAllAudio = () => allAudio.forEach((audio) => audio.pause())

const setVolumeAllAudio = (value) =>
  allAudio.forEach((audio) => (audio.volume = value))

const playOrPauseAudio = (audio) => {
  if (audio.paused) {
    stopAllAudio()
    audio.play()
  } else {
    audio.pause()
  }
}

volumeSlider.addEventListener('input', () =>
  setVolumeAllAudio(volumeSlider.value)
)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZWYwYWY1NDY5NDk3ZDkzZjU0OS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDd0I7QUFDRjtBQUNFO0FBQ0U7QUFDUTtBQUNBO0FBQ0o7QUFDQztBQUNEO0FBQ0U7QUFDckQ7QUFDQTtBQUNBLFVBQVUsa0RBQVE7QUFDbEIsVUFBVSxpREFBTztBQUNqQixVQUFVLGtEQUFRO0FBQ2xCLFVBQVUsa0RBQVU7QUFDcEIsVUFBVSx5REFBVztBQUNyQixVQUFVLHlEQUFXO0FBQ3JCLFVBQVUsb0RBQVk7QUFDdEI7QUFDQSwyQkFBMkIsc0RBQVc7QUFDdEMsNEJBQTRCLG9EQUFZO0FBQ3hDLDRCQUE0Qix1REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx5REFBVyxDQUFDO0FBQ3RELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyxrREFBVSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVE7QUFDdEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxrREFBVSxDQUFDO0FBQ3BELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyx5REFBVyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSwrQkFBK0IsaURBQU87QUFDdEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxrREFBVSxDQUFDO0FBQ3BELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyx5REFBVyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQVE7QUFDdkM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguc2Nzcz9hYjJmIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcbmltcG9ydCBzdW1tZXJCZyBmcm9tICcuL2Fzc2V0cy9zdW1tZXItYmcuanBnJ1xyXG5pbXBvcnQgcmFpbnlCZyBmcm9tICcuL2Fzc2V0cy9yYWlueS1iZy5qcGcnXHJcbmltcG9ydCB3aW50ZXJCZyBmcm9tICcuL2Fzc2V0cy93aW50ZXItYmcuanBnJ1xyXG5pbXBvcnQgdXJsU3VuSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9zdW4uc3ZnJ1xyXG5pbXBvcnQgdXJsUmFpbkljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvY2xvdWQtcmFpbi5zdmcnXHJcbmltcG9ydCB1cmxTbm93SWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9jbG91ZC1zbm93LnN2ZydcclxuaW1wb3J0IHVybFBhdXNlSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmcnXHJcbmltcG9ydCB1cmxTdW5BdWRpbyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvc3VtbWVyLm1wMydcclxuaW1wb3J0IHVybFJhaW5BdWRpbyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDMnXHJcbmltcG9ydCB1cmxTbm93QXVkaW8gZnJvbSAnLi9hc3NldHMvc291bmRzL3dpbnRlci5tcDMnXHJcblxyXG5jb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG5pbWcuc3JjID0gc3VtbWVyQmdcclxuaW1nLnNyYyA9IHJhaW55QmdcclxuaW1nLnNyYyA9IHdpbnRlckJnXHJcbmltZy5zcmMgPSB1cmxTdW5JY29uXHJcbmltZy5zcmMgPSB1cmxSYWluSWNvblxyXG5pbWcuc3JjID0gdXJsU25vd0ljb25cclxuaW1nLnNyYyA9IHVybFBhdXNlSWNvblxyXG5cclxuY29uc3Qgc3VuQXVkaW8gPSBuZXcgQXVkaW8odXJsU3VuQXVkaW8pXHJcbmNvbnN0IHJhaW5BdWRpbyA9IG5ldyBBdWRpbyh1cmxSYWluQXVkaW8pXHJcbmNvbnN0IHNub3dBdWRpbyA9IG5ldyBBdWRpbyh1cmxTbm93QXVkaW8pXHJcblxyXG5jb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJylcclxuXHJcbmNvbnN0IHN1bkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW4tYnV0dG9uJylcclxuY29uc3QgcmFpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluLWJ1dHRvbicpXHJcbmNvbnN0IHNub3dCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vdy1idXR0b24nKVxyXG5cclxuY29uc3Qgc3VuSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW4nKVxyXG5jb25zdCByYWluSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluJylcclxuY29uc3Qgc25vd0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vdycpXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9IChidXR0b24sIGltYWdlKSA9PiB7XHJcbiAgc3VuQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgcmFpbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIHNub3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYFxyXG59XHJcblxyXG5sZXQgaW5kZXggPSAwXHJcblxyXG5jb25zdCB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uID0gKGVsLCBhcnJUd29JbWFnZXMpID0+IHtcclxuICBpbmRleCA9IChpbmRleCArIDEpICUgYXJyVHdvSW1hZ2VzLmxlbmd0aFxyXG4gIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFyclR3b0ltYWdlc1tpbmRleF1cclxufVxyXG5cclxuc3VuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJhaW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxSYWluSWNvbn0pYFxyXG4gIHNub3dJY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxTbm93SWNvbn0pYFxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHN1bkljb24sIFtcclxuICAgIGB1cmwoJHt1cmxQYXVzZUljb259KWAsXHJcbiAgICBgdXJsKCR7dXJsU3VuSWNvbn0pYCxcclxuICBdKVxyXG5cclxuICBjaGFuZ2VCYWNrZ3JvdW5kKHN1bkJ1dHRvbiwgc3VtbWVyQmcpXHJcbiAgcGxheU9yUGF1c2VBdWRpbyhzdW5BdWRpbylcclxufSlcclxuXHJcbnJhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc3VuSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsU3VuSWNvbn0pYFxyXG4gIHNub3dJY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxTbm93SWNvbn0pYFxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHJhaW5JY29uLCBbXHJcbiAgICBgdXJsKCR7dXJsUGF1c2VJY29ufSlgLFxyXG4gICAgYHVybCgke3VybFJhaW5JY29ufSlgLFxyXG4gIF0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQocmFpbkJ1dHRvbiwgcmFpbnlCZylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHJhaW5BdWRpbylcclxufSlcclxuXHJcbnNub3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc3VuSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsU3VuSWNvbn0pYFxyXG4gIHJhaW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxSYWluSWNvbn0pYFxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHNub3dJY29uLCBbXHJcbiAgICBgdXJsKCR7dXJsUGF1c2VJY29ufSlgLFxyXG4gICAgYHVybCgke3VybFNub3dJY29ufSlgLFxyXG4gIF0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQoc25vd0J1dHRvbiwgd2ludGVyQmcpXHJcbiAgcGxheU9yUGF1c2VBdWRpbyhzbm93QXVkaW8pXHJcbn0pXHJcblxyXG5jb25zdCBhbGxBdWRpbyA9IFtzdW5BdWRpbywgcmFpbkF1ZGlvLCBzbm93QXVkaW9dXHJcblxyXG5jb25zdCBzdG9wQWxsQXVkaW8gPSAoKSA9PiBhbGxBdWRpby5mb3JFYWNoKChhdWRpbykgPT4gYXVkaW8ucGF1c2UoKSlcclxuXHJcbmNvbnN0IHNldFZvbHVtZUFsbEF1ZGlvID0gKHZhbHVlKSA9PlxyXG4gIGFsbEF1ZGlvLmZvckVhY2goKGF1ZGlvKSA9PiAoYXVkaW8udm9sdW1lID0gdmFsdWUpKVxyXG5cclxuY29uc3QgcGxheU9yUGF1c2VBdWRpbyA9IChhdWRpbykgPT4ge1xyXG4gIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgIHN0b3BBbGxBdWRpbygpXHJcbiAgICBhdWRpby5wbGF5KClcclxuICB9IGVsc2Uge1xyXG4gICAgYXVkaW8ucGF1c2UoKVxyXG4gIH1cclxufVxyXG5cclxudm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT5cclxuICBzZXRWb2x1bWVBbGxBdWRpbyh2b2x1bWVTbGlkZXIudmFsdWUpXHJcbilcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
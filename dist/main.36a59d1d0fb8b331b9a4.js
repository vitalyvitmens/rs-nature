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

// const mp3 = new Audio()
// mp3.src = sunAudio
// mp3.src = rainAudio
// mp3.src = snowAudio

const sunAudio = new Audio(`url(${_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__})`)
const rainAudio = new Audio(`url(${_assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__})`)
const snowAudio = new Audio(`url(${_assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__})`)

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
  playOrPauseAudio(`url(${sunAudio})`)
})

rainButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = `url(${_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__})`
  snowIcon.style.backgroundImage = `url(${_assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__})`

  toggleCurrentIconOrPauseIcon(rainIcon, [
    `url(${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__})`,
    `url(${_assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__})`,
  ])

  changeBackground(rainButton, _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__)
  playOrPauseAudio(`url(${rainAudio})`)
})

snowButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = `url(${_assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__})`
  rainIcon.style.backgroundImage = `url(${_assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__})`

  toggleCurrentIconOrPauseIcon(snowIcon, [
    `url(${_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__})`,
    `url(${_assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__})`,
  ])

  changeBackground(snowButton, _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__)
  playOrPauseAudio(`url(${snowAudio})`)
})

const allAudio = [`url(${sunAudio})`, `url(${rainAudio})`, `url(${snowAudio})`]

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNmE1OWQxZDBmYjhiMzMxYjlhNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDd0I7QUFDRjtBQUNFO0FBQ0U7QUFDUTtBQUNBO0FBQ0o7QUFDQztBQUNEO0FBQ0U7QUFDckQ7QUFDQTtBQUNBLFVBQVUsa0RBQVE7QUFDbEIsVUFBVSxpREFBTztBQUNqQixVQUFVLGtEQUFRO0FBQ2xCLFVBQVUsa0RBQVU7QUFDcEIsVUFBVSx5REFBVztBQUNyQixVQUFVLHlEQUFXO0FBQ3JCLFVBQVUsb0RBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHNEQUFXLENBQUM7QUFDOUMsbUNBQW1DLG9EQUFZLENBQUM7QUFDaEQsbUNBQW1DLHVEQUFZLENBQUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMseURBQVcsQ0FBQztBQUN0RCwwQ0FBMEMseURBQVcsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsV0FBVyxvREFBWSxDQUFDO0FBQ3hCLFdBQVcsa0RBQVUsQ0FBQztBQUN0QjtBQUNBO0FBQ0EsOEJBQThCLGtEQUFRO0FBQ3RDLDBCQUEwQixTQUFTO0FBQ25DLENBQUM7QUFDRDtBQUNBO0FBQ0EseUNBQXlDLGtEQUFVLENBQUM7QUFDcEQsMENBQTBDLHlEQUFXLENBQUM7QUFDdEQ7QUFDQTtBQUNBLFdBQVcsb0RBQVksQ0FBQztBQUN4QixXQUFXLHlEQUFXLENBQUM7QUFDdkI7QUFDQTtBQUNBLCtCQUErQixpREFBTztBQUN0QywwQkFBMEIsVUFBVTtBQUNwQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxrREFBVSxDQUFDO0FBQ3BELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyx5REFBVyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQVE7QUFDdkMsMEJBQTBCLFVBQVU7QUFDcEMsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLFNBQVMsV0FBVyxVQUFVLFdBQVcsVUFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/YWIyZiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG5pbXBvcnQgc3VtbWVyQmcgZnJvbSAnLi9hc3NldHMvc3VtbWVyLWJnLmpwZydcclxuaW1wb3J0IHJhaW55QmcgZnJvbSAnLi9hc3NldHMvcmFpbnktYmcuanBnJ1xyXG5pbXBvcnQgd2ludGVyQmcgZnJvbSAnLi9hc3NldHMvd2ludGVyLWJnLmpwZydcclxuaW1wb3J0IHVybFN1bkljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvc3VuLnN2ZydcclxuaW1wb3J0IHVybFJhaW5JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb3VkLXJhaW4uc3ZnJ1xyXG5pbXBvcnQgdXJsU25vd0ljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmcnXHJcbmltcG9ydCB1cmxQYXVzZUljb24gZnJvbSAnLi9hc3NldHMvaWNvbnMvcGF1c2Uuc3ZnJ1xyXG5pbXBvcnQgdXJsU3VuQXVkaW8gZnJvbSAnLi9hc3NldHMvc291bmRzL3N1bW1lci5tcDMnXHJcbmltcG9ydCB1cmxSYWluQXVkaW8gZnJvbSAnLi9hc3NldHMvc291bmRzL3JhaW4ubXAzJ1xyXG5pbXBvcnQgdXJsU25vd0F1ZGlvIGZyb20gJy4vYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzJ1xyXG5cclxuY29uc3QgaW1nID0gbmV3IEltYWdlKClcclxuaW1nLnNyYyA9IHN1bW1lckJnXHJcbmltZy5zcmMgPSByYWlueUJnXHJcbmltZy5zcmMgPSB3aW50ZXJCZ1xyXG5pbWcuc3JjID0gdXJsU3VuSWNvblxyXG5pbWcuc3JjID0gdXJsUmFpbkljb25cclxuaW1nLnNyYyA9IHVybFNub3dJY29uXHJcbmltZy5zcmMgPSB1cmxQYXVzZUljb25cclxuXHJcbi8vIGNvbnN0IG1wMyA9IG5ldyBBdWRpbygpXHJcbi8vIG1wMy5zcmMgPSBzdW5BdWRpb1xyXG4vLyBtcDMuc3JjID0gcmFpbkF1ZGlvXHJcbi8vIG1wMy5zcmMgPSBzbm93QXVkaW9cclxuXHJcbmNvbnN0IHN1bkF1ZGlvID0gbmV3IEF1ZGlvKGB1cmwoJHt1cmxTdW5BdWRpb30pYClcclxuY29uc3QgcmFpbkF1ZGlvID0gbmV3IEF1ZGlvKGB1cmwoJHt1cmxSYWluQXVkaW99KWApXHJcbmNvbnN0IHNub3dBdWRpbyA9IG5ldyBBdWRpbyhgdXJsKCR7dXJsU25vd0F1ZGlvfSlgKVxyXG5cclxuY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpXHJcblxyXG5jb25zdCBzdW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuLWJ1dHRvbicpXHJcbmNvbnN0IHJhaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbi1idXR0b24nKVxyXG5jb25zdCBzbm93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3ctYnV0dG9uJylcclxuXHJcbmNvbnN0IHN1bkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuJylcclxuY29uc3QgcmFpbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpXHJcbmNvbnN0IHNub3dJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3cnKVxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoYnV0dG9uLCBpbWFnZSkgPT4ge1xyXG4gIHN1bkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIHJhaW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBzbm93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWBcclxufVxyXG5cclxubGV0IGluZGV4ID0gMFxyXG5cclxuY29uc3QgdG9nZ2xlQ3VycmVudEljb25PclBhdXNlSWNvbiA9IChlbCwgYXJyVHdvSW1hZ2VzKSA9PiB7XHJcbiAgaW5kZXggPSAoaW5kZXggKyAxKSAlIGFyclR3b0ltYWdlcy5sZW5ndGhcclxuICBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhcnJUd29JbWFnZXNbaW5kZXhdXHJcbn1cclxuXHJcbnN1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByYWluSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsUmFpbkljb259KWBcclxuICBzbm93SWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsU25vd0ljb259KWBcclxuXHJcbiAgdG9nZ2xlQ3VycmVudEljb25PclBhdXNlSWNvbihzdW5JY29uLCBbXHJcbiAgICBgdXJsKCR7dXJsUGF1c2VJY29ufSlgLFxyXG4gICAgYHVybCgke3VybFN1bkljb259KWAsXHJcbiAgXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChzdW5CdXR0b24sIHN1bW1lckJnKVxyXG4gIHBsYXlPclBhdXNlQXVkaW8oYHVybCgke3N1bkF1ZGlvfSlgKVxyXG59KVxyXG5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxTdW5JY29ufSlgXHJcbiAgc25vd0ljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybFNub3dJY29ufSlgXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24ocmFpbkljb24sIFtcclxuICAgIGB1cmwoJHt1cmxQYXVzZUljb259KWAsXHJcbiAgICBgdXJsKCR7dXJsUmFpbkljb259KWAsXHJcbiAgXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChyYWluQnV0dG9uLCByYWlueUJnKVxyXG4gIHBsYXlPclBhdXNlQXVkaW8oYHVybCgke3JhaW5BdWRpb30pYClcclxufSlcclxuXHJcbnNub3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc3VuSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsU3VuSWNvbn0pYFxyXG4gIHJhaW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxSYWluSWNvbn0pYFxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHNub3dJY29uLCBbXHJcbiAgICBgdXJsKCR7dXJsUGF1c2VJY29ufSlgLFxyXG4gICAgYHVybCgke3VybFNub3dJY29ufSlgLFxyXG4gIF0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQoc25vd0J1dHRvbiwgd2ludGVyQmcpXHJcbiAgcGxheU9yUGF1c2VBdWRpbyhgdXJsKCR7c25vd0F1ZGlvfSlgKVxyXG59KVxyXG5cclxuY29uc3QgYWxsQXVkaW8gPSBbYHVybCgke3N1bkF1ZGlvfSlgLCBgdXJsKCR7cmFpbkF1ZGlvfSlgLCBgdXJsKCR7c25vd0F1ZGlvfSlgXVxyXG5cclxuY29uc3Qgc3RvcEFsbEF1ZGlvID0gKCkgPT4gYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IGF1ZGlvLnBhdXNlKCkpXHJcblxyXG5jb25zdCBzZXRWb2x1bWVBbGxBdWRpbyA9ICh2YWx1ZSkgPT5cclxuICBhbGxBdWRpby5mb3JFYWNoKChhdWRpbykgPT4gKGF1ZGlvLnZvbHVtZSA9IHZhbHVlKSlcclxuXHJcbmNvbnN0IHBsYXlPclBhdXNlQXVkaW8gPSAoYXVkaW8pID0+IHtcclxuICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICBzdG9wQWxsQXVkaW8oKVxyXG4gICAgYXVkaW8ucGxheSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvLnBhdXNlKClcclxuICB9XHJcbn1cclxuXHJcbnZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+XHJcbiAgc2V0Vm9sdW1lQWxsQXVkaW8odm9sdW1lU2xpZGVyLnZhbHVlKVxyXG4pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
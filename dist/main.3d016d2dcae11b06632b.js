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

module.exports = __webpack_require__.p + "assets/50816e42231842d4567c.svg";

/***/ }),

/***/ "./assets/icons/cloud-snow.svg":
/*!*************************************!*\
  !*** ./assets/icons/cloud-snow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7cd24bfa252235321377.svg";

/***/ }),

/***/ "./assets/icons/pause.svg":
/*!********************************!*\
  !*** ./assets/icons/pause.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d1e5ea128500ff92cefd.svg";

/***/ }),

/***/ "./assets/icons/sun.svg":
/*!******************************!*\
  !*** ./assets/icons/sun.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a59f0405b34e25bfdd3c.svg";

/***/ }),

/***/ "./assets/rainy-bg.jpg":
/*!*****************************!*\
  !*** ./assets/rainy-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5df8a5c7dcda04cc3f1e.jpg";

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

module.exports = __webpack_require__.p + "assets/a318dfda9223c9b6bcc1.jpg";

/***/ }),

/***/ "./assets/winter-bg.jpg":
/*!******************************!*\
  !*** ./assets/winter-bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/032cb68ed96890ac0c3b.jpg";

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

const audio = new Audio()
audio.src = _assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__
audio.src = _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__
audio.src = _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__

const volumeSlider = document.getElementById('volume')

const sunButton = document.getElementById('sun-button')
const rainButton = document.getElementById('rain-button')
const snowButton = document.getElementById('snow-button')

const sunIcon = document.getElementById('sun')
// sunIcon.append(img)
const rainIcon = document.getElementById('rain')
// rainIcon.append(img)
const snowIcon = document.getElementById('snow')
snowIcon.append(img)

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
  rainIcon.style.backgroundImage = _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__
  snowIcon.style.backgroundImage = _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__

  toggleCurrentIconOrPauseIcon(sunIcon, [_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__])

  changeBackground(sunButton, _assets_summer_bg_jpg__WEBPACK_IMPORTED_MODULE_1__)
  playOrPauseAudio(_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__)
})

rainButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__
  snowIcon.style.backgroundImage = _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__

  toggleCurrentIconOrPauseIcon(rainIcon, [_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__])

  changeBackground(rainButton, _assets_rainy_bg_jpg__WEBPACK_IMPORTED_MODULE_2__)
  playOrPauseAudio(_assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__)
})

snowButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = _assets_icons_sun_svg__WEBPACK_IMPORTED_MODULE_4__
  rainIcon.style.backgroundImage = _assets_icons_cloud_rain_svg__WEBPACK_IMPORTED_MODULE_5__

  toggleCurrentIconOrPauseIcon(snowIcon, [_assets_icons_pause_svg__WEBPACK_IMPORTED_MODULE_7__, _assets_icons_cloud_snow_svg__WEBPACK_IMPORTED_MODULE_6__])

  changeBackground(snowButton, _assets_winter_bg_jpg__WEBPACK_IMPORTED_MODULE_3__)
  playOrPauseAudio(_assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__)
})

const allAudio = [_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_8__, _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_9__, _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_10__]

const stopAllAudio = () => allAudio.forEach((audio) => audio.pause())

const setVolumeAllAudio = (value) =>
  allAudio.forEach((audio) => (audio.volume = value))

const playOrPauseAudio = (audio) => {
  if (audio.paused) {
    stopAllAudio()
    audio.play()
  } else {
    audio.pause
  }
}

volumeSlider.addEventListener('input', () =>
  setVolumeAllAudio(volumeSlider.value)
)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZDAxNmQyZGNhZTExYjA2NjMyYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDd0I7QUFDRjtBQUNFO0FBQ0U7QUFDUTtBQUNBO0FBQ0o7QUFDRjtBQUNEO0FBQ0U7QUFDbEQ7QUFDQTtBQUNBLFVBQVUsa0RBQVE7QUFDbEIsVUFBVSxpREFBTztBQUNqQixVQUFVLGtEQUFRO0FBQ2xCLFVBQVUsa0RBQVU7QUFDcEIsVUFBVSx5REFBVztBQUNyQixVQUFVLHlEQUFXO0FBQ3JCLFVBQVUsb0RBQVk7QUFDdEI7QUFDQTtBQUNBLFlBQVksc0RBQVE7QUFDcEIsWUFBWSxvREFBUztBQUNyQixZQUFZLHVEQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlEQUFXO0FBQzlDLG1DQUFtQyx5REFBVztBQUM5QztBQUNBLHlDQUF5QyxvREFBWSxFQUFFLGtEQUFVO0FBQ2pFO0FBQ0EsOEJBQThCLGtEQUFRO0FBQ3RDLG1CQUFtQixzREFBUTtBQUMzQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtDQUFrQyxrREFBVTtBQUM1QyxtQ0FBbUMseURBQVc7QUFDOUM7QUFDQSwwQ0FBMEMsb0RBQVksRUFBRSx5REFBVztBQUNuRTtBQUNBLCtCQUErQixpREFBTztBQUN0QyxtQkFBbUIsb0RBQVM7QUFDNUIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVU7QUFDNUMsbUNBQW1DLHlEQUFXO0FBQzlDO0FBQ0EsMENBQTBDLG9EQUFZLEVBQUUseURBQVc7QUFDbkU7QUFDQSwrQkFBK0Isa0RBQVE7QUFDdkMsbUJBQW1CLHVEQUFTO0FBQzVCLENBQUM7QUFDRDtBQUNBLGtCQUFrQixzREFBUSxFQUFFLG9EQUFTLEVBQUUsdURBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5zY3NzP2FiMmYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vaW5kZXguc2NzcydcclxuaW1wb3J0IHN1bW1lckJnIGZyb20gJy4vYXNzZXRzL3N1bW1lci1iZy5qcGcnXHJcbmltcG9ydCByYWlueUJnIGZyb20gJy4vYXNzZXRzL3JhaW55LWJnLmpwZydcclxuaW1wb3J0IHdpbnRlckJnIGZyb20gJy4vYXNzZXRzL3dpbnRlci1iZy5qcGcnXHJcbmltcG9ydCB1cmxTdW5JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3N1bi5zdmcnXHJcbmltcG9ydCB1cmxSYWluSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9jbG91ZC1yYWluLnN2ZydcclxuaW1wb3J0IHVybFNub3dJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb3VkLXNub3cuc3ZnJ1xyXG5pbXBvcnQgdXJsUGF1c2VJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3BhdXNlLnN2ZydcclxuaW1wb3J0IHN1bkF1ZGlvIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzJ1xyXG5pbXBvcnQgcmFpbkF1ZGlvIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9yYWluLm1wMydcclxuaW1wb3J0IHNub3dBdWRpbyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wMydcclxuXHJcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcbmltZy5zcmMgPSBzdW1tZXJCZ1xyXG5pbWcuc3JjID0gcmFpbnlCZ1xyXG5pbWcuc3JjID0gd2ludGVyQmdcclxuaW1nLnNyYyA9IHVybFN1bkljb25cclxuaW1nLnNyYyA9IHVybFJhaW5JY29uXHJcbmltZy5zcmMgPSB1cmxTbm93SWNvblxyXG5pbWcuc3JjID0gdXJsUGF1c2VJY29uXHJcblxyXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygpXHJcbmF1ZGlvLnNyYyA9IHN1bkF1ZGlvXHJcbmF1ZGlvLnNyYyA9IHJhaW5BdWRpb1xyXG5hdWRpby5zcmMgPSBzbm93QXVkaW9cclxuXHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKVxyXG5cclxuY29uc3Qgc3VuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bi1idXR0b24nKVxyXG5jb25zdCByYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW4tYnV0dG9uJylcclxuY29uc3Qgc25vd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93LWJ1dHRvbicpXHJcblxyXG5jb25zdCBzdW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bicpXHJcbi8vIHN1bkljb24uYXBwZW5kKGltZylcclxuY29uc3QgcmFpbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpXHJcbi8vIHJhaW5JY29uLmFwcGVuZChpbWcpXHJcbmNvbnN0IHNub3dJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3cnKVxyXG5zbm93SWNvbi5hcHBlbmQoaW1nKVxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbmNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoYnV0dG9uLCBpbWFnZSkgPT4ge1xyXG4gIHN1bkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIHJhaW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBzbm93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWBcclxufVxyXG5cclxubGV0IGluZGV4ID0gMFxyXG5cclxuY29uc3QgdG9nZ2xlQ3VycmVudEljb25PclBhdXNlSWNvbiA9IChlbCwgYXJyVHdvSW1hZ2VzKSA9PiB7XHJcbiAgaW5kZXggPSAoaW5kZXggKyAxKSAlIGFyclR3b0ltYWdlcy5sZW5ndGhcclxuICBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBhcnJUd29JbWFnZXNbaW5kZXhdXHJcbn1cclxuXHJcbnN1bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICByYWluSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmxSYWluSWNvblxyXG4gIHNub3dJY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybFNub3dJY29uXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24oc3VuSWNvbiwgW3VybFBhdXNlSWNvbiwgdXJsU3VuSWNvbl0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQoc3VuQnV0dG9uLCBzdW1tZXJCZylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHN1bkF1ZGlvKVxyXG59KVxyXG5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybFN1bkljb25cclxuICBzbm93SWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmxTbm93SWNvblxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHJhaW5JY29uLCBbdXJsUGF1c2VJY29uLCB1cmxSYWluSWNvbl0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQocmFpbkJ1dHRvbiwgcmFpbnlCZylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHJhaW5BdWRpbylcclxufSlcclxuXHJcbnNub3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc3VuSWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmxTdW5JY29uXHJcbiAgcmFpbkljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsUmFpbkljb25cclxuXHJcbiAgdG9nZ2xlQ3VycmVudEljb25PclBhdXNlSWNvbihzbm93SWNvbiwgW3VybFBhdXNlSWNvbiwgdXJsU25vd0ljb25dKVxyXG5cclxuICBjaGFuZ2VCYWNrZ3JvdW5kKHNub3dCdXR0b24sIHdpbnRlckJnKVxyXG4gIHBsYXlPclBhdXNlQXVkaW8oc25vd0F1ZGlvKVxyXG59KVxyXG5cclxuY29uc3QgYWxsQXVkaW8gPSBbc3VuQXVkaW8sIHJhaW5BdWRpbywgc25vd0F1ZGlvXVxyXG5cclxuY29uc3Qgc3RvcEFsbEF1ZGlvID0gKCkgPT4gYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IGF1ZGlvLnBhdXNlKCkpXHJcblxyXG5jb25zdCBzZXRWb2x1bWVBbGxBdWRpbyA9ICh2YWx1ZSkgPT5cclxuICBhbGxBdWRpby5mb3JFYWNoKChhdWRpbykgPT4gKGF1ZGlvLnZvbHVtZSA9IHZhbHVlKSlcclxuXHJcbmNvbnN0IHBsYXlPclBhdXNlQXVkaW8gPSAoYXVkaW8pID0+IHtcclxuICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICBzdG9wQWxsQXVkaW8oKVxyXG4gICAgYXVkaW8ucGxheSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvLnBhdXNlXHJcbiAgfVxyXG59XHJcblxyXG52b2x1bWVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PlxyXG4gIHNldFZvbHVtZUFsbEF1ZGlvKHZvbHVtZVNsaWRlci52YWx1ZSlcclxuKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
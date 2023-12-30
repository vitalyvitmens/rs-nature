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

const stopAllAudio = () => {
  allAudio.forEach((audio) => {
    audio.pause()
  })
}

const setVolumeAllAudio = (value) => {
  allAudio.forEach((audio) => {
    audio.volume = value
  })
}

const playOrPauseAudio = (audio) => {
  if (audio.paused) {
    stopAllAudio()
    audio.play()
  } else {
    audio.pause()
  }
}

volumeSlider.addEventListener('input', () => {
  setVolumeAllAudio(volumeSlider.value)
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YzM5YTkwZGFmOTMxZTI4M2Q1MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUI7QUFDd0I7QUFDRjtBQUNFO0FBQ0U7QUFDUTtBQUNBO0FBQ0o7QUFDQztBQUNEO0FBQ0U7QUFDckQ7QUFDQTtBQUNBLFVBQVUsa0RBQVE7QUFDbEIsVUFBVSxpREFBTztBQUNqQixVQUFVLGtEQUFRO0FBQ2xCLFVBQVUsa0RBQVU7QUFDcEIsVUFBVSx5REFBVztBQUNyQixVQUFVLHlEQUFXO0FBQ3JCLFVBQVUsb0RBQVk7QUFDdEI7QUFDQSwyQkFBMkIsc0RBQVc7QUFDdEMsNEJBQTRCLG9EQUFZO0FBQ3hDLDRCQUE0Qix1REFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsTUFBTTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyx5REFBVyxDQUFDO0FBQ3RELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyxrREFBVSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSw4QkFBOEIsa0RBQVE7QUFDdEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxrREFBVSxDQUFDO0FBQ3BELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyx5REFBVyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSwrQkFBK0IsaURBQU87QUFDdEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHlDQUF5QyxrREFBVSxDQUFDO0FBQ3BELDBDQUEwQyx5REFBVyxDQUFDO0FBQ3REO0FBQ0E7QUFDQSxXQUFXLG9EQUFZLENBQUM7QUFDeEIsV0FBVyx5REFBVyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSwrQkFBK0Isa0RBQVE7QUFDdkM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5zY3NzP2FiMmYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vaW5kZXguc2NzcydcclxuaW1wb3J0IHN1bW1lckJnIGZyb20gJy4vYXNzZXRzL3N1bW1lci1iZy5qcGcnXHJcbmltcG9ydCByYWlueUJnIGZyb20gJy4vYXNzZXRzL3JhaW55LWJnLmpwZydcclxuaW1wb3J0IHdpbnRlckJnIGZyb20gJy4vYXNzZXRzL3dpbnRlci1iZy5qcGcnXHJcbmltcG9ydCB1cmxTdW5JY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3N1bi5zdmcnXHJcbmltcG9ydCB1cmxSYWluSWNvbiBmcm9tICcuL2Fzc2V0cy9pY29ucy9jbG91ZC1yYWluLnN2ZydcclxuaW1wb3J0IHVybFNub3dJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL2Nsb3VkLXNub3cuc3ZnJ1xyXG5pbXBvcnQgdXJsUGF1c2VJY29uIGZyb20gJy4vYXNzZXRzL2ljb25zL3BhdXNlLnN2ZydcclxuaW1wb3J0IHVybFN1bkF1ZGlvIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzJ1xyXG5pbXBvcnQgdXJsUmFpbkF1ZGlvIGZyb20gJy4vYXNzZXRzL3NvdW5kcy9yYWluLm1wMydcclxuaW1wb3J0IHVybFNub3dBdWRpbyBmcm9tICcuL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wMydcclxuXHJcbmNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcbmltZy5zcmMgPSBzdW1tZXJCZ1xyXG5pbWcuc3JjID0gcmFpbnlCZ1xyXG5pbWcuc3JjID0gd2ludGVyQmdcclxuaW1nLnNyYyA9IHVybFN1bkljb25cclxuaW1nLnNyYyA9IHVybFJhaW5JY29uXHJcbmltZy5zcmMgPSB1cmxTbm93SWNvblxyXG5pbWcuc3JjID0gdXJsUGF1c2VJY29uXHJcblxyXG5jb25zdCBzdW5BdWRpbyA9IG5ldyBBdWRpbyh1cmxTdW5BdWRpbylcclxuY29uc3QgcmFpbkF1ZGlvID0gbmV3IEF1ZGlvKHVybFJhaW5BdWRpbylcclxuY29uc3Qgc25vd0F1ZGlvID0gbmV3IEF1ZGlvKHVybFNub3dBdWRpbylcclxuXHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKVxyXG5cclxuY29uc3Qgc3VuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bi1idXR0b24nKVxyXG5jb25zdCByYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW4tYnV0dG9uJylcclxuY29uc3Qgc25vd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93LWJ1dHRvbicpXHJcblxyXG5jb25zdCBzdW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bicpXHJcbmNvbnN0IHJhaW5JY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW4nKVxyXG5jb25zdCBzbm93SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbm93JylcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XHJcblxyXG5jb25zdCBjaGFuZ2VCYWNrZ3JvdW5kID0gKGJ1dHRvbiwgaW1hZ2UpID0+IHtcclxuICBzdW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICByYWluQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgc25vd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlfSlgXHJcbn1cclxuXHJcbmxldCBpbmRleCA9IDBcclxuXHJcbmNvbnN0IHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24gPSAoZWwsIGFyclR3b0ltYWdlcykgPT4ge1xyXG4gIGluZGV4ID0gKGluZGV4ICsgMSkgJSBhcnJUd29JbWFnZXMubGVuZ3RoXHJcbiAgZWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYXJyVHdvSW1hZ2VzW2luZGV4XVxyXG59XHJcblxyXG5zdW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcmFpbkljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybFJhaW5JY29ufSlgXHJcbiAgc25vd0ljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybFNub3dJY29ufSlgXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24oc3VuSWNvbiwgW1xyXG4gICAgYHVybCgke3VybFBhdXNlSWNvbn0pYCxcclxuICAgIGB1cmwoJHt1cmxTdW5JY29ufSlgLFxyXG4gIF0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQoc3VuQnV0dG9uLCBzdW1tZXJCZylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHN1bkF1ZGlvKVxyXG59KVxyXG5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxTdW5JY29ufSlgXHJcbiAgc25vd0ljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybFNub3dJY29ufSlgXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24ocmFpbkljb24sIFtcclxuICAgIGB1cmwoJHt1cmxQYXVzZUljb259KWAsXHJcbiAgICBgdXJsKCR7dXJsUmFpbkljb259KWAsXHJcbiAgXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChyYWluQnV0dG9uLCByYWlueUJnKVxyXG4gIHBsYXlPclBhdXNlQXVkaW8ocmFpbkF1ZGlvKVxyXG59KVxyXG5cclxuc25vd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmxTdW5JY29ufSlgXHJcbiAgcmFpbkljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybFJhaW5JY29ufSlgXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24oc25vd0ljb24sIFtcclxuICAgIGB1cmwoJHt1cmxQYXVzZUljb259KWAsXHJcbiAgICBgdXJsKCR7dXJsU25vd0ljb259KWAsXHJcbiAgXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChzbm93QnV0dG9uLCB3aW50ZXJCZylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHNub3dBdWRpbylcclxufSlcclxuXHJcbmNvbnN0IGFsbEF1ZGlvID0gW3N1bkF1ZGlvLCByYWluQXVkaW8sIHNub3dBdWRpb11cclxuXHJcbmNvbnN0IHN0b3BBbGxBdWRpbyA9ICgpID0+IHtcclxuICBhbGxBdWRpby5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4gICAgYXVkaW8ucGF1c2UoKVxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IHNldFZvbHVtZUFsbEF1ZGlvID0gKHZhbHVlKSA9PiB7XHJcbiAgYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IHtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IHZhbHVlXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgcGxheU9yUGF1c2VBdWRpbyA9IChhdWRpbykgPT4ge1xyXG4gIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgIHN0b3BBbGxBdWRpbygpXHJcbiAgICBhdWRpby5wbGF5KClcclxuICB9IGVsc2Uge1xyXG4gICAgYXVkaW8ucGF1c2UoKVxyXG4gIH1cclxufVxyXG5cclxudm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gIHNldFZvbHVtZUFsbEF1ZGlvKHZvbHVtZVNsaWRlci52YWx1ZSlcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
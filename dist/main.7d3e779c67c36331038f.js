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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  { id: 1, title: 'Item 1' },\r\n  { id: 2, title: 'Item 2' },\r\n  { id: 3, title: 'Item 3' },\r\n  { id: 4, title: 'Item 4' },\r\n]);\r\n\n\n//# sourceURL=webpack:///./data.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./data.js\");\n\r\n// import './index.scss'\r\n\r\nconst root = document.querySelector('#app')\r\n\r\nfunction renderItem(item, index) {\r\n  const li = document.createElement('li')\r\n  li.textContent = item.title\r\n  if (index % 2 === 0) {\r\n    li.style.background = 'lightgray'\r\n    li.style.color = 'red'\r\n  } else {\r\n    li.style.background = 'lightblue'\r\n  }\r\n  root.append(li)\r\n}\r\n\r\n_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(renderItem)\r\n\r\n// // импортируем стили\r\n// import './style.css'\r\n// import './style.scss'\r\n\r\n// // получаем элементы из HTML\r\n// const volumeSlider = document.getElementById('volume-slider')\r\n// const rainButton = document.getElementById('rain-button')\r\n// const oceanButton = document.getElementById('ocean-button')\r\n// const forestButton = document.getElementById('forest-button')\r\n// const body = document.querySelector('body')\r\n\r\n// // создаем объекты аудио\r\n// const rainAudio = new Audio('./assets/audio/rain.mp3')\r\n// const oceanAudio = new Audio('./assets/audio/ocean.mp3')\r\n// const forestAudio = new Audio('./assets/audio/forest.mp3')\r\n\r\n// // создаем массив из всех аудио\r\n// const allAudio = [rainAudio, oceanAudio, forestAudio]\r\n\r\n// // создаем функцию для остановки всех аудио\r\n// const stopAllAudio = () => {\r\n//   allAudio.forEach((audio) => {\r\n//     audio.pause()\r\n//   })\r\n// }\r\n\r\n// // создаем функцию для установки громкости всех аудио\r\n// const setVolumeAllAudio = (value) => {\r\n//   allAudio.forEach((audio) => {\r\n//     audio.volume = value\r\n//   })\r\n// }\r\n\r\n// // создаем функцию для воспроизведения или приостановки аудио\r\n// const playOrPauseAudio = (audio, button) => {\r\n//   if (audio.paused) {\r\n//     stopAllAudio()\r\n//     audio.play()\r\n//     button.classList.add('active')\r\n//   } else {\r\n//     audio.pause()\r\n//     button.classList.remove('active')\r\n//   }\r\n// }\r\n\r\n// // создаем функцию для смены фоновой картинки\r\n// const changeBackgroundImage = (image) => {\r\n//   body.style.backgroundImage = `url(./assets/images/${image})`\r\n// }\r\n\r\n// // добавляем обработчики событий для регулятора громкости\r\n// volumeSlider.addEventListener('input', () => {\r\n//   setVolumeAllAudio(volumeSlider.value)\r\n// })\r\n\r\n// // добавляем обработчики событий для кнопок аудио\r\n// rainButton.addEventListener('click', () => {\r\n//   playOrPauseAudio(rainAudio, rainButton)\r\n//   changeBackgroundImage('rain.jpg')\r\n// })\r\n\r\n// oceanButton.addEventListener('click', () => {\r\n//   playOrPauseAudio(oceanAudio, oceanButton)\r\n//   changeBackgroundImage('ocean.jpg')\r\n// })\r\n\r\n// forestButton.addEventListener('click', () => {\r\n//   playOrPauseAudio(forestAudio, forestButton)\r\n//   changeBackgroundImage('forest.jpg')\r\n// })\r\n\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
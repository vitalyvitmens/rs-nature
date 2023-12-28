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

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
]);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./data.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./index.scss");



const root = document.querySelector('#app')

// function renderItem(item, index) {
//   const li = document.createElement('li')
//   li.textContent = item.title
//   if (index % 2 === 0) {
//     li.style.background = 'lightgray'
//     li.style.color = 'red'
//   } else {
//     li.style.background = 'lightblue'
//   }
//   root.append(li)
// }

// data.forEach(renderItem)

// получаем элементы из HTML
const volumeSlider = document.getElementById('volume-slider')
const rainButton = document.getElementById('rain-button')
const oceanButton = document.getElementById('ocean-button')
const forestButton = document.getElementById('forest-button')
const body = document.querySelector('body')

// создаем объекты аудио
const rainAudio = new Audio('./assets/sounds/rain.mp3')
const oceanAudio = new Audio('./assets/sounds/winter.mp3')
const forestAudio = new Audio('./assets/sounds/summer.mp3')

// создаем массив из всех аудио
const allAudio = [rainAudio, oceanAudio, forestAudio]

// создаем функцию для остановки всех аудио
const stopAllAudio = () => {
  allAudio.forEach((audio) => {
    audio.pause()
  })
}

// создаем функцию для установки громкости всех аудио
const setVolumeAllAudio = (value) => {
  allAudio.forEach((audio) => {
    audio.volume = value
  })
}

// создаем функцию для воспроизведения или приостановки аудио
const playOrPauseAudio = (audio, button) => {
  if (audio.paused) {
    stopAllAudio()
    audio.play()
    button.classList.add('active')
  } else {
    audio.pause()
    button.classList.remove('active')
  }
}

// создаем функцию для смены фоновой картинки
const changeBackgroundImage = (image) => {
  body.style.backgroundImage = `url(./assets/${image})`
}

// добавляем обработчики событий для регулятора громкости
volumeSlider.addEventListener('input', () => {
  setVolumeAllAudio(volumeSlider.value)
})

// добавляем обработчики событий для кнопок аудио
rainButton.addEventListener('click', () => {
  playOrPauseAudio(rainAudio, rainButton)
  changeBackgroundImage('rainy-bg.jpg')
})

oceanButton.addEventListener('click', () => {
  playOrPauseAudio(oceanAudio, oceanButton)
  changeBackgroundImage('winter-bg.jpg')
})

forestButton.addEventListener('click', () => {
  playOrPauseAudio(forestAudio, forestButton)
  changeBackgroundImage('summer-bg.jpg')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNWMyMjAzNjc3MjRmNjYwZjY1OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLENBQUM7Ozs7Ozs7VUNMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNKO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/YWIyZiIsIndlYnBhY2s6Ly8vLi9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7IGlkOiAxLCB0aXRsZTogJ0l0ZW0gMScgfSxcclxuICB7IGlkOiAyLCB0aXRsZTogJ0l0ZW0gMicgfSxcclxuICB7IGlkOiAzLCB0aXRsZTogJ0l0ZW0gMycgfSxcclxuICB7IGlkOiA0LCB0aXRsZTogJ0l0ZW0gNCcgfSxcclxuXVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSdcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSB7XHJcbi8vICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbi8vICAgbGkudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlXHJcbi8vICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG4vLyAgICAgbGkuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknXHJcbi8vICAgICBsaS5zdHlsZS5jb2xvciA9ICdyZWQnXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGxpLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHRibHVlJ1xyXG4vLyAgIH1cclxuLy8gICByb290LmFwcGVuZChsaSlcclxuLy8gfVxyXG5cclxuLy8gZGF0YS5mb3JFYWNoKHJlbmRlckl0ZW0pXHJcblxyXG4vLyDQv9C+0LvRg9GH0LDQtdC8INGN0LvQtdC80LXQvdGC0Ysg0LjQtyBIVE1MXHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUtc2xpZGVyJylcclxuY29uc3QgcmFpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluLWJ1dHRvbicpXHJcbmNvbnN0IG9jZWFuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29jZWFuLWJ1dHRvbicpXHJcbmNvbnN0IGZvcmVzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3Jlc3QtYnV0dG9uJylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGC0Ysg0LDRg9C00LjQvlxyXG5jb25zdCByYWluQXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9yYWluLm1wMycpXHJcbmNvbnN0IG9jZWFuQXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzJylcclxuY29uc3QgZm9yZXN0QXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzJylcclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0LjQsiDQuNC3INCy0YHQtdGFINCw0YPQtNC40L5cclxuY29uc3QgYWxsQXVkaW8gPSBbcmFpbkF1ZGlvLCBvY2VhbkF1ZGlvLCBmb3Jlc3RBdWRpb11cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC00LvRjyDQvtGB0YLQsNC90L7QstC60Lgg0LLRgdC10YUg0LDRg9C00LjQvlxyXG5jb25zdCBzdG9wQWxsQXVkaW8gPSAoKSA9PiB7XHJcbiAgYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IHtcclxuICAgIGF1ZGlvLnBhdXNlKClcclxuICB9KVxyXG59XHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4INCz0YDQvtC80LrQvtGB0YLQuCDQstGB0LXRhSDQsNGD0LTQuNC+XHJcbmNvbnN0IHNldFZvbHVtZUFsbEF1ZGlvID0gKHZhbHVlKSA9PiB7XHJcbiAgYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IHtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IHZhbHVlXHJcbiAgfSlcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQuNC70Lgg0L/RgNC40L7RgdGC0LDQvdC+0LLQutC4INCw0YPQtNC40L5cclxuY29uc3QgcGxheU9yUGF1c2VBdWRpbyA9IChhdWRpbywgYnV0dG9uKSA9PiB7XHJcbiAgaWYgKGF1ZGlvLnBhdXNlZCkge1xyXG4gICAgc3RvcEFsbEF1ZGlvKClcclxuICAgIGF1ZGlvLnBsYXkoKVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvLnBhdXNlKClcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIH1cclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LTQu9GPINGB0LzQtdC90Ysg0YTQvtC90L7QstC+0Lkg0LrQsNGA0YLQuNC90LrQuFxyXG5jb25zdCBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UgPSAoaW1hZ2UpID0+IHtcclxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi9hc3NldHMvJHtpbWFnZX0pYFxyXG59XHJcblxyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0YDQtdCz0YPQu9GP0YLQvtGA0LAg0LPRgNC+0LzQutC+0YHRgtC4XHJcbnZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICBzZXRWb2x1bWVBbGxBdWRpbyh2b2x1bWVTbGlkZXIudmFsdWUpXHJcbn0pXHJcblxyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0LrQvdC+0L/QvtC6INCw0YPQtNC40L5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHJhaW5BdWRpbywgcmFpbkJ1dHRvbilcclxuICBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UoJ3JhaW55LWJnLmpwZycpXHJcbn0pXHJcblxyXG5vY2VhbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwbGF5T3JQYXVzZUF1ZGlvKG9jZWFuQXVkaW8sIG9jZWFuQnV0dG9uKVxyXG4gIGNoYW5nZUJhY2tncm91bmRJbWFnZSgnd2ludGVyLWJnLmpwZycpXHJcbn0pXHJcblxyXG5mb3Jlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcGxheU9yUGF1c2VBdWRpbyhmb3Jlc3RBdWRpbywgZm9yZXN0QnV0dG9uKVxyXG4gIGNoYW5nZUJhY2tncm91bmRJbWFnZSgnc3VtbWVyLWJnLmpwZycpXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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


// import './index.css'

const root = document.querySelector('#app')

function renderItem(item, index) {
  const li = document.createElement('li')
  li.textContent = item.title
  if (index % 2 === 0) {
    li.style.background = 'lightgray'
    li.style.color = 'red'
  } else {
    li.style.background = 'lightblue'
  }
  root.append(li)
}

_data__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(renderItem)

// // импортируем стили
// import './style.css'
// import './style.scss'

// // получаем элементы из HTML
// const volumeSlider = document.getElementById('volume-slider')
// const rainButton = document.getElementById('rain-button')
// const oceanButton = document.getElementById('ocean-button')
// const forestButton = document.getElementById('forest-button')
// const body = document.querySelector('body')

// // создаем объекты аудио
// const rainAudio = new Audio('./assets/audio/rain.mp3')
// const oceanAudio = new Audio('./assets/audio/ocean.mp3')
// const forestAudio = new Audio('./assets/audio/forest.mp3')

// // создаем массив из всех аудио
// const allAudio = [rainAudio, oceanAudio, forestAudio]

// // создаем функцию для остановки всех аудио
// const stopAllAudio = () => {
//   allAudio.forEach((audio) => {
//     audio.pause()
//   })
// }

// // создаем функцию для установки громкости всех аудио
// const setVolumeAllAudio = (value) => {
//   allAudio.forEach((audio) => {
//     audio.volume = value
//   })
// }

// // создаем функцию для воспроизведения или приостановки аудио
// const playOrPauseAudio = (audio, button) => {
//   if (audio.paused) {
//     stopAllAudio()
//     audio.play()
//     button.classList.add('active')
//   } else {
//     audio.pause()
//     button.classList.remove('active')
//   }
// }

// // создаем функцию для смены фоновой картинки
// const changeBackgroundImage = (image) => {
//   body.style.backgroundImage = `url(./assets/images/${image})`
// }

// // добавляем обработчики событий для регулятора громкости
// volumeSlider.addEventListener('input', () => {
//   setVolumeAllAudio(volumeSlider.value)
// })

// // добавляем обработчики событий для кнопок аудио
// rainButton.addEventListener('click', () => {
//   playOrPauseAudio(rainAudio, rainButton)
//   changeBackgroundImage('rain.jpg')
// })

// oceanButton.addEventListener('click', () => {
//   playOrPauseAudio(oceanAudio, oceanButton)
//   changeBackgroundImage('ocean.jpg')
// })

// forestButton.addEventListener('click', () => {
//   playOrPauseAudio(forestAudio, forestButton)
//   changeBackgroundImage('forest.jpg')
// })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYTYwMzcxY2MyYTJjN2ZhNTY1Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLENBQUM7Ozs7Ozs7VUNMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNKO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxNQUFNO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5zY3NzP2FiMmYiLCJ3ZWJwYWNrOi8vLy4vZGF0YS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgeyBpZDogMSwgdGl0bGU6ICdJdGVtIDEnIH0sXHJcbiAgeyBpZDogMiwgdGl0bGU6ICdJdGVtIDInIH0sXHJcbiAgeyBpZDogMywgdGl0bGU6ICdJdGVtIDMnIH0sXHJcbiAgeyBpZDogNCwgdGl0bGU6ICdJdGVtIDQnIH0sXHJcbl1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnXHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtLCBpbmRleCkge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gIGxpLnRleHRDb250ZW50ID0gaXRlbS50aXRsZVxyXG4gIGlmIChpbmRleCAlIDIgPT09IDApIHtcclxuICAgIGxpLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHRncmF5J1xyXG4gICAgbGkuc3R5bGUuY29sb3IgPSAncmVkJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpZ2h0Ymx1ZSdcclxuICB9XHJcbiAgcm9vdC5hcHBlbmQobGkpXHJcbn1cclxuXHJcbmRhdGEuZm9yRWFjaChyZW5kZXJJdGVtKVxyXG5cclxuLy8gLy8g0LjQvNC/0L7RgNGC0LjRgNGD0LXQvCDRgdGC0LjQu9C4XHJcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbi8vIGltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuLy8gLy8g0L/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LcgSFRNTFxyXG4vLyBjb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lLXNsaWRlcicpXHJcbi8vIGNvbnN0IHJhaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbi1idXR0b24nKVxyXG4vLyBjb25zdCBvY2VhbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvY2Vhbi1idXR0b24nKVxyXG4vLyBjb25zdCBmb3Jlc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZXN0LWJ1dHRvbicpXHJcbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbi8vIC8vINGB0L7Qt9C00LDQtdC8INC+0LHRitC10LrRgtGLINCw0YPQtNC40L5cclxuLy8gY29uc3QgcmFpbkF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9hdWRpby9yYWluLm1wMycpXHJcbi8vIGNvbnN0IG9jZWFuQXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL2F1ZGlvL29jZWFuLm1wMycpXHJcbi8vIGNvbnN0IGZvcmVzdEF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9hdWRpby9mb3Jlc3QubXAzJylcclxuXHJcbi8vIC8vINGB0L7Qt9C00LDQtdC8INC80LDRgdGB0LjQsiDQuNC3INCy0YHQtdGFINCw0YPQtNC40L5cclxuLy8gY29uc3QgYWxsQXVkaW8gPSBbcmFpbkF1ZGlvLCBvY2VhbkF1ZGlvLCBmb3Jlc3RBdWRpb11cclxuXHJcbi8vIC8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC00LvRjyDQvtGB0YLQsNC90L7QstC60Lgg0LLRgdC10YUg0LDRg9C00LjQvlxyXG4vLyBjb25zdCBzdG9wQWxsQXVkaW8gPSAoKSA9PiB7XHJcbi8vICAgYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IHtcclxuLy8gICAgIGF1ZGlvLnBhdXNlKClcclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG4vLyAvLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4INCz0YDQvtC80LrQvtGB0YLQuCDQstGB0LXRhSDQsNGD0LTQuNC+XHJcbi8vIGNvbnN0IHNldFZvbHVtZUFsbEF1ZGlvID0gKHZhbHVlKSA9PiB7XHJcbi8vICAgYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IHtcclxuLy8gICAgIGF1ZGlvLnZvbHVtZSA9IHZhbHVlXHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LTQu9GPINCy0L7RgdC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQuNC70Lgg0L/RgNC40L7RgdGC0LDQvdC+0LLQutC4INCw0YPQtNC40L5cclxuLy8gY29uc3QgcGxheU9yUGF1c2VBdWRpbyA9IChhdWRpbywgYnV0dG9uKSA9PiB7XHJcbi8vICAgaWYgKGF1ZGlvLnBhdXNlZCkge1xyXG4vLyAgICAgc3RvcEFsbEF1ZGlvKClcclxuLy8gICAgIGF1ZGlvLnBsYXkoKVxyXG4vLyAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGF1ZGlvLnBhdXNlKClcclxuLy8gICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LTQu9GPINGB0LzQtdC90Ysg0YTQvtC90L7QstC+0Lkg0LrQsNGA0YLQuNC90LrQuFxyXG4vLyBjb25zdCBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UgPSAoaW1hZ2UpID0+IHtcclxuLy8gICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2V9KWBcclxuLy8gfVxyXG5cclxuLy8gLy8g0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINGA0LXQs9GD0LvRj9GC0L7RgNCwINCz0YDQvtC80LrQvtGB0YLQuFxyXG4vLyB2b2x1bWVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbi8vICAgc2V0Vm9sdW1lQWxsQXVkaW8odm9sdW1lU2xpZGVyLnZhbHVlKVxyXG4vLyB9KVxyXG5cclxuLy8gLy8g0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINC60L3QvtC/0L7QuiDQsNGD0LTQuNC+XHJcbi8vIHJhaW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgcGxheU9yUGF1c2VBdWRpbyhyYWluQXVkaW8sIHJhaW5CdXR0b24pXHJcbi8vICAgY2hhbmdlQmFja2dyb3VuZEltYWdlKCdyYWluLmpwZycpXHJcbi8vIH0pXHJcblxyXG4vLyBvY2VhbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBwbGF5T3JQYXVzZUF1ZGlvKG9jZWFuQXVkaW8sIG9jZWFuQnV0dG9uKVxyXG4vLyAgIGNoYW5nZUJhY2tncm91bmRJbWFnZSgnb2NlYW4uanBnJylcclxuLy8gfSlcclxuXHJcbi8vIGZvcmVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICBwbGF5T3JQYXVzZUF1ZGlvKGZvcmVzdEF1ZGlvLCBmb3Jlc3RCdXR0b24pXHJcbi8vICAgY2hhbmdlQmFja2dyb3VuZEltYWdlKCdmb3Jlc3QuanBnJylcclxuLy8gfSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
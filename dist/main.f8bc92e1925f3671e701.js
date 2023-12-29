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



// const root = document.querySelector('#app')

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

// const root2 = document.querySelector('#div')

// const button = document.createElement('button')
// button.textContent = '77'
// root2.append(button)

// const root = document.querySelector('#app')

// получаем элементы из HTML
const volumeSlider = document.getElementById('volume')
const forestButton = document.getElementById('forest-button')
const rainButton = document.getElementById('rain-button')
const oceanButton = document.getElementById('ocean-button')
const body = document.body

// создаем объекты аудио
const forestAudio = new Audio('./assets/sounds/summer.mp3')
const rainAudio = new Audio('./assets/sounds/rain.mp3')
const oceanAudio = new Audio('./assets/sounds/winter.mp3')

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
const changeBackgroundImage = (button, image) => {
  // Снимаем класс active со всех кнопок
  forestButton.classList.remove('active')
  rainButton.classList.remove('active')
  oceanButton.classList.remove('active')
  // Добавляем класс active на выбранную кнопку
  button.classList.add('active')
  // Устанавливаем картинку фона для body
  body.style.backgroundImage = `url(${image})`
}

// добавляем обработчики событий для регулятора громкости
volumeSlider.addEventListener('input', () => {
  setVolumeAllAudio(volumeSlider.value)
})

// добавляем обработчики событий для кнопок аудио
forestButton.addEventListener('click', () => {
  // playOrPauseAudio(forestAudio, forestButton)
  changeBackgroundImage(forestButton, './assets/summer-bg.jpg')
})

rainButton.addEventListener('click', () => {
  // playOrPauseAudio(rainAudio, rainButton)
  changeBackgroundImage(rainButton, './assets/rainy-bg.jpg')
})

oceanButton.addEventListener('click', () => {
  // playOrPauseAudio(oceanAudio, oceanButton)
  changeBackgroundImage(oceanButton, './assets/winter-bg.jpg')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOGJjOTJlMTkyNWYzNjcxZTcwMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNmLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLElBQUksd0JBQXdCO0FBQzVCLENBQUM7Ozs7Ozs7VUNMRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNKO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/YWIyZiIsIndlYnBhY2s6Ly8vLi9kYXRhLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7IGlkOiAxLCB0aXRsZTogJ0l0ZW0gMScgfSxcclxuICB7IGlkOiAyLCB0aXRsZTogJ0l0ZW0gMicgfSxcclxuICB7IGlkOiAzLCB0aXRsZTogJ0l0ZW0gMycgfSxcclxuICB7IGlkOiA0LCB0aXRsZTogJ0l0ZW0gNCcgfSxcclxuXVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSdcclxuaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcblxyXG4vLyBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcblxyXG4vLyBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0sIGluZGV4KSB7XHJcbi8vICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbi8vICAgbGkudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlXHJcbi8vICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xyXG4vLyAgICAgbGkuc3R5bGUuYmFja2dyb3VuZCA9ICdsaWdodGdyYXknXHJcbi8vICAgICBsaS5zdHlsZS5jb2xvciA9ICdyZWQnXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIGxpLnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHRibHVlJ1xyXG4vLyAgIH1cclxuLy8gICByb290LmFwcGVuZChsaSlcclxuLy8gfVxyXG5cclxuLy8gZGF0YS5mb3JFYWNoKHJlbmRlckl0ZW0pXHJcblxyXG4vLyBjb25zdCByb290MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXYnKVxyXG5cclxuLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuLy8gYnV0dG9uLnRleHRDb250ZW50ID0gJzc3J1xyXG4vLyByb290Mi5hcHBlbmQoYnV0dG9uKVxyXG5cclxuLy8gY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKVxyXG5cclxuLy8g0L/QvtC70YPRh9Cw0LXQvCDRjdC70LXQvNC10L3RgtGLINC40LcgSFRNTFxyXG5jb25zdCB2b2x1bWVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJylcclxuY29uc3QgZm9yZXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmVzdC1idXR0b24nKVxyXG5jb25zdCByYWluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW4tYnV0dG9uJylcclxuY29uc3Qgb2NlYW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2NlYW4tYnV0dG9uJylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INC+0LHRitC10LrRgtGLINCw0YPQtNC40L5cclxuY29uc3QgZm9yZXN0QXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzJylcclxuY29uc3QgcmFpbkF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDMnKVxyXG5jb25zdCBvY2VhbkF1ZGlvID0gbmV3IEF1ZGlvKCcuL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wMycpXHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDQvNCw0YHRgdC40LIg0LjQtyDQstGB0LXRhSDQsNGD0LTQuNC+XHJcbmNvbnN0IGFsbEF1ZGlvID0gW3JhaW5BdWRpbywgb2NlYW5BdWRpbywgZm9yZXN0QXVkaW9dXHJcblxyXG4vLyDRgdC+0LfQtNCw0LXQvCDRhNGD0L3QutGG0LjRjiDQtNC70Y8g0L7RgdGC0LDQvdC+0LLQutC4INCy0YHQtdGFINCw0YPQtNC40L5cclxuY29uc3Qgc3RvcEFsbEF1ZGlvID0gKCkgPT4ge1xyXG4gIGFsbEF1ZGlvLmZvckVhY2goKGF1ZGlvKSA9PiB7XHJcbiAgICBhdWRpby5wYXVzZSgpXHJcbiAgfSlcclxufVxyXG5cclxuLy8g0YHQvtC30LTQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LTQu9GPINGD0YHRgtCw0L3QvtCy0LrQuCDQs9GA0L7QvNC60L7RgdGC0Lgg0LLRgdC10YUg0LDRg9C00LjQvlxyXG5jb25zdCBzZXRWb2x1bWVBbGxBdWRpbyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGFsbEF1ZGlvLmZvckVhY2goKGF1ZGlvKSA9PiB7XHJcbiAgICBhdWRpby52b2x1bWUgPSB2YWx1ZVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC00LvRjyDQstC+0YHQv9GA0L7QuNC30LLQtdC00LXQvdC40Y8g0LjQu9C4INC/0YDQuNC+0YHRgtCw0L3QvtCy0LrQuCDQsNGD0LTQuNC+XHJcbmNvbnN0IHBsYXlPclBhdXNlQXVkaW8gPSAoYXVkaW8sIGJ1dHRvbikgPT4ge1xyXG4gIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgIHN0b3BBbGxBdWRpbygpXHJcbiAgICBhdWRpby5wbGF5KClcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhdWRpby5wYXVzZSgpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICB9XHJcbn1cclxuXHJcbi8vINGB0L7Qt9C00LDQtdC8INGE0YPQvdC60YbQuNGOINC00LvRjyDRgdC80LXQvdGLINGE0L7QvdC+0LLQvtC5INC60LDRgNGC0LjQvdC60LhcclxuY29uc3QgY2hhbmdlQmFja2dyb3VuZEltYWdlID0gKGJ1dHRvbiwgaW1hZ2UpID0+IHtcclxuICAvLyDQodC90LjQvNCw0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgdC+INCy0YHQtdGFINC60L3QvtC/0L7QulxyXG4gIGZvcmVzdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIHJhaW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBvY2VhbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDQvdCwINCy0YvQsdGA0LDQvdC90YPRjiDQutC90L7Qv9C60YNcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQutCw0YDRgtC40L3QutGDINGE0L7QvdCwINC00LvRjyBib2R5XHJcbiAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2V9KWBcclxufVxyXG5cclxuLy8g0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINGA0LXQs9GD0LvRj9GC0L7RgNCwINCz0YDQvtC80LrQvtGB0YLQuFxyXG52b2x1bWVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgc2V0Vm9sdW1lQWxsQXVkaW8odm9sdW1lU2xpZGVyLnZhbHVlKVxyXG59KVxyXG5cclxuLy8g0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40Lkg0LTQu9GPINC60L3QvtC/0L7QuiDQsNGD0LTQuNC+XHJcbmZvcmVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBwbGF5T3JQYXVzZUF1ZGlvKGZvcmVzdEF1ZGlvLCBmb3Jlc3RCdXR0b24pXHJcbiAgY2hhbmdlQmFja2dyb3VuZEltYWdlKGZvcmVzdEJ1dHRvbiwgJy4vYXNzZXRzL3N1bW1lci1iZy5qcGcnKVxyXG59KVxyXG5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBwbGF5T3JQYXVzZUF1ZGlvKHJhaW5BdWRpbywgcmFpbkJ1dHRvbilcclxuICBjaGFuZ2VCYWNrZ3JvdW5kSW1hZ2UocmFpbkJ1dHRvbiwgJy4vYXNzZXRzL3JhaW55LWJnLmpwZycpXHJcbn0pXHJcblxyXG5vY2VhbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBwbGF5T3JQYXVzZUF1ZGlvKG9jZWFuQXVkaW8sIG9jZWFuQnV0dG9uKVxyXG4gIGNoYW5nZUJhY2tncm91bmRJbWFnZShvY2VhbkJ1dHRvbiwgJy4vYXNzZXRzL3dpbnRlci1iZy5qcGcnKVxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
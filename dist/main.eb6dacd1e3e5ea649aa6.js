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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./index.scss");


const volumeSlider = document.getElementById('volume')

const sunButton = document.getElementById('sun-button')
const rainButton = document.getElementById('rain-button')
const snowButton = document.getElementById('snow-button')

const sunIcon = document.getElementById('sun')
const rainIcon = document.getElementById('rain')
const snowIcon = document.getElementById('snow')

const urlSunIcon = "url('./assets/icons/sun.svg')"
const urlRainIcon = "url('./assets/icons/cloud-rain.svg')"
const urlSnowIcon = "url('./assets/icons/cloud-snow.svg')"
const urlPauseIcon = "url('./assets/icons/pause.svg')"

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
  rainIcon.style.backgroundImage = urlRainIcon
  snowIcon.style.backgroundImage = urlSnowIcon

  toggleCurrentIconOrPauseIcon(sunIcon, [urlPauseIcon, urlSunIcon])

  changeBackground(sunButton, './assets/summer-bg.jpg')
  playOrPauseAudio(sunAudio)
})

rainButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = urlSunIcon
  snowIcon.style.backgroundImage = urlSnowIcon

  toggleCurrentIconOrPauseIcon(rainIcon, [urlPauseIcon, urlRainIcon])

  changeBackground(rainButton, './assets/rainy-bg.jpg')
  playOrPauseAudio(rainAudio)
})

snowButton.addEventListener('click', () => {
  sunIcon.style.backgroundImage = urlSunIcon
  rainIcon.style.backgroundImage = urlRainIcon

  toggleCurrentIconOrPauseIcon(snowIcon, [urlPauseIcon, urlSnowIcon])

  changeBackground(snowButton, './assets/winter-bg.jpg')
  playOrPauseAudio(snowAudio)
})

const sunAudio = new Audio('./assets/sounds/summer.mp3')
const rainAudio = new Audio('./assets/sounds/rain.mp3')
const snowAudio = new Audio('./assets/sounds/winter.mp3')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYjZkYWNkMWUzZTVlYTY0OWFhNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LnNjc3M/YWIyZiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG5cclxuY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpXHJcblxyXG5jb25zdCBzdW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuLWJ1dHRvbicpXHJcbmNvbnN0IHJhaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbi1idXR0b24nKVxyXG5jb25zdCBzbm93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3ctYnV0dG9uJylcclxuXHJcbmNvbnN0IHN1bkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VuJylcclxuY29uc3QgcmFpbkljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbicpXHJcbmNvbnN0IHNub3dJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nub3cnKVxyXG5cclxuY29uc3QgdXJsU3VuSWNvbiA9IFwidXJsKCcuL2Fzc2V0cy9pY29ucy9zdW4uc3ZnJylcIlxyXG5jb25zdCB1cmxSYWluSWNvbiA9IFwidXJsKCcuL2Fzc2V0cy9pY29ucy9jbG91ZC1yYWluLnN2ZycpXCJcclxuY29uc3QgdXJsU25vd0ljb24gPSBcInVybCgnLi9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmcnKVwiXHJcbmNvbnN0IHVybFBhdXNlSWNvbiA9IFwidXJsKCcuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmcnKVwiXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9IChidXR0b24sIGltYWdlKSA9PiB7XHJcbiAgc3VuQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgcmFpbkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gIHNub3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZX0pYFxyXG59XHJcblxyXG5sZXQgaW5kZXggPSAwXHJcblxyXG5jb25zdCB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uID0gKGVsLCBhcnJUd29JbWFnZXMpID0+IHtcclxuICBpbmRleCA9IChpbmRleCArIDEpICUgYXJyVHdvSW1hZ2VzLmxlbmd0aFxyXG4gIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGFyclR3b0ltYWdlc1tpbmRleF1cclxufVxyXG5cclxuc3VuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHJhaW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybFJhaW5JY29uXHJcbiAgc25vd0ljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsU25vd0ljb25cclxuXHJcbiAgdG9nZ2xlQ3VycmVudEljb25PclBhdXNlSWNvbihzdW5JY29uLCBbdXJsUGF1c2VJY29uLCB1cmxTdW5JY29uXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChzdW5CdXR0b24sICcuL2Fzc2V0cy9zdW1tZXItYmcuanBnJylcclxuICBwbGF5T3JQYXVzZUF1ZGlvKHN1bkF1ZGlvKVxyXG59KVxyXG5cclxucmFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybFN1bkljb25cclxuICBzbm93SWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB1cmxTbm93SWNvblxyXG5cclxuICB0b2dnbGVDdXJyZW50SWNvbk9yUGF1c2VJY29uKHJhaW5JY29uLCBbdXJsUGF1c2VJY29uLCB1cmxSYWluSWNvbl0pXHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQocmFpbkJ1dHRvbiwgJy4vYXNzZXRzL3JhaW55LWJnLmpwZycpXHJcbiAgcGxheU9yUGF1c2VBdWRpbyhyYWluQXVkaW8pXHJcbn0pXHJcblxyXG5zbm93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHN1bkljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdXJsU3VuSWNvblxyXG4gIHJhaW5JY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybFJhaW5JY29uXHJcblxyXG4gIHRvZ2dsZUN1cnJlbnRJY29uT3JQYXVzZUljb24oc25vd0ljb24sIFt1cmxQYXVzZUljb24sIHVybFNub3dJY29uXSlcclxuXHJcbiAgY2hhbmdlQmFja2dyb3VuZChzbm93QnV0dG9uLCAnLi9hc3NldHMvd2ludGVyLWJnLmpwZycpXHJcbiAgcGxheU9yUGF1c2VBdWRpbyhzbm93QXVkaW8pXHJcbn0pXHJcblxyXG5jb25zdCBzdW5BdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvc291bmRzL3N1bW1lci5tcDMnKVxyXG5jb25zdCByYWluQXVkaW8gPSBuZXcgQXVkaW8oJy4vYXNzZXRzL3NvdW5kcy9yYWluLm1wMycpXHJcbmNvbnN0IHNub3dBdWRpbyA9IG5ldyBBdWRpbygnLi9hc3NldHMvc291bmRzL3dpbnRlci5tcDMnKVxyXG5cclxuY29uc3QgYWxsQXVkaW8gPSBbc3VuQXVkaW8sIHJhaW5BdWRpbywgc25vd0F1ZGlvXVxyXG5cclxuY29uc3Qgc3RvcEFsbEF1ZGlvID0gKCkgPT4gYWxsQXVkaW8uZm9yRWFjaCgoYXVkaW8pID0+IGF1ZGlvLnBhdXNlKCkpXHJcblxyXG5jb25zdCBzZXRWb2x1bWVBbGxBdWRpbyA9ICh2YWx1ZSkgPT5cclxuICBhbGxBdWRpby5mb3JFYWNoKChhdWRpbykgPT4gKGF1ZGlvLnZvbHVtZSA9IHZhbHVlKSlcclxuXHJcbmNvbnN0IHBsYXlPclBhdXNlQXVkaW8gPSAoYXVkaW8pID0+IHtcclxuICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICBzdG9wQWxsQXVkaW8oKVxyXG4gICAgYXVkaW8ucGxheSgpXHJcbiAgfSBlbHNlIHtcclxuICAgIGF1ZGlvLnBhdXNlKClcclxuICB9XHJcbn1cclxuXHJcbnZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+XHJcbiAgc2V0Vm9sdW1lQWxsQXVkaW8odm9sdW1lU2xpZGVyLnZhbHVlKVxyXG4pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
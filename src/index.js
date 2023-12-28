import data from './data'
import './index.scss'
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

data.forEach(renderItem)

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

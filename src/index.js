import './index.scss'

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

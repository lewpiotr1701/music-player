const musicContainer = document.querySelector('#music-container')
const playBtn = document.querySelector('#play')
const previousBtn = document.querySelector('#previous')
const nextBtn = document.querySelector('#next')

const audio = document.querySelector('audio')
const progress = document.querySelector('progress')
const progressContainer = document.querySelector('progress-container')

const title = document.querySelector('#title')
const coverImg = document.querySelector('#cover')

// Song and images titles
const songs = ['hey', 'summer', 'ukulele']

// Keep track of song
let songIdx = 2

// Initially load song details into DOM
loadSong(songs[songIdx])


// Event listeners
playBtn.addEventListener('click', () => {
  audio.paused ? playSong() : pauseSong()
})

previousBtn.addEventListener('click', previousSong)
nextBtn.addEventListener('click', nextSong)


// Update song details
function loadSong(song) {
  title.textContent = song
  audio.src = `music/${song}.mp3`
  coverImg.src = `images/${song}.jpg`
}

// Play song
function playSong() {
  musicContainer.classList.add('play')

  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play')

  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')

  audio.pause()
}

// Change to previous song
function previousSong() {
  songIdx--

  if (songIdx < 0) {
    songIdx = songs.length - 1
  }

  loadSong(songs[songIdx])

  playSong()
}

// Change to next song
function nextSong() {
  songIdx++

  if (songIdx > songs.length - 1) {
    songIdx = 0
  }

  loadSong(songs[songIdx])

  playSong()
}
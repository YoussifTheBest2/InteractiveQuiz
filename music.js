const audioSrc = "./Imgs/audio.mp3";
const volume = 0.2;
const loop = true;

const backgroundMusic = new Audio(audioSrc);
backgroundMusic.volume = volume;
backgroundMusic.loop = loop;

const savedTime = localStorage.getItem('audioTime');
if (savedTime) {
  backgroundMusic.currentTime = parseFloat(savedTime);
}

// Function to attempt to play audio
function tryToPlayMusic() {
  backgroundMusic.play().catch(error => {
    console.log("Autoplay failed:", error); 
  });
  backgroundMusic.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', backgroundMusic.currentTime);
  });
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', backgroundMusic.currentTime);
  });
}

// Function to handle user interaction
function onUserInteraction() {
  // Check if autoplay works or requires user interaction
  tryToPlayMusic();
  document.removeEventListener('click', onUserInteraction);  // Remove listener once interaction occurs
}

// Check if autoplay works
backgroundMusic.play().then(() => {
  // Autoplay worked, no user interaction needed
  backgroundMusic.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', backgroundMusic.currentTime);
  });
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', backgroundMusic.currentTime);
  });
}).catch(() => {
  // Autoplay failed, require user interaction to start the audio
  document.addEventListener('click', onUserInteraction); // Add listener for click event
});

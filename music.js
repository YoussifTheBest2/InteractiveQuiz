const audioSrc = "./Imgs/Back to School (Funk Edition).mp3";
const volume = 0.4;
const loop = true;

const backgroundMusic = new Audio(audioSrc);
backgroundMusic.volume = volume;
backgroundMusic.loop = loop;

const savedTime = localStorage.getItem('audioTime');
if (savedTime) {
  backgroundMusic.currentTime = parseFloat(savedTime);
}

backgroundMusic.play().catch(error => {
  console.log("Autoplay failed:", error); 
});

backgroundMusic.addEventListener('timeupdate', () => {
  localStorage.setItem('audioTime', backgroundMusic.currentTime);
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('audioTime', backgroundMusic.currentTime);
});

const audioSrc = "./Imgs/audio";
const volume = 0.4;
const loop = true;

const backgroundMusic = new Audio(audioSrc);
backgroundMusic.volume = volume;
backgroundMusic.loop = loop;
backgroundMusic.play()
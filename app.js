import { PlayList } from "./playlist.js"

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const before=document.getElementById('before')
const after=document.getElementById('after')



const albumImg = document.getElementById('album-img');
const songArtist = document.getElementById('song-artist');
const songTitle = document.getElementById('song-title');

let currentIndex = 0;
 
function loadSong(index) {
    const song = PlayList[index];
    audio.src = song.song;
    albumImg.src = song.img;
    songArtist.textContent = song.artist;
    songTitle.textContent = song.title;
    audio.play();
}
loadSong(currentIndex);

let indiceActual=0


play.addEventListener ('click',() => audio.play())

pause.addEventListener ('click',() => audio.pause())

rewind.addEventListener ('click',() => audio.currentTime -= 10)

forward.addEventListener ('click',() => audio.currentTime += 10)

stop.addEventListener('click', ()=> {
    audio.pause()
    audio.currentTime=0
})



after.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % PlayList.length; 
    loadSong(indiceActual)
    audio.play();
});

before.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + PlayList.length) % PlayList.length; 
    loadSong(indiceActual)
    audio.play();
});
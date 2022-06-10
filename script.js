console.log("Welcome to Spotify")

//initialize the veriables 
let songIndex = 0;
let audioElement = new Audio('songs/De_Daru.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let volumeSlider = document.getElementsByClassName("volumeSlider");
let songs = [
    { songName: "De_Daru ", filePath: "songs/De_Daru.mp3", coverPath: "covers/cover 01.jpg" },
    { songName: "Akhiyaan_Milaoon_Kabhi", filePath: "songs/Akhiyaan_Milaoon_Kabhi.mp3", coverPath: "covers/cover 02.jpg" },
    { songName: "Apni_Toh_Jaise_Taise", filePath: "songs/Apni_Toh_Jaise_Taise.mp3", coverPath: "covers/cover 03.jpg" },
    { songName: "Bahut_Jatate_Ho_Chah", filePath: "songs/Bahut_Jatate_Ho_Chah.mp3", coverPath: "covers/cover 04.jpg" },
    { songName: "Bin_Sajan_Jhoola_Jhulu", filePath: "songs/Bin_Sajan_Jhoola_Jhulu.mp3", coverPath: "covers/cover 05.jpg" },
    { songName: "De_de_pyaar_de", filePath: "songs/De_de_pyaar_de.mp3", coverPath: "covers/cover 06.jpg" },
    { songName: "dil_laga_liya_maine", filePath: "songs/dil_laga_liya_maine.mp3", coverPath: "covers/cover 05.jpg" },
    { songName: "Dil_Main_Hai_Pyar", filePath: "songs/Dil_Main_Hai_Pyar.mp3", coverPath: "covers/cover 04.jpg" },
    { songName: "Dil_Lagaane_Ki_Sazaa", filePath: "songs/Dil_Lagaane_Ki_Sazaa.mp3", coverPath: "covers/cover 03.jpg" },
    { songName: "Dil_Deewane_Ka_Dola", filePath: "songs/Dil_Deewane_Ka_Dola.mp3", coverPath: "covers/cover 02.jpg" }

]
songItems.forEach((element, i) => {
    console.log("Hello How are you?")
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        console.log("Play it")
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    //update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})
const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        console.log("Playing" + songIndex)
        console.log(songs[songIndex].filePath)
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementsByClassName("volumeSlider").foraudioVolume
    volumeSlider.addEventListener('input',function() {
    audio.volume = volumeSlider.value / 100;
},false);



console.log("Welcome to Spotify");
//initiate variables
let songindex = 0;
let audioElement = new Audio('music/WATEVA - What I Say (Thorne Remix) [NCS Release].mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = [
    {songName: "WATEVA - What I Say (Thorne Remix) [NCS Release]", filePath: "music/WATEVA - What I Say (Thorne Remix) [NCS Release].mp3", coverPath: "image/What I Say.jpg" },
    {songName: "WATEVA - What I Say (Thorne Remix) [NCS Release]", filePath: "music/Zeli - Sharks [NCS Release].mp3", coverPath: "image/Sharks.jpg" },
    {songName: "WATEVA - What I Say (Thorne Remix) [NCS Release]", filePath: "music/JOXION - LA VIBE [NCS Release].mp3", coverPath: "image/LA VIBE.jpg" }
]

//audioElement.play();

//Control play/pause
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-play-circle')
        masterplay.classList.remove('fa-pause-circle')
    }
})

//Update seek bar
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})



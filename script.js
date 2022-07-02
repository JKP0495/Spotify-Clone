let songnames = [
    { songname: "song-1", filepath: "/song/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "song-2", filepath: "/song/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "song-3", filepath: "/song/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "song-4", filepath: "/song/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "song-5", filepath: "/song/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "song-6", filepath: "/song/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "song-7", filepath: "/song/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "song-8", filepath: "/song/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "song-9", filepath: "/song/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "song-10", filepath: "/song/10.mp3", coverpath: "covers/10.jpg" }
]
let audioelement = new Audio('/song/1.mp3');
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let masterpause = document.getElementById('masterpause');
let myprogressbar = document.getElementById('myprogressbar');

masterplay.addEventListener('click', () => {
    masterpause.style.display = 'inline';
    masterplay.style.display = 'none';
    audioelement.play();
})
masterpause.addEventListener('click', () => {
    masterpause.style.display = 'none';
    masterplay.style.display = 'inline';
    audioelement.pause();
})

audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})
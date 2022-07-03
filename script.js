let songnames = [
    { songname: "Song-1", filepath: "/song/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Song-2", filepath: "/song/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Song-3", filepath: "/song/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Song-4", filepath: "/song/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Song-5", filepath: "/song/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Song-6", filepath: "/song/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Song-7", filepath: "/song/7.mp3", coverpath: "covers/7.jpg" },
    { songname: "Song-8", filepath: "/song/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Song-9", filepath: "/song/9.mp3", coverpath: "covers/9.jpg" },
    { songname: "Song-10", filepath: "/song/10.mp3", coverpath: "covers/10.jpg" }
]
let audioelement = new Audio('/song/1.mp3');
let songindex = 0;
let masterplay = document.getElementById('masterplay');
let masterpause = document.getElementById('masterpause');
let myprogressbar = document.getElementById('myprogressbar');
let songdetails= document.getElementsByClassName('songdetail');
let mastersong= document.getElementById('mastersong');
let mastercover= document.getElementById('mastercover');
let backward= document.getElementById('backward');
let forward= document.getElementById('forward');


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
forward.addEventListener('click',()=>{
    if(songindex!=10)
    songindex++;
    else songindex=1;
    mastercover.src=songnames[songindex-1].coverpath;
    mastersong.textContent=songnames[songindex-1].songname;
    audioelement.src=songnames[songindex-1].filepath;
    audioelement.currentTime=0;
    audioelement.play();
    masterpause.style.display = 'inline';
    masterplay.style.display = 'none';
})
backward.addEventListener('click',()=>{
    if(songindex!=1)
    songindex--;
    else songindex=10;
    mastercover.src=songnames[songindex-1].coverpath;
    mastersong.textContent=songnames[songindex-1].songname;
    audioelement.src=songnames[songindex-1].filepath;
    audioelement.currentTime=0;
    audioelement.play();
    masterpause.style.display = 'inline';
    masterplay.style.display = 'none';
})


audioelement.addEventListener('timeupdate', () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('click',()=>{
    audioelement.currentTime=((myprogressbar.value/100)*audioelement.duration);
})


Array.from(document.getElementsByClassName('play')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        songindex=e.target.id;
        mastercover.src=songnames[songindex-1].coverpath;
        mastersong.textContent=songnames[songindex-1].songname;
        audioelement.src=songnames[songindex-1].filepath;
        audioelement.currentTime=0;
        audioelement.play();
        masterpause.style.display = 'inline';
        masterplay.style.display = 'none';
    })
});
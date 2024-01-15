let Range = document.getElementById("range");
let Music = document.getElementById("music");
let ctrlIcon = document.getElementById("ctrlIcon");

Music.onloadedmetadata = function(){
    Range.max = Music.duration;
    Range.value = Music.currentTime;
}

ctrlIcon.addEventListener("click",function(){
    if(ctrlIcon.classList.contains("fa-pause")){
        Music.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }else{
        Music.play();        
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
});

if(Music.play()){
    setInterval(()=>{
        Range.value = Music.currentTime
    },500);
}

Range.onchange = function(){
    Music.play();
    Music.currentTime = Range.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}
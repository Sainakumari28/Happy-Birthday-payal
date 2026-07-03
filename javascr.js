let btn = document.getElementById("surpriseBtn");

let video = document.getElementById("bdayVdo");

btn.addEventListener("click",function() {
    video.style.display = "block";
    video.requestFullscreen();
    video.play();
});
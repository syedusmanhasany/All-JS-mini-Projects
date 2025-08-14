const btnEl = document.getElementById("btn")
const videoCon = document.querySelector(".video-opt")
const closeBtn = document.getElementById("close")
const videoEl = document.querySelector("video")


btnEl.addEventListener("click",(()=>{
    videoCon.classList.remove("active")
}))
closeBtn.addEventListener("click",()=>{
    videoCon.classList.add("active")
    videoEl.pause()
    videoEl.currentTime = 0;
})
const heroEl = document.getElementById("bg-image")

window.addEventListener("scroll",()=>{
    changeSize()
})

function changeSize(){
    heroEl.style.opacity = 1- window.pageYOffset/900;
    heroEl.style.backgroundSize = 160 - window.pageYOffset/10+"%";
    console.log(160-window.pageYOffset/10)
}
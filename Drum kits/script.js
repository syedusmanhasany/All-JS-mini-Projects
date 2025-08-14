const kits = ["crash","kick","snare","tom"];
const btnContainerEl = document.querySelector(".btn-container")
kits.forEach((kit)=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn")
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(./images/"+ kit +".png)"
    btnContainerEl.appendChild(btnEl)
    const audioEl = document.createElement("audio")
    audioEl.src = "./sound/" + kit + ".mp3";
    btnContainerEl.appendChild(audioEl)
    btnEl.addEventListener("click",()=>{
        audioEl.play()
    })
    window.addEventListener("keydown",(e)=>{
        if(e.key===kit.slice(0,1)){
            audioEl.play()
            btnEl.style.transform = "scale(.9)"
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)"
            },100)
        }
    })
})
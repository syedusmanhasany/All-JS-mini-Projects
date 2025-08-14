const containerEl = document.querySelector(".container")


window.addEventListener("mousemove",(event)=>{
    containerEl.innerHTML = `<div class="mouse-event">
        ${event.offsetX}
        <h4>Mouse X Prosition(px)</h4>
      </div>
      <div class="mouse-event">
        ${event.offsetY}
        <h4>Mouse Y Prosition(px)</h4>
      </div>`
})
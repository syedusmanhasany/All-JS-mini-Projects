const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (e)=>{
    const posX = e.pageX;
    const posY = e.pageY;
    const spanEl = document.createElement("span");
    spanEl.style.left= posX + "px";    
    spanEl.style.top= posY + "px";
    const size = Math.random()*100;
    spanEl.style.width= size + "px";    
    spanEl.style.height= size + "px";
    bodyEl.appendChild(spanEl);   
    setTimeout(()=>{
        spanEl.remove();
    },2000) 
})




const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("mouseover", (event) => {
     const x = event.offsetX;
    const y = event.offsetY;


    buttonEl.style.setProperty("--posX", x + "px");
    buttonEl.style.setProperty("--posY", y + "px");
});





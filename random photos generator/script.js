const imageContainer = document.querySelector(".images");
const buttonEl = document.querySelector(".btn");
let imgcount = 12;
buttonEl.addEventListener("click",()=>{
    loadImages();
})

function loadImages(){
    for(let i=1;i<=imgcount;i++){
    let createImageEl = document.createElement("img");
    createImageEl.src=`https://picsum.photos/200?random=${Math.floor(Math.random()*2000)}`;
    imageContainer.appendChild(createImageEl);
}
}
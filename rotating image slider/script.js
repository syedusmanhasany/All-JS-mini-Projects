const slider = document.querySelector(".container");
const nextbtn = document.getElementById("right")
const prevbtn = document.getElementById("left")

let x = 0
let time;

prevbtn.addEventListener("click",()=>{
    x = x+45;
    clearTimeout(time)
    sildeShow()
})
nextbtn.addEventListener("click",()=>{
    x = x-45;
    clearTimeout(time)
    sildeShow()
})


function sildeShow(){
    slider.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    time = setTimeout(()=>{
    x=x-45;    
    sildeShow()  
},3000)    
}

sildeShow()
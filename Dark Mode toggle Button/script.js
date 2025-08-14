const btn = document.querySelector("#btn");
const bodyEl = document.querySelector("body");

btn.checked = JSON.parse(localStorage.getItem("mode"))


function darkmode(){
if(btn.checked==true){
    bodyEl.style.backgroundColor = "Black";
}else{
    bodyEl.style.backgroundColor = "white";
    
}
}
darkmode()
btn.addEventListener("input",()=>{
    darkmode();
    saveMode()
})

function saveMode(){
    localStorage.setItem("mode",JSON.stringify(btn.checked));
}
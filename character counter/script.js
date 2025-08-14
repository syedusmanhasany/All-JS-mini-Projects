const textEl = document.getElementById("text");
const totalCountEl= document.getElementById("total-countNum");
const remainingCountEl= document.getElementById("remaining-countNum");

textEl.addEventListener("keyup",()=>{
    updatedCount();
})
updatedCount()
function updatedCount(){
    totalCountEl.innerText = textEl.value.length;
   remainingCountEl.innerText = textEl.getAttribute("maxLength") - textEl.value.length;
}
const containerEl = document.querySelector(".search-container");
const iconEl = document.querySelector(".search-icon");
const inputEl = document.querySelector(".input-txt")


iconEl.addEventListener("click",()=>{
    containerEl.classList.toggle("active-bar");
})
inputEl.addEventListener("input",()=>{
if(inputEl.value.length==0){
    
    inputEl.classList.remove("width")
    iconEl.classList.remove("display")
}else{
    iconEl.classList.add("display")
    inputEl.classList.add("width")
}
})

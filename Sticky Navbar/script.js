const navEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");

console.log(navEl.offsetHeight)
console.log(bottomEl.offsetTop)
const cal = bottomEl.offsetTop-navEl.offsetHeight-50;
console.log(cal)
window.addEventListener("scroll",()=>{
    if(window.scrollY> cal){
        navEl.classList.add("active");
    }else{
        navEl.classList.remove("active")
    }
})
const counterEl = document.querySelector(".counter")
const loadingbarEl = document.querySelector(".loading-bar-front");

index =0;


function loadingBar(){
    counterEl.innerText = index+"%";
    loadingbarEl.style.width = index+"%";
    
    index++;
    setTimeout(()=>{
        if(index<=100){
            loadingBar()
        }
    },30)
}
    loadingBar()
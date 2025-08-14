const counterEl = document.querySelectorAll(".counter")

counterEl.forEach((counterEl)=>{
    counterEl.innerText ="0";

iteration()
    function iteration(){
        let counterNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil/15;
        counterNum =Math.ceil(counterNum + increment);
   
    if(counterNum<dataCeil){
        counterEl.innerText = counterNum;
        setTimeout(()=>{
            iteration()
        },50)
    }else{
        counterEl.innerText = dataCeil;
    }
     }
})
const btnEl = document.getElementById("roll-button")

const diceEl = document.getElementById("dice")

const historyEl = document.getElementById("roll-history")

const list = [];


function diceRoll(){
    let diceVal = Math.ceil(Math.random()*6);
    diceEl.innerHTML = diceShape(diceVal);
    list.push(diceVal)
    listAdd()
}


function listAdd(){
    let listEl = ""
    for(i=0; i<list.length;i++){
        listEl = document.createElement("li")
        listEl.innerHTML = `Roll ${i+1}: <span>${diceShape(list[i])}</span>`;
        
    }
    historyEl.appendChild(listEl)
    
}


function diceShape(shape){
    switch(shape){
        case 1:
        return "&#9856;";
        break; 
        case 2:
        return "&#9857;";
        break; 
        case 3:
        return "&#9858;";
        break; 
        case 4:
        return "&#9859;";
        break; 
        case 5:
        return "&#9860;";
        break; 
        case 6:
        return "&#9861;";
        break; 
    }
}

btnEl.addEventListener("click",()=>{
    diceRoll()
    diceEl.classList.add("roll-animation");
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation")
    },1000)
})
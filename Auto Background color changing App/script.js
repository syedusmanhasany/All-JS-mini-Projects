const bodyEl = document.querySelector("body");

let hexCode = "#";
let coloDigits = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
console.log(coloDigits.length)
setInterval(()=>{
  
for(let i=1; i<7;i++){
        let colorNum = coloDigits[Math.floor(Math.random()*16)]
        // console.log(colorNum)
        hexCode += colorNum;
    } 
    console.log(hexCode)
    bodyEl.style.backgroundColor = hexCode; 
    hexCode ="#"
},1000)

const containerEl = document.querySelector(".container");


for(let i=1; i<=50; i++){
    const genEl = document.createElement("div");
    genEl.classList.add("color-container");
    containerEl.appendChild(genEl)
}
const containerElements = document.querySelectorAll(".color-container");

function changeColor(){
    containerElements.forEach((genEl)=>{
        let newColor = colorCodeGenerator();
        genEl.style.backgroundColor ="#"+ newColor;
        genEl.innerText ="#"+ newColor;
        console.log(newColor)
    })
}
changeColor()



function colorCodeGenerator(){
    let charactersContainer = "0123456789abcdef"
    let charactersContainerLenght = 17;
    let lenght = 6;
    let colorCode = "";
    for(let c = 1; c<=lenght;c++){
        let randomPicker = Math.floor(Math.random()*charactersContainerLenght);
        colorCode += charactersContainer.substring(randomPicker,randomPicker+1);
    }
    return colorCode;
}
colorCodeGenerator()
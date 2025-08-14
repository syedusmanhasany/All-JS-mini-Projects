const btnEl = document.getElementById("btn")
const resultEl = document.getElementById("bmi-result")
const commentEl = document.getElementById("weight-condition")


function calculateBMI(){
    const heightVal = document.getElementById("height").value/100
    const weightVal = document.getElementById("weight").value
    const BMI = weightVal/(heightVal*heightVal)

    resultEl.value = BMI;

    if(BMI<18.5){
        commentEl.innerText = "Under Weight";
    }else if(BMI>=18.5 && BMI<=24.9){
        commentEl.innerText = "Normal Weight";
    }else if(BMI>=30){
        commentEl.innerText = "Obesity"
    }else{
        alert("Error");
    }
}   

btnEl.addEventListener("click",calculateBMI)
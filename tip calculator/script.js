const billEl = document.getElementById("bill")
const tipEl = document.getElementById("tip")
const btnEl = document.getElementById("calculate")
const totalEl = document.getElementById("total")


function tipCalculation(){
    let billVal = billEl.value
    let tipVal = tipEl.value

    let calculate = billVal*(tipVal/100)
    let totalBill = +billVal+calculate
    totalEl.innerText = totalBill.toFixed(2)
}


btnEl.addEventListener("click",tipCalculation)
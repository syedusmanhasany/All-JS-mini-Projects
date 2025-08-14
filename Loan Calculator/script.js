
function calculateLoan(){
    const amountEl = document.getElementById("amount").value
    const interestEl = document.getElementById("interest").value
    const monthEl = document.getElementById("months").value
    const timeEl = document.getElementById("time-period")
   
   
   
    let interest = (amountEl *(interestEl* 0.01)) / monthEl

    let monthlyPay = (amountEl/monthEl+interest).toFixed(2);

    timeEl.innerHTML = `Monthly Payment: <span>${monthlyPay}</span>`;
}
calculateLoan()
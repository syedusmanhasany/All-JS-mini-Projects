const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

const newYear = new Date("Jan 1, 2026 00:00:00 ").getTime()

happyNewYear()

function happyNewYear(){
    const currentDate = new Date().getTime();

    const remainingTime = newYear - currentDate;

    const seconds = 1000;
    const minutes = seconds*60;
    const hour = minutes*60;
    const day = hour*24

    const d = Math.floor(remainingTime/day)
    const h = Math.floor((remainingTime%day)/hour);
    const m = Math.floor((remainingTime%hour)/minutes);
    const s = Math.floor((remainingTime%minutes)/seconds);

    dayEl.innerText = d
    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s
    setTimeout(()=>{
        happyNewYear()
    },1000)
}
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");
const timerEl =document.getElementById("timer")

let interval;
let totalTime = 13;
function updateTimer(){
    let minutes = Math.floor(totalTime/60);
    let seconds = totalTime%60
    let newTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    timerEl.innerHTML = newTime
}

function startTimer(){
    interval = setInterval(()=>{
        totalTime--
        updateTimer()
        if(totalTime===0){
            totalTime=1500;
            alert("Time's Up");
            clearInterval(interval)
            updateTimer()
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval)

}
function resetTimer(){
    clearInterval(interval)
    totalTime=1500
    updateTimer()
}
startbtn.addEventListener("click",startTimer)
stopbtn.addEventListener("click",stopTimer)
resetbtn.addEventListener("click",resetTimer)
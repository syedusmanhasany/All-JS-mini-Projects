const hour = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const amPM = document.getElementById("amPM")

clock()

function clock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM";
if(h>12){
    h = h-12;
    ampm = "PM"
}
h = h<10? "0"+h : h;
m = m<10? "0"+m : m;
s = s<10? "0"+s : s;
    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    amPM.innerText = ampm
setTimeout(()=>{
    clock()
},1000)
}

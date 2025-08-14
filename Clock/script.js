const hourEl = document.querySelector(".hour")
const minsEl = document.querySelector(".mins")
const secEl = document.querySelector(".sec")

function time(){
    const currentDate = new Date()
    const h = currentDate.getHours()
    const m = currentDate.getMinutes()
    const s = currentDate.getSeconds()

    const degHour = (h/12)*360;
    const degMinutes = (m/60)*360;
    const degSeconds = (s/60)*360;

    hourEl.style.transform = `rotate(${degHour}deg)`
    minsEl.style.transform = `rotate(${degMinutes}deg)`
    secEl.style.transform = `rotate(${degSeconds}deg)`
}
setInterval(time,1000)
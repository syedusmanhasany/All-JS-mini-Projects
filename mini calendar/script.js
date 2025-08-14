const monthEl=document.getElementById("monthID");
const dayEl=document.getElementById("dayID");
const dateEl=document.getElementById("dateID");
const yearEl=document.getElementById("yearID");

const currentDate = new Date()


monthEl.innerText = currentDate.toLocaleString("en",{month:"long"})
dayEl.innerText = currentDate.toLocaleString("en",{weekday:"long"});
dateEl.innerText =currentDate.getDate();
yearEl.innerText = currentDate.getFullYear();
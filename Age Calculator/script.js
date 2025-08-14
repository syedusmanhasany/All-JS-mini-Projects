const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("inp")
const ageEl = document.getElementById("Age")
function calculateAge(){
    const inputValue = inputEl.value
    if(inputValue === "" || new Date(inputValue)>new Date()){
        alert("insert a correct value")
    }else{
        const Age = getAge(inputValue)
        ageEl.innerText = `You are ${Age} ${Age>1 ? "Years":"year"} old`;
    }
}

function getAge(Age){
    const currentDate = new Date();
    const birthDate = new Date(Age);
    let age = currentDate.getFullYear() - birthDate.getFullYear()
    const month =  currentDate.getMonth()-birthDate.getMonth()
    // console.log(age)
    console.log(month)
    if(month < 0 || (month === "0" && currentDate.getDate() > birthDate.getDate()) ){
        age--
    }
    return age;
}



btnEl.addEventListener("click",calculateAge)
inputEl.addEventListener("keypress",((e)=>{
    if(e.key==="Enter"){
        calculateAge()
    }
}))
const addBtnEl =document.getElementById("add")
const inpEl =document.getElementById("input")
const ulEl = document.getElementById("todo")

function addTodoList(){
    let inputVal = inpEl.value
    if(inputVal===""){
        alert("Enter your task")
    }else{
     
   listEl = document.createElement("li")
    listEl.innerHTML = `${inputVal} <div><i id="edit" class="fa-solid fa-pen"></i><i id="bin" class="fa-solid fa-trash"></i></div>`
    ulEl.appendChild(listEl)
    inpEl.value = ""   
    }
    
}
ulEl.addEventListener("click",(e)=>{
    console.log(e.target.id)
    if(e.target.id == "bin"){
        let liEl = e.target.closest("li");
        liEl.classList.add("active")
    }else if(e.target.id=="edit"){
        let txt = e.target.closest("li")
        let txt1 = txt.textContent
        inpEl.value = txt1
        txt.classList.add("active")
    }
})

addBtnEl.addEventListener("click",addTodoList)
inpEl.addEventListener("keydown",(e)=>{
    console.log(e.key)
    if(e.key == "Enter"){
        addTodoList()
    }
})
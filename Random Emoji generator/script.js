const btnEl = document.querySelector(".btn")
const nameEl = document.querySelector(".emoji-name")

const arr = [];

async function callAPI(){
    const response = await fetch("https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1")
    const data = await response.json();
    console.log(data)


    for(let i=0; i<1500;i++){
        arr.push({
            emoji:data[i].character,
            emojiName:data[i].unicodeName,
        });
    }
}
callAPI()



btnEl.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random()*1500);

    btnEl.innerText = arr[randomNumber].emoji
    nameEl.innerText = arr[randomNumber].emojiName

})
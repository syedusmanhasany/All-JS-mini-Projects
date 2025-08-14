const nameEl = document.querySelector("h5");
const imageEl = document.querySelector("img");
const textEl = document.querySelector("p");
const testimonialSlider = [
    {
        name: "Robert Shakoor",
        pictureURL:"./user1.avif",
        text:"I would recommend SUH solutions for anyone trying to get the word out about their business. It has saved me so much time!"
    },
    {
        name: "Fransisco lala",
        pictureURL:"./user2.jpg",
        text:"Working with SUH Solutions has been a game-changer for our online presence. Their team is professional, responsive, and truly understands how to deliver results."
    },
    {
        name: "Kabir jonathan",
        pictureURL:"./user3.jpg",
        text:"SUH Solutions helped me build a stunning website in no time. The process was smooth, and their attention to detail was exactly what I needed to grow my brand."
    }
]
let index = 0;
callTestimonial()

function callTestimonial(){
    const {name,pictureURL,text} = testimonialSlider[index];
    nameEl.innerText = name;
    imageEl.src = pictureURL;
    textEl.innerText = text;
    index++;
    if(index==testimonialSlider.length){
        index=0;
    }
    setTimeout(()=>{
        callTestimonial();
    },5000)

}
const headingEL = document.querySelector(".container");

const wordsArr = ["Web Developer", "Web Designer", "Backend Developer", "Mobile App Developer", "Instructor"];
let arrIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function updateWords() {
    const currentWord = wordsArr[arrIndex];
    const typingSpeed = isDeleting ? 50 : 100; // faster when deleting

    headingEL.innerHTML = `<h1>I am ${currentWord.slice(0, 1) === "I" ? "an" : "a"}<br> <p>${currentWord.slice(0, characterIndex)}</p></h1>`;

    if (!isDeleting && characterIndex < currentWord.length) {
        characterIndex++;
    } 
    else if (isDeleting && characterIndex > 0) {
        characterIndex--;
    }
    else if (!isDeleting && characterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(updateWords, 1000); // pause before deleting
        return;
    }
    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        arrIndex = (arrIndex + 1) % wordsArr.length;
    }

    setTimeout(updateWords, typingSpeed);
}

updateWords();

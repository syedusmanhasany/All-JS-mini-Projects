const firsConEl = document.querySelector(".container")
const addNotes = document.getElementById("add")
const ulListEl = document.getElementById("ulList")

const secConEl = document.querySelector(".secContainer")
const headingInpEl = document.getElementById("heading");
const notesInpEl = document.getElementById("notes");
const submitBtn = document.getElementById("done");

let editIndex = null;
const notesArr = [];

const takeNotes = () => {
    let headingVal = headingInpEl.value.trim();
    let notesVal = notesInpEl.value.trim();

    if (headingVal === "" || notesVal === "") {
        alert("Enter something in the field");
        return;
    }

    if (editIndex !== null) {
        notesArr[editIndex].heading = headingVal;
        notesArr[editIndex].notes = notesVal;
        editIndex = null;
    } else {
        notesArr.push({ heading: headingVal, notes: notesVal });
    }

    headingInpEl.value = "";
    notesInpEl.value = "";

    renderNotes();
    viewNotes();
};

const renderNotes = () => {
    ulListEl.innerHTML = "";
    notesArr.forEach((note, index) => {
        let listEl = document.createElement("li");
        listEl.innerHTML = `
            <span class="note-title">${note.heading}</span>
            <div class="icons">
                <i class="fa-solid fa-pen edit" title="Edit"></i>
                <i class="fa-solid fa-trash bin" title="Delete"></i>
            </div>
        `;
        ulListEl.appendChild(listEl);

        listEl.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit") || e.target.classList.contains("bin")) {
                return;
            }
            view(index);
        });

        listEl.querySelector(".edit").addEventListener("click", () => edit(index));
        listEl.querySelector(".bin").addEventListener("click", () => remove(index));
    });
};

const edit = (index) => {
    editIndex = index;
    headingInpEl.value = notesArr[index].heading;
    notesInpEl.value = notesArr[index].notes;

    firsConEl.classList.add("display");
    secConEl.classList.remove("display");
};

const remove = (index) => {
    notesArr.splice(index, 1);
    renderNotes();
};

const view = (index) => {
    alert(
        `Heading: ${notesArr[index].heading}\n\nNote: ${notesArr[index].notes}`
    );
};

const writeNotes = () => {
    firsConEl.classList.add("display");
    secConEl.classList.remove("display");
};

const viewNotes = () => {
    secConEl.classList.add("display");
    firsConEl.classList.remove("display");
};

addNotes.addEventListener("click", writeNotes);
submitBtn.addEventListener("click", takeNotes);

renderNotes();

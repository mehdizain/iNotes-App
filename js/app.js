showNotes();
let a = document.getElementById("addBtn");
a.addEventListener("click", function (e) {
    let txt = document.getElementById("newNoteText");
    let notes = localStorage.getItem("notes");
    let notesObj = [];
    if (txt.value != "") {
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(txt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        txt.value = "";
        showNotes();
    }
})
//displays notes from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    let html = "";
    let notesObj = [];
    if (notes == null) {
        notesObj = [];
        html = `<div class="alert alert-warning" role="alert">
  No notes added yet!<br> Click on Add Note button to add notes!
</div>
`;
        let notesContainer = document.getElementById("notes");
        notesContainer.innerHTML = html;
    }
    else {
        notesObj = JSON.parse(notes);
        html = `<h3>Your Notes</h3>`
        notesObj.forEach(function (element, index) {
            html += `<div class="notecard my-2 mx-2" style="width: 14rem;">
                <div class="card-body">
                    <p class="card-text">${element}</p>
                    <button id="${index}"class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>`;
        })
        let notesContainer = document.getElementById("notes");
        notesContainer.innerHTML = html;
    }
}
//deletes from local storage
function deleteNote(index) {
    console.log("Deleting index", index);
    let notes = localStorage.getItem("notes");
    let notesObj = JSON.parse(notes);
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    if (notesObj.length == 0) {
        localStorage.removeItem("notes");
    }
    showNotes();
}

let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("input", function () {
    //this returns each Class of the notecard. containing all <div> and the <p> tag of paragraph
    let noteCard = document.getElementsByClassName("notecard");
    //here each 'element' ranges from <div> tags to <p> tags
    Array.from(noteCard).forEach(function (element) {
        //[0] because we need the first instance of the <p> tags
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(searchBtn.value))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })
})

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
        notesObj.forEach(function (element, index) {
            html += `<div class="card my-2 mx-2" style="width: 14rem;">
                <div class="card-body">
                    <p class="card-text">${element}</p>
                    <a class="btn btn-primary">Delete Note</a>
                </div>
            </div>`;
        })
        let notesContainer = document.getElementById("notes");
        notesContainer.innerHTML = html;
    }
}
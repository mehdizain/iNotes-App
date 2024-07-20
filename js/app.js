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
        console.log(txt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        txt.value = "";
    }
})


const message = function () {
    let notes = localStorage.getItem('notes');
    notes === null ? notesObj = [] : notesObj = JSON.parse(notes);
}


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {

    let addText = document.getElementById('addText');
    message();

    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';
    console.log(notesObj);
    showNotes();
});

const showNotes = function () {
    message();

    let html = '';
    notesObj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deleteNote(this.index)" class="btn btn-primary">Delete Notes</button>
        </div>
      </div>`
    });

    let notesElm = document.getElementById('notes');
    notesObj.length != 0 ? notesElm.innerHTML = html :
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add Notes.`;
}

const deleteNote = function (index) {
    message();

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


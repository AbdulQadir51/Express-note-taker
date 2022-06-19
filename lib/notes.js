const fs = require('fs');
const path = require('path');


filterById = (Id, notes) => {
    const result = notes.filter(note => note.id === parseInt(Id));
    if (result.length > 0) {
        return result[0]
    }
    return []
}



function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }

    return true;
}

createNewNote = (body, notesArray) => {
    let notes = notesArray
    const note = body
    note.id = Date.now()
    notes.push(note);
    fs.writeFileSync(
        "./db/db.json",
        JSON.stringify(notes, null, 2)
    );
    return note;
}

deleteNote = (id, notesArray) => {
    const notes = notesArray
    const index = notes.findIndex(n => n.id === parseInt(id));

    if (index > -1) {
        notes.splice(index, 1); // 2nd parameter means remove one item only
        fs.writeFileSync(
            "./db/db.json",
            JSON.stringify(notes, null, 2)
        );
        return "Deleted!";
    }
    return "not found";


}

module.exports = {
    filterById,
    createNewNote,
    validateNotes,
    deleteNote
}
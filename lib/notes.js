const fs = require('fs');
const path = require('path');

//To DELETE a note using its ID 
function deleteById(id, notesArray) {
    const requiredIndex = notesArray.findIndex(el => {
        return el.id === String(id);
    });
    if (requiredIndex === -1){
        return false; 
    };

    notesArray.splice(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
    ); 
    return notesArray; 
}

//To GET a specific note 
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result; 
}

//To CREATE a new note 
function createNewNote(body, notesArray){
    const note = body; 
    notesArray.push(note);
    fs.writeFileSync (path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note; 
};

//Validates a new note 
function validateNote(note){
    if(!note.title || typeof note.title !== 'string'){
        return false; 
    }
    if(!note.text || typeof note.text !== 'string'){
        return false; 
    }
    if(!note.id || typeof note.id !== 'string'){
        return false; 
    }
}

module.exports = {
    deleteById, 
    findById, 
    createNewNote, 
    validateNote
}; 
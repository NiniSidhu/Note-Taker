const router = require ('express').Router(); 

const { deleteById, findById, createNewNote, validNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

//To GET all notes 
router.get('/notes', (req, res) => {
    res.json(notes);
});

//To GET a single note 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

//To POST a new note 
router.post('/notes', (req,res) => {
    req.body.id = Date.now().toString(); // Assigns today's date as ID of the note 
    
    //Checking for the format of the note 
    if (!validateNote(req.body)){
        res.status(400).send('The note is not in the correct format!');
    }else{
        const note = createNewNote(req.body, notes); 
        console.log(note);
        res.json(note);
    }
});

//To DELETE a note 
router.delete('/notes/:id', (req, res) => {
    const note = deleteById(req.params.id, notes); 
    res.json(note);
});

//Exports the file
module.exports = router; 
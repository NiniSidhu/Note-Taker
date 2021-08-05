const path = require('path');
const router = require('express').Router(); 

//Returns the Index HTML page routing to the root 
router('/', (req, res) => {
    res.sendFile(path.json(__dirname, '../../public/index.html'));
}); 

//Returns the ADD HTML page routing 
router('/notes', (req, res) => {
    res.sendFile(path.json(__dirname, '../../public/notes.html'));
});

//Exports the file 
module.exports = router; 
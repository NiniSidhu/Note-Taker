const path = require('path');
const router = require('express').Router(); 

//Returns the Index HTML page routing to the root 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 

//Returns the ADD HTML page routing 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//Exports the file 
module.exports = router; 
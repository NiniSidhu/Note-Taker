//Author: Nayandeep Sidhu 
// Date Created: August 04, 2021

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const { notes } = require('./db/db.json');

//Express function that will deploy the function on heroku or local host 3001. 
const PORT = process.env.PORT || 3001; 
//Initiates express 
const app = express (); 
//parse incoming string data or array data 
app.use(express.urlencoded({ extended: true }));
//To parse in data we get from the user 
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes); 
//To load stylesheet and JS files of the HTMLS 
app.use(express.static('public'));

//Listens to the port and displayes the current port of the local host
app.listen (PORT, () => {
    console.log(`API server is not on port ${PORT}`);
}); 
// Create main entrypoint for our application 

const express = require('express'); // LOADS Express Module 
const app     = express(); 
const router  = express.Router(); // PERFORMS routing function 

const path    = __dirname + '/views/'; // DEFINES Base Dire where view will be
const port    = 8080; // BINDS app to port number 

// Next define router 
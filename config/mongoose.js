//require mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TODO-APP');

// checking the connection 
var db = mongoose.connection;

//if their is an error
db.on('error', console.error.bind(console, 'connection error:'));


//for successful connection 
db.once('open', function() {
    console.log('Successfully connected to the database');
});



const express = require('express');
const app = express();

// to connect to database
const db = require("./config/mongoose");

// for defining assets
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//folder for static files
app.use(express.static(path.join(__dirname, 'assets')));


// for using avatars
//  the directory of index joined with uploads which means codeial/uploads is available in uploads
// make the uploads path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

const port = process.env.PORT || 8000;

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//we need to tell the app to use the exported router
app.use('/', require('./routes'));

//to make the app listen
app.listen(port, function(err){
    if(err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});

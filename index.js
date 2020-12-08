
const express = require('express');
const app = express();

// to connect to database
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8000;


//to make the app listen
app.listen(port, function(err){
    if(err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});

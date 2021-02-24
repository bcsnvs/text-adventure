const express = require("express");
const fs = require("fs");
const port = 3000;
const Chance = require("chance");


// App handle
const app = express();


app.get("/", function(request, response){







});


//Start listening
app.listen(port, function() {
    console.log("App listening on port " + port)
});
const express = require("express");
const fs = require("fs");
const port = 3000;
const Chance = require("chance");


// App handle
const app = express();


app.get("/", function(request, response){

    const fileContents = fs.readFileSync("./templates/intro.html", "utf8");

    response.send(fileContents);



});


//Start listening
app.listen(port, function() {
    console.log("App listening on port " + port)
});
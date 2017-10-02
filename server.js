var http = require("http");
var fs = require("fs");
var PORT = 8080;

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up express app

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

/*
var characteristics = [
    {
        "name": "Princess",
        "scores": [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    },
    {
        "name": "Prince",
        "scores": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
];




// Basic route that sends the user first to the AJAX Page

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


// Get all reservations
app.get("/all", function (req, res) {
    res.json(characteristics);
});
*/



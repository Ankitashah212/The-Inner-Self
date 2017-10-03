var http = require("http");
var fs = require("fs");
var PORT = 8080;

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Set up express app

var app = express();
var PORT = process.env.PORT || 3000;

//make the port dynamic

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);




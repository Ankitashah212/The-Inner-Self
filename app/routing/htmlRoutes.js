var http = require("http");
var fs = require("fs");
var PORT = 8080;
var server = http.createServer(handleRequest);
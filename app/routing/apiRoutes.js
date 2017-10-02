//var load data
var chars = require('../data/BenchmarkChar.js');
var path = require('path');


// ROUTING

module.exports = function(app){

// API GET Requests 
    
    app.get('/api/char', function(req, res){

        res.json(chars);

        console.log(chars);

    });

// API Requests
    
    app.post('/api/char', function(req, res){

        var newChar = req.body;
      
        console.log(newChar.name);
        console.log(newChar);
        console.log(newChar.qualities);
        
        chars.push(req.body);
        res.json(chars[0]);
        
    });

};

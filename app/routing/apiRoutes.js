//var load data
var chars = require('../data/BenchmarkChar.js');
var path = require('path');


// ROUTING

module.exports = function(app){

// API GET Requests 
    
    app.get('/api/char', function(req, res){

        res.json(chars);

    });

// API Requests
    
    app.post('/api/char', function(req, res){

        console.log('req.body.name: ' + req.body.name);
        console.log('req.body.scores: ' + req.body.scores);

    

    });

};

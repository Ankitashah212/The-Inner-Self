//var load data
var chars = require('../data/benchmarkChar.js');
var path = require('path');


// ROUTING

module.exports = function (app) {

    // API GET Requests 

    app.get('/api/char', function (req, res) {

        res.json(chars);

        //console.log(chars);

    });

    // API Requests

    app.post('/api/char', function (req, res) {

        var newChar = req.body;

       // console.log(newChar.qualities.length);

        //fun name
        var myDifferences = [];

        //initializing the array with 0 differences
        for (let q = 0; q < chars.length; q++) {
            myDifferences[q] = 0;
        }
       // console.log(chars.length);

        //for each input benchmark (question)
        for (let i = 0; i < newChar.qualities.length; i++) {
            //loop thru each villains answer for that particular field
            for (let j = 0; j < chars.length; j++) {
                //push differences in array mydifferences
                //the order of difference of a character will be same as they are defined in chars array.
                var diff = Math.abs(newChar.qualities[i] - chars[j].scores[i])
                diff = diff + myDifferences[j];
                myDifferences.splice(j, 1);
                myDifferences.splice(j, 0, diff);

            }

        }
        console.log(myDifferences);
        var winner = 0;
        var currScore = 50;
        //going thru array to find out the lowest score
        for (let p = 0; p < myDifferences.length; p++) {

            if (myDifferences[p] < currScore) {
                currScore = myDifferences[p];
                winner = p;
            }
        }

        res.json(chars[winner]);

    });

};

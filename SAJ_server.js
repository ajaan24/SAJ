var express = require('express');
var app = express();
var port = 3000;

var userNames = [];
var userScoresHard = [];
var userScoresEasy = [];
var userIDs = [];

var userID = 0;

app.post('/post', (req) => {
    var z = JSON.parse(req.query['data']);

    userNames[userID] = z['name'];
    userScoresHard[userID] = z['userScoreHard'];
    userScoresEasy[userID] = z['userScoreEasy'];
    userIDs[userID] = userID;

    console.log(userNames);
    console.log(userScoresHard);
    console.log(userScoresEasy);
    console.log(userIDs);
    userID++;
});

app.get('/', (req,res) =>{
    res.header("Access-Control-Allow-Origin", "*");

    var jsontext = JSON.stringify({
        'userNames': userNames,
        'userScoresHard': userScoresHard,
        'userScoresEasy': userScoresEasy,
        'userIDs':userIDs
    });

    res.send(jsontext);

    console.log(jsontext);
});

app.listen(port, function(){
    console.log("Server is running! (listening on port " + port + ")");
})

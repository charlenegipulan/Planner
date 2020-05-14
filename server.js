var fs = require('fs');
var data = fs.readFileSync('data.json');
var projectList = JSON.parse(data);

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/projectList', function(req, res) {
    console.log(res)
    console.log('i recieved a get request');


    res.json(projectList);
    
});


app.listen(3000);
console.log("Server running on port 3000");
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/projectlist', function(req, res) {
    console.log('i recieved a get request');

    project1 = {
        name: 'Online Store'
    }

    project2 = {
        name: 'Youtube videos'
    }

    var projectList = [project1, project2];
    res.json(projectList);
});


app.listen(3000);
console.log("Server running on port 3000");
var fs = require('fs');
var data = fs.readFileSync('data.json');
var projectList = JSON.parse(data);

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//gets all projects
app.get('/projectList', (req, res) => res.json(projectList));

//get single project
app.get('/projectList/:id', function(req, res) {
    res.json(projectList.filter(project => project.id === parseInt(req.params.id)));
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
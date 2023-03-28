var express = require('express');

var PORT = 8080;

var app = express();

app.get('/', function (req, res){
    res.sendfile('/src/index.html');
});

app.listen(PORT);
console.log('Running on port ' + PORT);

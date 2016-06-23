var express = require('express');
var app = express();

app.get('/hi', function (req, res) {
    res.send('hi there');
});

app.listen(3000, function () {
    console.log('Listening...');
});
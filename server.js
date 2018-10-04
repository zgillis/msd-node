const express = require('express');
const app = express();
const port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function(req, res) {
    res.send('Hello yeet! This is a Node webserver app using express.');
});

app.listen(port, function() {
    console.log('App listening on port ' + port + '.');
});
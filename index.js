const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.get('/', function(req, resp){
resp.send('This is a test.')
});


app.post('/submit', (req, res) => {
    res.send('This is a post API.');
})

const server = app.listen(2000, () => {
const host = server.address().address;
const port = server.address().port;
console.log('Example app listening at http://%$:%$', host, port );

});

//mongoose.connect('mongodb://localhost/playground')
//  .then(() => {console.log('connected to mongo ... ');})
//  .catch((err) => {console.error("error occures")})



var db = require('./db');
var Boek = require('./boeken');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json({ extended: true }));
app.use((req, res, next) => {
  console.log('Request bodyters: ' + JSON.stringify(req.body));
  console.log('Request Body: ' + JSON.stringify(req.body));
  next();
});

app.put('/api/boeken', (req, res) => {
  Boek.findById(req.body._id, (err, boek) => {
    var body = req.body;
    boek.titel = body.titel;
    boek.auteur = body.auteur;
    boek.isbn = body.isbn;

    boek.save((err, saved) => (err ? res.send(err) : res.json(saved)));
  });
});

app.listen(3000, () => console.log('PUT-Server is listening on port 3000'));

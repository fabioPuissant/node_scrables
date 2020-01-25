var db = require('./db');
var Boek = require('./boeken');

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json({ extended: true }));

app.get('/api/boeken', (req, res) => {
  Boek.find((err, boeken) => (err ? res.send(err) : res.json(boeken)));
});

app.get('/api/boeken/:auteur', (req, res) => {
  console.log('Route params: ' + JSON.stringify(req.params));
  Boek.find({ auteur: req.params.auteur }, (err, found) =>
    err ? res.send(err) : res.json(found)
  );
});

app.listen(3000, () => console.log('Server listening on port 3000'));

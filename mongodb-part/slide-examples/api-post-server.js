// Mongo Set-Up
var db = require('./db');
var Boek = require('./boeken');

// API Server Set-Up
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json({ extended: true }));
app.get('/api', (req, res) => {
  res.json({ gebruik: 'Voer een GET of een POST -call uit naar /boeken' });
});

//Post
app.post('/api/boeken', (req, res) => {
  const boek = new Boek({
    titel: req.body.titel,
    auteur: req.body.auteur,
    isbn: req.body.isbn
  });
  console.log(`REQUEST BODY: ${JSON.stringify(req.body)}`);

  boek.save((err, boek) => {
    if (err) {
      res.send(err);
    }
    res.json(boek);
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));

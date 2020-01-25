var db = require('./db');
var Boek = require('./boeken');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({ extended: true }));

app.delete('/api/boeken/:id', (req, res, next) => {
  console.log('Request paramfor id: ' + req.params.id);
  Boek.remove({ _id: req.params.id }, (err, removed) => {
    err ? next(err) : res.json(removed);
  });
});

app.listen(3000);

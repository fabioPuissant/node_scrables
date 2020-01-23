var express = require('express');
var app = express();
var _ = require('underscore');

// JSON objects
var boeken = require('./boeken.json');
var auteurs = require('./auteurs.json');

app.get('/api/boeken', (req, res) => res.json(boeken));
app.get('/api/auteurs', (req, res) => res.json(auteurs));
app.get('/', (req, res) => {
  var msg = '<h1>Express API</h1>';
  msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
  msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
  res.send(msg);
});

app.get('/api/boeken/:id', (req, res) => {
  var idparam = req.params.id;
  console.log(`Found the id of ${idparam} in the routing parameters.`);

  var found = boeken.filter(boek => boek.id == idparam);
  res.json(found);
});

app.listen(3000);

console.log('Simple express API running on port 3000...');

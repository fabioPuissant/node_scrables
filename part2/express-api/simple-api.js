var express = require('express');
var app = express();
var _ = require('underscore');

// JSON objects
var boeken = require('./boeken.json');
var auteurs = require('./auteurs.json');

// Statische bestanden
app.use(express.static(__dirname + '/public'));

// Middleware
app.use((req, res, next) => {
  console.log('Requested file: ', req.url);
  next();
});

//GET request
app.get('/api/boeken', (req, res) => res.json(boeken));
app.get('/api/auteurs', (req, res) => res.json(auteurs));
app.get('/', (req, res) => {
  var msg = '<h1>Express API</h1>';
  msg += '<p>Gebruik \\api\\auteurs voor een lijst met auteurs.</p>';
  msg += '<p>Gebruik \\api\\boeken voor een lijst met boeken.</p>';
  res.send(msg);
});
// Get met parameter
app.get('/api/boeken/:id', (req, res) => {
  var idparam = req.params.id;
  console.log(`Found the id of ${idparam} in the routing parameters.`);

  var found = boeken.filter(boek => boek.id == idparam);
  res.json(found);
});

// POST

// Middleware laden voor het parsen van JSON in het request
var bodyParser = require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// POst reauest verwerken
var user = {};
app.post('/post', (req, resp) => {
  console.log(req.body);
  user.username = req.body.username;
  user.email = req.body.email;

  // Echo het user object terug nqqr de client...
  resp.json(user);
});

app.listen(3000);

console.log('Simple express API running on port 3000...');

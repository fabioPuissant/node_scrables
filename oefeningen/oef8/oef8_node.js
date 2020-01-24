var routes = require('./routes');
var express = require('express');
var app = express();
var heroes = require('./heroes.json');

var _ = require('underscore');

app.use(express.static(__dirname + '/public'));
app.use('/api', routes);

var bodyParser = require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  bodyParser.json({
    extended: true
  })
);

app.post('/heroes', (req, res) => {
  console.log(`${req.body}`);
  var character = {};
  const nextId = _.max(heroes, 'id').id + 1;
  character.id = nextId;
  character.name = req.body.name;
  character.class = req.body.class;
  character.difficulty = req.body.difficulty;
  character.dps = req.body.dps;
  character.abilities = req.body.abilities;
  character.avatar = req.body.avatar;
  res.json(character);
});

app.listen(3000, () => console.log('Listening on port 3000.'));

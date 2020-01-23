var express = require('express');
var app = express();

var personJson = {
  firstname: 'Fabio',
  lastname: 'Puissant'
};

app.get('/json', (req, res) => {
  res.json(personJson);
});

app.get('/', (req, res) => {
  res.send('Home route');
});

app.listen(3000);

console.log('Example JSON-server is running on port 3000!');

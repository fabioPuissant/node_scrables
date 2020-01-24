var express = require('express');
var app = express();

var person = {
  voornaam: 'Peter',
  achternaam: 'Kassenaar',
  email: 'info@kassenaar.com'
};

app.use((req, res) => res.json(person));

app.listen(3000, () => console.log('Server is listening on port 3000!'));

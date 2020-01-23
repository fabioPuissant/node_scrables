var express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Hello fabio'));

app.listen(3000);
console.log('Express is listening on port 3000');

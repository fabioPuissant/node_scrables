var express = require('express');
var app = express();
var routes = require('./routes');

app.use('/api', routes);

app.listen(3000, () => console.log('Listening on port 3000'));

var mongoose = require('mongoose');

var db = mongoose.connect(
  'mongodb://localhost/h13',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected with Mongodb Cars database')
);

module.exports = db;

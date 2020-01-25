var mongoose = require('mongoose');

var db = mongoose.connect(
  'mongodb://localhost/boeken',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected with boeken db in Mongo...')
);

module.exports = db;

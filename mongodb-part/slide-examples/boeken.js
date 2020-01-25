var mongoose = require('mongoose');

var boekSchema = mongoose.Schema({
  titel: { type: String, required: true },
  auteur: { type: String, required: true },
  isbn: { type: String, required: true },
  date: { type: String, required: true, default: Date.now }
});

var Boek = mongoose.model('Boek', boekSchema);
module.exports = Boek;

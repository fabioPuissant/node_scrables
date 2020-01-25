var mongoose = require('mongoose');
var carSchema = mongoose.Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  wiki: { type: String, required: false }
});

var Car = mongoose.model('car', carSchema);

module.exports = Car;

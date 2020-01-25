var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var getRoutes = require('./routes/get-routes');
var db = require('./db');
var Car = require('./models/cars');

app.use(bodyParser.json({ extended: true }));

app.use((req, res, next) => {
  console.log(`method: ${req.method}`);
  req.params
    ? console.log(`Request params: ${JSON.stringify(req.params)}`)
    : null;
  req.body ? console.log(`Request body: ${JSON.stringify(req.body)}`) : null;
  next();
});

// CREATE
app.post('/api/cars', (req, res) => {
  var body = req.body;
  var car = new Car({
    manufacturer: body.manufacturer,
    price: body.price,
    wiki: 'wiki' in body ? body.wiki : '',
    model: body.model
  });

  car.save((err, saved) => (err ? res.send(err) : res.json(saved)));
});

// UPDATE
app.put('/api/cars', (req, res) => {
  console.log('In PUT');
  var body = req.body;
  Car.findById(body.id, (err, found) => {
    if (err) {
      res.send(err);
    }
    found.manufacturer =
      'manifacturer' in body ? body.manufacturer : body.manufacturer;
    found.model = 'model' in body ? body.model : found.model;
    found.price = 'price' in body ? body.price : found.price;
    found.wiki = 'wiki' in body ? body.wiki : found.wiki;

    found.save((errSave, added) =>
      errSave ? res.send(errSave) : res.json(added)
    );
  });
});

// DELETE
app.delete('/api/cars/:id', (req, res) => {
  console.log(`In DELETE`);
  Car.remove({ _id: req.params.id }, (err, removed) =>
    err ? res.send(err) : res.json(removed)
  );
});

//GET routes
app.use('/api', getRoutes);

app.get('*', (req, res) =>
  req.send('No routes with URL ' + req.url + ' defined!')
);

app.listen(3000, () => console.log('Cars API Listening on port 3000'));

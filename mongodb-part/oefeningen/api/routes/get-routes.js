var router = require('express').Router();
var db = require('../db');
var Car = require('../models/cars');

router.get('/cars', (req, res) => {
  Car.find((err, cars) => (err ? res.send(err) : res.json(cars)));
});

router.get('/cars/:id', (req, res) => {
  Car.find({ _id: req.params.id }, (err, found) =>
    err ? res.send(err) : res.json(found)
  );
});

module.exports = router;

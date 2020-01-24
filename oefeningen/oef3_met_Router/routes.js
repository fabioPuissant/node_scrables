var router = require('express').Router();

//Data
var books = require('./boek.json.js');
var authors = require('./author.json.js');
var notFound = require('./404.json.js');

router.use((req, res, next) => {
  console.log(`Requested route: ${req.url}`);
  next();
});

router.get('/book', (req, res) => res.json(books));
router.get('/author', (req, res) => res.json(authors));
router.get('*', (req, res) => {
  res.json(notFound);
});

module.exports = router;

var router = require('express').Router();
var heroes = require('./heroes.json');
var _ = require('underscore');

router.use((req, res, next) => {
  console.log(`Requested URL: /api${req.url}`);
  next();
});

router.get('/heroes', (req, res) => res.json(heroes));
router.get('/heroes/:id', (req, res) =>
  res.json(heroes.filter(h => h.id == req.params.id))
);
// Not found
router.get('*', (req, res) =>
  res.json({
    code: 404,
    description: 'No route found for URL: /api/' + req.url
  })
);

module.exports = router;

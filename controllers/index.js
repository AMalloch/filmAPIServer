var express = require('express');
var router = new express.Router();

router.use('/', require('./films.js'));
// router.use('/film', require('./film.js'));
// router.use('/review', require('./review.js'));

router.get('/', function (req, res) {
  res.json({data: "Welcome"});
})

router.get('/about', function(req, res) {
  res.json({data: "All about us!"})
})

module.exports = router;

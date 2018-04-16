//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require('express');
var filmRouter = new express.Router();

filmRouter.get('/films/:id', function(req, res){
  res.json({data: films[req.params.id]});
})

filmRouter.get('/', function(req, res) {
  res.json(films);
});

module.exports = filmRouter;

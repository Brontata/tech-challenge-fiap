var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/search', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
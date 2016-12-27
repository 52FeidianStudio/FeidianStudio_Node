var express = require('express');
var router = express.Router();

/* GET culture page. 团队文化*/
router.get('/', function(req, res, next) {
  var data = {

  }
  res.render('culture/index', data );
});

router.get('/rules', function(req, res, next) {
  var data = {

  }
  res.render('culture/rules', data );
});

router.get('/belief', function(req, res, next) {
  var data = {

  }
  res.render('culture/belief', data );
});

router.get('/photo', function(req, res, next) {
  var data = {

  }
  res.render('culture/photo', data );
});

module.exports = router;

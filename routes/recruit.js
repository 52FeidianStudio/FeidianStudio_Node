var express = require('express');
var router = express.Router();

/* GET recruit page. 团队招新*/
router.get('/', function(req, res, next) {
  var data = {

  }
  res.render('recruit/index', data );
});

router.get('/signup', function(req, res, next) {
  var data = {

  }
  res.render('recruit/signup', data );
});

router.get('/group', function(req, res, next) {
  var data = {

  }
  res.render('recruit/group', data );
});

module.exports = router;

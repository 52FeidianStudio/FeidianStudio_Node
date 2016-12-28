var express = require('express');
var router = express.Router();
var Culture = require('../data/models/culture');

var data = {};

/* GET culture page. 团队文化*/
router.get('/', function(req, res, next) {
  Culture.findOne({"kind": "index"}, function(err, result) {
    if(err) {
      console.log("err");
      next(err);
    }else {
      data.index = result;
      res.render('culture/index', data );
    }
  });
});

router.get('/rules', function(req, res, next) {
  Culture.findOne({"kind": "rules"}, function(err, result) {
    if(err) {
      console.log("err");
      next(err);
    }else {
      data.rules = result;
      res.render('culture/rules', data );
    }
  });
});

router.get('/belief', function(req, res, next) {
  Culture.findOne({"kind": "belief"}, function(err, result) {
    if(err) {
      console.log("err");
      next(err);
    }else {
      data.belief = result;
      res.render('culture/belief', data );
    }
  });
});

router.get('/photo', function(req, res, next) {
  Culture.find({"kind": "photo"}, function(err, result) {
    if(err) {
      console.log("err");
      next(err);
    }else {
      data.photo = result;
      res.render('culture/photo', data );
    }
  });
});

module.exports = router;

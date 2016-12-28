var express = require('express');
var router = express.Router();

var data = {};

/* GET recruit page. 团队招新*/
router.get('/', function(req, res, next) {
  var recruitIndex = require('../data/models/recruit.index');
  recruitIndex.aggregate([
  	{$sort: {"_id": 1}},
  	{$limit: 1}
  ], function(err, result) {
  	console.log(result);
  	if(err) {
  	  console.log(err);
  	  next(err);
  	}else {
  	  data.index = result;
  	  res.render('recruit/index', data );
  	}
  })
});

router.get('/signup', function(req, res, next) {

  res.render('recruit/signup', data );
});

router.get('/group', function(req, res, next) {
  var Groups = require('../data/models/groups');
  var data = {};
  Groups.find({}, function(err, result) {
    if(err) {
      console.log("err");
      next(err);
    }else {
      data.groups = result;
      res.render('recruit/group', data );
    }
  });
  
});

module.exports = router;

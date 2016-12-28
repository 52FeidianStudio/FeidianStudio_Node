var express = require('express');
var router = express.Router();
var Works = require('../data/models/works');

/* GET work page. 作品展示*/
router.get('/', function(req, res, next) {
  var data = {};
  Works.aggregate([
  	{$sort: {"_id": -1}}
  ], function(err, result) {
  	if(err) {
  		console.log("err");
  		next(err);
  	}else {
  		data.works = result;
  		res.render('works', data );
  	}
  })
  
});

module.exports = router;

var express = require('express');
var router = express.Router();


/* GET introduction index page. 沸点简介*/
router.get('/', function(req, res, next) {
	var data = {

	}
	res.render('introduction/index', data );
});

// 导师简介
router.get('/teacher', function(req, res, next) {
	var data = {};
	var Teachers = require('../data/models/teachers');
	Teachers.aggregate([
		{$sort: {"sort": 1}}
	], function(err, teachers) {
		if(err) {
			console.log("err");
			next(err);
		}else {
			data.teachers = teachers;
			res.render('introduction/teacher', data);
		}
	})	
});

// 分组简介
router.get('/group', function(req, res, next) {
	var Groups = require('../data/models/groups');
	var data = {};
	Groups.find({}, function(err, result) {
		if(err) {
			console.log("err");
			next(err);
		}else {
			data.groups = result;
			res.render('introduction/group', data );
		}
	})
	
});

module.exports = router;

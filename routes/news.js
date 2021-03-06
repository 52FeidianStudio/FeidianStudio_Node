var express = require('express');
var router = express.Router();
var News = require('../data/models/news')

/* GET news page. 新闻动态*/
router.get('/', function(req, res, next) {
	var data = {};
 	// 查询新闻公告
	News.aggregate([
		{$match: {"kind": "announce"}},
		{$sort: {"_id": -1}}
	], function(err, announce) {
		if(err) {
			console.log("err");
		}else {
			data.announce = announce;
			res.render('news/index', data);
		}
	});
});

router.get('/diary', function(req, res, next) {
	var data = {};
	// 查询成员日志
	News.aggregate([
		{ $match: {"kind": "diary"}},
		{ $sort: {"_id": -1}}
	], function(err, diary) {
		if(err) {
			console.log("err");
		}else {
			data.diary = diary;
			res.render('news/diary', data);
		}
	});
});

router.get('/detail/:newsid', function(req, res, next) {
	var data = {};
	News.findOne({
		"_id": req.params.newsid
	}, function(err, result) {
		if(err) {
			console.log("err");
			next(err);
		}else {
			console.log(result);
			data.detail = result;
			res.render('news/detail', data);
		}
	})
});


module.exports = router;

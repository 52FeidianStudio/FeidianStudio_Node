var express = require('express');
var router = express.Router();
var News = require('../data/models/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
  	title: '沸点工作室-华中农业大学第一互联网技术团队',
  	description : "沸点工作室是一支本科生IT人才孵化团队，以实际项目为驱动力，主攻web开发、移动手持设备软件开发(iOS/Android)以及信息安全。团队成立于2010年9月，其成员由华中农业大学在校本科生组成，现役成员来自信息、理学、工学、公管、植科、生科六院。工作室旨在提升团队成员面对新事物学习能力、动手实践能力、创新能力和团队协作精神。"
  }
  News.aggregate([
		{ $match: {"kind": "announce"}},
		{ $sort: {"_id": -1}},
		{ $limit: 4}
	], function(err, diary) {
		if(err) {
			console.log("err");
		}else {
			data.announce = diary;
			renderNews();
		}
	});
  News.aggregate([
		{ $match: {"kind": "diary"}},
		{ $sort: {"_id": -1}},
		{ $limit: 4}
	], function(err, diary) {
		if(err) {
			console.log("err");
		}else {
			data.diary = diary;
			renderNews();
		}
	});
  function renderNews() {
  	if(data.hasOwnProperty('announce') && data.hasOwnProperty('diary')) {
	  res.render('index', data );
	}
  }
});

module.exports = router;

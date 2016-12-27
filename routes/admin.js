var express = require('express');
var router = express.Router();
var Admin = require('../data/models/admin');

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('admin');
});

/* 处理登录 */
router.post('/login', function(req, res, next) {
  var data;

  Admin.findOne({
  	username: req.body.username
  }, function(err, doc) {
  	console.log("doc: " + doc);
  	if(err) {
  	  data = "服务器未知错误";
  	}else if(!doc) {
  	  data = "用户名不存在";
  	}else {
  	  if(doc.password != req.body.password) {
  		data = "密码错误";
  	  }else {
  		data = "登陆成功";
  	  }
  	}
  	res.send(data);
  });
});

router.get('/index',function(req, res, next) {
	res.render('admin/index');
})

module.exports = router;

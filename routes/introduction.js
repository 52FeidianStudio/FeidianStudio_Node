var express = require('express');
var router = express.Router();

var IntroductionIndex = require('../data/models/introduction.index');
var IntroductionTeachers = require('../data/models/introduction.teachers');
var IntroductionGroups = require('../data/models/introduction.groups');

/* GET introduction index page. 沸点简介*/
router.get('/', function(req, res, next) {
  var data = {

  }
  res.render('introduction/index', data );
});

// 导师简介
router.get('/teacher', function(req, res, next) {
  var data = {

  }
  res.render('introduction/teacher', data );
});

// 分组简介
router.get('/group', function(req, res, next) {
  var data = {
 
  }
  res.render('introduction/group', data );
});

module.exports = router;

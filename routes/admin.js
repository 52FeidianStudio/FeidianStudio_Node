var express = require('express');
var router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
  var data = {

  }
  res.render('admin', data);
});

module.exports = router;

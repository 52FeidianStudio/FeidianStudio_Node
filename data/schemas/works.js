var mongoose = require('mongoose');

var WorksSchema = new mongoose.Schema({
  kind: String,
  title: String,
  author: String,
  time: String,
  introduction: String,
  img: {
  	type: String,
  	default: "/images/logo.png"
  }
  links: {
    type: String,
    dafault: "javascript:;"
  }
});

module.exports = WorksSchema;
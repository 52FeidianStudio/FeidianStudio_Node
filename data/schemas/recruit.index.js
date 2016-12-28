var mongoose = require('mongoose');

var recruitIndexSchema = new mongoose.Schema({
  description: String,
  object: String,
  time: String,
  schedule: String,
  notice: String,
  qq: String,
  img: String,
  tel: String
});

module.exports = recruitIndexSchema;
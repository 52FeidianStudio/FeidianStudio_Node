var mongoose = require('mongoose');
var recruitIndexSchema = require('../schemas/recruit.index');

var recruitIndex = mongoose.model('recruit.indexs',recruitIndexSchema);

module.exports = recruitIndex;
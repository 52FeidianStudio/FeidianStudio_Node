var mongoose = require('mongoose');
var TeachersSchema = require('../schemas/teachers');

var Teachers = mongoose.model('Teachers', TeachersSchema);

module.exports = Teachers;

var mongoose = require('mongoose');
var WorksSchema = require('../schemas/culture');

var Works = mongoose.model('works',WorksSchema);

module.exports = Works;
var mongoose = require('mongoose');
var CultureSchema = require('../schemas/culture');

var Culture = mongoose.model('Cultures',CultureSchema);

module.exports = Culture;
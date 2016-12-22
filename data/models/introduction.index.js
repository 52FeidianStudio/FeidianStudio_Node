var mongoose = require('mongoose');
var IntroductionIndexSchema = require('../schemas/introduction.index');

var introductionIndex = mongoose.model('IntroductionIndex', IntroductionIndexSchema);

module.exports = introductionIndex;

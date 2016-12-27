var mongoose = require('mongoose');
var IntroductionGroupsSchema = require('../schemas/introduction.groups');

var introductionGroups = mongoose.model('IntroductionGroups', IntroductionGroupsSchema);

module.exports = introductionGroups;

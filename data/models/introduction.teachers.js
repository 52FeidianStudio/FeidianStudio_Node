var mongoose = require('mongoose');
var IntroductionTeachersSchema = require('../schemas/introduction.teachers');

var introductionTeachers = mongoose.model('IntroductionTeachers', IntroductionTeachersSchema);

module.exports = introductionTeachers;

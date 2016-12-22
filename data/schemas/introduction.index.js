var mongoose = require('mongoose');

// 团队简介
var IntroductionIndexSchema = new mongoose.Schema({
	content: String
});

module.exports = IntroductionIndexSchema;

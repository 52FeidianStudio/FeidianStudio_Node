var mongoose = require('mongoose');

//导师简介
var IntroductionTeachersSchema = new mongoose.Schema({
	name: String,
	img: String,
	tel: String,
	email: String,
	introduction: String,
	word: String
});

module.exports = IntroductionTeachersSchema;

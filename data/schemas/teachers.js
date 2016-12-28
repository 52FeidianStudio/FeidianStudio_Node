var mongoose = require('mongoose');

//导师简介
var TeachersSchema = new mongoose.Schema({
	name: String,
	img: {
		type: String,
		default: "default.jpg"
	},
	tel: String,
	email: String,
	introduction: String,
	word: String,
	sort: Number
});

module.exports = TeachersSchema;

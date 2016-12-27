var mongoose = require('mongoose');

// 为子文档定义集合
const personSchema = new mongoose.Schema({
	num: Number,
	name: String,
	birth: String,
	sex: String,
	entertime: String,
	group: String,
	img: {
		type: String,  
		// 固定值的默认值  
		default: 'uploads/headimg/default.jpg' 
	},
	email: String,
	introduction: String,
	word: String
});

var MembersSchema = new mongoose.Schema({
   grade: Number, //年级
   person: [personSchema]  //成员
});

module.exports = MembersSchema;
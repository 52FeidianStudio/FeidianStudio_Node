var mongoose = require('mongoose');

//分组简介
var IntroductionGroupsSchema = new mongoose.Schema({
	group: String,
    sort: Number,
    introduction: String
});


module.exports = IntroductionGroupsSchema;
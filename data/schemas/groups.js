var mongoose = require('mongoose');

var GroupsSchema = new mongoose.Schema({
	name: String,
	img: String,
	introduction: String,
	keyword: String,
	leader: String,
	others: String
});

module.exports = GroupsSchema;
var mongoose = require('mongoose');

var AdminSchema = new mongoose.Schema({
	username: String,
	password: String,
	member: String,
	rank: String
});

module.exports = AdminSchema;
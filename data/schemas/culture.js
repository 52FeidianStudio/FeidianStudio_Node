var mongoose = require('mongoose');

var CultureContent = new mongoose.Schema({
	description: String,
	value: String
});

var Culture = new mongoose.Schema({
	kind: String,
	content: [CultureContent]
});

module.exports = Culture;
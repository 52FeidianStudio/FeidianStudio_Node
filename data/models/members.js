var mongoose = require('mongoose');
var MembersSchema = require('../schemas/members');

var members = mongoose.model('Members', MembersSchema);

module.exports = members;
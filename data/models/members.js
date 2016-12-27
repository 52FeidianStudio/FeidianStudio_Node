var mongoose = require('mongoose');
var MembersSchema = require('../schemas/members');

var Members = mongoose.model('Members', MembersSchema);

module.exports = Members;
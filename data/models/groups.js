var mongoose = require('mongoose');
var GroupsSchema = require('../schemas/groups');

var Groups = mongoose.model('groups',GroupsSchema);

module.exports = Groups;
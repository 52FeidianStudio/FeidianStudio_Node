var mongoose = require('mongoose');
var AdminSchema = require('../schemas/admin');

var Admin = mongoose.model('Admin', AdminSchema);

/*
*
*  FUCK! FUCK MONGOOSE! FUCK MONGODB!!!!!
*  2016.12.27 an bug cost me more than 7 hours!!!!!
*  
*  ATTENTION!!!!
*  Mongoose会自动给集合名加“s”
*  var Admin = mongoose.model('Admin’,userShema); 
*  比如这个model('Admin’,userShema)中的Admin映射到Mongodb里就是admins
*  所以如果集合名为Admin，读取数据始终为空，改成Admins就好了！！！！！FUCK!!!!
*
*/


module.exports = Admin;
var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
	kind: String,      // 类型 分通知公告 成员日志
	title: String,     // 标题
	content: String,   // 内容
	author: String,    // 作者
	time: String       // 发布时间
});

module.exports = NewsSchema;
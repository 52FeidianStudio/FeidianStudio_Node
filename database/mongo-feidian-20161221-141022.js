
/** culture indexes **/
db.getCollection("culture").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction indexes **/
db.getCollection("introduction").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction.groups indexes **/
db.getCollection("introduction.groups").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction.main indexes **/
db.getCollection("introduction.main").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction.teachers indexes **/
db.getCollection("introduction.teachers").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** members indexes **/
db.getCollection("members").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** news indexes **/
db.getCollection("news").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** news.announce indexes **/
db.getCollection("news.announce").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** news.diary indexes **/
db.getCollection("news.diary").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** recruit indexes **/
db.getCollection("recruit").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** works indexes **/
db.getCollection("works").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** works.other indexes **/
db.getCollection("works.other").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** works.product indexes **/
db.getCollection("works.product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** culture records **/

/** introduction records **/

/** introduction.groups records **/
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a76c82fd4eff685c3b23c"),
  "group": "web开发",
  "introduction": "webweb"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a787634483d2436000029"),
  "group": "Android/Java开发",
  "introduction": "javajava"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a789434483d243600002a"),
  "group": "iOS软件开发",
  "introduction": "iosiosios"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a789d34483d243600002b"),
  "group": "信息安全",
  "introduction": "jianjie"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a78a434483d243600002c"),
  "group": "UI设计",
  "introduction": "jianjie"
});

/** introduction.main records **/
db.getCollection("introduction.main").insert({
  "_id": ObjectId("585a73388b421e1245913e1b"),
  "feidian": "沸点工作室是一支本科生IT人才孵化团队，以实际项目为驱动力，主攻web开发、移动手持设备软件开发(iOS/Android)以及信息安全。团队成立于2010年9月，其成员由华中农业大学在校本科生组成，现役成员来自信息、理学、工学、公管、植科、生科六院。工作室旨在提升团队成员面对新事物学习能力、动手实践能力、创新能力和团队协作精神。"
});

/** introduction.teachers records **/
db.getCollection("introduction.teachers").insert({
  "_id": ObjectId("585a74877bb8079cfd5c7c99"),
  "name": "刘峰",
  "tel": 13349959699,
  "email": "liufeng@mail.hzau.edu.cn",
  "introduction": "简介",
  "word": "老师寄语"
});

/** members records **/
db.getCollection("members").insert({
  "_id": ObjectId("585a7ef934483d9436000029"),
  "class": 2016,
  "num": 60,
  "name": "黄一凡",
  "birth": "1997-01-19",
  "sex": "男",
  "entertime": "2015-03",
  "group": "web开发",
  "img": "url",
  "email": "1060031655@qq.com",
  "introduction": "简介",
  "word": "相信执念的力量"
});

/** news records **/

/** news.announce records **/
db.getCollection("news.announce").insert({
  "_id": ObjectId("585a7bf92fd4eff685c3b23d"),
  "title": "标题",
  "content": "内容"
});

/** news.diary records **/
db.getCollection("news.diary").insert({
  "_id": ObjectId("585a7c112fd4eff685c3b23e"),
  "title": "标题",
  "content": "内容"
});

/** recruit records **/

/** works records **/

/** works.other records **/
db.getCollection("works.other").insert({
  "_id": ObjectId("585a7d0f2fd4eff685c3b23f"),
  "title": "标题",
  "author": "作者",
  "time": "2016-12",
  "introduction": "简介",
  "img": "image url"
});

/** works.product records **/
db.getCollection("works.product").insert({
  "_id": ObjectId("585a7d5a2fd4eff685c3b240"),
  "title": "标题",
  "author": "作者",
  "time": "2016-12",
  "introduction": "简介",
  "img": "image url"
});

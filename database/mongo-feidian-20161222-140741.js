
/** culture indexes **/
db.getCollection("culture").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction.groups indexes **/
db.getCollection("introduction.groups").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** introduction.index indexes **/
db.getCollection("introduction.index").ensureIndex({
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

/** introduction.groups records **/
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a76c82fd4eff685c3b23c"),
  "group": "web开发",
  "sort": 1,
  "introduction": "webweb"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a787634483d2436000029"),
  "group": "Android/Java开发",
  "sort": 2,
  "introduction": "javajava"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a789434483d243600002a"),
  "group": "iOS软件开发",
  "sort": 3,
  "introduction": "iosiosios"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a789d34483d243600002b"),
  "group": "信息安全",
  "sort": 4,
  "introduction": "jianjie"
});
db.getCollection("introduction.groups").insert({
  "_id": ObjectId("585a78a434483d243600002c"),
  "group": "UI设计",
  "sort": 5,
  "introduction": "jianjie"
});

/** introduction.index records **/
db.getCollection("introduction.index").insert({
  "_id": ObjectId("585bc3d334483d8c0800002b"),
  "content": "沸点工作室是一支本科生IT人才孵化团队，以实际项目为驱动力，主攻web开发、移动手持设备软件开发(iOS/Android)以及信息安全。团队成立于2010年9月，其成员由华中农业大学在校本科生组成，现役成员来自信息、理学、工学、公管、植科、生科六院。工作室旨在提升团队成员面对新事物学习能力、动手实践能力、创新能力和团队协作精神。"
});

/** introduction.teachers records **/
db.getCollection("introduction.teachers").insert({
  "_id": ObjectId("585a74877bb8079cfd5c7c99"),
  "name": "刘峰",
  "img": "uploads/headimg/t1.jpg",
  "tel": "13349959699",
  "email": "liufeng@mail.hzau.edu.cn",
  "introduction": "简介",
  "word": "老师寄语"
});
db.getCollection("introduction.teachers").insert({
  "_id": ObjectId("585bc6d0c557fca6508aa24f"),
  "name": "刘建晓",
  "img": "uploads/headimg/t2.jpg",
  "tel": "13476095649",
  "email": "liujianxiao@mail.hzau.edu.cn",
  "introduction": "简介",
  "word": "老师寄语"
});

/** members records **/
db.getCollection("members").insert({
  "_id": ObjectId("585b94c134483d8c0800002a"),
  "grade": 2014,
  "person": [
    {
      "_id": ObjectId("585b9556c557fca6508a96a7"),
      "num": 60,
      "name": "黄一凡",
      "birth": "1997-01-19",
      "sex": "男",
      "entertime": "2015-03",
      "group": "web开发",
      "img": "uploads/headimg/60.jpg",
      "email": "1060031655@qq.com",
      "introduction": "简介",
      "word": "相信执念的力量"
    },
    {
      "_id": ObjectId("585b957ec557fca6508a96b9"),
      "num": 59,
      "name": "王成",
      "birth": "1996-12-12",
      "sex": "男",
      "entertime": "2015-04",
      "group": "Andriod/Java",
      "img": "uploads/headimg/default.jpg",
      "email": "22222222222@qq.com",
      "introduction": "简介",
      "word": "寄语"
    },
    {
      "_id": ObjectId("585b957ec557fca6508a96ba"),
      "num": 61,
      "name": "黄二凡",
      "birth": "1997-01-18",
      "sex": "女",
      "entertime": "2015-03",
      "group": "web开发",
      "img": "uploads/headimg/default.jpg",
      "email": "1060031655@qq.com",
      "introduction": "大家好",
      "word": "哈哈哈哈"
    }
  ]
});
db.getCollection("members").insert({
  "_id": ObjectId("585b96ab34483da01800002a"),
  "grade": 2013,
  "person": [
    {
      "_id": ObjectId("585b96abc557fca6508a9701"),
      "num": 55,
      "name": "王元芳",
      "birth": "1997-01-19",
      "sex": "女",
      "entertime": "2014-03",
      "group": "web开发",
      "img": "uploads/headimg/default.jpg",
      "email": "1060031655@qq.com",
      "introduction": "简介",
      "word": "寄语"
    },
    {
      "_id": ObjectId("585b96abc557fca6508a9702"),
      "num": 56,
      "name": "张帆",
      "birth": "1996-12-12",
      "sex": "男",
      "entertime": "2014-04",
      "group": "Andriod/Java",
      "img": "uploads/headimg/default.jpg",
      "email": "22222222222@qq.com",
      "introduction": "简介",
      "word": "寄语"
    }
  ]
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

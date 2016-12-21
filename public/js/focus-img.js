var images = $(".focus-all-images img");//所有图片

var i = 0;//初始显示图片的序号
var length = images.length;//所有图片的数量
var TIME = 3000;//设定轮播的时间间隔

// 执行改变的效果
function change() {
	$(".focus-block img")[0].src = images[i].src;
	$(".focus-thumbnail span").removeClass('current');
	$(".focus-thumbnail span:eq(" + i +")").addClass("current");
	i++;
	if(i >= length) {
		i = i - length;
	}
}
//设置定时器
var timer = setInterval(function() { change(); }, TIME);

function toLeft() {
	// alert("left")
	clearInterval(timer);
	if(i - 2 >= 0) {
		i = i - 2;
	}else if(i == 0) {
		i = length - 2;
	}else {
		i = length - 1;
	}
	change();
	timer = setInterval(function() { change(); }, TIME);
}
function toRight() {
	// alert("right")
	clearInterval(timer);
	// change();
	timer = setInterval(change(), TIME);
}

//点击左箭头
$(".focus-console .left").click(function() {
	toLeft();
});
//点击右箭头
$(".focus-console .right").click(function() {
	toRight();
});

//点击缩略图,鼠标滑过
$(".focus-thumbnail span").each(function() {
	$(this).mouseover(function() {
		clearInterval(timer);
		i = $(this).index();
		change();
	});
	$(this).mouseout(function() {
		timer = setInterval(function() { change(); }, TIME);
	})
});
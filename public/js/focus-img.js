var focus = $("#focus");
var images = $(".focus-all-images img");//所有图片

var i = 0;//初始显示图片的序号
var length = images.length;//所有图片的数量

var time = setInterval(function() {
	// show.src = images[i].src;
	$(".focus-block img")[0].src = images[i].src;
	i++;
	if(i >= length) {
		i = i - length;
	}
}, 3000);
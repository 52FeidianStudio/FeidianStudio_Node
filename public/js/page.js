// 侧导航点击显示 or 隐藏
$("#left-nav-ul a").click(function() {
	$(".content-section").hide();
	$(".content-section").eq($(this).index()).show();
})
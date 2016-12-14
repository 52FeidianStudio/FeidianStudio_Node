// 侧导航点击显示 or 隐藏
$("#left-nav-ul a").click(function() {
	$("#left-nav-ul a li").removeClass("current");
	$(this).children('li').addClass("current");
	$(".content-section").hide();
	$(".content-section").eq($(this).index()).show();
});


var nav = $(".time-nav"); //得到导航对象
var win = $(window); //得到窗口对象
var doc = $(document);//得到document文档对象。

win.scroll(function(){
	if(doc.scrollTop() >= 115){
    	nav.addClass("fixed-nav"); 
   		// $(".navTmp").fadeIn(); 
  	}else{
   		nav.removeClass("fixed-nav");
   		// $(".navTmp").fadeOut();
  	}
})  
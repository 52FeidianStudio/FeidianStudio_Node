
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
$(document).ready(function () {
	$(".date").click(function () {
		$("div.main6 div.date").css("background-color","#1f253d");
		$(this).css("background-color","#ed9b2f");
	})
	$(".leftbutton").click(function () {
		$(".leftdate").show();
		$(".middledate").hide();
		$(".rightdate").hide();
	})
	$(".middlebutton").click(function () {
		$(".leftdate").hide();
		$(".middledate").show();
		$(".rightdate").hide();
	})
	$(".rightbutton").click(function () {
		$(".leftdate").hide();
		$(".middledate").hide();
		$(".rightdate").show();
	})
	myFocus.set({
	    id:'navpic',//焦点图盒子ID
	    pattern:'mF_kdui',//风格应用的名称
	    time:5,//切换时间间隔(秒)
	    trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
	    width:1920,//设置图片区域宽度(像素)
	    height:772,//设置图片区域高度(像素)
	});
	var Marquee1 = new Marquee("Marquee");
	Marquee1.Direction = 2;
	Marquee1.Step = 20;
	Marquee1.Width = 948;
	Marquee1.Height = 390;
	Marquee1.Timer = 20;
	Marquee1.DelayTime = 1000;
	Marquee1.WaitTime = 0;
	Marquee1.ScrollStep = 948;
	Marquee1.AutoStart = true;
	Marquee1.Start();
	var Marquee2 = new Marquee("Marquee2");
	Marquee2.Direction = 2;
	Marquee2.Step = 20;
	Marquee2.Width = 948;
	Marquee2.Height = 225;
	Marquee2.Timer = 20;
	Marquee2.DelayTime = 1000;
	Marquee2.WaitTime = 0;
	Marquee2.ScrollStep = 948;
	Marquee2.AutoStart = true;
	Marquee2.Start();
	$(".left").click(function () {
		Marquee1.Direction = 2;
	})
	$(".right").click(function () {
		Marquee1.Direction = 3;
	})
	$(".marquee2left").click(function () {
		Marquee2.Direction = 2;
	})
	$(".marquee2right").click(function () {
		Marquee2.Direction = 3;
	})
})
	$(document).ready(function  () {
	$(".wzsc").hide();
	$("#box2index1").click(function  () {
		$(".box2img").css("background","url(images/2.jpg)");
		$(".box2txt1").css("display","inline");
		$(".box2txt2").css("display","none");
		$(".box2txt3").css("display","none");
		$("#box2index1").attr("src","images/11.jpg");
		$("#box2index2").attr("src","images/12.jpg");
		$("#box2index3").attr("src","images/12.jpg");
	})
	$("#box2index2").click(function  () {
		$(".box2img").css("background","url(images/9.jpg)");
		$(".box2txt1").css("display","none");
		$(".box2txt2").css("display","inline");
		$(".box2txt3").css("display","none");
		$("#box2index1").attr("src","images/12.jpg");
		$("#box2index2").attr("src","images/11.jpg");
		$("#box2index3").attr("src","images/12.jpg");
	})
	$("#box2index3").click(function  () {
		$(".box2img").css("background","url(images/10.jpg)");
		$(".box2txt1").css("display","none");
		$(".box2txt2").css("display","none");
		$(".box2txt3").css("display","inline");
		$("#box2index1").attr("src","images/12.jpg");
		$("#box2index2").attr("src","images/12.jpg");
		$("#box2index3").attr("src","images/11.jpg");
	})
	flag = 1;	
	setInterval(function  () {
		if (flag == 1) {
			$("#box2index1").click();
			flag = 2;
		}
		else if (flag == 2) {
			$("#box2index2").click();
			flag = 3;
		}
		else if (flag == 3) {
			$("#box2index3").click();
			flag = 1;
		};
	}, 2000);
	$(".hot").click(function  () {
		$(this).css("background","url(images/14.jpg)");
		$(".reply").css("background","url(images/13.jpg)");
		$(".description2").hide();
		$(".description1").show();
	})
	$(".reply").click(function  () {
		$(this).css("background","url(images/14.jpg)");
		$(".hot").css("background","url(images/13.jpg)");
		$(".description1").hide();
		$(".description2").show();
	})
	$(".GovernmentIndex1").click(function  () {
		$(".department1").show();
		$(".department2").hide();
		$(".department3").hide();
		$(".department4").hide();
		$(".department5").hide();
		$(this).css({"background":"url(images/25.jpg)","color":"#ffffff"});
		$(".GovernmentIndex div:not(.GovernmentIndex1)").css({"background":"url(images/26.jpg)","color":"#6292cc"});
		
	})
	$(".GovernmentIndex2").click(function  () {
		$(".department2").show();
		$(".department1").hide();
		$(".department3").hide();
		$(".department4").hide();
		$(".department5").hide();
		$(this).css({"background":"url(images/25.jpg)","color":"#ffffff"});
		$(".GovernmentIndex div:not(.GovernmentIndex2)").css({"background":"url(images/26.jpg)","color":"#6292cc"});
	})
	$(".GovernmentIndex3").click(function  () {
		$(".department3").show();
		$(".department2").hide();
		$(".department1").hide();
		$(".department4").hide();
		$(".department5").hide();
		$(this).css({"background":"url(images/25.jpg)","color":"#ffffff"});
		$(".GovernmentIndex div:not(.GovernmentIndex3)").css({"background":"url(images/26.jpg)","color":"#6292cc"});
	})
	$(".GovernmentIndex4").click(function  () {
		$(".department4").show();
		$(".department2").hide();
		$(".department3").hide();
		$(".department1").hide();
		$(".department5").hide();
		$(this).css({"background":"url(images/25.jpg)","color":"#ffffff"});
		$(".GovernmentIndex div:not(.GovernmentIndex4)").css({"background":"url(images/26.jpg)","color":"#6292cc"});
	})
	$(".GovernmentIndex5").click(function  () {
		$(".department5").show();
		$(".department2").hide();
		$(".department3").hide();
		$(".department4").hide();
		$(".department1").hide();
		$(this).css({"background":"url(images/25.jpg)","color":"#ffffff"});
		$(".GovernmentIndex div:not(.GovernmentIndex5)").css({"background":"url(images/26.jpg)","color":"#6292cc"});
	})
	$(".cityaskindex").click(function  () {
		$("#cityask").show();
		$("#cityanswer").hide();
		$("#citypic").attr("src","images/31.jpg");
		$(this).css({"color":"#3668a5","font-weight":"bold"});
		$(this).next().css({"color":"#333333","font-weight":"normal"});
	})
	$(".cityanswerindex").click(function  () {
		$("#cityask").hide();
		$("#cityanswer").show();
		$("#citypic").attr("src","images/32.jpg");
		$(this).css({"color":"#3668a5","font-weight":"bold"});
		$(this).prev().css({"color":"#333333","font-weight":"normal"});
	})
	$(".proaskindex").click(function  () {
		$("#proask").show();
		$("#proanswer").hide();
		$("#propic").attr("src","images/33.jpg");
		$(this).css({"color":"#3668a5","font-weight":"bold"});
		$(this).next().css({"color":"#333333","font-weight":"normal"});
	})
	$(".proanswerindex").click(function  () {
		$("#proask").hide();
		$("#proanswer").show();
		$("#propic").attr("src","images/34.jpg");
		$(this).css({"color":"#3668a5","font-weight":"bold"});
		$(this).prev().css({"color":"#333333","font-weight":"normal"});
	})
	$(window).scroll(function  () {
			var top = $(window).scrollTop()+110;
			$(".flpic").css({top:top+"px"});
	})
	$("#mappic").mousemove(function  (e) {
		var offset = $(this).offset();
		var x = (e.pageX - offset.left);
		var y = (e.pageY - offset.top);
		if ((x>130)&&(x<165)&&(y>240)&&(y<270)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("甘孜");
			$(".wzscnum").text("1234");
		}
		else if ((x>245)&&(x<285)&&(y>150)&&(y<170)) {
			
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("阿坝");
			$(".wzscnum").text("1234");
		}
		else if ((x>215)&&(x<240)&&(y>430)&&(y<480)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("攀枝花");
			$(".wzscnum").text("1234");
		}
		else if ((x>245)&&(x<280)&&(y>380)&&(y<400)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("凉山");
			$(".wzscnum").text("1234");
		}
		else if ((x>258)&&(x<294)&&(y>265)&&(y<285)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("雅安");
			$(".wzscnum").text("1234");
		}
		else if ((x>307)&&(x<347)&&(y>233)&&(y<253)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("成都");
			$(".wzscnum").text("1234");
		}
		else if ((x>300)&&(x<335)&&(y>311)&&(y<330)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("乐山");
			$(".wzscnum").text("1234");
		}
		else if ((x>318)&&(x<352)&&(y>270)&&(y<285)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("眉山");
			$(".wzscnum").text("1234");
		}
		else if ((x>360)&&(x<400)&&(y>350)&&(y<370)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("宜宾");
			$(".wzscnum").text("1234");
		}
		else if ((x>360)&&(x<400)&&(y>305)&&(y<320)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("自贡");
			$(".wzscnum").text("1234");
		}
		else if ((x>360)&&(x<400)&&(y>285)&&(y<305)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("内江");
			$(".wzscnum").text("1234");
		}
		else if ((x>360)&&(x<400)&&(y>260)&&(y<285)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("资阳");
			$(".wzscnum").text("1234");
		}
		else if ((x>400)&&(x<430)&&(y>240)&&(y<260)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("遂宁");
			$(".wzscnum").text("1234");
		}
		else if ((x>340)&&(x<375)&&(y>210)&&(y<230)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("德阳");
			$(".wzscnum").text("1234");
		}
		else if ((x>400)&&(x<425)&&(y>325)&&(y<345)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("泸州");
			$(".wzscnum").text("1234");
		}
		else if ((x>350)&&(x<390)&&(y>170)&&(y<190)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("绵阳");
			$(".wzscnum").text("1234");
		}
		else if ((x>400)&&(x<450)&&(y>150)&&(y<175)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("广元");
			$(".wzscnum").text("1234");
		}
		else if ((x>425)&&(x<465)&&(y>200)&&(y<220)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("南充");
			$(".wzscnum").text("1234");
		}
		else if ((x>450)&&(x<485)&&(y>240)&&(y<260)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("广安");
			$(".wzscnum").text("1234");
		}
		else if ((x>465)&&(x<500)&&(y>160)&&(y<185)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("巴中");
			$(".wzscnum").text("1234");
		}
		else if ((x>500)&&(x<540)&&(y>185)&&(y<210)) {
			$(".wzsc").show();
			$(".wzsc").css({top:e.pageY+10+'px'});
			$(".wzsc").css({left:e.pageX+10+'px'});
			$(".wzsccity").text("达州");
			$(".wzscnum").text("1234");
		}
		else{
			$(".wzsc").hide();
		}
	})
})
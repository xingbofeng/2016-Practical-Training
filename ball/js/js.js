$(document).ready(function  () {
	//出场动画
	$("#img1").delay(1000).show(2000,function() {
		$("#img2").delay(1000).show(2000,function() {
			$("#img3").delay(1000).show(2000,function() {
				$("#img4").delay(1000).show(2000,function() {
					$("#img5").delay(1000).show(2000);
				});
			});
		});
	});
	//点击效果——定位
	$(window).mousemove(function  (e) {
		/*if ((x>0.08)&&(x<0.12)&&(y>0.54)&&(y<0.58)) {
			$(".box").show(1000);
			$(".boxcontent").text("7点");
		}
		else if ((x>0.04)&&(x<0.08)&&(y>0.58)&&(y<0.62)) {
			$(".box").show(1000);
			$(".boxcontent").text("诺丁山");
		}
		else if ((x>0.08)&&(x<0.12)&&(y>0.65)&(y<0.69)){
			$(".box").show(1000);
			$(".boxcontent").text("万兴");
		}
		else if ((x>0.15)&&(x<0.19)&&(y>0.58)&(y<0.62)){
			$(".box").show(1000);
			$(".boxcontent").text("瑞尔");
		}
		else if ((x>0.21)&&(x<0.25)&&(y>0.59)&(y<0.63)){
			//$(".box").css("width","20%");
			$(".box").show(1000);
			$(".boxcontent").text("丽都公园");
		}
		else if ((x>0.22)&&(x<0.26)&&(y>0.64)&(y<0.68)){
			//$(".box").css("width","20%");
			$(".box").show(1000);
			$(".boxcontent").text("中环绿茵");
		}
		else if ((x>0.26)&&(x<0.30)&&(y>0.61)&(y<0.65)){
			$(".box").show(1000);
			$(".boxcontent").text("檀香山");
		}
		else if ((x>0.71)&&(x<0.76)&&(y>0.56)&(y<0.60)){		
			//$(".box").css("width","30%");
			$(".box").css({left:e.pageX-200+'px'});
			$(".boxcontent").text("东八区街球馆");
			$(".box").show(1000);
		}
		else if ((x>0.45)&&(x<0.50)&&(y>0.89)&(y<0.93)){
			//$(".box").css("width","30%");
			$(".box").show(1000);
			$(".boxcontent").text("成都足球公园");
		}
		else if ((x>0.85)&&(x<0.90)&&(y>0.70)&(y<0.73)){
			$(".boxcontent").text("1982");
			$(".box").css({top:e.pageY+10+'px'});
			$(".box").css({left:e.pageX-200+'px'});
			$(".box").show(1000);
		}
		else if ((x>0.87)&&(x<0.92)&&(y>0.73)&(y<0.76)){
			$(".boxcontent").text("经天320");
			//$(".box").css("width","20%");
			$(".box").css({top:e.pageY+10+'px'});
			$(".box").css({left:e.pageX-200+'px'});
			$(".box").show(1000);
		}
		else if ((x>0.92)&&(x<0.72)&&(y>0.71)&(y<0.75)){	
			$(".boxcontent").text("0LF");
			$(".box").css({top:e.pageY+10+'px'});
			$(".box").css({left:e.pageX-200+'px'});
			$(".box").show(1000);
		}
		else{
			$(".box").hide();
		};*/
		$(".box").css({top:e.pageY-80+'px'});
		var y = e.pageY/$(window).height();
		var x = e.pageX/$(window).width();
		$(".ball1").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("7点");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball2").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("诺丁山");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball3").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("万兴");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball4").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("瑞尔");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball5").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("中环绿茵");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball6").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("檀香山");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball7").click(function  () {
			$(".box").show(1000);
			$(".boxcontent").text("东八区街球馆");
			$(".box").css({left:e.pageX-100+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		
		$(".ball8").click(function  () {	
			$(".box").show(1000);	
			$(".box").css({left:e.pageX-100+'px'});
			$(".boxcontent").text("成都足球公园");
			$(this).css("width","72px");
			$(this).css("height","72px");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball9").click(function  () {
			$(".box").show(1000);
			$(".box").css({left:e.pageX-200+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
			$(".boxcontent").text("1982");
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball10").click(function  () {
			$(".boxcontent").text("经天320");
			$(".box").css({left:e.pageX-200+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
			$(".box").show(1000);
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$(".ball11").click(function  () {
			$(".boxcontent").text("OLF");
			$(".box").css({left:e.pageX-200+'px'});
			$(".box").show(1000);
		})
		$(".ball12").click(function  () {
			$(".boxcontent").text("丽都公园");
			$(".box").css({left:e.pageX-200+'px'});
			$(this).css("width","72px");
			$(this).css("height","72px");
			$(".box").show(1000);
		}).mouseout(function  () {
			$(this).css("width","48px");
			$(this).css("height","48px");
		})
		$("[src='images/ball.png']").mouseout(function  () {
			$(".box").hide();
			clearInterval();
		})

	})
	var angle = 0;
	var interval = setInterval(function(){
	    angle +=3;
	    $("[src='images/ball.png']").rotate(angle);
	}, 20);
})
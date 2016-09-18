function Button(button) {
	this.btnstring = button;
	this.button = document.getElementsByClassName(button)[0];
	this.setevent();
}
Button.prototype.setevent = function() {
		var me = this;
		var preview = document.getElementsByClassName('preview')[0];
		var otherbutton = document.getElementsByClassName('previewindex')[0].getElementsByTagName('div');
		var otherspan = document.getElementsByClassName('previewindex')[0].getElementsByTagName('span');
		var str = parseInt(this.btnstring.substring(6)) + 1;
		var mmm = document.getElementsByClassName("previewtxt"+this.btnstring.substring(6))[0];
		this.button.onclick = function() {
			preview.style.backgroundImage = 'url(images/' + str + '.jpg)';
			for (let i = otherbutton.length - 1; i >= 0; i--) {
				otherbutton[i].style.backgroundColor = '#ffffff';
			}
			this.style.backgroundColor = '#ff6600';
			for (let i = otherspan.length - 1; i >= 0; i--) {
				otherspan[i].style.display = 'none';
			}
			mmm.style.display = 'inline';
		}
	}
	//preview.style.backgroundImage = 'url(images/'+ str + '.jpg)';
	/*$(".button1").click(function  () {
		$(".preview").css("background-image","url(images/2.jpg)");//链接的背景图片
		$(".previewindex div:not(.button1)").css("background-color","#ffffff");//按钮的颜色
		$(this).css("background-color","#ff6600");//按钮的颜色
		$(".previewindex span:not(.previewtxt1)").hide();
		$(".previewtxt1").show();
		$(".preview").parent().attr("href","#");//链接的地址，如这里是第一张图片的地址
		select = 1;
		return false;
	})
	$(".button2").click(function  () {
		$(".preview").css("background-image","url(images/3.jpg)");
		$(".previewindex div:not(.button2)").css("background-color","#ffffff");
		$(this).css("background-color","#ff6600");
		$(".previewindex span:not(.previewtxt2)").hide();
		$(".previewtxt2").show();
		$(".preview").parent().attr("href","#");
		select = 2;
		return false;
	})
	$(".button3").click(function  () {
		$(".preview").css("background-image","url(images/4.jpg)");
		$(".previewindex div:not(.button3)").css("background-color","#ffffff");
		$(this).css("background-color","#ff6600");
		$(".previewindex span:not(.previewtxt3)").hide();
		$(".previewtxt3").show();
		$(".preview").parent().attr("href","#");
		select = 3;
		return false;
	})
	$(".button4").click(function  () {
		$(".preview").css("background-image","url(images/5.jpg)");
		$(".previewindex div:not(.button4)").css("background-color","#ffffff");
		$(this).css("background-color","#ff6600");
		$(".previewindex span:not(.previewtxt4)").hide();
		$(".previewtxt4").show();
		$(".preview").parent().attr("href","#");
		select = 4;
		return false;
	})
	$(".button5").click(function  () {
		$(".preview").css("background-image","url(images/6.jpg)");
		$(".previewindex div:not(.button5)").css("background-color","#ffffff");
		$(this).css("background-color","#ff6600");
		$(".previewindex span:not(.previewtxt5)").hide();
		$(".previewtxt5").show();
		$(".preview").parent().attr("href","#");
		select = 5;
		return false;
	})
	var selectbutton = ".button"+select;
	$(".preview").on("swipeleft",function(){
		if (select>=5) {
			select--;
		};
		select++;
		selectbutton = ".button"+select;
		$(selectbutton).click();
	});
	$(".preview").on("swiperight",function(){
		if (select<=1) {
			select++;
		};
		select--;
		selectbutton = ".button"+select;
		$(selectbutton).click();
	});
	setInterval(function  () {
		if (select == 0) {
			$(".button1").click();
			select = 1;
		}
		else if (select == 1) {
			$(".button2").click();
			select = 2;
		}
		else if (select == 2) {
			$(".button3").click();
			select = 3;
		}
		else if (select == 3) {
			$(".button4").click();
			select = 4;
		}
		else if (select == 4) {
			$(".button5").click();
			select = 0;
		};
	}, 4000);
	//循环div.preview的五张图片的播放
	/*$("li").each(function  () {
		var maxwidth = 14;
		if ($(this).text().length>maxwidth) {
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+'…');
		};
	})*/
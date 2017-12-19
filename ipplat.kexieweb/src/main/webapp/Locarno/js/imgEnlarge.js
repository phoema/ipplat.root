var ImgGlass = function() {
	var mouseX = 0; // 鼠标移动的位置X
	var mouseY = 0; // 鼠标移动的位置Y
	var maxLeft = 0; // 最右边
	var maxTop = 0; // 最下边
	var markLeft = 0; // 放大镜移动的左部距离
	var markTop = 0; // 放大镜移动的顶部距离
	var perX = 0; // 移动的X百分比
	var perY = 0; // 移动的Y百分比
	var bigLeft = 0; // 大图要移动left的距离
	var bigTop = 0; // 大图要移动top的距离

	// 改变放大镜的位置
	function updataMark($mark, $this) {
		// 通过判断，让小框只能在小图区域中移动
		if (markLeft < 0) {
			markLeft = 0;
		} else if (markLeft > maxLeft) {
			markLeft = maxLeft;
		}

		if (markTop < 0) {
			markTop = 0;
		} else if (markTop > maxTop) {
			markTop = maxTop;
		}

		// 获取放大镜的移动比例，即这个小框在区域中移动的比例
		perX = markLeft / $this.outerWidth();
		perY = markTop / $this.outerHeight();

		bigLeft = -perX * $this.prev().children(".big").outerWidth();
		bigTop = -perY * $this.prev().children(".big").outerHeight();

		// 设定小框的位置
		$mark.css({
			"left" : markLeft,
			"top" : markTop,
			"display" : "block"
		});
	}

	// 改变大图的位置
	function updataBig($this) {
		$this.prev().children(".big").css({
			"display" : "block",
			"left" : bigLeft,
			"top" : bigTop
		});
		$this.parent().children(".boxBig").css({
			"display" : "block"
		});
	}

	// 鼠标移出时
	function cancle() {
		$(".big").css({
			"display" : "none"
		});
		$(".mark").css({
			"display" : "none"
		});
		$(".boxBig").css({
			"display" : "none"
		});
	}

	// 鼠标小图上移动时
	function imgMouseMove(event) {

		var srcPath = true;
		if ($(this).children("img").attr("nopic") == "nopic") {
			srcPath = false;
		}

		if (!srcPath) {
			$(this).removeClass("cursorPointer");
			return;
		}

		var $this = $(this);
		var $mark = $(this).children(".mark");

		// 鼠标在小图的位置
		mouseX = event.pageX - $this.offset().left - $mark.outerWidth() / 2;
		mouseY = event.pageY - $this.offset().top - $mark.outerHeight() / 2;
		// 最大值
		var padding_left = $(this).children(".smallImgDisplay").css("padding-left");
		var intPadding_left = parseInt(padding_left.substr(0, padding_left.length-2));
		maxLeft = $this.width() - $mark.outerWidth() + intPadding_left + intPadding_left + 2;
		maxTop = $this.height() - $mark.outerHeight();
		markLeft = mouseX;
		markTop = mouseY;
		updataMark($mark, $this);
		updataBig($this);
	}

	return {
		setGlass : function(c) {

			$(c + " img").each(function() {

				if ($(this).attr("src") == null || $(this).attr("src") == "") {
					$(this).attr("src", "/" + rootPath + "module/di/img/patent/nopic.jpg");
					$(this).attr("nopic", "nopic");
					return;
				}

			});

			// // 设置大图比例
			// // 小图 w214px / h194px
			// // 遮罩层 80px / 80px
			// // 大图展示区 350px 350px
			// // 即小图80的内容 大图要展示350的内容
			// var markW = parseInt($(".mark").width());
			// var markH = parseInt($(".mark").height());
			//
			// var boxBigW = parseInt($(".boxBig").width());
			// var boxBigH = parseInt($(".boxBig").height());
			//
			// // 比例
			// var w = markW / boxBigW;
			// var h = markH / boxBigH;
			//
			// // 小图
			// var smallW = parseInt($(".smallImgDisplay").width());
			// var smallH = parseInt($(".smallImgDisplay").height());
			//
			// $(".bigImgDisplay").each(function() {
			//
			// alert($(this).width());
			// // alert($(this).height());
			//
			// });

			$(c).bind("mousemove", imgMouseMove).bind("mouseleave", cancle);
		}
	};

}

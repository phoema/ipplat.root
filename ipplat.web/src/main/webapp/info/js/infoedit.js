
function menuaction(value) {
	
	// 导航切换
	$(".menuson li").click(
			function() {
				$(".menuson li.active").removeClass("active");
				$(this).addClass("active");
				$(".leftinfo").scrollTop(0);
				//setTimeout(function() {
				//	$(".leftinfo").scrollTop(
				//			$(".menuson li.active").parent().parent().parent()
				//					.prev().offset().top
					//				- $(".headerb").height());
				//}, 100);
			});

	$('.title').click(function() {
		var $ul = $(this).next('ul');
		$('dd').find('ul').slideUp();
		if ($ul.is(':visible')) {
			$(this).next('ul').slideUp();
		} else {
			$(this).next('ul').slideDown();
		}
	});
	var arrleftmenu = value.split('_');
	if (arrleftmenu.length == 2) {
		$(".leftmenu").find(".title[name='" + value + "']").click();
	} else if (arrleftmenu.length == 3) {
		$(".leftmenu").find(
				".title[name='" + arrleftmenu[0] + '_' + arrleftmenu[1] + "']")
				.click();
		$(".leftmenu").find(".menuson li[name='" + value + "']").click();
	}
}


/* 自适应宽度 */
function changwidth() {
	var hh = $(window).height();
	hh = hh - 90 - 70;
	$(".rightinfo").css("min-height", hh + "px");
	$('.rightinfo').css({
		'width' : ($(window).width() - $(".leftinfo").width() - 2-16)
	});
	var hh = $(document).height() -$("#headerNav").height() - $("#footerNew").height();
	$(".leftinfo").css("height", hh + "px");

	var leftwidth = 187;
	if(($(".leftinfo .lefttop").length*40+$(".leftinfo .leftmenu").length*30)>$(".leftinfo").height())
		leftwidth = 187-17;
	/*if($(".leftinfo").scrollHeight >$(".leftinfo").offsetHeight )
		leftwidth= 187-17;*/

	if (navigator.userAgent.indexOf('MSIE') >= 0) {
	if (document.documentMode >7)
		leftwidth = leftwidth +17;
	} else if (navigator.userAgent.indexOf('Firefox') >= 0) {

	} else if (navigator.userAgent.indexOf('Opera') >= 0) {

	} else if (navigator.userAgent.indexOf('Chrome') >= 0) {
	 
	} else {
		
	}
	$(".leftinfo .leftmenu").css("width", leftwidth + "px");
	$(".leftinfo .lefttop").css("width", leftwidth + "px");
	$(window).scroll(function() {
		var _scroll = $(this).scrollTop();
		
		if (_scroll > hearder) {
			$(".leftinfo").css({
				"top" : (_scroll - hearder) + "px"
			});
		} else {
			$(".leftinfo").css({
				"top" : "0px"
			});
		}
		});
}
var uid = "";
$(function() {
	var id = getpathname("id");
	var typestr = getpathname("ty");
	var menuvalue = "";
	if (typestr == "info") {
		menuvalue = id == "" ? "1_1_2" : "1_1_1";
		$(".toolbar li[name='info']").show()
	} else if (typestr == "info2") {
		menuvalue = id == "" ? "2_1_2" : "2_1_1";
		$(".toolbar li[name='info2']").show()
	} 
	menuaction(menuvalue);

	$(".placeul li[name='menu1']").html(
			$(".leftinfo li[name='" + menuvalue + "']").parent().parent()
					.parent().prev().text()
					+ "&gt;");
	$(".placeul li[name='menu2']").html(
			$(".leftinfo li[name='" + menuvalue + "']").parent().prev().text()
					+ "&gt;");
	$(".placeul li[name='menu3']").html(
			$(".leftinfo li[name='" + menuvalue + "']").find("a").text());

	changwidth();
	jQuery(window).resize(function() {
		changwidth();
	});
	/*
	var url = _UserUrl + "getnowpagesessionuser";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},
		async : false,
		success : function(sender) {
			if (sender.returnvalue != '0') {
				window.location.href = _RootUrl
						+ "html/useradmin/login.html?referrUrl="
						+ window.location.href;
				return;
			} else {
				uid = sender.option.uid;

				setusername(sender.option.loginname);
				if (sender.option.type >= 56) {
					swfloadBegin();
				} else {
					window.location.href = _RootUrl
							+ "html/useradmin/login.html?referrUrl="
							+ window.location.href;
					return;
				}

			}
		},
		error : function(sender) {
		}
	});
	*/
	// $(".menuson").find("li[name='2_2']").parent().prev().next('ul').slideDown();
	// $(".menuson").find("li[name='2_2']").addClass("active");
	$('.tablelist tbody tr:odd').addClass('odd');
	bindseltype();
	bindselcol();

	return;
	/* 先加载 在使用 */
	// 判断ueditor 编辑器是否创建成功
	ue.addListener("ready", function() {
		// editor准备好之后才可以使用
		var id = getpathname("id");
		if (id == "") {
			bindinitinfo();
		} else {// 编辑
			bindinfodetailsbyid(id);
		}

	});

});

// 新建资讯，初始化页面内容
function bindinitinfo() {
	$("#savebystatebtn").val("审核通过");
	$("#savebystatebtn").unbind("click");
	$("#savebystatebtn").bind("click", function() {
		saveinfo("", 1);
	});

	$("#canclebtn").unbind("click");
	$("#canclebtn").bind(
			"click",
			function() {
				var surl =  "infomanagelist.html?ty="
						+ getpathname("ty");
				locationwin(surl);
			});

	$("#savenostatebtn").unbind("click");
	$("#savenostatebtn").bind("click", function() {
		saveinfo("", 2);
	});
	$("#selrecommend option").filter("[value='0']").attr("selected", true);
	$("#selistop option").filter("[value='0']").attr("selected", true);

	// 去掉作者、网址链接、关键词、摘要字段
	var typestr = getpathname("ty");
	
	if (typestr != "info") {
		$("#eauthor").parent().hide();
		$("#elink").parent().hide();
		$("#ekeywords").parent().hide();
		$("#eabstract").parent().hide();
		$("#eprior").parent().hide();
		$("#selistop").parent().hide(); 
		$("#swfupload").parent().parent().hide();
	}
	//  
	if (typestr == "academy") {
		$("#eprior").parent().show();
		$("#swfupload").parent().parent().show();
	}
}

// 保存资讯，id为空的为add，否则为update
function saveinfo(id, state) {

	var etitle = $.trim($("#etitle").val());
	if (etitle.length > 30 || etitle == "") {
		layer.alert("资讯标题不能为空，且不能超过30个字符");
		return false;
	}
	var group = $("#selgroup").val();
	var type = $("#seltype").val();
	if (group == "" || type == "") {
		layer.alert("资讯的类型和栏目为必填项");
		return false;
	}
	var eprior = $.trim($("#eprior").val());
	var istop = $('#selistop').val();
	var erecommend = $('#selrecommend').val();

	var eauthor = $.trim($("#eauthor").val());
	var esource = $.trim($("#esource").val());
	var elink = $.trim($("#elink").val());
	var str = elink.match(/http:\/\/.+/);
	if (str == null && elink != "") {
		layer.alert("网址链接以“http://”开头");
		return false;
	}

	var ekeywords = $.trim($("#ekeywords").val());
	var eabstract = $.trim($("#eabstract").val());

	if (eabstract.length > 90) {
		layer.alert("摘要内容不能超过90个字符");
		return false;
	}
	var regNum = /^[0-9]*$/;
	if (!regNum.test(eprior)) {
		layer.alert("优先级必须填入数字");
		return false;
	}

	var econtent = UE.getEditor('editor').getContent();

	// 图片、附件
	var ajaxurl = "";
	var datas;
	if (id == "") {
		ajaxurl = _RootUrl + "info/add";

	} else {
		ajaxurl = _RootUrl + "info/update";

	}
	datas = {
		id : id,
		title : etitle,
		content : econtent,
		typevalue : group,
		cid : type,
		author : eauthor,
		keywords : ekeywords,
		tags : "",
		abst : eabstract,
		website : elink,
		state : state,
		prior : eprior,
		istop : istop,
		recommend : erecommend,
		source : esource,
		fengmian_img : $("#fmimg").attr("value"),// 封面
		file_info : ""// 附件
	// ,fid:$("#fmimg").attr("value")
	};
	// 接口
	$
			.ajax({
				type : "post",
				url : ajaxurl,
				dataType : "json", // 返回值类型
				data : datas,
				success : function(sender) {
					if (sender.returnvalue != '0') {
						if (sender.errorinfo.indexOf("登录") > -1) {
							locationwin(_RootUrl
									+ "html/useradmin/login.html?referrUrl="
									+ window.location.href);
						} else
							layer.alert(sender.errorinfo);
						return;
					} else {
						if (id == "") {
							locationwin "infomanagelist.html?ty="
									+ getpathname("ty"));
						} else {

							var confirm = layer
									.confirm(
											'操作成功，【确定】返回资讯列表页面，【取消】继续编辑。',
											function() {
												locationwin( "infomanagelist.html?ty="
														+ getpathname("ty"));
											},
											function() {
												if (id == "")
													locationwin(_RootUrl
															+ "html/useradmin/infoedit.html?id="
															+ sender.option
															+ "&ty="
															+ getpathname("ty"));
											});
						}
					}
				},
				error : function(sender) {
					layer.alert('error');
				}

			});
}
// 通过id获取资讯详情
function bindinfodetailsbyid(id) {
	var typestr = getpathname("ty");
	
	if (typestr != "info") {
		$("#eauthor").parent().hide();
		$("#elink").parent().hide();
		$("#ekeywords").parent().hide();
		$("#eabstract").parent().hide();
		$("#eprior").parent().hide();
		$("#selistop").parent().hide(); 
		$("#swfupload").parent().parent().hide();
	}
	//  
	if (typestr == "academy") {
		$("#eprior").parent().show();
		$("#swfupload").parent().parent().show();
	}
	getattach(id);// 附件

	// 接口
	var url = _RootUrl + "info/getinfo";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {
			id : id
		},
		success : function(sender) {
			if (sender.returnvalue != '0') {
				return;
			} else {

				$("#etitle").val(sender.option.title);
				// 分类
				$("#selgroup option").filter(
						"[value='" + sender.option.typevalue + "']").attr(
						"selected", true);
				bindselcol(sender.option.typevalue);
				$("#seltype option").filter(
						"[value='" + sender.option.cid + "']").attr("selected",
						true);
				/*
				 * if (sender.option.starttime != "1900-01-01 00:00:00.0")
				 * $("#begintime").val(sender.option.starttime); else
				 * $("#begintime").val(""); if (sender.option.expiretime !=
				 * "1900-01-01 00:00:00.0")
				 * $("#endtime").val(sender.option.expiretime); else
				 * $("#endtime").val("");
				 */
				$("#eprior").val(sender.option.prior);
				$("#selrecommend option").filter(
						"[value='" + sender.option.recommend + "']").attr(
						"selected", true);
				$("#selistop option").filter(
						"[value='" + sender.option.istop + "']").attr(
						"selected", true);
				$("#eauthor").val(sender.option.author);
				$("#esource").val(sender.option.source);
				$("#elink").val(sender.option.website);
				$("#ekeywords").val(sender.option.keywords);
				$("#eabstract").val(sender.option.abst);

				// ue.addListener("ready", function() {// editor准备好之后才可以使用
				// alert('sender**********'+sender.option.content);
				ue.setContent(sender.option.content, false);
				// });
				// 图片
				if (sender.option.imgthumpath != "")
					$("#fmimg").attr("src",
							_RootUrl + sender.option.imgthumpath);

				var state = sender.option.state;
				setbtn(id, state);
			}

		},
		error : function(sender) {

		}

	});
}

function setbtn(id, state) {

	if (state == 2) {// 正在发布的
		$("#savebystatebtn").val("审核通过");
		$("#savebystatebtn").unbind("click");
		$("#savebystatebtn").bind("click", function() {
			saveinfo(id, 1);
		});
	} else if (state == 1) {// 审核通过的
		$("#savebystatebtn").val("暂停发布");
		$("#savebystatebtn").unbind("click");
		$("#savebystatebtn").bind("click", function() {
			saveinfo(id, 3);
		});
	} else if (state == 3) {// 暂停的
		$("#savebystatebtn").val("取消暂停");
		$("#savebystatebtn").unbind("click");
		$("#savebystatebtn").bind("click", function() {
			saveinfo(id, 1);
		});
	} else
		$("#savebystatebtn").hide();

	$("#canclebtn").unbind("click");
	$("#canclebtn").bind(
			"click",
			function() {
				var surl =  "infomanagelist.html?ty="
						+ getpathname("ty");
				locationwin(surl);
			});
	$("#savenostatebtn").unbind("click");
	$("#savenostatebtn").bind("click", function() {
		saveinfo(id, state);
	});
	if (id != "") {
		$("#previewbtn").show();
		$("#previewbtn").unbind("click");
		$("#previewbtn").bind("click", function() {
			var surl = _RootUrl + "html/info/infopreview.html?id=" + id;

			if(getpathname("ty")=="knowledge"||getpathname("ty")=="help"||getpathname("ty")=="academy")
				 surl = _RootUrl + "html/index/infopreview.html?id=" + id;
			openwin(surl);
		});
	} else
		$("#previewbtn").hide();

}
// 获取参数
function getpathname(index) {
	var pathname = location.href;
	var returnvalue = "";
	if (index == "id") {// 检索文本
		if (pathname.indexOf("?id=") > -1) {
			returnvalue = /\?id=[^&]*/.exec(pathname)[0].replace('?id=', '');
		} else if (pathname.indexOf("&id=") > -1) {
			returnvalue = /&id=[^&]*/.exec(pathname)[0].replace('&id=', '');
		}
	}
	if (index == "ty") {// 检索文本
		if (pathname.indexOf("?ty=") > -1) {
			returnvalue = /\?ty=[^&]*/.exec(pathname)[0].replace('?ty=', '');
		} else if (pathname.indexOf("&ty=") > -1) {
			returnvalue = /&ty=[^&]*/.exec(pathname)[0].replace('&ty=', '');
		}
	}
	return returnvalue; // 
}

function bindseltype() {
	// 接口
	var url = _RootUrl + "infotype/getall";
	$
			.ajax({
				type : "post",
				url : url,
				dataType : "json", // 返回值类型
				async : false,
				data : {},
				success : function(sender) {
					if (sender.returnvalue != '0') {
						return;
					} else {
						var obj = sender.option;
						var s = [];
						var typestr = "," + getpathname("ty") + ",";
						s.push('<option value="">----请选择----</option>');
						for ( var key in obj) {
							if (typestr == ",,"
									|| typestr.indexOf("," + obj[key].typevalue
											+ ",") > -1) {
								s.push('<option value="' + obj[key].typevalue
										+ '">' + obj[key].name + '</option>');
							}
						}
						$("#selgroup").html(s.join(''));
					}
				},
				error : function(sender) {
				}

			});

}

function onchangetype() {
	var typevalue = $("#selgroup").val();

	bindselcol(typevalue);
}
function bindselcol(typevalue) {
	if (typevalue == undefined || typevalue == "") {// 没有选择类型的时候，栏目为空
		var s = [];
		s.push('<option value="">----请选择----</option>');
		$("#seltype").html(s.join(''));
		return;
	}
	// 接口
	var url = _RootUrl + "infocolumn/getlistbytype";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		async : false,
		data : {
			typevalue : typevalue
		},
		success : function(sender) {
			if (sender.returnvalue != '0') {
				var s = [];
				s.push('<option value="">----请选择----</option>');
				$("#seltype").html(s.join(''));
				return;
			} else {
				var obj = sender.option;
				var s = [];
				s.push('<option value="">----请选择----</option>');

				for ( var key in obj) {
					s.push('<option value="' + obj[key].id + '">'
							+ obj[key].title + '</option>');
				}
				$("#seltype").html(s.join(''));
			}
		},
		error : function(sender) {
		}

	});

}
// 获取附件
function getattach(infoid) {
	// 接口
	var url = _RootUrl + "attachment/getall";
	$
			.ajax({
				type : "post",
				url : url,
				dataType : "json", // 返回值类型
				data : {
					infoid : infoid
				},
				success : function(sender) {
					if (sender.returnvalue != '0') {
						return;
					} else {
						var s = [];
						var obj = sender.option1;
						for ( var key in obj) {

							s = [];
							s
									.push('<li id="'
											+ obj[key].id
											+ '" style="list-style-type: none;" class="tsuc success" data-pid="">');
							s.push('<em style="float:left;">'
									+ obj[key].filename + '</em>');
							s
									.push('<a onclick="delfile(\'\',\''
											+ obj[key].id
											+ '\');"  style="float:left;color:#0060a6;cursor:pointer;" name="cancel">删除</a></li>');

							$("#logListfile").append(s.join(''));

							// $("li#" + obj[key].id + "")
							// .find("a[name='cancel']").unbind("click");
							//							 
							// $("li#" + obj[key].id + "")
							// .find("a[name='cancel']").click(
							//											
							// function(e) {
							// delfile("", obj[key].id);
							// });
						}
					}
				},
				error : function(sender) {
				}

			});
}
// onclick="downfile(\''+obj[key].filename+'\',\''+obj[key].id+'\');"
function downfile(filename, fid) {
	locationwin(_RootUrl + "attachment/filedownload?filename=" + filename
			+ "&fid=" + fid);
}
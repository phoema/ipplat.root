
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
	var hh = $(window).height() -$("#headerNav").height() - $("#footerNew").height();
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
$(function() {
	var typestr = getpathname("ty");
	var menuvalue = "";
	if (typestr == "info") {
		menuvalue = "1_1_1";
		$(".toolbar li[name='info']").show()
	} else if (typestr == "info2") {
		menuvalue = "2_1_1";
		$(".toolbar li[name='info2']").show()
	}
	$(".placeul li[name='menu1']").html(
			$(".leftinfo li[name='" + menuvalue + "']").parent().parent()
					.parent().prev().text()
					+ "&gt;");
	$(".placeul li[name='menu2']").html(
			$(".leftinfo li[name='" + menuvalue + "']").parent().prev().text()
					+ "&gt;");
	$(".placeul li[name='menu3']").html(
			$(".leftinfo li[name='" + menuvalue + "']").find("a").text());
	menuaction(menuvalue);
	changwidth();
	jQuery(window).resize(function() {
		changwidth();
	});
	$('.tablelist tbody tr:odd').addClass('odd');
	$('#seltype option:first').prop("selected", 'selected');
	$('#selstate option:first').prop("selected", 'selected');
	$('select[name="timeOpt"] option:first').prop("selected", 'selected');
	bindseltype();
	bindselcol();
	//searchinfos();
}); 
// 静态化 接口
function statictype() {
	var url = _RootUrl + "info/statictype";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				statichotinfos();
				// layer.alert("资讯栏目分类静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}

	});
}

function statichotinfos() {
	var url = _RootUrl + "info/statichotinfos";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				staticinfolist();
				// layer.alert("资讯热文推荐静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}

	});
}
function staticinfolist() {
	var url = _RootUrl + "info/staticinfolist";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				staticinfodetails();
				// layer.alert("资讯列表静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}

	});
}

function staticinfodetails(id) {
	var url = _RootUrl + "info/staticinfodetails";
	if (getpathname("ty") == "knowledge" || getpathname("ty") == "help"
			|| getpathname("ty") == "academy"){
		staticinfodetails_index(id);
		return;
	}
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {
			id : id
		},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				layer.alert("静态化成功");
				// layer.alert("资讯详情静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}

	});
}

// 小常识、帮你选、数据研究院静态化
function staticinfolist_index() {
	var url = _RootUrl + "info/staticinfolist_index";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				staticinfodetails_index();
				// layer.alert("资讯列表静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}

	});
}
function staticinfodetails_index(id) {
	var url = _RootUrl + "info/staticinfodetails_index";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {
			id : id
		},// 修改时的判断需要增加传值uid:""
		success : function(sender) {
			if (sender != true) {
				layer.alert("静态化失败");
				return;
			} else {
				layer.alert("静态化成功");
			}

		},
		error : function(sender) {
			layer.alert("静态化失败");
		}
	});
}

function addNDays() {
	$('#sp').hide();
	var nDays = $('select[name="timeOpt"]').val();
	if (nDays == "") {
		$('#from').val("");
		$('#to').val("");
		return;
	}

	if (nDays == "auto") {
		$('#from').val("");
		$('#to').val("");
		$('#sp').show();
		return;
	}
	var timeFrom = "";
	var timeTo = "";
	if (nDays == "1") {
		var data = new Date();
		timeTo += data.getFullYear() + "-";
		timeTo += (data.getMonth() + 1 < 10 ? "0" + (data.getMonth() + 1)
				: data.getMonth() + 1)
				+ "-";
		timeTo += data.getDate() < 10 ? "0" + data.getDate() : data.getDate();

		var newData = new Date();
		newData.setDate(newData.getDate() + parseInt(nDays - 1));
		timeFrom += newData.getFullYear() + "-";
		timeFrom += (newData.getMonth() + 1 < 10 ? "0"
				+ (newData.getMonth() + 1) : newData.getMonth() + 1)
				+ "-";
		timeFrom += newData.getDate() < 10 ? "0" + newData.getDate() : newData
				.getDate();

		$('#from').val(timeTo);
		$('#to').val(timeFrom);
	} else {

		var data = new Date();
		if (nDays == "-1")
			data.setDate(data.getDate() + parseInt(-1));
		timeTo += data.getFullYear() + "-";
		timeTo += (data.getMonth() + 1 < 10 ? "0" + (data.getMonth() + 1)
				: data.getMonth() + 1)
				+ "-";
		timeTo += data.getDate() < 10 ? "0" + data.getDate() : data.getDate();

		var newData = new Date();
		newData.setDate(newData.getDate() + parseInt(nDays));
		timeFrom += newData.getFullYear() + "-";
		timeFrom += (newData.getMonth() + 1 < 10 ? "0"
				+ (newData.getMonth() + 1) : newData.getMonth() + 1)
				+ "-";
		timeFrom += newData.getDate() < 10 ? "0" + newData.getDate() : newData
				.getDate();
		$('#from').val(timeFrom);
		$('#to').val(timeTo);
	}
}

// 检查日期输入格式
function checkdate(v) {
	var regex1 = v
			.match(
					/^(?:(?:(?:(?=\d{2}(?:(?:[02468][048])|(?:[13579][26])))\d{4}02(?!00)[0-2]\d))|(?:\d{4}(?:(?:(?:(?:0[469])|(?:11))(?!00)(?:(?:[0-2]\d)|(?:30)))|(?:(?:(?:0[13578])|(?:1[02]))(?!00)(?:(?:[0-2]\d)|(?:3[01])))|(?:02(?!(?:00)|(?:29))[0-2]\d))))$/,
					'g');
	if (v == "")
		return true;
	if (regex1 != null && regex1 == v)
		return true;
	if (v.length == 6) {// 输入的是年月
		return false;
	}
	if (v.length == 4) {// 输入的是年月
		return false;
	}
	if (!isNaN(v) && eval(v) > 1900 && eval(v) < 3000)
		return true;
	return false;
}
function checkdate2() {
	var start = $.trim($('#from').val());
	var end = $.trim($('#to').val());
	if (start == "格式为：2014-05-01")
		start = "";
	if (end == "格式为：2014-05-01")
		end = "";
	// 各种情况
	if ((end != '' && start == '') || (end == '' && start != '')) {
		layer.alert('日期输入不完整');
		return false;
	}
	if ((end == '' && start == '')) {
		layer.alert('请正确填写日期，或者选择一个日期！');
		return false;
	}
	if (start.length != 10) {
		layer.alert('开始日期输入错误');
		return false;
	}
	start = start.replace('-', '').replace('-', '').replace('-', '');
	if (!checkdate(start)) {
		layer.alert('开始日期输入错误');
		return false;
	}
	if (end.length != 10) {
		layer.alert('结束日期输入错误');
		return false;
	}
	end = end.replace('-', '').replace('-', '').replace('-', '');
	if (!checkdate(end)) {
		layer.alert('结束日期输入错误');
		return false;
	}
	if (start.length > end.length) {
		if (start.substring(0, end.length) > end) {
			layer.alert('开始日期不能大于结束日期');
			return false;
		}
	} else if (start.length < end.length) {
		if (end.substring(0, start.length) < start) {
			layer.alert('开始日期不能大于结束日期');
			return false;
		}
	} else {
		if (start > end) {
			layer.alert('开始日期不能大于结束日期');
			return false;
		}
	}
	return true;
}

// 检索资讯
function searchinfos() {
	var loadi = layer.load('加载中…'); // 先清空
	// 简查用户登录状态

	var uid = "";
	var phone = "";
	var url = _UserUrl + "getnowpagesessionuser";

	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {},
		success : function(sender) {
			if (sender.returnvalue != '0') {
				window.location.href = _RootUrl
						+ "html/useradmin/login.html?referrUrl="
						+ window.location.href;
				return;
			} else {
				setusername(sender.option.loginname);
				uid = sender.option.uid;
				if (sender.option.type >= 56) {
					getinfolist();
				} else {
					window.location.href = _RootUrl
							+ "html/useradmin/login.html?referrUrl="
							+ window.location.href;
					return;
				}
			}
			layer.close(loadi);
		},
		error : function(sender) {
		}

	});

}
var pagesize = 10;
function getinfolist(pageindex) {
	if (pageindex == undefined) {
		pageindex = 1;
	}
	$("#infolist").show();
	$("#infopage").html("");

	var starttime = $.trim($("#from").val());
	var endtime = $.trim($("#to").val());
	var type = $("#seltype").val();
	var state = $("#selstate").val();
	var group = $("#selgroup").val();

	if (group == "") {
		group = getpathname("ty");
	}
	if ($('select[name="timeOpt"]').val() == "auto" && !checkdate2()) {
		return false;
	}
	var title = $.trim($("#evetitle").val());
	var eveabstract = $.trim($("#eveabstract").val());
	var content = $.trim($("#evecontent").val());
	// alert(starttime+","+endtime+","+encodeURIComponent(title)+","+encodeURIComponent(eveabstract)+","+encodeURIComponent(content)+","+pageindex+","+state+","+group+","+type);
	// 接口
	var url = _RootUrl + "info/getlistbyadmin";
	$
			.ajax({
				type : "post",
				url : url,
				dataType : "json",
				data : {
					starttime : starttime,
					endtime : endtime,
					title : title,
					abst : eveabstract,
					content : content,
					currentpage : pageindex,
					pagesize : pagesize,
					state : state,
					typevalue : group,
					cid : type
				},
				success : function(sender) {
					if (sender.returnvalue != '0') {
						$("#infolist").find("tbody tr").remove();
						$("#infolist")
								.find("tbody")
								.append(
										"<tr><td style='text-align: center; ' colspan='8'>暂无结果</td></tr>");
						return;
					}

					var obj = sender.option;
					var totalcount = sender.records;
					if (totalcount == 0) {
						$("#infolist").find("tbody tr").remove();
						$("#infolist")
								.find("tbody")
								.append(
										"<tr><td style='text-align: center; ' colspan='8'>暂无结果</td></tr>");
						showpage(0, pageindex);
						return;
					}

					var pagecount = parseInt((totalcount + pagesize - 1)
							/ pagesize);
					$("i[name='totalcount']").text(totalcount);
					$("i[name='pageindex']").text(pageindex);
					$("#infolist").find("tbody tr").remove();
					var s = [];
					var i = 0;
					var infourl = "";

					for ( var key in obj) {
						i++;
						s.push('<tr id="info_' + obj[key].id + '" >');
						// s.push('<td><input name="chkitem" type="checkbox"
						// value="" /></td>');
						s.push('<td>' + ((pageindex - 1) * pagesize + i)
								+ '</td>');

						if (getpathname("ty") == "knowledge"
								|| getpathname("ty") == "help"
								|| getpathname("ty") == "academy") {
							infourl = _RootUrl + "html/indexhtml/details/"
									+ obj[key].id + ".html";
						} else
							infourl = _RootUrl + "html/infohtml/infodetails/"
									+ obj[key].id + ".html";
						if (obj[key].state == 1)//
							s.push('<td class="td1"><a href="' + infourl
									+ '" target="_blank"  >' + obj[key].title
									+ '</a></td>');
						else {
							s
									.push('<td class="td1"><span   style="cursor: default">'
											+ obj[key].title + '</span></td>');
						}
						s.push('<td>' + obj[key].typename + '</td>');
						s.push('<td>' + obj[key].colname + '</td>');
						s.push('<td title="'
								+ obj[key].createtime.substring(0, 19) + '">'
								+ obj[key].createtime.substring(0, 10)
								+ '</td>');
						var infotime = obj[key].audittime;// 审核日期

						if (obj[key].state != 1 || infotime == ''
								|| infotime == null)
							s.push('<td>&nbsp;</td>');
						else
							s.push('<td title="' + infotime.substring(0, 19)
									+ '">' + infotime.substring(0, 10)
									+ '</td>');
						s.push('<td>'
								+ $("#selstate").find(
										"option[value='" + obj[key].state
												+ "']").text() + '</td>');
						s.push('<td class="base_title2">');
						s
								.push('&nbsp;&nbsp;<a onclick="editinfo(\''
										+ (obj[key].id)
										+ '\');" style="cursor:pointer;" href="javascript:void(0);">编辑</a>');

						if (obj[key].state == 2) {
							s
									.push('&nbsp;&nbsp;<a name="statebtn" state="1" tid="'
											+ (obj[key].id)
											+ '"  style="cursor:pointer;" href="javascript:void(0);">审核通过</a>');
						} else if (obj[key].state == 1) {

							s
									.push('&nbsp;&nbsp;<a name="statebtn" state="3" tid="'
											+ (obj[key].id)
											+ '" style="cursor:pointer;" href="javascript:void(0);">暂停</a>');
						} else if (obj[key].state == 3) {
							s
									.push('&nbsp;&nbsp;<a name="statebtn" state="1" tid="'
											+ (obj[key].id)
											+ '" style="cursor:pointer;" href="javascript:void(0);">取消暂停</a>');
						}
						s
								.push('&nbsp;&nbsp;<a onclick="deleteinfo(\''
										+ (obj[key].id)
										+ '\','
										+ pageindex
										+ ');" style="cursor:pointer;" href="javascript:void(0);">删除</a>');
						s
								.push('&nbsp;&nbsp;<a onclick="previewinfo(\''
										+ (obj[key].id)
										+ '\');" style="cursor:pointer;" href="javascript:void(0);">预览</a>');
						 
							s
									.push('&nbsp;&nbsp;<a name="tostaticbtn" onclick="staticinfodetails(\''
											+ (obj[key].id)
											+ '\');" style="cursor:pointer;'
											+ ((obj[key].state == 1 || obj[key].state == 3) ? ""
													: "display:none;")
											+ '" href="javascript:void(0);">静态化</a>');
							if (getpathname("ty") == "knowledge"
									|| getpathname("ty") == "help"
									|| getpathname("ty") == "academy") {
								s
										.push('&nbsp;&nbsp;<a name="toindexbtn" imageurl="'+obj[key].imgthumpath+'" cid="'+obj[key].cid+'"   tid="'
												+ (obj[key].id)
												+ '" style="cursor:pointer;'
												+ ((obj[key].state == 1) ? ""
														: "display:none;")
												+ '" href="javascript:void(0);">推荐到首页</a>');
							}
						 
						s.push('</td></tr>');

					}
					$("#infolist").find("tbody").append(s.join(''));
					bindclickbtn();
					changwidth();
					showpage(pagecount, pageindex);

				},
				error : function(sender) {
					layer.alert("请刷新页面重试");
				}
			});

}
function bindclickbtn() {
	$("#infolist tbody").find("a[name='statebtn']").unbind("click");
	$("#infolist tbody").find("a[name='statebtn']").bind("click", function() {
		var id = $(this).attr("tid");
		var state = $(this).attr("state");
		setinfostate(id, state, this);
	});
	$("#infolist tbody").find("a[name='toindexbtn']").unbind("click");
	$("#infolist tbody").find("a[name='toindexbtn']").bind("click", function() {
		var id = $(this).attr("tid");
		infotoindex(id, $(this).attr("cid"),$(this).attr("imageurl") ); 
	});
	
	

}
//推荐到首页 
var loadingtoindex;
function infotoindex(id,cid,imageurl) { 
	 loadingtoindex= layer.load('正在操作，请稍候…');
	var datas;
if(cid=="7")
cid="2";
else if(cid=="8")
		cid="3";
else if(cid=="9")
	cid="4";
else if(cid=="10")
	cid="5";
else if(cid=="11")
	cid="6";
if(cid=="6"){
	datas=	{
			command	:"insert", 
			mtype : cid,	
			pause:"false",	
			title:$.trim($("#info_"+id).find("td:eq(1)").text()),	 
			url: _RootUrl + "html/indexhtml/details/"+id + ".html",
			imageurl:imageurl
		}
	
}else{
datas=	{
		command	:"insert", 
		mtype : cid,	
		pause:"false",	
		title:$.trim($("#info_"+id).find("td:eq(1)").text()),	 
		url: _RootUrl + "html/indexhtml/details/"+id + ".html"
	}
}
	var url = _RootUrl + "ConfigCarouselImage";
	$.ajax({
		type : "post",
		url : url,
		dataType : "text", // 返回值类型
		data :datas,
		success : function(data) {
			var dataJ = eval("(" + data + ")");
			if (dataJ.state == 'success'){
				staticFirst();
			}else{
				layer.alert(dataJ.message);
				layer.close(loadingtoindex);
				return;
			}
		},
		error : function(data) {layer.alert("操作失败，请联系管理员");
		layer.close(loadingtoindex);
		return;
		}

	});
}

/* 首页静态化 */
function staticFirst() {
	 
	$.ajax({
		type : "get",
		url :  _RootUrl + "indexstaticize",
		success : function(data) {
			// {state:'success',message:'操作成功'}
			 
			if (data == 'true') {
				 
							layer.alert("操作成功"); 
							layer.close(loadingtoindex);
						 
			} else {
				layer.alert("操作失败，请联系管理员");
				layer.close(loadingtoindex);
			}
		},
		error : function() {
			layer.alert("操作失败，请联系管理员");
			layer.close(loadingtoindex);
		}
	});

}
// 分页
function showpage(pagecount, pageindex, params) {
	if (params == undefined)
		params = "";
	pagecount = parseInt(pagecount);
	if (pagecount == 0) {
		$("#pagin").hide();
		return;
	}
	if (pageindex > pagecount) {
		getinfolist(1);
		return;
	}
	$("#pagin").show();
	$("#infopage").html("");
	var s = [];
	s.push('<li class="paginItem"> <a href="javascript:getinfolist('
			+ (pageindex > 1 ? (pageindex - 1) + "" : "1"));
	s.push(');"><div class="pagepre"></div> </a></li>');

	var first = 0;
	var end = 10;
	if (pageindex < 10 || pagecount < 10) {
		first = 1;
		end = 10;
	} else if (pageindex >= pagecount - 4) {// 最后5页
		first = pagecount - 8;
		end = pagecount + 1;
	} else {
		first = pageindex - 4;
		end = pageindex + 5;
	}
	for ( var i = first; i < end && i <= pagecount; i++) {
		if (i == pageindex) {
			s.push('<li class="paginItem current"><a href="javascript:;">' + i
					+ '</a></li>');
		} else {
			s.push('<li class="paginItem"> <a href="javascript:getinfolist('
					+ i + ');">' + i + '</a></li>');
		}
	}

	s.push('<li class="paginItem"><a href="javascript:getinfolist('
			+ (pageindex < pagecount ? (pageindex + 1) + "" : pagecount + ""));
	s.push(');"><div class="pagenxt"></div></a> </div>');

	$("#infopage").html(s.join(""));
}
// 编辑
function editinfo(id) {
	var surl = _RootUrl + "html/useradmin/infoedit.html?id=" + id + "&ty="
			+ getpathname("ty");
	openwin(surl);
}
// 删除 接口
function deleteinfo(id, pageindex) {
	var msg = "是否确定删除此条资讯，这将同时删除该资讯的所有评论信息？";
	layer.confirm(msg, function(index) {
		var deleteinfo = layer.load('正在操作，请稍候…');
		var ajaxurl = _RootUrl + "info/del";
		$.ajax({
			type : "post",
			url : ajaxurl,
			dataType : "json",
			data : {
				id : id
			},
			success : function(sender) {
				if (sender.returnvalue != '0') {
					layer.alert(sender.errorinfo);
				} else {
					layer.alert("删除成功。");
					getinfolist(pageindex);
				}
				layer.close(deleteinfo);

			},
			error : function(sender) {
				layer.alert('操作失败，请刷新页面重试，或直接联系网站管理员。');
				layer.close(deleteinfo);
			}
		});

	}, function(index) {
		return false;
	});
}
// 暂停、取消暂停、审核通过
function setinfostate(id, state, eve) {

	// 接口
	var url = _RootUrl + "info/updatestate";
	$.ajax({
		type : "post",
		url : url,
		dataType : "json", // 返回值类型
		data : {
			id : id,
			state : state
		},
		success : function(sender) {
			if (sender.returnvalue != '0') {

				return;
			} else {
				if (state == 3) {
					$(eve).text("取消暂停");
					$(eve).parent().prev().text("暂停发布");
					$(eve).unbind("click");
					$(eve).bind("click", function() {
						setinfostate(id, 1, eve);
					});
					if (getpathname("ty") == "knowledge"
							|| getpathname("ty") == "help"
							|| getpathname("ty") == "academy") {
						$(eve).parent().find("a[name='toindexbtn']").hide();
					}
					$(eve).parent().find("a[name='tostaticbtn']").show();
				} else if (state == 1) {
					$(eve).text("暂停");
					$(eve).parent().prev().text("审核通过");
					$(eve).unbind("click");
					$(eve).bind("click", function() {
						setinfostate(id, 3, eve);
					});
					if (getpathname("ty") == "knowledge"
							|| getpathname("ty") == "help"
							|| getpathname("ty") == "academy") {
						$(eve).parent().find("a[name='toindexbtn']").show();
					}
					$(eve).parent().find("a[name='tostaticbtn']").show();

				}
			}
		},
		error : function(sender) {
		}

	});
}
// 预览
function previewinfo(id) {
	var surl ="infopreview.html?id=" + id;

	if (getpathname("ty") == "knowledge" || getpathname("ty") == "help"
			|| getpathname("ty") == "academy")
		surl = _RootUrl + "html/index/infopreview.html?id=" + id;
	openwin(surl);
}
function addnew() {
	locationwin('infoedit.html?ty='
			+ getpathname("ty"));
}
function bindseltype() {
	// 接口
	var url = _RootUrl + "infotype/getall";
	$
			.ajax({
				type : "post",
				url : url,
				dataType : "json", // 返回值类型
				data : {},
				success : function(sender) {
					if (sender.returnvalue != '0') {
						return;
					} else {
						var obj = sender.option;
						var s = [];
						var typestr = "," + getpathname("ty") + ",";
						s.push('<option value="">----请选择----</option>');
						s.push('<option value="">全部</option>');
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
				s.push('<option value="">全部</option>');
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

// 获取参数
function getpathname(index) {
	var pathname = location.href;
	var returnvalue = "";
	if (index == "ty") {// 检索文本
		if (pathname.indexOf("?ty=") > -1) {
			returnvalue = /\?ty=[^&]*/.exec(pathname)[0].replace('?ty=', '');
		} else if (pathname.indexOf("&ty=") > -1) {
			returnvalue = /&ty=[^&]*/.exec(pathname)[0].replace('&ty=', '');
		}
	}
	return returnvalue; // 
}

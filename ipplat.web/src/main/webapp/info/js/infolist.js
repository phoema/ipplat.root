$(function() {
	var ty = getpathname(1);

	if (ty=="")
		ty = "1";
	$(".con_left").find(".con_menu[name='" + ty + "']").addClass("con_menuh")
			.removeClass("con_menu");
	$("div[name='tagtext']").text(
			$.trim($(".con_left").find(".con_menuh").text()));
	$(".con_left").find("div").unbind("click");
	$(".con_left").find("div").bind(
			"click",
			function() {
				if($(this).hasClass("con_menu")&&$(this).attr("name")!=""&&$(this).attr("name")!=undefined){
					locationwin("infolist.html?1=1&ty="+ $(this).attr("name"));
				}
			});

	bindseachorg();
	$("#searchname").keyup(function(evt) {
		if (evt.which == 13) {
			searchbytitle();
			return false;
		}
	});
	getinfos(1);
});

// 检索框@@
function searchbytitle() {
	var value = $.trim($("#searchname").val());
	if (value.length > 100)
		value = value.substring(0, 100);
	if (value == '')
		return;
	locationwin( "infolist.html?1=1&ty=" + getpathname(1)
			+ "&title=" + encodeURIComponent(value));
}
function bindseachorg() {
	var title = decodeURIComponent(getpathname(2));
	$("#searchname").val(title);
}




var searchload;
var pagesize = 15;
function getinfos(page) {
	var surl = "../api/article/getbytype";// _RootUrl+
	var pageindex = parseInt(getpathname(3));
	var title = decodeURIComponent(getpathname(2));
	var type =getpathname(1);
	searchload = layer.load('加载中…');

	$("#shownone").hide();
	$("#showlist").html("");

	$.ajax({
		type : "post",
		url : surl,
		dataType : "json", // 返回值类型
		data : {
			title : title, // 机构名称
			page : (pageindex - 1), // 当前页
			size : pagesize,
			type:type
		// 一页显示的数量
		},
		success : function(sender) {
			/*
			 * if (sender.ReturnValue != '1') { alert(sender.ErrorInfo);
			 * $("#resultcount").text("0"+'家'); shownone(); pageinit(0,
			 * pageindex, pagesize); // layer.close(searchload); } else {
			 */
			var obj = sender.content;
			var totalcount =sender.totalElements;// sender.totalElements;
			$("#resultcount").text(totalcount + '条');
			if (totalcount == 0) {
				shownone();
			} else if (title != '') {
				$(".Recommend").show();
			} else {
				$(".Recommend").hide();
			}
			var s = [];
			var shref = "";
			for ( var key in obj) {
				if (obj[key].title == null)
					continue;

				
				// for (var i = 0; i < 10; i++) {
				shref = "infodetail.html?1=1&ty="
						+ getpathname(1) + "&id="
						+ obj[key].id;
				s.push('<div class="list link_c">');
				s
						.push('<div class="listl"><a href="' + shref
								+ '" target="_blank">' + obj[key].title
								+ '</a> </div>');
				var infotime="";
				if(obj[key].createtime.length>=10) 
					 infotime = obj[key].createtime.substring(0,10);
				s.push('<div class="date3">' + infotime+ '</div>');
				s.push('</div>');
			}
			$("#showlist").html(s.join(''));
			$("#showlist").find(".list:eq(4),.list:eq(9)").addClass(
					"listdashed");
			$("#showlist").find(".list:last()").removeClass("listdashed");
			$("#showlist").find(".recordh:odd").addClass("record").removeClass(
					"recordh"); // 偶数行
			pageinit(totalcount, pageindex, pagesize);
			layer.close(searchload);

			/* } */
		},
		error : function(sender) {
			// layer.close(searchload);
		}
	});

}

function showpage(index) {
	var url = location.href;
	if (url.indexOf("?") == -1) {
		url += '?1=1';
	}
	if (url.indexOf("page=") > -1) {
		url = url.replace(/page=[^&]*/, 'page=' + index);
	} else if (url.indexOf("?") > -1) {
		url += "&page=" + index;
	} else {
		url += "?1=1&page=" + index;
	}

	locationwin(url);
}

function shownone() {
	$("#shownone").show();
	$("#showlist").hide();
	$(".Recommend").hide();
}

function pageinit(resultcount, page, pagesize) {
	if (resultcount == 0) {
		$(".pagination").hide();
		return;
	}
	$(".pagination").show();
	var s = [];
	var count = parseInt((parseInt(resultcount) + pagesize - 1) / pagesize, 10);

	if (page <= 5) {// 最前五页
		if (page > 1) {
			s.push('<li><a href="javascript:showpage(1);">首页</a> </li>');
			s.push('<li><a href="javascript:showpage(' + (page - 1)
					+ ');">上一页</a> </li>');
		}
		for (var i = 1; i <= count && i <= 5; i++) {
			if (page == i) {
				s.push('<li class="active" >' + i + '</li>');
			} else {
				s.push('<li><a href="javascript:showpage(' + i + ');">' + i
						+ '</a></li>');
			}
		}
		if (count > 5) {
			s.push('<li><span>...</span></li>');
		}
		if (page < count) {
			s.push('<li><a href="javascript:showpage(' + (page + 1)
					+ ');"> 下一页</a> </li>');
			s.push('<li><a href="javascript:showpage(' + count
					+ ');">末页</a> </li>');
		}

	} else if (page >= count - 2) {// 最后2页
		s.push('<li><a href="javascript:showpage(1);">首页</a> </li>');
		s.push('<li><a href="javascript:showpage(' + (page - 1)
				+ ');">上一页</a> </li>');
		s.push('<li><span>...</span></li>');
		for (var i = count - 4; i <= count; i++) {
			if (page == i) {
				s.push('<li class="active" >' + i + '</li>');
			} else {
				s.push('<li><a href="javascript:showpage(' + i + ');">' + i
						+ '</a></li>');
			}
		}
		if (page < count) {
			s.push('<li><a href="javascript:showpage(' + (page + 1)
					+ ');"> 下一页</a> </li>');
			s.push('<li><a href="javascript:showpage(' + count
					+ ');">末页</a> </li>');
		}
	} else {
		s.push('<li><a href="javascript:showpage(1);">首页</a> </li>');
		s.push('<li><a href="javascript:showpage(' + (page - 1)
				+ ');">上一页</a> </li>');
		s.push('<li><span>...</span></li>');
		for (var i = page - 2; i <= page + 2; i++) {
			if (page == i) {
				s.push('<li class="active">' + i + '</li>');
			} else {
				s.push('<li><a href="javascript:showpage(' + i + ');">' + i
						+ '</a></li>');
			}
		}
		if (page + 2 < count) {
			s.push('<li><span>...</span></li>');
		}
		s.push('<li><a href="javascript:showpage(' + (page + 1)
				+ ');"> 下一页</a> </li>');
		s
				.push('<li><a href="javascript:showpage(' + count
						+ ');">末页</a> </li>');
	}
	// for (var i = 1; i <= count && i <= page+5; i++) {
	// if (page == i) {
	//        
	// }
	// }

	$(".pagination").html(s.join(""));
}

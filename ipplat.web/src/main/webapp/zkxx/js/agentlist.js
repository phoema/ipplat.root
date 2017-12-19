$(function() {
	bindseachorg();
	$("#searchname").keyup(function(evt) {
		if (evt.which == 13) {
			searchorgbytitle();
			return false;
		}
	});
	binddrop();
	getinfos(1);
});
function binddrop() {

	$("#drop_col").find("li").unbind("click");
	$("#drop_col").find("li").bind(
			"click",
			function() {
				if ($(this).hasClass("unable"))
					return;
				$(this).parent().hide();
				$(this).siblings().removeClass("elehide").removeClass(
						"elehideactive");
				$(this).addClass("elehide").addClass("elehideactive");
				$(this).parent().prev(".select2-choice").find("span").text(
						$(this).text());
			});
	$(".select2-drop").find(".select2-choice").hover(function() {
		if ($(this).next("ul").find("li:not([class='elehide'])").length == 0) {
			$(this).next("ul").hide();
		} else {
			$(this).next("ul").show();
		}
	});
	$(".select2-container").hover(function() {
	}, function() {
		$(this).find("ul").hide();
	});
}
// 检索框@@
function searchagentbytitle() {
	var value = $.trim($("#searchname").val());
	if (value.length > 100)
		value = value.substring(0, 100);
	if (value == '')
		return;
	var colname = $("#drop_col").find(".elehideactive").attr("name");
	locationwin("agentlist.html?1=1&type=" + colname
			+ "&title=" + encodeURIComponent(value));
}
// @@@
function bindseachorg() {
	var title = decodeURIComponent(getpathname(2));
	$("#searchname").val(title);
}
// @@

function getpathname(index) {

	var pathname = location.href;
	var returnvalue = "";
	if (index == 1) {
		if (pathname.indexOf("&type=") > -1) {
			returnvalue = /type=[^&]*/.exec(pathname)[0].replace('type=', '');
		}
	} else if (index == 2) {
		if (pathname.indexOf("&title=") > -1) {
			returnvalue = /title=[^&]*/.exec(pathname)[0].replace('title=', '');
		}
	} else if (index == 3) {
		if (pathname.indexOf("&page=") > -1) {
			returnvalue = /page=[^&]*/.exec(pathname)[0].replace('page=', '');
		}
		if (returnvalue == "" || parseInt(returnvalue) == NaN
				|| parseInt(returnvalue) <= 0) {
			returnvalue = 1;
		}
	}
	return returnvalue; // 
}

// @@
var searchload;
var pagesize = 10;
function getinfos(page) {
	var surl = "../api/agent/list";// _RootUrl+
	var pageindex = parseInt(getpathname(3));
	var title = decodeURIComponent(getpathname(2));
	searchload = layer.load('加载中…');
	var columnname = getpathname(1);// orgname
	if (columnname == "")
		columnname = "name";

	$("#shownone").hide();
	$("#showlist").html("");

	$
			.ajax({
				type : "post",
				url : surl,
				dataType : "json", // 返回值类型
				data : {
					column : columnname,
					value : title, // 机构名称
					page : (pageindex - 1), // 当前页
					pagesize : pagesize
				// 一页显示的数量
				},
				success : function(sender) {
					/*
					 * if (sender.ReturnValue != '1') { alert(sender.ErrorInfo);
					 * $("#resultcount").text("0" + '位'); shownone();
					 * pageinit(0, pageindex, pagesize); //
					 * layer.close(searchload); } else {
					 */
					var obj = sender.content;
					var totalcount = sender.totalElements;
					$("#resultcount").text(totalcount + '位');
					if (totalcount == 0) {
						shownone();
					} else
						$(".Recommend").show();
					var s = [];
					var shref = "";
					for ( var key in obj) {
						if (obj[key].name == null || obj[key].name == '')
							continue;
						// for (var i = 0; i < 10; i++) {
						shref = "http://agency.izhiliao.com.cn/shop/fileshow.aspx?pathname=photoagent&filename="
								+ obj[key].certid + ".jpg";
						s.push('<div class="list1h" style="display: block">');
						s.push('<div class="logo_bg">');
						s
								.push('<table width="100%" cellspacing="0" cellpadding="0" border="0">');
						s
								.push('<tbody> <tr><td valign="top" height="123" align="center">');
						s.push('<img onerror="agentimgerror(this,\''
								+ obj[key].sex + '\');"  alt="" src="' + shref
								+ '" width="72" height="100"/>');
						s.push('</td></tr> </tbody> </table> </div>');
						s.push('<div class="cust1"> <div class="cl">');
						s
								.push('<div class="span2">' + obj[key].name
										+ '</div>');
						if (obj[key].ismanage)
							s
									.push('<div class="renz" style="display: block">负责人</div>');
						if (obj[key].ispartner)
							s
									.push('<div class="renz" style="display: block">合伙人</div>');

						s.push('</div>');
						s.push('<div class="success">');
						s
								.push('<table width="100%" cellspacing="0" cellpadding="0" border="0">');
						s.push('<tbody><tr>');
						s
								.push('<td width="34%" height="23"><span>资格证号：</span><span class="span3">'
										+ obj[key].certid + '</span></td>');
						s
								.push('<td width="34%" height="23"><span>执业证号：</span><span class="span3">'
										+ obj[key].occuid + '</span> </td>');
						s
								.push('<td width="34%" height="23"><span>专业：</span><span title="'
										+ obj[key].subject
										+ '" class="span3">'
										+ obj[key].subject + '</span></td>');

						s.push('</tr><tr>');
						s
								.push('<td width="34%" height="23"><span>机构代码：</span><span class="span3">'
										+ obj[key].orgcode + '</span></td>');
						s
								.push('<td width="34%" height="23" colspan="2"><span>所属机构：</span> <span class="span3">'
										+ obj[key].orgname + '</span></td>');

						s.push('</tr></tbody></table>');
						s.push('</div> </div> </div>');

					}
					$("#showlist").html(s.join(''));

					$("#showlist").find(".list1h:even").addClass("list1hh")
							.removeClass("list1h"); // 偶数行
					pageinit(totalcount, pageindex, pagesize);
					layer.close(searchload);

					/* } */
				},
				error : function(sender) {
					layer.close(searchload);
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

function agentimgerror(eve, sex) {
	if (sex == 0)
		$(eve).attr("src", "css/images/girl.jpg");
	else
		$(eve).attr("src", "css/images/boy.jpg");
	$(eve).attr("width", "72px");
	$(eve).attr("height", "100px");
}

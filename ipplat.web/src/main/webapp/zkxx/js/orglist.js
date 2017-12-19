$(function() {
	bindseachorg();
	$("#orgsearchname").keyup(function(evt) {
		if (evt.which == 13) {
			searchorgbytitle();
			return false;
		}
	});
	getinfos(1);
});

// 检索框@@
function searchorgbytitle() {
	var value = $.trim($("#orgsearchname").val());
	if (value.length > 100)
		value = value.substring(0, 100);
	if (value == '')
		return;
	locationwin( "orglist.html?1=1&title="
			+ encodeURIComponent(value));
}
// @@@
function bindseachorg() {
	var title = decodeURIComponent(getpathname(2));
	$("#orgsearchname").val(title);
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
	var surl = "../api/agency/list";// _RootUrl+
	var pageindex = parseInt(getpathname(3));
	var title = decodeURIComponent(getpathname(2));
	searchload = layer.load('加载中…');

	
	$("#shownone").hide();
	$("#showlist").html("");

	$
			.ajax({
				type : "post",
				url : surl,
				dataType : "json", // 返回值类型
				data : {
					title : title, // 机构名称
					page : (pageindex - 1), // 当前页
					pagesize : pagesize
				// 一页显示的数量
				},
				success : function(sender) {
					/*
					 * if (sender.ReturnValue != '1') { alert(sender.ErrorInfo);
					 * $("#resultcount").text("0"+'家'); shownone(); pageinit(0,
					 * pageindex, pagesize); // layer.close(searchload); } else {
					 */
					var obj = sender.content;
					var totalcount = sender.totalElements;
					$("#resultcount").text(totalcount + '家');
					if (totalcount == 0) {
						shownone();
					}else
						$(".Recommend").show();
					var s = [];
					var shref = "";
					for ( var key in obj) {
						if (obj[key].title == null)
							continue;
						// for (var i = 0; i < 10; i++) {
						shref = "http://agency.izhiliao.com.cn/shop/agencyInfoByAnalysis.aspx?rid="
								+ obj[key].rid;
						s.push('<div class="recordh">');
						s.push('<div class="record_tit"> <a href="' + shref
								+ '" target="_blank">' + obj[key].title
								+ '</a></div>');

						s.push('<div class="record_tit">');
						s.push('<div class="record_left">');
						s.push('<div class="record_tit">');
						s.push('<div class="span"> 机构代码：<span>'
								+ obj[key].orgcode + '</span> </div>');
						s.push('<div class="span"> 成立时间：<span>'
								+ (obj[key].start_year == 0 ? '--'
										: obj[key].start_year + '年')
								+ '</span> </div>');
						s.push('<div class="span"> 负责人：<span>'
								+ obj[key].manager + '</span> </div>');
						s.push('</div> </div> </div>');
						s.push('<div class="record_tit">');
						s.push('<div class="record_left">');
						s.push('<div class="record_tit">');
						s.push('<div class="span">机构地址：' + obj[key].address
								+ '</div>');
						s.push('</div> </div> </div>');
						s.push('<div class="record_tit">');
						s.push('<div class="record_left">');
						s.push('<div class="record_tit">');
						s.push('<div class="span"> 官方网址：');
						if (obj[key].web_site == null
								|| obj[key].web_site == '') {
							s.push('<span>--</span>');
						} else {
							s.push('<a href="' + obj[key].web_site
									+ '" target="_blank" class="blue">'
									+ obj[key].web_site + '</a>');
						}
						s.push('</div>');
						s.push('<div class="span">联系电话：' + obj[key].phone
								+ '</div>');
						s.push('</div> </div>');
						s
								.push('<div class="record_right"> <div class="btdeta"> <a href="'
										+ shref
										+ '" target="_blank">知了分析</a> </div> </div>');
						s.push('</div> </div>');
					}
					$("#showlist").html(s.join(''));

					$("#showlist").find(".recordh:odd").addClass("record")
							.removeClass("recordh"); // 偶数行
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

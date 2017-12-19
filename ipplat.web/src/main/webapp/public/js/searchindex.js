$(function() {

});

/* 正序 降序 */
$('#btn-search').click(
		function() {

			var express = $("#txt_express").val();
			if (!express || express.trim() == "") {
				alert('请输入关键字，再进行检索');
				return;
			} else {
				express = "AN,AD,PN,PD,APO,INO,TIO,ABSO+=(" + express + ")";
				var url = "list/patentlist.html?union=true&ex="
						+ encodeURIComponent(express);
				window.open(url);

			}

		}); // end 排序

/* 回车检索 */
function keySearch(event) {
	event = event || window.event;
	var keyCode = event.keyCode;
	if (keyCode == 13) // 回车键的键值为13
		$('#btn-search').click();
}

$(function() {
	//initHeader();
	initFooter();
	initHeight();
});
function initHeader() {

	var str = '';
	str += '<ul id="nav1">';
	// str+='<a href="javascript:void(0);" style="cursor:default"><li
	// class="logo">中国知识产权大数据与智慧服务系统</li></a>';
	str += '<li><a href="index.html">首页</a></li>';
	str += '<li><a href="searchindex.html"  class="selected" >在线查找</a></li>';
	str += '<li><a href="javascript:void(0);">办事服务</a></li>';
	str += '<li><a href="zkxx/orglist.html">智库信息</a></li>';
	str += '<li><a href="javascript:void(0);">产业服务</a></li>';
	str += '<li><a href="info/infolist2.html?ty=4">维权保护</a></li>';
	str += '<li><a href="info/infolist.html?ty=1">综合信息</a></li>';
	str += '<li><a href="javascript:void(0);">教育培训</a></li>';
	str += '<li><a href="javascript:void(0);">运营服务</a></li>';
	str += '<li><a href="javascript:void(0);">市州服务</a></li>';
	str += '<li><a href="javascript:void(0);">咨询服务</a></li>';
	str += '</ul>';
	$('#headerNav').html(str);
}
function initFooter() {
	var str = '';
	str += '<div class="footer">';
	str += '网站导航   | 关于我们  | 隐私声明&nbsp;&nbsp;&nbsp;&nbsp;版权所有：四川省知识产权服务中心   蜀ICP备08003890号-2   主办单位：四川省知识产权服务中心 &nbsp;&nbsp;&nbsp;&nbsp;联系地址：成都市一环路南四段二号  邮编：610041';
	str += '</div>';
	$('#footerNew').html(str);

}
function initHeight() {
	var hh = $(window).height();
	hh = hh - $("#headerNav").height() - $("#footerNew").height() - 120;
	$(".whole").css("min-height", hh + "px");

}
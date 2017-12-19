$(function() {
	initHeader();
	initFooter();
	initHeight();
});
function initHeader() {


	var url = window.location.href;
	if (url.indexOf('searchindex.html') > 0||url.indexOf("list/") > 0 || url.indexOf('detail/') > 0) {
		var str = '';
		$("#headerNav").addClass("navbar").addClass("navbar-inverse");
		str += '<div class="navr">'+
			'<div class="head_logo">'+
			'<a href="../index.html"><img src="../sucai/logo-m-01.png" style=" float: right"></a></div>'+
			'<ul id="nav1">'+
			' <li><a href="../index.html">首页</a></li>'+
			'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z">'+
					'<div class="Service">'+
					'<a href="http://cponline.sipo.gov.cn/" target="_blank"> <img src="../sucai/Service12.png">'+
					'<div class="Servicer">在线申请</div></a>'+
					'</div>'+
					'<div class="Service">'+
					'<a href="http://cponline.sipo.gov.cn/" target="_blank"> <img src="../sucai/Service4.png">'+
					'<div class="Servicer">网上缴费</div></a>'+
					'</div>'+
					'<div class="Service">'+
						'<a href="javascript:void(0);"> <img src="../sucai/Service7.png">'+
						'<div class="Servicer">费减备案</div></a>'+
					'</div>'+
					'<div class="Service">'+
						'<a href="http://fee.sipo.gov.cn/" target="_blank"> <img src="../sucai/Service5.png">'+
						'<div class="Servicer">缴费信息填报</div></a>'+
					'</div>'+
					'<div class="Service">'+
						'<a href="http://www.scipo.gov.cn:501/" target="_blank"> <img src="../sucai/Service11.png">'+
						'<div class="Servicer">专利资助</div>'+
						'</a>'+
					'</div>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" class="menu1">申请服务</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z">'+
					'<div class="serviceh">'+
						'<a href="http://www.scipo.gov.cn/jlhd/zxzx/" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/power1.png">'+
							'</div>'+
							'<div class="Servicer">举报投诉</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh">'+
						'<a href="http://www.scipo.gov.cn/gpjg/yzzx/" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/power5.png">'+
							'</div>'+
							'<div class="Servicer">维权援助</div>'+
						'</a>'+
					'</div>'+ 
					'<div class="serviceh">'+
						'<a href="javascript:void(0);">'+
							'<div class="power">'+
								'<img src="../sucai/power3.png">'+
							'</div>'+
							'<div class="Servicer">海外维权</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh">'+
						'<a href="javascript:void(0);">'+
							'<div class="power">'+
								'<img src="../sucai/power4.png">'+
							'</div>'+
							'<div class="Servicer">预警雷达</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh">'+
						'<a href="../info/infolist2.html?ty=4">'+
							'<div class="power">'+
								'<img src="../sucai/power2.png">'+
							'</div>'+
							'<div class="Servicer">典型判例</div>'+
						'</a>'+
					'</div>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" name="05" class="menu1">维权保护</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
			'<div class="xx_2 column" id="xx_2" runat="server">'+
					'<div class="mc">'+
						'<div class="menut">'+
							'<a href="../../searchindex.html">'+
								'<div class="menutl">'+
									'<img src="../sucai/analyz.png">'+
								'</div>'+
								'<div class="menutr">西南知识产权大数据中心</div>'+
							'</a>'+
						'</div>'+
						'<div class="menut">'+
							'<a href="javascript:void(0);">'+
								'<div class="menutl">'+
									'<img src="../sucai/onlinean.png">'+
								'</div>'+
								'<div class="menutr">四川省在线分析系统</div>'+
							'</a>'+
						'</div>'+
						'<div class="menut">'+
							'<a href="http://221.237.165.4:8081/pmap/map/pat/frame" target="_blank">'+
								'<div class="menutl">'+
									'<img src="../sucai/hotm.png">'+
								'</div>'+
								'<div class="menutr">四川省热点地图</div>'+
							'</a>'+
						'</div>'+
					'</div>'+
				'</div>'+
				'<div class="xx_1 column" id="xx_1" runat="server">'+
					'<div class="ty_body_z">'+
						'<table>'+
							'<tbody>'+
								'<tr>'+
									'<td><a href="javascript:void(0);"><div class="check">统计和监测</div></a></td>'+
									'<td><a href="../zkxx/orglist.html"><div class="check">代理机构</div></a></td>'+
								'</tr>'+
								'<tr>'+
									'<td><a href="../zkxx/agentlist.html"><div class="check">代理人</div></a></td>'+
									'<td><a href="javascript:void(0);"><div class="check">专家库</div></a></td>'+
								'</tr>'+
							'</tbody>'+
						'</table>'+
					'</div>'+
				'</div>'+
				
			'</div> <a name="03"  class="selected" href="../searchindex.html">信息查询</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z" style="margin-left: 4%">'+
					'<a href="http://211.149.187.208/ggfwpt/zxzlxx/" target="_blank">'+
						'<div class="cysever">产业数据库</div>'+
					'</a> <a href="http://211.149.187.208/zlxxfw/zlxxlycgdt/" target="_blank">'+
						'<div class="cysever">产业分析报告</div>'+
					'</a>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" class="menu1">产业服务</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z">'+
					'<div class="serviceh serviceh2">'+
						'<a href="http://www.scptd.com.cn/Showroom.aspx" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/jiaoyi.png">'+
							'</div>'+
							'<div class="Servicer">展示交易</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh serviceh2">'+
						'<a href="javascript:void(0);">'+
							'<div class="power">'+
								'<img src="../sucai/mall.png">'+
							'</div>'+
							'<div class="Servicer">知识产权商城</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh serviceh2 ">'+
						'<a href="javascript:void(0);">'+
							'<div class="power">'+
								'<img src="sucai/tuoguan.png">'+
							'</div>'+
							'<div class="Servicer">路演厅</div>'+
						'</a>'+
					'</div>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" class="menu1">运营服务</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z" style="margin-left: 4%">'+
					'<a href="javascript:void(0);">'+
						'<div class="cysever">质押融资</div>'+
					'</a> <a href="javascript:void(0);">'+
						'<div class="cysever">专利保险</div>'+
					'</a> <a href="javascript:void(0);">'+
						'<div class="cysever">专利担保</div>'+
					'</a>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" class="menu1">金融服务</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z">'+
					'<div class="serviceh serviceh1">'+
						'<a href="http://www.ciptc.org.cn/public/index?v=0&amp;r=0" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/edu3.png">'+
							'</div>'+
							'<div class="Servicer">远程教育</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh serviceh1">'+
						'<a href="http://sipo.gensee.com/training/site/login" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/edu5.png">'+
							'</div>'+
							'<div class="Servicer">公益讲座</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh serviceh1">'+
						'<a href="http://www.sipo.gov.cn/wxfw/zlwxxxggfw/gyjz/gyjzkj/" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/edu1.png">'+
							'</div>'+
							'<div class="Servicer">培训课堂</div>'+
						'</a>'+
					'</div>'+
					'<div class="serviceh serviceh1">'+
						'<a href="https://weidian.com/?userid=892425114&amp;from=singlemessage&amp;isappinstalled=0" target="_blank">'+
							'<div class="power">'+
								'<img src="../sucai/edu4.png">'+
							'</div>'+
							'<div class="Servicer">智慧书堂</div>'+
						'</a>'+
					'</div>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" class="menu1">培训教育</a>'+
		'</li>'+
		'<li>'+
			'<div class="menu">'+
				'<div class="ty_body_z" style="margin-left: 4%">'+
					'<a href="../info/infolist.html?ty=2">'+
						'<div class="cysever">政策法规</div>'+
					'</a> <a href="../info/infolist.html?ty=3">'+
						'<div class="cysever">办事指南</div>'+
					'</a>'+
				'</div>'+
			'</div> <a href="javascript:void(0);" name="06" class="menu1">咨询服务</a>'+
		'</li></ul>'+
		'</div>';
		$('#headerNav').html(str);
		$("#headerNav a[name='03']").addClass("selected");
	} else if (url.indexOf("zkxx/") > 0) {
		$("#headerNav a[name='03']").addClass("selected");
	} else if (url.indexOf("info/infolist.html") > 0
			|| (url.indexOf('info/infodetail.html') > 0 && (getpathname(1) == "1"
					|| getpathname(1) == "2" || getpathname(1) == "3"))) {
		$("#headerNav a[name='06']").addClass("selected");
	} else if (url.indexOf("info/infolist2.html") > 0
			|| (url.indexOf('info/infodetail.html') > 0 && getpathname(1) == "4")) {
		$("#headerNav a[name='05']").addClass("selected");
	}
	var hh = $(window).height();
	hh = hh - $("#headerNav").height() - $("#footerNew").height() - 70;
	$("#mincontent").css("min-height", hh + "px");
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

// 当前页面跳转
function locationwin(url) {
	if (url != "")
		window.location.href = url;
}
// 新页面打开
function openwin(url) {
	if (url != "")
		window.open(url);
}

function getpathname(index) {

	var pathname = location.href;
	var returnvalue = "";
	if (index == 1) {
		if (pathname.indexOf("?ty=") > -1) {
			returnvalue = /\?ty=[^&]*/.exec(pathname)[0].replace('?ty=', '');
		} else if (pathname.indexOf("&ty=") > -1) {
			returnvalue = /&ty=[^&]*/.exec(pathname)[0].replace('&ty=', '');
		}
	} else if (index == 2) {
		if (pathname.indexOf("?title=") > -1) {
			returnvalue = /\?title=[^&]*/.exec(pathname)[0].replace('?title=',
					'');
		} else if (pathname.indexOf("&title=") > -1) {
			returnvalue = /&title=[^&]*/.exec(pathname)[0].replace('&title=',
					'');
		}
	} else if (index == 3) {
		if (pathname.indexOf("?page=") > -1) {
			returnvalue = /\?page=[^&]*/.exec(pathname)[0]
					.replace('?page=', '');
		} else if (pathname.indexOf("&page=") > -1) {
			returnvalue = /&page=[^&]*/.exec(pathname)[0].replace('&page=', '');
		}
		if (returnvalue == "" || parseInt(returnvalue) == NaN
				|| parseInt(returnvalue) <= 0) {
			returnvalue = 1;
		}
	} else if (index == 4) {
		if (pathname.indexOf("?col=") > -1) {
			returnvalue = /\?col=[^&]*/.exec(pathname)[0].replace('?col=', '');
		} else if (pathname.indexOf("&col=") > -1) {
			returnvalue = /&col=[^&]*/.exec(pathname)[0].replace('&col=', '');
		}
	} else if (index == 5) {
		if (pathname.indexOf("?id=") > -1) {
			returnvalue = /\?id=[^&]*/.exec(pathname)[0].replace('?id=', '');
		} else if (pathname.indexOf("&id=") > -1) {
			returnvalue = /&id=[^&]*/.exec(pathname)[0].replace('&id=', '');
		}
	}
	return returnvalue; // 
}
//获取域名
function getdomainName(filename) {
	var domainurl = location.href;
	var domainName = "";
	var domainindex = domainurl.indexOf("/" + filename + "/") ;
	if (domainindex == -1)
		domainindex = domainurl.lastIndexOf("/");
	domainName = domainurl.substring(0,domainindex)
	domainName=domainName.replace(location.origin,"");
	return domainName;
}
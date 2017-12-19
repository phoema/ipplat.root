$(function() {
	initHeader();
	initFooter();
	initHeight();
});
function initHeader() {

	var url = window.location.href;
	if (url.indexOf('searchindex.html') > 0 || url.indexOf("list/") > 0
			|| url.indexOf('detail/') > 0) {
		var str = '';
		$("#headerNav").removeClass("nav");

		str += '<div class="navboxh">';
		str += '<div class="navh">';
		str += '<div class="navh_logo">';
		str += '<a href="http://www.czeip.com/" target="_parent">';
		str += '<img src="../public/imgs/logoh.png"></a></div>';
		str += '<ul>';
		str += '<li class="on"><a href="http://www.czeip.com/" target="_parent">首页</a></li>';
		str += '<li class="index-fwft-menu ">';
		str += '<div class="txh">';
		str += '<a href="http://www.czeip.com/z-fuwu.html" target="_parent">找服务</a>';
		str += '<img src="../public/imgs/dot2.png"></div>';
		str += '<div class="navmenuh">';
		str += '<div class="navmenu-c">';
		str += '<div class="navmenu-cz">';
		str += '<div class="new-index-menu" id="Div1">';
		str += '<dt><span class="on"><a href="http://www.czeip.com/z-zhuanli.html" target="_parent">';
		str += '专利管理<i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: block; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-apply.html">专利申请</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-pct.html">PCT申请</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-zhuan.html">专利转让</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-xuke.html">专利许可/变更</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-jiufen.html">专利纠纷诉讼</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-nianfei.html">专利年费代缴</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-wuxiao.html">专利无效</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-fushen.html">专利复审</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-huifu.html">恢复专利权</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-yujing.html">专利预警分析</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-ditu.html">专利地图</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-buju.html">专利布局</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-fengixan.html">风险规避设计</a></dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<dt><span><a href="http://www.czeip.com/z-trademark.html" target="_parent">商标管理<i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: none; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-sheji.html">商标设计</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-chaxun.html">商标查询</a></dd>';

		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-zhuce.html">商标注册</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-szhuan.html">商标转让</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-sxuke.html">商标许可、变更</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-yiyi.html">商标异议/无效/复审</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-dabian.html">异议答辩/争议答辩/复审答辩 </a>';
		str += '</dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-zhiya.html">商标质押权登记</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-xuzhan.html">商标续展/宽展</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-iso.html">ISO认证</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-chiming.html">驰名商标认定</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-sjiufen.html">商标侵权纠纷 </a>';
		str += '</dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-quequan.html">商标确权行政诉讼</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-zhuxiao.html">商标注销 </a>';
		str += '</dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<dt><span><a href="http://www.czeip.com/z-zbanquan.html" target="_parent">版权管理<i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: none; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-ruanjian.html">计算机软件著作权登记</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-yingshi.html">影视作品著作权登记</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-banquan.html">版权法律咨询</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-renzheng.html">软件企业认证/软件产品认证</a></dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<dt><span><a href="http://www.czeip.com/z-caishui.html" target="_parent">工商财税<i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: none; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-gzhuce.html">工商注册</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-jizhang.html">代理记账</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-nashui.html">纳税筹划</a></dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<dt><span><a href="http://www.czeip.com/z-zhishi.html" target="_parent">知识产权管理 <i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: none; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-peixun.html">知识产权培训</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-guanbiao.html">知识产权贯标</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-rongzi.html">知识产权质押融资</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-haiguan.html">知识产权海关备案</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-zhanlue.html">知识产权战略规划评价</a></dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<dt><span><a href="http://www.czeip.com/z-qita.html" target="_parent">其他知识产权服务<i class="new-index-menu-icon"></i></a></span>';
		str += '<dl style="display: none; height: 250px;">';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-high-tech.html">高新技术企业认证</a></dd>';
		str += '<dd>';
		str += '<a target="_parent" href="http://www.czeip.com/z-shuang.html">双软认证</a></dd>';
		str += '</dl>';
		str += '</dt>';
		str += '<div class="clear">';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</li>';
		str += '<li class="index-fwft-menu " name="01">';
		str += '<div class="txh">';
		str += '<a href="http://hnshop.izhiliao.com.cn/apply/index.aspx" target="_parent">机构导航评价</a><img src="../public/imgs/dot2.png"></div>';
		str += '<div class="navmenuhh">';
		str += '<div class="new-index-menu" id="Div2">';
		str += '<div class="navmenu-c">';
		str += '<div class="navmenu-cz">';
		str += '<dt><span name="01_1"><a href="http://hnshop.izhiliao.com.cn/apply/index.aspx" target="_parent">';
		str += '代理机构智能推荐</a></span> </dt>';
		str += '<dt><span name="01_2"><a href="http://hn.izhiliao.com.cn/agency/servicebylist2.aspx" target="_parent">';
		str += '选专利代理机构</a></span> </dt>';
		str += '<dt><span name="01_3"><a href="http://www.czeip.com/z-agency.html" target="_parent">选其他服务机构</a></span>';
		str += '</dt>';
		str += '<dt><span name="01_4"><a href="http://hn.izhiliao.com.cn/agency/agencybycity.aspx" target="_parent">';
		str += '专利代理机构地域导航</a></span> </dt>';
		str += '<dt><span name="01_5"><a href="http://hn.izhiliao.com.cn/agency/agencybyipc.aspx" target="_parent">';
		str += '专利代理机构领域导航</a></span> </dt>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</li>';
		str += '<li><a href="http://www.czeip.com/s-atall-3126081.html" target="_parent">专利技术市场</a></li>';
		str += '<li><a href="http://www.czeip.com/mark/" target="_parent">商标市场</a></li>';
		str += '<li class="index-fwft-menu" name="02">';
		str += '<div class="txh">';
		str += '<a href="http://hnipbi.izhiliao.com.cn/index.aspx" target="_parent">区域监测</a><img src="../public/imgs/dot2.png"></div>';
		str += '<div class="navmenuhh">';
		str += '<div class="new-index-menu" id="Div3">';
		str += '<div class="navmenu-c">';
		str += '<div class="navmenu-cz">';
		str += '<dt><span name="02_1"><a href="http://hnipbi.izhiliao.com.cn/htmls/2017/02/000200000000.html"';
		str += ' target="_parent">区域监测分析</a></span> </dt>';
		str += '<dt><span name="02_2"><a href="http://hnipbi.izhiliao.com.cn/Report/agencybylist.aspx?1=1&type=1"';
		str += ' target="_parent">创新主体分析</a></span> </dt>';
		str += '<dt><span name="02_3"><a href="http://hnipbi.izhiliao.com.cn/IPChart/htmls/0301010200.html" target="_parent">';
		str += '排行榜</a></span> </dt>';
		str += '<dt><span name="02_4"><a href="http://www.czeip.com/report/" target="_parent">历年报告</a></span>';
		str += '</dt>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</div>';
		str += '</li>';
		str += '<li name="03"><a href="../list/patent.html" target="_parent">检索</a></li>';
		str += '<li><a href="http://www.czeip.com/info/" target="_parent">看资讯</a></li>';
		str += '<li name="04"><a href="http://hn.izhiliao.com.cn/Site/SiteView.aspx" target="_parent" >网址导航</a></li>';
		str += '<li name="05"><a href="http://hnself.izhiliao.com.cn/self/index.aspx" target="_parent" >自助撰写</a></li>';
		str += '<li><a href="http://www.czeip.com/help/" target="_parent">帮助中心</a></li>';
		str += '</ul>';
		str += '</div>';
		str += '</div>';

		
		
		$('#headerNav').html(str);
		$(".navboxh").find("li[name='03']").addClass("active");
		 
    $(".index-fwft-menu:eq(0)").hover(function () {
        $(".new-index-menu dt .on").removeClass("on");
		        $(".navmenu").show();
		        $(".new-index-menu:eq(0) dt").children('dl').hide();
		        $(".new-index-menu:eq(0) dt:first").children('dl').show();
		        $(".new-index-menu:eq(0) dt:first").children('span').addClass("on");
		        $(".new-index-menu:eq(0) dt").mouseenter(function () {
		            $(this).children("dl").show();
		            $(this).children("span").addClass("on");
		            $(this).siblings().children("span").removeClass("on");
		            $(this).siblings().children("dl").hide();
		        })
		        var navheight = $(".new-index-menu:eq(0)").height();
		        $(".new-index-menu:eq(0) dl").height(navheight - 10); 
		    }, function () {
		        $(".navmenu").hide();
		    });
	} 
	var hh = $(window).height();
	hh = hh - $("#headerNav").height() - $("#footerNew").height() - 70;
	$("#mincontent").css("min-height", hh + "px");
}
function initFooter() {
	var str = '';
	str += '<div class="footer">';
	str += 'Copyright @ 2016 CZEIP.COM 诚知网版权所有 豫ICP备15010649号';
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
// 获取域名
function getdomainName(filename) {
	var domainurl = location.href;
	var domainName = "";
	var domainindex = domainurl.indexOf("/" + filename + "/");
	if (domainindex == -1)
		domainindex = domainurl.lastIndexOf("/");
	domainName = domainurl.substring(0, domainindex)
	domainName = domainName.replace(location.origin, "");
	return domainName;
}
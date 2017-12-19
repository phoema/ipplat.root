$(function() {
	return;
	// 轮播资讯
	var surl = "api/article/getbytop";
	$
			.ajax({
				type : "post",
				url : surl,
				dataType : "json", // 返回值类型
				data : {
					page : 0,
					size : 5
				},
				success : function(sender) {
					var obj = sender;
					var s = [];
					var index = 0;
					for ( var key in obj) {
						if (obj[key].title == null)
							continue;
						if (index == 0) {
							var topurl = "info/infodetail.html?ty="
									+ obj[key].type + "&id=" + obj[key].id;

							$("#topnews").find(".img_txt1")
									.text(obj[key].title);
							$("#topnews").find("img").attr("src",
									obj[key].topimage);
							$("#topnews").unbind("click");
							$("#topnews").bind("click", function() {
								window.open(topurl);
							});
						}

						s
								.push('<li class="slidesjs-pagination-item"><a  onmouseover="changeAutoScrollTopNews('
										+ index + ');"');
						s.push(' href="javascript:void(0);" nsrc="'
								+ obj[key].topimage + '"');
						s.push(' ntitle="' + obj[key].title + '" nid="'
								+ obj[key].id + '" ntype="' + obj[key].type
								+ '"');
						s.push(' data-slidesjs-item="' + index + '" class="">'
								+ (index + 1) + '</a></li>');
						index++;
					}
					$("#topnews").find(".slidesjs-pagination").html(s.join(''));

					AutoScrollTopNews();
					_scrollingTopNews = setInterval("AutoScrollTopNews()", 3000);

					$("#topnews").hover(
							function() {
								clearInterval(_scrollingTopNews);
								// $(this).css("cursor", "pointer");
							},
							function() {
								clearInterval(_scrollingTopNews);
								_scrollingTopNews = setInterval(
										"AutoScrollTopNews()", 3000);
							});

				},
				error : function(sender) {
				}
			});
	shownews(0);

	getcommendpatent();
	getmap();
});

var _scrollingTopNews;
var _scrollingTopNewsindex = 0;
var AutoScrollTopNews = function(flag) {
	var _scroll = $("#topnews");
	var topsrc = _scroll.find(".slidesjs-pagination").find(
			"a:eq(" + _scrollingTopNewsindex + ")").attr("nsrc");
	var toptitle = _scroll.find(".slidesjs-pagination").find(
			"a:eq(" + _scrollingTopNewsindex + ")").attr("ntitle");
	var topurl = "info/infodetail.html?ty="
			+ _scroll.find(".slidesjs-pagination").find(
					"a:eq(" + _scrollingTopNewsindex + ")").attr("ntype")
			+ "&id="
			+ _scroll.find(".slidesjs-pagination").find(
					"a:eq(" + _scrollingTopNewsindex + ")").attr("nid");
	_scroll.find(".active").removeClass("active");
	_scroll.find(".slidesjs-pagination").find(
			"a:eq(" + _scrollingTopNewsindex + ")").addClass("active");
	_scroll.find(".img_txt1").text(toptitle);
	_scroll.find("img").attr("src", topsrc);
	_scroll.unbind("click");
	_scroll.bind("click", function() {
		window.open(topurl);
	});
	_scrollingTopNewsindex++;
	// _scroll.animate({ marginLeft: "-280px" }, 2000, function () {
	// _scroll.css({ marginLeft: 0
	// }).find("div[class='tds']:first").appendTo(_scroll);
	// });
	if (_scrollingTopNewsindex >= 4)
		_scrollingTopNewsindex = 0;
}

function changeAutoScrollTopNews(index) {
	clearInterval(_scrollingTopNews);
	_scrollingTopNewsindex = index;
	AutoScrollTopNews(false);
	_scrollingTopNews = setInterval("AutoScrollTopNews()", 3000);
}
function shownews(index) {

	if ($("#newsul_" + index + " li").length > 0) {
		$("#newsdiv ul[name='newstab'] li").removeClass("selectab");
		$("#newstab_" + index).addClass("selectab");
		$("ul[id^='newsul_']").hide();
		$("#newsul_" + index).show();
		return;
	}
	var surl = "api/article/getbytype";
	$.ajax({
		type : "post",
		url : surl,
		dataType : "json", // 返回值类型
		data : {
			type : (index + 1),
			page : 0,
			size : 8
		},
		success : function(sender) {
			$("#newsdiv .selectab").removeClass("selectab");
			$("#newstab_" + index).addClass("selectab");
			$("ul[id^='newsul_']").hide();
			var obj = sender.content;

			var s = [];
			var shref = "info/infodetail.html?ty=1&id=";
			for ( var key in obj) {
				if (obj[key].title == null)
					continue;
				var infotime = "";
				if (obj[key].createtime.length >= 10)
					infotime = obj[key].createtime.substring(0, 10);
				shref = "info/infodetail.html?ty=" + obj[key].type + "&id="
						+ obj[key].id;
				s.push('<li><a href="' + shref + '" target="_blank">'
						+ obj[key].title + '</a><span>' + infotime
						+ '</span></li>');

			}
			$("#newsul_" + index).html(s.join(''));

			$("#newsul_" + index).show();
		},
		error : function(sender) {
		}
	});
}
function getcommendpatent() {
	var surl = "api/article/commendpatent";// _RootUrl+

	$.ajax({
		type : "post",
		url : surl,
		dataType : "json", // 返回值类型
		data : {},
		success : function(sender) {

			var obj = sender;

			var s = [];
			var shref = "http://www.scptd.com.cn/vShowroom.aspx?id=";
			var index = 0;
			for ( var key in obj) {
				if (obj[key].title == null)
					continue;
				if(index>=6)
					break;
				shref = "http://www.scptd.com.cn/vShowroom.aspx?id="
						+ obj[key].id;

				var infotime = "";
				if (obj[key].createtime.length >= 10)
					infotime = obj[key].createtime.substring(0, 10);
				s.push('<li><a href="' + shref + '" target="_blank">'
						+ obj[key].title + '</a><span>' + infotime
						+ '</span></li>');
				index++;
			}
			$("#commendpatent").html(s.join(''));
		},
		error : function(sender) {
		}
	});

}
function getmap() {
	var areaseriesdatas = [ {
		name : '甘孜藏族自治州',
		value : 100
	}, {
		name : '阿坝藏族羌族自治州',
		value : 100
	}, {
		name : '凉山彝族自治州',
		value : 100
	}, {
		name : '绵阳市',
		value : 100
	}, {
		name : '达州市',
		value : 100
	}, {
		name : '广元市',
		value : 100
	}, {
		name : '雅安市',
		value : 100
	}, {
		name : '宜宾市',
		value : 100
	}, {
		name : '乐山市',
		value : 100
	}, {
		name : '南充市',
		value : 100
	}, {
		name : '巴中市',
		value : 100
	}, {
		name : '泸州市',
		value : 100
	}, {
		name : '成都市',
		value : 100
	}, {
		name : '资阳市',
		value : 100
	}, {
		name : '攀枝花市',
		value : 100
	}, {
		name : '眉山市',
		value : 100
	}, {
		name : '广安市',
		value : 100
	}, {
		name : '德阳市',
		value : 100
	}, {
		name : '内江市',
		value : 100
	}, {
		name : '遂宁市',
		value : 100
	}, {
		name : '自贡市',
		value : 100
	}, ]
	var optioncitymap = {
		legend : {
			show : true,
			orient : 'vertical',
			x : -200,
			data : [ "四川省" ]
		},
		tooltip : {
			trigger : 'item',
			borderWidth : 0,

			color : null,
			padding : null,
			padding : 0,
			show : false,
			formatter : function(params) {

				return '';
			}
		},
		dataRange : {
			show : false,
			min : 0,
			max : 100,
			// color: ['orangered', 'yellow', 'lightskyblue'],
			color : [ '#FFFAF7', '#FFFAF7' ],
			inRange : {
				color : [ '#FFFAF7', '#FFFAF7' ],
			},
			outOfRange : {
				color : [ '#AAAAAA' ]
			},
			x : 'left',
			y : 'bottom',
			text : [ '高', '低' ], // 文本，默认为数值文本
			calculable : true,
			textStyle : {
				fontSize : '12'
			}
		},
		series : [ {
			name : '市区',
			type : 'map',
			mapType : '四川',

			selectedMode : false,
			itemStyle : {
				normal : {
					label : {
						show : true,
						textStyle : {
							color : '#666',
							fontSize : 12
						}
					},
					borderWidth : 1,
					borderColor : '#CD6F16'
				},
				emphasis : {
					label : {
						show : false
					},
					areaStyle : {
						color : 'rgba(255,206,74,0.5)'
					}
				}
			}, // @@@0816 城市对应辖区数值
			data : areaseriesdatas
		} ]
	};

	require.config({
		paths : {
			echarts : 'js/echart'
		}
	});
	require([ 'echarts', 'echarts/chart/map' ], function(ec) {
		myChart = ec.init(document.getElementById('mapcity'), 'shine'); // ,'macarons'
		myChart.setOption(optioncitymap);
		// if (/msie/.test(navigator.userAgent.toLowerCase()) &&
		// ($.browser.version == "7.0" || document.documentMode < 8)) {
		// $("#mapcity").css({ "position": "static" });
		// }
		// $("#mapcity").find("div:eq(0)").css({ "position": "" });

		var ecConfig = require('echarts/config');

		myChart.on(ecConfig.EVENT.CLICK, chartclick);

	});
}

// 全国省份地图的点击事件
function chartclick(params) {
	if (isNaN(params.value))
		return;
	var cityurl = "";
	if (params.name.indexOf("成都") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd/";
	else if (params.name.indexOf("自贡") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_144/";
	else if (params.name.indexOf("攀枝花") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_149/";
	else if (params.name.indexOf("泸州") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_154/";
	else if (params.name.indexOf("德阳") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_159/";
	else if (params.name.indexOf("绵阳") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_164/";
	else if (params.name.indexOf("广元") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_169/";
	else if (params.name.indexOf("遂宁") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_174/";
	else if (params.name.indexOf("内江") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_179/";
	else if (params.name.indexOf("乐山") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_184/";
	else if (params.name.indexOf("南充") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_189/";
	else if (params.name.indexOf("宜宾") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_194/";
	else if (params.name.indexOf("广安") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_199/";
	else if (params.name.indexOf("达州") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_204/";
	else if (params.name.indexOf("巴中") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_239/";
	else if (params.name.indexOf("雅安") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_209/";
	else if (params.name.indexOf("眉山") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_214/";
	else if (params.name.indexOf("资阳") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_219/";
	else if (params.name.indexOf("阿坝") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_224/";
	else if (params.name.indexOf("甘孜") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_229/";
	else if (params.name.indexOf("凉山") > -1)
		cityurl = "http://211.149.187.208/szzpt/cd_234/";

	window.open(cityurl);
	// if()params.name; //切换当前省
	// alert(myChart.getOption().timeline[0].currentIndex);
}
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
	// initHeader();
	initFooter();
	initHeight();
});
function initHeader() {

	var str = '';
	str += '<ul id="nav1">';
	// str+='<a href="javascript:void(0);" style="cursor:default"><li
	// class="logo">中国知识产权大数据与智慧服务系统</li></a>';
	str += '<li><a href="index.html" class="selected" >首页</a></li>';
	str += '<li><a href="searchindex.html" >在线查找</a></li>';
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
	str += '网站导航 | 关于我们 | 隐私声明&nbsp;&nbsp;&nbsp;&nbsp;<div class="inf">版权所有：四川省知识产权服务中心 蜀ICP备08003890号-2 主办单位：四川省知识产权服务中心 &nbsp;&nbsp;&nbsp;&nbsp;联系地址：成都市一环路南四段二号 邮编：610041</div>';
	str += '</div>';
	$('#footerNew').html(str);

}
function initHeight() {
	var hh = $(window).height();
	hh = hh - $("#headerNav").height() - $("#footerNew").height() - 120;
	$(".whole").css("min-height", hh + "px");

}
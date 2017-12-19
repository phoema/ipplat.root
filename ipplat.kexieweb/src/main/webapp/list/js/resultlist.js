//专利国别
var PDB = {
	"CNA0" : "中国发明申请",
	"CNB0" : "中国发明授权",
	"CNY0" : "中国实用新型",
	"CNS0" : "中国外观设计",
	"MOA0" : "澳门发明申请",
	"MOB0" : "澳门发明授权",
	"MOU0" : "澳门实用新型申请",
	"MOY0" : "澳门实用新型授权",
	"MOD0" : "澳门外观设计申请",
	"MOS0" : "澳门外观设计授权",
	"HKA0" : "香港发明申请",
	"HKB0" : "香港发明授权",
	"HKS0" : "香港外观设计",
	"USA0" : "美国发明申请",
	"USB0" : "美国发明授权",
	"USS0" : "美国外观设计",
	"EPA0" : "EP发明申请",
	"EPB0" : "EP发明授权",
	"KRA0" : "韩国发明申请",
	"KRB0" : "韩国发明授权",
	"KRU0" : "韩国实用新型申请",
	"KRY0" : "韩国实用新型授权",
	"KRS0" : "韩国外观设计",
	"JPA0" : "日本发明申请",
	"JPB0" : "日本发明授权",
	"JPU0" : "日本实用新型申请",
	"JPY0" : "日本实用新型授权",
	"JPS0" : "日本外观设计",
	"JPOT" : "日本其它",
	"DEA0" : "德国发明申请",
	"DEB0" : "德国发明授权",
	"DEY0" : "德国实用新型",
	"DES0" : "德国外观设计",
	"DDA0" : "德国发明申请",
	"DDB0" : "德国发明授权",
	"DDY0" : "德国实用新型",
	"DDS0" : "德国外观设计",
	"CAA0" : "加拿大发明申请",
	"CAB0" : "加拿大发明授权",
	"CAS0" : "加拿大外观设计",
	"AUA0" : "澳大利亚发明申请",
	"AUB0" : "澳大利亚发明授权",
	"AUS0" : "澳大利亚外观设计",
	"AUOT" : "澳大利亚其它",
	"RUA0" : "俄罗斯发明申请",
	"RUB0" : "俄罗斯发明授权",
	"RUY0" : "俄罗斯实用新型",
	"RUS0" : "俄罗斯外观设计",
	"GBA0" : "英国发明申请",
	"GBB0" : "英国发明授权",
	"GBS0" : "英国外观设计",
	"GBOT" : "英国其它",
	"CHA0" : "瑞士发明申请",
	"CHB0" : "瑞士发明授权",
	"CHS0" : "瑞士外观设计",
	"TWA0" : "台湾发明申请",
	"TWB0" : "台湾发明授权",
	"TWU0" : "台湾实用新型申请",
	"TWY0" : "台湾实用新型授权",
	"TWS0" : "台湾外观设计",
	"FRA0" : "法国发明申请",
	"FRB0" : "法国发明授权",
	"FRY0" : "法国实用证书",
	"FRS0" : "法国外观设计",
	"WOA0" : "WO国际发明申请",
	"AD00" : "安道尔",
	"AE00" : "阿拉伯联合酋长国",
	"AF00" : "阿富汗",
	"AG00" : "安提瓜和巴布达",
	"AI00" : "安圭拉岛",
	"AL00" : "阿尔巴尼亚",
	"AM00" : "亚美尼亚",
	"AN00" : "荷属安的列斯岛",
	"AO00" : "安哥拉",
	"AP00" : "非洲地区工业产权组织(ARIPO)",
	"AR00" : "阿根廷",
	"AT00" : "奥地利",
	"AU00" : "澳大利亚",
	"AW00" : "阿鲁巴岛",
	"AZ00" : "阿塞拜疆",
	"BA00" : "波斯尼亚和黑塞哥维那",
	"BB00" : "巴巴多斯",
	"BD00" : "孟加拉",
	"BE00" : "比利时",
	"BF00" : "布基纳法索",
	"BG00" : "保加利亚",
	"BH00" : "巴林",
	"BI00" : "布隆迪",
	"BJ00" : "贝宁",
	"BM00" : "百慕大",
	"BN00" : "文莱",
	"BO00" : "玻利维亚",
	"BR00" : "巴西",
	"BS00" : "巴哈马",
	"BT00" : "不丹",
	"BV00" : "布韦岛",
	"BW00" : "博茨瓦纳",
	"BX00" : "比荷卢商标局(BBM)和比荷卢外观设计局(BBDM)",
	"BY00" : "白俄罗斯",
	"BZ00" : "伯利兹",
	"CA00" : "加拿大",
	"CD00" : "刚果民主共和国",
	"CF00" : "中非共和国",
	"CG00" : "刚果",
	"CH00" : "瑞士",
	"CI00" : "科特迪瓦",
	"CK00" : "库克群岛",
	"CL00" : "智利",
	"CM00" : "喀麦隆",
	"CN00" : "中国",
	"CO00" : "哥伦比亚",
	"CR00" : "哥斯达黎加",
	"CU00" : "古巴",
	"CV00" : "佛得角",
	"CW00" : "库拉索岛",
	"CY00" : "塞浦路斯",
	"CZ00" : "捷克共和国",
	"DE00" : "德国",
	"DJ00" : "吉布提",
	"DK00" : "丹麦",
	"DM00" : "多米尼克",
	"DO00" : "多米尼加共和国",
	"DZ00" : "阿尔及利亚",
	"EA00" : "欧亚专利局(EAPO)",
	"EC00" : "厄瓜多尔",
	"EE00" : "爱沙尼亚",
	"EG00" : "埃及",
	"EH00" : "西撒哈拉",
	"EM00" : "欧洲内部市场协调局（商标和外观设计）(OHIM)",
	"EP00" : "欧洲专利局(EPO)",
	"ER00" : "厄立特里亚",
	"ES00" : "西班牙",
	"ET00" : "埃塞俄比亚",
	"FI00" : "芬兰",
	"FJ00" : "斐济",
	"FK00" : "福克兰群岛(马尔维纳斯)",
	"FO00" : "法罗群岛",
	"FR00" : "法国",
	"GA00" : "加蓬",
	"GB00" : "英国",
	"GC00" : "海湾地区阿拉伯国家合作委员会专利局(GCC)",
	"GD00" : "格林纳达",
	"GE00" : "格鲁吉",
	"GG00" : "根西岛",
	"GH00" : "加纳",
	"GI00" : "直布罗陀",
	"GL00" : "格陵兰",
	"GM00" : "冈比亚",
	"GN00" : "几内亚",
	"GQ00" : "赤道几内亚",
	"GR00" : "希腊",
	"GS00" : "南乔治亚和南桑德韦奇群岛",
	"GT00" : "危地马拉",
	"GW00" : "几内亚比绍",
	"GY00" : "圭亚那",
	"HK00" : "中华人民共和国香港特别行政区",
	"HN00" : "洪都拉斯",
	"HR00" : "克罗地亚",
	"HT00" : "海地",
	"HU00" : "匈牙利",
	"IB00" : "世界知识产权国际局(WIPO)",
	"ID00" : "印度尼西亚",
	"IE00" : "爱尔兰",
	"IL00" : "以色列",
	"IM00" : "马恩岛",
	"IN00" : "印度",
	"IQ00" : "伊拉克",
	"IR00" : "伊朗(伊斯兰共和国)",
	"IS00" : "冰岛",
	"IT00" : "意大利",
	"JE00" : "新泽西",
	"JM00" : "牙买加",
	"JO00" : "约旦",
	"JP00" : "日本",
	"KE00" : "肯尼亚",
	"KG00" : "吉尔吉斯斯坦",
	"KH00" : "柬埔寨",
	"KI00" : "基里巴斯",
	"KM00" : "科摩罗",
	"KN00" : "圣基茨和尼维斯",
	"KP00" : "朝鲜民主主义人民共和国",
	"KR00" : "韩国",
	"KW00" : "科威特",
	"KY00" : "开曼群岛",
	"KZ00" : "哈萨克斯坦",
	"LA00" : "老挝人民民主共和国",
	"LB00" : "黎巴嫩",
	"LC00" : "圣卢西亚岛",
	"LI00" : "列支敦士登",
	"LK00" : "斯里兰卡",
	"LR00" : "利比里亚",
	"LS00" : "莱索托",
	"LT00" : "立陶宛",
	"LU00" : "卢森堡",
	"LV00" : "拉脱维亚",
	"LY00" : "利比亚",
	"MA00" : "摩洛哥",
	"MC00" : "摩纳哥",
	"MD00" : "摩尔多瓦共和国",
	"ME00" : "黑山",
	"MG00" : "马达加斯加",
	"MK00" : "前南斯拉夫马其顿共和国",
	"ML00" : "马里",
	"MM00" : "缅甸",
	"MN00" : "蒙古",
	"MO00" : "澳门",
	"MP00" : "北马里亚纳群岛",
	"MR00" : "毛里塔尼亚",
	"MS00" : "蒙特塞拉特岛",
	"MT00" : "马耳他",
	"MU00" : "毛里求斯",
	"MV00" : "马尔代夫",
	"MW00" : "马拉维墨西哥",
	"MX00" : "墨西哥",
	"MY00" : "马来西亚",
	"MZ00" : "莫桑比克",
	"NA00" : "纳米比亚",
	"NE00" : "尼日尔",
	"NG00" : "尼日利亚",
	"NI00" : "尼加拉瓜",
	"NL00" : "荷兰",
	"NO00" : "挪威",
	"NP00" : "尼泊尔",
	"NR00" : "瑙鲁",
	"NZ00" : "新西兰",
	"OA00" : "非洲知识产权组织(OAPI)",
	"OM00" : "阿曼",
	"PA00" : "巴拿马",
	"PE00" : "秘鲁",
	"PG00" : "巴布亚新几内亚",
	"PH00" : "菲律宾",
	"PK00" : "巴基斯坦",
	"PL00" : "波兰",
	"PT00" : "葡萄牙",
	"PW00" : "帕劳",
	"PY00" : "巴拉圭",
	"QA00" : "卡塔尔",
	"QZ00" : "欧盟植物品种局",
	"RO00" : "罗马尼亚",
	"RS00" : "塞尔维亚",
	"RU00" : "俄罗斯联邦",
	"RW00" : "卢旺达",
	"SA00" : "沙特阿拉伯",
	"SB00" : "所罗门群岛",
	"SC00" : "塞舌尔",
	"SD00" : "苏丹",
	"SE00" : "瑞典",
	"SG00" : "新加坡",
	"SH00" : "圣赫勒拿岛",
	"SI00" : "斯洛文尼亚",
	"SK00" : "斯洛伐克",
	"SL00" : "塞拉利昂",
	"SM00" : "圣马力诺",
	"SN00" : "塞内加尔",
	"SO00" : "索马里",
	"SR00" : "苏里南",
	"SS00" : "南苏丹",
	"ST00" : "圣多美和普林西比",
	"SV00" : "萨尔瓦多",
	"SX00" : "圣马丁（荷兰一部分）",
	"SY00" : "叙利亚阿拉伯共和国",
	"SZ00" : "斯威士兰",
	"TC00" : "特克斯和凯科斯群岛",
	"TD00" : "乍得",
	"TG00" : "多哥",
	"TH00" : "泰国",
	"TJ00" : "塔吉克斯坦",
	"TM00" : "土库曼斯坦",
	"TN00" : "突尼斯",
	"TO00" : "汤加",
	"TP00" : "东帝汶",
	"TR00" : "土耳其",
	"TT00" : "特立尼达和多巴哥",
	"TV00" : "图瓦卢",
	"TW00" : "中国台湾",
	"TZ00" : "坦桑尼亚联合共和国",
	"UA00" : "乌克兰",
	"UG00" : "乌干达",
	"US00" : "美国",
	"UY00" : "乌拉圭",
	"UZ00" : "乌兹别克斯坦",
	"VA00" : "梵蒂冈",
	"VC00" : "圣文森特和格林纳丁斯",
	"VE00" : "委内瑞拉",
	"VG00" : "英属维尔京群岛",
	"VN00" : "越南",
	"VU00" : "瓦努阿图",
	"WO00" : "世界知识产权组织(WIPO)(国际局)",
	"WS00" : "萨摩亚",
	"YE00" : "也门",
	"YU00" : "南斯拉夫",
	"ZA00" : "南非",
	"ZM00" : "赞比亚",
	"ZW00" : "津巴布韦",
}
// 采用正则表达式获取地址栏参数
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	// 申请人='ELI LILLY & COMP.' 转码函数顺序调整，保证&字符的截取
	if (r != null)
		return unescape(decodeURIComponent(r[2]));
	return null; // 返回参数值}
}
$(function() {

	/* 获得查询表达式 */
	var ex = GetQueryString("ex");// 获得表达式
	var db = GetQueryString("pdb");// 获得数据库类型
	
	if (!db)
		db = "CNA0,CNY0,CNS0,CNB0,TH00,VN00,PH00,SG00,MY00,ID00,KH00,BN00,MM00,LA00";
	db = "CNS0";//科协仅限外观设计
	var union = GetQueryString("union");//
	$("#select-key_express").val(ex);
	$("#select-key_pdb").val(db);
	initleft();
	// 只有在页面初始化时，判断是否联合检索
	getlist(1, union);

	// start//关键字
	$('#keyWord').click(function() {
		$('#keyWord_ul').show();
	});
	// 关键字
	$("#keyWord_ul").mouseleave(
			function() {
				$("#keyWord_ul").hide();
				$(".keyWord").css("background-image",
						"url('images/btn_arrow_down.png')");
			});
	// 检索按钮
	$(".keyWord_Div").click(
			function() {
				$("#keyWord_ul").show();
				$("#keyWord").css("background-image",
						"url('images/btn_arrow_up.png')");
				return false;
			});
	$("#keyWord_ul li").mouseover(function() {
		$("#keyWord_ul li").removeClass("select_item");
		$(this).addClass("select_item");
	});
	$("#keyWord_ul li").click(
			function() {
				$("#keyWord_ul").hide();
				$("#keyWord").css("background-image",
						"url('images/btn_arrow_down.png')");
				$("#keyWord").html(($(this).text()));
				$("#select-key__keyWord").val($(this).attr("value"));
				$("#select-key__keyWordStr").val($(this).text());

			});

	// 关键字表达式
	var _keyWordStr = $.trim($("#select-key__keyWordStr").val());
	if (_keyWordStr != "") {
		$("#keyWord").html(_keyWordStr);
	}

	var expressCN2Val = $.trim($("#select-key_expressCN2Val").val());
	if (expressCN2Val != "") {
		$("#_expressCN2").val(expressCN2Val);
	}

	// 默认选中第一个
	if (_keyWordStr == null || _keyWordStr == "") {
		$("#keyWord").html(($("#defaultKeyWord").text()));

		$("#select-key__keyWord").val($("#defaultKeyWord").attr("value"));
		$("#select-key__keyWordStr").val($("#defaultKeyWord").text());
	}
	// /end

	/* start 排序 */
	$("#patentStrength").click(function() {
		$('#patentStrength_ul').show();
	});

	$("#patentStrength_ul").mouseleave(
			function() {
				$("#patentStrength_ul").hide();
				$($("#patentStrength_ul").prev().children().get(0)).css(
						"background-image", "url('images/arrowBlueDown.png')");
			});

	/* 正序 降序 */
	$('#order').click(function() {

		var orderType = $("#order").attr("v");
		var sortname = $('#patentStrength').attr('v');
		if (orderType == '-') {
			// 是降序
			$("#order").css("background-image", "url('images/btn8_1.png')");
			$("#order").attr("v", "+");
			sort(sortname, 1);

		} else {
			// 是升序
			$("#order").css("background-image", "url('images/btn7_1.png')");
			$("#order").attr("v", "-");
			sort(sortname, 1);
		}
	}); // end 排序

});
// 弹出大图图层
function tobig(e, src) {
	$("#showBigImage").show();
	$(".shielding_layer").removeClass("displayNone");
	var scrolltop = $(document).scrollTop();

	$("#showBigImage").css("margin-top", scrolltop);

	if (src == undefined || src == 'undefined') {
		$('#bigimg').attr('src', 'images/nopic.jpg');
	} else {
		$("#bigimg").attr("src", src);
	}

	$("#imgAlertTitle").html("");
	setLayerHeight();
	disabledMouseWheel();
	$(".bodyClass").addClass("overflowHidden");

	// 大图出现后，再绑定缩略图关闭
	$(".closeBigImage").click(function() {
		$("#showBigImage").hide();
		$(".shielding_layer").addClass("displayNone");
		MouseWheel();
		$(".bodyClass").removeClass("overflowHidden");
	});

}

// 鼠标滚动
function MouseWheel() {
	window.onmousewheel = document.onmousewheel = true;
}

// 设置浮层高度
function setLayerHeight() {
	var screenHeight = $(window).height();
	var scrolltop = $(document).scrollTop();
	$(".shielding_layer").css({
		height : screenHeight + scrolltop + 'px'
	});
	var screenWidth = document.body.scrollWidth;// 当前窗口宽度
	$("body").css({
		width : screenWidth + 'px'
	});
}
// 鼠标禁止滚动
function disabledMouseWheel() {
	var screenHeight = $(window).height();
	var scrolltop = $(document).scrollTop();
	$(".shielding_layer").css({
		height : screenHeight + scrolltop + 'px'
	});
	if (document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	window.onmousewheel = document.onmousewheel = scrollFunc;
}
function scrollFunc(evt) {
	return false;
}

// 获取排序

function getSort() {

	var patentStrength = $.trim($("#patentStrength").attr("v"));
	var order = $.trim($("#order").attr("v"));

	return order + patentStrength;
}

function switchSelectCommon(obj) {

	// 通用方法 隐藏DIV 并且带值到父级
	var div_selectUl = $(obj).parent().parent();
	$(div_selectUl).hide();
	$($(div_selectUl).prev().children().get(0)).css("background-image",
			"url('images/arrowBlueDown.png')").html(($(obj).text())).attr("v",
			$(obj).attr("value"));
}

// 通用下拉列表
function switchMoseover(content) {
	$(content).mouseover(function(e) {
		$(content).removeClass("select_item");
		$(this).addClass("select_item");
	});
}

/* 点击按钮排序查询 */
function sort(sortname, currentpage) {
	$('#uul li').each(function() {
		if ($(this).attr('value') == sortname) {
			$('#patentStrength').html($(this).html());
			$('#patentStrength').attr('value', sortname);
			$('#patentStrength').attr('v', sortname);
		}
	});
	$('#patentStrength_ul').hide();// 让下来列表隐藏 用户体验好

	getlist(1);

}

function getlist(currentpage, union) {

	var express = $("#select-key_express").val();
	var pdb = $("#select-key_pdb").val();
	var leftEx = getCategorySelectExpress();
	var finalEx = express + leftEx;

	// 初始化
	var innitstr = '<div id="loading-indicator-theme-overlay" class="loading-indicator-overlay" style="width: 862px; height: 110px; left: 276.833px; position: absolute;  z-index: 5000;"></div>';
	innitstr += '<div id="loading-indicator-theme" class="loading-indicator" style="position: absolute; z-index: 5001; left:530px; "></div>';
	// var pdb='';
	// pdb=database;
	var sort_column = getSort();
	$('#theme').html(innitstr);

	/*
	 * CNA0 发明 CNS0 外观 CNY0 新型 CNB0 授权
	 */

	var str = '';
	$
			.ajax({
				type : "post",
				dataType : "json",
				url : "../api/patent/search/expression",
				data : {
					express : finalEx,
					page : currentpage,
					sort_column : sort_column,// +升序 -降序 默认按公布日降序
					pdb : pdb,
					union_search : !!union
				},
				success : function(data) {
					var obj = data.context;
					// 联合检索
					if (!!union) {
						// 联合检索显示
						$("#span-relation").show();
						var union_data = GetQueryString("union_data");
						if (!union_data) {
							union_data = data.total + ";" + data.trade_total
									+ ";" + data.soft_total + ";"
									+ data.work_total;
						}
						var express = GetQueryString("ex");// 获得表达式
						// 作成大数据关联数据显示条
						buildAllLinkRelation(union_data, express);
					}

					if (!data.total || data.total == "0") {
						$('#theme')
								.html(
										"<div style='padding:15px;'>当前没有查询出结果，请重新编辑，尝试再次查询。</div>");
						$('#contentTipNumList').html('0');
						$('#top300').hide();
						return;
					} else {

						var objrecord = obj.records;// eval( obj.records );
						if (objrecord !== undefined && objrecord != 'undefined'
								&& objrecord != 0) {

							for (var i = 0; i < objrecord.length; i++) {

								/* 处理法律状态start */

								str += '<div class="secondDiv ng-scope" ng-repeat="patent in data">';
								str += '<div class="marginTop10 displayInline positionRelative" style="width:70%; overflow:hidden; float:left; height:auto!important; height:220px; min-height:220px;">';
								str += '<div class=""><div class="displayInline title marginLeft40px titleDiv">';
								str += ((currentpage - 1) * 10 + (i + 1))
										+ '、<a  href="../detail/txnpatentDetail.html?pid='
										+ objrecord[i].pid
										+ '"  target="_blank" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">';
								str += fixnull(objrecord[i].tio) + '</a></div>';
								str += '<div class="displayInline" style="float:right;">';

								if (!!objrecord[i].lssc
										&& objrecord[i].lssc != 0
										&& objrecord[i].lssc != 4) {
									str += '<a class="btntextalink TIChighlight account_state_1_link _link" style="float:left" >';
									str += '<div class="lssc2 iconFirst displayInline statusPatent">'
											+ fixstate(objrecord[i].lssc)
											+ '</div></a>';
								}

								if (objrecord[i].pdt != ''
										&& objrecord[i].pdt != null
										&& objrecord[i].pdt != 'null') {
									str += '<div class="pdt2 iconSecond displayInline statusPatent" style="background-color:#648bcf; float:left">'
											+ objrecord[i].pdt + '</div>';
								}

								str += '</div></div>';
								str += '<div class="marginLeft25 "><div class="marginleft imgContentLighHight">';
								str += '<div class="displayInline shuoming">申请号：</div>';
								var sqh = '';
								if (!objrecord[i].ano) {
									sqh = fixnull(objrecord[i].ans);// 申请号
								} else {
									sqh = fixnull(objrecord[i].ano);// 申请号
								}
								str += '<div style=" width:300px;" class="displayInline arial neirong ng-binding">'
										+ objrecord[i].ans + '</div>';

								str += '<div class="displayInline shuoming">申请日：</div>';
								str += '<div class="displayInline arial neirong ng-binding">'
										+ fixdate(objrecord[i].ad)
										+ '</div></div>';
								str += '<div class="marginleft imgContentLighHight">';
								str += '<div class="displayInline shuoming ">公布号：</div>';
								str += '<div style=" width:300px;" class="displayInline arial neirong ">';
								var gkh = '';
								if (!objrecord[i].pno) {
									gkh = fixnull(objrecord[i].pns);// 公布号
								} else {
									gkh = fixnull(objrecord[i].pno);// 公布号
								}
								str += gkh + '</div>'; // 公开号

								str += '<div class="displayInline shuoming">公布日：</div>';
								str += '<div class="displayInline arial neirong ng-binding">'
										+ fixdate(objrecord[i].pd) + '</div>';
								str += '</div><div class="marginleft imgContentLighHight">';
								str += '<div class="displayInline shuoming" style="vertical-align: top">申请人：</div>';
								str += '<div class="displayInline arial neirong blue APCLink APChighlight ng-binding" style="width: 70%;cursor:pointer">';
								if (objrecord[i].apo != ''
										&& objrecord[i].apo != null
										&& objrecord[i].apo != 'null') {
									var apoArray = objrecord[i].apo.split(';');
									for (var j = 0; j < apoArray.length; j++) {
										str += '<a onclick="appclick(this)" href="javascript:void(0)" target="_self">';
										str += apoArray[j];
										str += '</a>&nbsp;&nbsp;';
									}
								}
								str += '</div></div>';

								// 外观用这个
								if (objrecord[i].pdt == "外观设计") {
									str += '<div class="lc2show marginleft imgContentLighHight">';
									str += '<div class="displayInline shuoming">洛迦诺分类：</div>';
									str += '<div style="cursor:pointer" class="displayInline arial blue neirong LJNQLink ng-binding">';
									var fixlc = fixnull(objrecord[i].lc);
									if (fixlc == '') {
										str += '</div></div>';
									} else {
										var lcArray = fixlc.split(';');
										for (var j = 0; j < lcArray.length; j++) {
											str += '<a onclick="Lclick(this)"  href="javascript:void(0)" target="_self">';
											str += lcArray[j];
											str += '</a>&nbsp;&nbsp;';
										}
										str += '</div></div>';
									}
								} else {
									str += '<div class="ipc2 marginleft imgContentLighHight">';
									str += '<div class="displayInline shuoming">IPC：</div>';
									str += '<div style="cursor:pointer" class="displayInline arial blue neirong IPCQLink ng-binding">';
									var fixipc = fixnull(objrecord[i].ipc);
									if (fixipc == '') {
										str += '</div></div>';
									} else {
										var ipcArray = fixipc.split(';');
										for (var j = 0; j < ipcArray.length; j++) {
											str += '<a onclick="IPCclick(this)"  href="javascript:void(0)" target="_self">';
											str += ipcArray[j];
											str += '</a>&nbsp;&nbsp;';
										}
										str += '</div></div>';
									}
								}
								str += '<div style="display: none;" class="sfpnsContent marginleft imgContentLighHight">';
								str += '<div class="displayInline shuoming floatLeft">同族文献号：</div>';
								str += '<div class="displayInline statusPatent arial neirong cursorPointer btnwenxianhao" style="background-color: rgb(100, 139, 255);" v="CN2512017Y">点击显示同族文献号</div>';
								str += '<div class="displayNone wenxianhaoitems floatLeft patentfontword abstractDiv "><strong onclick="wenxianhao(this);" class="addplus cursorPointer" style="float:right;"></strong></div></div>';

								if (objrecord[i].pdt == "外观设计") {
									// 外观设计 debeo 暂无
									str += '<div class=" marginleft imgContentLighHight">';
									str += '<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_debe" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';
									str += '<span class="shuoming">简要说明：</span>'
											+ fixnull(objrecord[i].debeo)
											+ '</div>';
									str += '</div>';
									// 外观结束
								} else {
									// 摘要
									str += '<div class="ipc2 marginleft imgContentLighHight">';
									str += '<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_abs" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';
									str += '<span class="shuoming eshuomingt">摘要：</span>'
											+ fixnull(objrecord[i].abso)
											+ '</div>';
									// 摘要结束
								}

								// 外观设计结束

								if (objrecord[i].pdt == "外观设计") {
									// 外观设计 另一种
									str += '</div></div>';
									str += '<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';
									str += '<div class="smallBigBox positionAbsolute">';
									str += '<div style="display: none;" class="boxBig positionAbsolute">';
									str += '<div style="display: none; left: -456.409px; top: 0px;" class="big">';
									str += '<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
									str += '</div><div class="small cursorPointer">';
									str += '<span style="left: 135.467px; top: 0px; display: none;"  class="markkk"></span>';
									str += '<img onerror="imgonerror(this);" onclick="tobig(this,\''
											+ objrecord[i].IMGO
											+ '\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'
											+ objrecord[i].IMGO
											+ '" class="im1 smallImgDisplay"></div>';
									str += '</div></div>';
									str += '</div>';
									str += '<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';
									str += '</div></div>';
								} else {

									// 另一种
									str += '</div></div></div>';
									str += '<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';
									str += '<div class="smallBigBox positionAbsolute">';
									str += '<div style="display: none;" class="boxBig positionAbsolute">';
									str += '<div style="display: none; left: -456.409px; top: 0px;" class="big">';
									str += '<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
									str += '</div><div class="small cursorPointer">';
									str += '<span style="left: 135.467px; top: 0px; display: none;" v="" class="markkk"></span>';
									str += '<img onerror="imgonerror(this);" onclick="tobig(this,\''
											+ objrecord[i].IMGO
											+ '\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'
											+ objrecord[i].IMGO
											+ '" class="im1 smallImgDisplay"></div>';
									str += '</div></div>';
									str += '<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';
									str += '</div></div> ';
								}
							}
							$('#theme').html(str);
							$('#contentTipNumList').html(data.total);
							if (data.total > 300) {
								$('#top300').show();
							} else {
								$('#top300').hide();
							}

							getPage(data.total, currentpage);

						} else {
							$('#theme')
									.html(
											"<div style='padding:15px;'>当前没有查询出结果，请重新编辑，尝试再次查询。</div>");
							$('#contentTipNumList').html('0');

						}
					}
				},
				error : function() {
					$('#theme')
							.html(
									"<div style='padding:15px;'>当前没有查询出结果，请重新编辑，尝试再次查询。</div>");
					$('#contentTipNumList').html('0');
					$('#top300').hide();
				}
			});

}

/* 重新检索 不是二次检索 不用加AND条件了 */
function do2Search() {
	$('#categorySelectButton').html('');
	// 触发左边栏统计或者上方重新检索后，关联数据条不再显示。
	$("#span-relation").hide();

	var keyWord = $('#keyWord').text();
	$("#_expressCN2").attr("title", keyWord);
	var express = fieldExpress($("#_expressCN2"), null, null, "");

	if (express == '') {
		$.fz_common.alert("提示", "请填写检索信息");
	} else {
		$("#select-key_express").val(express);
		initleft();
		getlist(1);
	}
}

/* 修正时间格式 */
function fixdate(str) { // 1985/07/13 00:00:00 alert('str'+str)
	if (str == null || str == 'null') {
		return '';
	} else {
		var year = str.substring(0, 4);
		var month = str.substring(5, 7);
		var day = str.substring(8, 10);

		return year + '.' + month + '.' + day;

	}

}

/* 修正null值 */
function fixnull(str) {
	if (str == null || str == 'null') {
		str = '';
	}
	return str;
}

/* 修正显示状态 */
function fixstate(str) {
	var reStr = '';
	switch (str) {
	case "1":
		reStr = '有效';
		break;
	case "2":
		reStr = '无效';
		break;
	case "3":
		reStr = '在审';
		break;
	}

	return reStr;
}

function imgonerror(e) {
	e.src = 'images/nopic.jpg';

}

/* 左侧展示更多 */
function leftmore(e) {
	var dd = $(e).parent().parent().find(
			'div[class="selectContentMore disPlayNone"]').removeClass(
			'disPlayNone');
	$('#leftup').show();
	$('#leftmore').hide();

}
/* 左侧收起 */
function leftup(e) {
	var dd = $(e).parent().parent().find('div[class="selectContentMore"]')
			.addClass('disPlayNone');
	$('#leftup').hide();
	$('#leftmore').show();
}

/* 左侧初始化 */
function initleft() {
	var express = $("#select-key_express").val();
	var pdb = $("#select-key_pdb").val();
	var leftEx = getCategorySelectExpress();
	var finalEx = express + leftEx;

	$.ajax({
		url : '../api/patent/statistics',
		type : 'post',
		dataType : 'json',
		data : {
			express : finalEx,
			pdb : pdb,
			category:"LSSCN;LC;AY;APO;INO",
			lengthmap : "{\"pdb\":\"-1\"}"

		},
		success : function(sender) {
			var obj = sender.context;
			if (obj == 'null' || obj == null) {
				$('#theme').html("<div>暂无内容</div>");
				$('#contentTipNumList').html('0');
				return;
			} else {
				/* 发明人 */
				bulidLeft($('#INO'), obj.ino);
				/* 申请人 */
				bulidLeft($('#APO'), obj.apo);
				/* 申请年 */
				bulidLeft($('#AY'), obj.ay);
				/* IPC小类 */
				bulidLeft($('#IPCSC'), obj.lc);//obj.ipcsc 换成外观分类
				/* 中国当前权利状态 */
				bulidLeft($('#LSSCN'), obj.lsscn);
				/* 专利类型 */
				bulidLeft($('#PDT'), obj.pdb);

			}
		},
		error : function() {

		}
	});
}

/*
 * 点击申请人 跳转到相关申请人的列表 不再要之前的限制了 pdb不用传 点击申请人：申请人=（宁波市文魁控股集团有限公司）
 * 申请人=(菲尼克斯亚太电气(南京)有限公司) 异常，需加单引号
 */
function appclick(e) {
	var appname = $.trim($(e).text());
	var url = location.href;
	var urlfront = decodeURIComponent(url.split('?')[0]);
	var urlfinal = urlfront + "?ex="
			+ encodeURIComponent("申请人=('" + (appname) + "')");
	window.open(urlfinal);
}
/*
 * 点击洛迦诺 跳转到洛迦诺的列表 不再要之前的限制了 pdb不用传 洛加诺:ex=(洛迦诺=('19-06'))
 */
function Lclick(e) {
	var appname = $.trim($(e).text());
	var url = location.href;
	var urlfront = decodeURIComponent(url.split('?')[0]);
	var urlfinal = urlfront + "?ex="
			+ encodeURIComponent("洛迦诺=('" + (appname) + "')");
	window.open(urlfinal);
}
/*
 * 点击IPC 跳转到IPC的列表 不再要之前的限制了 pdb不用传 点击IPC：IPC=（）
 */
function IPCclick(e) {
	var appname = $.trim($(e).text());
	var url = location.href;
	var urlfront = decodeURIComponent(url.split('?')[0]);
	var urlfinal = urlfront + "?ex="
			+ encodeURIComponent("IPC=('" + (appname) + "')");
	window.open(urlfinal);
}

/* 跳转到新页面 */
function topic1() {
	var url = "userdefined.html";
	window.open(url);
}
function topic2() {
	var url = "relevance.html";
	window.open(url);
}
function topic3() {
	var url = "cluster.html";
	window.open(url);
}
/** *弹出层通用函数** */
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

// 鼠标滚动
function MouseWheel() {
	window.onmousewheel = document.onmousewheel = true;
}

// 弹出窗口禁止滚轮上下滚动
function disableWindowWheel() {
	var move = function(e) {
		e.preventDefault && e.preventDefault();
		e.returnValue = false;
		e.stopPropagation && e.stopPropagation();
		return false;
	}
	var keyFunc = function(e) {
		if (37 <= e.keyCode && e.keyCode <= 40) {
			return move(e);
		}
	}
	document.body.onkeydown = keyFunc;
}
/** *弹出层通用函数结束** */

/** ****通用函数***** */
Date.prototype.Format = function(fmt) {
	var o = {
		"M+" : this.getMonth() + 1, // 月份
		"d+" : this.getDate(), // 日
		"h+" : this.getHours(), // 小时
		"m+" : this.getMinutes(), // 分
		"s+" : this.getSeconds(), // 秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
		"S" : this.getMilliseconds()
	// 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

// 转义
function encodeHtml(s) {

	var REGX_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;

	return (typeof s != "string") ? s : s.replace(REGX_HTML_ENCODE, function($0) {
		var c = $0.charCodeAt(0), r = [ "&#" ];
		c = (c == 0x20) ? 0xA0 : c;
		r.push(c);
		r.push(";");
		return r.join("");
	});

};

// 检查特殊符号 过滤为空
function stripscript(s, b) {

	if (b == null) {
		s = s.replace(/[~'"]/g, "");
	}
	s = s.replace(/&/g, "");
	s = s.replace(/=/g, "");
	s = s.replace(/[~()<>{}[\]]/g, "");
	s = s.replace(/[~'!\\@#$%^&\.\*-+_=:]/g, "");
	return s;

}

// 重置链接
function buildLink(obj, str, action) {

	if (action == null || action == "") {
		action = "txnPatentImgTextList";
	}

	var txt = $(obj).text();
	if (txt != null && txt != ("")) {
		// txt = txt.replace(/\s+/g,"");
		$(obj).empty();
		var link = "";
		var strs = txt.split(";");

		for ( var i = 0; i < strs.length; i++) {
			if ($.trim(strs[i]) != "") {
				if (i != 0) {
					link += "<a style='margin-left:5px;' href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " = '" + strs[i].replace(/\'/g, "\\'") + "' )")
							+ " \" target=\"_blank\" >" + strs[i] + "</a>";
				} else {
					link += "<a href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " = '" + strs[i].replace(/\'/g, "\\'") + "' )") + " \" target=\"_blank\" >"
							+ strs[i] + "</a>";
				}
			}
		}
		$(obj).append(link);
	}

}

//重置连接
function buildLink1(obj, str, action){
	
	if (action == null || action == "") {
		action = "txnPatentImgTextList";
	}
	
	var txtOld = $(obj).text();
	var txtDate = txtOld.substring(txtOld.length - 8, txtOld.length);
	var txt = txtOld.substring(0, txtOld.length - 9);
//	alert("txtOld=" + txtOld + "  txt=" + txt);
	if (txt != null && txt != ("")) {
		// txt = txt.replace(/\s+/g,"");
		$(obj).empty();
		var link = "";
		var strs = txt.split(";");
		for ( var i = 0; i < strs.length; i++) {
			if ($.trim(strs[i]) != "") {
				if (i != 0) {
					link += "<a style='margin-left:5px;' href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " = '" + strs[i].replace(/\'/g, "\\'") + "' )")
							+ " \" target=\"_blank\" >" + strs[i] + " " + txtDate.substring(0,4) + "." + txtDate.substring(4,6) + "." + txtDate.substring(6,8) + "</a>";
				} else {
					link += "<a href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " = '" + strs[i].replace(/\'/g, "\\'") + "' )") + " \" target=\"_blank\" >"
							+ strs[i] + " " + txtDate.substring(0,4) + "." + txtDate.substring(4,6) + "." + txtDate.substring(6,8) + "</a>";
				}
			}
		}
		$(obj).append(link);
	}
	
}

//重置链接
function buildDesAPOASOLink(obj, action) {

	if (action == null || action == "") {
		action = "txnPatentImgTextList";
	}

	var txt = $(obj).text();
	if (txt != null && txt != ("")) {
		// txt = txt.replace(/\s+/g,"");
		$(obj).empty();
		var link = "";
		
		var pres = txt.split("|");
		if(pres[1] == "P"){
			var strs = pres[0].split(";");

			for ( var i = 0; i < strs.length; i++) {
				if ($.trim(strs[i]) != "") {
					if (i != 0) {
						link += "<a style='margin-left:5px;' href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + "申请人" + " = '" + strs[i].replace(/\'/g, "\\'") + "' )")
								+ " \" target=\"_blank\" >" + strs[i] + "</a>";
					} else {
						link += "<a href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + "申请人" + " = '" + strs[i].replace(/\'/g, "\\'") + "' )") + " \" target=\"_blank\" >"
								+ strs[i] + "</a>";
					}
				}
			}
		}else if(pres[1] == "S"){
			var strs = pres[0].split(";");

			for ( var i = 0; i < strs.length; i++) {
				if ($.trim(strs[i]) != "") {
					if (i != 0) {
						link += "<a style='margin-left:5px;' href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + "专利权人" + " = '" + strs[i].replace(/\'/g, "\\'") + "' )")
								+ " \" target=\"_blank\" >" + strs[i] + "</a>";
					} else {
						link += "<a href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + "专利权人" + " = '" + strs[i].replace(/\'/g, "\\'") + "' )") + " \" target=\"_blank\" >"
								+ strs[i] + "</a>";
					}
				}
			}
		}
		$(obj).append(link);
	}

}


// 重置法律名称链接
function buildLawLink(obj, str) {

	var txt = $(obj).text();
	if (txt != null && txt != ("")) {

		var linkTxt = "";
		if (txt.indexOf("条") >= 0) {
			linkTxt = txt.split("条")[0] + "条";
		} else {
			linkTxt = txt;
		}
		$(obj).empty();
		var link = "";

		if ($.trim(txt) != "") {
			link += "<a href=\"txnLawsList.do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " = '" + linkTxt.replace(/\'/g, "\\'") + "' )") + " \" target=\"_blank\" >" + txt
					+ "</a>&nbsp;&nbsp;";
		}

		$(obj).append(link);
	}
}

// 相关数据重置链接
function buildLinkRelation(obj, str, action) {

	if (action == null || action == "") {
		action = "txnPatentImgTextList";
	}

	var txt = $(obj).text();
	if (txt != null && txt != ("")) {

		$(obj).empty();
		var link = "";

		if ($.trim(txt) != "" && txt != "0") {
			link = "<a href=\"" + action + ".do?select-key%3AexpressCN=" + encodeURIComponent("( " + str + " )") + " \" target=\"_blank\" title=\"检索 " + "\" >" + txt + "</a>&nbsp;&nbsp;";
			$(obj).append(link);
		} else {
			$(obj).append("0");
		}
	}
}

// 优先权重置链接
function buildLinkEPRY(obj, str) {
	var eprys1 = $(obj).text();
	if (eprys1 != null && eprys1 != "") {
		var eprys = eprys1.split(";");
		$(obj).empty();
		var link = "";
		var dataType = "";

		for ( var i = 0; i < eprys.length; i++) {
			if (eprys[i] != null && eprys[i] != " " && eprys[i] != "") {
				dataType = eprys[i].substr(eprys[i].length - 8, 8);
				dataType = dataType.substr(0, 4) + "." + dataType.substr(4, 2) + "." + dataType.substr(6, 2);
				eprys[i] = eprys[i].substr(0, eprys[i].length - 8) + " " + dataType;
				link = "<a href='' class='" + str + "Click cursorPointer' style='margin-right:5px;'>" + eprys[i] + "</a>";
				$(obj).append(link);
			}

		}
	} else {
		$(obj).append("");
	}
}

// 期刊重置链接
function buildLinkJournal(obj, str1, str2, str3, action) {

	if (action == null || action == "") {
		action = "txnPatentImgTextList";
	}

	var txt = $(obj).text();
	var txtneirong = $(obj).find(".j_journalnamepre").text();
	var txtneirongapy = $(obj).find(".j_journalnamepreapy").text();
	var txtneirongiss = $(obj).find(".j_journalnamepreiss").text();
	// txt = txt.replace(";", " ");
	if (txt != null && txt != ("")) {

		$(obj).empty();
		var link = "";

		if ($.trim(txt) != "") {
			link = "<a href=\""
					+ action
					+ ".do?select-key%3AexpressCN="
					+ encodeURIComponent("( " + str1 + " = '" + txtneirong.replace(/\'/g, "\\'") + "' and " + str2 + " = '" + txtneirongapy.replace(/\'/g, "\\'") + "' and " + str3 + " = '"
							+ txtneirongiss.replace(/\'/g, "\\'") + "')") + " \" target=\"_blank\" title=\"检索 " + txtneirong + "  " + txtneirongapy + "  " + txtneirongiss + "期" + "\" >" + txt
					+ "</a>&nbsp;&nbsp;";
		}
		$(obj).append(link);

	}

}

// 拷贝
function copyToClipboard(selContent) {
	if (window.clipboardData) {
		window.clipboardData.clearData();
		window.clipboardData.setData("Text", selContent);
		$.fz_common.alert("提示", "复制成功！");
	} else if (navigator.userAgent.indexOf("Opera") != -1) {
		window.location = selContent;
	} else if (window.netscape) {
		try {
			netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		} catch (e) {
			$.fz_common.alert("提示", "被浏览器拒绝！请在浏览器地址栏输入'about:config'并回车，然后将'signed.applets.codebase_principal_support'设置为'true'。");
		}
		var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
		if (!clip)
			return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
		if (!trans)
			return;
		trans.addDataFlavor('text/unicode');
		var str = new Object();
		var len = new Object();
		var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
		var copytext = selContent;
		str.data = copytext;
		trans.setTransferData("text/unicode", str, copytext.length * 2);
		var clipid = Components.interfaces.nsIClipboard;
		if (!clip)
			return false;
		clip.setData(trans, null, clipid.kGlobalClipboard);
		$.fz_common.alert("提示", "复制成功！");
	}
}

// IPC移动上去之后显示具体内容

function setIPCTitle2(obj) {

	var span = $(obj).children(".searOverviewLeftContentSpan1");
	if ($(span).hasClass("expandMoreSpan")) {
		return;
	}

	var load = $(obj).attr("load");

	if (load == null || load == false) {

		$(obj).attr("title", "正在加载相关IPC内容......");

		var ele = $(obj);

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnPatentGetIPCText.ajax",
			data : "select-key:simple_symbol=" + encodeURIComponent(span.text()),
			success : function(data) {

				ele.attr("load", "true");

				var en_title_text = $.fz_common.getXmlNodeValues(data, "context>record>en_title_text");
				var zh_title_text = $.fz_common.getXmlNodeValues(data, "context>record>zh_title_text");

				var t = span.text();
				if (zh_title_text != null && zh_title_text != "") {
					t = zh_title_text.text() + " ( " + en_title_text.text() + " ) ";
				}

				if (t == " (  ) ") {
					t = span.text();
				}

				ele.attr("title", t);

			},
			error : function(e) {
				ele.attr("title", span.text());
			}
		});

	}

}

function setIPCTitle(obj) {

	var load = $(obj).attr("load");

	if (load == null || load == false) {

		$(obj).attr("title", "正在加载相关IPC内容......");

		var ele = $(obj);

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnPatentGetIPCText.ajax",
			data : "select-key:simple_symbol=" + encodeURIComponent(ele.text()),
			success : function(data) {

				ele.attr("load", "true");

				var en_title_text = $.fz_common.getXmlNodeValues(data, "context>record>en_title_text");
				var zh_title_text = $.fz_common.getXmlNodeValues(data, "context>record>zh_title_text");

				var t = ele.text();
				if (zh_title_text != null && zh_title_text != "") {
					t = zh_title_text.text() + " ( " + en_title_text.text() + " ) ";
				}

				if (t == " (  ) ") {
					t = ele.text();
				}

				ele.attr("title", t);

			},
			error : function(e) {
				ele.attr("title", ele.text());
			}
		});

	}

}

// 学科分类提示
function setSubjectTitle(obj) {

	var span = $(obj).children(".searOverviewLeftContentSpan1");

	if ($(span).hasClass("expandMoreSpan")) {
		return;
	}
	var load = $(obj).attr("load");
	if (load == null || load == false) {

		$(obj).attr("title", "正在加载相关IPC内容......");

		var ele = $(obj);
		var code = ele.text().substring(0, ele.text().indexOf('('));
		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnGetCSfxTitle.ajax",
			data : "select-key:code=" + encodeURIComponent(code),
			success : function(data) {

				ele.attr("load", "true");

				var en_title_text = $.fz_common.getXmlNodeValues(data, "context>record>en_title");
				var zh_title_text = $.fz_common.getXmlNodeValues(data, "context>record>cn_title");

				var t = ele.text();
				if (zh_title_text != null && zh_title_text != "") {
					t = zh_title_text.text() + " ( " + en_title_text.text() + " ) ";
				}

				if (t == " (  ) ") {
					t = ele.text();
				}

				ele.attr("title", t);

			},
			error : function(e) {
				ele.attr("title", ele.text());
			}
		});

	}

}
// 核心收录提示
function setCenterTitle(obj) {

	var span = $(obj).children(".searOverviewLeftContentSpan1");

	if ($(span).hasClass("expandMoreSpan")) {
		return;
	}
	var load = $(obj).attr("load");
	if (load == null || load == false) {

		$(obj).attr("title", "正在加载相关IPC内容......");

		var ele = $(obj);
		ele.attr("load", "true");
		var t = ele.text();
		var code = ele.text().substring(0, ele.text().indexOf('('));

		t = stdTitle[code];
		if (t == " (  ) ") {
			t = ele.text();
		}

		ele.attr("title", t);

	}

}

function checkboxClick(content) {
	if ($(content).hasClass("checkBoxBg")) {
		$(content).removeClass("checkBoxBg");
		$(content).addClass("checkBoxClickBg");
	} else {
		$(content).removeClass("checkBoxClickBg");
		$(content).addClass("checkBoxBg");
	}
	return false;
}

// 简单的MAP对象
function Map() {
	this.container = new Object();
}

Map.prototype.put = function(key, value) {
	this.container[key] = value;
}

Map.prototype.get = function(key) {
	return this.container[key];
}

Map.prototype.keySet = function() {
	var keyset = new Array();
	var count = 0;
	for ( var key in this.container) {
		// 跳过object的extend函数
		if (key == 'extend') {
			continue;
		}
		keyset[count] = key;
		count++;
	}
	return keyset;
}

Map.prototype.size = function() {
	var count = 0;
	for ( var key in this.container) {
		// 跳过object的extend函数
		if (key == 'extend') {
			continue;
		}
		count++;
	}
	return count;
}

Map.prototype.remove = function(key) {
	delete this.container[key];
}

Map.prototype.toString = function() {
	var str = "";
	for ( var i = 0, keys = this.keySet(), len = keys.length; i < len; i++) {
		str = str + keys[i] + "=" + this.container[keys[i]] + ";\n";
	}
	return str;
}

Array.prototype.remove = function(dx) {
	if (isNaN(dx) || dx > this.length) {
		return false;
	}
	for ( var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[dx]) {
			this[n++] = this[i]
		}
	}
	this.length -= 1
}

/** 记录日志* */
function saveSearchLog(search_type, search_library, express, builder, search_info, remark, options, action, fun, similary, express1) {
	if (action == "") {
		return;
	}

	if (similary == null) {
		similary = "";
	}

	var _data = "log:search_type=" + search_type + "&log:search_library=" + encodeURIComponent(search_library) + "&log:express=" + encodeURIComponent(express) + "&log:builder="
			+ encodeURIComponent(builder) + "&log:search_info=" + encodeURIComponent(search_info) + "&log:remark=" + encodeURIComponent(remark) + "&log:options=" + options + "&log:action=" + action
			+ "&log:similary=" + similary + "&log:express1=" + encodeURIComponent(express1);

	// 检查表达式
	$.ajax({
		type : "POST",
		dataType : "xml",
		async : false,
		url : "/" + rootPath + "txnSearchLogSave.ajax",
		data : _data,
		success : function(data) {

			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {
				if (fun != null) {
					fun();
				}
			} else {
				var errorDesc = $.fz_common.getXmlNodeValue(data, "context>error-desc");
				console.error("提交发生错误" + errCode + "<p>" + errorDesc + "</p>");
			}

		},
		error : function(data) {
			console.error("提交发生错误" + data.responseText + data.status);
		}
	});

}

// 数组去重
function unique(arr) {
	var result = [], hash = {};
	for ( var i = 0, elem; (elem = arr[i]) != null; i++) {
		if (!hash[elem]) {
			result.push(elem);
			hash[elem] = true;
		}
	}
	return result;
}

function getStrExpresslist(v) {

	// 替换所有双引号
	v = v.replace(/(")/g, "'");
	v = v.replace(/(‘)/g, "'");
	v = v.replace(/(’)/g, "'");

	var regExp = /'(.*?)'/gi;

	var result = [];
	var match;
	while (match = regExp.exec(v)) {
		result.push(match[1]);
	}

	for ( var i = 0; i < result.length; i++) {
		v = v.replace(result[i], " \"" + i + "\" ");
	}

	v = v.replace(/(')/g, "");

	var vTmplist = v.split(" ");

	var vlist = [];

	for ( var i = 0; i < vTmplist.length; i++) {

		var str = $.trim(vTmplist[i]);

		if (str != "") {

			if (str.indexOf('"') >= 0) {
				vlist.push(result[(str.replace(/(")/g, "") - 0)]);
			} else {
				vlist.push(str);
			}

		}

	}

	return vlist;
}

/*
 * ! ZeroClipboard The ZeroClipboard library provides an easy way to copy text
 * to the clipboard using an invisible Adobe Flash movie and a JavaScript
 * interface. Copyright (c) 2013 Jon Rohan, James M. Greene Licensed MIT
 * http://zeroclipboard.org/ v1.2.0-beta.4
 */
(function() {
	"use strict";
	var _camelizeCssPropName = function() {
		var matcherRegex = /\-([a-z])/g, replacerFn = function(match, group) {
			return group.toUpperCase();
		};
		return function(prop) {
			return prop.replace(matcherRegex, replacerFn);
		};
	}();
	var _getStyle = function(el, prop) {
		var value, camelProp, tagName, possiblePointers, i, len;
		if (window.getComputedStyle) {
			value = window.getComputedStyle(el, null).getPropertyValue(prop);
		} else {
			camelProp = _camelizeCssPropName(prop);
			if (el.currentStyle) {
				value = el.currentStyle[camelProp];
			} else {
				value = el.style[camelProp];
			}
		}
		if (prop === "cursor") {
			if (!value || value === "auto") {
				tagName = el.tagName.toLowerCase();
				possiblePointers = [ "a" ];
				for (i = 0, len = possiblePointers.length; i < len; i++) {
					if (tagName === possiblePointers[i]) {
						return "pointer";
					}
				}
			}
		}
		return value;
	};
	var _elementMouseOver = function(event) {
		if (!ZeroClipboard.prototype._singleton)
			return;
		if (!event) {
			event = window.event;
		}
		var target;
		if (this !== window) {
			target = this;
		} else if (event.target) {
			target = event.target;
		} else if (event.srcElement) {
			target = event.srcElement;
		}
		ZeroClipboard.prototype._singleton.setCurrent(target);
	};
	var _addEventHandler = function(element, method, func) {
		if (element.addEventListener) {
			element.addEventListener(method, func, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + method, func);
		}
	};
	var _removeEventHandler = function(element, method, func) {
		if (element.removeEventListener) {
			element.removeEventListener(method, func, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + method, func);
		}
	};
	var _addClass = function(element, value) {
		if (element.addClass) {
			element.addClass(value);
			return element;
		}
		if (value && typeof value === "string") {
			var classNames = (value || "").split(/\s+/);
			if (element.nodeType === 1) {
				if (!element.className) {
					element.className = value;
				} else {
					var className = " " + element.className + " ", setClass = element.className;
					for ( var c = 0, cl = classNames.length; c < cl; c++) {
						if (className.indexOf(" " + classNames[c] + " ") < 0) {
							setClass += " " + classNames[c];
						}
					}
					element.className = setClass.replace(/^\s+|\s+$/g, "");
				}
			}
		}
		return element;
	};
	var _removeClass = function(element, value) {
		if (element.removeClass) {
			element.removeClass(value);
			return element;
		}
		if (value && typeof value === "string" || value === undefined) {
			var classNames = (value || "").split(/\s+/);
			if (element.nodeType === 1 && element.className) {
				if (value) {
					var className = (" " + element.className + " ").replace(/[\n\t]/g, " ");
					for ( var c = 0, cl = classNames.length; c < cl; c++) {
						className = className.replace(" " + classNames[c] + " ", " ");
					}
					element.className = className.replace(/^\s+|\s+$/g, "");
				} else {
					element.className = "";
				}
			}
		}
		return element;
	};
	var _getZoomFactor = function() {
		var rect, physicalWidth, logicalWidth, zoomFactor = 1;
		if (typeof document.body.getBoundingClientRect === "function") {
			rect = document.body.getBoundingClientRect();
			physicalWidth = rect.right - rect.left;
			logicalWidth = document.body.offsetWidth;
			zoomFactor = Math.round(physicalWidth / logicalWidth * 100) / 100;
		}
		return zoomFactor;
	};
	var _getDOMObjectPosition = function(obj) {

		var info = {
			left : 0,
			top : 0,
			width : 0,
			height : 0,
			zIndex : 999999999
		};
		var zi = _getStyle(obj, "z-index");
		if (zi && zi !== "auto") {
			info.zIndex = parseInt(zi, 10);
		}
		if (obj.getBoundingClientRect) {
			var rect = obj.getBoundingClientRect();
			var pageXOffset, pageYOffset, zoomFactor;
			if ("pageXOffset" in window && "pageYOffset" in window) {
				pageXOffset = window.pageXOffset;
				pageYOffset = window.pageYOffset;
			} else {
				zoomFactor = _getZoomFactor();
				pageXOffset = Math.round(document.documentElement.scrollLeft / zoomFactor);
				pageYOffset = Math.round(document.documentElement.scrollTop / zoomFactor);
			}
			var leftBorderWidth = document.documentElement.clientLeft || 0;
			var topBorderWidth = document.documentElement.clientTop || 0;
			info.left = rect.left + pageXOffset - leftBorderWidth;
			info.top = rect.top + pageYOffset - topBorderWidth;
			info.width = "width" in rect ? rect.width : rect.right - rect.left;
			info.height = "height" in rect ? rect.height : rect.bottom - rect.top;
		}
		return info;
	};
	var _noCache = function(path, options) {
		var useNoCache = !(options && options.useNoCache === false);
		if (useNoCache) {
			return (path.indexOf("?") === -1 ? "?" : "&") + "nocache=" + new Date().getTime();
		} else {
			return "";
		}
	};
	var _vars = function(options) {
		var str = [];
		var origins = [];
		if (options.trustedOrigins) {
			if (typeof options.trustedOrigins === "string") {
				origins = origins.push(options.trustedOrigins);
			} else if (typeof options.trustedOrigins === "object" && "length" in options.trustedOrigins) {
				origins = origins.concat(options.trustedOrigins);
			}
		}
		if (options.trustedDomains) {
			if (typeof options.trustedDomains === "string") {
				origins = origins.push(options.trustedDomains);
			} else if (typeof options.trustedDomains === "object" && "length" in options.trustedDomains) {
				origins = origins.concat(options.trustedDomains);
			}
		}
		if (origins.length) {
			str.push("trustedOrigins=" + encodeURIComponent(origins.join(",")));
		}
		if (typeof options.amdModuleId === "string" && options.amdModuleId) {
			str.push("amdModuleId=" + encodeURIComponent(options.amdModuleId));
		}
		if (typeof options.cjsModuleId === "string" && options.cjsModuleId) {
			str.push("cjsModuleId=" + encodeURIComponent(options.cjsModuleId));
		}
		return str.join("&");
	};
	var _inArray = function(elem, array) {
		if (array.indexOf) {
			return array.indexOf(elem);
		}
		for ( var i = 0, length = array.length; i < length; i++) {
			if (array[i] === elem) {
				return i;
			}
		}
		return -1;
	};
	var _prepGlue = function(elements) {
		if (typeof elements === "string")
			throw new TypeError("ZeroClipboard doesn't accept query strings.");
		if (!elements.length)
			return [ elements ];
		return elements;
	};
	var _dispatchCallback = function(func, element, instance, args, async) {
		if (async) {
			window.setTimeout(function() {
				func.call(element, instance, args);
			}, 0);
		} else {
			func.call(element, instance, args);
		}
	};
	var ZeroClipboard = function(elements, options) {
		if (elements)
			(ZeroClipboard.prototype._singleton || this).glue(elements);
		if (ZeroClipboard.prototype._singleton)
			return ZeroClipboard.prototype._singleton;
		ZeroClipboard.prototype._singleton = this;
		this.options = {};
		for ( var kd in _defaults)
			this.options[kd] = _defaults[kd];
		for ( var ko in options)
			this.options[ko] = options[ko];
		this.handlers = {};
		if (ZeroClipboard.detectFlashSupport())
			_bridge();
	};
	var currentElement, gluedElements = [];
	ZeroClipboard.prototype.setCurrent = function(element) {
		currentElement = element;
		this.reposition();
		var titleAttr = element.getAttribute("title");
		if (titleAttr) {
			this.setTitle(titleAttr);
		}
		var useHandCursor = this.options.forceHandCursor === true || _getStyle(element, "cursor") === "pointer";
		_setHandCursor.call(this, useHandCursor);
	};
	ZeroClipboard.prototype.setText = function(newText) {
		if (newText && newText !== "") {
			this.options.text = newText;
			if (this.ready())
				this.flashBridge.setText(newText);
		}
	};
	ZeroClipboard.prototype.setTitle = function(newTitle) {
		if (newTitle && newTitle !== "")
			this.htmlBridge.setAttribute("title", newTitle);
	};
	ZeroClipboard.prototype.setSize = function(width, height) {
		if (this.ready())
			this.flashBridge.setSize(width, height);
	};
	ZeroClipboard.prototype.setHandCursor = function(enabled) {
		enabled = typeof enabled === "boolean" ? enabled : !!enabled;
		_setHandCursor.call(this, enabled);
		this.options.forceHandCursor = enabled;
	};
	var _setHandCursor = function(enabled) {
		if (this.ready())
			this.flashBridge.setHandCursor(enabled);
	};
	ZeroClipboard.version = "1.2.0-beta.4";
	var _defaults = {
		moviePath : "ZeroClipboard.swf",
		trustedOrigins : null,
		text : null,
		hoverClass : "zeroclipboard-is-hover",
		activeClass : "zeroclipboard-is-active",
		allowScriptAccess : "sameDomain",
		useNoCache : true,
		forceHandCursor : false
	};
	ZeroClipboard.setDefaults = function(options) {
		for ( var ko in options)
			_defaults[ko] = options[ko];
	};
	ZeroClipboard.destroy = function() {
		ZeroClipboard.prototype._singleton.unglue(gluedElements);
		var bridge = ZeroClipboard.prototype._singleton.htmlBridge;
		bridge.parentNode.removeChild(bridge);
		delete ZeroClipboard.prototype._singleton;
	};
	ZeroClipboard.detectFlashSupport = function() {
		var hasFlash = false;
		if (typeof ActiveXObject === "function") {
			try {
				if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
					hasFlash = true;
				}
			} catch (error) {
			}
		}
		if (!hasFlash && navigator.mimeTypes["application/x-shockwave-flash"]) {
			hasFlash = true;
		}
		return hasFlash;
	};
	var _amdModuleId = null;
	var _cjsModuleId = null;
	var _bridge = function() {
		var client = ZeroClipboard.prototype._singleton;
		var container = document.getElementById("global-zeroclipboard-html-bridge");
		if (!container) {
			var opts = {};
			for ( var ko in client.options)
				opts[ko] = client.options[ko];
			opts.amdModuleId = _amdModuleId;
			opts.cjsModuleId = _cjsModuleId;
			var flashvars = _vars(opts);
			var html = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'
					+ client.options.moviePath
					+ _noCache(client.options.moviePath, client.options)
					+ '"/>         <param name="allowScriptAccess" value="'
					+ client.options.allowScriptAccess
					+ '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'
					+ flashvars
					+ '"/>         <embed src="'
					+ client.options.moviePath
					+ _noCache(client.options.moviePath, client.options)
					+ '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'
					+ flashvars + '"           scale="exactfit">         </embed>       </object>';
			container = document.createElement("div");
			container.id = "global-zeroclipboard-html-bridge";
			container.setAttribute("class", "global-zeroclipboard-container");
			container.setAttribute("data-clipboard-ready", false);
			container.style.position = "absolute";
			container.style.left = "-9999px";
			container.style.top = "-9999px";
			container.style.width = "15px";
			container.style.height = "15px";
			container.style.zIndex = "9999";
			container.innerHTML = html;
			document.body.appendChild(container);
		}
		client.htmlBridge = container;
		client.flashBridge = document["global-zeroclipboard-flash-bridge"] || container.children[0].lastElementChild;
	};
	ZeroClipboard.prototype.resetBridge = function() {
		this.htmlBridge.style.left = "-9999px";
		this.htmlBridge.style.top = "-9999px";
		this.htmlBridge.removeAttribute("title");
		this.htmlBridge.removeAttribute("data-clipboard-text");
		_removeClass(currentElement, this.options.activeClass);
		currentElement = null;
		this.options.text = null;
	};
	ZeroClipboard.prototype.ready = function() {
		var ready = this.htmlBridge.getAttribute("data-clipboard-ready");
		return ready === "true" || ready === true;
	};
	ZeroClipboard.prototype.reposition = function() {
		if (!currentElement)
			return false;
		var pos = _getDOMObjectPosition(currentElement);
		this.htmlBridge.style.top = pos.top + "px";
		this.htmlBridge.style.left = pos.left + "px";
		this.htmlBridge.style.width = pos.width + "px";
		this.htmlBridge.style.height = pos.height + "px";
		this.htmlBridge.style.zIndex = pos.zIndex + 1;
		this.setSize(pos.width, pos.height);
	};
	ZeroClipboard.dispatch = function(eventName, args) {
		ZeroClipboard.prototype._singleton.receiveEvent(eventName, args);
	};
	ZeroClipboard.prototype.on = function(eventName, func) {
		var events = eventName.toString().split(/\s/g);
		for ( var i = 0; i < events.length; i++) {
			eventName = events[i].toLowerCase().replace(/^on/, "");
			if (!this.handlers[eventName])
				this.handlers[eventName] = func;
		}
		if (this.handlers.noflash && !ZeroClipboard.detectFlashSupport()) {
			this.receiveEvent("onNoFlash", null);
		}
	};
	ZeroClipboard.prototype.addEventListener = ZeroClipboard.prototype.on;
	ZeroClipboard.prototype.off = function(eventName, func) {
		var events = eventName.toString().split(/\s/g);
		for ( var i = 0; i < events.length; i++) {
			eventName = events[i].toLowerCase().replace(/^on/, "");
			for ( var event in this.handlers) {
				if (event === eventName && this.handlers[event] === func) {
					delete this.handlers[event];
				}
			}
		}
	};
	ZeroClipboard.prototype.removeEventListener = ZeroClipboard.prototype.off;
	ZeroClipboard.prototype.receiveEvent = function(eventName, args) {
		eventName = eventName.toString().toLowerCase().replace(/^on/, "");
		var element = currentElement;
		var performCallbackAsync = true;
		switch (eventName) {
		case "load":
			if (args && parseFloat(args.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) {
				this.receiveEvent("onWrongFlash", {
					flashVersion : args.flashVersion
				});
				return;
			}
			this.htmlBridge.setAttribute("data-clipboard-ready", true);
			break;

		case "mouseover":
			_addClass(element, this.options.hoverClass);
			break;

		case "mouseout":
			_removeClass(element, this.options.hoverClass);
			this.resetBridge();
			break;

		case "mousedown":
			_addClass(element, this.options.activeClass);
			break;

		case "mouseup":
			_removeClass(element, this.options.activeClass);
			break;

		case "datarequested":
			var targetId = element.getAttribute("data-clipboard-target"), targetEl = !targetId ? null : document.getElementById(targetId);
			if (targetEl) {
				var textContent = targetEl.value || targetEl.textContent || targetEl.innerText;
				if (textContent)
					this.setText(textContent);
			} else {
				var defaultText = element.getAttribute("data-clipboard-text");
				if (defaultText)
					this.setText(defaultText);
			}
			performCallbackAsync = false;
			break;

		case "complete":
			this.options.text = null;
			break;
		}
		if (this.handlers[eventName]) {
			var func = this.handlers[eventName];
			if (typeof func === "string" && typeof window[func] === "function") {
				func = window[func];
			}
			if (typeof func === "function") {
				_dispatchCallback(func, element, this, args, performCallbackAsync);
			}

		}
	};
	ZeroClipboard.prototype.glue = function(elements) {
		elements = _prepGlue(elements);
		for ( var i = 0; i < elements.length; i++) {
			if (_inArray(elements[i], gluedElements) == -1) {
				gluedElements.push(elements[i]);
				_addEventHandler(elements[i], "mouseover", _elementMouseOver);
			}
		}
	};
	ZeroClipboard.prototype.unglue = function(elements) {
		elements = _prepGlue(elements);
		for ( var i = 0; i < elements.length; i++) {
			_removeEventHandler(elements[i], "mouseover", _elementMouseOver);
			var arrayIndex = _inArray(elements[i], gluedElements);
			if (arrayIndex != -1)
				gluedElements.splice(arrayIndex, 1);
		}
	};
	if (typeof define === "function" && define.amd) {
		define([ "require", "exports", "module" ], function(require, exports, module) {
			_amdModuleId = module && module.id || null;
			return ZeroClipboard;
		});
	} else if (typeof module !== "undefined" && module) {
		_cjsModuleId = module.id || null;
		module.exports = ZeroClipboard;
	} else {
		window.ZeroClipboard = ZeroClipboard;
	}
})();

function norecordMessageChe() {
	if (typeof (mGrid_patentGrid_obj) == "undefined") {
		$("#norecordMessage").html(
				"<h2 style=' font-weight:normal; font-size:28px;'><img src='/" + rootPath
						+ "module/di/img/patent/peruseView/cheStrimg.png' /> 很抱歉，没有检索出您想要的结果</h2><h3 style=' font-weight:normal; color:#999; font-size:22px;'>请修改其检索方式，尝试再次检索</h3>");
		return false;
	}
	if (mGrid_patentGrid_obj != null) {
		var _securityMessage = (securityMessageChe(mGrid_patentGrid_obj.recordData));
		$("#norecordMessage").html(_securityMessage);
	}
}

function securityMessageChe(recordData) {

	var securityCode = $.fz_common.getXmlNodeValue(recordData, "context>security");

	if (securityCode != null && securityCode == "01") {
		return "<h3 style='font-size:16px;'>您的权限不足，只能查看第一页数据，请升级权限获取更多操作。<h3>"
	}

	checkLoginStatus(recordData);
	var errCode = $.fz_common.getXmlNodeValue(recordData, "context>error-code");
	if (errCode == "000000") {
	} else {
		var errorDesc = $.fz_common.getXmlNodeValue(recordData, "context>error-desc");
		return ("发生错误：" + errCode + "<p>" + errorDesc + "</p>");
	}

	return "<h2 style=' font-weight:normal; font-size:28px;'><img src='/" + rootPath
			+ "module/di/img/patent/peruseView/cheStrimg.png' /> 很抱歉，没有检索出您想要的结果</h2><h3 style=' font-weight:normal; color:#999; font-size:22px;'>请修改其检索方式，尝试再次检索</h3>";

}

function norecordMessage() {

	if (mGrid_patentGrid_obj != null) {
		var _securityMessage = (securityMessage(mGrid_patentGrid_obj.recordData));
		$("#norecordMessage").html(_securityMessage);
	}

}

function securityMessage(recordData) {

	var securityCode = $.fz_common.getXmlNodeValue(recordData, "context>security");

	if (securityCode != null && securityCode == "01") {
		$("#contentTipNumList").text(_record_number);
		$("#mGrid_patentGrid .totalnumber").text(_record_number);
		return "您的权限不足，只能查看第一页数据，请升级权限获取更多操作。"
	}

	checkLoginStatus(recordData);
	var errCode = $.fz_common.getXmlNodeValue(recordData, "context>error-code");
	if (errCode == "000000") {
	} else {
		var errorDesc = $.fz_common.getXmlNodeValue(recordData, "context>error-desc");
		return ("当前没有查询出结果，请尝试再次查询。");
	}

	return "当前没有查询出结果，请重新编辑，尝试再次查询。";

}

function getNowFormatDate() {
	var date = new Date();
	var seperator1 = ".";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}

	var hour = date.getHours();
	var min = date.getMinutes();

	if (hour >= 0 && hour <= 9) {
		hour = "0" + hour;
	}
	if (min >= 0 && min <= 9) {
		min = "0" + min;
	}

	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + hour + seperator2 + min;
	return currentdate;

}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

function localStorageSet(key, value) {

	if (window.localStorage) {
		window.localStorage.setItem(key, value);
	} else {
		localStorage.setItem(key, value);
	}

}

function localStorageGet(key) {

	if (window.localStorage) {
		return window.localStorage.getItem(key);
	} else {
		return localStorage.getItem(key);
	}
}

// 没有权限用户（停用 失效）
var accountUser = ".account_state_2,.account_state_3,.account_state_noLibs,.patent_lib_false,.trademark_lib_false,.periodical_lib_false,.standard_lib_false,.decision_lib_false,.chemical_lib_false,.biology_lib_false";

$(document).ready(function() {

	// 删除所有事件
	$(accountUser).each(function() {
		$(this).unbind("click");
	});

	// 之后的事件去除
	// setTimeout("securityFun()", 1500);
	$(function() {
		securityFun();
	});

});

function securityListFun() {

	// 删除所有事件
	var accountList = accountUser.split(",");

	for ( var i = 0; i < accountList.length; i++) {

		var className = accountList[i] + "_list";
		$(className).unbind("click");
		$(className).attr("onclick", "");
		$(className).click(function() {
			return securityAlert(this);
		});

		var className = accountList[i] + "_link";
		$(className).unbind("click");
		$(className).attr("href", 'javascript:$.fz_common.alert("提示", "您的权限不足，请及时付费以获得更多权限。");');
		$(className).attr("target", "");

	}

}

function securityFun() {

	// 删除所有事件
	$(accountUser).each(function() {
		$(this).unbind("click");
	});
	// 权限控制
	$(accountUser).click(function() {
		return securityAlert(this);
	});
}

function securityAlert(obj) {
	$.fz_common.alert("提示", "您的权限不足，请及时付费以获得更多权限。");
	return false;
}

// 替换alert
window.alert = function(msg) {
	$.fz_common.alert("提示", msg);
}

function checkLoginStatus(data) {
	// ajax被登出
	var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");

	if (errCode == "LOGIN01" || errCode == "AUTH02") {

		window.location.href = "/index.jsp?error_code=" + errCode;

	}

	return false;

}

function _doTempPost(action, parameter, b, m) {
	var _blank = "";
	if (b != null) {
		_blank = "target=\"_blank\"";
	}

	var _method = "post";
	if (m != null) {
		_method = m;
	}

	$("#myPatentFormTmp").remove();
	$("body").append('<form action="' + action + '" style="display:none;" ' + _blank + ' method="' + _method + '" name="myPatentFormTmp" id="myPatentFormTmp"></form>');

	var pairs = parameter.split("&");
	for ( var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if (pos == -1)
			continue;
		var argname = pairs[i].substring(0, pos);
		var value = decodeURIComponent(pairs[i].substring(pos + 1));

		$("#myPatentFormTmp").prepend('<input type="text" name="' + argname + '" />');
		$("#myPatentFormTmp input:first-child").val(value);
	}

	// alert ($("#myPatentFormTmp").html());

	$("#myPatentFormTmp").submit();

}

function ckmTypeahead2222(ele) {
	$(ele).typeahead({
		source : function(query, process) {

			$.ajax({
				type : "GET",
				dataType : "xml",
				url : "/" + rootPath + "txnCKMTypeahead.ajax",
				data : "select-key:key=" + encodeURIComponent(query),
				success : function(data) {
					var record = $.fz_common.getXmlNodeValues(data, "context>record");
					var arr = [];
					record.each(function() {
						arr.push($(this).find("data:first").text());
					});
					process(arr);
				}
			});

		}
	});
}

String.prototype.endWith = function(s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length)
		return false;
	if (this.substring(this.length - s.length) == s)
		return true;
	else
		return false;
	return true;
}
String.prototype.startWith = function(s) {
	if (s == null || s == "" || this.length == 0 || s.length > this.length)
		return false;
	if (this.substr(0, s.length) == s)
		return true;
	else
		return false;
	return true;
}

// 预警

var di_warning = function() {

	function doTraWarning(tmid, rn, fd, mno, nice_class) {

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnAddTraWarning.ajax",
			data : "select-key:tmid=" + tmid + "&select-key:rn=" + rn + "&select-key:fd=" + (fd) + "&select-key:mno=" + encodeURIComponent(mno) + "&select-key:nice_class=" + (nice_class),
			success : function(data) {

				checkLoginStatus(data);

				var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
				if (errCode == "000000") {

					alert("添加预警成功");

				} else {
					errorDescAlert(data);
				}

			},
			error : function(data) {
				$.fz_common.alert("错误", data + "", null);
			}
		});
	}

	function doWarning(pno, pid, ano, tio, watcher_status, ad) {

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnAddDocWarning.ajax",
			data : "select-key:pno=" + pno + "&select-key:pid=" + pid + "&select-key:ano=" + encodeURIComponent(ano) + "&select-key:tio=" + encodeURIComponent(tio) + "&select-key:watcher_status="
					+ watcher_status + "&select-key:ad=" + encodeURIComponent(ad) + "&select-key:sign_status=" + encodeURIComponent(watcher_status),
			success : function(data) {

				checkLoginStatus(data);

				var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
				if (errCode == "000000") {

					$.fz_common.alert("提示", "添加预警成功");

				} else {
					errorDescAlert(data);
				}

			},
			error : function(data) {
				$.fz_common.alert("错误", data + "", null);
			}
		});

	}

	$(".docWarningSubmit").click(function() {

		var warning_watcher_name = $("#warning_watcher_name").val();
		if (warning_watcher_name == null || warning_watcher_name == "") {
			$.fz_common.alert("提示", "请填写预警名称");
			return;
		}

		var watcher_type = $('input:radio[name=record_watcher_type]:checked').val();
		if (watcher_type == null || watcher_type == "") {
			alert("请选择数据类型");
			return;
		}

		di_warning_obj.warning(watcher_type, "1", warning_watcher_name);
	});

	$(".docWarningClose").click(function() {
		$(".docWarningWindow").addClass("disPlayNone");
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
		MouseWheel();
	});

	$(".addWarning").click(function() {
		$(".docWarningWindow").removeClass("disPlayNone");
		$(".shielding_layer").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$(".docWarningWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		setLayerHeight();
		disabledMouseWheel();
		$(".bodyClass").addClass("overflowHidden");

		var txt = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
		var express = $.trim($("#select-key_express").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
		$("#warning_watcher_exp").val(txt);
		$("#warning_watcher_name").val("");

		txt = noLibExpress(txt);
		express = noLibExpress(express);
		if(express != ""){
			$("#warning_watcher_exp_1").val(express);
			
		}else{
			$("#warning_watcher_exp_1").val(txt);
		}
		
	});

	return {

		traWarning : function(obj) {

			var tmid = $(obj).attr("tmid");
			var rn = $(obj).attr("rn");
			var fd = $(obj).attr("fd");
			var mno = $(obj).attr("mno");
			var nice_class = $(obj).attr("nice_class");

			doTraWarning(tmid, rn, fd, mno, nice_class);

		},

		docWarning : function(obj) {

			var docid = $(obj).attr("docid");
			var trsid = $(obj).attr("trsid");
			var ano = $(obj).attr("ano");
			var ad = $(obj).attr("ad");
			var tio = $(obj).attr("tio");

			doWarning(trsid, docid, ano, tio, "Y", ad);

		},

		warning : function(watcher_type, watcher_status, watcher_name) {

			$(".docWarningWindow").showLoading({});

			var txt = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();

			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnAddWarning.ajax",
				data : "record:watcher_type=" + watcher_type + "&record:watcher_status=" + watcher_status + "&record:watcher_name=" + encodeURIComponent(watcher_name) + "&record:watcher_exp="
						+ encodeURIComponent(txt),
				success : function(data) {

					checkLoginStatus(data);
					$(".docWarningWindow").hideLoading();

					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {

						alert("添加预警成功");
						$(".docWarningClose").click();

					} else {
						errorDescAlert(data);
					}

				},
				error : function(data) {
					$(".docWarningWindow").hideLoading();
					$.fz_common.alert("错误", data + "", null);
				}
			});

		},

		selectedDocWarning : function() {

			var keySet = sidebarSelectedList.keySet();

			if (keySet.length == 0) {
				alert("没有选择数据");
				return;
			} else {

				var trs = "";
				var tio = "";
				var doc = "";

				// 每类下载提交不同的下载任务
				for ( var n = 0; n < keySet.length; n++) {

					var obj = sidebarSelectedList.get(keySet[n]);

					var title = obj["title"];
					var trsid = obj["trsid"];
					var type = obj["type"];
					var docid = obj["docid"];

					if (type == "2" || type == "T") {
						trs += trsid + ";";
						tio += title + ";";
						doc += docid + ";";
					}

				}

				if (trs != "" && type == "2") {
					doWarning(trs, doc, "", tio, "Y", "");
				} else if (trs != "" && type == "T") {
					doTraWarning(trs, "", "", "", "");
				} else {
					alert("没有选择数据");
				}

			}

		},

		init : function(obj) {
		}
	}

}

var di_warning_obj = new di_warning();

// 加入项目
var di_project = function() {

	var selectedProject = {};
	var selectedNode;
	var projectTree;
	var oneDocAddProjectDocID = "";
	var oneDocAddProjectTrsID = "";
	var hisExp = "";
	var hisNum = 0;
	
	$(".addProjectAll").click(function() {
		var searNum = parseInt($("#contentTipNumList").text());
		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnCheckProjectNum.ajax",
			data : "select-key:project_num=" + searNum,
			success : function(data) {
				var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
				if (errCode == "000000") {
					var sign = $.fz_common.getXmlNodeValue(data, "context>result>sign");
					//单个项目的文献上限数
					var inProjectMaxNumber = $.fz_common.getXmlNodeValue(data,"context>result>inProjectMaxNumber");
					//当前用户已经使用的文献数量
					var used_project_count = $.fz_common.getXmlNodeValue(data,"context>result>used_project_count");
					//当前用户购买的文献总数
					var use_project_records = $.fz_common.getXmlNodeValue(data,"context>result>use_project_records");
					
					if(sign == "2"){
						$.fz_common.alert("提示", "单次加入项目上限为" + inProjectMaxNumber + "条，当前检索结果数量为" + searNum + "条，请重新检索缩小结果集后再新建项目。");
						return false;
					}else if (sign == "1"){
						$.fz_common.alert("提示","您当前可用" + use_project_records + "条文献，该项目需添加" + searNum + "条文献,所以您的剩余文献条数不足");
					}else if (sign == "3"){
						$.fz_common.alert("提示", "您的文献不足，且单个项目的文献数量超过上限");
					}else{
						openProject();
					}
				} else {
					errorDescAlert(data);
				}
			}
		});
	});

	function openProject() {
		$(".AddProjectWindow").removeClass("disPlayNone");
		$(".shielding_layer").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$(".AddProjectWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		setLayerHeight();
		disabledMouseWheel();
		$(".bodyClass").addClass("overflowHidden");
		getUserProjectTree("0");
	}

	$(".delProject").click(function() {

		if (selectedNode != null) {
			// alert(selectedProject["project_id"]);
		}

	});

	$(".gotoProject").click(function() {
		if (selectedNode != null) {
			if (!selectedProject["isParent"]) {
				_doTempPost("/" + rootPath + "txnGotoProject.do", "select-key:project_id=" + selectedProject["project_id"], true);
			}
		}
	});

	// 关闭加入项目的浮层
	$(".addProjectClose").click(function() {
		closeAddProjectWindow();
	});

	// 确认加入项目弹出的浮层
	$(".appendProjectConfirm").click(function() {
		
		

		if (selectedNode != null) {

			if ($(this).css("cursor") == "default") {
				return;
			}

			var isParent = selectedProject["isParent"];
			var project_id = selectedProject["project_id"];

			if (isParent == null || project_id == "") {

				alert("没有选择要追加的项目");
				return;
			}

			if (isParent) {

				alert("只能在项目中追加，请选择项目。");
				return;
			}

			var _addProjectFunctionOverride = function() {
				di_project_obj._addProjectFunction("override");
			}

			var _addProjectFunctionAppend = function() {
				di_project_obj._addProjectFunction("append");
			}

			var _otherButtons = [ "覆盖保存", "追加保存" ];
			var _otherButtonStyles = [ 'btn-danger', 'btn-danger' ];
			var _otherFunction = [ _addProjectFunctionOverride, _addProjectFunctionAppend ];

			$.fz_common.confirm("提示", "追加新数据到项目可能会有重复数据，对重复数据请选择您要进行的操作。", null, _otherButtons, _otherButtonStyles, _otherFunction);

		}

	});
	// 确认加入项目弹出的浮层
	$(".addProjectConfirm").click(
			function() {
				if (selectedNode != null) {

					if ($(this).css("cursor") == "default") {
						return;
					}

					var record_project_type = $("#record_project_type").val();
					var record_project_name = $("#record_project_name").val();

					if (record_project_type == "") {

						alert("请选择项目类型");
						return;

					}

					if (record_project_name == "") {

						alert("请输入名称");
						$("#record_project_name").focus();
						return;

					}

					var isParent = selectedProject["isParent"];
					var project_id = selectedProject["project_id"];

					if (isParent != null && !isParent) {

						alert("只能在项目文件夹中新建，请选择项目文件夹。");
						return;
					}

					var _addProjectFunction = function() {

						var hisExp = (di_project_obj._hisExp());
						var project_id = (di_project_obj._selectedProject()["project_id"]);
						var projectTree = (di_project_obj._projectTree());
						var selectedNode = (di_project_obj._selectedNode());
						var selectedProject = (di_project_obj._selectedProject());

						if (project_id == null || project_id == "" || project_id == "-1") {
							project_id = "";
						}

						$(".AddProjectWindow").showLoading();

						var exp;
						if (hisExp != "") {
							exp = hisExp;
						} else {
							exp = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
						}

						$.ajax({
							type : "POST",
							dataType : "xml",
							timeout : 1000 * 60 * 3,
							url : "/" + rootPath + "txnAddUserProject.ajax",
							data : "select-key:parent_id=" + project_id + "&select-key:name=" + encodeURIComponent($("#record_project_name").val()) + "&select-key:project_type="
									+ encodeURIComponent($("#record_project_type").val()) + "&select-key:exp=" + encodeURIComponent(exp),
							success : function(data) {

								$(".AddProjectWindow").hideLoading();

								var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
								if (errCode == "000000") {

									if (project_id == "") {
										di_project_obj._getUserProjectTree("0");
									} else {
										// 重新加载节点
										projectTree.reAsyncChildNodes(selectedNode, "refresh");
									}

									$("#record_project_type").val("");
									$("#record_project_name").val("新建分类");

									selectedProject = {};
									selectedNode = null;

									$(".AddProjectWindow .curSelectedNode").each(function() {
										$(this).removeClass("curSelectedNode");
									});

								} else {
									errorDescAlert(data);
								}

							},
							error : function(data) {
								$(".AddProjectWindow").hideLoading();

								// 发生错误不提示 尝试刷新
								// $.fz_common.alert("服务器发生错误", data + "",
								// null);

								if (project_id == "") {
									di_project_obj._getUserProjectTree("0");
								} else {
									// 重新加载节点
									projectTree.reAsyncChildNodes(selectedNode, "refresh");
								}

								$("#record_project_type").val("");
								$("#record_project_name").val("新建分类");

								selectedProject = {};
								selectedNode = null;

								$(".AddProjectWindow .curSelectedNode").each(function() {
									$(this).removeClass("curSelectedNode");
								});

							}
						});

					}

					var _otherButtons = [ "确定" ];
					var _otherButtonStyles = [ 'btn-danger' ];
					var _otherFunction = [ _addProjectFunction ];

					var _confirmStr = "确认新建项目夹";
					if ($("#record_project_type").val() == "01") {
						_confirmStr = "确认新建专利项目（单次加入项目上限为10000条。若结果数量超过10000条，您可以进一步筛选或二次检索后缩小结果集再以追加项目的方式加入项目）";
					}
					$.fz_common.confirm("提示", _confirmStr + "？", null, _otherButtons, _otherButtonStyles, _otherFunction);

				}
			});
	// 取消
	$(".addProjectCancel").click(function() {
		closeAddProjectWindow();
	});

	var getUserProjectTree = function(parent_id, div_id) {

		if (div_id == null) {

			div_id = ".AddProjectWindow";
		}

		$(div_id).showLoading();

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnUserProjectTree.ajax",
			data : "select-key:parent_id=" + parent_id,
			success : function(data) {

				checkLoginStatus(data);
				$(div_id).hideLoading();

				var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
				if (errCode == "000000") {

					var treeData = [];
					var record = $.fz_common.getXmlNodeValues(data, "context>record");
					var empty = true;
					if (record != null) {
						$(record).each(function(index, dom) {
							var ele = $(this);

							if (ele.find("project_id").text() == null || ele.find("project_id").text() == "") {
								return;
							}

							var data = {};

							data["project_id"] = ele.find("project_id").text();
							data["parent_id"] = ele.find("parent_id").text();
							data["project_name"] = ele.find("project_name").text();
							data["folder_flag"] = ele.find("folder_flag").text();

							if (ele.find("folder_flag").text() == "0") {
								data["isParent"] = true;
							} else {
								data["isParent"] = false;
							}

							data["create_time"] = ele.find("create_time").text();
							data["project_type"] = ele.find("project_type").text();

							treeData.push(data);

							empty = false;

						});

						if (empty) {

							var data = {};

							data["project_id"] = "0";
							data["parent_id"] = "-1";
							data["project_name"] = " - 暂无内容 - ";
							data["isParent"] = false;

							treeData.push(data);
						}

					}

					if (div_id == ".AddProjectWindow") {

						$("#record_project_type").val("");
						$("#record_project_name").val("新建分类");
						initTreeData(treeData);
						$(".addProjectNew").click();
					} else {

						initTreeData(treeData, div_id);

					}

				} else {
					errorDescAlert(data);
				}

			},
			error : function(data) {
				$(div_id).hideLoading();
				$.fz_common.alert("错误", data + "", null);
			}
		});

	}

	function filter(treeId, parentNode, childNodes) {
		var treedata = [];
		try {

			$.each(childNodes, function(i, ele) {

				var data = {};

				if (ele.project_id != null && ele.project_id != "") {

					data["project_id"] = ele.project_id;
					data["parent_id"] = ele.parent_id;
					data["project_name"] = ele.project_name;
					data["isParent"] = ele.isParent;
					data["create_time"] = ele.create_time;
					data["project_type"] = ele.project_type;

					treedata.push(data);
				}
			});
		} catch (e) {
			$.fz_common.alert("错误", e);
		}
		return treedata;
	}

	var initTreeData = function(data, div_id) {

		selectedProject = {};
		selectedNode = null;

		var setting = {
			view : {
				dblClickExpand : false,
				showLine : true,
				showIcon : true,
				selectedMulti : false
			},
			data : {

				key : {
					name : "project_name"
				},
				simpleData : {
					enable : true,
					idKey : "project_id",
					pIdKey : "parent_id",
					rootPId : ""
				}
			},
			callback : {
				beforeClick : function(treeId, treeNode) {

					if (treeNode["project_id"] == null || treeNode["project_id"] == "") {
						return;
					}

					selectedProject["isParent"] = treeNode.isParent;
					selectedProject["project_id"] = treeNode["project_id"];
					selectedNode = treeNode;

					$(".delProject").css("cursor", "pointer");
					$(".delProject").css("color", "#333");

					if (treeNode.isParent) {

						$(".gotoProject").css("cursor", "default");
						$(".gotoProject").css("color", "#999999");
						$(".addProjectConfirm").css("cursor", "pointer");
						$(".addProjectConfirm").css("color", "#333");

						$(".appendProjectConfirm").css("cursor", "default");
						$(".appendProjectConfirm").css("color", "#999999");

						$(".addProjectConfirm2").css("cursor", "default");
						$(".addProjectConfirm2").css("color", "#999999");
						
						$(".addProjectConfirm3").css("cursor", "default");
						$(".addProjectConfirm3").css("color", "#999999");

					} else {

						$(".gotoProject").css("cursor", "pointer");
						$(".gotoProject").css("color", "#333");
						$(".addProjectConfirm").css("cursor", "default");
						$(".addProjectConfirm").css("color", "#999999");

						$(".appendProjectConfirm").css("cursor", "pointer");
						$(".appendProjectConfirm").css("color", "#333");

						$(".addProjectConfirm2").css("cursor", "pointer");
						$(".addProjectConfirm2").css("color", "#333");
						
						$(".addProjectConfirm3").css("cursor", "pointer");
						$(".addProjectConfirm3").css("color", "#333");
					}
				}
			},

			async : {
				enable : true,
				url : function(treeId, treeNode) {
					if (treeNode["project_id"] != "") {
						if (treeNode["project_id"] == "0") {
							return "/" + rootPath + "txnUserProjectTree.do?select-key:creatroot=false&select-key:parent_id=" + treeNode["project_id"]
						}
						return "/" + rootPath + "txnUserProjectTree.do?select-key:parent_id=" + treeNode["project_id"]
					} else {
						// 不需要直接跟后台相应 数据如何写
						return "/" + rootPath + "txnUserProjectTreeNull.do";
					}
				},
				dataFilter : filter
			}

		};

		if (div_id == null) {

			projectTree = $.fn.zTree.init($("#addProjectTreeImg"), setting, data);

		}

		if (div_id == ".AddProjectWindow2") {

			projectTree = $.fn.zTree.init($("#addProjectTreeImg2"), setting, data);

		}

	}

	function closeAddProjectWindow() {
		$(".AddProjectWindow").addClass("disPlayNone");
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
		$(".gotoProject").css("cursor", "default");
		$(".delProject").css("cursor", "default");
		$(".gotoProject").css("color", "#999999");
		$(".delProject").css("color", "#999999");
		$(".addProjectConfirm").css("cursor", "default");
		$(".addProjectConfirm").css("color", "#999999");

		$(".appendProjectConfirm").css("cursor", "default");
		$(".appendProjectConfirm").css("color", "#999999");

		MouseWheel();
	}

	$(".addProjectClose2").click(function() {
		closeAddProjectWindow2();
	});

	$(".addProjectCancel2").click(function() {
		closeAddProjectWindow2();
	});

	function closeAddProjectWindow2() {
		$(".AddProjectWindow2").addClass("disPlayNone");
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");

		$(".gotoProject").css("cursor", "default");
		$(".gotoProject").css("color", "#999999");
		$(".addProjectConfirm2").css("cursor", "default");
		$(".addProjectConfirm2").css("color", "#999999");
		$(".addProjectConfirm3").css("cursor", "default");
		$(".addProjectConfirm3").css("color", "#999999");

		MouseWheel();
		oneDocAddProjectDocID = "";
	}

	// 新建
	$(".addProjectNew").click(function() {

		$(".addProjectTree").css("height", "230px")
		$(this).addClass("colBlue");
		$(this).next().removeClass("colBlue");
		$(".addProjectName").removeClass("disPlayNone");
		$(".addProjectTree").removeClass("h338px").addClass("h250px");
		$(".addAppendTitle").removeClass("bgGray245").addClass("bgAddProjectAppend");
		$(".addProjectNew").removeClass("bgAddProjectAppend").addClass("bgAddProjectNew");
		$(".addType").removeClass("disPlayNone");
		$(".addProjectAppend").removeClass("addProjectAppendBg");
		$("#project_do_type").val("new");

		// $(".addProjectConfirm").show();
		// $(".appendProjectConfirm").hide();

	})
	// 追加
	$(".addProjectAppend").click(function() {

		$(".addProjectTree").css("height", "325px")

		$(this).addClass("colBlue");
		$(this).prev().removeClass("colBlue");
		$(".addProjectTree").removeClass("h250px").addClass("h338px");
		$(".addProjectName").addClass("disPlayNone");
		$(".addType").addClass("disPlayNone");
		$(".addProjectNew").removeClass("bgAddProjectNew").addClass("bgAddProjectAppend");
		$(".addAppendTitle").addClass("bgGray245").removeClass("bgAddProjectAppend");
		$(".addProjectAppend").addClass("addProjectAppendBg");
		$("#project_do_type").val("append");

		$(".appendProjectConfirm").show();
		$(".addProjectConfirm").hide();

	});

	$(".addProjectConfirm2").click(
			function() {

				if ($(this).css("cursor") == "default") {
					return;
				}

				var isParent = selectedProject["isParent"];
				var project_id = selectedProject["project_id"];

				if (isParent == null || project_id == "") {

					alert("没有选择要加入的项目");
					return;
				}

				if (isParent) {

					alert("只能在项目中添加，请选择项目。");
					return;
				}

				var _addProjectFunction = function() {

					var _map = new Map();
					var keySet = _map.keySet();

					if (typeof (sidebarSelectedList) != "undefined") {
						keySet = sidebarSelectedList.keySet();
					}

					if (keySet.length == 0 && di_project_obj._oneDocAddProjectDocID() == "") {
						alert("没有选择内容");
						return;
					} else {

						var list2 = "";
						var listPno = "";

						if (di_project_obj._oneDocAddProjectDocID() != "") {

							list2 = di_project_obj._oneDocAddProjectDocID();
							listPno = di_project_obj._oneDocAddProjectTrsID();

						} else {

							// 每类下载提交不同的下载任务
							for ( var n = 0; n < keySet.length; n++) {

								var obj = sidebarSelectedList.get(keySet[n]);

								var type = obj["type"];
								var trsid = obj["trsid"];
								var docid = obj["docid"];

								if (type == "2") {
									list2 += docid + ",";
									listPno += trsid + ",";
								}

							}
						}

						di_project_obj.setOneDocAddProjectDocID("");
						di_project_obj.setOneDocAddProjectTrsID("");

						$(".AddProjectWindow2").showLoading();
						
						var action_flag = "append";
						$.ajax({
							type : "POST",
							dataType : "xml",
							timeout : 1000 * 60 * 3,
							url : "/" + rootPath + "txnDocAddUserProject.ajax",
							data : "&select-key:project_id=" + (di_project_obj._selectedProject()["project_id"]) + "&record:pid=" + encodeURIComponent(list2) + "&select-key:pno="
									+ encodeURIComponent(listPno) + "&select-key:action_flag=" + action_flag,
							success : function(data) {

								$(".AddProjectWindow2").hideLoading();

								var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
								if (errCode == "000000") {

									alert("添加成功");
									di_project_obj._closeAddProjectWindow2();

								} else {
									errorDescAlert(data);
								}

							},
							error : function(data) {
								$(".AddProjectWindow2").hideLoading();
								$.fz_common.alert("错误", data + "", null);
							}
						});

					}

				}

				var _otherButtons = [ "确定" ];
				var _otherButtonStyles = [ 'btn-danger' ];
				var _otherFunction = [ _addProjectFunction ];

				$.fz_common.confirm("提示", "确认加入项目？", null, _otherButtons, _otherButtonStyles, _otherFunction);

			});
	
	$(".addProjectConfirm3").click(
			function() {

				if ($(this).css("cursor") == "default") {
					return;
				}

				var isParent = selectedProject["isParent"];
				var project_id = selectedProject["project_id"];

				if (isParent == null || project_id == "") {

					alert("没有选择要加入的项目");
					return;
				}

				if (isParent) {

					alert("只能在项目中添加，请选择项目。");
					return;
				}

				var _addProjectFunction = function() {

					var _map = new Map();
					var keySet = _map.keySet();

					if (typeof (sidebarSelectedList) != "undefined") {
						keySet = sidebarSelectedList.keySet();
					}

					if (keySet.length == 0 && di_project_obj._oneDocAddProjectDocID() == "") {
						alert("没有选择内容");
						return;
					} else {

						var list2 = "";
						var listPno = "";

						if (di_project_obj._oneDocAddProjectDocID() != "") {

							list2 = di_project_obj._oneDocAddProjectDocID();
							listPno = di_project_obj._oneDocAddProjectTrsID();

						} else {

							// 每类下载提交不同的下载任务
							for ( var n = 0; n < keySet.length; n++) {

								var obj = sidebarSelectedList.get(keySet[n]);

								var type = obj["type"];
								var trsid = obj["trsid"];
								var docid = obj["docid"];

								if (type == "2") {
									list2 += docid + ",";
									listPno += trsid + ",";
								}

							}
						}

						di_project_obj.setOneDocAddProjectDocID("");
						di_project_obj.setOneDocAddProjectTrsID("");

						$(".AddProjectWindow2").showLoading();
						
						var action_flag = "override";
						$.ajax({
							type : "POST",
							dataType : "xml",
							timeout : 1000 * 60 * 3,
							url : "/" + rootPath + "txnDocAddUserProject.ajax",
							data : "&select-key:project_id=" + (di_project_obj._selectedProject()["project_id"]) + "&record:pid=" + encodeURIComponent(list2) + "&select-key:pno="
									+ encodeURIComponent(listPno) + "&select-key:action_flag=" + action_flag,
							success : function(data) {

								$(".AddProjectWindow2").hideLoading();

								var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
								if (errCode == "000000") {

									alert("添加成功");
									di_project_obj._closeAddProjectWindow2();

								} else {
									errorDescAlert(data);
								}

							},
							error : function(data) {
								$(".AddProjectWindow2").hideLoading();
								$.fz_common.alert("错误", data + "", null);
							}
						});

					}

				}

				var _otherButtons = [ "确定" ];
				var _otherButtonStyles = [ 'btn-danger' ];
				var _otherFunction = [ _addProjectFunction ];

				$.fz_common.confirm("提示", "确认加入项目？", null, _otherButtons, _otherButtonStyles, _otherFunction);

			});
	// 已选加入项目
	$(".selectedDocAddProject").click(function() {

		var keySet = sidebarSelectedList.keySet();

		if (keySet.length == 0) {
			alert("没有选择内容");
			return;
		} else {

			var list2 = "";
			var listT = "";
			var listS = "";
			var listI = "";
			var listD = "";
			var listC = "";
			var listR = "";

			// 每类下载提交不同的下载任务
			for ( var n = 0; n < keySet.length; n++) {

				var obj = sidebarSelectedList.get(keySet[n]);

				var type = obj["type"];
				var trsid = obj["trsid"];
				var docid = obj["docid"];

				if (type == "2") {
					list2 += trsid + ",";
				}
				if (type == "T") {
					listT += trsid + ",";
				}
				if (type == "S") {
					listS += trsid + ",";
				}
				if (type == "I") {
					listI += docid + ",";
				}
				if (type == "D") {
					listD += trsid + ",";
				}
				if (type == "C") {
					listC += trsid + ",";
				}
				if (type == "R") {
					listR += trsid + ",";
				}

			}

			// alert("当前只支持专利文献加入项目，非专利暂不支持加入项目。");

			if ($("#selected_list_type").val() == "2") {
				if (list2 != "") {
					// alert(list2);

					$(".AddProjectWindow2").removeClass("disPlayNone");
					$(".shielding_layer").removeClass("displayNone");
					var scrolltop = $(document).scrollTop();
					$(".AddProjectWindow2").css("margin-top", scrolltop);
					$(".shielding_layer").removeClass("displayNone");
					setLayerHeight();
					disabledMouseWheel();
					$(".bodyClass").addClass("overflowHidden");
					getUserProjectTree("0", ".AddProjectWindow2");

				} else {

					alert("没有选择专利文献");
				}

			}

		}

	});

	return {

		_selectedProject : function() {
			return selectedProject;
		},
		_selectedNode : function() {
			return selectedNode;
		},
		_projectTree : function() {
			return projectTree;
		},
		_oneDocAddProjectDocID : function() {
			return oneDocAddProjectDocID;
		},
		_oneDocAddProjectTrsID : function() {
			return oneDocAddProjectTrsID;
		},

		setOneDocAddProjectDocID : function(_id) {
			oneDocAddProjectDocID = _id;
		},
		setOneDocAddProjectTrsID : function(_id) {
			oneDocAddProjectTrsID = _id;
		},

		_hisExp : function() {
			return hisExp;
		},

		_getUserProjectTree : function(parent_id, div_id) {
			getUserProjectTree(parent_id, div_id);
		},

		_closeAddProjectWindow2 : function() {
			closeAddProjectWindow2();
		},

		oneDocAddProject : function(obj) {

			$(".AddProjectWindow2").removeClass("disPlayNone");
			$(".shielding_layer").removeClass("displayNone");
			var scrolltop = $(document).scrollTop();
			$(".AddProjectWindow2").css("margin-top", scrolltop);
			$(".shielding_layer").removeClass("displayNone");
			setLayerHeight();
			disabledMouseWheel();
			$(".bodyClass").addClass("overflowHidden");
			getUserProjectTree("0", ".AddProjectWindow2");

			oneDocAddProjectDocID = $(obj).attr("docid");
			oneDocAddProjectTrsID = $(obj).attr("trsid");

		},
		addProjectTip : function(obj) {

			var v = $(obj).attr("v") + "";
			var v2 = $(obj).attr("v2") + "";
			var exp = ($("#" + v).text());
			var lib = ($("#" + v2).attr("v"));
			
			hisNum = parseInt($(obj).attr("vNum"));
			
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnCheckProjectNum.ajax",
				data : "select-key:project_num=" + hisNum,
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {
						var sign = $.fz_common.getXmlNodeValue(data, "context>result>sign");
						//单个项目的文献上限数
						var inProjectMaxNumber = $.fz_common.getXmlNodeValue(data,"context>result>inProjectMaxNumber");
						//当前用户已经使用的文献数量
						var used_project_count = $.fz_common.getXmlNodeValue(data,"context>result>used_project_count");
						//当前用户购买的文献总数
						var use_project_records = $.fz_common.getXmlNodeValue(data,"context>result>use_project_records");
						
						if(sign == "2"){
							$.fz_common.alert("提示", "单次加入项目上限为" + inProjectMaxNumber + "条，当前检索结果数量为" + hisNum + "条，请重新检索缩小结果集后再新建项目。");
							return false;
						}else if (sign == "1"){
							$.fz_common.alert("提示","您当前可用" + use_project_records + "条文献，该项目需添加" + hisNum + "条文献,所以您的剩余文献条数不足");
							return false;
						}else if (sign == "3"){
							$.fz_common.alert("提示", "您的文献不足，且单个项目的文献数量超过上限");
							return false;
						}else{
							hisExp = lib + " AND " + exp;
							openProject();
						}
					} else {
						errorDescAlert(data);
					}
				}
			});

		},
		_addProjectFunction : function(action_flag) {

			var hisExp = (di_project_obj._hisExp());
			var project_id = (di_project_obj._selectedProject()["project_id"]);
			var projectTree = (di_project_obj._projectTree());
			var selectedNode = (di_project_obj._selectedNode());

			$(".AddProjectWindow").showLoading();

			var exp;
			if (hisExp != "") {
				exp = hisExp;
			} else {
				exp = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
			}
			
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnCheckProject.ajax",
				data : "select-key:project_num=" + $("#contentTipNumList").text() + "&select-key:project_id=" + project_id,
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {
						var sign = $.fz_common.getXmlNodeValue(data, "context>result>sign");
						//单个项目的文献上限数
						var inProjectMaxNumber = $.fz_common.getXmlNodeValue(data,"context>result>inProjectMaxNumber");
						//当前用户已经使用的文献数量
						var used_project_count = $.fz_common.getXmlNodeValue(data,"context>result>used_project_count");
						//当前用户购买的文献总数
						var use_project_records = $.fz_common.getXmlNodeValue(data,"context>result>use_project_records");
						if(sign == "2"){
							$.fz_common.alert("提示", "单次加入项目上限为" + inProjectMaxNumber + "条，当前检索结果数量为" + hisNum + "条，请重新检索缩小结果集后再新建项目。");
							return false;
						}else if (sign == "1"){
							$.fz_common.alert("提示","您当前可用" + use_project_records + "条文献，该项目需添加" + hisNum + "条文献,所以您的剩余文献条数不足");
							return false;
						}else if (sign == "3"){
							$.fz_common.alert("提示", "您的文献不足，且单个项目的文献数量超过上限");
							return false;
						}else{
							
							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnAppendUserProject.ajax",
								timeout : 1000 * 60 * 3,
								data : "select-key:action_flag=" + action_flag + "&select-key:parent_id=" + project_id + "&select-key:project_id=" + project_id + "&select-key:project_type=01&select-key:exp="
										+ encodeURIComponent(exp) + "&select-key:project_num=" + $("#contentTipNumList").text(),
								success : function(data) {
									$(".AddProjectWindow").hideLoading();

									var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
									if (errCode == "000000") {

										$.fz_common.alert("提示", "追加成功");
										// 重新加载节点
										projectTree.reAsyncChildNodes(selectedNode, "refresh");

									} else {
										errorDescAlert(data);
									}

								},
								error : function(data) {
									$(".AddProjectWindow").hideLoading();
									$.fz_common.alert("错误", data + "", null);
								}
							});
							
						}
					} else {
						errorDescAlert(data);
					}
				}
			});
		},

		init : function(obj) {
		}
	}

}

var di_project_obj = new di_project();

function noLibExpress(express) {

	var txt = express;

	var libs = [ "PDB", "TMDB", "AS", "TSC" ];
	for ( var i = 0; i < libs.length; i++) {

		var lib = libs[i];

		var regex = new RegExp("(\\(" + lib + " \=.*?\\) AND )");
		var txtTmp = txt.match(regex);

		if (txtTmp != null && txtTmp[0] != null && txtTmp[0] != "") {
			txt = txt.replace(txtTmp[0], "");
		}

	}

	return txt;

}

function pid2Path(id, type, root) {

	id = id.replace("PID", "");

	var FILE_SEPARATOR = "/";

	var path = "";
	path += root;
	path += "/H/PID/";
	path += (id.substr(0, 4));
	path += (FILE_SEPARATOR);
	path += (id.substring(4, 8));
	path += (FILE_SEPARATOR);
	path += (id.substring(8, 12));
	path += (FILE_SEPARATOR);
	path += (id.substring(12, 26));
	path += (FILE_SEPARATOR);
	path += (id.substring(26, 42));
	path += (FILE_SEPARATOR);
	path += ("ABS/");

	return path;

}

// 字段生成表达式

function fieldExpress(input, button, sign, m_str) {
  
	// 字段内容
	var v = $.trim($(input).val());
	v = v.replace("’", "'");
	v = v.replace("‘", "'");
	// 字段标题
	var t = $.trim($(input).attr("title"));
 
	// 字段连接符号
	var buttonVal = "";
	if (button != null && $(button).val() != null) {
		buttonVal = " "+$(button).val() + " ";
	}
	
 
	// 判断之前的内容
	if (buttonVal == "" && $.trim(m_str) != "") { 
		m_str += " AND (";
	} else if ($.trim(m_str) == "") {
		m_str += " (";
	} else {
		m_str += buttonVal + " (";
	}

	// 判断单引号是否成对出现
	var regExp = /'(.*?)'/gi;

	// 匹配所有单引号引起来的部分
	var result = [];
	var match;
	while (match = regExp.exec(v)) {
		result.push(match[1]);
	}

	// 设置占位符
	for ( var i = 0; i < result.length; i++) {
		v = v.replace("'" + result[i] + "'", "#a#" + i + "#z#");
	}

	// 之后的内容需要做的处理
	// 2、英文文本不加单引号时，AND OR PRE/1 NOT XOR 、% 、?、#、( )不进行转义，其他的关键字全部转义处理
	// 3、单引号不成对出现时，需要做转义

	// 先替换转义字符
	// v = v.replace("\\", "\\\\");

	// 单引号转义(如果有也只有一个了 不需要正则)
	v = v.replace("'", "\\'");

	// 其他字符转义(全词不区分大小写匹配 全部替换)
	for ( var i = 0; i < trsKeyWord.length; i++) {

		if (v.indexOf(trsKeyWord[i]) > -1) {
			var pattern = eval("/\\b" + trsKeyWord[i] + "\\b/gmi");
			// var pattern = new RegExp("/\\b" + trsKeyWord[i] + "\\b/", "gmi");
			v = v.replace(pattern, "\\" + trsKeyWord[i]);
		}

	}

	// 符号直接全部替换 不进行全词匹配
	for ( var i = 0; i < trsKeySign.length; i++) {

		var pattern = new RegExp("\\" + trsKeySign[i], "gm");
		v = v.replace(pattern, "\\" + trsKeySign[i]);

	}

	// PRE/ AND/再替换回来
	v = v.replace(/(pre\\\/)/gmi, "PRE\/");
	v = v.replace(/(and\\\/)/gmi, "AND\/");

	// 判断百分号
	var perCent = "";
	for ( var i = 0; i < trsSpField.length; i++) {
		if (trsSpField[i] == t) {
			perCent = "%";
			break;
		}
	}

	// 单引号内部的内容不做任何处理 不加% 之后每个连接符前面增加%号
	if (perCent == "%") {
		var vTmplist = v.split(" ");

		var fieldStr = "";
		for ( var i = 0; i < vTmplist.length; i++) {

			var str = $.trim(vTmplist[i]);

			// 需要判断结尾是不是已经有%和是不是占位符
			for ( var n = 0; n < trsTranKeySign2.length; n++) {
				// 是连接符
				if (trsTranKeySign2[n] == str.toUpperCase()) {

					if (fieldStr != "") {

						if (!fieldStr.endWith("%") && !fieldStr.endWith("#z#")) {

							v = v.replace(fieldStr, fieldStr + "%");

						}

					}

				}
			}

			fieldStr = str;

		}

		// 最后一个
		if (!fieldStr.endWith("%") && !fieldStr.endWith("#z#") && fieldStr != "") {
			v = v.replace(fieldStr, fieldStr + "%");
		}
	}

	// 替换占位符 单引号内部的内容不做任何处理 不加%
	for ( var i = 0; i < result.length; i++) {
		v = v.replace("#a#" + i + "#z#", "'" + result[i] + "'");
	}

	if (t.indexOf("+") > 0 || t.indexOf(",") > 0) {
 
		t = t.replace(/(\+)/g, ",");
		m_str += t + " += "  + " ( " + v  + " )";
//上面这两句要保留 是DI上的 原始的格式规范
		 
//		t = t.replace(/(\+)/g, ",");
//		
//		m_str += t + " ,测试- "  + v ;
		
	} else {

		if ($.trim(v).indexOf("\\=") == 0 || $.trim(v).indexOf("\\<") == 0 || $.trim(v).indexOf("\\>") == 0 || $.trim(v).indexOf("\\!") == 0) {

			v = v.replace(/(\\=)/g, "=").replace(/(\\<)/g, "<").replace(/(\\>)/g, ">").replace(/(\\!)/g, "!");
			m_str += t + " " + v;

		} else {

			m_str += t + " = " + " ( " + v  + " )";
		}
	}
	m_str += " ) ";
	
	return m_str;

}

// 获取光标位置
(function($, undefined) {
	$.fn.getCursorPosition = function() {
		var el = $(this).get(0);
		var pos = 0;
		if ('selectionStart' in el) {
			pos = el.selectionStart;
		} else if ('selection' in document) {
			el.focus();
			var Sel = document.selection.createRange();
			var SelLength = document.selection.createRange().text.length;
			Sel.moveStart('character', -el.value.length);
			pos = Sel.text.length - SelLength;
		}
		return pos;
	}

})(jQuery);

// 移动光标
(function($) {
	$.fn.textFocus = function(v) {
		var range, len, v = v === undefined ? 0 : parseInt(v);
		this.each(function() {

			// if ($.browser.msie) {

			if (/msie/.test(navigator.userAgent.toLowerCase())) {
				range = this.createTextRange();
				v === 0 ? range.collapse(false) : range.move("character", v);
				range.select();
			} else {
				len = this.value.length;
				v === 0 ? this.setSelectionRange(len, len) : this.setSelectionRange(v, v);
			}
			this.focus();
		});
		return this;
	}
})(jQuery);

var _expressExpErrPos = 0;
// 表达式错误提示
function _expressExpMes(data) {

	var _express = $.fz_common.getXmlNodeValue(data, "context>select-key>express");
	var _expressExpMes = $.fz_common.getXmlNodeValue(data, "context>select-key>expressExpMes");
	var _expressExpPos = $.fz_common.getXmlNodeValue(data, "context>select-key>expressExpPos");

	var _expressSub = "";

	try {

		var _expressExpPosStart = _expressExpPos - 8;
		if (_expressExpPosStart < 0) {
			_expressExpPosStart = 0;
		}

		_expressSub = " ( <b style=\"color:#FF0000\">" + _express.substr(_expressExpPosStart, _expressExpPos) + "</b> ) ";

	} catch (e) {

	}

	if (_expressExpPos != null && _expressExpPos != "") {
		_expressExpPos = _expressExpPos - 0;
	} else {
		_expressExpPos = 0;
	}
	_expressExpErrPos = _expressExpPos;

	var _dialogHidden = function() {

		// var textExpressCN=$("#expressCN");
		// if ( textExpressCN.createTextRange != 'undefined' )// IE
		// {
		// var range = textExpressCN.createTextRange();
		// // 先把相对起点移动到0处
		// range.moveStart( "character", 0);
		// range.moveEnd( "character", 0);
		// range.collapse( true); // 移动插入光标到start处
		// range.moveEnd( "character", _expressExpErrPos+1);
		// range.moveStart( "character", 0);
		// range.select();
		// } // if
		// else if ( textExpressCN.setSelectionRange != 'undefined' )
		// {
		// textExpressCN.setSelectionRange(start, end);
		// textExpressCN.focus();
		// }

		$("#expressCN").textFocus(_expressExpErrPos);
	};

	$.fz_common.alert("提示", "<p>当前表达式存在错误：</p>" + "<p><b>" + _expressExpMes + "</b></p>" + "<p>位置：" + _expressExpPos + _expressSub + "</p>", _dialogHidden);

}

function errorDescAlert(data) {

	var errorDesc = $.fz_common.getXmlNodeValue(data, "context>error-desc");
	try {
		errorDesc = (errorDesc + "").split("==>")[1];
	} catch (e) {
	}
	$.fz_common.alert("提示", "<p>" + errorDesc + "</p>", null);

}

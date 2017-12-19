/**
 * 根据Table的名称，删除此Table
 * 
 * @param {tablename}
 * 
 */
function dropTableByName(tablename) {
	var table = document.getElementById(tablename);
	var childs = table.childNodes;
	for (var i = 0; i < childs.length; i++) {
		table.removeChild(childs[i]);
	}
}

/**
 * 
 * @param {}
 *            whichTd
 */
function change(whichTd) {
	var datesTR = document.getElementById("datesTR");
	var tds = datesTR.getElementsByTagName("td");
	for (var i = 0; i < tds.length; i++) {
		var links = tds[i].getElementsByTagName("a");
		for (var j = 0; j < links.length; j++) {
			links[j].setAttribute("class", "n");
		}
	}
	var links = whichTd.getElementsByTagName("a");
	for (var j = 0; j < links.length; j++) {
		links[j].setAttribute("class", "m");
	}
}
/**
 * yib
 * 
 * @param {}
 *            url
 * @param {}
 *            params
 * @return {}
 */
function ajaxCallByAsync(url, params) {
	var returnJson = $.ajax({
		url : sRoot + url + "?randomNum=" + Math.random(),
		data : params,
		type : "POST",
		async : true
	});
	var returnText = returnJson.responseText;
	return returnText;
}
/**
 * 同步获取数据
 * 
 * @param {}
 *            url
 * @param {}
 *            params
 * @return {}
 */
function ajaxCallBySync(url, params) {
	var flag = "success";
	var returnText = "";
	var returnJson = $.ajax({
		url : sRoot + url + "?randomNum=" + Math.random(),
		data : params,
		type : "POST",
		async : false,
		// success:function(data,
		// textStatus){alert("ajaxCallBySync:"+data.data);},
		error : function() {
			flag = "failure";
		}
	});
	if (flag == "success") {
		returnText = returnJson.responseText;
	}
	return returnText;
}
/**
 * 获取选中的Radio值
 * 
 * @param {}
 *            name
 * @return {}
 */
function getSelectedRadioValueByName(name) {
	var radios = document.getElementsByName(name);
	var strSelectValue;
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			strSelectValue = radios[i].value;
			break;
		} else {
			continue;
		}
	}
	return strSelectValue;
}
/**
 * 全选
 * 
 * @param {}
 *            e
 * @param {}
 *            itemName
 */
function selectAllCheckboxs(allName, itemName) {
	var aa = document.getElementsByName(itemName);
	var e = document.getElementById(allName);
	for (var i = 0; i < aa.length; i++) {
		aa[i].checked = e.checked;
	}
}

function strReplace(str, oldSub, newSub, ignoreCase) {
    var i = ignoreCase ? 
        str.toLowerCase().indexOf(oldSub.toLowerCase()) :
        str.indexOf(oldSub);
    var result = "";
    while (i >= 0) {
        result += str.substr(0, i);
        result += newSub;
        str = str.substr(i + oldSub.length);
        i = ignoreCase ? 
            str.toLowerCase().indexOf(oldSub.toLowerCase()) :
                str.indexOf(oldSub);
    }
    result += str;
    return result;
}
function selectOneCheckbox(allName, e) {	
	var arg = strReplace(allName,"selectAll","",false);
	var all = document.getElementById(allName);
	if (!e.checked) {
		all.checked = false;
		if(arg=='1'){
			if(arg1.indexOf("^"+e.value)>=0){
				arg1 = strReplace(arg1,"^"+e.value,"",false);
			}else if(arg1.indexOf(e.value+"^")>=0){
				arg1 = strReplace(arg1,e.value+"^","",false);
			}else if(arg1.indexOf(e.value)>=0){
				arg1 = strReplace(arg1,e.value,"",false);
			}
		}else{
			if(arg2.indexOf("^"+e.value)>=0){
				arg2 = strReplace(arg2,"^"+e.value,"",false);
			}else if(arg2.indexOf(e.value+"^")>=0){
				arg2 = strReplace(arg2,e.value+"^","",false);
			}else if(arg2.indexOf(e.value)>=0){
				arg2 = strReplace(arg2,e.value,"",false);
			}
		}
	} else {
		var size;
		if(arg=='1'){
			size = arg1.split("^").length;
		}else{
			size = arg2.split("^").length;
		}
		if(size>10){
			alert("选定的分析项个数已经超过10个，请重新选择！");
			e.checked = false;
		}else{
			if(arg=='1'){
				arg1 +=e.value+"^";
			}else{
				arg2 +=e.value+"^";
			}
			var aa = document.getElementsByName(e.name);
			for (var i = 0; i < aa.length; i++) {
				if (!aa[i].checked) {
					return;
				}
			}
			all.checked = true;
		}
	}
}
function checkedItemsValue(itemName) {
	var val = "";
	var aa = document.getElementsByName(itemName);
	for (var i = 0; i < aa.length; i++) {
		if (aa[i].checked) {
			val += aa[i].value + ",";
		}
	}
	if (val != "") {
		val = val.substring(0, val.length - 1);
	}
	return val;
}
/**
 * 
 * @param {}
 *            s
 * @return {}
 */
function tranDis(s) {

	var str = "";
	for (i = 0; i < s.length; i++) {
		temp = s.charCodeAt(i).toString(16);
		str += "\\u" + new Array(5 - String(temp).length).join("0") + temp;
	}
	return str;
}

function _format(pattern, num, z) {
	var j = pattern.length >= num.length ? pattern.length : num.length;
	var p = pattern.split("");
	var n = num.split("");
	var bool = true, nn = "";
	for (var i = 0; i < j; i++) {
		var x = n[n.length - j + i];
		var y = p[p.length - j + i];
		if (z == 0) {
			if (bool) {
				if ((x && y && (x != "0" || y == "0")) || (x && x != "0" && !y)
						|| (y && y == "0" && !x)) {
					nn += x ? x : "0";
					bool = false;

				}
			} else {
				nn += x ? x : "0";
			}
		} else {
			if (y && (y == "0" || (y == "#" && x)))
				nn += x ? x : "0";
		}
	}
	return nn;
}
function _formatNumber(numChar, pattern) {
	var patterns = pattern.split(".");
	var numChars = numChar.split(".");
	var z = patterns[0].indexOf(",") == -1 ? -1 : patterns[0].length
			- patterns[0].indexOf(",");
	var num1 = _format(patterns[0].replace(","), numChars[0], 0);
	var num2 = _format(patterns[1]
			? patterns[1].split('').reverse().join('')
			: "", numChars[1] ? numChars[1].split('').reverse().join('') : "",
			1);
	num1 = num1.split("").reverse().join('');
	var reCat = eval_r("/[0-9]{" + (z - 1) + "," + (z - 1) + "}/gi");
	var arrdata = z > -1 ? num1.match(reCat) : undefined;
	if (arrdata && arrdata.length > 0) {
		var w = num1.replace(arrdata.join(''), '');
		num1 = arrdata.join(',') + (w == "" ? "" : ",") + w;
	}
	num1 = num1.split("").reverse().join("");
	return (num1 == "" ? "0" : num1)
			+ (num2 != "" ? "." + num2.split("").reverse().join('') : "");
}
function formatNumber(num, opt) {
	var reCat = /[0#,.]{1,}/gi;
	var zeroExc = opt.zeroExc == undefined ? true : opt.zeroExc;
	var pattern = opt.pattern.match(reCat)[0];
	var numChar = num.toString();
	return !(zeroExc && numChar == 0) ? opt.pattern.replace(pattern,
			_formatNumber(numChar, pattern)) : opt.pattern
			.replace(pattern, "0");
}
function _format(pattern, num, z) {
	var j = pattern.length >= num.length ? pattern.length : num.length;
	var p = pattern.split("");
	var n = num.split("");
	var bool = true, nn = "";
	for (var i = 0; i < j; i++) {
		var x = n[n.length - j + i];
		var y = p[p.length - j + i];
		if (z == 0) {
			if (bool) {
				if ((x && y && (x != "0" || y == "0")) || (x && x != "0" && !y)
						|| (y && y == "0" && !x)) {
					nn += x ? x : "0";
					bool = false;
				}
			} else {
				nn += x ? x : "0";
			}
		} else {
			if (y && (y == "0" || (y == "#" && x)))
				nn += x ? x : "0";
		}
	}
	return nn;
}
function _formatNumber(numChar, pattern) {
	var patterns = pattern.split(".");
	var numChars = numChar.split(".");
	var z = patterns[0].indexOf(",") == -1 ? -1 : patterns[0].length
			- patterns[0].indexOf(",");
	var num1 = _format(patterns[0].replace(","), numChars[0], 0);
	var num2 = _format(patterns[1]
			? patterns[1].split('').reverse().join('')
			: "", numChars[1] ? numChars[1].split('').reverse().join('') : "",
			1);
	num1 = num1.split("").reverse().join('');
	var reCat = eval("/[0-9]{" + (z - 1) + "," + (z - 1) + "}/gi");
	var arrdata = z > -1 ? num1.match(reCat) : undefined;
	if (arrdata && arrdata.length > 0) {
		var w = num1.replace(arrdata.join(''), '');
		num1 = arrdata.join(',') + (w == "" ? "" : ",") + w;
	}
	num1 = num1.split("").reverse().join("");
	return (num1 == "" ? "0" : num1)
			+ (num2 != "" ? "." + num2.split("").reverse().join('') : "");
}
function formatNumber(num, opt) {
	var reCat = /[0#,.]{1,}/gi;
	var zeroExc = opt.zeroExc == undefined ? true : opt.zeroExc;
	var pattern = opt.pattern.match(reCat)[0];
	var numChar = num.toString();
	return !(zeroExc && numChar == 0) ? opt.pattern.replace(pattern,
			_formatNumber(numChar, pattern)) : opt.pattern
			.replace(pattern, "0");
}

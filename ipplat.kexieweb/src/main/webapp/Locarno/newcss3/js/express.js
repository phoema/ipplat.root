//快速检索区的初始化
var _quickSelectedArea = function(){
	this.init = function(){
		// 快捷检索选择区域
		$(".conli,.firstConli").click(function() {
			$(this).parent().find(".conditionSelected1").addClass("conditionUnSelect");
			$(this).parent().find(".conditionSelected1").removeClass("conditionSelected1");
			$(this).addClass("conditionSelected1");

			var mydate = new Date();
			var value = $(this).attr("value");
			var year = mydate.getFullYear();
			if (value != '0') {
				var v = $(this).attr("value").split(">")[1];
				$(this).parent().find("input:first").val(parseInt(year) - parseInt(v) + 1 + "");
				$(this).parent().find("input:last").val(year + "");

				$(this).parent().find("input:last").parent().addClass("conditionSelected");
				$(this).parent().find("input:last").parent().removeClass("conditionUnSelect");
			} else {
				$(this).parent().find("input").each(function() {
					$(this).val("");
					$(this).parent().removeClass("conditionSelected");
					$(this).parent().addClass("conditionUnSelect");
				});
			}

		});

		// 快捷检索选择区域
		$(".conli1,.firstConli1").click(function() {
			$(this).parent().find(".conditionSelected").addClass("conditionUnSelect");
			$(this).parent().find(".conditionSelected").removeClass("conditionSelected");
			$(this).addClass("conditionSelected");

			var v = $(this).attr("value");
			if (v.indexOf("input") != 0) {
				$(this).parent().find("input").each(function() {
					$(this).val("");
				});
			}

		});

		// 快捷检索选择区域
		$(".conli2,.firstConli2").click(function() {
			$(this).parent().find(".conditionSelected1").addClass("conditionUnSelect");
			$(this).parent().find(".conditionSelected1").removeClass("conditionSelected1");
			$(this).addClass("conditionSelected1");

			var value = $(this).attr("value");
			if (value != '0') {
				if (value.indexOf("-") >= 0) {

					var v1 = parseInt(value.split(":")[1].split("-")[0]);
					if (v1 > 10000) {
						v1 = v1 / 10000;
					}
					var v2 = parseInt(value.split(":")[1].split("-")[1]);
					if (v2 > 10000) {
						v2 = v2 / 10000;
					}

					$(this).parent().find("input:first").val(v1);
					$(this).parent().find("input:last").val(v2);

					$(this).parent().find("input:last").parent().addClass("conditionSelected");
					$(this).parent().find("input:last").parent().removeClass("conditionUnSelect");
				} else {
					var v = $(this).attr("value").split(">")[1];
					$(this).parent().find("input:last").val("");
					$(this).parent().find("input:first").val(v + "");

					$(this).parent().find("input:first").parent().addClass("conditionSelected");
					$(this).parent().find("input:first").parent().removeClass("conditionUnSelect");
				}
			} else {
				$(this).parent().find("input").each(function() {
					$(this).val("");
					$(this).parent().removeClass("conditionSelected");
					$(this).parent().addClass("conditionUnSelect");
				});
			}

		});
		
		// 快捷全部不选则选择不限
		$(".conli input").each(function() {

			$(this).blur(function() {

				var ul = $(this).parent().parent();
				var v = "";
				ul.find("input").each(function() {
					v += $.trim($(this).val());
				});

				if (v == null || v == "") {
					ul.children()[0].click();
				}

			});

		});
	}
}

var quickSelectedArea = new _quickSelectedArea();

//表达式编辑框中表格字段初始化
var _expressTableArea = function(){
	this.init = function(){
		// 字段编辑区域打开层点击按钮
		$("#fieldListWindow .fontWeightBold1").click(function() {
			var m_str1 = $(this).text();
			if (m_str1.indexOf("+") > -1) {
				m_str1 = m_str1.replace(/(\+)/g, ",");
				m_str1 += " += ";
			} else {
				m_str1 += " = ";
			}
			var m_str2 = $(".editFieldList").val();
			if (m_str2 == "") {
				$(".editFieldList").val(m_str1);
				var pos = m_str1.length - 0 + 2 - 0;
				$("#expressCN").textFocus(pos);
				$("#expressSign").val(pos);
			} else {
				var expressSign = $("#expressSign").val();
				if (expressSign == "") {
					$(".editFieldList").val(m_str2 + " " + m_str1 + " ");
					var pos = m_str2.length - 0 + m_str1.length - 0 + 2 - 0;

					$("#expressCN").textFocus(pos);
					$("#expressSign").val(pos);
				} else {
					var length = m_str2.length;
					var expressStart = parseInt(expressSign);
					$(".editFieldList").val(m_str2.substr(0, expressStart) + " " + m_str1 + " " + m_str2.substr(expressStart, length));

					var pos = expressSign - 0 + m_str1.length - 0 + 2 - 0;

					$("#expressCN").textFocus(pos);
					$("#expressSign").val(pos);
				}

			}
			$("#fieldListWindowClose").click();
		});
		
		// 字段编辑区域打开层点击按钮
		$("#fieldCompleteWindow .fontWeightBold1").click(function() {
			var m_str1 = $(this).text();
			if (m_str1.indexOf("+") > -1) {
				m_str1 = m_str1.replace(/(\+)/g, ",");
				m_str1 += " += ";
			} else {
				m_str1 += " = ";
			}
			var m_str2 = $(".editFieldList").val();
			if (m_str2 == "") {
				$(".editFieldList").val(m_str1);
				var pos = m_str1.length - 0 + 2 - 0;
				$("#expressCN").textFocus(pos);
				$("#expressSign").val(pos);
			} else {
				var expressSign = $("#expressSign").val();
				if (expressSign == "") {
					$(".editFieldList").val(m_str2 + " " + m_str1 + " ");
					var pos = m_str2.length - 0 + m_str1.length - 0 + 2 - 0;

					$("#expressCN").textFocus(pos);
					$("#expressSign").val(pos);
				} else {
					var length = m_str2.length;
					var expressStart = parseInt(expressSign);
					$(".editFieldList").val(m_str2.substr(0, expressStart) + " " + m_str1 + " " + m_str2.substr(expressStart, length));

					var pos = expressSign - 0 + m_str1.length - 0 + 2 - 0;

					$("#expressCN").textFocus(pos);
					$("#expressSign").val(pos);
				}

			}
			$("#fieldCompleteWindowClose").click();
		});
	}
}
var expressTableArea = new _expressTableArea();
//表达式生成
$(document).ready(function() {
	quickSelectedArea.init();
	expressTableArea.init();
	// 快捷检索展开收起
	$(".triangleDown").click(function() {
		$(".fastSelectArea").toggleClass("displayNone");
		$("#addFieldPage").hide();
		if ($(".fastSelectArea").hasClass("displayNone")) {
			$(this).attr("src", "/module/di/img/patent/table/triangle.png");
			$(".shoufang").text("展开");
			$(".fastSelectToggle").text("展开");
		} else {
			$(this).attr("src", "/module/di/img/patent/table/triangle_up.png");
			$(".shoufang").text("收起");
			$(".fastSelectToggle").text("收起");
		}
		return false;
	});
	
	// 点击重置按钮 同时点击reSetExpress reSetExpress事件分开写
	$("#emptyExpress").click(function() {
		$("#expressCN").val("");
		$("#expressCN").text("");
		$(".reSetExpress").click();

		// 快捷全部不选则选择不限
		$(".condition").each(function() {

			$($(this).children()[0]).click();

		});

	});

	// 表达式编辑框
	// 按钮点击
	$(".editTextButton").click(function() {

		var expressSign = $("#expressSign").val();
		var m_str1 = $(this).text();
		var m_str2 = $("#expressCN").val();

		// 判断是否在焦点
		// var isFocus = $("#expressCN").is(":focus");
		// if (true == isFocus) {
		// alert("focus");
		if (expressSign != "") {

			var length = m_str2.length;
			var obj = document.getElementById("expressCN");
			var expressStart = parseInt(expressSign);
			$("#expressCN").val(m_str2.substr(0, expressStart) + " " + m_str1 + " " + m_str2.substr(expressStart, length));

			var pos = expressSign - 0 + m_str1.length - 0 + 2 - 0;

			$("#expressCN").textFocus(pos);
			$("#expressSign").val(pos);

		} else {
			$("#expressCN").val(m_str2 + " " + m_str1 + " ");
		}
		// } else {
		// alert("blur");
		// $("#expressCN").val(m_str2 + " " + m_str1 + " ");
		// }

		return false;

	});

	// 字段列表展开浮层
	$("#CheckMoreFiled").click(function() {
		$("#fieldListWindow").show();
		$(".shielding_layer").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$("#fieldListWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		$(".bodyClass").addClass("overflowHidden");
		disabledMouseWheel();
	});
	
	$("#BtnCompleteColumnOpenSimpleChoose").click(function() {
		MouseWheel();
		$("#fieldListWindow").hide();
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
		$("#fieldCompleteWindow").show();
//		$(".shielding_layer").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$("#fieldCompleteWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		$(".bodyClass").addClass("overflowHidden");
//		disabledMouseWheel();
	});
	
	$("#fieldCompleteWindow").mouseover(function(){
		if($(".shielding_layer").hasClass("displayNone")==false){
			MouseWheel();
		}
	});
	
	$("#fieldCompleteWindow").mouseout(function(){
		if($(".shielding_layer").hasClass("displayNone")==false){
			disabledMouseWheel();
		}
	});

	// 字段列表展开浮层-关闭
	$("#fieldListWindowClose").click(function() {
		MouseWheel();
		$("#fieldListWindow").hide();
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
	});
	
	// 字段列表展开浮层-关闭
	$("#fieldCompleteWindowClose").click(function() {
		MouseWheel();
		$("#fieldCompleteWindow").hide();
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
	});
	
	// 字段列表展开浮层-关闭
	$("#BtnCompleteWindowClose").click(function() {
		MouseWheel();
		$("#fieldCompleteWindow").hide();
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
	});

	// 回车提交
	document.onkeydown = function(event) {

		if (event.keyCode == 13) {
			event.keyCode = 0;
			event.returnValue = false;

			$("#submitExpress").click();
		}
	}
	// 每次重新加载页面时清除缓存内容
	$("#expressSign").val("");

});

// 生成检索库表达式
function getLibsExpress() {

	// 专利对应库
	var m_str = "";
	$("#_tabChinaUtlityPatent input").each(function(index, domEle) {
		var v = $(this).attr("v");
		if (v != null && v != "") {

			$.each(patentLibrary, function(index, content) {
				if (v == content) {
					v = index;
				}
			});
			if (v != "OTHE") {
				v = "PDB = '" + v + "'";
			} else {
				//v = "PDB = 'OTHE'";
				v = "PDB=(AM00 or AP00 or AR00 or AT00 or BA00 or BE00 or BG00 or BR00 or BY00 or CL00 or CO00 or CR00 or CS00 or CU00 or CY00 or CZ00 or DD00 or DK00 or DO00 or DZ00 or EA00 or EC00 or EE00 or EG00 or ES00 or FI00 or GC00 or GE00 or GR00 or GT00 or HN00 or HR00 or HU00 or ID00 or IE00 or IL00 or IN00 or IS00 or IT00 or JO00 or KE00 or KG00 or KZ00 or LT00 or LU00 or LV00 or MA00 or MC00 or MD00 or ME00 or MN00 or MT00 or MW00 or MX00 or MY00 or NI00 or NL00 or NO00 or NZ00 or OA00 or PA00 or PE00 or PH00 or PL00 or PT00 or RO00 or RS00 or SE00 or SG00 or SI00 or SK00 or SM00 or SV00 or TH00 or TJ00 or TN00 or TR00 or TT00 or UA00 or UY00 or UZ00 or VN00 or YU00 or ZA00 or ZM00 or ZW00 or OTHE)";
			}

			m_str += v + " OR ";
		}
	});

	// 非专利对应库
	$("#searchLibs input").each(function(index, domEle) {

		var isChecked = $(this).prop("checked");

		if (isChecked) {
			var val = $(this).val();

			if (val != null && val != "") {

				$.each(traLibrary, function(index, content) {
					if (val == content) {
						val = index;
					}
				});

				val = "TMDB = '" + val + "'";
				m_str += val + " OR ";
			}

		}

	});

	// 非专利对应库(期刊)
	$("#searchLibsJournal input").each(function(index, domEle) {

		var isChecked = $(this).prop("checked");

		if (isChecked) {
			var val = $(this).val();

			if (val != null && val != "") {

				$.each(stdLibrary, function(index, content) {
					if (val == content) {
						val = index;
					}
				});

				val = "AS = '" + val + "'";
				m_str += val + " OR ";
			}

		}

	});
		
	// 非专利对应库(国家标准，其它)
	$("#searchLibsStandard input").each(function(index, domEle) {
		if ($(this).val() == "国家标准库") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				var val = "CN";

				if (val != null && val != "") {

					$.each(iseLibrary, function(index, content) {
						if (val == content) {
							val = index;
						}
					});

					val = "TSC = '" + val + "'";
					m_str += val + " OR ";
				}

			}
		}
		if ($(this).val() == "其他") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				var val = "OTHER";

				if (val != null && val != "") {

					$.each(iseLibrary, function(index, content) {
						if (val == content) {
							val = index;
						}
					});

					val = "TSC = '" + val + "'";
					m_str += val + " OR ";
				}

			}
		}
		if ($(this).val() == "中国地方标准库") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				var val = "DB";
				if (val != null && val != "") {

					$.each(iseLibrary, function(index, content) {
						if (val == content) {
							val = index;
						}
					});

					val = "TSC = '" + val + "'";
					m_str += val + " OR ";
				}

			}
		}

		if ($(this).val() == "行业标准库") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				val = "TSC = 'QT'";
				m_str += val + " OR ";
				$(".hybzkcont span").each(function() {
					var val = $(this).attr("value");
					if (val != null && val != "") {
						$.each(iseLibrary, function(index, content) {
							if (val == content) {
								val = index;
							}
						});
						val = "QT = '" + val + "'";
						m_str += val + " OR ";
					}
				});
			} else {
				$(".hybzkcont span").each(function() {
					var val = $(this).attr("class");
					if (val == "standardbzk") {
						var val = $(this).attr("value");
						if (val != null && val != "") {
							$.each(iseLibrary, function(index, content) {
								if (val == content) {
									val = index;
								}
							});
							val = "QT = '" + val + "'";
							m_str += val + " OR ";
						}
					}
				});
			}
		}

		if ($(this).val() == "国际标准库") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				val = "TSC = 'IOS'";
				m_str += val + " OR ";
				$(".gjbzkcont span").each(function() {
					var val = $(this).attr("value");
					if (val != null && val != "") {
						// $.each(iseLibrary, function(index, content) {
						// if (val == content) {
						// val = index;
						// }
						// });
						val = "IOS = '" + val + "'";

						m_str += val + " OR ";
					}
				});
			} else {
				$(".gjbzkcont span").each(function() {
					var val = $(this).attr("class");
					if (val == "standardbzk") {
						var val = $(this).attr("value");
						if (val != null && val != "") {
							// $.each(iseLibrary, function(index, content) {
							// if (val == content) {
							// val = index;
							// }
							// });
							val = "IOS = '" + val + "'";
							m_str += val + " OR ";
						}
					}
				});
			}
		}

		if ($(this).val() == "国外标准库") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				var num = 0;
				val = "TSC = 'FS'";
				m_str += val + " OR ";
				$(".gwbzkcont span").each(function() {
					var val = $(this).attr("value");
					if (val != null && val != "") {
						// $.each(iseLibrary, function(index, content) {
						// if (val == content) {
						// val = index;
						// }
						// });
						val = "FS = '" + val + "'";

						m_str += val + " OR ";
						num++;
					}
				});
			} else {
				$(".gwbzkcont span").each(function() {
					var val = $(this).attr("class");
					if (val == "standardbzk") {
						var val = $(this).attr("value");
						if (val != null && val != "") {
							// $.each(iseLibrary, function(index, content) {
							// if (val == content) {
							// val = index;
							// }
							// });
							val = "FS = '" + val + "'";
							m_str += val + " OR ";
						}
					}
				});
			}
		}

		if ($(this).val() == "计量规程规范") {
			var isChecked = $(this).prop("checked");
			if (isChecked) {
				val = "TSC = 'JJ'";
				m_str += val + " OR ";
				$(".jlgfbzkcont span").each(function() {
					var val = $(this).attr("value");
					if (val != null && val != "") {
						// $.each(iseLibrary, function(index, content) {
						// if (val == content) {
						// val = index;
						// }
						// });
						val = "JJ = '" + val + "'";
						m_str += val + " OR ";
					}
				});
			} else {
				$(".jlgfbzkcont span").each(function() {
					var val = $(this).attr("class");
					if (val == "standardbzk") {
						var val = $(this).attr("value");
						if (val != null && val != "") {
							// $.each(iseLibrary, function(index, content) {
							// if (val == content) {
							// val = index;
							// }
							// });
							val = "JJ = '" + val + "'";
							m_str += val + " OR ";
						}
					}
				});
			}
		}

	});

	if (m_str != null && m_str != "") {
		m_str = "(" + m_str.substring(0, (m_str.length - 3)) + ") ";
	}

	return $.trim(m_str);

}

// 生成快捷检索表达式
function getShortcutExpress() {

	// 快捷
	var fe_str = "";
	$("#_fastSelectArea .conditionSelected").each(function() {

		if ($(this).attr("value") != null && $(this).attr("value") != "" && $(this).attr("value") != "0") {

			var v = $(this).attr("value");
			var field = $.trim($(this).parent().parent().prev().attr("field"));

			if (v.indexOf("input") == 0) {

				$(this).parent().parent().parent().find("input").each(function() {
					var val = $(this).val();
					if (val != "" && isNaN(val)) {
						alert("自定义快捷检索，检索项需要输出数字。");
						return;
					}
					var sign = $(this).attr("sign");
					v += val + "-";
				});

			}

			if (field == "判决金额") {
				var v1 = v.split(":");
				if (v1[2] != null && v1[2] != "") {
					var v2 = v1[2].split("-");
					if (v2[0] != null && v2[0] != "") {
						if (v2[1] != null && v2[1] != "") {
							v = "input:sum:" + v2[0] * 10000 + "-" + v2[1] * 10000 + "-";
						} else {
							v = "input:sum:" + v2[0] * 10000 + "--";
						}
					} else {
						if (v2[1] != null && v2[1] != "") {
							v = "input:sum:-" + v2[1] * 10000 + "-";
						}
					}
				}
			}

			var fastExpress = fastSelectExpress(field, v);
			if (fastExpress != null && fastExpress != "") {
				fe_str += "(" + fastExpress + ")" + " AND ";
			}

		}

	});

	if (fe_str != null && fe_str != "") {
		fe_str = " ( " + fe_str.substring(0, (fe_str.length - 4)) + ") ";
	}

	return fe_str;

}

// 用于非专利 单个字段
function getFieldExpress2(m_str, ele, index) {

	var buttonindex = index - 2;

	txt = $($(this).parent().parent().parent().children()[index]).find(".queryField").text();

	var input = $($(ele).children()[index]).find("input[type = 'text']")[0];
	var button = $($(ele).children()[buttonindex]).find("input[type = 'button']")[0];
	var sign = [ "OR", "AND", "NOT" ];

	m_str = fieldExpress(input, button, sign, m_str);
	// alert (m_str);

	return m_str;

}

// 用于非专利 多个字段
function getFieldExpress3(m_str) {

	var ele = "#queryFieldTab tr";

	var sign = [ "OR", "AND", "NOT" ];
	var flag = 0;

	// 自定义字段
	$(ele).each(function() {

		if (!($(this).hasClass("displayNone"))) {

			var input = $(this).find("input[type = 'text']")[0];
			var button = $(this).find("input[type = 'button']")[0];

			if (input != null && $(input).val() != null && $.trim($(input).val()) != "" && $.trim($(input).attr("title")) != "") {

				m_str = fieldExpress(input, button, sign, m_str);

			}

			input = $(this).find("input[type = 'text']")[1];
			if (flag == 0) {
				button = $(this).find("input[type = 'button']")[0];
			} else {
				button = $(this).find("input[type = 'button']")[1];
			}
			if (input != null && $(input).val() != null && $.trim($(input).val()) != "" && $.trim($(input).attr("title")) != "") {

				m_str = fieldExpress(input, button, sign, m_str);

			}

		}
		flag++;

	});

	return m_str;

}

// 生成字段表达式 需要传入上一个表达式
function getFieldExpress(m_str, ele) {

	if (ele == null || ele == "") {
		ele = "#tabOpenDay tr";
	}

	var sign = [ "OR", "AND", "NOT" ];

	// 自定义字段
	$(ele).each(function() {

		if (!($(this).hasClass("displayNone"))) {

			var input = $(this).find("input[type = 'text']")[0];
			var button = $(this).find("input[type = 'button']")[0];

			if (input != null && $(input).val() != null && $.trim($(input).val()) != "" && $.trim($(input).attr("title")) != "") {
				if($(this).find(".exactSearch").hasClass("exactSearch1")){
					
					m_str = fieldExpress(input, button, "3", m_str);
				}else{
					
					m_str = fieldExpress(input, button, sign, m_str);
				}
				
				// alert (m_str);

			}

		}

	});
	return m_str;

}

function fieldExpress_old(input, button, sign, m_str) {

	var v = $.trim($(input).val());
	var t = $.trim($(input).attr("title"));
	var f = $(input).attr("field");
	var _id = $.trim($(input).attr("id"));

	var buttonVal = "";
	if (button != null && $(button).val() != null) {
		buttonVal = $(button).val() + "";
	}

	if (buttonVal == "" && $.trim(m_str) != "") {
		m_str += " AND (";
	} else if ($.trim(m_str) == "") {
		m_str += " (";
	} else {
		m_str += "" + buttonVal + " (";
	}

	// // 替换所有单引号
	// v = v.replace(/(')/g, " ");
	// v = v.replace(/(‘)/g, " ");
	// v = v.replace(/(’)/g, " ");
	//
	// v = $.trim(v);
	//
	// var vlist = v.split(" ");
	var vlist = getStrExpresslist(v);

	// 上一个符号
	var preSign = "";
	// 非特殊符号查询项开始
	var queryTxt = false;
	for ( var i = 0; i < vlist.length; i++) {

		var str = $.trim(vlist[i]);
		if (str == "") {
			continue;
		}

		var ifsign = false;

		for ( var j = 0; j < sign.length; j++) {

			if (str.toUpperCase() == sign[j]) {
				ifsign = true;
			}

		}

		if (!ifsign) {
			queryTxt = true;
		}

		// 判断开始的时候不能够是特殊符号
		if (!queryTxt) {
			continue;
		}

		if (ifsign) {

			preSign = " " + str.toUpperCase();

		} else {

			m_str += preSign + " ";

			var signCheck1 = signCheckExpress1(str);
			var signCheck2 = signCheckExpress2(str);

			if (t == "申请号" || t == "公布号" || t == "IPC" || t == "CPC" || t == "UC" || t == "FI" || t == "FTERM" || t == "优先权" || t == "简单同族") {
				if (str[str.length - 1] != "%") {
					m_str += signCheck1 + t + " = '" + signCheckExpressStr(str) + "%'" + signCheck2;
				} else {
					m_str += signCheck1 + t + " = '" + signCheckExpressStr(str) + "'" + signCheck2;
				}

			} else {

				if (t.indexOf("+") > 0 || t.indexOf(",") > 0) {

					t = t.replace(/(\+)/g, ",");
					m_str += signCheck1 + t + " += '" + signCheckExpressStr(str) + "'" + signCheck2;
				} else {

					m_str += signCheck1 + t + " = '" + signCheckExpressStr(str) + "'" + signCheck2;
				}
			}

			preSign = " OR";
		}

	}
	m_str += " ) ";

	return m_str;

}

function signCheckExpressStr(str) {

	return str.replace(/(\()/g, "").replace(/(\))/g, "");
}

function signCheckExpress1(str) {

	if (str.indexOf("(") == 0) {
		return "(";
	}

	return "";

}

function signCheckExpress2(str) {

	if (str.indexOf(")") == (str.length - 1)) {
		return ")";
	}

	return "";

}

// 快捷检索表达式函数
function fastSelectExpressSum(field, val) {
	if (val.indexOf(">") == 0) {

		return field + " " + val.substr(0, 1) + " " + "'" + val.substr(1) + "'";

	} else if (val.indexOf("<") == 0) {

		return field + " " + val.substr(0, 1) + " " + "'" + val.substr(1) + "'";

	} else if (val.indexOf("-") >= 0) {

		return fastSelectExpressInput(field, val);

	}

}

function fastSelectExpressY(field, val) {

	var d = new Date();
	var year = d.getFullYear();

	if (val.indexOf(">") == 0) {

		return field + " " + val.substr(0, 1) + " " + "'" + (year - val.substr(1)) + "'";

	} else if (val.indexOf("<") == 0) {

		return field + " " + val.substr(0, 1) + " " + "'" + (year + val.substr(1)) + "'";

	} else if (val.indexOf("-") >= 0) {

		return fastSelectExpressInput(field, val);

	}

}

function getBefTime(day) {

	var d = new Date();
	var m = day * 60 * 60 * 24 * 1000;
	var befminuts = d.getTime() - m;

	var beforeDat = new Date();
	beforeDat.setTime(befminuts);
	var befMonth = beforeDat.getMonth() + 1;
	var mon = befMonth >= 10 ? befMonth : '0' + befMonth;
	var befDate = beforeDat.getDate();
	var da = befDate >= 10 ? befDate : '0' + befDate;
	return beforeDat.getFullYear() + "" + mon + "" + da;

}

function getAftTime(day) {

	var d = new Date();
	var m = day * 60 * 60 * 24 * 1000;
	var befminuts = d.getTime() + m;

	var beforeDat = new Date();
	beforeDat.setTime(befminuts);
	var befMonth = beforeDat.getMonth() + 1;
	var mon = befMonth >= 10 ? befMonth : '0' + befMonth;
	var befDate = beforeDat.getDate();
	var da = befDate >= 10 ? befDate : '0' + befDate;
	return beforeDat.getFullYear() + "" + mon + "" + da;

}

function fastSelectExpressDay(field, val) {

	if (val.indexOf(">") == 0) {

		var newDate = getAftTime(val.substr(1));
		return field + " " + val.substr(0, 1) + " " + "'" + (newDate) + "'";

	} else if (val.indexOf("<") == 0) {

		var newDate = getBefTime(val.substr(1));
		return field + " " + val.substr(0, 1) + " " + "'" + (newDate) + "'";

	} else if (val.indexOf("-") >= 0 || val.indexOf("-") >= 0) {

		var v = val.split("-");
		var express = "";

		if (v[0] != null && v[0] != "") {
			express += field + " >= '" + (getAftTime(v[0])) + "' ";
		}

		if ((v[0] != null && v[0] != "") && (v[1] != null && v[1] != "")) {
			express += " AND ";
		}

		if (v[1] != null && v[1] != "") {
			express += field + " <= " + "'" + (getAftTime(v[1])) + "'";
		}

		return express;

	}

}

function fastSelectExpressInput(field, val) {

	var v = val.split("-");
	var express = "";

	if (v[0] != null && v[0] != "") {
		express += field + " >= '" + (v[0]) + "' ";
	}

	if ((v[0] != null && v[0] != "") && (v[1] != null && v[1] != "")) {

		express += " AND ";

	}

	if (v[1] != null && v[1] != "") {
		express += field + " <= " + "'" + (v[1]) + "'";
	}

	return express;

}

function fastSelectExpress(field, val) {

	if (val.indexOf("y") == 0) {

		val = val.substr(2);
		return fastSelectExpressY(field, val);

	} else if (val.indexOf("sum") == 0) {

		val = val.substr(4);
		return fastSelectExpressSum(field, val);

	} else if (val.indexOf("day") == 0) {

		val = val.substr(4);
		return fastSelectExpressDay(field, val);

	} else if (val.indexOf("input") == 0) {

		// input:y:2-5-
		val = val.substr(6);
		return fastSelectExpress(field, val);

	} else {
		return field + " = " + "'" + val + "'";
	}

}

function setPosition(obj, offset) {
	if (obj == null) {
		return;
	}

	var pos = $(obj).getCursorPosition();
	// console.log(pos);

	if (offset != null) {
		pos = pos - 0 + offset;
	}

	$("#expressSign").val(pos);
}

function setPositionToEnd() {
	var len = $("#expressCN").val().length + 1;
	$("#expressSign").val("" + len);
}

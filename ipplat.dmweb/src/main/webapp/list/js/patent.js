// 过滤器
var angularApp;
if (typeof (angular) != "undefined" && angular != null) {
	angularApp = angular.module('patentApp', []);
	angularApp.filter('subTime', function() {
		return function(input) {
			if (input != null && input != "") {
				return input.substr(0, 10);
			} else {
				return "";
			}
		}

	});

	angularApp.filter('dateFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				// 20150408104240
				return input.substr(0, 4) + "." + input.substr(4, 2) + "." + input.substr(6, 2) + " " + input.substr(8, 2) + ":" + input.substr(10, 2);
			} else {
				return "";
			}
		}
	});

	angularApp.filter('numFilter', function() {
		return function(input) {
			if (input == "0") {
				return "";
			} else {
				return input;
			}
		}
	});

	angularApp.filter('filterTra', function() {
		return function(input) {
			if (input == "1") {
				return "近似检索";
			} else {
				return "";
			}
		}
	});
}


// 生成表达式和追加表达式
$(".generateExpress").click(function() {

	// 对应库
	var m_str = "";

	// 快捷
	var fe_str = getShortcutExpress();

	m_str = getFieldExpress(m_str);

	if (fe_str != null && fe_str != "" && m_str != null && m_str != "") {
		m_str += " AND " + fe_str;
	} else if (m_str == null || m_str == "") {
		m_str = fe_str;
	}

	// layer.alert('m_str***'+m_str);
	$("#expressCN").val(m_str);
});

$(".appendExpress").click(function() {

	var m_str = "";
	m_str = getFieldExpress(m_str);

	if (m_str == "") {
		return;
	}

	if ($("#expressCN").val() != null && $.trim($("#expressCN").val()) != "") {

		m_str = " AND " + m_str;
	}

	$("#expressCN").val($("#expressCN").val() + " " + m_str);
});

/* 生成表达式 然后跳转页面进行检索 */
$("#submitExpress").click(
		function() {
			/* 需要选择库 找到选中的数据库 */
			objCheckbox = document.getElementsByName("database");
			var checkVal = [];
			$("input:checkbox[name='database']").each(function() {
				if (this.checked == true) {
					checkVal.push($(this).val());
				}
			});
			if (checkVal.length == 0) { 
				 $.fz_common.alert("错误", "请先选择检索库，再进行检索");
				return;
			}
			
			var m_str = "";
			// 快捷
			var fe_str = getShortcutExpress();
			m_str = getFieldExpress(m_str);

			if (fe_str != null && fe_str != "" && m_str != null && m_str != "") {
				m_str += " AND " + fe_str;
			} else if (m_str == null || m_str == "") {
				m_str = fe_str;
			}

			if(!m_str){
				$.fz_common.alert("错误", "请输入关键字，再进行检索");
				return;
			}
			// (申请号=(11) AND 名称=(333) );;中国实用新型,中国授权
			var urlfinal = "patentlist.html?ex="
					+ encodeURIComponent(m_str) + "&pdb=("+checkVal + ")";
			window.open(urlfinal);   

		}); // click end

/* 回车检索 */
function keysearch(event) {
	event = event || window.event;
	var keyCode = event.keyCode;
	if (keyCode == 13) // 回车键的键值为13
		$('#submitExpress').click();
}

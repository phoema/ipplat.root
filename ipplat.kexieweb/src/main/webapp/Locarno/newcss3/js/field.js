//字段
var _filedInit = function(){
	this.init = function(){
		$(document).click(function() {
			$(".andWindow").addClass("displayNone");
		});

		// 出现逻辑与,选择后赋值
		var oldThis = null;
		$(".logicAnd").click(function(evt) {
			$("#fieldMorePages").addClass("displayNone");
			oldThis = this;
			var position = $(this).position();
			$(".andWindow").css("position", "absolute");
			$(".andWindow").css("left", position.left - 45 + "px");
			$(".andWindow").css("top", position.top - 42 + "px");
			$(".andWindow").removeClass("displayNone");
			$(".selLogic").click(function(event) {
				$(".andWindow").addClass("displayNone");
				var $value = $(this).val();
				var node = oldThis;
				node.value = $value;
				$("#sign").val($value);
				return false;

			});
			return false;
		});

		// 提示文本显示与隐藏
		$(".describeInfo").click(function() {
			var position = $(this).offset();
			var txt = $(this).parent().parent().parent().find(".RequestNum:first-child span").text();
			if(txt == null || txt == ""){
				//语义检索的样式不为RequestNum，设为RequestNumNoLine重新获取
				txt = $(this).parent().parent().parent().find(".RequestNumNoLine:first-child span").text();
			}
			if (txt == null || txt == "") {
				var index = $(this).parent().parent().index() - 2;
				txt = $($(this).parent().parent().parent().children()[index]).find(".queryField").text();
			}
			/*if (txt == null || txt == "" || helpMessage[txt] == null || helpMessage[txt] == "") {
				txt = "empty";
				$("#showDecInfo").addClass("displayNone");
				return;
			}*/
			//软件著作和作品著作同有登记号，这里是为了提示不同信息
			if(txt == "登记号" && freezeTxnAction == "WProductionTable"){
				txt = "作品著作权登记号";
			}
			if(txt == null || txt == ""){
				txt = "empty";
				$("#showDecInfo").addClass("displayNone");
				return;
			}else{
				if($("#helpTxt").length>0&&helpMessage[txt] != null&&helpMessage[txt] !=""){
					$("#showDecInfo").css("position", "absolute");
					$("#showDecInfo").css("left", position.left - 260 + "px");
					$("#showDecInfo").css("top", position.top - 30 + "px");
					$("#helpTxtTitle").html(txt);//专利提示代码集
					$("#helpTxt").html(helpMessage[txt]);
					$("#showDecInfo").removeClass("displayNone");
				}else if($("#unhelpTxt").length>0&&unHelpMessage[txt] != null&&unHelpMessage[txt] !=""){
					$("#showDecInfo").css("position", "absolute");
					$("#showDecInfo").css("left", position.left - 260 + "px");
					$("#showDecInfo").css("top", position.top - 30 + "px");
					$("#unhelpTxtTitle").html(txt);
					$("#unhelpTxt").html(unHelpMessage[txt]);//非专利提示代码集
					$("#showDecInfo").removeClass("displayNone");
				}else{
					txt = "empty";
					$("#showDecInfo").addClass("displayNone");
					return;
				}
			}
		

		});

		$(".closeDecInfo").click(function() {
			// $("#showDecInfo").hide();
			$("#showDecInfo").addClass("displayNone");
		});

		// 字段输入框事件
		$(".seaInput,.seaInput2").focus(function() {
			var inputBg = $(this).parent().parent(); // inputDiv
			inputBg.removeClass("inputBgNormal");
			inputBg.addClass("inputBgPress");
			$(this).parent().parent().prev().removeClass("inputLeftNomal"); // 左边的img
			$(this).parent().parent().prev().addClass("inputLeft_p");

		});

		// 联想
		ckmTypeahead('.seaInput');

		// 字段输入框事件-失去焦点
		$(".seaInput,.seaInput2").blur(function() {

			// 用户自定义配置是否预检索
			if (pre_search_set == "2") {
				return;
			}

			var jg = $(this).val();

			if (jg == "%") {
				$(this).val("");
				jg = "";
			}

			var inputBg = $(this).parent().parent(); // inputDiv
			inputBg.removeClass("inputBgPress");
			inputBg.addClass("inputBgNormal");
			$(this).parent().parent().prev().removeClass("inputLeft_p"); // 左边的img
			$(this).parent().parent().prev().addClass("inputLeftNomal");

			var seaNumTipNode = $(this).parent().next().children().get(0); // 提示条数

			if (jg.length == 0) {
				$(seaNumTipNode).addClass("displayNone");
				$(seaNumTipNode).next().addClass("displayNone"); // 清空符
			} else {
				$(seaNumTipNode).removeClass("displayNone");
				$(seaNumTipNode).next().removeClass("displayNone");

				// 预检索数量
				var query = $.trim(jg);
				var col = $.trim($(this).attr("title"));

				// 对应库
				var exp = getLibsExpress();
				if (exp == "" && freezeTxnAction != "DecisionTable" 
					&& freezeTxnAction != "RefereeTable" && freezeTxnAction != "LawsTable" 
					&& freezeTxnAction != "WRegistrationTable" && freezeTxnAction != "TRegistrationTable"
					&& freezeTxnAction != "CRegistrationTable" && freezeTxnAction != "ARegistrationTable"
					&& freezeTxnAction != "URegistrationTable" && freezeTxnAction != "WProductionTable") {
					$(seaNumTipNode).html("共0条");
					return;
				}

				// 快捷
				var fe_str = getShortcutExpress();
				fe_str = "";
				// 字段表达式
				// 专利

				if (freezeTxnAction == "PatentTableSea") {
					var index = $(this).parent().parent().parent().parent().parent().index();
					exp = getFieldExpress(exp, "#tabOpenDay tr:nth-child(" + (index - 0 + 1) + ")");
				}
				// 非专利
				else {
					var index = $(this).parent().parent().parent().parent().index();
					exp = getFieldExpress2(exp, $(this).parent().parent().parent().parent().parent(), index);
				}

				if (fe_str != null && fe_str != "" && exp != null && exp != "") {
					exp += " AND " + fe_str;
				} else if (exp == null || exp == "") {
					exp = fe_str;
				}

				// 对加号进行编码 否则提交成空格 注意顺序 先编码后替换
				exp = encodeURIComponent(exp);
				if (exp != "") {
					$.ajax({
						type : "POST",
						dataType : "xml",
						url : "/" + rootPath + preQueryAction,
						data : "select-key:expressCN=" + exp,
						success : function(data) {
							var record = $.fz_common.getXmlNodeValues(data, "context>record");
							var count = $.trim($(record).find("count").text());
							if (count != "") {
								if (count.length >= 4) {
									$(seaNumTipNode).html("共" + count + "条");
								} else {
									$(seaNumTipNode).html("共" + count + "条");
								}
							}
						}
					});

				}

			}

		});

		// 删除字段
		$(".openDayDelete").click(function() {
			$(this).parent().parent().parent().remove();
		});

		// 预检索删除按钮
		// 输入框清空按钮
		$(".inputClear").attr("src", "/" + rootPath + "module/di/img/public/inputClear.png");
		// 清空输入内容
		$(".inputClear").click(function() {
			var node = $(this).parent().parent().children().get(0); // inputDiv
			$($(node).children().get(0)).val(""); // 输入框
			$($(node).next().children().get(0)).addClass("displayNone"); // 提示条数
			$(this).addClass("displayNone");
			return false;
		});
	}
}
var initFiled = new _filedInit();
$(document).ready(function() {
	initFiled.init();
});

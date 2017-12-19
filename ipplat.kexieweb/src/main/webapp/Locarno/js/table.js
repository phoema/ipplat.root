//预检索地址
var preQueryAction = "txnPatentPreQuery.ajax";

if (freezeTxnAction == "DecisionTable") {
	preQueryAction = "txnDecisionPreQuery.ajax";
}
// 预检索地址
if (freezeTxnAction == "TrademarkTable") {
	preQueryAction = "txnTradeMarkQuery.ajax";
}
if (freezeTxnAction == "StandardTable") {
	preQueryAction = "txnStandardQuery.ajax";
}
if (freezeTxnAction == "PeriodicalTable") {
	preQueryAction = "txnPeriodicalQuery.ajax";
}
if (freezeTxnAction == "LawsTable") {
	preQueryAction = "txnLawsPreQuery.ajax";
}
if (freezeTxnAction == "RefereeTable") {
	preQueryAction = "txnRefereePreQuery.ajax";
}

// 检索地址

var queryAction = "txnPatentImgTextList.do";

if (freezeTxnAction == "DecisionTable") {
	queryAction = "txnDecisionList.do";
}
// 商标
if (freezeTxnAction == "TrademarkTable") {
	queryAction = "txnTradeMarkList.do";
}
// 期刊
if (freezeTxnAction == "PeriodicalTable") {
	queryAction = "txnPeriodicalList.do";
}
// 标准
if (freezeTxnAction == "StandardTable") {
	queryAction = "txnStandardList.do";
	$(".hybzkcont span").each(function() {
		$(this).addClass("standardbzk");
	});
	$(".gjbzkcont span").each(function() {
		$(this).addClass("standardbzk");
	});
	$(".gwbzkcont span").each(function() {
		$(this).addClass("standardbzk");
	});
	$(".jlgfbzkcont span").each(function() {
		$(this).addClass("standardbzk");
	});
}
if (freezeTxnAction == "LawsTable") {
	queryAction = "txnLawsList.do";
}
if (freezeTxnAction == "RefereeTable") {
	queryAction = "txnRefereeList.do";
}

$(document).ready(function() {

	// 失去焦点
	$(document).click(function() {

	});

	// 选择库通用代码
	{
		$("#searchLibs .libClass").click(function() {
			var ids = $(this).attr("v").split(";");
			var common = $(this).attr("common");
			var checkds = $('#searchLibs .libClass:checkbox[name=standardLibs]:checked');
			var commons = common.split(";");
			if (checkds.length == 0) {
				$("#_similary").attr("disabled", false);
				$("#_similaryText").css("color", "#000");
				$("#" + commons[0]).removeClass("disabled-lable");
				$("#" + commons[0]).parent().prev().find("input").attr("disabled", false);
				$("#" + commons[1]).removeClass("disabled-lable");
				$("#" + commons[1] + " input[type='text']").css("background-color", "#fff").css("color", "#555555").attr("disabled", false);
				$("#" + commons[1] + " .inputRequestplus ").removeClass("displayNone");
				if ($(this).attr("v") != "") {
					tradeMarkLibContr(this, ids)
				}

			} else {
				$("#_similary").attr("checked", false);
				$("#_similaryText").css("color", "#999");
				$("#_similary").attr("disabled", true);
				$("#" + commons[0]).addClass("disabled-lable");
				$("#" + commons[0]).parent().prev().find("input").attr("disabled", true);
				$("#" + commons[1]).addClass("disabled-lable");
				$("#" + commons[1] + " input[type='text']").css("background-color", "#999").css("color", "#fff").attr("disabled", true).val("");
				$("#" + commons[1] + " .inputRequestplus ").addClass("displayNone");
				if ($(this).attr("v") != "") {
					tradeMarkLibContr(this, ids)
				}
			}

		});
	}
	//期刊页面的全选效果
	{
		$("#standardLib1Journalall").click(function() {
			if ($(this).prop("checked")) {
				$(".journaltype").each(function() {
					$(this).prop("checked", true);
				});
			} else {
				$(".journaltype").each(function() {
					$(this).prop("checked", false);
				});
			}
		});
	}
	//
	{
		$("#searchLibsJournal span input").click(function() {
			var choosenum = 0;
			var num = 0;
			var flag = true;
			$("#searchLibsJournal span input").each(function() {
				if (num != 0) {
					if (!$(this).prop("checked")) {
						flag = false;
						choosenum++;
					}
				}
				num++;
			});
			if (flag) {
				$("#standardLib1Journalall").prop("checked", true);
			} else {
				$("#standardLib1Journalall").prop("checked", false);
			}
			if (choosenum == 11) {
				$.fz_common.alert("没有选择检索库", "请选择检索库");
			}
		});
	}
	//标准页面的库选择效果

	{
		$("#libatyAll").click(function() {
			if ($("#libatyAll").prop("checked")) {
				$(".standardtit input").each(function() {
					$(this).prop("checked", true);
				});
			} else {
				$(".standardtit input").each(function() {
					$(this).prop("checked", false);
				});
			}
			if ($("#standardLib2standardhangye").prop("checked")) {
				$(".hybzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".hybzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}

			if ($("#standardLib3standardguoji").prop("checked")) {
				$(".gjbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".gjbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}

			if ($("#standardLib4standardguowai").prop("checked")) {
				$(".gwbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".gwbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}

			if ($("#standardLib5standardjiliang").prop("checked")) {
				$(".jlgfbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".jlgfbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}
		});

		$(".standardtit input").click(function() {
			checkAll();
		});

		$(".hybzkcont span").click(function() {
			var thisclass = $(this).attr("class");
			//原来样式为空，说明这次是点击选取的
			if (thisclass == "") {
				var total1 = $(".hybzkcont span").size();
				var total2 = $(".hybzkcont .standardbzk").size() + 1;
				if (total1 == total2) {
					$("#standardLib2standardhangye").prop("checked", true);
					checkAll();
				}
			} else {
				$("#standardLib2standardhangye").prop("checked", false);
				checkAll();
			}
		});
		$(".gjbzkcont span").click(function() {
			var thisclass = $(this).attr("class");
			//原来样式为空，说明这次是点击选取的
			if (thisclass == "") {
				var total1 = $(".gjbzkcont span").size();
				var total2 = $(".gjbzkcont .standardbzk").size() + 1;
				if (total1 == total2) {
					$("#standardLib3standardguoji").prop("checked", true);
					checkAll();
				}
			} else {
				$("#standardLib3standardguoji").prop("checked", false);
				checkAll();
			}
		});
		$(".gwbzkcont span").click(function() {
			var thisclass = $(this).attr("class");
			//原来样式为空，说明这次是点击选取的
			if (thisclass == "") {
				var total1 = $(".gwbzkcont span").size();
				var total2 = $(".gwbzkcont .standardbzk").size() + 1;
				if (total1 == total2) {
					$("#standardLib4standardguowai").prop("checked", true);
					checkAll();
				}
			} else {
				$("#standardLib4standardguowai").prop("checked", false);
				checkAll();
			}
		});
		$(".jlgfbzkcont span").click(function() {
			var thisclass = $(this).attr("class");
			//原来样式为空，说明这次是点击选取的
			if (thisclass == "") {
				var total1 = $(".jlgfbzkcont span").size();
				var total2 = $(".jlgfbzkcont .standardbzk").size() + 1;
				if (total1 == total2) {
					$("#standardLib5standardjiliang").prop("checked", true);
					checkAll();
				}
			} else {
				$("#standardLib5standardjiliang").prop("checked", false);
				checkAll();
			}
		});
	}

	{

		$("#standardLib2standardhangye").click(function() {
			if ($(this).prop("checked")) {
				$(".hybzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".hybzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}
		});
		$("#standardLib3standardguoji").click(function() {
			if ($(this).prop("checked")) {
				$(".gjbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".gjbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}
		});
		$("#standardLib4standardguowai").click(function() {
			if ($(this).prop("checked")) {
				$(".gwbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".gwbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}
		});
		$("#standardLib5standardjiliang").click(function() {
			if ($(this).prop("checked")) {
				$(".jlgfbzkcont span").each(function() {
					$(this).addClass("standardbzk");
				});
			} else {
				$(".jlgfbzkcont span").each(function() {
					$(this).removeClass("standardbzk");
				});
			}
		});
	}

	//点击span时选中和取消
	{
		$(".bzkcontent span").click(function() {
			$(this).toggleClass("standardbzk");
		});
	}

	// 代码集弹出窗口
	{
		function setCodeSetEvent(obj) {
			obj.click(function() {
				var name = $(this).parent().parent().parent().parent().prev().children().text();
				callBackText = $(this).parent().prev().children()[0];
				$(".conditionsItem,.linker").remove();// 清空下面展示区选择内容
				$(".conditionsItempan,.linker").remove();// 清空下面展示区选择内容//
				$(".btnGrid").addClass("displayNone");// 检索页面时（加入检索按钮）
				$("#winType").val("table");
				// 扩展词表
				if (name == "标准号" || name == "标准名称" || name == "发布单位" || name == "起草人" || name == "起草单位" || name == "使用范围") {

					codeSetWinCommon("#WordSelectwindow");
					system_synonym = new Array();
					person_synonym = new Array();
					system_crossLanguage = new Array();
					person_crossLanguage = new Array();
					expressionText = $(obj).parent().prev().children("input");
					//loadUserData();
				}

				// 尼斯分类
				else if (name == "尼斯分类") {
					var usa = false;
					var china = false;
					var mad = false;

					// 删除下面展示区内容
					$(".btnGrid").addClass("displayNone");// 检索页面时（加入检索按钮）
					$("input[name='standardLibs']").each(function(index) {
						if ($(this).attr("id") == "standardLib1") {

							china = $(this).prop("checked");
						}
						if ($(this).attr("id") == "standardLib2") {
							usa = $(this).prop("checked");
						}
						if ($(this).attr("id") == "standardLib3") {
							mad = $(this).prop("checked");
						}

					});
					//美国
					if (usa == true && china == false && mad == false) {
						codeSetWinCommon("#NiceUsaWindow");
						grid_Query2(mGrid_gridNiceUsa_obj, "NiceUsaWindow", "", "2");
					}

					else {
						codeSetWinCommon("#NiceWindow");
						$("#nclanguage").val("1");
						grid_Query2(mGrid_gridNice_obj, "NiceWindow", "", "1");

					}

					$(".typePage").removeClass("displayNone");
				}

				// 类似群号
				else if (name == "类似群号") {

					$('.radioCatergoriesDiv').click();//语言栏
					initZTree($("#niceGroupTreeDemo"), setting, zNiceClassGroupCnNodes, "nicegroupjson/niceclassgroup", 1);
					$(".typePage").removeClass("displayNone");
					codeSetWinCommon("#NiceGroupWindow");
				}

				// 中国标准分类号(CCS)
				else if (name == "中国标准分类号(CCS)") {

					initZTree($("#ccsTreeDemo"), setting, zCcsNodes, "ccsjson", 1);
					$(".typePage").removeClass("displayNone");
					codeSetWinCommon("#CCSWindow");
				}

				// 国际标准分类号(ICS)
				else if (name == "国际标准分类号(ICS)") {

					$('.radioCatergoriesDiv').click();//语言栏
					initZTree($("#icsTreeDemo"), setting, zZhIcsNodes, "icsjson", 1);
					$("#ICSWindow .typePage").removeClass("displayNone");
					codeSetWinCommon("#ICSWindow");
				}

				//决定结果
				else if (name == "决定结果") {

					$("#decideTitle").text("决定结果查询");
					$("#decideWindow .btnGrid").removeClass("displayNone");// 检索页面时（加入检索按钮）
					codeSetWinCommon("#decideWindow");
					mGrid_gridPtype_obj.opt.action = "/txnGetDecideResult.ajax";
					mGrid_gridPtype_obj.query(1, function() {// 异步加载
						$("#decideList .patentType").removeClass("displayNone");

					});
				}

				//专利类型
				else if (name == "专利类型") {

					$("#decideTitle").text("专利类型查询");
					$("#decideWindow .btnGrid").removeClass("displayNone");// 检索页面时（加入检索按钮）
					codeSetWinCommon("#decideWindow");
					mGrid_gridPtype_obj.opt.action = "/txnGetPatentTypeList.ajax";
					mGrid_gridPtype_obj.query(1, function() {// 异步加载
						$("#decideList .patentType").removeClass("displayNone");

					});
				}

				//决定类型
				else if (name == "决定类型") {

					$("#decideTitle").text("决定类型查询");
					$("#decideWindow .btnGrid").removeClass("displayNone");// 检索页面时（加入检索按钮）
					codeSetWinCommon("#decideWindow");
					mGrid_gridPtype_obj.opt.action = "/txnGetDeciDeTypeList.ajax";
					mGrid_gridPtype_obj.query(1, function() {// 异步加载
						$("#decideList .patentType").addClass("displayNone");

					});
				}

				//法院名称
				else if (name == "法院名称") {

					$(".typePage").removeClass("displayNone");
					initZTree($("#courtTreeDemo"), setting, zCourtNodes, "courtareajson", 1);
					codeSetWinCommon("#CourtAreaWindow");
				}

				//洛迦诺
				else if (name == "洛迦诺") {

					$('#LocanoWindow .radioCatergoriesDiv').click();//语言栏
					$("#LocanoWindow .typePage").removeClass("displayNone");
					initZTree($("#locanoTreeDemo"), setting, zZhLocanoNodes, "locanojson", 1);
					codeSetWinCommon("#LocanoWindow");
				}

				//中图分类
				else if (name == "中图分类") {

					$("#CnlibWindow .typePage").removeClass("displayNone");
					initZTree($("#cnlibTreeDemo"), setting, zCnlibNodes, "cnlibjson", 1);
					codeSetWinCommon("#CnlibWindow");
				}

				//科学分类
				else if (name == "学科分类") {

					$('#SfxWindow .radioCatergoriesDiv').click();//语言栏
					$("#SfxWindow .typePage").removeClass("displayNone");
					initZTree($("#sfxTreeDemo"), setting, zZhSfxNodes, "sfxjson", 1);
					codeSetWinCommon("#SfxWindow");
				}

				//JCR分类
				else if (name == "JCR分类") {

					$(".typePage").removeClass("displayNone");
					initZTree($("#jcrTreeDemo"), setting, zJcrNodes, "jcrjson", 2);
					codeSetWinCommon("#JcrWindow");
				}

				//CJCR分类
				else if (name == "CJCR分类") {

					$("#CjcrWindow .typePage").removeClass("displayNone");
					initZTree($("#cjcrTreeDemo"), setting, zCjcrNodes, "cjcrjson", 1);
					codeSetWinCommon("#CjcrWindow");
				}

				//ASJC分类
				else if (name == "ASJC分类") {

					$(".typePage").removeClass("displayNone");
					initZTree($("#asjcTreeDemo"), setting, zAsjcNodes, "asjcjson", 2);
					codeSetWinCommon("#AsjcWindow");
				}

				// IPC
				else if (name == "IPC") {

					$("#IpcResult").addClass("displayNone");// ipc统计
					initTypeRadio("IPCwindow");
					$("#IPCwindow .typePage").removeClass("displayNone");
					initZTree($("#ipcTreeDemo"), setting, zIPCCnNodes, "ipcjson", 1);
					codeSetWinCommon("#IPCwindow");
				}

				// 公司代码
				else if (name == "专利申请人" || name == "专利权人" || name == "当前权利人" || name == "相关权利人") {

					$("#companySysDiv").removeClass("displayNone");//
					treeShow($(".comSysRightResult"), $(".sqrContentText"));//
					codeSetWinCommon("#companyWindow");

				}

			});

		}

		setCodeSetEvent($(".inputRequestplus"));
	}

	// 标准的展开窗口
	{
		// 行业标准库
		$(".hybzk").click(function() {
			$(".hybzkcont").slideToggle("fast", function() {
				if ($(this).is(':hidden')) {
					$(".hybzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addplus.png) 1px 1px no-repeat")
				} else {
					$(".hybzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addminut.png) 1px 1px no-repeat");
				}
			});
			return false;
		});
		// 国际标准库
		$(".gjbzk").click(function() {
			$(".gjbzkcont").slideToggle("fast", function() {
				if ($(this).is(':hidden')) {
					$(".gjbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addplus.png) 1px 1px no-repeat")
				} else {
					$(".gjbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addminut.png) 1px 1px no-repeat");
				}
			});
			return false;
		});

		// 国外标准库
		$(".gwbzk").click(function() {
			$(".gwbzkcont").slideToggle("fast", function() {
				if ($(this).is(':hidden')) {
					$(".gwbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addplus.png) 1px 1px no-repeat")
				} else {
					$(".gwbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addminut.png) 1px 1px no-repeat");
				}
			});
			return false;
		});

		// 计量规程规范
		$(".jlgfbzk").click(function() {
			$(".jlgfbzkcont").slideToggle("fast", function() {
				if ($(this).is(':hidden')) {
					$(".jlgfbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addplus.png) 1px 1px no-repeat")
				} else {
					$(".jlgfbzk").css("background", "url(/" + rootPath + "module/di/img/nonpatent/Standard/addminut.png) 1px 1px no-repeat");
				}
			});
			return false;
		});
	}

	// 生成表达式追加表达式
	{
		// 重置功能
		$(".reSetExpress").click(function() {

			$(".inputClear").click();

		});

		// 生成表达式和追加表达式
		$(".generateExpress").click(function() {

			var express = "";

			// 快捷
			var se_str = getShortcutExpress();
			// 字段
			var fe_str = getFieldExpress3("");

			if (fe_str != null && fe_str != "" && se_str != null && se_str != "") {
				express = fe_str + " AND " + se_str;
			} else if (se_str == null || se_str == "") {
				express = fe_str;
			} else if (fe_str == null || fe_str == "") {
				express = se_str;
			}

			$("#expressCN").val(express);

		});

		$(".appendExpress").click(function() {
			var m_str = "";

			// 字段
			m_str = getFieldExpress3(m_str);

			if (m_str == "") {
				return;
			}

			if ($("#expressCN").val() != null && $.trim($("#expressCN").val()) != "") {

				m_str = " AND " + m_str;
			}

			$("#expressCN").val($("#expressCN").val() + " " + m_str);
		});

		// 生成表达式然后检索
		$("#submitExpress").click(function() {

			// 对应库
			var libs_str = getLibsExpress();
			if (libs_str == "" && (freezeTxnAction != "DecisionTable") && (freezeTxnAction != "RefereeTable") && (freezeTxnAction != "LawsTable")) {
				$.fz_common.alert("没有选择检索库", "请选择检索库");
				return;
			}
			
			// 表达式编辑框
			var expressTxt = $("#expressCN").val();

			// 对应字段表达式
			var field_str_tmp = getFieldExpress3("");

			// 快捷检索
			var se_str = getShortcutExpress();

			if (field_str_tmp == "" && expressTxt == "" && se_str == "") {
				$.fz_common.alert("提示", "没有填写任何查询项");
				return;
			}

			var preCheckExpress = field_str_tmp;
			if (expressTxt != "") {
				preCheckExpress = expressTxt;
			}

			// 所有表达式
			if (expressTxt == "") {

				if (field_str_tmp != null && field_str_tmp != "" && se_str != null && se_str != "") {
					expressTxt = field_str_tmp + " AND " + se_str;
				} else if (se_str == null || se_str == "") {
					expressTxt = field_str_tmp;
				} else if (se_str != null && se_str != "") {
					expressTxt = se_str;
				}

			}

			var checkstr = encodeURIComponent(expressTxt);

			//是否进行近似检索
			var similary = "";
			var isSimilary="";
			if ($("#_similary").prop("checked")) {
				isSimilary="true";
				if (expressTxt == "" || expressTxt == null) {
					if ($("#MNOText").val() != "") {
						similary = $("#MNOText").val();
					}
				} else {
					var match;
					var regExp = null;
					regExp = /(商标名称)(.*?)(\()(.*?)(\))/gi;
					while (match = regExp.exec(expressTxt)) {
						similary += " " + match[4];
					}
				}
			}
			// 检查表达式 
			 var finalex=expressTxt+ " AND ("+libs_str+")";	 
			 
window.location.href="trademarklist.htm?ex="+encodeURIComponent(finalex);
			

		});

	}

	{
		// 重置功能
		$(".reSetExpress").click(function() {
			 
			$(".seaInput").val("");
			$(".seaInput2").val("");
			$(".OpenDay").addClass("displayNone");
			$(".OpenDayChoose").each(function() {
				if (!$(this).hasClass("copyTr")) {
					$(this).remove();
				}
			});

			$("#BtnexpandMoreSpan").text("展开更多");
			$("#BtnexpandMoreSpan").removeClass("letterSpace2em");
			$(".inputClear").click();

			var i = 0;
			var idList = "applier;nameAndText;ANODay;nameAndTextAndBook;IPCNum;applyNum;ANONum";
			var IDList = idList.split(";");
			$(".AddfieldMorePages").each(function() {

				if (i >= 7) {
					return;
				}

				if ($(this)[0].previousElementSibling != null) {
					imgPreNode = $(this)[0].previousElementSibling;
				} else {
					imgPreNode = $(this)[0];
				}
				var thisObj = $("#" + IDList[i]);
				fieldMorePagesClick(thisObj);
				i++;
			});

		});

		// 重设所有占位符
		$("#queryFieldTab").find("input[type = 'text']").each(function() {

			var title = $(this).attr("title");

			var expre = placeholder[title];
			if (expre == null) {
				expre = "";
			}

			$(this).attr("placeholder", $(this).attr("placeholder") + " " + expre);

		});

	}

});
function tradeMarkLibContr(obj, ids) {
	if ($(obj).prop("checked")) {
		$("#" + ids[0]).addClass("disabled-lable");
		$("#" + ids[0]).parent().prev().find("input").attr("disabled", true);
		$("#" + ids[1]).addClass("disabled-lable");
		$("#" + ids[1] + " input[type='text']").css("background-color", "#999").css("color", "#fff").attr("disabled", true).val("");
		$("#" + ids[1] + " .inputRequestplus ").addClass("displayNone");
	} else {
		$("#" + ids[0]).removeClass("disabled-lable");
		$("#" + ids[0]).parent().prev().find("input").attr("disabled", false);
		$("#" + ids[1]).removeClass("disabled-lable");
		$("#" + ids[1] + " input[type='text']").css("background-color", "#fff").css("color", "#555555").attr("disabled", false);
		$("#" + ids[1] + " .inputRequestplus ").removeClass("displayNone");
	}

}

function checkAll() {
	var num = 0;
	var flag = true;
	$(".standardtit input").each(function() {
		if (num != 0) {
			if (!$(this).prop("checked")) {
				flag = false;
			}
		}
		num++;
	});
	if (flag) {
		$("#libatyAll").prop("checked", true);
	} else {
		$("#libatyAll").prop("checked", false);
	}
}

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


function keysearch(event) {
    event = event || window.event;
    var keyCode = event.keyCode;
    if (keyCode == 13)   //回车键的键值为13
        $('#submitExpress').click();
}

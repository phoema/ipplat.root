$(document).ready(function() {

	// 检索历史

	$(".showNumSelect_Div").click(function() {
		$("#showNumSelect_ul").show();
		$("#showNumSelect").css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");
		return false;
	});

	$("#showNumSelect_ul li").mouseover(function() {
		$("#showNumSelect_ul li").removeClass("select_item");
		$(this).addClass("select_item");
	});
	$("#showNumSelect_ul li").click(function() {
		$("#showNumSelect_ul").hide();
		$("#showNumSelect").css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");
		$("#showNumSelect").html(($(this).text()));

		var pageRow = $(this).attr("v");
		mGrid_gridHis_obj.opt.pageRow = pageRow;
		mGrid_gridHis_obj.query(1, function() {
			hisRecordComplete();
		});

		$("html,body").animate({
			scrollTop : $("#mGrid_gridHis").offset().top
		}, 500);

	});

	// 整个文档点击
	$(document).click(function() {

		// 每页显示数
		$("#showNumSelect_ul").hide();
		$("#showNumSelect").css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");

	});

	var hisNumAdd = "";

	// 检索历史勾选项后，点击AndOrNot
	$(".historyLogicAnd").click(function() {

		var logic = " " + $(this).text() + " ";

		var selectedItems = new Array();
		$("input[name='hisuuid']").each(function() {
			if ($(this).is(':checked') == true) {
				selectedItems.push($(this));
			}
		});

		if (selectedItems.length == 0) {
			$.fz_common.alert("提示", "没有选中需要合并的记录");
			return;
		}

		if (selectedItems.length == 1) {
			$.fz_common.alert("提示", "需要选择两个以上的记录进行合并");
			return;
		}

		if (selectedItems.length > 3) {
			$.fz_common.alert("提示", "请合并三个以下的记录");
			return;
		}

		var express = "";
		var library = "";
		var builder = "";
		for ( var i = 0; i < selectedItems.length; i++) {

			var id = (selectedItems[i].val());
			if (express == "") {
				express = "(" + $("#express" + id).text() + ")";
				library = $("#library" + id).attr("v");
				builder = selectedItems[i].attr("index");
				if (builder == null || builder == "" || builder == "0") {
					builder = selectedItems[i].next().text();
				}

			} else {
				express = express + logic + "(" + $("#express" + id).text() + ")";
				if ($("#library" + id).attr("v") != null && $("#library" + id).attr("v") != "") {
					if (library == "") {
						library = $("#library" + id).attr("v");
					} else {
						library = library + logic + $("#library" + id).attr("v");
					}

				}
				if (selectedItems[i].attr("index") == null || selectedItems[i].attr("index") == "" || selectedItems[i].attr("index") == "0") {
					builder = builder + logic + selectedItems[i].next().text();
				} else {
					builder = builder + logic + selectedItems[i].attr("index");
				}
			}

		}

		var fun = function() {
			mGrid_gridHis_obj.query(1, function() {
				hisRecordComplete();
			});
		}

		// 记录日志
		if (library != "") {
			library = "(" + library + ")";
		}
		saveSearchLog("", "(" + library + ")", express, builder, "", "", "", freezeTxnAction, fun);
		$("#selectAllMD5").attr("checked", false);

	});

	// 生成一条新的
	function createHisOne() {
	}

	// 检索历史展开
	$("#showHisLIst").click(function() {

		$("#selectAllMD5").attr("checked", false);
		if ($("#HisList").hasClass("displayNone")) {
			$("#HisList").removeClass("displayNone");
			$(".seaHis").removeClass("marginBottom40");
			$(".hisListImg").attr("src", "/" + rootPath + "../images//hisUp.png");
			mGrid_gridHis_obj.query(1, function() {
				hisRecordComplete();
			});
		} else {
			$("#HisList").addClass("displayNone");
			$(".seaHis").addClass("marginBottom40");
			$(".hisListImg").attr("src", "/" + rootPath + "../images//hisDown.png");
		}
	});

	// 表达式截断浮动窗口关闭
	$("#ExpressionClose").click(function() {
		$("#ExpressionWindow").addClass("displayNone");
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
		MouseWheel();
	});

	// 添加到编辑框
	$(".addToEditBtn").click(function() {
		var copy = true;
		regExp = /(SS)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec($(".ExpressText").text())) {
			copy = false;
		}
		if (copy) {
			$(".editFieldList").val($(".ExpressText").text());
			$(".ExpressionTip").html("成功添加到编辑框");
			$(".ExpressionTip").show();
			$(".ExpressionTip").fadeOut(2000);
		}
	});

 

	 
	$("#selectAllMD5").click(function() {
		var isChecked = $(this).prop("checked");
		$("input[name='hisuuid']").prop("checked", isChecked);
	});

	// 删除选中
	$(".deleteSelectAll").click(function() {

		var selectedItems = new Array();
		$("input[name='hisuuid']").each(function() {
			if ($(this).is(':checked') == true) {
				selectedItems.push($(this).val());
			}
		});

		if (selectedItems.length == 0) {
			$.fz_common.alert("提示", "没有选中记录");
			return;
		}

		var _otherFunction1 = function() {

			var selected = new Array();
			$("input[name='hisuuid']").each(function() {
				if ($(this).is(':checked') == true) {
					selected.push($(this).val());
				}
			});

			// alert (encodeURIComponent(selected.join(",")));

			$.ajax({
				type : "GET",
				dataType : "xml",
				url : "/" + rootPath + "txnDeleteHistory.ajax",
				data : "select-key:uuid=" + encodeURIComponent(selected.join(",")),
				success : function(data) {
					$.fz_common.alert("提示", "删除成功");
					mGrid_gridHis_obj.query(1, function() {
						hisRecordComplete();
					});
				},
				error : function(data) {
					$.fz_common.alert("提示", "删除失败");
				}
			});

		};

		var _otherButtons = [ "确定" ];
		var _otherButtonStyles = [ 'btn-danger' ];
		var _otherFunction = [ _otherFunction1 ];

		$.fz_common.confirm("删除历史检索记录", "确认要删除选中的全部检索记录？", null, _otherButtons, _otherButtonStyles, _otherFunction);
		$("#selectAllMD5").prop("checked", false);
	});

	// 删除所有
	$(".deleteAll").click(function() {
		var _otherFunction1 = function() {
			$.ajax({
				type : "GET",
				dataType : "xml",
				url : "/" + rootPath + "txnDeleteAllHistory.ajax",
				data : "select-key:action=" + freezeTxnAction,
				success : function(data) {
					$.fz_common.alert("提示", "删除成功");
					mGrid_gridHis_obj.query(1, function() {
						hisRecordComplete();
					});
				},
				error : function(data) {
					$.fz_common.alert("提示", "删除失败");
				}
			});
		};

		var _otherButtons = [ "确定" ];
		var _otherButtonStyles = [ 'btn-danger' ];
		var _otherFunction = [ _otherFunction1 ];

		$.fz_common.confirm("删除历史检索记录", "确认要删除选中的全部检索记录？", null, _otherButtons, _otherButtonStyles, _otherFunction);

	});

	// 检索库浮层关闭

	$("#LibrarySearchClose").click(function() {
		$("#LibrarySearchWindow").addClass("displayNone");
		$(".shielding_layer").addClass("displayNone");
		$(".bodyClass").removeClass("overflowHidden");
		MouseWheel();
	});

});

// 检索历史加载完毕
function hisRecordComplete() {

	// 表达式截断浮动窗口显示
	$(".showExpressionWnd").click(function() {
		showExpressWndOpen(this);
	});

	// 检索库浮层显示
	$(".showLibrarySearchWnd").click(function() {

		$("#LibrarySearchWindow").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$("#LibrarySearchWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		setLayerHeight();
		disabledMouseWheel();
		$(".bodyClass").addClass("overflowHidden");

		var v = $(this).attr("v") + "";
		createLibrarySearchTable(v);
	});

	$(".dochits").click(function() {
		var expressTra = $(this).attr("v");
		var searchLibary = $(this).prev().children().attr("v");
		var express = $(this).prev().prev().children(".showExpressionWnd").text();
		var txnCode1 = $("#_txnCode").val();
		var txnCode = "";
		if (typeof (queryAction) == "undefined") {
			txnCode = "txnPatentImgTextList.do";
		} else {
			txnCode = queryAction;
		}
		if (searchLibary != "") {
			if (expressTra != "" && expressTra != null) {
				expressTra = searchLibary + " AND (" + expressTra + ")";
			}
			_doTempPost("/" + rootPath + txnCode, "select-key:expressCN=" + encodeURIComponent(expressTra) + "&select-key:express=" + encodeURIComponent(express), true);
		} else {
			_doTempPost("/" + rootPath + txnCode, "select-key:expressCN=" + encodeURIComponent(expressTra) + "&select-key:express=" + encodeURIComponent(express), true);
		}
	});
}

// 表达式
function showExpressWndOpen(content) {
	$("#ExpressionWindow").removeClass("displayNone");
	var txt = $(content).text();
	$(".ExpressText").text(txt);

	var scrolltop = $(document).scrollTop();
	$("#ExpressionWindow").css("margin-top", scrolltop);
	$(".shielding_layer").removeClass("displayNone");
	setLayerHeight();
	disabledMouseWheel();
	$(".bodyClass").addClass("overflowHidden");

}

// 检索库表格生成
function createLibrarySearchTable(express) {

	var txnCode = $("#_txnCode").val();

	var result = [];
	var match;
	var regExp = null;
	// 专利历史检索库
	if (txnCode == "PatentTableSea") {
		regExp = /(PDB)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
	}
	// 商标历史检索库
	else if (txnCode == "TrademarkTable") {
		regExp = /(TMDB)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
	}
	// 期刊历史检索库
	else if (txnCode == "PeriodicalTable") {
		regExp = /(AS)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
	}
	// 标准历史检索库
	else if (txnCode == "StandardTable") {
		regExp = /(TSC)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
		regExp = /(QT\s)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
		regExp = /(ISO\s)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
		regExp = /(FS\s)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
		regExp = /(JJ\s)(.*?)(\')(.*?)(\')/gi;
		while (match = regExp.exec(express)) {
			result.push(match[4]);
		}
	}

	// 去重
	result = unique(result);

	$(".LibrarySearchTable").empty();

	if (result == null || result.length == 0) {
		$(".LibrarySearchTable").append("<tr><td colspan=\"5\" style=\"line-height: normal; padding:20px; font-weight: bold;\">当前检索选择了所有检索库。</td></tr>");
	}

	var LibrarySearchNodesLength = Math.ceil((result.length) / 5);
	for ( var i = 0; i < LibrarySearchNodesLength; i++) {
		var trNode = document.createElement("tr");
		for ( var j = 0; j < 5; j++) {
			var tdNode = document.createElement("td");
			trNode.appendChild(tdNode);

			var res = result[i * 5 + j];
			var library = "";

			// 专利历史检索库
			if (txnCode == "PatentTableSea") {
				library = patentLibrary[res];
			}
			// 商标历史检索库
			else if (txnCode == "TrademarkTable") {
				library = traLibrary[res];
			}
			// 期刊历史检索库
			else if (txnCode == "PeriodicalTable") {
				library = stdLibrary[res];
			}
			// 标准历史检索库
			else if (txnCode == "StandardTable") {
				library = iseLibrary[res];
			}

			if (library != null && library != "") {
				res = library;
			}
			if (res != null && res != "") {
				var tdButtonNode = document.createElement("button");
				if (j == "0") {
					$(tdButtonNode).addClass("searchLibraryBtn");
					$(tdButtonNode).addClass("marginLeft21");
				} else {
					$(tdButtonNode).addClass("searchLibraryBtn");
				}
				$(tdButtonNode).html(res);
				tdNode.appendChild(tdButtonNode);
			}

		}
		$(".LibrarySearchTable").append(trNode);
	}
}

function _hisRemark(obj) {

	var v = $(obj).attr("v");
	var val = $(obj).val();

	if (val == null || val == "") {
		return;
	}

	$.ajax({
		type : "GET",
		dataType : "xml",
		url : "/" + rootPath + "txnUpdataSeaHistRemark.ajax",
		data : "record:uuid=" + encodeURIComponent(v) + "&record:remark=" + encodeURIComponent(val),
		success : function(data) {
			$.fz_common.alert("提示", "备注修改成功");
		},
		error : function(data) {
			$.fz_common.alert("提示", "更新备注失败");
		}
	});

}

function addExpressTip(obj) {

	if ($(obj).hasClass("seaHistoryOperate0")) {
		var v = $(obj).attr("v") + "";
		$(".editFieldList").val($("#" + v).text());
		$("html,body").animate({

			scrollTop : $("#expressCN").offset().top
		}, 500);
	}

}

function delAddHisExp(obj) {
	var v = $(obj).attr("v") + "";
	$("#" + v).remove();
}

function delHisExp(obj) {

	var v = $(obj).attr("v") + "";

	var _otherFunction1 = function() {

		var _delHisMD5 = $("#_delHisMD5").val() + "";
		$.ajax({
			type : "GET",
			dataType : "xml",
			url : "/" + rootPath + "txnDeleteHistory.ajax",
			data : "select-key:uuid=" + encodeURIComponent(_delHisMD5),
			success : function(data) {
				$.fz_common.alert("提示", "删除成功");
				mGrid_gridHis_obj.query(1, function() {
					hisRecordComplete();
				});
			},
			error : function(data) {
				$.fz_common.alert("提示", "删除失败");

			}
		});

	};

	var _otherButtons = [ "确定" ];
	var _otherButtonStyles = [ 'btn-danger' ];
	var _otherFunction = [ _otherFunction1 ];

	$.fz_common.confirm("删除历史检索记录", "确认删除此条记录？<input type=\"hidden\" value=\"" + v + "\" id=\"_delHisMD5\" />", null, _otherButtons, _otherButtonStyles, _otherFunction);
	$("#selectAllMD5").attr("checked", false);

}

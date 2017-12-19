$(document).ready(
		function() {

			// 翻译功能
			{
				$("#languageSelect1").click(function() {
					$("#languageSelect_ul1").show();
					$($("#languageSelect_ul1").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");
				});

				$("#languageSelect2").click(function() {
					if ($("#languageSelect1").text() == "中文") {
						$("#languageSelect_ul2").show();
						$($("#languageSelect_ul2").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");
					}
				});

				$("#languageSelect_ul2 li").click(function() {
					switchSelectCommon(this);
				});

				$("#languageSelect_ul1 li").click(function() {
					switchSelectCommon(this);
					if ($("#languageSelect1").text() == "英文" || $("#languageSelect1").text() == "韩文" || $("#languageSelect1").text() == "日文") {
						$("#tgtLan").empty();
						$("#languageSelect2").text("中文");
					} else if ($("#languageSelect1").text() == "中文") {
						$("#languageSelect2").text("英文");
						$("#tgtLan").empty();
						$("#tgtLan").append('<li>英文</li>' + '<li>日文</li>' + '<li>韩文</li>');

						$("#languageSelect2").click(function() {
							$("#languageSelect_ul2").show();
							$($("#languageSelect_ul2").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");
						});
						$("#languageSelect_ul2 li").click(function() {
							switchSelectCommon(this);
						});
					}
				});

				/* 关闭翻译窗口 */
				$("#dropdown_menu_close").click(function() {
					$(".shielding_layer").addClass("displayNone");
					$(".translation").addClass("disPlayNone");
					$(".bodyClass").removeClass("overflowHidden");
					MouseWheel();
					try {
						$("#translationTxt").hideLoading();
					} catch (e) {
					}
				});

			}
			
			//如果是智能检索过来的那就隐藏到查看表达式按钮
			{
				var searchType = $("#select-key_searchType").val();
				if(searchType == "smart"){
					$("#showExpress").addClass("displayNone");
				}
			}

			$("#mGrid_patentGrid_paginator_0, #showNumSelect_ul li").click(function() {
				if ($("#selectall").hasClass("checkBoxClickBg")) {
					$("#selectall").removeClass("checkBoxClickBg");
					$("#selectall").addClass("checkBoxBg");
				}

				if ($(".selectedDoc").hasClass("cursorPointer")) {
					$(".selectedDoc img").attr("src", "/" + rootPath + "module/di/img/patent/searOverview/ic_doubleArrow2.png");
					$(".selectedDoc span").css("color", "#999999");
					$(".selectedDoc").removeClass("cursorPointer");
				}

			});

			// 自定义字段
			{

				if ($("#_txnCode").val() == "PatentTableList" || $("#_txnCode").val() == "TradMarkTableList") {
					// 列表设置按钮
					$(".btnTableListSet").click(function() {
						$(this).toggleClass("displayNone");
						$(this).prev().toggleClass("displayNone");
						return false;
					});

					// 整个文档点击
					$(document).click(function() {
						$(".tableListSet").addClass("displayNone");
						$(".btnTableListSet").removeClass("displayNone");
					});

					$("#tableListSetConfirm").click(function() {

						var column = "";
						var length = $(".tableListSetContent .checkBoxClickBg").length;
						if (length < 3) {
							$.fz_common.alert("提示", "自定义设置列表显示的内容最少显示3个");
							return false;
						} else if (length > 8) {
							$.fz_common.alert("提示", "自定义设置列表显示的内容最多显示8个");
							return false;
						}
						$(".tableListSetContent .checkBoxClickBg").each(function() {
							var v = $(this).attr("v");
							column += v + ",";
						});
						// alert(column);
						if ($("#_txnCode").val() == "PatentTableList") {
							$.cookie('patent_table_column', column);
						}

						if ($("#_txnCode").val() == "TradMarkTableList") {
							$.cookie('tra_table_column', column);
						}

						$(".table").click();

					});

					// 初始化列表设置
					function initTableListContent() {

						var column = patent_column.split(",");

						var m_node = null;
						var m_arrayListContent = new Array("申请号", "公布号", "申请日", "申请人", "公布日", "优先权号码", "同族号码", "引证专利号码", "IPC", "CPC", "UC", "FI", "FTERM", "申请人地址", "专利权人", "专利权人地址", "发明人", "代理机构",
								"代理人", "洛迦诺");

						if ($("#_txnCode").val() == "TradMarkTableList") {
							m_arrayListContent = new Array("注册号", "注册日期", "商标名称", "申请人名称", "尼斯分类", "商标类型", "申请号", "申请日期", "代理人名称", "当前权利状态");

						}

						for ( var i = 0; i < m_arrayListContent.length; i++) {

							var checkBoxBg = "checkBoxBg";

							for ( var n = 0; n < column.length; n++) {
								if (m_arrayListContent[i] == column[n]) {
									checkBoxBg = "checkBoxClickBg";
									break;
								}
							}

							m_node = $("<div class='h25Center marginLeft10 ver_alignMid'><span v='" + m_arrayListContent[i] + "' onclick='checkboxClick(this)' class='" + checkBoxBg
									+ " checkBoxStyle ver_alignMid'></span>" + "<span class='H20 marginLeft6'>" + m_arrayListContent[i] + "</span></div>");
							$(".tableListSetContent").append(m_node);
						}

						$(".tableListSetContent div").click(function() {
							return false;
						});
						$(".tableListSetContent .checkBoxStyle").click(function() {
							return false
						});

					}

					initTableListContent();

				}

			}

			// 二次检索 过滤检索
			{

				// 检索按钮
				$(".keyWord_Div").click(function() {
					$("#keyWord_ul").show();
					$("#keyWord").css("background-image", "url('/" + rootPath + "../images//btn_arrow_up.png')");
					return false;
				});
				$("#keyWord_ul li").mouseover(function() {
					$("#keyWord_ul li").removeClass("select_item");
					$(this).addClass("select_item");
				});
				$("#keyWord_ul li").click(function() {
					$("#keyWord_ul").hide();
					$("#keyWord").css("background-image", "url('/" + rootPath + "../images//btn_arrow_down.png')");
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

				// 预检索删除按钮
				// 输入框清空按钮
				$(".inputClear2").attr("src", "/" + rootPath + "IPOperate/html/search/images/inputClear.png");
				// 清空输入内容
				$(".inputClear2").click(function() {
					$(this).addClass("displayNone");
					$("#_expressCN2").val("");
					return false;
				});

				$("#_expressCN2").blur(function() {

					if ($(this).val() != null && $(this).val() != "") {
						$(".inputClear2").removeClass("displayNone");
					}
				});

				// 表达式截断浮动窗口关闭
				$("#ExpressionCopyClose").click(function() {
					$("#ExpressionCopyWindow").addClass("displayNone");
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
					MouseWheel();
				});
				// 将表达式添加到历史检索中
				$("#addHistorySecond").click(function() {
					var express = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
					var txnCode1 = $("#_txnCode").val();
					var express1 = "";
					
					if($.trim($("#select-key_express").val()) == ""){
						express1 = express;
					}else{
						express1 = $.trim($("#select-key_express").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
					}
					
					var le_str = "";
					var match;
					var regExp = null;
					// 专利历史检索库
					regExp = /(PDB)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "PDB = '" + match[4] + "' OR ";
					}
					// 商标历史检索库
					regExp = /(TMDB)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "TMDB = '" + match[4] + "' OR ";
					}
					// 标准历史检索库
					regExp = /(AS)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "AS = '" + match[4] + "' OR ";
					}
					// 期刊历史检索库
					regExp = /(TSC)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "TSC = '" + match[4] + "' OR ";
					}
					regExp = /(QT\s)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "QT = '" + match[4] + "' OR ";
					}
					regExp = /(ISO\s)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "ISO = '" + match[4] + "' OR ";
					}
					regExp = /(FS\s)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "FS = '" + match[4] + "' OR ";
					}
					regExp = /(JJ\s)(.*?)(\')(.*?)(\')/gi;
					while (match = regExp.exec(express)) {
						le_str += "JJ = '" + match[4] + "' OR ";
					}

					le_str = le_str.substring(0, le_str.length - 4);
					var expressTxt = $(".ExpressCopyText").text();
					var freezeTxnAction = txnCode[txnCode1];
					
					// 记录日志
					saveSearchLog("", "(" + le_str + ")", noLibExpress(express), "", "", "", "", freezeTxnAction, null, "", noLibExpress(express1));
					$.fz_common.alert("提示", "添加成功");
				});

			}

			// 每页显示数
			{

				$("#girdGoPage").click(function() {
					var v = $(this).attr("v");
					var page = $("#patentPageText").val();

					if ((page - 0) > (v - 0) || (page - 0) == 0) {

						alert("页数错误，请输入" + v + "及以下。");

					} else {

						mGrid_patentGrid_obj.query(page + "", function() {
							recordComplete();
						});

						// 移动到锚点
						$('html,body').animate({
							scrollTop : $('#mGrid_patentGrid').offset().top
						});

					}

					return false;
				});

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
					// 取消全选框状态
					if ($("#selectall").hasClass("checkBoxClickBg")) {
						$("#selectall").click();
						$("#selectall").removeClass("checkBoxClickBg");
						$("#selectall").addClass("checkBoxBg");
					}
					$("#selectall")
					mGrid_patentGrid_obj.opt.pageRow = pageRow;
					mGrid_patentGrid_obj.query(1, function() {
						recordComplete();
					});

					$("html,body").animate({
						scrollTop : $("#mGrid_patentGrid").offset().top
					}, 500);

				});

				// 重置每页显示数量
				// alert(mGrid_patentGrid_obj.opt.pageRow);
				var _pageRow = mGrid_patentGrid_obj.opt.pageRow;
				$("#showNumSelect").html("显示" + _pageRow + "条");

			}

			// 侧边栏
			{

				// 号单命中窗口关闭
				$(".numberHitWindowClose").click(function() {
					$("#numberHitWindow").addClass("disPlayNone");
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
					MouseWheel();
					return false;
				});

				/* 浮层公用 end */
				$(document).click(function() {
					closeAlreadySelect();
					closeToolWindow();
					closemissionListClose();

					// 尝试关闭侧边栏的loadingbar

					{

						try {
							$("#selectedDocListContent").hideLoading();
						} catch (e) {
						}

						try {
							$("#missionListContent").hideLoading();
						} catch (e) {
						}

					}

				});

				function closemissionListClose() {
					$(".btnTask").removeClass("bgRectangeLightGreen").addClass("bgRectangeWhite");
					$(".taskCircel").removeClass("bgTaskSelect").addClass("bgTaskNormal").next().removeClass("colWhite")
					$(".missionList").addClass("disPlayNone");
				}

				function openAlreadySelect() {
					var txnCode = $("#_txnCode").val() + "";
					if (txnCode.indexOf("Patent") != -1) {
						$("#selectedDocListContent").children(".alreadySelectTop").children(".patent").removeClass("itemNormal");
						$("#selectedDocListContent").children(".alreadySelectTop").children(".patent").addClass("itemSelect");
					} else if (txnCode.indexOf("TradeMark") != -1) {
						$("#selectedDocListContent").children(".alreadySelectTop").children(".trademark").removeClass("itemNormal");
						$("#selectedDocListContent").children(".alreadySelectTop").children(".trademark").addClass("itemSelect");
					} else if (txnCode.indexOf("Standard") != -1) {
						$("#selectedDocListContent").children(".alreadySelectTop").children(".standard").removeClass("itemNormal");
						$("#selectedDocListContent").children(".alreadySelectTop").children(".standard").addClass("itemSelect");
					} else if (txnCode.indexOf("Period") != -1) {
						$("#selectedDocListContent").children(".alreadySelectTop").children(".periodical").removeClass("itemNormal");
						$("#selectedDocListContent").children(".alreadySelectTop").children(".periodical").addClass("itemSelect");
					} else {
						$("#selectedDocListContent").children(".alreadySelectTop").children(".decision").removeClass("itemNormal");
						$("#selectedDocListContent").children(".alreadySelectTop").children(".decision").addClass("itemSelect");
					}
					$(".btnAlreadySelect").removeClass("bgRectangeWhite").addClass("bgRectangeOrange");
					$(".divCircel").removeClass("bgCircelOrange colWhite").addClass("bgCircelWhite colSelOrange").next().addClass("colWhite");
					$(".alreadySelectWindow").removeClass("disPlayNone");
				}

				function closeAlreadySelect() {
					$(".btnAlreadySelect").removeClass("bgRectangeOrange").addClass("bgRectangeWhite");
					$(".divCircel").removeClass("bgCircelWhite colSelOrange").addClass("bgCircelOrange colWhite").next().removeClass("colWhite");
					$(".alreadySelectWindow").addClass("disPlayNone");
				}

				// 分析按钮
				$(".buttonAnalysis2").click(
						function() {
							var txt = ($("#select-key_expressCN").val()) + " " + ($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
							var row_number = $("#contentTipNumList").text();
							_doTempPost("/" + rootPath + "txnAnalyzeRedirect.do", "select-key:row_number=" + row_number + "&select-key:express=" + encodeURIComponent(txt)
									+ "&select-key:txncode=txnSR1_3_29", true);
						});

				// 下载窗口
				var maxDownloadNum = 10000;
				// 非专利下载
				var unpatentWinDefaultheight = $(".unpatentdownloadWnd").height();

				function setDownloadPoint(patentPdfNum, type) {

					var express = $("#select-key_expressCN").val();

					$.ajax({
						type : "POST",
						dataType : "xml",
						url : "/" + rootPath + "txnGetDownloadPoint.ajax",
						data : "select-key:recordCount=" + patentPdfNum + "&select-key:type=" + type + "&select-key:express=" + encodeURIComponent(express),
						success : function(data) {

							var downloadPoint = $.fz_common.getXmlNodeValue(data, "context>record>downloadPoint");
							if (type == "pdf") {
								var pdfNum = $.fz_common.getXmlNodeValue(data, "context>record>pdfNum");
								$(".checkDownloadPoint").text("部分专利可能没有PDF文件，当前下载包含的PDF数量为" + pdfNum + "件，下载需要点数：" + downloadPoint);

							} else {
								$(".checkDownloadPoint").text("当前下载需要点数：" + downloadPoint);
							}

						}
					});

				}

				// 获取并显示下载点数
				$("#unpatentPdfNum").blur(function() {
					var unpatentPdfNum = $(this).val();

					if (unpatentPdfNum != "") {
						if ((unpatentPdfNum - 0) > maxDownloadNum) {
							unpatentPdfNum = maxDownloadNum;
							$(this).val(maxDownloadNum)
						}
						setDownloadPoint(unpatentPdfNum, encodeURIComponent(docActionType[freezeTxnAction]));
					} else {

						$(".checkDownloadPoint").text("");

					}

				});

				$(".unpatentdownload").click(function() {
					$(".unpatentdownloadWnd").removeClass("disPlayNone");
					$(".downloadContentTipNumList").text($("#contentTipNumList").text());

					var dTitle = $("#downloadUnPatentTitle").val();
					if (dTitle == "") {
						var txt = "著录项";
						$("#downloadUnPatentTitle").val(txt + getNowFormatDate());
					}

					$(".shielding_layer").removeClass("displayNone");
					var scrolltop = $(document).scrollTop();
					$(".unpatentdownloadWnd").css("margin-top", scrolltop);
					setLayerHeight();
					disabledMouseWheel();
					$(".bodyClass").addClass("overflowHidden");

				});

				// 关闭下载
				$(".closeUnpatentDownload").click(function() {
					$(".unpatentdownloadWnd").addClass("disPlayNone");
					$(".shielding_layer").addClass("displayNone");
					MouseWheel();
					$(".bodyClass").removeClass("overflowHidden");
				});

				// 下载
				$(".unpatentDownloadSubmit").click(
						function() {

							var unpatentPdfNum = $("#unpatentPdfNum").val();

							if ((unpatentPdfNum == null || unpatentPdfNum == "")) {

								$.fz_common.alert("提示", "请填写下载条数");
								return;
							}

							unpatentPdfNum = parseInt(unpatentPdfNum);

							if (unpatentPdfNum == 0) {

								$.fz_common.alert("提示", "下载条数不能为0");
								return;

							}

							if ((unpatentPdfNum - 0) > maxDownloadNum) {

								$.fz_common.alert("提示", "下载最大数不能超过" + maxDownloadNum);
								return;
							}

							if ((unpatentPdfNum - 0) > ($("#contentTipNumList").text() - 0)) {
								$.fz_common.alert("提示", "下载最大数超过最大结果集，当前的结果集总数为 " + $("#contentTipNumList").text() + "。");
								return;
							}

							var downloadUnPatentTitle = $("#downloadUnPatentTitle").val();

							if (downloadUnPatentTitle == null || downloadUnPatentTitle == "") {

								$.fz_common.alert("提示", "请填写任务名");
								return;

							}

							var column = "";
							var columnCN = "";
							var language = "";

							$(".unpatentdownloadWnd span[name='ck1']").each(function() {

								if ($(this).hasClass("checkBoxClickBg")) {
									column += $(this).attr("v") + ",";
									columnCN += $(this).next().text() + ",";
								}

							});

							if (column == "") {
								$.fz_common.alert("提示", "请选择著录项目字段");
								return;
							}

							$(".unpatentdownloadWnd span[name='downloadlanguage']").each(function() {

								if ($(this).hasClass("checkBoxClickBg")) {
									language += $(this).attr("v") + ",";

								}

							});

							var ex = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
							param = "record:selectitem=" + encodeURIComponent(column + ";" + columnCN) + "&record:recordcount=" + encodeURIComponent(unpatentPdfNum) + "&record:lang="
									+ encodeURIComponent(language) + "&record:type=" + encodeURIComponent(docActionType[freezeTxnAction]) + "&record:taskname="
									+ encodeURIComponent(downloadUnPatentTitle) + "&record:express=" + encodeURIComponent(ex);

							$(".unpatentdownloadWnd").showLoading();

							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnUnPatentDownloadJob.ajax",
								data : (param),
								success : function(data) {

									$(".unpatentdownloadWnd").hideLoading();

									var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
									if (errCode == "000000") {

										var fun = function() {
											$(".closeUnpatentDownload").click();
										}
										$.fz_common.alert("提示", "下载任务提交成功，可以在页面右侧任务栏中查看当前任务进度。", fun);

										btnTask = false;

										updateDownloadPoint(data);

									} else {

										errorDescAlert(data);
									}

								},
								error : function(data) {
									$(".unpatentdownloadWnd").hideLoading();
									$.fz_common.alert("提示", data + "", null);
								}
							});

						});

				/* 专利下载 */

				function setDownloadPatentTitle() {

					var txt = "著录项";

					if ($("#patentdownload2").hasClass("radiobuttonSelected")) {
						txt = "说明书";
					}

					$("#downloadPatentTitle").val(txt + getNowFormatDate());

					if ($("#pdfNum").val() != "") {
						var patentPdfNum = $("#pdfNum").val();
						var type = "";
						if ($("#patentdownload1").hasClass("radiobuttonSelected")) {
							type = "excel";
						} else {
							type = "pdf";
						}

						setDownloadPoint(patentPdfNum, type);

					}

				}

				var downloadDefaultheight = $(".imgtextdownloadWnd").height();

				// 获取并显示下载点数
				$("#pdfNum").blur(function() {
					var patentPdfNum = $(this).val();
					var type = "";
					if ($("#patentdownload1").hasClass("radiobuttonSelected")) {
						type = "excel";
					} else {
						type = "pdf";
					}

					if (patentPdfNum != "") {
						if ((patentPdfNum - 0) > maxDownloadNum) {
							patentPdfNum = maxDownloadNum;
							$(this).val(maxDownloadNum)
						}
						setDownloadPoint(patentPdfNum, type);
					} else {

						$(".checkDownloadPoint").text("");

					}

				});

				function updateDownloadPoint(data) {

					var downloadPoint = $.fz_common.getXmlNodeValue(data, "context>record>downloadPoint") - 0;

					var user_day_download_total_points = $($(".user_day_download_total_points")[0]).text() - 0;
					var user_use_download_points = $($(".user_use_download_points")[0]).text() - 0;

					user_day_download_total_points = user_day_download_total_points + downloadPoint;
					user_use_download_points = user_use_download_points - downloadPoint;

					$(".user_day_download_total_points").text(user_day_download_total_points);
					$(".user_use_download_points").text(user_use_download_points);
				}

				$(".download").click(function() {

					$("#pdfNum").val("");
					$(".downloadContentTipNumList").text($("#contentTipNumList").text());

					var dTitle = $("#downloadPatentTitle").val();
					if (dTitle == "") {
						setDownloadPatentTitle();
					}

					$(".imgtextdownloadWnd").removeClass("disPlayNone");

					$(".shielding_layer").removeClass("displayNone");
					var scrolltop = $(document).scrollTop();
					$(".imgtextdownloadWnd").css("margin-top", scrolltop);
					setLayerHeight();
					disabledMouseWheel();
					$(".bodyClass").addClass("overflowHidden");

					if ($("#patTriangleDown").hasClass("triangleDown")) {
						$("#patTriangleDown").click();
					}

				});

				// 关闭下载
				$(".closeimgTextDownload").click(function() {
					$(".imgtextdownloadWnd").addClass("disPlayNone");
					$(".shielding_layer").addClass("displayNone");
					MouseWheel();
					$(".bodyClass").removeClass("overflowHidden");
				});

				// 下载
				$(".patentDownload").click(
						function() {

							var param = "";
							var column = "";
							var language = "";
							var type = "";

							// 著录项目
							if ($("#patentdownload1").hasClass("radiobuttonSelected")) {

								type = "excel";

								$("span[name='ck1']").each(function() {

									if ($(this).hasClass("checkBoxClickBg")) {
										column += $(this).attr("v") + ",";
									}

								});

								$(".imgtextdownloadWnd span[name='downloadlanguage']").each(function() {

									if ($(this).hasClass("checkBoxClickBg")) {
										language += $(this).attr("v") + ",";

									}

								});

								if (language == "") {
									$.fz_common.alert("提示", "请选择著录项目语言");
									return;

								}

								if (column == "") {
									$.fz_common.alert("提示", "请选择著录项目字段");
									return;
								}

							}

							var pdfNum = $("#pdfNum").val();

							if ((pdfNum == null || pdfNum == "")) {

								$.fz_common.alert("提示", "请填写下载条数");
								return;
							}
							pdfNum = parseInt(pdfNum);

							if (pdfNum == 0) {

								$.fz_common.alert("提示", "下载条数不能为0");
								return;

							}

							// 说明书全文
							if ($("#patentdownload2").hasClass("radiobuttonSelected")) {

								type = "pdf";

							}

							if (type == "pdf" && (pdfNum - 0) > 100) {

								$.fz_common.alert("提示", "下载最大数不能超过100");
								return;
							}

							if (type == "excel" && (pdfNum - 0) > maxDownloadNum) {

								$.fz_common.alert("提示", "下载最大数不能超过" + maxDownloadNum);
								return;
							}

							if ((pdfNum - 0) > ($("#contentTipNumList").text() - 0)) {
								$.fz_common.alert("提示", "下载最大数超过最大结果集，当前的结果集总数为 " + $("#contentTipNumList").text() + "。");
								return;
							}

							var downloadPatentTitle = $("#downloadPatentTitle").val();

							if (downloadPatentTitle == null || downloadPatentTitle == "") {

								$.fz_common.alert("提示", "请填写任务名");
								return;

							}

							var ex = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
							param = "record:selectitem=" + encodeURIComponent(column) + "&record:recordcount=" + encodeURIComponent(pdfNum) + "&record:lang=" + encodeURIComponent(language)
									+ "&record:type=" + encodeURIComponent(type) + "&record:taskname=" + encodeURIComponent($("#downloadPatentTitle").val()) + "&record:express="
									+ encodeURIComponent(ex);

							$(".imgtextdownloadWnd").showLoading();

							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnPatentDownloadJob.ajax",
								data : (param),
								success : function(data) {

									checkLoginStatus(data);

									$(".imgtextdownloadWnd").hideLoading();

									var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
									if (errCode == "000000") {

										var fun = function() {
											$(".closeimgTextDownload ").click();
										}
										$.fz_common.alert("提示", "下载任务提交成功，可以在页面右侧任务栏中查看当前任务进度。", fun);

										btnTask = false;

										updateDownloadPoint(data);

									} else {
										errorDescAlert(data);

									}

								},
								error : function(data) {
									$(".imgtextdownloadWnd").hideLoading();
									$.fz_common.alert("提示", data + "", null);
								}
							});

						});

				/* 下载图层 end */

				$(".radio").click(function() {
					$(".radio").removeClass("radiobuttonSelected");
					$(".radio").addClass("radiobuttonUnselected");
					$(this).removeClass("radiobuttonUnselected");
					$(this).addClass("radiobuttonSelected");

					setDownloadPatentTitle();
				});

				$(".triangleDown1").click(function() {
					var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
					if ($(this).next().hasClass("triangleDown")) {

						closeDescription($(".description"), imgtextdownloadheight);
						openProject(this);
						return false;
					} else if ($(this).next().hasClass("triangleUp")) {
						closeProject(this);
						return false;
					} else if ($(this).hasClass("triangleDown")) {
						closeDescription($(".description"), imgtextdownloadheight);
						openProject($(this).prev());
					} else if ($(this).hasClass("triangleUp")) {
						closeProject($(this).prev());
						return false;
					}
				});

				function openProject(content) {
					var expand = $(content).next();
					var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
					$(".recordItem").removeClass("displayNone");
					$(".recordItem").addClass("displayInline");
					$(".imgtextdownloadWnd").height(imgtextdownloadheight + $(".recordItem").height());
					$(".selectDownload").removeClass("selectDownloadBorderBottom");
					expand.removeClass("triangleDown");
					expand.addClass("triangleUp");
					$(".language").removeClass("disPlayNone");
				}
				function closeProject(content) {
					var expand = $(content).next();
					var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
					$(".imgtextdownloadWnd").height(imgtextdownloadheight - $(".recordItem").height());
					$(".recordItem").addClass("displayNone");
					$(".recordItem").removeClass("displayInline");
					$(".selectDownload").addClass("selectDownloadBorderBottom");
					expand.removeClass("triangleUp");
					expand.addClass("triangleDown");
					$(".language").addClass("disPlayNone");
				}

				function openDescription(content) {
					var expand = $(content).next();
					var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
					$(".imgtextdownloadWnd").height(imgtextdownloadheight + $(".downloadTip").height());
					$(".downloadTip").removeClass("disPlayNone");
					expand.removeClass("triangleDown").addClass("triangleUp");
				}
				function closeDescription(content) {
					var expand = $(content).next();
					var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
					if (!$(".downloadTip").hasClass("disPlayNone")) {
						$(".imgtextdownloadWnd").height(imgtextdownloadheight - $(".downloadTip").height());
					}
					$(".downloadTip").addClass("disPlayNone");
					expand.addClass("triangleDown").removeClass("triangleUp");

				}

				$(".selectAllExplain").click(function() {
					if ($(this).children("div").hasClass("oneExplain")) {
						var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
						$(".explain").removeClass("displayNone");
						$(this).children("div").removeClass("oneExplain triangleDown");
						$(this).children("div").addClass("allExplain triangleUp");
						$(".imgtextdownloadWnd").height(imgtextdownloadheight + $(".explain").height());
						$(".downloadexplain").height($(".downloadexplain").height() + $(".explain").height());
						return false;
					} else if ($(this).children("div").hasClass("allExplain")) {
						var imgtextdownloadheight = $(".imgtextdownloadWnd").height();
						$(".imgtextdownloadWnd").height(imgtextdownloadheight - $(".explain").height());
						$(".downloadexplain").height($(".downloadexplain").height() - $(".explain").height());
						$(".explain").addClass("displayNone");
						$(this).children("div").removeClass("allExplain triangleUp");
						$(this).children("div").addClass("oneExplain triangleDown");
						return false;
					}
				});

				$("#selectall1,#selectall2").click(function() {

					if ($(this).hasClass("checkBoxClickBg")) {

						$(this).parent().parent().parent().find("span[name='ck1']").removeClass("checkBoxClickBg");
						$(this).parent().parent().parent().find("span[name='ck1']").addClass("checkBoxBg");

						$(this).removeClass("checkBoxClickBg");
						$(this).addClass("checkBoxBg");

					} else {
						$(this).parent().parent().parent().find("span[name='ck1']").removeClass("checkBoxBg");
						$(this).parent().parent().parent().find("span[name='ck1']").addClass("checkBoxClickBg");

						$(this).removeClass("checkBoxBg");
						$(this).addClass("checkBoxClickBg");

					}
				});

				$("span[name='ck1']").click(function() {

					if ($(this).hasClass("checkBoxClickBg")) {
						$(this).removeClass("checkBoxClickBg");
						$(this).addClass("checkBoxBg");
					} else {
						$(this).removeClass("checkBoxBg");
						$(this).addClass("checkBoxClickBg");
					}

				});

				$("span[name='downloadlanguage']").click(function() {

					if ($(this).hasClass("checkBoxClickBg")) {
						$(this).removeClass("checkBoxClickBg");
						$(this).addClass("checkBoxBg");
					} else {
						$(this).removeClass("checkBoxBg");
						$(this).addClass("checkBoxClickBg");
					}

				});

				/* 任务 */
				// 是否加载过
				var btnTask = false;
				$(".btnTask").click(function() {
					closeAlreadySelect();
					closeToolWindow();
					openTaskWindow();

					// 加载任务数据

					if (!btnTask) {

						btnTask = true;
						$(".btntask1").click();

					}

					return false;
				});

				// 任务类型下拉列表构建 task_exec_status
				$("#task_exec_type").append("<option value=''></option>");
				for ( var item in taskType) {
					$("#task_exec_type").append("<option value='" + item + "'>" + taskType[item] + "</option>");
				}

				function setBtnTask(obj) {

					$(".btntaskTab").removeClass("typeSelect");
					$(".btntaskTab").addClass("contrastNormal");
					$(".btntaskTab").addClass("cursorPointer");

					$(".btntaskTab").css("border-left", "1px solid #D3D3D3");
					$(".btntaskTab").css("border-right", "1px solid #D3D3D3");
					$(".btntaskTab").css("border-top", "1px solid #D3D3D3");
					$(".btntaskTab").css("border-bottom", "1px solid #2490d8");

					$(obj).addClass("typeSelect");
					$(obj).removeClass("contrastNormal");
					$(obj).removeClass("cursorPointer");

					$(obj).css("border-left", "1px solid #2490d8");
					$(obj).css("border-right", "1px solid #2490d8");
					$(obj).css("border-top", "1px solid #2490d8");
					$(obj).css("border-bottom", "none");

				}

				// 任务列表
				$(".btntask1").click(function() {

					setBtnTask(this);

					$("#task_exec_status").val(1);

					// grid重新加载
					mGrid_gridSysTaskList_obj.query(1, function() {
						taskListComplete();
					});

				});

				$(".btntask2").click(function() {

					setBtnTask(this);

					$("#task_exec_status").val(2);

					// grid重新加载
					mGrid_gridSysTaskList_obj.query(1, function() {
						taskListComplete();
					});

				});

				$(".btntask3").click(function() {

					setBtnTask(this);

					$("#task_exec_status").val(3);

					// grid重新加载
					mGrid_gridSysTaskList_obj.query(1, function() {
						taskListComplete();
					});

				});

				$(".btntask4").click(function() {

					setBtnTask(this);

					$("#task_exec_status").val(4);

					// grid重新加载
					mGrid_gridSysTaskList_obj.query(1, function() {
						taskListComplete();
					});

				});

				function openTaskWindow() {
					$(".btnTask").removeClass("bgRectangeWhite ").addClass("bgRectangeLightGreen");
					$(".taskCircel").removeClass("bgTaskNormal").addClass("bgTaskSelect").next().addClass("colWhite")
					$(".missionList").removeClass("disPlayNone");

				}

				$(".missionListClose").click(function() {
					closemissionListClose();
				});

				// 防止点击关闭
				$(".missionList").click(function() {
					return false;
				});

				/* 已选 */
				// 打开已选择窗口
				$(".btnAlreadySelect").click(function() {
					closeToolWindow();
					openAlreadySelect();
					closemissionListClose();

					// mGrid_gridSelectedDocList_obj.query(1, function()
					// {
					// selectedDocListComplete();
					// });

					$("#selectedDocListContent .itemSelect").click();

					return false;
				});
				// 已选窗口tab切换
				$(".alreadySelectTop div").click(function() {
					$(this).siblings().removeClass("itemSelect").addClass("itemNormal");
					$(this).removeClass("itemNormal").addClass("itemSelect");
					var txt = $(this).text();

					if (txt == "专利") {
						$("#selected_list_type").val("2");
						$(".selectedDocAddProject").show();
						$(".bgWarning").show();

						if (freezeTxnAction == "PatentImgTextList" || freezeTxnAction == "PatentTableList" || freezeTxnAction == "PatentSurfaceList" || freezeTxnAction == "PatentOverviewList") {
							$("#selectedDocDownload").show();
							$("#selectedDocDownload2").hide();
						} else {
							$("#selectedDocDownload").hide();
							$("#selectedDocDownload2").show();
						}

					} else if (txt == "商标") {
						$("#selected_list_type").val("T");
						$(".selectedDocAddProject").hide();
						$(".bgWarning").show();

						if (freezeTxnAction == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList" || freezeTxnAction == "TradMarkOverviewList") {
							$("#selectedDocDownload").show();
							$("#selectedDocDownload2").hide();
						} else {
							$("#selectedDocDownload").hide();
							$("#selectedDocDownload2").show();
						}

					} else if (txt == "标准") {
						$("#selected_list_type").val("S");
						$(".selectedDocAddProject").hide();
						$(".bgWarning").hide();

						if (freezeTxnAction == "StandardList") {
							$("#selectedDocDownload").show();
							$("#selectedDocDownload2").hide();
						} else {
							$("#selectedDocDownload").hide();
							$("#selectedDocDownload2").show();
						}

					} else if (txt == "期刊") {
						$("#selected_list_type").val("I");
						$(".selectedDocAddProject").hide();
						$(".bgWarning").hide();

						if (freezeTxnAction == "PeriodicalList") {
							$("#selectedDocDownload").show();
							$("#selectedDocDownload2").hide();
						} else {
							$("#selectedDocDownload").hide();
							$("#selectedDocDownload2").show();
						}
					} else if (txt == "判例") {
						$("#selected_list_type").val("D,C,R");
						$(".selectedDocAddProject").hide();
						$(".bgWarning").hide();

						if (freezeTxnAction == "LawsList" || freezeTxnAction == "DecisionList" || freezeTxnAction == "RefereeList") {
							$("#selectedDocDownload").show();
							$("#selectedDocDownload2").hide();
						} else {
							$("#selectedDocDownload").hide();
							$("#selectedDocDownload2").show();
						}

					}

					sidebarSelectedList = new Map();

					mGrid_gridSelectedDocList_obj.query(1, function() {
						selectedDocListComplete();
					});

					return false;
				});
				// 已选窗口勾选全选
				$(".alreadySelAll").click(function() {
					$(this).toggleClass("checkBoxBg checkBoxClickBg");

					if ($(this).hasClass("checkBoxClickBg")) {

						$(".alreadySelectItem span").each(function() {

							if ($(this).hasClass("checkBoxBg")) {

								var type = $(this).attr("type");
								var docid = $(this).attr("docid");
								var trsid = $(this).attr("trsid");
								var title = $(this).attr("title");
								var vid = $(this).attr("v");

								sidebarSelectedList.put(vid, {
									"vid" : vid,
									"type" : type,
									"docid" : docid,
									"trsid" : trsid,
									"title" : title
								});
							}

						});

						$(".alreadySelectItem span").removeClass("checkBoxBg").addClass("checkBoxClickBg");

					} else {

						$(".alreadySelectItem span").each(function() {

							if ($(this).hasClass("checkBoxClickBg")) {

								var vid = $(this).attr("v");
								sidebarSelectedList.remove(vid);

							}

						});

						$(".alreadySelectItem span").removeClass("checkBoxClickBg").addClass("checkBoxBg");
					}

				});

				// 删除

				$(".deleteSelected").click(function() {

					var _otherFunction1 = function() {
						var keySet = sidebarSelectedList.keySet();
						if (keySet.length > 0) {
							var vid = "";
							for ( var i = 0; i < keySet.length; i++) {
								var obj = sidebarSelectedList.get(keySet[i]);
								var id = obj["vid"];
								vid += id + ";";

							}

							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnDelSelected.ajax",
								data : "select-key:id=" + vid,
								success : function(data) {

									mGrid_gridSelectedDocList_obj.query(1, function() {
										selectedDocListComplete();
									});

									$(".alreadySelectTip").text(($(".alreadySelectTip").text() - keySet.length));

								},
								error : function(data) {
									$.fz_common.alert("发生错误", data + "", null);
								}
							});

							sidebarSelectedList = new Map();
						} else {
							$.fz_common.alert("提示", "您当前没有选中任何数据");
						}

						return false;
					}

					var _otherButtons = [ "确定" ];
					var _otherButtonStyles = [ 'btn-danger' ];
					var _otherFunction = [ _otherFunction1 ];

					$.fz_common.confirm("提示", "确认要移除已选记录？", null, _otherButtons, _otherButtonStyles, _otherFunction);

				});

				// 清空
				$(".alSelClearAllSel").click(function() {

					var _otherFunction1 = function() {

						$.ajax({
							type : "POST",
							dataType : "xml",
							url : "/" + rootPath + "txnDelSelectedAll.ajax",
							data : "select-key:type=" + $("#selected_list_type").val(),
							success : function(data) {

								sidebarSelectedList = new Map();

								mGrid_gridSelectedDocList_obj.query(1, function() {
									selectedDocListComplete();
								});

								var num = $.fz_common.getXmlNodeValue(data, "context>select-key>num");
								$(".alreadySelectTip").text(($(".alreadySelectTip").text() - num));

							},
							error : function(data) {
								$.fz_common.alert("发生错误", data + "", null);
							}
						});

						return false;

					}

					var _otherButtons = [ "确定" ];
					var _otherButtonStyles = [ 'btn-danger' ];
					var _otherFunction = [ _otherFunction1 ];

					$.fz_common.confirm("提示", "确认要移除所有选择记录？", null, _otherButtons, _otherButtonStyles, _otherFunction);

				});

				// 初始化已选窗口
				function initAlreadySelectContent(num) {

				}

				$(".alreadySelectWindow").click(function() {
					return false;
				});

				/* 工具 */
				$(".btnTool").click(function() {

					initToolContent();
					closeAlreadySelect();
					// closeTaskWindow();
					openToolWindow();
					closemissionListClose();
					return false;
				});

				function openToolWindow() {
					$(".ToolWindow").removeClass("disPlayNone");
					$(".btnTool").removeClass("bgRectangeWhite").addClass("bgRectangeBlue");
					$(".toolCircel").removeClass("bgToolNormal").addClass("bgToolSelect").next().addClass("colWhite");
				}
				function closeToolWindow() {
					$(".ToolWindow").addClass("disPlayNone");
					$(".btnTool").removeClass("bgRectangeBlue").addClass("bgRectangeWhite");
					$(".toolCircel").removeClass("bgToolSelect").addClass("bgToolNormal").next().removeClass("colWhite");
				}

				function initToolContent() {
					$(".toolContent").children().remove();
					var m_arrToolContent = new Array("专利分类查询", "商标分类查询", "标准分类查询", "期刊分类查询", "公司代码查询", "法律状态代码查询", "区域代码查询", "同义词/跨语言", "翻译");// "同义词查询","跨语言查询","翻译助手","万方数据"
					var patentType = new Array("IPC查询", "CPC查询", "UC查询", "FI查询", "F-Term查询", "洛迦诺查询");
					var trademark = new Array("尼斯分类查询", "类似群号查询");
					var standardType = new Array("中国标准分类号(CCS)", "国际标准分类号(ICS)");
					var periodical = new Array("中图分类", "学科分类", "ASJC分类", "JCR分类", "CJCR分类");

					for ( var i = 0; i < m_arrToolContent.length; i++) {
						var node = "<dd class=' getcode" + i + "  toolContentList '><a class='nav_right  '>" + m_arrToolContent[i] + "</a>";

						if (m_arrToolContent[i] == "专利分类查询") {
							var node = "<dd class=' getcode" + i + "  toolContentList '><a style='cursor:default' class='nav_right  '>" + m_arrToolContent[i] + "</a>";
							node += "<div class='nav_left'>";
							for ( var j = 0; j < patentType.length; j++) {
								node += "<a href='javascript:' class='toolContentList'>" + patentType[j] + "</a>";
							}
							node += "</div>";
						}

						else if (m_arrToolContent[i] == "商标分类查询") {
							var node = "<dd class=' getcode" + i + "  toolContentList '><a style='cursor:default' class='nav_right  '>" + m_arrToolContent[i] + "</a>";
							node += "<div class='nav_left'>";
							for ( var j = 0; j < trademark.length; j++) {
								node += "<a href='javascript:' class='toolContentList'>" + trademark[j] + "</a>";
							}
							node += "</div>";
						} else if (m_arrToolContent[i] == "标准分类查询") {
							var node = "<dd class=' getcode" + i + "  toolContentList '><a style='cursor:default' class='nav_right  '>" + m_arrToolContent[i] + "</a>";
							node += "<div class='nav_left'>";
							for ( var j = 0; j < standardType.length; j++) {
								node += "<a href='javascript:' class='toolContentList'>" + standardType[j] + "</a>";
							}
							node += "</div>";
						} else if (m_arrToolContent[i] == "期刊分类查询") {
							var node = "<dd class=' getcode" + i + "  toolContentList '><a style='cursor:default' class='nav_right  '>" + m_arrToolContent[i] + "</a>";
							node += "<div class='nav_left'>";
							for ( var j = 0; j < periodical.length; j++) {
								node += "<a href='javascript:' class='toolContentList'>" + periodical[j] + "</a>";
							}
							node += "</div>";

						}
						if (m_arrToolContent.length - 1 == i) {

							node += "<div class='triangle t-rgt'> <em>◆</em><span>◆</span> </div>";
						}
						node += "</dd>";
						$(".ToolWindow .toolContent").append(node);
					}
					$(".toolContent dd").mouseover(function() {
						$(this).find(".nav_left").css("display", "block");
					});
					$(".toolContent dd").mouseout(function() {
						$(this).find(".nav_left").css("display", "none");
					});
					//
					$(".toolContentList").click(function() {
						var winType = $("#winType").val();// 当前页面入口类型
						$("#winType").val("tools");
						var name = $(this).text();
						$(".btnItem").addClass("displayNone");// 隐藏加入检索按钮
						$(".codearea").addClass("displayNone");// 隐藏展示区

						if (name == "法律状态代码查询") {

							codeSetWinCommon("#LegalStatusWindow");
							initZTree($("#chinaLawTree"), chinaLawSearchSetting, zLawNodes, "chinalaw", "");
							var treeObj = $.fn.zTree.getZTreeObj("chinaLawTree");
							treeObj.setting.check.enable = false; // 隐藏复选框
							treeObj.refresh();
							treeShow($("#legalList"), $("#chinaLawTree"));// 显示树div
							treeShow($("#LegalStatusWindow .btnLaw"), $("#LegalStatusWindow .areaList"));// 显示对应
							$("#LegalStatusWindow .searchInputText").val("");
							$(".typePage").removeClass("displayNone");
							$("#LegalStatusWindow").css("height", "480px");

						}

						// IPC
						else if (name == "IPC查询") {

							$("#IpcResult").addClass("displayNone");// ipc统计
							$('.radioCatergoriesDiv').click();// 语言栏
							$("#IPCwindow").removeClass("displayNone");
							$(".typePage").removeClass("displayNone");
							$("#borderD3").addClass("displayNone");// 隐藏下方展示区
							initZTree($("#ipcTreeDemo"), contrastSetting, zIPCCnNodes, "ipcjson", 1);// 初始化
							$("#IPCwindow").find(".radioKeyWordsDiv1").addClass("displayNone");
							$("#IPCwindow").find(".radioKeyWordsDiv1").removeClass("displayInline");
							initTypeRadio("IPCwindow");
							resetAlertWindow("#IPCwindow");
							codeSetWinCommon("#IPCwindow");
						}

						// CPC
						else if (name == "CPC查询") {// cpcsetting
							$(".typePage").removeClass("displayNone")
							$("#cpcResult").addClass("displayNone");// cpc统计
							$(".contrastPage").addClass("displayNone");
							initZTree($("#cpcTreeDemo"), contrastSetting, zCPCNodes, "cpcjson", 2);
							initTypeRadio("CPCwindow");// 英文

							resetAlertWindow("#CPCwindow");
							codeSetWinCommon("#CPCwindow");

						}

						// FI
						else if (name == "FI查询") {

							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							$("#fiResult").addClass("displayNone");// fi统计
							$('.radioKeyWordsDiv1').click();// 语言栏
							initZTree($("#fiTreeDemo"), contrastSetting, zFIJpNodes, "fijson", 3);
							initTypeRadio("FIWindow");
							resetAlertWindow("#FIWindow");
							codeSetWinCommon("#FIWindow");

						}

						// Fterm
						else if (name == "F-Term查询") {

							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							$("#ftResult").addClass("displayNone");
							$('.radioKeyWordsDiv1').click();// 语言栏
							initZTree($("#ftermTreeDemo"), contrastSetting, zFTERMNodes, "ftermjson/00000", 3);
							initTypeRadio("FtermWindow");
							resetAlertWindow("#FtermWindow");
							codeSetWinCommon("#FtermWindow");
						}

						// UC
						else if (name == "UC查询") {

							$("#ucResult").addClass("displayNone");// cpc统计
							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							initZTree($("#ucTreeDemo"), contrastSetting, zUSPCNodes, "ucjson", 2);
							initTypeRadio("UCWindow");
							resetAlertWindow("#UCWindow");
							codeSetWinCommon("#UCWindow");
						}

						// 洛迦诺
						else if (name == "洛迦诺查询") {

							codeSetWinCommon("#LocanoWindow");
							$('.radioCatergoriesDiv').click();// 语言栏
							$(".typePage").removeClass("displayNone");
							initZTree($("#locanoTreeDemo"), contrastSetting, zZhLocanoNodes, "locanojson", 1);
							resetAlertWindow("#LocanoWindow");
						}

						// 尼斯分类查询
						if (name == "尼斯分类查询") {
							codeSetWinCommon("#NiceWindow");
							$('.radioCatergoriesDiv').click();// 语言栏
							$(".typePage").removeClass("displayNone");
							$(".btnTree").addClass("displayNone");

							mGrid_gridNice_obj.query(1, function() {
								anchorRedirect("NiceWindow", "");
								divsiling("NiceWindow", "1");// 语言切换
								$(".enDiv").addClass("displayNone");
								$(".zhDiv").removeClass("displayNone");
								$(".tabSeaHisoederRight>input[name='ncguuid']").hide();// ￥查询时
								// 隐藏列表中的复选框

							});
							resetAlertWindow("#NiceWindow");
						}

						// 类似群号
						else if (name == "类似群号查询") {
							codeSetWinCommon("#NiceGroupWindow");
							$('.radioCatergoriesDiv').click();// 语言栏
							$("#NiceGroupWindow").css("height", "520px");
							initZTree($("#niceGroupTreeDemo"), contrastSetting, zNiceClassGroupCnNodes, "nicegroupjson/niceclassgroup", 1);
							resetAlertWindow("#NiceGroupWindow");
							$(".typePage").removeClass("displayNone");
						}

						// 中国标准分类号(CCS)
						else if (name == "中国标准分类号(CCS)") {
							initZTree($("#ccsTreeDemo"), contrastSetting, zCcsNodes, "ccsjson", 1);
							$(".typePage").removeClass("displayNone");
							codeSetWinCommon("#CCSWindow");
							$("#CCSWindow").css("height", "520px");
							resetAlertWindow("#CCSWindow");
						}

						// 国际标准分类号(ICS)
						else if (name == "国际标准分类号(ICS)") {
							$('.radioCatergoriesDiv').click();// 语言栏
							initZTree($("#icsTreeDemo"), contrastSetting, zZhIcsNodes, "icsjson", 1);
							$("#ICSWindow .typePage").removeClass("displayNone");
							$("#ICSWindow").css("height", "520px");
							codeSetWinCommon("#ICSWindow");
							resetAlertWindow("#ICSWindow");
						}

						// 中图分类
						else if (name == "中图分类") {
							$(".typePage").removeClass("displayNone");
							initZTree($("#cnlibTreeDemo"), contrastSetting, zCnlibNodes, "cnlibjson", 1);
							$("#CnlibWindow").css("height", "520px");
							codeSetWinCommon("#CnlibWindow");
							resetAlertWindow("#CnlibWindow");
						}

						// 学科分类
						else if (name == "学科分类") {
							$('.radioCatergoriesDiv').click();// 语言栏

							$(".typePage").removeClass("displayNone");
							initZTree($("#sfxTreeDemo"), contrastSetting, zZhSfxNodes, "sfxjson", 1);
							$("#SfxWindow").css("height", "500px");
							codeSetWinCommon("#SfxWindow");
							resetAlertWindow("#SfxWindow");
						}

						// JCR分类
						else if (name == "JCR分类") {
							$(".typePage").removeClass("displayNone");
							initZTree($("#jcrTreeDemo"), contrastSetting, zJcrNodes, "jcrjson", 2);
							$("#JcrWindow").css("height", "500px");
							codeSetWinCommon("#JcrWindow");
							resetAlertWindow("#JcrWindow");
						}

						// CJCR分类
						else if (name == "CJCR分类") {
							$(".typePage").removeClass("displayNone");
							initZTree($("#cjcrTreeDemo"), contrastSetting, zCjcrNodes, "cjcrjson", 1);
							$("#CjcrWindow").css("height", "500px");
							resetAlertWindow("#CjcrWindow");
							codeSetWinCommon("#CjcrWindow");
						}

						// ASJC分类
						else if (name == "ASJC分类") {
							$(".typePage").removeClass("displayNone");
							initZTree($("#asjcTreeDemo"), contrastSetting, zAsjcNodes, "asjcjson", 2);
							$("#AsjcWindow").css("height", "500px");
							resetAlertWindow("#CjcrWindow");
							codeSetWinCommon("#AsjcWindow");
						}
						// 公司代码
						else if (name == "公司代码查询") {

							codeSetWinCommon("#companyWindow");
							$("#companySysDiv").removeClass("displayNone");//
							treeShow($(".comSysRightResult"), $(".sqrContentText"));//
							codeSetWinCommon("#companyWindow");
							$("#companyWindow").css("height", "500px");// 设置窗口大小
							$("#companyWindow .companyWhite").css("height", "330px");// 设置窗口大小
							$("#companyWindow .sysPage").children("div").css("height", "310px");// 设置窗口大小
							$("#companyWindow .personalPage").children("div").css("height", "310px");// 设置窗口大小

						}
						// 区域代码
						else if (name == "区域代码查询") {

							regsetting.check.enable = false;
							initZTree($("#provinceTreeDemo"), regsetting, zRegNodes, "regionjson", "")
							$("#provinceWindow").css("height", "480px")
							codeSetWinCommon("#provinceWindow");

						}
						// 同义词/跨语言
						else if (name == "同义词/跨语言") {

							codeSetWinCommon("#WordSelectwindow");
							system_synonym = new Array();
							person_synonym = new Array();
							system_crossLanguage = new Array();
							person_crossLanguage = new Array();
							$("#btnAddSearch").addClass("displayNone");
							$("#WordSelectwindow").css("height", "520px");
							$("#WordSelectwindow .synonymDiv").css("height", "290px");
							$("#WordSelectwindow .CrosslanguageDiv").css("height", "290px");
							$("#WordSelectwindow>.backWhite ").css("height", "345px");
							// loadUserData();

						}

						// 翻译
						else if (name.indexOf("翻译") >= 0) {
							$(".typePage").removeClass("displayNone")
							$("#translation").removeClass("disPlayNone");
							$(".contrastPage").addClass("displayNone");
							codeSetWinCommon("#translation");
						}
					});
				}

				/* 代码集浮层样式调整 */
				function resetAlertWindow(windowId) {
					$(windowId).css("height", "520px");
					$(windowId + " .backWhite").css("height", "390px");
					$(windowId + " .typePage .borderD3").css("height", "320px");
					$(windowId + " .contrastPage .lrItem").css("height", "295px");
				}

				/* 反馈浮层 */
				$(".btnFeedBack").click(function() {
					openFeedBack();
					closeAlreadySelect();
					closeToolWindow();
					closemissionListClose();
					return false;
				});

				function openFeedBack() {
					$(".btnFeedBack").removeClass("bgRectangeWhite").addClass("bgRectangeRed");
					$(".FeedBackCircel").removeClass("bgFeedBack").addClass("bgFeedBackSelect").next().addClass("colWhite");
					$(".feedBackWindow").removeClass("disPlayNone");
					$(".shielding_layer").removeClass("displayNone");
					var scrolltop = $(document).scrollTop();
					$(".feedBackWindow").css("margin-top", scrolltop);
					$(".shielding_layer").removeClass("displayNone");
					setLayerHeight();
					disabledMouseWheel();
					$(".bodyClass").addClass("overflowHidden");
				}
				// 关闭
				$(".feedBackClose").click(function() {
					$("#f_contact").css("border", "");
					$(".feedBackWindow .colTime").css("color", "");
					$(".feedBackTextarea").css("border", "");
					closeFeedBackWindow();
					// return false;
				});
				function closeFeedBackWindow() {
					$(".btnFeedBack").removeClass("bgRectangeRed").addClass("bgRectangeWhite");
					$(".FeedBackCircel").removeClass("bgFeedBackSelect ").addClass("bgFeedBack").next().removeClass("colWhite");
					$(".feedBackWindow").addClass("disPlayNone");
					$(".shielding_layer").addClass("displayNone");
					MouseWheel();
					$(".bodyClass").removeClass("overflowHidden");
				}

				$(".feedBackWindow").click(function() {
					$(".contactWaySelect_ul").addClass("disPlayNone");
					$(".contactWaySelect_ul").prev().css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");
				});

				$(".contactDiv").click(function() {
					$(".contactWaySelect_ul").removeClass("disPlayNone");
					$(this).css("background-image", "url(''/" + rootPath + "../images//arrowBlueuP.png')");
					return false;
				});
				$(".contactWaySelect_ul li").click(function() {
					$(this).parent().prev().text($(this).text());
					$("#contact_type").val($(this).attr("v"));
					$(this).parent().prev().attr("v", $(this).attr("v")).css("background-image", "url(''/" + rootPath + "../images//arrowBlueDown.png')");
					$(this).parent().addClass("disPlayNone");
					return false;
				});
				$(".contactWaySelect_ul li").mouseover(function() {
					$(this).parent().children().removeClass("select_item");
					$(this).addClass("select_item");
					return false;
				});

				// 验证结束
				// 上下滑动
				$(".toTop").click(function() {
					$('body,html').animate({
						scrollTop : 0
					}, 1000);
					return false;
				});
				$('.toBottom').click(function() {
					$('html, body').animate({
						scrollTop : $(document).height()
					}, 1000);
					return false;
				})

				// 选择数量
				$.ajax({
					type : "POST",
					dataType : "xml",
					url : "/" + rootPath + "txnUserSelectedNum.ajax",
					success : function(data) {
						var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
						if (errCode != "000000") {
							$(".alreadySelectTip").text("0");
						} else {

							var num = $.fz_common.getXmlNodeValue(data, "context>select-key>num");
							$(".alreadySelectTip").text(num);
						}
					},
					error : function(data) {
						$(".alreadySelectTip").text("0");
					}
				});

				$(".selectCompare").click(function() {
					var keySet = sidebarSelectedList.keySet();
					if (keySet.length != 2) {
						$.fz_common.alert("提示", "只能选中两项才能进行对比操作");
					} else {
						var type = "";
						var trsid = "";
						var docid = "";
						var vid = "";
						for ( var i = 0; i < keySet.length; i++) {
							var obj = sidebarSelectedList.get(keySet[i]);
							type += obj["type"] + ";";
							trsid += obj["trsid"] + ";";
							docid += obj["docid"] + ";";
							vid += obj["vid"] + ";"
						}
						var types = type.split(";");
						if (types[0] == types[1]) {
							if (types[0] == "2") {
								_doTempPost("/" + rootPath + "txnPatentDoubleComColumn.do", "select-key:PID=" + docid + "&select-key:PNO=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "T") {
								_doTempPost("/" + rootPath + "txnTrademarkDoubleComColumn.do", "select-key:ID=" + docid + "&select-key:TMID=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "S") {
								_doTempPost("/" + rootPath + "txnStandardDoubleCompare.do", "select-key:ID=" + docid + "&select-key:STN=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "I") {
								_doTempPost("/" + rootPath + "txnPeriodicalDoubleCompare.do", "select-key:ID=" + docid + "&select-key:PNO=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "D") {
								_doTempPost("/" + rootPath + "txnDecisionDoubleCompare.do", "select-key:ID=" + docid + "&select-key:RIDM=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "C") {
								_doTempPost("/" + rootPath + "txnRefereeDoubleCompare.do", "select-key:ID=" + docid + "&select-key:CAN=" + trsid + "&select-key:flag=2", true);
							} else if (types[0] == "R") {
								_doTempPost("/" + rootPath + "txnLawsDoubleCompare.do", "select-key:ID=" + docid + "&select-key:LAN=" + trsid + "&select-key:flag=2", true);
							}
						} else {
							$.fz_common.alert("提示", "请选择同一数据！");
						}
					}
				});

				$("#selectedDocDownload").click(
						function() {

							var keySet = sidebarSelectedList.keySet();

							if (keySet.length == 0) {
								$.fz_common.alert("提示", "没有选择下载数据");
								return;
							} else {

								var list2 = "";
								var listT = "";
								var listS = "";
								var listI = "";
								var listD = "";
								var listC = "";
								var listR = "";

								var list2Num = 0;
								var listTNum = 0;
								var listSNum = 0;
								var listINum = 0;
								var listDNum = 0;
								var listCNum = 0;
								var listRNum = 0;

								// 每类下载提交不同的下载任务
								for ( var n = 0; n < keySet.length; n++) {

									var obj = sidebarSelectedList.get(keySet[n]);

									var type = obj["type"];
									var trsid = obj["trsid"];
									var docid = obj["docid"];

									// 现在只下载当前列表的选中数据 不进行全部下载
									if (freezeTxnAction == "PatentImgTextList" || freezeTxnAction == "PatentTableList" || freezeTxnAction == "PatentSurfaceList"
											|| freezeTxnAction == "PatentOverviewList") {
										list2 += " PNO = '" + trsid + "' OR";
										list2Num = list2Num + 1;
									}
									if (freezeTxnAction == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList"
											|| freezeTxnAction == "TradMarkOverviewList") {
										listT += " TMID = '" + trsid + "' OR";
										listTNum = listTNum + 1;
									}
									if (freezeTxnAction == "StandardList") {
										listS += " STN = '" + trsid + "' OR";
										listSNum = listSNum + 1;
									}

									if (freezeTxnAction == "PeriodicalList") {
										listI += " JID = '" + docid + "' OR";
										listINum = listINum + 1;
									}

									if (freezeTxnAction == "DecisionList" && type == "D") {
										listD += " RIDN = '" + trsid + "' OR";
										listDNum = listDNum + 1;
									}
									if (freezeTxnAction == "RefereeList" && type == "C") {
										listC += " CAN = '" + trsid + "' OR";
										listCNum = listCNum + 1;
									}
									if (freezeTxnAction == "LawsList" && type == "R") {
										listR += " CID = '" + docid + "' OR";
										listRNum = listRNum + 1;
									}

								}

								// 字段参数
								var selectitemV = "";
								var selectitemT = ""
								$("span[name='ck1']").each(function() {
									var v = $(this).attr("v");

									if (v != null && v != "") {
										var t = $(this).next().text();
										selectitemV += v + ","
										selectitemT += t + ","
									}

								});
								var langTxt = "cn,en,normal,";

								if (list2 != "") {
									var param = "record:selectitem=" + selectitemV + "&record:recordcount=" + (list2Num) + "&record:lang=" + langTxt + "&record:type=excel&record:taskname=专利已选下载"
											+ getNowFormatDate() + "&record:express=" + encodeURIComponent(list2.substr(0, list2.length - 3));
									doPatentDownloadJob(param, "txnPatentDownloadJob");
								}

								if (listT != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listTNum) + "&record:lang=" + langTxt
											+ "&record:type=T&record:taskname=商标已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listT.substr(0, listT.length - 3));

									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (listS != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listSNum) + "&record:lang=" + langTxt
											+ "&record:type=S&record:taskname=标准已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listS.substr(0, listS.length - 3));

									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (listI != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listINum) + "&record:lang=" + langTxt
											+ "&record:type=I&record:taskname=期刊已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listI.substr(0, listI.length - 3));

									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (listD != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listDNum) + "&record:lang=" + langTxt
											+ "&record:type=D&record:taskname=复审无效已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listD.substr(0, listD.length - 3));

									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (listC != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listCNum) + "&record:lang=" + langTxt
											+ "&record:type=C&record:taskname=裁判文书已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listC.substr(0, listC.length - 3));

									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (listR != "") {
									var param = "record:selectitem=" + selectitemV + ";" + selectitemT + "&record:recordcount=" + (listCNum) + "&record:lang=" + langTxt
											+ "&record:type=R&record:taskname=法律法规已选下载" + getNowFormatDate() + "&record:express=" + encodeURIComponent(listR.substr(0, listR.length - 3));
									doPatentDownloadJob(param, "txnUnPatentDownloadJob");

								}

								if (list2Num == 0 && listTNum == 0 && listSNum == 0 && listINum == 0 && listDNum == 0 && listCNum == 0 && listRNum == 0) {

									$.fz_common.alert("提示", "没有选择下载数据或选择下载数据类型错误，只能选择当前概览列表相关的数据下载。");

								} else {

									$.fz_common.alert("下载任务已提交", "下载任务提交成功，可以在页面右侧任务栏或用户管理页面中查看当前选择内容的下载进度并下载。", null);

								}

							}

						});

				$("#selectedDocDownload2").click(function() {
					$.fz_common.alert("提示", "只能选择当前概览列表的数据下载，请切换到当前概览列表已选队列进行下载。");
				});

				function doPatentDownloadJob(param, action) {

					$.ajax({
						async : false,
						type : "POST",
						dataType : "xml",
						url : "/" + rootPath + action + ".ajax",
						data : (param),
						success : function(data) {

							var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
							if (errCode == "000000") {
							} else {

								errorDescAlert(data);

							}

						},
						error : function(data) {
							$.fz_common.alert("错误", data + "", null);
						}
					});
				}

			}

			// 全选
			$("#selectall").click(function() {
				$(this).toggleClass("checkBoxBg");

				$(this).toggleClass("checkBoxClickBg");

				if ($(this).hasClass("checkBoxClickBg")) {
					$("span[name='checkbox']").addClass("checkBoxClickBg");
					$("span[name='checkbox']").removeClass("checkBoxBg");
					$("span[name='tableCheck']").addClass("checkBoxClickBg");
					$("span[name='tableCheck']").removeClass("checkBoxBg");
					$("span[name='surfaceCheckbox']").addClass("checkBoxClickBg");
					$("span[name='surfaceCheckbox']").removeClass("checkBoxBg");

				} else {
					$("span[name='checkbox']").removeClass("checkBoxClickBg");
					$("span[name='checkbox']").addClass("checkBoxBg");
					$("span[name='tableCheck']").removeClass("checkBoxClickBg");
					$("span[name='tableCheck']").addClass("checkBoxBg");
					$("span[name='surfaceCheckbox']").removeClass("checkBoxClickBg");
					$("span[name='surfaceCheckbox']").addClass("checkBoxBg");
				}

				_setSelectNum();
			});

			$('.selectedDoc').click(function() {

				if ($(this).hasClass("cursorPointer")) {

					var v = "";
					var trsid = "";
					var t = "";
					var type = docActionType[freezeTxnAction];
					var selectNum = 0;

					$("span[name='surfaceCheckbox'],span[name='checkbox'],span[name='tableCheck']").each(function() {

						if ($(this).hasClass("checkBoxClickBg")) {
							selectNum++;
							v += $(this).attr("v") + ";";
							trsid += $(this).attr("trsid") + ";";
							t += $(this).attr("title").replace(/;/g, "") + ";";

						}

					});
					$.ajax({
						type : "POST",
						dataType : "xml",
						url : "/" + rootPath + "txnUserSelectedNumByType.ajax",
						data : "select-key:type=" + type,
						success : function(data) {

							checkLoginStatus(data);

							var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
							if (errCode != "000000") {
								$.fz_common.alert("发生错误,请稍后重试", errCode + "", null);
							} else {
								var num = parseInt($.fz_common.getXmlNodeValue(data, "context>record>num"));
								if (selectNum + num > 1000) {
									$.fz_common.alert("提示", "最多添加1000条数据！");
								} else {
									$.ajax({
										type : "POST",
										dataType : "xml",
										url : "/" + rootPath + "txnAddSelectedDoc.ajax",
										data : "select-key:type=" + type + "&select-key:docid=" + v + "&select-key:trsid=" + trsid + "&select-key:doctitle=" + encodeURIComponent(t),
										success : function(data) {
											var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
											if (errCode != "000000") {
												$.fz_common.alert("发生错误,请稍后重试", errCode + "", null);
											} else {

												$.fz_common.alert("提示", "添加成功");

												var num = $.fz_common.getXmlNodeValue(data, "context>select-key>num");
												$(".alreadySelectTip").text(($(".alreadySelectTip").text() - 0) + (num - 0));

											}
										},
										error : function(data) {
											$.fz_common.alert("发生错误,请稍后重试", data + "", null);
										}
									});
								}
							}
						}
					});

				}

			})

			// CKM提示
			ckmTypeahead('#_expressCN2');

			// 工具条
			{

			}

			// 判例显示隐藏

			{

				$("#relationDECCSENUM,#select01").mouseover(function() {
					$("#select01").show();

				});

				$("#relationDECCSENUM,#select01").mouseout(function() {
					$("#select01").hide();
				});

			}

		});

var clip = new ZeroClipboard(document.getElementById("expressCopyBtn"), {
	moviePath : '/'
});

clip.setHandCursor(true);

clip.addEventListener("mouseDown", function(client) {
	var ex = $(".ExpressCopyText").text();
	client.setText(ex + "");
});

clip.addEventListener("complete", function() {
	alert("复制成功！");
});

// 显示表达式
function showExpress() {

	$("#ExpressionCopyWindow").removeClass("displayNone");

	var txt = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
	// ((PDB = 'CNA0' OR PDB = 'CNB0' OR PDB = 'CNY0' OR PDB = 'CNS0' ) AND (
	// 名称,摘要 += '计算机' ))
	txt = noLibExpress(txt);
	var traExpress = $("#select-key_express").val();
	if (traExpress != "" && traExpress != null) {
		traExpress = "(" + noLibExpress(traExpress) + ") " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
		$(".ExpressCopyText").text(traExpress);
	} else {
		$(".ExpressCopyText").text(txt);
	}

	var scrolltop = $(document).scrollTop();
	$("#ExpressionWindow").css("margin-top", scrolltop);
	if (freezeTxnAction == "PatentSurfaceList") {
		$("#showBigImageLR").hide();
	}

	$(".shielding_layer").removeClass("displayNone");
	setLayerHeight();
	disabledMouseWheel();
	$(".bodyClass").addClass("overflowHidden");

}

// 获取所有参数

function getSearchParameter() {

	var str = "select-key:page=list&"
	str += "select-key:expressCN=" + encodeURIComponent($("#select-key_expressCN").val());
	str += "&select-key:cross=" + encodeURIComponent($("#select-key_cross").val());
	str += "&select-key:thesaurus=" + encodeURIComponent($("#select-key_thesaurus").val());
	str += "&select-key:expressCN2Val=" + encodeURIComponent($("#_expressCN2").val());
	str += "&select-key:expressCN2=" + encodeURIComponent($("#select-key_expressCN2").val());
	str += "&select-key:_keyWordStr=" + encodeURIComponent($("#select-key__keyWordStr").val());
	str += "&select-key:_keyWord=" + encodeURIComponent($("#select-key__keyWord").val());
	str += "&select-key:express=" + encodeURIComponent($("#select-key_express").val());
	str += "&select-key:buttonItem=" + encodeURIComponent($("#select-key_buttonItem").val());
	str += "&select-key:languageSelect=" + encodeURIComponent($("#languageSelect").text());
	str += "&attribute-node:patent_sort-column=" + encodeURIComponent(getSort());
	str += "&select-key:searchType=" + encodeURIComponent($("#select-key_searchType").val());
	str += "&select-key:isSimilary=" + encodeURIComponent($("#select-key_isSimilary").val());
	str += "&select-key:similary=" + encodeURIComponent($("#select-key_similary").val());
	

	return str;

}

// 获取排序

function getSort() {

	var patentStrength = $.trim($("#patentStrength").attr("v"));
	var addSort = $.trim($("#addSort").attr("v"));
	var order = $.trim($("#order").attr("v"));
	var order2 = $.trim($("#order2").attr("v"));

	if (addSort == "") {
		order2 = "";
	}

	return order + patentStrength + ";" + order2 + addSort;
}

// 二次检索
function do2Search(_exp) {

	var express = $.trim($("#_expressCN2").val());
	$("#_expressCN2").val(express);
	if (express == "") {
		$("#select-key_expressCN2").val("");
		$("#_expressCN2").val("");
		_doTempPost("/" + rootPath + "txn" + freezeTxnAction + ".do", getSearchParameter());
		return;
	}

	var _keyWord = $.trim($("#select-key__keyWord").val());
	if (_keyWord == "") {
		alert("请选择检索字段");
		return;
	}

	$("#_expressCN2").attr("title", _keyWord);

	var _express = fieldExpress($("#_expressCN2"), null, null, "");

	// 需要重复检索
	$("#select-key_expressCN2").val($("#select-key_expressCN2").val() + " " + _exp + " ( " + _express + " ) ");

	_doTempPost("/" + rootPath + "txn" + freezeTxnAction + ".do", getSearchParameter() + "&user:two:retrieval=" + _exp);
}

// 工具栏已选功能

function addDocSelected(obj) {

	var t = $(obj).attr("t");
	var trsid = $(obj).attr("trsid");
	var v = $(obj).attr("v");
	var type = docActionType[freezeTxnAction];

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : "/" + rootPath + "txnAddSelectedDoc.ajax",
		data : "select-key:type=" + type + "&select-key:docid=" + v + "&select-key:trsid=" + trsid + "&select-key:doctitle=" + encodeURIComponent(t),

		success : function(data) {
			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode != "000000") {
				$.fz_common.alert("错误", errCode + "", null);
			} else {

				alert("添加成功");

				var num = $.fz_common.getXmlNodeValue(data, "context>select-key>num");
				$(".alreadySelectTip").text(($(".alreadySelectTip").text() - 0) + (num - 0));

			}
		},
		error : function(data) {
			$.fz_common.alert("发生错误,请稍后重试", data + "", null);
		}

	});

}

// 选中数量
function _setSelectNum() {

	var i = 0;

	$("span[name='surfaceCheckbox'],span[name='checkbox'],span[name='tableCheck']").each(function() {

		if ($(this).hasClass("checkBoxClickBg")) {
			i++;
		}

	});

	if (i == 0) {

		$(".selectedDoc img").attr("src", "/" + rootPath + "module/di/img/patent/searOverview/ic_doubleArrow2.png");
		$(".selectedDoc span").css("color", "#999999");
		$(".selectedDoc").removeClass("cursorPointer");

	} else {

		$(".selectedDoc img").attr("src", "/" + rootPath + "module/di/img/patent/searOverview/ic_doubleArrow.png");
		$(".selectedDoc span").css("color", "#333");
		$(".selectedDoc").addClass("cursorPointer");

	}

}

function alreadySelectItemMouseOver() {
	$(".alreadySelectItem").mouseover(function() {
		$(this).css("background-color", "rgb(234,246,254)");
	});
}
function alreadySelectItemMouseOut() {
	$(".alreadySelectItem").mouseout(function() {
		$(this).css("background-color", "white");
	});
}

var sidebarSelectedList = new Map();
// 已选窗口勾选选择对比项
function selectCompareCheckClick(content) {

	var type = $(content).attr("type");
	var docid = $(content).attr("docid");
	var trsid = $(content).attr("trsid");
	var title = $(content).attr("title");
	var vid = $(content).attr("v");

	var v = $(content).attr("v");

	if ($(content).hasClass("checkBoxBg")) {

		$(content).removeClass("checkBoxBg");
		$(content).addClass("checkBoxClickBg");

		if ($(".alreadySelectItem .checkBoxClickBg").length == 6 && $(".alreadySelAll").hasClass("checkBoxBg")) {
			$(".alreadySelAll").removeClass("checkBoxBg");
			$(".alreadySelAll").addClass("checkBoxClickBg");
		}

		sidebarSelectedList.put(v, {
			"vid" : vid,
			"type" : type,
			"docid" : docid,
			"trsid" : trsid,
			"title" : title
		});

	} else {
		$(content).removeClass("checkBoxClickBg");
		$(content).addClass("checkBoxBg");
		if ($(".alreadySelAll").hasClass("checkBoxClickBg")) {
			$(".alreadySelAll").removeClass("checkBoxClickBg");
			$(".alreadySelAll").addClass("checkBoxBg");
		}
		sidebarSelectedList.remove(v);
	}

}

var v_id = "";
function compareDel(obj) {

	if (obj != null && obj != "") {
		v_id = $(obj).attr("v");

		var _otherFunction1 = function() {
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnDelSelected.ajax",
				data : "select-key:id=" + v_id,
				success : function(data) {

					sidebarSelectedList.remove(v_id);

					mGrid_gridSelectedDocList_obj.query(1, function() {
						selectedDocListComplete();
					});

					$(".alreadySelectTip").text(($(".alreadySelectTip").text() - 1));

				},
				error : function(data) {
					$.fz_common.alert("发生错误", data + "", null);
				}
			});
		}

		var _otherButtons = [ "确定" ];
		var _otherButtonStyles = [ 'btn-danger' ];
		var _otherFunction = [ _otherFunction1 ];
		$.fz_common.confirm("提示", "确认要移除该条记录？", null, _otherButtons, _otherButtonStyles, _otherFunction);
	}

}

// 分类筛选表达式
function getCategorySelectExpress() {

	var express = "";

	// 分类统计按钮的查询项
	$("#categorySelectButton div span:first-child").each(function(index, domEle) {

		express += $(this).text()
		if (index != ($("#categorySelectButton div span:first-child").size() - 1)) {
			express += " AND ";

		}

	});

	if (express != "") {
		express = "AND ( " + express + " ) ";
	}

	return express;

}

// 筛选通用代码

function initContent(m_array1, m_array2, content) {

	if (content == ".CSCAContent" || content == ".当前权利状态统计Content" || content == ".LSBCNContent" || content == ".PDBContent") {

		// 需要重新生成key value
		// 一级MAP的数量
		var map1 = new Map();
		// 二级MAP KEY对应一级
		var map2 = new Map();

		if (content == ".PDBContent") {

			for ( var i = 0; i < m_array1.length; i++) {

				var key = m_array1[i];
				var value = m_array2[i];

				var keyStr = patentLibrary[key];
				if (keyStr == null || keyStr == "") {
					keyStr = key;
				}

				$.each(patentLibsCat, function(name, v) {

					if (keyStr.indexOf(name) == 0) {

						var key1 = name;
						var key2 = keyStr.replace(name, "");

						if (map1.get(key1) == null) {

							map1.put(key1, (value - 0));

						} else {

							var v = map1.get(key1);
							map1.put(key1, (value - 0) + (v - 0));

						}

						if (map2.get(key1) == null) {

							var child = new Map();
							child.put(key2, value);
							map2.put(key1, child);

						} else {

							var child = map2.get(key1);
							child.put(key2, value);

						}

					}

				});

			}

		} else {

			for ( var i = 0; i < m_array1.length; i++) {

				var key = m_array1[i];
				var value = m_array2[i];

				var key1 = key.split("_")[0];
				var key2 = key.split("_")[1];

				if (map1.get(key1) == null) {

					map1.put(key1, (value - 0));

				} else {

					var v = map1.get(key1);
					map1.put(key1, (value - 0) + (v - 0));

				}

				if (map2.get(key1) == null) {

					var child = new Map();
					child.put(key2, value);
					map2.put(key1, child);

				} else {

					var child = map2.get(key1);
					child.put(key2, value);

				}

			}
		}

		var keySet = map1.keySet();

		// 排序 有权、无权、在审。
		if (content == ".LSBCNContent") {
			keySet = new Array();
			keySet.push("有权");
			keySet.push("无权");
			keySet.push("在审");
		}

		for ( var n = 0; n < keySet.length; n++) {

			var key = keySet[n];

			var map = map1.get(key);

			if (map == null) {
				continue;
			}

			var keyStr = key;
			if (content == ".CSCAContent" || content == ".当前权利状态统计Content") {
				keyStr = traLibrary[key];
			}

			var mode = $("<div class='height30 cursorPointer' style='white-space:nowrap; overflow: hidden; background-image: url(/" + rootPath
					+ "../images//right2_1.png);  background-repeat: no-repeat; background-position: 10px 10px;'><span limit='12' v='" + key
					+ "' class='searOverviewLeftContentSpan1'>" + keyStr + "</span>" + "<span>(</span><span class='fontWeightBold'>" + map + "</span><span>)</span></div>");

			$(content).append(mode);

			var child = map2.get(key);
			var keySet2 = child.keySet();

			for ( var m = 0; m < keySet2.length; m++) {

				var key2 = keySet2[m];
				var v = child.get(key2);

				var kayValue = key + "_" + key2;

				if (content == ".PDBContent") {

					kayValue = key + key2;

				}

				// var mode = $("<div class='height30 cursorPointer'
				// style='white-space:nowrap; overflow: hidden;
				// padding-left:20px; background-image: url(/" + rootPath
				// + "../images//right2_1.png);
				// background-repeat: no-repeat; background-position: 30px
				// 10px;'><span v='" + kayValue
				// + "' limit='12' class='searOverviewLeftContentSpan1'>" + key2
				// + "</span>" + "<span>(</span><span class='fontWeightBold'>" +
				// v + "</span><span>)</span></div>");

				var mode = $("<div class='height30 cursorPointer' style='white-space:nowrap; overflow: hidden;  padding-left:20px;'><span v='" + kayValue
						+ "' limit='12' class='searOverviewLeftContentSpan1'>" + key2 + "</span>" + "<span>(</span><span class='fontWeightBold'>" + v + "</span><span>)</span></div>");

				$(content).append(mode);

			}

		}

	} else {

		for ( var i = 0; i < m_array1.length; i++) {

			var key = m_array1[i];

			if (content == ".PDBContent") {

				var value = patentLibrary[key];

				if (value != null && value != "") {
					key = value;
				}

			}

			var mode = $("<div class='height30 cursorPointer' style='white-space:nowrap; overflow: hidden;'><span limit='12' class='searOverviewLeftContentSpan1'>" + key + "</span>"
					+ "<span>(</span><span class='fontWeightBold'>" + m_array2[i] + "</span><span>)</span></div>");

			$(content).append(mode);

		}
	}

}

// 右边增加一项
function rightTopAddItem(context, vStr) {

	vStr = $.trim(vStr);
	var v = context.innerHTML + "";

	// 被转换的字符
	var substr = $(context).attr("substr");
	if (substr == null || substr == "") {
	} else {
		v = $(context).attr("title");
	}

	if ($(context).attr("v") != null && $(context).attr("v") != "") {
		v = $(context).attr("v");
	}

	// 专利库转换
	if (vStr == "PDB") {

		for ( var key in patentLibrary) {
			if (patentLibrary[key] == v) {
				v = key;
			}
		}

	}

	// 商标权利状态增加通配符
	if (vStr == "CSCA" || vStr == "LSBCN" || vStr == "当前权利状态统计") {
		v = v + "%";
	}

	v = v.replace(/'/g, "\\'");

	var node = $("<div style=\"display:none\" class='displayInline marginLeft10 marginTop8 marginBottom4'>" + "<span class='floatLeft song fontSize12 backWhite'>" + vStr + " = '" + v + "'</span>"
			+ "<input type='button' class='btnGrayColse divImg buttonNobgBd floatLeft cursorPointer' onclick='selectDel(this)'></div>");

	$(".rightTopContent").append(node);

	// 执行查询
	doListSubmit();
}

// 初始化右边头部 AJAX获取数据后初始化
function initRightTop(action) {

	var txnCode = $("#_txnCode").val();

	var buttonItem = $.trim($("#select-key_buttonItem").val() + "");
	if (buttonItem == "") {
		return;
	}

	// 获取第一个(和最后一个)中间的内容 后切割AND
	// AND ( IPC = &#39;G06F17/30&#39; AND IPC =
	// &#39;G06Q40/00&#39; )
	// 替换第一个匹配(
	buttonItem = buttonItem.replace("(", "");
	// 替换最后一个匹配)
	buttonItem = buttonItem.substr(0, (buttonItem.length - 1));

	var buttonItemList = buttonItem.split("AND");

	for ( var i = 0; i < buttonItemList.length; i++) {

		var _item = buttonItemList[i];

		if (_item == null || _item == "") {
			continue;
		}

		if (_item.indexOf("=") > 0) {

			var key = $.trim(_item.split("=")[0]);
			var v = $.trim(_item.split("=")[1]);

			// 替换成中文
			var keycn = key;
			var vcn = v;

			if (key == "PDB") {
				keycn = "专利类型";

				var value = patentLibrary[v.replace(/\'/g, "")];

				if (value != null && value != "") {
					vcn = "'" + value + "'";
				}

			}
			if (txnCode == "PatentImgTextList") {
				if (key == "AS") {
					keycn = "专利权人";
				}
				if (key == "INO") {
					keycn = "发明人";
				}
				if (key == "EPRY") {
					keycn = "最早优先权年";
				}
				if (key == "LC") {
					keycn = "洛迦诺";
				}
				if (key == "ILSS") {
					keycn = "法律状态";
				}
				if (key == "LSBCN") {
					keycn = "中国当前权利状态";
				}
				if (key == "LSBFO") {
					keycn = "国外当前权利状态";
				}
			} else if (txnCode == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList" || freezeTxnAction == "TradMarkOverviewList") {
				if (key == "CS" || key == "CSCA") {
					keycn = "当前权力状态";
				}
				if (key == "NC") {
					keycn = "尼斯分类";
				}
				if (key == "HNO") {
					keycn = "申请人名称";
				}
				if (key == "MK") {
					keycn = "商标类型";
				}
				if (key == "MSC") {
					keycn = "指定颜色";
				}
				if (key == "HNAC") {
					keycn = "申请人区域代码";
				}
				if (key == "AR") {
					keycn = "代理人名称";
				}
				if (key == "FD") {
					keycn = "申请年份";
				}

			} else if (txnCode == "StandardList") {
				if (key == "IOS") {
					keycn = "国际标准";
				}
				if (key == "FS") {
					keycn = "国外标准";
				}
				if (key == "ICS") {
					keycn = "国际标准分类号";
				}
				if (key == "SS") {
					keycn = "标准状态";
				}
				if (key == "SED") {
					keycn = "实施年";
				}
				if (key == "SBD") {
					keycn = "发布年";
				}
			} else if (txnCode == "PeriodicalList") {
				if (key == "APT") {
					keycn = "文献类型";
				}
				if (key == "APY") {
					keycn = "出版年限";
				}
				if (key == "AS") {
					keycn = "核心收录";
				}
				if (key == "SFX") {
					keycn = "学科分类";
				}
				if (key == "AL") {
					keycn = "语种导航";
				}
				if (key == "AC") {
					keycn = "国家导航";
				}
			} else if (txnCode == "DecisionList") {
				if (key == "RIDT") {
					keycn = "决定类型";
				}
				if (key == "RIAP") {
					keycn = "请求人";
				}
				if (key == "AS") {
					keycn = "专利权人";
				}
			} else if (txnCode == "RefereeList") {
				if (key == "CL") {
					keycn = "法院级别";
				}
				if (key == "JA") {
					keycn = "判决金额";
				}

				if (key == "CDP") {
					keycn = "文书性质";
				}
				if (key == "CT") {
					keycn = "案件类型";
				}
				if (key == "HP") {
					keycn = "审理程序";
				}
				if (key == "CP") {
					keycn = "法院所属省/市";
				}
				if (key == "PL") {
					keycn = "原告或上诉人";
				}
				if (key == "DE") {
					keycn = "被告或被上诉人";
				}
				if (key == "TP") {
					keycn = "第三人";
				}
			} else if (txnCode == "LawsList") {

				if (key == "LCR") {
					keycn = "法规国别";
				}
				if (key == "LT") {
					keycn = "法律分类";
				}
				if (key == "LDLIY") {
					keycn = "发布/签字年";
				}
				if (key == "LSLEY") {
					keycn = "实施/生效年";
				}

				if (key == "LTL") {
					keycn = "时效性";
				}
			}

			if (action == "button") {

				var node = $("<div class='displayInline marginLeft10 marginTop8 marginBottom4'>" + "<span class='floatLeft song fontSize12 backWhite displayNone'>" + key + " = " + v + "</span>"
						+ "<span class='floatLeft fontSize12 backWhite categorySelectCNStr'>" + keycn + " = " + vcn + "</span>"
						+ "<input type='button' class='btnGrayColse divImg buttonNobgBd floatLeft cursorPointer' onclick='selectDel(this)'></div>");

				$(".rightTopContent").append(node);

			} else {

				setSearOverviewLeftContentS1(key, v, keycn, vcn)

			}

		}

	}

}

function setSearOverviewLeftContentS1(key, v, keycn, vcn) {

	$(".searOverviewLeftContentS1 div").each(function() {

		if ($(this).parent().attr("vStr") == key) {

			var nodeSpan = $(this).children().get(0);
			var spanText = $(nodeSpan).html();
			vcn = vcn.replace(new RegExp('\'', 'gm'), '');
			if (spanText == vcn) {
				$(nodeSpan).parent().addClass("leftTopSelect");
			}

			// 专利类型
			if (key == "PDB") {

				if (vcn.lastIndexOf(spanText) > 0) {
					$(nodeSpan).parent().addClass("leftTopSelect");
				}
			}

			// 商标权利状态
			if (key == "CSCA" || key == "LSBCN" || key == "当前权利状态统计") {

				v = v.replace(new RegExp('\%', 'gm'), '');
				v = v.replace(new RegExp('\'', 'gm'), '');

				var vTxt = $(nodeSpan).attr("v");

				if (v == vTxt) {
					$(nodeSpan).parent().addClass("leftTopSelect");
				}

				if (spanText == traLibrary[v]) {
					$(nodeSpan).parent().addClass("leftTopSelect");
				}

			}

		}

	});
}

function expandMoreOnclick(obj) {

	if ($(obj).text() == "展开更多") {

		$(obj).parent().children(".expandColumn").removeClass("displayNone");
		$(obj).children("span").text("收起");

	} else if ($(obj).text() == "收起") {

		$(obj).parent().children(".expandColumn").addClass("displayNone");
		$(obj).children("span").text("展开更多");
	}

	try {
		// 记录所有状态
		var expandMoreStatus = localStorageGet(freezeTxnAction + "_expandMore");
		if (expandMoreStatus == null) {

			expandMoreStatus = "";
		}

		var expandMoreStatusList = expandMoreStatus.split(",");

		$(".expandMore").each(function() {

			var v = $(this).parent().attr("v");

			if ($(this).text() == "收起") {

				var b = false;

				for ( var i = 0; i < expandMoreStatusList.length; i++) {

					if (v == expandMoreStatusList[i]) {
						b = true;
					}
				}

				if (!b) {

					expandMoreStatusList.push(v);
				}

			} else {

				for ( var i = 0; i < expandMoreStatusList.length; i++) {

					if (v == expandMoreStatusList[i]) {
						expandMoreStatusList.remove(i);
						break;
					}
				}

			}
		});

		localStorageSet(freezeTxnAction + "_expandMore", expandMoreStatusList.valueOf());
	} catch (e) {

	}

}

function initExpandMoreField() {

	try {

		// 字段项展开
		var expandMoreStatus = localStorageGet(freezeTxnAction + "_expandMore");
		if (expandMoreStatus != null && expandMoreStatus != "") {
			var expandMoreStatusList = expandMoreStatus.split(",");

			$(".patentType").each(function() {

				var v = $(this).next().attr("v");
				var b = false;

				for ( var i = 0; i < expandMoreStatusList.length; i++) {

					if (v == expandMoreStatusList[i]) {
						b = true;
					}
				}

				var expandMore = $(this).next().children(".expandMore");

				if (expandMore != null) {

					if (b) {

						if ($(expandMore).text() == "展开更多") {
							$(expandMore).click();
						}

					} else {

						if ($(expandMore).text() == "收起") {
							$(expandMore).click();
						}

					}

				}

			});

		}

	} catch (e) {

	}

}

function setCategorySelectButton() {

	// 使用HTML5的数据库存储上次记录localStorage或sessionStorage

	// 点击展开或收缩
	$(".patentType").click(function() {
		var m_content = $(this).children().get(1);
		$(m_content).toggleClass("selectArrowNormal");
		$(m_content).toggleClass("selectArrowSelect");

		// $(this).toggleClass("margintopext");
		$(this).next().toggleClass("displayNone");

		// 记录展开字段
		var selectIndex = "";
		$(".patentType").each(function() {

			var arrow = $(this).children().get(1);
			if ($(arrow).hasClass("selectArrowSelect")) {
				// selectIndex += $(this).index() + ",";
				selectIndex += $(this).next().attr("v") + ",";
			}

		});

		try {
			// $.cookie(freezeTxnAction + "_categoryColumn", selectIndex);
			localStorageSet(freezeTxnAction + "_categoryColumn", selectIndex);
		} catch (e) {

		}

	});

	// 更多按钮
	$(".selectMore").click(function() {
		$(".selectContentMore").toggleClass("disPlayNone");
		var selectMoreStatus = "";
		if ($($(this).children().get(1)).text() == "更 多") {
			$($(this).children().get(1)).text("收  起");
			$($(this).children().get(0)).attr("src", "/" + rootPath + "../images//hisUp.png");
			selectMoreStatus = "hisUp";
		} else {
			$($(this).children().get(1)).text("更 多");
			$($(this).children().get(0)).attr("src", "/" + rootPath + "../images//hisDown.png");
			selectMoreStatus = "hisDown";
		}
		// 记录操作动作 刷新后保持上次操作状态
		try {
			// $.cookie(freezeTxnAction + "_selectMore", selectMoreStatus);
			localStorageSet(freezeTxnAction + "_selectMore", selectMoreStatus);
		} catch (e) {

		}

	});

	// 展开上次用户的操作
	try {
		var selectIndex = localStorageGet(freezeTxnAction + "_categoryColumn");
		var selectMoreStatus = localStorageGet(freezeTxnAction + "_selectMore");

		// 更多
		if (selectMoreStatus != null && selectMoreStatus == "hisUp") {
			$(".selectMore").click();
		}

		// 展开
		if (selectIndex != null && selectIndex != "") {
			var selectIndexList = selectIndex.split(",");
			$(".patentType").each(function() {

				var v = $(this).next().attr("v");
				var b = false;

				for ( var i = 0; i < selectIndexList.length; i++) {

					if (v == selectIndexList[i]) {
						b = true;
					}
				}

				var arrow = $(this).children().get(1);

				if (b) {

					if ($(arrow).hasClass("selectArrowNormal")) {
						$(this).click();
					}

				} else {

					if ($(arrow).hasClass("selectArrowSelect")) {
						$(this).click();
					}

				}

			});
		}

	} catch (e) {

	}

}

// 分类筛选
function doListSubmit() {
	// 分类统计按钮的查询项
	var express = getCategorySelectExpress();
	$("#select-key_buttonItem").val(express);

	// mGrid_patentGrid_obj.query(1, function() { <% if (
	// txnCode.equals("PatentImgTextList")) { out.print(" recordComplete (); ");
	// } %> });

	// 不适用AJAX 直接刷新页面
	// $("#_patentListType .onSelectTabType").click();
	_doTempPost("/" + rootPath + "txn" + freezeTxnAction + ".do", getSearchParameter() + "&user:dataFiltering=filter");
}

// 筛选删除
function selectDel(content) {
	$(content).parent().remove();
	doListSubmit();
}

// 通用下拉列表
function switchMoseover(content) {
	$(content).mouseover(function(e) {
		$(content).removeClass("select_item");
		$(this).addClass("select_item");
	})
}

function switchSelectCommon(obj) {

	// 通用方法 隐藏DIV 并且带值到父级
	var div_selectUl = $(obj).parent().parent();
	$(div_selectUl).hide();
	$($(div_selectUl).prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')").html(($(obj).text())).attr("v", $(obj).attr("value"));
}

// 专利语言选择
function patentLanguageSelect(obj) {

	var txt = $(obj).text();
	$(".languageSelectField").each(function() {

		var docID = $(this).attr("docid");

		$("." + docID + "_cn").hide();
		$("." + docID + "_en").hide();

		if (txt == "中文") {

			if (docID.indexOf("PIDCN") == 0) {

			} else {
				$("." + docID + "_cn").show();
			}

		} else if (txt == "中英文" || txt == "英文" || txt == "English") {

			if (docID.indexOf("PIDUS") == 0) {

			} else {
				$("." + docID + "_en").show();
			}

		} else if (txt == "原文") {
		}
	});
}

// 非专利语言选择
function languageSelect(obj) {

	var txt = $(obj).text();
	$(".languageSelectField").each(function() {

		var docID = $(this).attr("docid");

		$("." + docID + "_cn").hide();
		$("." + docID + "_en").hide();

		if (txt == "中文") {

			if (docID.indexOf("PIDCN") == 0) {

			} else {
				$("." + docID + "_cn").show();
			}

		} else if (txt == "中英文" || txt == "英文" || txt == "English") {

			if (docID.indexOf("PIDUS") == 0) {

			} else {
				$("." + docID + "_en").show();
			}

		} else if (txt == "原文") {
		}
	});
}
function switchShow(content) {
	$(content).click(function() {
		$(content).next().show();
		$($(content).children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");
		return false;
	})
}

// 排序
function doOrder(o) {

	var order = $.trim($(o).attr("v"));

	if (order == "") {
		return;
	}

	if (order == "%2B") {
		$(o).attr("v", "-");
		$(o).css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn7_1.png')");
	} else if (order == "-") {
		$(o).attr("v", "%2B");
		$(o).css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn8_1.png')");
	}

	// 点击之后的排序字段
	var sort = getSort();

	mGrid_patentGrid_obj.opt.sortColumn = sort;

	mGrid_patentGrid_obj.query(1, function() {
		recordComplete();
	});

}

// 翻译功能
function translation() {

	var srcLan = translationCNToEN($("#languageSelect1").text());
	var tgtLan = translationCNToEN($("#languageSelect2").text());

	var srcSen = $("#translationOld").val();

	if (srcSen == null || srcSen == "") {
		$.fz_common.alert("提示", "没有需要翻译的内容");
		return;
	}

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : "/" + rootPath + "txnTranslation.ajax",
		data : "select-key:srcLan=" + srcLan + "&select-key:tgtLan=" + tgtLan + "&select-key:srcSen=" + encodeURIComponent(srcSen),
		success : function(data) {
			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {
				var result = $.fz_common.getXmlNodeValues(data, "context>record>result");
				var translation = result.text();
				$("#translationTxt").val($.trim(translation));
				$("#translationTxt").hideLoading();
			} else {
				$.fz_common.alert("提示", "翻译发生错误 ， 请稍后重试");
				$("#translationTxt").hideLoading();
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			$.fz_common.alert("翻译发生错误 ， 请稍后重试");
			$("#translationTxt").hideLoading();
		}

	});
}

function translationCNToEN(lanCN) {

	var lanEN = "";
	if (lanCN == "中文") {
		lanEN = "zh";
	} else if (lanCN == "英文") {
		lanEN = "en";
	} else if (lanCN == "韩文") {
		lanEN = "ko";
	} else if (lanCN == "日文") {
		lanEN = "jp";
	}
	return lanEN;
}

jQuery.fn.limit = function() {
	var self = $(this);
	self.each(function() {
		var objString = $(this).text();
		var objLength = $(this).text().length;
		var num = $(this).attr("limit");
		if (num == null || num == "") {
			return;
		}
		if (objLength > num) {
			$(this).attr("title", objString);
			$(this).attr("substr", "true");
			// objString = $(this).text(objString.substring(0, num) + "...");
		}
	})
}

function checkImg(fileInput, filename) {
	filefujianChange(fileInput);
	$("#" + filename).val(fileInput.value);

}
$(".feedBackSubmit").click(function() {
	if (!checkFeedBack()) {
		return;
	}
	try {
		$('#form12').ajaxSubmit(ajaxOptionsFeedBack);
	} catch (e) {
		alert('submit:' + e.message);
	}
	return false;
});
var ajaxOptionsFeedBack = {
	success : showResponse,
	url : "txnInsertFeedback.ajax",
	error : function(XMLResponse) {
		alert('操作失败！');
		document.all('form12').reset();
		$(".feedBackClose").click();
	}
};
function showResponse() {
	$(".feedBackClose").click();
	$.fz_common.alert("提示", "反馈提交成功！");
	document.all('form12').reset();
}

function checkFeedBack() {
	// 类型
	var sjcw = $("#sjcw").prop("checked");
	var gnyc = $("#gnyc").prop("checked");
	var gjjy = $("#gjjy").prop("checked");
	var qtwt = $("#qtwt").prop("checked");

	if (!sjcw && !gnyc && !gjjy && !qtwt) {
		$.fz_common.alert("提示", "至少选择一种错误类型");
		return false;
	}

	// 非空
	if ($.trim($(".feedBackTextarea").val()) == "") {
		$(".feedBackTextarea").css("border", "1px solid red");
		return false;
	} else {
		$(".feedBackTextarea").css("border", "");
	}

	if ($(".feedBackTextarea").val().length > 255) {

		$("#f_content").css("border", "1px solid red");
		$("#content_error").css("color", "rgb(255,54,54)");
		return false;
	} else {

		$("#f_content").css("border", "");
		$(".feedBackWindow .colTime").css("color", "");
	}

	// 联系类型
	if ($.trim($("#f_contact").val()) == "") {

		$("#f_contact").css("border", "1px solid red");
		$("#contact_error").css("color", "rgb(255,54,54)");
		return false;
	} else {

		$("#f_contact").css("border", "");
		$("#contact_error").css("color", "");

	}

	if ($("#f_contact").val().length > 30) {
		$.fz_common.alert("提示", "联系电话不能超过30字符。");
		return false;
	}
	// QQ
	var con_type = $("#contact_type").val();
	if (con_type == 1 && !isQQ($("#f_contact").val())) {
		$.fz_common.alert("提示", "QQ格式不正确，请输入正确的QQ。")
		return false;
	}
	// 微信
	if (con_type == 2 && !isWeixin($("#f_contact").val())) {
		$.fz_common.alert("提示", "微信号码格式不正确，请输入正确微信号码。");
		return false;
	}
	// Email
	if (con_type == 3 && !isEmail($("#f_contact").val())) {
		$.fz_common.alert("提示", "邮箱格式不正确，请输入正确邮箱地址。");
		return false;
	}
	// Msn
	if (con_type == 4 && !isMsn($("#f_contact").val())) {
		$.fz_common.alert("提示", "MSN格式不正确，请输入正确MSN地址。");
		return false;
	}
	// 手机和座机
	if (con_type == 5 && !(checkPhone($("#f_contact").val()) || isTEL($("#f_contact").val()))) {

		$.fz_common.alert("提示", "电话格式不正确，请输入正确电话号码。");
		return false;
	}
	// 旺旺
	if (con_type == 6 && !isDog($("#f_contact").val())) {
		$.fz_common.alert("提示", "旺旺格式不正确，请输入正确旺旺号码。");
		return false;
	}

	// 图片
	/*
	 * var filename1 = $("#filename1").val(); var filename2 =
	 * $("#filename2").val(); var filename3 = $("#filename3").val(); if
	 * (filename1 == "" && filename2 == "" && filename3 == "") {
	 * alert("至少上传一张反馈问题图片。"); return false; }
	 */

	return true;
}
// 联系方式类型验证：
// 验证电话号码

function isTEL(tel) {

	if (tel.search(/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/) != -1) {

		return true;

	}

	else {

		return false;

	}

}
function checkPhone(str) {
	var re = /^0\d{2,3}-?\d{7,8}$/;
	if (re.test(str)) {
		return true;
	} else {
		return false;
	}
}
// msn验证--(和邮箱的一样)

function isMsn(msn) {

	if (msn.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {

		return true;

	}

	else {

		return false;

	}

}

function isEmail(email) {

	if (email.search(/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/) != -1) {

		return true;

	}

	else {

		redflag = 1;

		return false;

	}

}

// 判断旺旺
function isDog(dog) {

	var dogre = /^\d+(?=\.{0,1}\d+$|$)/;

	if (dogre.test(dog)) {

		return true;

	} else {

		return false;

	}
}

// 判断qq
function isQQ(qq) {

	var qqre = /^[1-9]\d{4,15}$/;
	if (qqre.test(qq)) {

		return true;

	} else {

		return false;
	}
}

/*
 * 微信帐号验证
 */
function isWeixin(weixin) {

	var reg = /^[a-zA-Z\d_]{5,}$/;

	if (reg.test(weixin)) {

		return true;

	} else {

		return false;

	}
}
// 验证上传文件大小及格式
function filefujianChange(target) {
	var fileSize = 0;
	if (!target.files) {
		var filePath = target.value;
		var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
		var file = fileSystem.GetFile(filePath);
		fileSize = file.Size;
	} else {
		fileSize = target.files[0].size;
	}
	var size = fileSize / 1024;
	if (size > 100) {
		$.fz_common.alert("提示", "文件不能大于100KB");
		target.value = "";
		return;
	}
	var name = target.value;
	var fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
	if (fileName != "jpg" && fileName != "jpeg" && fileName != "png" && fileName != "gif" && fileName != "bmp") {
		$.fz_common.alert("提示", "请选择图片格式文件上传(jpg,png,jpeg,gif,bmp)！");
		target.value = "";
		return;
	}
}
function getfeedbackType(obj) {
	var arr = new Array();
	var type = $("#feedbacktype").val();
	if (type != "") {
		arr = $("#feedbacktype").val().split(',');
	}
	if ($(obj).prop("checked") == true) {
		arr.push($(obj).val());
	} else {
		arr = unique(arr);
		for ( var i = 0; i < arr.length; i++) {
			if (arr[i] == $(obj).val()) {
				arr.remove(i);
			}
		}
	}
	$("#feedbacktype").val(arr);

}
$(".feedBackDelete").click(function() {
	$(this).parent().find("input[type='text']").val("");
	$(this).parent().find("input[type='file']").val("");
});

function selectedDocListComplete() {
	var selected_num = 0;
	$(".alreadySelT").each(
			function() {

				var title = $(this).text();
				var type = $(this).attr("type");
				var docid = $(this).attr("docid");
				var trsid = $(this).attr("trsid");

				var href = '/' + rootPath + typeToDetailAction[type] + '.do?select-key:' + typeToDetailPK[type].split(",")[0] + '=' + docid + '&select-key:' + typeToDetailPK[type].split(",")[1] + '='
						+ trsid;

				$(this).empty();
				$(this).append('<a href="' + href + '" title="' + title + '" target="_blank" >' + title + '</a>');

			});

	$(".alreadySelT a").click(function() {
		// 连接由于防止冒泡无法打开的问题
		_doTempPost($(this).attr("href"), "", true);
	});

	if ($(".alreadySelAll").hasClass("checkBoxClickBg")) {
		$(".alreadySelAll").removeClass("checkBoxClickBg").addClass("checkBoxBg");
	}

	$(".selectedDocType").each(function() {

		var type = $(this).text();

		if (type == "D" || type == "R" || type == "C") {

			$(this).removeClass("disPlayNone");
			$(this).addClass("displayInline");

			if (type == "D") {
				type = "复审无效";
			}
			if (type == "C") {
				type = "裁判文书";
			}
			if (type == "R") {
				type = "法律法规";
			}

			$(this).text(type);
			$(this).prev().css("width", "230px");

		}

	});

	$(".sidebarSelectCheckBox").each(function() {

		var v = $(this).attr("v");

		var keySet = sidebarSelectedList.keySet();

		for ( var n = 0; n < keySet.length; n++) {

			var key = keySet[n];

			if (key == v) {
				selected_num++;
				$(this).removeClass("checkBoxBg");
				$(this).addClass("checkBoxClickBg");

			}

		}

	});
	if ($(".alreadySelectItem .checkBoxClickBg").length == selected_num && selected_num > 0) {
		$(".alreadySelAll").removeClass("checkBoxBg");
		$(".alreadySelAll").addClass("checkBoxClickBg");
	}

}

// 任务
function taskListComplete() {

	var task_exec_status = $("#task_exec_status").val();

	if (task_exec_status == "3") {

		$(".taskListTools").each(function() {
			$(this).html('<div class="missionListDeleteIcon" title="删除任务"></div>');
		});

	} else if (task_exec_status == "2") {

		$(".taskListTools").each(function() {

			var task_exec_type = $(this).text();

			if (task_exec_type == "1") {
				$(this).html('<div class="missionListDownLoadEnable" title="下载附件"></div>');
			} else if (task_exec_type == "2") {

				$(this).html('<div class="missionListHitEnable" title="查看检索出结果的号单"></div>' + '<div class="missionListLookUPEnable" title="查看检索结果"></div>');

			} else if (task_exec_type == "3") {
				$(this).html('<div class="missionListDownLoadEnable" title="下载附件"></div>');
			} else {
				$(this).html('<div class="missionListDeleteIcon" title="删除任务"></div>');

			}

		});

	} else {

		$(".taskListTools").each(function() {
			$(this).html(' ');
		});

	}

	// 删除按钮
	$("#missionListContent .missionListDeleteIcon").click(function() {
		var pk = $(this).parent().attr("pk");
		var type = $(this).parent().attr("type");

		delmission(pk, type);
	});

	// 下载按钮
	$("#missionListContent .missionListDownLoadEnable").click(function() {
		var pk = $(this).parent().attr("pk");
		var time = $(this).parent().attr("time");
		_doTempPost("/" + rootPath + "txnPatentDownloadFile.do", "freezeTxnAction=" + freezeTxnAction + "&record:uuid=" + pk + "&record:time=" + time, true);
		return false;
	});

	// 查看检索结果
	$("#missionListContent .missionListHitEnable").click(function() {
		var uuid = $(this).parent().attr("pk");
		// var hitnum = $(this).attr("hitnum");
		// if (hitnum == "" || hitnum == "0") {
		// alert("当前任务没有检索出结果");
		// return;
		// }

		$("#numberHitList").val("");

		$("#numberHitWindow").removeClass("disPlayNone");
		var scrolltop = $(document).scrollTop();
		$("#numberHitWindow").css("margin-top", scrolltop);
		$(".shielding_layer").removeClass("displayNone");
		setLayerHeight();
		disabledMouseWheel();
		$(".bodyClass").addClass("overflowHidden");

		$("#numberHitWindow").showLoading();

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnPatentNumberHitList.ajax",
			data : "record:uuid=" + uuid,
			success : function(data) {
				$("#numberHitWindow").hideLoading();
				var patent = $.fz_common.getXmlNodeValues(data, "context>record>hitnumber");
				var number = $(patent).text().replace(/\n\n/g, "\n");
				if (number == null || number == "") {
					number = "当前任务没有检索出结果";
				}
				$("#numberHitList").val(number);

				var missnumber = $.fz_common.getXmlNodeValues(data, "context>record>missnumber");
				number = $(missnumber).text().replace(/\n\n/g, "\n");
				if (number == null || number == "") {
					number = "没有无检索结果的记录";
				}
				$("#unNumberHitList").val(number);

			},
			error : function(data) {
				$("#numberHitWindow").hideLoading();
				$.fz_common.alert("发生错误", data + "", null);
				$(".numberHitWindowClose").click();
			}
		});

		return false;
	});

	// 查看检索结果
	$("#missionListContent .missionListLookUPEnable").click(function() {
		var uuid = $(this).parent().attr("pk");
		// var hitnum = $(this).attr("hitnum");
		// if (hitnum == "" || hitnum == "0") {
		// alert("当前任务没有检索出结果");
		// return;
		// }

		_doTempPost("/" + rootPath + "txnPatentImgTextList.do", "select-key:expressCN=numberQ#" + uuid, true);

		return false;
	});

	// 发生错误要重新设置描述
	if (task_exec_status == "4") {

		$(".describe_msg").html("任务发生错误");

	}

}

function delmission(pk, type) {
	var _otherFunction1 = function() {

		var pk = $("#_delMissionPkID").val();
		var task_type = $("#_delMissionPkID").attr("task_type");

		if (task_type == 1) {
			$.ajax({

				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnDelSysTask.ajax",
				data : "record:pk=" + pk + "&record:task_type=" + task_type,
				success : function(data) {

					// grid重新加载
					// 这里要解决冒泡问题
					$(".btnTask").click();
					setTimeout(function() {
						gridSysTaskQuery();
					}, 500);

				},
				error : function(data) {
					$.fz_common.alert("服务器发生错误", data + "", null);
				}

			});
		} else {
			$.ajax({

				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnDelOneSysTask.ajax",
				data : "record:task_id=" + pk + "&record:task_type=" + task_type,
				success : function(data) {

					// grid重新加载
					// 这里要解决冒泡问题
					$(".btnTask").click();
					setTimeout(function() {
						gridSysTaskQuery();
					}, 500);

				},
				error : function(data) {
					$.fz_common.alert("服务器发生错误", data + "", null);
				}

			});
		}

	}

	var _otherButtons = [ "确定" ];
	var _otherButtonStyles = [ 'btn-danger' ];
	var _otherFunction = [ _otherFunction1 ];

	$.fz_common.confirm("提示", "确认要移除当前任务？<input type=\"hidden\" value=\"" + pk + "\" id=\"_delMissionPkID\" task_type=\"" + type + "\" />", null, _otherButtons, _otherButtonStyles, _otherFunction);

}

function gridSysTaskQuery() {

	// grid重新加载
	mGrid_gridSysTaskList_obj.query(1, function() {
		taskListComplete();
	});

}

function gridSysTaskClean() {

	$("#task_exec_type").val("");
	$("#task_begin_time").val("");
	$("#task_begin_time2").val("");

}

/**
 * bootstrap-datetimepicker.js
 */
(function($) {
	var smartPhone = window.orientation != undefined;
	var DateTimePicker = function(element, options) {
		this.id = dpgId++;
		this.init(element, options)
	};
	var dateToDate = function(dt) {
		if (typeof dt === "string") {
			return new Date(dt);
		}
		return dt;
	};
	DateTimePicker.prototype = {
		constructor : DateTimePicker,
		init : function(element, options) {
			var icon;
			if (!(options.pickTime || options.pickDate))
				throw new Error("Must choose at least one picker");
			this.options = options;
			this.$element = $(element);
			this.language = options.language in dates ? options.language : "en";
			this.pickDate = options.pickDate;
			this.pickTime = options.pickTime;
			this.isInput = this.$element.is("input");
			this.component = false;
			if (this.$element.find(".input-append") || this.$element.find(".input-prepend"))
				this.component = this.$element.find(".add-on");
			this.format = options.format;
			if (!this.format) {
				if (this.isInput)
					this.format = this.$element.data("format");
				else
					this.format = this.$element.find("input").data("format");
				if (!this.format)
					this.format = "MM/dd/yyyy"
			}
			this._compileFormat();
			if (this.component) {
				icon = this.component.find("i")
			}
			if (this.pickTime) {
				if (icon && icon.length)
					this.timeIcon = icon.data("time-icon");
				if (!this.timeIcon)
					this.timeIcon = "icon-time";
				icon.addClass(this.timeIcon)
			}
			if (this.pickDate) {
				if (icon && icon.length)
					this.dateIcon = icon.data("date-icon");
				if (!this.dateIcon)
					this.dateIcon = "icon-calendar";
				icon.removeClass(this.timeIcon);
				icon.addClass(this.dateIcon)
			}
			this.widget = $(getTemplate(this.timeIcon, options.pickDate, options.pickTime, options.pick12HourFormat, options.pickSeconds, options.collapse)).appendTo("body");
			this.minViewMode = options.minViewMode || this.$element.data("date-minviewmode") || 0;
			if (typeof this.minViewMode === "string") {
				switch (this.minViewMode) {
				case "months":

					this.minViewMode = 1;
					break;
				case "years":
					this.minViewMode = 2;
					break;
				default:
					this.minViewMode = 0;
					break
				}
			}
			this.viewMode = options.viewMode || this.$element.data("date-viewmode") || 0;
			if (typeof this.viewMode === "string") {
				switch (this.viewMode) {
				case "months":
					this.viewMode = 1;
					break;
				case "years":
					this.viewMode = 2;
					break;
				default:
					this.viewMode = 0;
					break
				}
			}
			this.startViewMode = this.viewMode;
			this.weekStart = options.weekStart || this.$element.data("date-weekstart") || 0;
			this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
			this.setStartDate(options.startDate || this.$element.data("date-startdate"));
			this.setEndDate(options.endDate || this.$element.data("date-enddate"));
			this.fillDow();
			this.fillMonths();
			this.fillHours();
			this.fillMinutes();
			this.fillSeconds();
			this.update();
			this.showMode();
			this._attachDatePickerEvents()
		},
		show : function(e) {
			this.widget.show();

			this.height = this.component ? this.component.outerHeight() : this.$element.outerHeight();
			this.place();
			this.$element.trigger({
				type : "show",
				date : this._date
			});
			this._attachDatePickerGlobalEvents();
			if (e) {
				e.stopPropagation();
				e.preventDefault()
			}
		},
		disable : function() {
			this.$element.find("input").prop("disabled", true);
			this._detachDatePickerEvents()
		},
		enable : function() {
			this.$element.find("input").prop("disabled", false);
			this._attachDatePickerEvents()
		},
		hide : function() {
			var collapse = this.widget.find(".collapse");
			for ( var i = 0; i < collapse.length; i++) {
				var collapseData = collapse.eq(i).data("collapse");
				if (collapseData && collapseData.transitioning)
					return;
			}
			this.widget.hide();
			this.viewMode = this.startViewMode;
			this.showMode();
			this.set();
			this.$element.trigger({
				type : "hide",
				date : this._date
			});
			this._detachDatePickerGlobalEvents()
		},
		set : function() {
			var formatted = "";
			if (!this._unset)
				formatted = this.formatDate(this._date);
			if (!this.isInput) {
				if (this.component) {

					var input = this.$element.find("input");
					input.val(formatted);
					this._resetMaskPos(input)
				}
				this.$element.data("date", formatted)
			} else {
				this.$element.val(formatted);
				this._resetMaskPos(this.$element)
			}
		},
		setValue : function(newDate) {
			if (!newDate) {
				this._unset = true
			} else {
				this._unset = false
			}
			if (typeof newDate === "string") {
				this._date = this.parseDate(newDate)
			} else if (newDate) {
				this._date = new Date(newDate)
			}
			this.set();
			this.viewDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0);
			this.fillDate();
			this.fillTime()
		},
		getDate : function() {
			if (this._unset)
				return null;
			return new Date(this._date.valueOf());
		},
		setDate : function(date) {
			if (!date)
				this.setValue(null);
			else
				this.setValue(date.valueOf())
		},
		setStartDate : function(date) {
			if (date instanceof Date) {
				this.startDate = date
			} else if (typeof date === "string") {
				this.startDate = new UTCDate(date);
				if (!this.startDate.getUTCFullYear()) {
					this.startDate = -Infinity
				}
			} else {
				this.startDate = -Infinity
			}
			if (this.viewDate) {
				this.update()
			}
		},
		setEndDate : function(date) {

			if (date instanceof Date) {
				this.endDate = date
			} else if (typeof date === "string") {
				this.endDate = new UTCDate(date);
				if (!this.endDate.getUTCFullYear()) {
					this.endDate = Infinity
				}
			} else {
				this.endDate = Infinity
			}
			if (this.viewDate) {
				this.update()
			}
		},
		getLocalDate : function() {
			if (this._unset)
				return null;
			var d = this._date;
			return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
		},
		setLocalDate : function(localDate) {
			if (!localDate)
				this.setValue(null);
			else
				this.setValue(Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate(), localDate.getHours(), localDate.getMinutes(), localDate.getSeconds(), localDate
						.getMilliseconds()))
		},
		place : function() {
			var position = "absolute";
			var offset = this.component ? this.component.offset() : this.$element.offset();
			this.width = this.component ? this.component.outerWidth() : this.$element.outerWidth();
			offset.top = offset.top + this.height;
			var $window = $(window);
			if (this.options.width != undefined) {
				this.widget.width(this.options.width)
			}
			if (this.options.orientation == "left") {
				this.widget.addClass("left-oriented");
				offset.left = offset.left - this.widget.width() + 20
			}
			if (this._isInFixed()) {
				position = "fixed";
				offset.top -= $window.scrollTop();
				offset.left -= $window.scrollLeft()
			}
			if ($window.width() < offset.left + this.widget.outerWidth()) {
				offset.right = $window.width() - offset.left - this.width;
				offset.left = "auto";
				this.widget.addClass("pull-right")
			} else {
				offset.right = "auto";
				this.widget.removeClass("pull-right")
			}
			this.widget.css({
				position : position,
				top : offset.top,
				left : offset.left,
				right : offset.right
			})
		},
		notifyChange : function() {
			this.$element.trigger({
				type : "changeDate",
				date : this.getDate(),
				localDate : this.getLocalDate()
			})
		},
		update : function(newDate) {
			var dateStr = newDate;
			if (!dateStr) {
				if (this.isInput) {
					dateStr = this.$element.val()
				} else {
					dateStr = this.$element.find("input").val()
				}
				if (dateStr) {
					this._date = this.parseDate(dateStr)
				}
				if (!this._date) {
					var tmp = new Date;
					this._date = UTCDate(tmp.getFullYear(), tmp.getMonth(), tmp.getDate(), tmp.getHours(), tmp.getMinutes(), tmp.getSeconds(), tmp.getMilliseconds())
				}
			}
			this.viewDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), 1, 0, 0, 0, 0);
			this.fillDate();

			this.fillTime()
		},
		fillDow : function() {
			var dowCnt = this.weekStart;
			var html = $("<tr>");
			while (dowCnt < this.weekStart + 7) {
				html.append('<th class="dow">' + dates[this.language].daysMin[dowCnt++ % 7] + "</th>")
			}
			this.widget.find(".datepicker-days thead").append(html)
		},
		fillMonths : function() {
			var html = "";
			var i = 0;
			while (i < 12) {
				html += '<span class="month">' + dates[this.language].monthsShort[i++] + "</span>"
			}
			this.widget.find(".datepicker-months td").append(html)
		},
		fillDate : function() {
			var year = this.viewDate.getUTCFullYear();

			var month = this.viewDate.getUTCMonth();
			var currentDate = UTCDate(this._date.getUTCFullYear(), this._date.getUTCMonth(), this._date.getUTCDate(), 0, 0, 0, 0);
			var startYear = typeof this.startDate === "object" ? this.startDate.getUTCFullYear() : -Infinity;
			var startMonth = typeof this.startDate === "object" ? this.startDate.getUTCMonth() : -1;
			var endYear = typeof this.endDate === "object" ? this.endDate.getUTCFullYear() : Infinity;
			var endMonth = typeof this.endDate === "object" ? this.endDate.getUTCMonth() : 12;
			this.widget.find(".datepicker-days").find(".disabled").removeClass("disabled");
			this.widget.find(".datepicker-months").find(".disabled").removeClass("disabled");
			this.widget.find(".datepicker-years").find(".disabled").removeClass("disabled");
			this.widget.find(".datepicker-days th:eq(1)").text(dates[this.language].months[month] + " " + year);
			var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0);
			var day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
			if (year == startYear && month <= startMonth || year < startYear) {
				this.widget.find(".datepicker-days th:eq(0)").addClass("disabled")
			}

			if (year == endYear && month >= endMonth || year > endYear) {
				this.widget.find(".datepicker-days th:eq(2)").addClass("disabled")
			}
			var nextMonth = new Date(prevMonth.valueOf());
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var row;
			var clsName;
			while (prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getUTCDay() === this.weekStart) {
					row = $("<tr>");

					html.push(row)
				}
				clsName = "";
				if (prevMonth.getUTCFullYear() < year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month) {
					clsName += " old"
				} else if (prevMonth.getUTCFullYear() > year || prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month) {
					clsName += " new"
				}
				if (prevMonth.valueOf() === currentDate.valueOf()) {
					clsName += " active"
				}
				if (prevMonth.valueOf() + 864e5 <= this.startDate) {
					clsName += " disabled"
				}
				if (prevMonth.valueOf() > this.endDate) {
					clsName += " disabled"
				}
				row.append('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + "</td>");
				prevMonth.setUTCDate(prevMonth.getUTCDate() + 1)
			}
			this.widget.find(".datepicker-days tbody").empty().append(html);
			var currentYear = this._date.getUTCFullYear();
			var months = this.widget.find(".datepicker-months").find("th:eq(1)").text(year).end().find("span").removeClass("active");
			if (currentYear === year) {
				months.eq(this._date.getUTCMonth()).addClass("active")
			}
			if (currentYear - 1 < startYear) {
				this.widget.find(".datepicker-months th:eq(0)").addClass("disabled")
			}
			if (currentYear + 1 > endYear) {
				this.widget.find(".datepicker-months th:eq(2)").addClass("disabled")
			}
			for ( var i = 0; i < 12; i++) {
				if (year == startYear && startMonth > i || year < startYear) {
					$(months[i]).addClass("disabled")
				} else if (year == endYear && endMonth < i || year > endYear) {
					$(months[i]).addClass("disabled")
				}
			}
			html = "";
			year = parseInt(year / 10, 10) * 10;
			var yearCont = this.widget.find(".datepicker-years").find("th:eq(1)").text(year + "-" + (year + 9)).end().find("td");
			this.widget.find(".datepicker-years").find("th").removeClass("disabled");
			if (startYear > year) {
				this.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled")
			}
			if (endYear < year + 9) {
				this.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled")
			}
			year -= 1;
			for ( var i = -1; i < 11; i++) {
				html += '<span class="year' + (i === -1 || i === 10 ? " old" : "") + (currentYear === year ? " active" : "") + (year < startYear || year > endYear ? " disabled" : "") + '">' + year
						+ "</span>";
				year += 1
			}
			yearCont.html(html)
		},

		fillHours : function() {
			var table = this.widget.find(".timepicker .timepicker-hours table");
			table.parent().hide();
			var html = "";
			if (this.options.pick12HourFormat) {
				var current = 1;
				for ( var i = 0; i < 3; i += 1) {
					html += "<tr>";
					for ( var j = 0; j < 4; j += 1) {
						var c = current.toString();
						html += '<td class="hour">' + padLeft(c, 2, "0") + "</td>";
						current++
					}
					html += "</tr>"
				}
			} else {
				var current = 0;
				for ( var i = 0; i < 6; i += 1) {
					html += "<tr>";
					for ( var j = 0; j < 4; j += 1) {
						var c = current.toString();
						html += '<td class="hour">' + padLeft(c, 2, "0") + "</td>";
						current++
					}
					html += "</tr>"
				}
			}
			table.html(html)
		},
		fillMinutes : function() {
			var table = this.widget.find(".timepicker .timepicker-minutes table");
			table.parent().hide();
			var html = "";
			var current = 0;

			for ( var i = 0; i < 5; i++) {
				html += "<tr>";
				for ( var j = 0; j < 4; j += 1) {
					var c = current.toString();
					html += '<td class="minute">' + padLeft(c, 2, "0") + "</td>";
					current += 3
				}
				html += "</tr>"
			}
			table.html(html)
		},
		fillSeconds : function() {
			var table = this.widget.find(".timepicker .timepicker-seconds table");
			table.parent().hide();
			var html = "";
			var current = 0;
			for ( var i = 0; i < 5; i++) {
				html += "<tr>";
				for ( var j = 0; j < 4; j += 1) {
					var c = current.toString();
					html += '<td class="second">' + padLeft(c, 2, "0") + "</td>";
					current += 3
				}

				html += "</tr>"
			}
			table.html(html)
		},
		fillTime : function() {
			if (!this._date)
				return;
			var timeComponents = this.widget.find(".timepicker span[data-time-component]");
			var table = timeComponents.closest("table");
			var is12HourFormat = this.options.pick12HourFormat;
			var hour = this._date.getUTCHours();
			var period = "AM";
			if (is12HourFormat) {
				if (hour >= 12)
					period = "PM";
				if (hour === 0)
					hour = 12;
				else if (hour != 12)
					hour = hour % 12;
				this.widget.find(".timepicker [data-action=togglePeriod]").text(period)
			}
			hour = padLeft(hour.toString(), 2, "0");
			var minute = padLeft(this._date.getUTCMinutes().toString(), 2, "0");
			var second = padLeft(this._date.getUTCSeconds().toString(), 2, "0");
			timeComponents.filter("[data-time-component=hours]").text(hour);
			timeComponents.filter("[data-time-component=minutes]").text(minute);
			timeComponents.filter("[data-time-component=seconds]").text(second)
		},
		click : function(e) {
			e.stopPropagation();
			e.preventDefault();
			this._unset = false;
			var target = $(e.target).closest("span, td, th");
			if (target.length === 1) {
				if (!target.is(".disabled")) {
					switch (target[0].nodeName.toLowerCase()) {
					case "th":
						switch (target[0].className) {
						case "switch":
							this.showMode(1);
							break;
						case "prev":
						case "next":
							var vd = this.viewDate;
							var navFnc = DPGlobal.modes[this.viewMode].navFnc;
							var step = DPGlobal.modes[this.viewMode].navStep;
							if (target[0].className === "prev")
								step = step * -1;
							vd["set" + navFnc](vd["get" + navFnc]() + step);
							this.fillDate();
							this.set();
							break
						}
						break;
					case "span":
						if (target.is(".month")) {
							var month = target.parent().find("span").index(target);
							this.viewDate.setUTCMonth(month)
						} else {
							var year = parseInt(target.text(), 10) || 0;
							this.viewDate.setUTCFullYear(year)
						}
						if (this.viewMode !== 0) {
							this._date = UTCDate(this.viewDate.getUTCFullYear(), this.viewDate.getUTCMonth(), this.viewDate.getUTCDate(), this._date.getUTCHours(), this._date.getUTCMinutes(),
									this._date.getUTCSeconds(), this._date.getUTCMilliseconds());
							this.notifyChange()
						}
						this.showMode(-1);
						this.fillDate();
						this.set();
						break;
					case "td":
						if (target.is(".day")) {
							var day = parseInt(target.text(), 10) || 1;
							var month = this.viewDate.getUTCMonth();
							var year = this.viewDate.getUTCFullYear();
							if (target.is(".old")) {
								if (month === 0) {
									month = 11;
									year -= 1
								} else {
									month -= 1
								}
							} else if (target.is(".new")) {
								if (month == 11) {
									month = 0;
									year += 1
								} else {
									month += 1
								}
							}
							this._date = UTCDate(year, month, day, this._date.getUTCHours(), this._date.getUTCMinutes(), this._date.getUTCSeconds(), this._date.getUTCMilliseconds());
							this.viewDate = UTCDate(year, month, Math.min(28, day), 0, 0, 0, 0);
							this.fillDate();
							this.set();
							this.notifyChange()
						}
						break
					}
				}
			}
		},
		actions : {
			incrementHours : function(e) {
				this._date.setUTCHours(this._date.getUTCHours() + 1)
			},
			incrementMinutes : function(e) {
				this._date.setUTCMinutes(this._date.getUTCMinutes() + 1)
			},
			incrementSeconds : function(e) {
				this._date.setUTCSeconds(this._date.getUTCSeconds() + 1)
			},
			decrementHours : function(e) {
				this._date.setUTCHours(this._date.getUTCHours() - 1)
			},
			decrementMinutes : function(e) {
				this._date.setUTCMinutes(this._date.getUTCMinutes() - 1)
			},
			decrementSeconds : function(e) {
				this._date.setUTCSeconds(this._date.getUTCSeconds() - 1)
			},
			togglePeriod : function(e) {
				var hour = this._date.getUTCHours();
				if (hour >= 12)
					hour -= 12;
				else
					hour += 12;
				this._date.setUTCHours(hour)
			},
			showPicker : function() {
				this.widget.find(".timepicker > div:not(.timepicker-picker)").hide();
				this.widget.find(".timepicker .timepicker-picker").show()
			},
			showHours : function() {
				this.widget.find(".timepicker .timepicker-picker").hide();
				this.widget.find(".timepicker .timepicker-hours").show()

			},
			showMinutes : function() {
				this.widget.find(".timepicker .timepicker-picker").hide();
				this.widget.find(".timepicker .timepicker-minutes").show()
			},
			showSeconds : function() {
				this.widget.find(".timepicker .timepicker-picker").hide();
				this.widget.find(".timepicker .timepicker-seconds").show()
			},
			selectHour : function(e) {
				var tgt = $(e.target);
				var value = parseInt(tgt.text(), 10);
				if (this.options.pick12HourFormat) {
					var current = this._date.getUTCHours();
					if (current >= 12) {
						if (value != 12)
							value = (value + 12) % 24
					} else {
						if (value === 12)
							value = 0;
						else
							value = value % 12
					}
				}
				this._date.setUTCHours(value);
				this.actions.showPicker.call(this)
			},
			selectMinute : function(e) {
				var tgt = $(e.target);
				var value = parseInt(tgt.text(), 10);
				this._date.setUTCMinutes(value);
				this.actions.showPicker.call(this)
			},
			selectSecond : function(e) {
				var tgt = $(e.target);
				var value = parseInt(tgt.text(), 10);
				this._date.setUTCSeconds(value);
				this.actions.showPicker.call(this)
			}
		},
		doAction : function(e) {
			e.stopPropagation();
			e.preventDefault();
			if (!this._date)
				this._date = UTCDate(1970, 0, 0, 0, 0, 0, 0);
			var action = $(e.currentTarget).data("action");
			var rv = this.actions[action].apply(this, arguments);
			this.set();
			this.fillTime();
			this.notifyChange();
			return rv;
		},
		stopEvent : function(e) {
			e.stopPropagation();
			e.preventDefault()
		},
		keydown : function(e) {
			var self = this, k = e.which, input = $(e.target);
			if (k == 8 || k == 46) {
				setTimeout(function() {
					self._resetMaskPos(input)
				})
			}
		},
		keypress : function(e) {
			var k = e.which;
			if (k == 8 || k == 46) {
				return;
			}
			var input = $(e.target);
			var c = String.fromCharCode(k);
			var val = input.val() || "";
			val += c;
			var mask = this._mask[this._maskPos];
			if (!mask) {
				return false;
			}
			if (mask.end != val.length) {
				return;
			}
			if (!mask.pattern.test(val.slice(mask.start))) {
				val = val.slice(0, val.length - 1);
				while ((mask = this._mask[this._maskPos]) && mask.character) {
					val += mask.character;
					this._maskPos++
				}
				val += c;
				if (mask.end != val.length) {
					input.val(val);
					return false;
				} else {
					if (!mask.pattern.test(val.slice(mask.start))) {
						input.val(val.slice(0, mask.start));
						return false;
					} else {
						input.val(val);
						this._maskPos++;
						return false;
					}
				}
			} else {
				this._maskPos++
			}
		},
		change : function(e) {
			var input = $(e.target);
			var val = input.val();
			if (this._formatPattern.test(val)) {
				this.update();
				this.setValue(this._date.getTime());
				this.notifyChange();
				this.set()
			} else if (val && val.trim()) {
				this.setValue(this._date.getTime());
				if (this._date)
					this.set();
				else
					input.val("")
			} else {
				if (this._date) {
					this.setValue(null);
					this.notifyChange();
					this._unset = true
				}
			}
			this._resetMaskPos(input)
		},
		showMode : function(dir) {
			if (dir) {
				this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir))
			}
			this.widget.find(".datepicker > div").hide().filter(".datepicker-" + DPGlobal.modes[this.viewMode].clsName).show()
		},
		destroy : function() {
			this._detachDatePickerEvents();
			this._detachDatePickerGlobalEvents();
			this.widget.remove();
			this.$element.removeData("datetimepicker");
			this.component.removeData("datetimepicker")
		},
		formatDate : function(d) {

			return this.format.replace(formatReplacer, function(match) {
				var methodName, property, rv, len = match.length;
				if (match === "ms")
					len = 1;
				property = dateFormatComponents[match].property;
				if (property === "Hours12") {
					rv = d.getUTCHours();
					if (rv === 0)
						rv = 12;
					else if (rv !== 12)
						rv = rv % 12
				} else if (property === "Period12") {
					if (d.getUTCHours() >= 12)
						return "PM";
					else
						return "AM"
				} else {
					methodName = "get" + property;
					rv = d[methodName]()
				}
				if (methodName === "getUTCMonth")
					rv = rv + 1;
				if (methodName === "getUTCYear")
					rv = rv + 1900 - 2e3;
				return padLeft(rv.toString(), len, "0")
			})
		},
		parseDate : function(str) {
			var match, i, property, methodName, value, parsed = {};
			if (!(match = this._formatPattern.exec(str)))
				return null;
			for (i = 1; i < match.length; i++) {
				property = this._propertiesByIndex[i];
				if (!property)
					continue;
				value = match[i];
				if (/^\d+$/.test(value))
					value = parseInt(value, 10);
				parsed[property] = value
			}
			return this._finishParsingDate(parsed);
		},
		_resetMaskPos : function(input) {
			var val = input.val();
			for ( var i = 0; i < this._mask.length; i++) {
				if (this._mask[i].end > val.length) {
					this._maskPos = i;
					break
				} else if (this._mask[i].end === val.length) {
					this._maskPos = i + 1;
					break
				}
			}
		},
		_finishParsingDate : function(parsed) {
			var year, month, date, hours, minutes, seconds, milliseconds;
			year = parsed.UTCFullYear;
			if (parsed.UTCYear)
				year = 2e3 + parsed.UTCYear;
			if (!year)
				year = 1970;
			if (parsed.UTCMonth)
				month = parsed.UTCMonth - 1;
			else
				month = 0;
			date = parsed.UTCDate || 1;
			hours = parsed.UTCHours || 0;
			minutes = parsed.UTCMinutes || 0;
			seconds = parsed.UTCSeconds || 0;
			milliseconds = parsed.UTCMilliseconds || 0;
			if (parsed.Hours12) {
				hours = parsed.Hours12
			}
			if (parsed.Period12) {
				if (/pm/i.test(parsed.Period12)) {
					if (hours != 12)
						hours = (hours + 12) % 24
				} else {
					hours = hours % 12
				}
			}
			return UTCDate(year, month, date, hours, minutes, seconds, milliseconds);
		},
		_compileFormat : function() {
			var match, component, components = [], mask = [], str = this.format, propertiesByIndex = {}, i = 0, pos = 0;
			while (match = formatComponent.exec(str)) {
				component = match[0];
				if (component in dateFormatComponents) {
					i++;
					propertiesByIndex[i] = dateFormatComponents[component].property;
					components.push("\\s*" + dateFormatComponents[component].getPattern(this) + "\\s*");
					mask.push({
						pattern : new RegExp(dateFormatComponents[component].getPattern(this)),
						property : dateFormatComponents[component].property,
						start : pos,
						end : pos += component.length
					})
				} else {
					components.push(escapeRegExp(component));
					mask.push({
						pattern : new RegExp(escapeRegExp(component)),
						character : component,
						start : pos,
						end : ++pos
					})
				}
				str = str.slice(component.length)
			}
			this._mask = mask;
			this._maskPos = 0;
			this._formatPattern = new RegExp("^\\s*" + components.join("") + "\\s*$");
			this._propertiesByIndex = propertiesByIndex

		},
		_attachDatePickerEvents : function() {
			var self = this;
			this.widget.on("click", ".datepicker *", $.proxy(this.click, this));
			this.widget.on("click", "[data-action]", $.proxy(this.doAction, this));
			this.widget.on("mousedown", $.proxy(this.stopEvent, this));

			if (this.pickDate && this.pickTime) {
				this.widget.on("click.togglePicker", ".accordion-toggle", function(e) {
					e.stopPropagation();
					var $this = $(this);
					var $parent = $this.closest("ul");
					var expanded = $parent.find(".collapse.in");
					var closed = $parent.find(".collapse:not(.in)");
					if (expanded && expanded.length) {
						var collapseData = expanded.data("collapse");
						if (collapseData && collapseData.transitioning)
							return;
						expanded.collapse("hide");
						closed.collapse("show");
						$this.find("i").toggleClass(self.timeIcon + " " + self.dateIcon);
						self.$element.find(".add-on i").toggleClass(self.timeIcon + " " + self.dateIcon)
					}
				})
			}
			if (this.isInput) {
				this.$element.on({
					focus : $.proxy(this.show, this),
					change : $.proxy(this.change, this)
				});
				if (this.options.maskInput) {
					this.$element.on({
						keydown : $.proxy(this.keydown, this),
						keypress : $.proxy(this.keypress, this)
					})
				}
			} else {
				this.$element.on({
					change : $.proxy(this.change, this)
				}, "input");
				if (this.options.maskInput) {
					this.$element.on({
						keydown : $.proxy(this.keydown, this),
						keypress : $.proxy(this.keypress, this)
					}, "input")
				}
				if (this.component) {
					this.component.on("click", $.proxy(this.show, this))
				} else {
					this.$element.on("click", $.proxy(this.show, this))
				}
			}
		},
		_attachDatePickerGlobalEvents : function() {
			$(window).on("resize.datetimepicker" + this.id, $.proxy(this.place, this));
			if (!this.isInput) {
				$(document).on("mousedown.datetimepicker" + this.id, $.proxy(this.hide, this))
			}
		},
		_detachDatePickerEvents : function() {
			this.widget.off("click", ".datepicker *", this.click);
			this.widget.off("click", "[data-action]");
			this.widget.off("mousedown", this.stopEvent);
			if (this.pickDate && this.pickTime) {
				this.widget.off("click.togglePicker")
			}
			if (this.isInput) {
				this.$element.off({
					focus : this.show,
					change : this.change
				});
				if (this.options.maskInput) {
					this.$element.off({
						keydown : this.keydown,
						keypress : this.keypress
					})
				}
			} else {
				this.$element.off({
					change : this.change
				}, "input");
				if (this.options.maskInput) {
					this.$element.off({
						keydown : this.keydown,
						keypress : this.keypress
					}, "input")
				}
				if (this.component) {
					this.component.off("click", this.show)
				} else {
					this.$element.off("click", this.show)
				}
			}
		},
		_detachDatePickerGlobalEvents : function() {
			$(window).off("resize.datetimepicker" + this.id);
			if (!this.isInput) {
				$(document).off("mousedown.datetimepicker" + this.id)
			}
		},
		_isInFixed : function() {
			if (this.$element) {
				var parents = this.$element.parents();
				var inFixed = false;
				for ( var i = 0; i < parents.length; i++) {
					if ($(parents[i]).css("position") == "fixed") {
						inFixed = true;
						break
					}
				}
				return inFixed;
			} else {
				return false;
			}
		}
	};
	$.fn.datetimepicker = function(option, val) {
		return this.each(function() {
			var $this = $(this), data = $this.data("datetimepicker"), options = typeof option === "object" && option;
			if (!data) {
				$this.data("datetimepicker", data = new DateTimePicker(this, $.extend({}, $.fn.datetimepicker.defaults, options)))
			}
			if (typeof option === "string")
				data[option](val)
		})
	};
	$.fn.datetimepicker.defaults = {
		maskInput : false,
		pickDate : true,
		pickTime : true,
		pick12HourFormat : false,
		pickSeconds : true,
		startDate : -Infinity,
		endDate : Infinity,
		collapse : true
	};
	$.fn.datetimepicker.Constructor = DateTimePicker;
	var dpgId = 0;
	var dates = $.fn.datetimepicker.dates = {
		en : {
			days : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
			daysShort : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ],
			daysMin : [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ],
			months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
			monthsShort : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
		}
	};
	var dateFormatComponents = {
		dd : {
			property : "UTCDate",
			getPattern : function() {
				return "(0?[1-9]|[1-2][0-9]|3[0-1])\\b";
			}
		},
		MM : {
			property : "UTCMonth",
			getPattern : function() {
				return "(0?[1-9]|1[0-2])\\b";
			}
		},
		yy : {
			property : "UTCYear",
			getPattern : function() {
				return "(\\d{2})\\b";
			}
		},
		yyyy : {
			property : "UTCFullYear",
			getPattern : function() {
				return "(\\d{4})\\b";
			}
		},
		hh : {
			property : "UTCHours",
			getPattern : function() {
				return "(0?[0-9]|1[0-9]|2[0-3])\\b";
			}
		},
		mm : {
			property : "UTCMinutes",
			getPattern : function() {
				return "(0?[0-9]|[1-5][0-9])\\b";
			}
		},
		ss : {
			property : "UTCSeconds",
			getPattern : function() {
				return "(0?[0-9]|[1-5][0-9])\\b";
			}
		},
		ms : {
			property : "UTCMilliseconds",
			getPattern : function() {
				return "([0-9]{1,3})\\b";
			}
		},
		HH : {
			property : "Hours12",
			getPattern : function() {
				return "(0?[1-9]|1[0-2])\\b";
			}
		},
		PP : {
			property : "Period12",
			getPattern : function() {
				return "(AM|PM|am|pm|Am|aM|Pm|pM)\\b";
			}
		}
	};
	var keys = [];
	for ( var k in dateFormatComponents)
		keys.push(k);
	keys[keys.length - 1] += "\\b";
	keys.push(".");
	var formatComponent = new RegExp(keys.join("\\b|"));
	keys.pop();
	var formatReplacer = new RegExp(keys.join("\\b|"), "g");
	function escapeRegExp(str) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	function padLeft(s, l, c) {
		if (l < s.length)
			return s;
		else
			return Array(l - s.length + 1).join(c || " ") + s;
	}
	function getTemplate(timeIcon, pickDate, pickTime, is12Hours, showSeconds, collapse) {
		if (pickDate && pickTime) {
			return '<div class="bootstrap-datetimepicker-widget dropdown-menu">' + "<ul>" + "<li" + (collapse ? ' class="collapse in"' : "") + ">" + '<div class="datepicker">' + DPGlobal.template
					+ "</div>" + "</li>" + '<li class="picker-switch accordion-toggle"><a><i class="' + timeIcon + '"></i></a></li>' + "<li" + (collapse ? ' class="collapse"' : "") + ">"
					+ '<div class="timepicker">' + TPGlobal.getTemplate(is12Hours, showSeconds) + "</div>" + "</li>" + "</ul>" + "</div>";
		} else if (pickTime) {
			return '<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="timepicker">' + TPGlobal.getTemplate(is12Hours, showSeconds) + "</div>" + "</div>";
		} else {
			return '<div class="bootstrap-datetimepicker-widget dropdown-menu">' + '<div class="datepicker">' + DPGlobal.template + "</div>" + "</div>";
		}
	}
	function UTCDate() {
		return new Date(Date.UTC.apply(Date, arguments));
	}
	var DPGlobal = {
		modes : [ {
			clsName : "days",
			navFnc : "UTCMonth",
			navStep : 1
		}, {
			clsName : "months",
			navFnc : "UTCFullYear",
			navStep : 1
		}, {
			clsName : "years",
			navFnc : "UTCFullYear",
			navStep : 10
		} ],
		isLeapYear : function(year) {
			return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
		},
		getDaysInMonth : function(year, month) {
			return [ 31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month];
		},
		headTemplate : "<thead>" + "<tr>" + '<th class="prev">&lsaquo;</th>' + '<th colspan="5" class="switch"></th>' + '<th class="next">&rsaquo;</th>' + "</tr>" + "</thead>",
		contTemplate : '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker-days">' + '<table class="table-condensed">' + DPGlobal.headTemplate + "<tbody></tbody>" + "</table>" + "</div>" + '<div class="datepicker-months">'
			+ '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + "</table>" + "</div>" + '<div class="datepicker-years">' + '<table class="table-condensed">'
			+ DPGlobal.headTemplate + DPGlobal.contTemplate + "</table>" + "</div>";
	var TPGlobal = {
		hourTemplate : '<span data-action="showHours" data-time-component="hours" class="timepicker-hour"></span>',
		minuteTemplate : '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
		secondTemplate : '<span data-action="showSeconds" data-time-component="seconds" class="timepicker-second"></span>'
	};

	TPGlobal.getTemplate = function(is12Hours, showSeconds) {
		return '<div class="timepicker-picker">' + '<table class="table-condensed"' + (is12Hours ? ' data-hour-format="12"' : "") + ">" + "<tr>"
				+ '<td><a href="#" class="btn" data-action="incrementHours"><i class="icon-chevron-up"></i></a></td>' + '<td class="separator"></td>'
				+ '<td><a href="#" class="btn" data-action="incrementMinutes"><i class="icon-chevron-up"></i></a></td>'
				+ (showSeconds ? '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="incrementSeconds"><i class="icon-chevron-up"></i></a></td>' : "")
				+ (is12Hours ? '<td class="separator"></td>' : "") + "</tr>" + "<tr>" + "<td>" + TPGlobal.hourTemplate + "</td> " + '<td class="separator">:</td>' + "<td>" + TPGlobal.minuteTemplate
				+ "</td> " + (showSeconds ? '<td class="separator">:</td>' + "<td>" + TPGlobal.secondTemplate + "</td>" : "")
				+ (is12Hours ? '<td class="separator"></td>' + "<td>" + '<button type="button" class="btn btn-primary" data-action="togglePeriod"></button>' + "</td>" : "") + "</tr>" + "<tr>"
				+ '<td><a href="#" class="btn" data-action="decrementHours"><i class="icon-chevron-down"></i></a></td>' + '<td class="separator"></td>'
				+ '<td><a href="#" class="btn" data-action="decrementMinutes"><i class="icon-chevron-down"></i></a></td>'
				+ (showSeconds ? '<td class="separator"></td>' + '<td><a href="#" class="btn" data-action="decrementSeconds"><i class="icon-chevron-down"></i></a></td>' : "")
				+ (is12Hours ? '<td class="separator"></td>' : "") + "</tr>" + "</table>" + "</div>" + '<div class="timepicker-hours" data-action="selectHour">' + '<table class="table-condensed">'
				+ "</table>" + "</div>" + '<div class="timepicker-minutes" data-action="selectMinute">' + '<table class="table-condensed">' + "</table>" + "</div>"
				+ (showSeconds ? '<div class="timepicker-seconds" data-action="selectSecond">' + '<table class="table-condensed">' + "</table>" + "</div>" : "");
	}
})(window.jQuery);

(function($) {
	$.fn.datetimepicker.dates['zh-CN'] = {
		days : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日" ],
		daysShort : [ "周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日" ],
		daysMin : [ "日", "一", "二", "三", "四", "五", "六", "日" ],
		months : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
		monthsShort : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
		today : "今日",
		suffix : [],
		meridiem : [ "上午", "下午" ],
		format : "yyyy-mm-dd" /* 控制显示格式,默认为空，显示小时分钟 */
	};
}(jQuery));

// localStorageSet(freezeTxnAction + "_expandMore", "");

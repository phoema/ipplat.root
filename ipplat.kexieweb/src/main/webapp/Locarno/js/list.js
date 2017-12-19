$(document)
		.ready(
				function() {
					// 整个文档点击
					$(document).click(function() {
						// 选择原文 英文
						$("#languageSelect_ul").hide();
						$($("#languageSelect_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");

						// 排序
						$("#patentStrength_ul").hide();
						$($("#patentStrength_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");
						$("#addSort_ul").hide();
						$($("#addSort_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");

						// 二次检索
						$(".keyWord_ul").hide();
						$(".keyWord").css("background-image", "url('/" + rootPath + "../images//btn_arrow_down.png')");

						// 每页显示数
						$("#showNumSelect_ul").hide();
						$("#showNumSelect").css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");

					});

					// 右上标签点击
					{ // --chenhao
						if (freezeTxnAction == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList" || freezeTxnAction == "TradMarkOverviewList") {

							// 图文页

							$(".imageTest").click(function() {
								_doTempPost("/" + rootPath + "txnTradeMarkList.do", getSearchParameter());
							});
							// 表格页
							$(".table").click(function() {
								_doTempPost("/" + rootPath + "txnTradMarkTableList.do", getSearchParameter());
							});
							// 外观
							$(".surface").click(function() {
								_doTempPost("/" + rootPath + "txnTradMarkSurfaceList.do", getSearchParameter());
							});
							// 概细览
							$(".overView").click(function() {
								_doTempPost("/" + rootPath + "txnTradMarkOverviewList.do", getSearchParameter());
							});
						} else {
							// 表格页
							$(".table").click(function() {
								_doTempPost("/" + rootPath + "txnPatentTableList.do", getSearchParameter());
							});
							// 图文页

							$(".imageTest").click(function() {
								_doTempPost("/" + rootPath + "txnPatentImgTextList.do", getSearchParameter());
							});
							// 外观
							$(".surface").click(function() {
								_doTempPost("/" + rootPath + "txnPatentSurfaceList.do", getSearchParameter());
							});
							// 概细览
							$(".overView").click(function() {
								_doTempPost("/" + rootPath + "txnPatentOverviewList.do", getSearchParameter());
							});
						}

					}

					// 通用 排序 中英文切换栏
					{

						// 初始化排序字段
						var sortColumn = {};

						if (freezeTxnAction == "DecisionList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"RIDD" : "决定日",
								"AD" : "申请日"
							};
						}
						if (freezeTxnAction == "RefereeList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"CJD" : "审结日",
								"JA" : "判决金额"
							};
						}
						if (freezeTxnAction == "LawsList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"LDI" : "发布日期",
								"LID" : "签字日期",
								"LSD" : "实施日期",
								"LED" : "生效日期"
							};
						}
						// 商标的字段排序--chenhao
						if (freezeTxnAction == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList" || freezeTxnAction == "TradMarkOverviewList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"FD" : "申请日期",
								"RD" : "注册日期",
								"SRED" : "权限截止日期"
							// "RANK" : "相似度"

							};
						}
						// 期刊的字段排序--yuxi
						if (freezeTxnAction == "PeriodicalList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"APD" : "出版时间",
								"SCORE" : "系统评分",
								"APC" : "页数"
							};
						}
						// 期刊的字段排序--yuxi
						if (freezeTxnAction == "PeriodicalList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"APD" : "出版时间",
								"SCORE" : "系统评分",
								"APC" : "页数"
							};
						}
						// 标准的字段排序--yuxi
						if (freezeTxnAction == "StandardList") {
							sortColumn = {
								"RELEVANCE" : "默认排序",
								"SED" : "实施日期",
								"SBD" : "发布日期"
							};
						}

						// -EPRD
						var _sortColumnVal = $.trim($("#_sortColumn").val());
						var _sortColumnList = _sortColumnVal.split(";");

						for ( var i = 0; i < _sortColumnList.length; i++) {

							try {

								var _s = _sortColumnList[i];
								_s = _s.replace("%2B", "+");

								var order = _s.substr(0, 1);
								var column = _s.substr(1);

								if (order == "+") {
									order = "%2B";
								}

								if (i == 0) {
									$("#order").attr("v", order);
									if (order == "%2B") {
										$("#order").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn8_1.png')");
									} else if (order == "-") {
										$("#order").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn7_1.png')");
									}

									$("#patentStrength").attr("v", column);
									$("#patentStrength").text(sortColumn[column]);

								}

							} catch (e) {
								// alert(e);
							}

						}

						$.each(sortColumn, function(index, content) {
							$("#patentStrength_ul ul").append("<li value=\"" + index + "\">" + content + "</li>");
						});

						function switchSelect(content) {
							$(content).click(function() {

								if (content == "#patentStrength_ul li") {

									// 通用方法
									switchSelectCommon(this);
									// 点击之前的排序字段
									var sort1 = getSort();
									mGrid_patentGrid_obj.opt.sortColumn = sort1;
									mGrid_patentGrid_obj.query(1, function() {
										recordComplete();
									});

								}

								return false;
							});
						}

						// 设置li点击事件
						switchSelect("#patentStrength_ul li");
						switchMoseover("#patentStrength_ul li");
						switchShow(".patentStrength_Div");

						// 排序点击事件
						$("#order").bind("click", function(event) {
							doOrder("#order");
						});

						// 中英文切换
						switchShow(".languageSwitch_Div");
						// 鼠标悬停
						switchMoseover("#" + "languageSelect_ul li");

						$("#languageSelect_ul li").click(function() {

							switchSelectCommon(this);
							languageSelect(this);

						});
						// 法条合并
						$("#lawcombinedSelect").bind("click", function() {
							if ($("#select-key_IsMerge").val() == "true") {
								$("#lawcombinedSelect").text() == "合并法条";
								$("#select-key_IsMerge").val() == "";
								_doTempPost("/" + rootPath + "txnLawsList.do", "select-key:expressCN=" + $("#select-key_expressOrg").val());
							} else {
								$("#lawcombinedSelect").text() == "取消合并";
								_doTempPost("/" + rootPath + "txnMergeArticles.do", getSearchParameter());
							}

						});

						// 缩略图关闭
						$(".closeBigImage").click(function() {
							$("#showBigImage").hide();
							$(".shielding_layer").addClass("displayNone");
							MouseWheel();
							$(".bodyClass").removeClass("overflowHidden");
						});
					}

					// 分类统计
					{
						var categoryColumn = "";
						var categoryColumnCode = "";
						var categoryDefaultShowNum = 5;
						if (freezeTxnAction == "DecisionList") {
							// 审查决定的分类统计--quhang
							categoryColumn = "专利类型;决定类型;决定年;IPC;洛迦诺;请求人;专利申请人;专利权人";
							categoryColumnCode = "专利类型;决定类型;决定年;IPC;洛迦诺;请求人原文;申请人原文;专利权人原文";
							categoryDefaultShowNum = 2;
						} else if (freezeTxnAction == "RefereeList") {
							// 裁判文书的分类统计--quhang
							categoryColumn = "法院级别;判决金额;文书性质;案件类型;审理程序;立案年;法院所属省/市;原告或上诉人;被告或被上诉人;第三人";
							categoryColumnCode = "法院级别;判决金额;文书性质;案件类型;审理程序;立案年;法院所属省市;原告或上诉人原文;被告或被上诉人原文;第三人原文";
						} else if (freezeTxnAction == "LawsList") {
							// 法律法规的分类统计--quhang
							categoryColumn = "法规国别;法律分类;发布/签字年;实施/生效年;时效性";
							categoryColumnCode = "法规国别;法律分类;发布签字年;实施生效年;时效性";
						} else if (freezeTxnAction == "TradeMarkList" || freezeTxnAction == "TradMarkTableList" || freezeTxnAction == "TradMarkSurfaceList"
								|| freezeTxnAction == "TradMarkOverviewList") {
							// 商标的分类统计--chenhao
							categoryColumn = "当前权利状态;尼斯分类;申请人名称;商标类型;指定颜色;注册年;来源国;中国省区;代理人名称;专用权期限截止年;申请年;驰名商标";
							categoryColumnCode = "当前权利状态统计;尼斯分类;申请人名称原文;商标类型;指定颜色;注册年;来源国;中国省区;代理人名称原文;专用权期限截止年;申请年;驰名商标";
						} else if (freezeTxnAction == "PeriodicalList") {
							// 期刊的分类统计--yuxi
							categoryColumn = "文献类型;出版年;核心收录;学科分类;语种导航;国家导航";
							categoryColumnCode = "文献类型;出版年;核心收录;学科分类;语种导航;国家导航";
						} else if (freezeTxnAction == "StandardList") {
							// 标准的分类统计--yuxi
							categoryColumn = "国家标准;行业标准;国际标准;国外标准;计量规程规范;中国标准分类号(CCS);国际标准分类号(ICS);标准状态;实施年;发布年;起草单位;起草人;采用程度";
							categoryColumnCode = "国家标准;行业标准;国际标准;国外标准;计量规程规范;中国标准分类号CCS;国际标准分类号ICS;标准状态;实施年;发布年;起草单位原文;起草人原文;采用程度";
						}

						var categoryColumnCodeList = categoryColumnCode.split(";");
						var categoryColumnList = categoryColumn.split(";");

						// 构建页面

						for ( var i = 0; i < categoryColumnCodeList.length; i++) {

							if ((categoryColumnCodeList[i] + "")) {

								var disPlayNone = "";
								var disPlayNoneEnd = "";

								if (i > categoryDefaultShowNum) {
									disPlayNone = '<div class="selectContentMore disPlayNone">';
									disPlayNoneEnd = '</div>';
								}

								$("#categorySelectContent")
										.append(
												disPlayNone
														+ '<div class="patentType Width100P h34Center searOverviewLeftStyle1 borderBottom"> <span class="marginLeft5P">'
														+ categoryColumnList[i]
														+ '</span><div class="selectArrowSelect floatRight"></div></div><div v="'
														+ categoryColumnCodeList[i]
														+ '" vStr="'
														+ categoryColumnCodeList[i]
														+ '" class="'
														+ categoryColumnCodeList[i]
														+ 'Content searOverviewLeftContentS1 borderBottom"><div class="searOverviewLeftContentLoading" style="height:30px;"><span style="line-height:30px; margin-left:6%;">正在加载......</span></div></div>'
														+ disPlayNoneEnd);

							}
						}

						if (freezeTxnAction != "PeriodicalList") {
							$("#categorySelectContent").append(
									'<div class="selectMore Width100P h34Center  searOverviewLeftStyle1 leftBlockSpacingTop" style=" background-color: #9FB3D6; "> <img class="floatLeft moreImgStyle" src="/'
											+ rootPath + '../images//hisDown.png"> <span class="floatLeft" style="margin-left: 2%">更  多</span> </div>');
						}

						// 初始化分类统计
						var selectExpressCN;
						// 若为法律概览页面，法条合并后统计结果不变
						if ($("#_txnCode").val() == "LawsList") {
							if ($("#select-key_IsMerge").val() == "true") {
								selectExpressCN = $("#select-key_expressOrg").val();
							} else {
								selectExpressCN = $("#select-key_expressCN").val();
							}
						} else {
							selectExpressCN = $("#select-key_expressCN").val();
						}
						$.ajax({
							type : "POST",
							dataType : "xml",
							url : "/" + rootPath + "txnCommonCategorySelect.ajax",
							data : "select-key:categoryColumn=" + categoryColumn + "&select-key:categoryColumnCode=" + categoryColumnCode + "&select-key:freezeTxnAction=" + freezeTxnAction
									+ "&select-key:expressCN=" + encodeURIComponent(selectExpressCN) + "&select-key:expressCN2=" + encodeURIComponent($("#select-key_expressCN2").val())
									+ "&select-key:buttonItem=" + encodeURIComponent($("#select-key_buttonItem").val()) + "&select-key:express="
									+ encodeURIComponent($("#select-key_express").val()).replace(/\+/g, "%2B"),
							success : function(data) {

								$(".searOverviewLeftContentLoading").remove();

								var record = $.fz_common.getXmlNodeValues(data, "context>record");
								var column = "";
								var key = [];
								var value = [];
								record.each(function() {

									var tmp = $(this).find("column:first").text()

									if (column != "" && column != tmp) {

										// 更新
										initContent(key, value, "." + column + "Content");
										key = [];
										value = [];

									}

									column = tmp;
									key.push($(this).find("key:first").text());
									value.push($(this).find("value:first").text());

								});

								// 最后一组
								initContent(key, value, "." + column + "Content");

								// 展开收起
								{
									$(".searOverviewLeftContentS1").each(function() {

										var i = 0;
										var noExpand = false;

										$(this).children("div").each(function() {

											i = i + 1;

											if (i > 5) {
												noExpand = true;
												$(this).addClass("displayNone");
												$(this).addClass("expandColumn");
											}

										});

										if (noExpand) {

											var m_div = document.createElement("div");
											$(m_div).addClass("height30 expandMore cursorPointer noExpand");
											var m_span1 = document.createElement("span");
											$(m_span1).text("展开更多");
											$(m_span1).addClass("searOverviewLeftContentSpan1 colBlue expandMoreSpan")
											$(m_div).append(m_span1);
											$(this).append(m_div);
										}

									});
								}

								$(".expandMore").click(function() {

									expandMoreOnclick(this);

								});

								initExpandMoreField();

								// 点击左边筛选某一项
								$(".searOverviewLeftContentS1 div").click(function() {
									if ($(this).hasClass("leftTopSelect")) {
										return;
									}
									$(this).addClass("leftTopSelect");
									var vStr = $(this).parent().attr("vStr");
									var span = $(this).children().get(0);
									if ($(span).text() == "展开更多" || $(span).text() == "收起") {
										return;
									}
									rightTopAddItem(span, vStr);
								});

								// 初始化已经有的按钮
								initRightTop("button");
								initRightTop("leftButton");

								//已选状态
								setSearOverviewLeftContentS1();

								// 查询相关数据,法律无相关数据
								if (freezeTxnAction != "LawsList" && $("#select-key_expressCN").val() != null) {
									var expressAll = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
									// listRelationData($("#select-key_expressCN").val(),
									// freezeTxnAction);
									//if ($(".rightContentTipNum").text() != "00000 0" && $(".rightContentTipNum").text() != "") {
									listRelationData(expressAll, freezeTxnAction);
									//}
								}

								// IPC内容提示
								$(".IPCContent div").mouseover(function() {
									setIPCTitle2(this);
								});
								// 学科分类
								$(".学科分类Content div").mouseover(function() {
									setSubjectTitle(this);
								});
								// 核心收录
								$(".ASContent div").mouseover(function() {
									setCenterTitle(this);
								});
								$(".searOverviewLeftContentSpan1").limit();

							}
						});

						setCategorySelectButton();

					}

					// 显示概览页面相关数据判例滑动列表
					caseSelect();
					// 显示列表（默认隐藏）
					$("#theme").show();
					$(".rightContentTipNum").show();
					$("#mGrid_patentGrid .modelGridPaginatorContainer").show();

					// 带入上次页面的语言栏
					var select_languageSelect = $("#select-key__languageSelect").val();
					if (select_languageSelect != null && select_languageSelect != "") {
						$("#languageSelect").text(select_languageSelect)
					}

				});

var _overViewFirst = true;

var _firstLoad = true;
var _record_number = 0;

// 列表加载完成后需要初始化的内容
function recordComplete() {

	if (_firstLoad) {
		_firstLoad = false;
		_record_number = $("#contentTipNumList").text();
	}

	var txncode = $("#_txnCode").val();
	// 初始化概览列表页面
	{

		if (txncode == "RefereeList" || txncode == "DecisionList") {
			$(".iconFirst-displayInline-status-Yellow, .iconFirst-displayInline-status-Green, .iconFirst-displayInline-status-Blue ").each(function() {
				var text = $(this).text();
				if (text == "" || text == null) {
					$(this).css("background-color", "transparent");
				}
			});
		}

		$(".tradtrKind").each(function() {
			if ($(this).text().trim() == "") {
				$(this).hide();
			}
		});
	}

	// 法律法规概览页面初始化
	{
		if (freezeTxnAction == "LawsList") {
			$(".ldi0").each(function() {
				$(this).addClass("displayNone");
			});
			$(".lid1").each(function() {
				$(this).addClass("displayNone");
			});
		}
	}
	// 裁判文书该览页面初始化
	{
		if (freezeTxnAction == "RefereeList") {
			$(".yuangao2, .shangshuren1, .beigao2, .beishangshuren1").each(function() {
				$(this).addClass("displayNone");
			});

			$(".yuangao1, .beishangshuren2, .beigao1, .shangshuren2").each(function() {
				$(this).addClass("displayInline");
			});
		}
	}

	$(".pdfExist0").each(function() {
		$(this).attr("target", "");
		$(this).attr("href", 'javascript:$.fz_common.alert("提示", "该专利暂无PDF文件。");');
	});
	// 增加各类链接 (每个检索地址不同)--对应细览
	$(".APCLink").each(function() {
		buildLink(this, "申请人", "txn" + freezeTxnAction);
	});

	$(".IPCQLink").each(function() {
		buildLink(this, "IPC", "txn" + freezeTxnAction);
	});

	$(".PRNOLink").each(function() {
		buildLink(this, "申请号", "txn" + freezeTxnAction);
	});

	$(".ARLink").each(function() {
		buildLink(this, "代理人名称", "txn" + freezeTxnAction);
	});

	$(".NCLink").each(function() {
		buildLink(this, "尼斯分类", "txn" + freezeTxnAction);
	});

	$(".HNOLink").each(function() {
		buildLink(this, "申请人名称", "txn" + freezeTxnAction);
	});

	$(".tradtrRANK").each(function() {
		$(this).hide();
	});

	if (txncode == "TradeMarkList") {
		$(".HNOLink").find("a").css("word-break", "break-all");
		$(".HNOLink").find("a").css("word-wrap", "break-word");
	}
	$(".standardCcs").each(function() {
		buildLink(this, "中国标准分类号CCS", "txn" + freezeTxnAction);
	});

	$(".standardIcs").each(function() {
		buildLink(this, "国际标准分类号ICS", "txn" + freezeTxnAction);
	});

	$(".tscCN").each(function() {
		var tsc = $(this).text();
		$(this).text(iseLibrary[tsc]);
	});

	$(".RIPOLink").each(function() {
		buildLink(this, "请求人", "txn" + freezeTxnAction);
	});

	$(".ANOLink").each(function() {
		buildLink(this, "申请号", "txn" + freezeTxnAction);
	});

	$(".ANOPATLink").each(function() {
		buildLink(this, "申请号", "txn" + "PatentImgTextList");
	});

	$(".APOLink").each(function() {
		buildLink(this, "专利申请人", "txn" + freezeTxnAction);
	});

	$(".APOPATLink").each(function() {
		buildLink(this, "申请人", "txn" + "PatentImgTextList");
	});

	$(".APOASOPATLink").each(function() {
		buildDesAPOASOLink(this, "txn" + "PatentImgTextList");
	});

	$(".CNLink").each(function() {
		buildLink(this, "法院名称", "txn" + freezeTxnAction);
	});

	$(".PLOLink").each(function() {
		buildLink(this, "原告或上诉人", "txn" + freezeTxnAction);
	});

	$(".DEOLink").each(function() {
		buildLink(this, "被告或被上诉人", "txn" + freezeTxnAction);
	});

	$(".CDNLink").each(function() {
		buildLink(this, "案号", "txn" + freezeTxnAction);
	});

	// advlink
	$(".j_advLink").each(function() {
		buildLink(this, "细览链接", "txn" + freezeTxnAction);
	});

	// 作者
	$(".j_authors").each(function() {
		buildLink(this, "作者", "txn" + freezeTxnAction);
	});

	// 作者单位
	$(".j_authorsorg").each(function() {
		buildLink(this, "作者单位", "txn" + freezeTxnAction);
	});

	// 文献来源
	$(".j_journalname").each(function() {
		buildLinkJournal(this, "文献来源原文", "出版年", "ISS", "txn" + freezeTxnAction);
	});
	// 期刊关键词
	$(".j_journalkword").each(function() {
		buildLink(this, "关键词", "txn" + freezeTxnAction);
	});

	// IPC移动上去之后的AJAX装载提示
	$(".IPCQLink a").mouseover(function() {
		setIPCTitle(this);
	});

	$("span[name='checkbox']").click(function() {
		$(this).toggleClass("checkBoxBg");
		$(this).toggleClass("checkBoxClickBg");
		_setSelectNum();
	});

	if (txncode == "PeriodicalList") {
		$(".dbSource_").each(function() {

			var dbsource = $(this).html();
			var regS = new RegExp("&lt;", "gi");
			dbsource = dbsource.replace(regS, "<");
			var regS = new RegExp("&gt;", "gi");
			dbsource = dbsource.replace(regS, ">");
			$(this).html(dbsource);

		});
	}

	// 商标概细览页面有测试是否加载问题处理
	{
		if ($(".traNum").text() == "0") {

			$(".tradtr-Oeviwlrcon").css("width", "auto");
			$("#_tradmark_detail").hide();

		}
	}

	// 列表 详览
	if (txncode == "TradMarkOverviewList") {

		if (_overViewFirst) {
			$(".tradtr-Oeviwlrcont:first").click();
			_overViewFirst = false;
		}

		// 总记录数为0
		if ($("#mGrid_patentGrid .totalnumber").text() == 0) {
			$("#_tradmark_detail").hide();
			$(".tradtr-Oveviwlr").width('100%');
			$("#_tradmark_detail").width(0);
		} else {
			$("#_tradmark_detail").show();
			$(".tradtr-Oveviwlr").width('50%');
		}

	}

	// 弹出大图图层
	$(".mark").click(function() {
		$("#showBigImage").show();
		$(".shielding_layer").removeClass("displayNone");
		var scrolltop = $(document).scrollTop();
		$("#showBigImage").css("margin-top", scrolltop);
		$("#bigimg").attr("src", $(this).attr("src"));
		$("#imgAlertTitle").html("");
		setLayerHeight();
		disabledMouseWheel();
		$(".bodyClass").addClass("overflowHidden");
	});

	// 选中语言
	var languageSelectTxt = $("#languageSelect").text();

	$("#languageSelect_ul li").each(function() {

		if ($(this).text() == languageSelectTxt) {
			$(this).click();
		}

	});

	// 高亮
	var ex = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
	var column = "标题,摘要,";

	if (txncode == "PeriodicalList" || txncode == "LawsList") {
		column = "法条名称,法条内容,法律名称,标题,摘要,";
	} else if (txncode == "TradeMarkList" || txncode == "TradMarkTableList" || txncode == "TradMarkSurfaceList" || txncode == "TradMarkOverviewList") {
		column = "商标名称,申请人名称,代理人名称,";
	} else if (txncode == "StandardList") {
		column = "标准名称,";
	} else if (txncode == "DecisionList") {
		column = "名称,请求人,专利申请人,法律依据,";
	} else if (txncode == "RefereeList") {
		column = "名称,法院名称,原告或上诉人,被告或被上诉人,";
	}

	var hightDiv = ".listHightDiv";

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : "/" + rootPath + "txnExpressParseMap.ajax",
		data : "select-key:column=" + column + "&select-key:buf=" + encodeURIComponent(ex),
		success : function(data) {
			var patent = $.fz_common.getXmlNodeValues(data, "context>patent>seaKey");
			var column = "";
			var key = [];
			var value = [];
			var tmp = patent.text();
			key = tmp.split(";");

			$(hightDiv).highlight(key, {
				insensitive : 0
			});

		},
		error : function(e) {
		}
	});

	// 替换摘要标签
	$(".signFilter").each(function() {

		var txt = $(this).html();

		txt = txt.replace(/(\&lt;)/g, "<");
		txt = txt.replace(/(\&gt;)/g, ">");
		txt = txt.replace(/(\&amp;)/g, "&");

		$(this).html(txt);

	});

	// 权限
	securityListFun();

}

// 过滤器
var angularApp;
if (typeof (angular) != "undefined" && angular != null) {
	angularApp = angular.module('patentApp', []);
	angularApp.filter('subTime', function() {
		return function(input) {
			if (input != null && input != "") {
				return input.substr(0, 4) + "." + input.substr(5, 2) + "." + input.substr(8, 2);
			} else {
				return "";
			}
		}

	});

	angularApp.filter('ridtFilter', function() {
		return function(input) {
			if (input == "复审决定") {
				return "专利申请人：";
			} else if (input == "无效决定") {
				return "专利权人：";
			} else {
				return input;
			}
		}

	});

	angularApp.filter('yearFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				return input.substr(0, 4);
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

	angularApp.filter('taskProgressFilter', function() {
		return function(input) {
			return "75";
		}
	});

	angularApp.filter('taskTypeFilter', function() {
		return function(input) {
			return taskType[input];
		}
	});

	angularApp.filter('taskStatusFilter', function() {
		return function(input) {
			return taskStatus[input];
		}
	});

	angularApp.filter('numberStatusFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				if (input == "1") {
					return "进行任务中";
				} else if (input == "2") {
					return "任务完成";
				} else if (input == "3") {
					return "超期";
				} else if (input == "4") {
					return "发生错误";
				} else if (input == "0") {
					return "提交到队列";
				} else if (input == "-1") {
					return "等待处理";
				}

				return input;
			}
		}
	});

	angularApp.filter('numberStatusClassFilter1', function() {
		return function(input) {
			if (input != null && input != "") {
				if (input == "2") {
					return "missionListHitEnable";
				} else {
					return "missionListHitUnEnable";
				}

				return input;
			}
		}
	});

	angularApp.filter('numberStatusClassFilter2', function() {
		return function(input) {
			if (input != null && input != "") {
				if (input == "2") {
					return "missionListLookUPEnable";
				} else {
					return "missionListLookUPUnenable";
				}

				return input;
			}
		}
	});

	angularApp.filter('trademarkSrcFilter', function() {
		return function(input) {
			if (input == '非驰名' || input == '0') {
				return "/" + rootPath + "module/di/img/public/empty.gif";
			} else {
				return "/" + rootPath + "module/di/img/nonpatent/Tradmark/Tdmarkimg-5.jpg";
			}

		}
	});

	angularApp.filter('trademarkCsDbFilter', function() {
		return function(input) {
			var csdb = input.split("|");
			var cs = csdb[0];
			var db = csdb[1];
			var values = "";
			return cs;
			/*
			 * if (db == "CN") { return cs; } else { $.each(tradeMarkCs,
			 * function(index, content) { if (cs == index) { values = content; }
			 * }); return values; }
			 */

		}

	});

	angularApp.filter('periodicalSplitName', function() {
		return function(input) {
			var strs = input.split("|");
			var str1 = strs[0];
			var str2 = strs[1];
			var allStr = "";
			var s1 = str1.split(";");
			var s2 = str2.split(";");
			for ( var i = 0; i < s1.length; i++) {
				var title;
				$.each(iseAvd, function(index, content) {
					if (s1[i] == index) {
						title = content;
					}
				});
				allStr += "<a title='" + title + "' href='" + s2[i] + "'>" + s1[i] + "</a>  ";
			}
			return allStr;
		}
	});

	angularApp.filter('periodicalName', function() {
		return function(input) {
			var strs = input.split(";");
			var str1 = strs[0];
			var str2 = strs[1];
			allStr += "<a href='" + str1 + "'>" + str1 + ";" + str2 + "</a>";
			return allStr;
		}
	});

	angularApp.filter('tradeMarkFormatDate', function() {
		return function(input) {
			var dates = input.substring(0, 10);
			var regS = new RegExp("/", "gi");
			return dates.replace(regS, ".");
		}
	});
	angularApp.filter('getUrlByTmdb', function() {
		return function(input) {
			if ("CN" == input) {
				return "txnTradeMarkDetail";
			} else if ("US" == input) {
				return "txnUsTradeMarkDetail";
			} else if ("ES" == input) {
				return "txnMdTradeMarkDetail";
			}
		}
	});
}

// 商标的概览和细缆
function trademarkDetail(obj) {

	var _id = $(obj).attr("id");
	var _a = $(obj).attr("a");
	// 遮罩层
	// $("#_tradmark_detail").showLoading({});

	$(obj).siblings("div").css("backgroundColor", "");
	$(obj).css("backgroundColor", "#e4f1fd");
	var url = "/" + rootPath + "txnTradeMarkOverviewD.do?select-key:ID=" + _id;
	$("#_tradmark_detail").html(
			"<iframe id='iframeat' allowtransparency='true' width='100%' style='min-height:1200px; padding-top:0px;' frameborder='0' src='" + url
					+ "' name='iframe_a'><p>Your browser does not support iframes.</p></iframe>");

}
function removeNull(str) {
	if (str == null || str == "null") {
		return "";
	} else {
		return str;
	}
}
function trademarkSplit(process) {
	var str = "";
	if (process != "") {
		var processes = process.split(";");
		if (processes.length > 0) {
			for ( var i = 0; i < processes.length; i++) {
				str += "<p class='left'>" + processes[i] + "</p>"
			}
		}
	}
	return str;
}

function trademarkMsc(msc, tmdb) {
	if (tmdb == "US") {
		return msc;
	} else if (tmdb == "CN") {
		if (msc == "0")
			return "否";
		else
			return "是";
	} else if (tmdb == "ES") {
		if (msc == "0")
			return "no";
		else
			return "yes";
	} else {
		return msc;
	}

}
function trademarkNcsAll(ncsAll) {

}

var relationMap = new Map();
// 相关数据查询
function listRelationData(express, txnCode) {
	exp = encodeURIComponent(express);
	$.ajax({
		type : "POST",
		url : "/" + rootPath + "txn" + txnCode + "Data" + ".ajax",
		dataType : "html",
		data : "select-key:expressCN=" + (exp),
		success : function(data) {
			if ($.fz_common.getXmlNodeValue(data, "context>error-code") != "000000") {
				putRelationNumToMap(data);
				putRelationExpressToMap(data);
				$("#relationPATNUM").text(relationMap.get("PAT_NUM"));
				$("#relationTRANUM").text(relationMap.get("TRA_NUM"));
				$("#relationISENUM").text(relationMap.get("ISE_NUM"));
				$("#relationSTDNUM").text(relationMap.get("STD_NUM"));
				$("#relationDECCSENUM").text(relationMap.get("DECCSE_NUM"));
				$("#relationDECNUM").text(relationMap.get("DEC_NUM"));
				$("#relationCSENUM").text(relationMap.get("CSE_NUM"));
				// 相关数据的链接
				$(".PATRelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("PAT_EXPRESS"), "txn" + "PatentImgTextList");
				});
				$(".TRARelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("TRA_EXPRESS"), "txn" + "TradeMarkList");
				});
				$(".STDRelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("STD_EXPRESS"), "txn" + "StandardList");
				});
				$(".ISERelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("ISE_EXPRESS"), "txn" + "PeriodicalList");
				});
				$(".DECRelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("DEC_EXPRESS"), "txn" + "DecisionList");
				});
				$(".CSERelationLink").each(function() {
					buildLinkRelation(this, relationMap.get("CSE_EXPRESS"), "txn" + "RefereeList");
				});
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
		}
	});
}

function putRelationNumToMap(data) {
	var strs = new Array("PAT_NUM", "TRA_NUM", "ISE_NUM", "STD_NUM", "CSE_NUM", "DEC_NUM", "DECCSE_NUM");
	for ( var i = strs.length - 1; i >= 0; i--) {
		if ($(data).find(strs[i]) != null) {
			relationMap.put(strs[i], $(data).find(strs[i]).find("NUM").text());
		} else {
			relationMap.put(strs[i], "0");
		}
	}
}

function putRelationExpressToMap(data) {
	var strs = new Array("PAT_EXPRESS", "TRA_EXPRESS", "ISE_EXPRESS", "STD_EXPRESS", "CSE_EXPRESS", "DEC_EXPRESS");
	for ( var i = strs.length - 1; i >= 0; i--) {
		if ($(data).find(strs[i]) != null) {
			relationMap.put(strs[i], $(data).find(strs[i]).find("EXPRESS").text());
		}
	}
}
/**
 * 概细览页面的中国商标数据
 *
 * @param record
 * @param data
 */
function showCnTradeMarkDetail(record, data) {
	$("#tradtr-Oveviwrlimg-thb").attr("src", $(record).find("IMG").text());
	var tmdb = $(record).find("TMDB").text()
	var sctmdb = $(record).find("CSTMDB").text();
	if (sctmdb == "" || sctmdb == null) {
		sctmdb = "暂无数据";
	}
	$("#CSTMDB").html(sctmdb);
	var mk = $(record).find("MK").text();
	if (mk == "" || mk == null) {
		mk = "暂无数据";
	}
	$("#MK").html(mk);
	$("#d_mno").html($(record).find("MNO").text());
	$("#d_rn").html($(record).find("RN").text());
	$("#d_sn").html($(record).find("SN").text());
	var d_rdStr = $(record).find("RD").text();
	$("#d_rd").html(formatDateStr(d_rdStr));
	var d_fdStr = $(record).find("FD").text();
	$("#d_fd").html(formatDateStr(d_fdStr));
	$("#d_nc").html($(record).find("NC").text());
	$("#d_ncsall").html($(record).find("NCSALL").text());
	$("#d_hnoall").html($(record).find("HNOALL").text());
	$("#d_hnacall").html($(record).find("HNACALL").text());
	$("#d_hnadcall").html($(record).find("HNADCALL").text());
	$("#d_aroall").html($(record).find("AROALL").text());
	$("#d_gscall").html($(record).find("GSCALL").text());
	$("#d_mpdsall").html(trademarkSplit($(record).find("MPDSALL").text()));
	$("#d_peai").html($(record).find("PEAI").text());
	$("#d_peap").html($(record).find("PEAP").text());
	$("#d_ird").html($(record).find("IRD").text());
	$("#d_rai").html($(record).find("RAI").text());
	$("#d_mprd").html($(record).find("MPRD").text());
	$("#d_srsd").html($(record).find("SRSD").text());
	$("#d_sred").html($(record).find("SRED").text());
	$("#d_oed").html($(record).find("OED").text());
	$("#d_lsd").html($(record).find("LSD").text());
	$("#d_msc").html(trademarkMsc($(record).find("MSC").text(), tmdb));
	$("#d_mr").html($(record).find("MR").text());
	$("#d_mas").html("<p>" + $(record).find("MAS").text() + "</p>");
	$("#d_wkcn").html($(record).find("MR").text());
	$("#d_wka").html($(record).find("WKA").text());
	$("#d_wkca").html($(record).find("WKCA").text());
	$("#d_wkcm").html($(record).find("WKCM").text());
	$("#d_wkcb").html($(record).find("WKCB").text());
	$("#d_wkcd").html($(record).find("WKCD").text());
	$("#d_wkcw").html("<a href='" + $(record).find("WKCW").text() + "' target='_blank'>" + $(record).find("WKCW").text() + "</a>");
	// 转让流程
	var transfers = $.fz_common.getXmlNodeValues(data, "context>TRANSFER");
	trademarkTransfer(transfers, tmdb);
	// 许可备案流程
	var licenses = $.fz_common.getXmlNodeValues(data, "context>LICENSE");
	var licenseStr = "";
	$(licenses).each(function(idnex, domE) {
		var seqno = "<td>" + $(domE).find("SEQNO").text() + "</td>";
		var mli = "<td>" + $(domE).find("MLI").text() + "</td>";
		var mlp = "<td>" + $(domE).find("MLP").text() + "</td>";
		var mlln = "<td>" + $(domE).find("MLLN").text() + "</td>";
		var mltp = "<td>" + $(domE).find("MLTP").text() + "</td>";
		var xkr = "<td>" + $(domE).find("XKR").text() + "</td>";
		var bxkr = "<td>" + $(domE).find("BXKR").text() + "</td>";
		var lgs = "<td>" + $(domE).find("LGS").text() + "</td>";
		var mlld = "<td>" + $(domE).find("MLLD").text() + "</td>";
		var allStr = "<tr>" + seqno + mli + mlp + mlln + mltp + xkr + bxkr + lgs + mlld + "</tr>";
		licenseStr += allStr;

	});
	$("#tbody_licenses").html(licenseStr);
}
/**
 * 概细览页面的美国商标数据
 *
 * @param record
 * @param data
 */
function showUsTradeMarkDetail(record, data) {
	$("#us_tradtr-Oveviwrlimg-thb").attr("src", $(record).find("IMG").text());
	var tmdb = $(record).find("TMDB").text()
	var sctmdb = $(record).find("CSTMDB").text();
	if (sctmdb == "" || sctmdb == null) {
		sctmdb = "暂无数据";
	}
	$("#us_CSTMDB").html(sctmdb);
	var mk = $(record).find("MK").text();
	if (mk == "" || mk == null) {
		mk = "暂无数据";
	}
	var d_fdStr = $(record).find("FD").text();
	var d_rdStr = $(record).find("RD").text();
	$("#us_MK").html(mk);
	$("#us_d_mno").html($(record).find("MNO").text());
	$("#us_d_fd").html(formatDateStr(d_fdStr));
	$("#us_d_sn").html($(record).find("SN").text());
	$("#us_d_rn").html($(record).find("RN").text());
	$("#us_d_rd").html(formatDateStr(d_rdStr));
	$("#us_d_nc").html($(record).find("NC").text());
	$("#us_d_srsd").html(formatDateStr($(record).find("SRSD").text()));
	$("#us_d_sred").html(formatDateStr($(record).find("SRED").text()));
	$("#us_d_mprd").html($(record).find("MPRD").text());
	$("#us_d_tdu").html($(record).find("TDU").text());
	$("#us_d_aroall").html($(record).find("AROALL").text());
	$("#us_d_msc").html($(record).find("MSC").text());
	$("#us_d_gscall").html($(record).find("GSCALL").text());
	// 转让流程
	var transfers = $.fz_common.getXmlNodeValues(data, "context>TRANSFER");
	trademarkTransfer(transfers, tmdb);

}
function trademarkTransfer(transfers, tmdb) {
	var transferStr = "";
	if (tmdb == "CN" || tmdb == "US") {
		$(transfers).each(function(index, domE) {
			var seqno = "<td>" + $(domE).find("SEQNO").text() + "</td>";
			var mti = "<td>" + removeNull($(domE).find("MTI").text()) + "</td>";// 期号
			var mtp = "<td>" + removeNull($(domE).find("MTP").text()) + "</td>";// 页号
			var zrr = "<td>" + removeNull($(domE).find("ZRR").text()) + "</td>";// 转让人
			var srr = "<td>" + removeNull($(domE).find("SRR").text()) + "</td>";// 受让人
			var tad = "<td>" + removeNull($(domE).find("TAD").text()) + "</td>";// 转让公布日期
			var allStr = "<tr>" + seqno + mti + mtp + zrr + srr + tad + "</tr>";
			transferStr += allStr;
		});
		if (tmdb.toUpperCase() == "CN") {
			$("#transfer_tbody").html(transferStr);
		} else {
			$("#us_transfer_tbody").html(transferStr);
		}

	} else {
		$(transfers).each(function(index, doeE) {
			var seqno = "<td>" + $(domE).find("SEQNO").text() + "</td>";
			var fon = "<td>" + $(domE).find("FON").text() + "</td>";
			var foa = "<td>" + $(domE).find("FOA").text() + "</td>";
			var foc = "<td>" + $(domE).find("FOC").text() + "</td>";
			var allStr = "<tr>" + fon + foa + foc + "</tr>";
			transferStr += allStr;
		});
		// $("#us_transfer_tbody").html(transferStr);
	}
}
function formatDateStr(datestr) {
	if (datestr.length >= 8 && typeof datestr != 'undefined') {
		return datestr.substr(0, 4) + "." + datestr.substr(4, 2) + "." + datestr.substr(6, 2);
	}
}
function caseSelect() {
	$.fn.jQSelect = function(settings) {
		var $div = this;
		var $cartes = $div.find(".cartes");
		var $lists = $div.find(".lists");
		var listTxt = $cartes.find(".listTxt");
		var listVal = $cartes.find(".listVal");
		var items = $lists.find("ul > li");
		$div.hover(function() {
			$(this).addClass("hover");
		}, function() {
			$(this).removeClass("hover");
		});
		// 绑定点击事件
		items.click(function() {
			listVal.val($(this).attr("id"));
			listTxt.val($(this).text());
			$div.removeClass("hover");
		}).mouseover(function() {
			$(this).removeClass("cwhite");
			$(this).addClass("cgray");
		}).mouseout(function() {
			$(this).removeClass("cgray");
			$(this).addClass("cwhite");
		});
	};
}

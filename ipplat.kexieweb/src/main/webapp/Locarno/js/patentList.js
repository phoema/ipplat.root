$(document)
		.ready(
				function() {

					// 整个文档点击
					$(document).click(function() {
						$(".tableListSet").addClass("displayNone");
						$("#languageSelect_ul").hide();
						$($("#languageSelect_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");

						// 排序
						$("#patentStrength_ul").hide();
						$($("#patentStrength_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");
						$("#addSort_ul").hide();
						$($("#addSort_ul").prev().children().get(0)).css("background-image", "url('/" + rootPath + "../images//arrowBlueDown.png')");

						// 关键字
						$(".keyWord_ul").hide();
						$(".keyWord").css("background-image", "url('/" + rootPath + "../images//btn_arrow_down.png')");

						// 每页显示数
						$("#showNumSelect_ul").hide();
						$("#showNumSelect").css("background-image", "url('/" + rootPath + "../images//arrowBlueuP.png')");

					});

					// 右上标签点击
					{

						// 表格页

						$(".table").click(function() {
							// window.location.href = "txnPatentTableList.do" +
							// getSearchParameter();
							_doTempPost("/" + rootPath + "txnPatentTableList.do", getSearchParameter());
						});
						// 图文页

						$(".imageTest").click(function() {
							// window.location.href = "txnPatentImgTextList.do"
							// +
							// getSearchParameter();
							_doTempPost("/" + rootPath + "txnPatentImgTextList.do", getSearchParameter());
						});
						// 外观
						$(".surface").click(function() {
							// window.location.href = "txnPatentSurfaceList.do"
							// +
							// getSearchParameter();
							_doTempPost("/" + rootPath + "txnPatentSurfaceList.do", getSearchParameter());
						});
						// 概细览
						$(".overView").click(function() {
							// window.location.href = "txnPatentOverviewList.do"
							// +
							// getSearchParameter();
							_doTempPost("/" + rootPath + "txnPatentOverviewList.do", getSearchParameter());
						});

					}

					// 通用 排序 中英文切换栏
					{

						// 初始化排序字段
						// 根据传递过来的参数初始化排序项 两级排序
						var sortColumn = {

							"RELEVANCE" : "默认排序",
							"VU" : "专利强度",
							"AD" : "申请日",
							"PD" : "公布日",
							"EPRD" : "最早优先权日",
							"SFC" : "简单同族数量",
							"CIPC" : "引证数量",
							"CIGC" : "被引证数量",
							"INCO" : "发明人数量",
							"IPCSGC" : "IPC小类数量",
							"CLN" : "权利要求数量",
							"DEPC" : "说明书页数",
							"DC" : "附图个数",
							"TCC" : "转让次数",
							"PCC" : "许可次数",
							"PPC" : "质押次数"

						};

						// %2BCIPC;-EPRD
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

								if (i == 1) {
									$("#order2").attr("v", order);
									if (order == "%2B") {
										$("#order2").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn8_1.png')");
									} else if (order == "-") {
										$("#order2").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn7_1.png')");
									}

									$("#addSort").attr("v", column);
									$("#addSort").text(sortColumn[column]);

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

								if (content == "#patentStrength_ul li" || content == "#addSort_ul li") {
									// 点击之前的排序字段
									var sort1 = getSort();

									// 通用方法
									switchSelectCommon(this);

									if (content == "#addSort_ul li") {
										var order2 = $.trim($("#order2").attr("v"));
										var addSort = $.trim($("#addSort").attr("v"));
										if (order2 == "" && addSort != "") {

											$("#order2").attr("v", "-");
											$("#order2").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn7_1.png')");

										}

										if (addSort == "") {
											$("#order2").attr("v", "");
											$("#order2").css("background-image", "url('/" + rootPath + "module/di/img/patent/searOverview/btn7_4.png')");
										}

										addSortSelLeft();
									}

									// 点击之后的排序字段
									var sort2 = getSort();

									if (sort1 != sort2) {
										mGrid_patentGrid_obj.opt.sortColumn = sort2;
										mGrid_patentGrid_obj.query(1, function() {
											$(".overViewList:first").addClass("selectedDiv");
											recordComplete();
										});

									}

								}

								return false;
							});
						}

						// 设置li点击事件
						switchSelect("#patentStrength_ul li");
						switchMoseover("#patentStrength_ul li");

						$("#addSort_Div").click(function() {

							var sortColumn1 = $("#patentStrength").text();

							$("#addSort_ul ul").empty();
							$.each(sortColumn, function(index, content) {
								if (sortColumn1 != content || sortColumn1 == "默认排序") {
									$("#addSort_ul ul").append("<li value=\"" + index + "\">" + content + "</li>");
								}

							});

							switchSelect("#addSort_ul li");
							switchMoseover("#addSort_ul li");

						})

						$("#patentStrength").click(function() {
							var sortColumn1 = $("#addSort").text();
							$("#patentStrength_ul ul").empty();
							$.each(sortColumn, function(index, content) {
								if (sortColumn1 != content || sortColumn1 == "默认排序") {
									$("#patentStrength_ul ul").append("<li value=\"" + index + "\">" + content + "</li>");
								}

							})

							switchSelect("#patentStrength_ul li");
							switchMoseover("#patentStrength_ul li");
						});

						// 排序点击事件
						$("#order").bind("click", function(event) {
							doOrder("#order");
						});

						$("#order2").bind("click", function(event) {
							doOrder("#order2");
						});

						// 中英文切换
						switchShow(".languageSwitch_Div");
						// 排序
						switchShow(".patentStrength_Div");
						switchShow(".addSort_Div");

						// 鼠标悬停
						switchMoseover("#" + "languageSelect_ul li");

						function addSortSelLeft() {
							var m_nodeAddSortSelContent = $(".addSortLeft").next().children().children().get(0);
							if ($(m_nodeAddSortSelContent).text() == "还原") {
								$(".addSortLeft").removeClass("addSortSe1");
								$(".addSortLeft").addClass("addSortSe2");
							} else {
								$(".addSortLeft").addClass("addSortSe1");
								$(".addSortLeft").removeClass("addSortSe2");
							}
						}

						$("#languageSelect_ul li").click(function() {

							switchSelectCommon(this);

							patentLanguageSelect(this);
							if ($("#_txnCode").val() == "PatentOverviewList") {
								patentDetail($(".overViewList:first"));
							}

						});

						// 同族合并
						$("#combinedSelect").bind("click", function() {
							_doTempPost("/" + rootPath + "txnGetPNSToDB.do", getSearchParameter(), true);
						});

						// 带入上次页面的语言栏
						var select_languageSelect = $("#select-key__languageSelect").val();
						if (select_languageSelect != null && select_languageSelect != "") {
							$("#languageSelect").text(select_languageSelect)
						}

					}

					// 图文列表
					{

						$("#moveLeft1").click(function() {

							if (_imgOnclick) {
								return;
							}

							if (parseInt($("#thumbListDiv").css("left")) >= 0) {
								$("#thumbListDiv").css("left", "0");
								return;
							}

							_imgOnclick = true;

							$("#thumbListDiv").animate({
								left : '+=' + $("#thumbListDiv").children().children().width() + 'px'
							}, 'fast', function() {
								_imgOnclick = false;
							});

						});

						$("#moveRight1").click(function() {

							if (_imgOnclick) {
								return;
							}

							var num = parseInt($("#thumbListDiv").width()) - 0;
							var l = parseInt($("#thumbListDiv").css("left")) * -1;
							var liWidth = $("#thumbListDiv").children().children().width();

							if ((num - liWidth * 5) < l) {
								return false;
							}

							_imgOnclick = true;

							$("#thumbListDiv").animate({
								left : '-=' + $("#thumbListDiv").children().children().width() + 'px'
							}, 'fast', function() {
								_imgOnclick = false;
							});

						});

						// 缩略图关闭
						$(".closeBigImage").click(function() {
							$("#showBigImage").hide();
							$(".shielding_layer").addClass("displayNone");
							MouseWheel();
							$(".bodyClass").removeClass("overflowHidden");
						});

					}

					// overView列表检索
					{

						$("#serachKeyWords").click(function() {

							var ex = "";

							$("#__kwBody .checkBoxClickBg").each(function() {

								if (ex == "") {
									ex += "名称,摘要,主权项  += '" + $(this).attr("v") + "' ";
								} else {
									ex += "OR 名称,摘要,主权项  += '" + $(this).attr("v") + "' ";
								}

							});

							if (ex == "") {
								$.fz_common.alert("提示", "请选择关键词");
							} else {
								// alert(ex);
								_doTempPost("/" + rootPath + "txnPatentImgTextList.do", "select-key:expressCN=" + encodeURIComponent(ex), true);
							}

						});

					}

					// 分类统计
					{

						// 分类查询的索引 为了提高打开速度一次查询categoryNum组
						var categoryIndex = 0;
						var categoryNum = 4;

						function initPatentType() {

							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnPatentCQ.ajax",
								data : "select-key:categoryIndex=" + categoryIndex + "&select-key:categoryNum=" + categoryNum + "&select-key:expressCN="
										+ encodeURIComponent($("#select-key_expressCN").val()) + "&select-key:expressCN2=" + encodeURIComponent($("#select-key_expressCN2").val())
										+ "&select-key:buttonItem=" + encodeURIComponent($("#select-key_buttonItem").val()) + "&select-key:express="
										+ encodeURIComponent($("#select-key_express").val()),
								success : function(data) {

									var record = $.fz_common.getXmlNodeValues(data, "context>record");
									var column = "";
									var key = [];
									var value = [];
									record.each(function() {

										var tmp = $(this).find("column:first").text();

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

									// 对已有的内容增加事件
									var categoryColumnCode = $.fz_common.getXmlNodeValue(data, "context>select-key>categoryColumnCode");
									var categoryColumnCodeList = categoryColumnCode.split(";");

									var maxLength = categoryIndex + categoryNum;
									if (maxLength > categoryColumnCodeList.length) {
										maxLength = categoryColumnCodeList.length;
									}

									for ( var i = categoryIndex; i < maxLength; i++) {

										if (categoryColumnCodeList[i] == "") {
											continue;
										}

										var categoryContentDiv = categoryColumnCodeList[i] + "Content";

										// 展开收起
										{
											$("." + categoryContentDiv).each(function() {

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

										$("." + categoryContentDiv + " .expandMore").click(function() {

											expandMoreOnclick(this);

										});

										// 点击左边筛选某一项
										$("." + categoryContentDiv + " div").click(function() {
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

										// 删除加载文字
										$("." + categoryContentDiv + " .searOverviewLeftContentLoading").remove();

										// 在左侧内容构建完毕之后控制显示字数
										$("." + categoryContentDiv + " .searOverviewLeftContentSpan1").limit();

										// IPC内容提示（再左侧内容构建完毕之后）
										if (categoryContentDiv == "IPCSCContent") {
											$(".IPCSCContent div").mouseover(function() {
												setIPCTitle2(this);
											});
										}

										if (categoryContentDiv == "LSBFOContent") {
											$(".LSBFOContent div").each(function() {
												var patentType = parseInt($(this).children(".searOverviewLeftContentSpan1").text());
												if (patentType == 1) {
													$(this).children(".searOverviewLeftContentSpan1").text("有效");
												} else if (patentType == 2) {
													$(this).children(".searOverviewLeftContentSpan1").text("无效");
												} else {
													$(this).children(".searOverviewLeftContentSpan1").text("在审");
												}
											});
										}

									}

									// 判断是否需要再次加载
									if (categoryColumnCodeList.length > categoryIndex + categoryNum) {
										categoryIndex = categoryIndex + categoryNum;
										initPatentType();
									} else {

										// 字段展开状态
										initExpandMoreField();

										//已选状态
										initRightTop("leftButton");

										// 查询相关数据（在上面按钮初始化完成之后）
										var txt = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();
										listRelationData(txt, "PatentImgTextList");
									}

								}
							});

						}

						// 初始化已经有的按钮（在左侧构建完毕之后 需要设置是否点击的状态）
						initRightTop("button");

						initPatentType();
						setCategorySelectButton();

						// IPC内容提示
						$(".IPCPage1,IPCPage2,IPCPage3,IPCPage4 div").mouseover(function() {
							// alert("asdfas");
							// alert($(this).children().children(".searOverviewLeftContentSpan1").text());
							setIPCTitle2(this);
						});
					}

					// 智能联想
					{
						function initLeftDown() {

							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/" + rootPath + "txnCKMKWTIPS.ajax",
								data : "select-key:express=" + encodeURIComponent($("#select-key_expressCN").val()),
								success : function(data) {

									var record1 = $.fz_common.getXmlNodeValues(data, "context>record1");
									var record2 = $.fz_common.getXmlNodeValues(data, "context>record2");
									var record3 = $.fz_common.getXmlNodeValues(data, "context>record3");

									var array;
									var i = 0;
									record1.each(function(index, domEle) {

										if (i != initLeftDownI(index)) {
											if (array != null) {
												initLeftDownContent(array, ".applyPersonPage" + i);
												$(".applyPersonPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").removeClass("displayNone");
												$(".applyPersonPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
											}
											array = new Array();
											i = initLeftDownI(index);
											array.push(".applyPersonPage" + i);
										}
										if (index != 0) {
											$(".applyPersonPage" + i).parent().parent().find(".homeBRUl:first-child").show();
										}
										// applyPersonPage
										var count = $(this).find("count:first").text();
										var item = $(this).find("item:first").text();
										array.push(item);
									});
									if (array != null) {
										initLeftDownContent(array, ".applyPersonPage" + i);
										$(".applyPersonPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
									}

									array = null;
									i = 0;
									record2.each(function(index, domEle) {

										if (i != initLeftDownI(index)) {
											if (array != null) {
												initLeftDownContent(array, ".IPCPage" + i);
												$(".IPCPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").removeClass("displayNone");
												$(".IPCPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
											}
											array = new Array();
											i = initLeftDownI(index);
											array.push(".IPCPage" + i);
										}
										if (index != 0) {
											$(".IPCPage" + i).parent().parent().find(".homeBRUl:first-child").show();
										}

										// IPCPage
										var count = $(this).find("count:first").text();
										var item = $(this).find("item:first").text();
										array.push(item);

									});

									if (array != null) {
										initLeftDownContent(array, ".IPCPage" + i);
										$(".IPCPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
									}

									// 智能IPC内容提示
									$(".IPCPage1 div,.IPCPage2 div,.IPCPage3 div,.IPCPage4 div").mouseover(function() {
										setIPCTitle2(this);
									});

									array = null;
									i = 0;
									record3.each(function(index, domEle) {
										if (i != initLeftDownI(index)) {
											if (array != null) {
												initLeftDownContent(array, ".leftKeyWordPage" + i);
												$(".leftKeyWordPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").removeClass("displayNone");
												$(".leftKeyWordPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
											}
											array = new Array();
											i = initLeftDownI(index);
											array.push(".leftKeyWordPage" + i);
										}
										if (index != 0) {
											$(".leftKeyWordPage" + i).parent().parent().find(".homeBRUl:first-child").show();
										}

										// leftKeyWordPage
										var count = $(this).find("count:first").text();
										var item = $(this).find("item:first").text();
										array.push(item);
									});
									if (array != null) {
										initLeftDownContent(array, ".leftKeyWordPage" + i);
										$(".leftKeyWordPage" + i).parent().parent().find(".homeBRUl:first-child").find("li:nth-child(" + i + ")").show();
									}

									// checkbox点击
									$("#associateSearch .checkBoxStyle").click(function() {
										$(this).toggleClass("checkBoxBg");
										$(this).toggleClass("checkBoxClickBg");
										// $(this).next().toggleClass("colBlue");
										var m_parentNode = $(this).parent().parent().parent().parent();
										if ($(m_parentNode).prev().hasClass("searOverviewLeftStyle1")) {
											$(this).next().toggleClass("colBlue");
										}
										return false;
									});

								},
								error : function(XMLHttpRequest, textStatus, errorThrown) {

									// alert(XMLHttpRequest);
									// alert(textStatus);
									// alert(errorThrown);

								}
							});

						}

						function initLeftDownContent(m_arr, content) {
							var key = "";
							var className = "";
							if (content.indexOf("leftKeyWordPage") > -1) {
								className = "searOverviewLeftContentSpan5";
								key = "关键词";
							} else if (content.indexOf("IPCPage") > -1) {
								key = "IPC";
								className = "searOverviewLeftContentSpan1";
							} else if (content.indexOf("applyPersonPage") > -1) {
								className = "searOverviewLeftContentSpan5";
								key = "申请人";
							}
							for ( var i = 1; i < m_arr.length; i++) {
								if (m_arr[i] != null && m_arr[i] != "") {
									$(content)
											.append(
													'<div class="h34Center" style="width:93%; overflow:hidden; white-space:nowrap; display:block; text-overflow:ellipsis;"><span class="checkBoxStyle checkBoxBg ver_alignMid marginLeft5P"></span><span key = "'
															+ key + '" class="marginLeft5px ' + className + '">' + m_arr[i] + '</span></div>');
								}
							}
						}

						function initLeftDownI(index) {

							if (index < 5) {
								return 1;
							}

							if (index < 10) {
								return 2;
							}

							if (index < 15) {
								return 3;
							}

							if (index < 20) {
								return 4;
							}

						}

						initLeftDown();

						// 切换页面
						$(".switchPage").find("li").click(function() {
							var m_index = $(this).index();
							$(this).siblings().removeClass("homeBRUlSelect");
							$(this).siblings().addClass("homeBRUlNormal");
							$(this).addClass("homeBRUlSelect");
							var pageDiv = $(this).parent().parent().prev();
							switch (m_index) {
							case 0:
								$(pageDiv).children().addClass("displayNone");
								$(pageDiv).children().eq(0).removeClass("displayNone");
								break;
							case 1:
								$(pageDiv).children().addClass("displayNone");
								$(pageDiv).children().eq(1).removeClass("displayNone");
								break;
							case 2:
								$(pageDiv).children().addClass("displayNone");
								$(pageDiv).children().eq(2).removeClass("displayNone");
								break;
							default:
								$(pageDiv).children().addClass("displayNone");
								$(pageDiv).children().eq(3).removeClass("displayNone");
								break;
							}
						});

						$(".associateSearchSelectAll").click(function() {

							var child = $($($(this).parent().next()[0]).children()[0]);

							child.children().each(function() {

								if (!$(this).hasClass("displayNone")) {
									$(this).find(".checkBoxBg").each(function() {
										$(this).click();
									});
								}

							});

						});

					}

					// 显示列表（默认隐藏）
					$("#theme").show();
					$(".rightContentTipNum").show();
					$("#mGrid_patentGrid .modelGridPaginatorContainer").show();

					// 工具条
					{

					}
				});

/** 标题展开收起 图片增加放大镜等功能* */
// 用于判断是否点击过 不能连续点击 图片列表页面使用
var _imgOnclick = false;
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

	// 展开 图片放大镜 高亮
	if (txncode == "PatentImgTextList") {

		// 绑定图片错误事件
		$(".im1").bind("error", function() {
			$(this).attr("src", "/" + rootPath + "module/di/img/patent/nopic.jpg");
			$(this).attr("nopic", "nopic");
		});

		var glass = new ImgGlass();
		glass.setGlass(".small");
		// 弹出大图图层
		$(".mark").click(function() {
			$("#showBigImage").show();
			$(".shielding_layer").removeClass("displayNone");
			var scrolltop = $(document).scrollTop();
			$("#showBigImage").css("margin-top", scrolltop);
			$("#bigimg").attr("src", $(this).attr("v"));
			$("#imgAlertTitle").html("");
			setLayerHeight();
			disabledMouseWheel();
			$(".bodyClass").addClass("overflowHidden");
		});

		var ex = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnExpressParseMap.ajax",
			data : "select-key:column=申请人,名称,摘要&select-key:buf=" + encodeURIComponent(ex),
			success : function(data) {
				var patent = $.fz_common.getXmlNodeValues(data, "context>patent>seaKey");
				var column = "";
				var key = [];
				var value = [];
				var tmp = patent.text();
				key = tmp.split(";");

				$(".abstractDiv").highlight(key, {
					insensitive : 0
				});

				$(".abstractEnglishDiv").highlight(key, {
					insensitive : 0
				});

				$(".titleDiv").highlight(key, {
					insensitive : 0
				});

				$(".titleEnglishDiv").highlight(key, {
					insensitive : 0
				});

			},
			error : function(e) {
			}
		});

	}

	// 列表 详览
	if (txncode == "PatentOverviewList" || txncode == "PatentTableList" || txncode == "PatentSurfaceList") {

		// 总记录数为0
		if ($("#mGrid_patentGrid .totalnumber").text() == 0) {
			$("#__patentdetail").hide();
		} else {
			$("#__patentdetail").show();
		}

		if (_overViewFirst) {
			$(".overViewList:first").addClass("selectedDiv");
			_overViewFirst = false;
		}

		// 高亮
		var ex = $.trim($("#select-key_expressCN").val()) + " " + $.trim($("#select-key_expressCN2").val()) + " " + getCategorySelectExpress();

		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnExpressParseMap.ajax",
			data : "select-key:column=申请人,名称,摘要&select-key:buf=" + encodeURIComponent(ex),
			success : function(data) {
				var patent = $.fz_common.getXmlNodeValues(data, "context>patent>seaKey");
				var column = "";
				var key = [];
				var value = [];
				var tmp = patent.text();
				key = tmp.split(";");

				$(".title").highlight(key, {
					insensitive : 0
				});

			},
			error : function(e) {
				// alert(e);
			}
		});

	}

	// 图片滚动
	if (txncode == "PatentSurfaceList") {

		$(".content_ul")
				.each(
						function() {

							var listID = $(this).attr("v");
							var length = $(this).attr("length");
							var imgName = $(this).attr("imgName");
							var imgUrl = $(this).attr("imgUrl");

							if (imgUrl == null || imgUrl == "" || imgUrl == "|") {

								$(this).append('<li style=" margin-left:60px; font-weight:bold; ">暂无图片列表</li>');

								$("#imglist" + listID + " .prevImgPage").remove();
								$("#imglist" + listID + " .nextImgPage").remove();
								$("#length" + listID).remove();

								$("#imglist" + listID + " .imgContent_Div").height("30px");
								$("#imglist" + listID + " .ul_DivList").height("30px");

								return;

							}

							var nameList = imgName.split("|");
							var urlList = imgUrl.split("|");

							var count = 1;
							for ( var i = 0; i < urlList.length; i++) {

								if (urlList[i] == null || urlList[i] == "") {

									continue;
								}

								var _n = nameList[i];
								if (_n == null || _n == "") {
									_n = "无标题";
								}

								var _w = 155;

								$(this)
										.append(
												' <li style="position:relative; float:left; width:'
														+ _w
														+ 'px; text-align:center;" ><a href="javascript:imgWins(\''
														+ listID
														+ '\',\''
														+ urlList[i]
														+ '\',\''
														+ _n
														+ '\');"><img class="surfaceImg surfaceLoading" style=" width: 132px; height: 132px;" alt="'
														+ _n
														+ '" src="'
														+ urlList[i]
														+ '" /><img style="position:relative; left:0px; top:-90px;" src="/'
														+ rootPath
														+ 'module/di/img/public/loading.gif" border="0"  /></a><p class="horCerter" style="width: 132px; overflow:hidden; height:30px; position:relative; left:12px; top:-82px;">'
														+ _n + '</p></li>');

								count++;
								$("#imglist" + listID + " .ul_DivList").width(urlList.length * (_w));
							}

						});

		$(".surfaceLoading").bind("load", function() {
			$(this).next("img").remove();
			$(this).parent().next("p").css("top", "0px");
		});

		$(".prevImgPage").click(function() {

			if (_imgOnclick) {
				return;
			}

			// DIV
			var m_imgContentDiv = $(this).parent().children().get(1);
			// UL
			var m_contentList = $(m_imgContentDiv).children().get(0);

			if (parseInt($(m_contentList).css("left")) >= 0) {
				$(m_contentList).css("left", "0");
				return;
			}

			_imgOnclick = true;

			$(m_contentList).animate({
				left : '+=' + $(m_contentList).children().children().width() + 'px'
			}, 'fast', function() {
				_imgOnclick = false;
			});

		});

		$(".nextImgPage").click(function() {

			if (_imgOnclick) {
				return;
			}

			// DIV
			var m_imgContentDiv = $(this).parent().children().get(1);
			// UL
			var m_contentList = $(m_imgContentDiv).children().get(0);

			var num = parseInt($(m_contentList).width()) - 0;
			var l = parseInt($(m_contentList).css("left")) * -1;
			var liWidth = $(m_contentList).children().children().width();

			if ((num - liWidth * 5) < l) {
				return false;
			}

			_imgOnclick = true;

			$(m_contentList).animate({
				left : '-=' + $(m_contentList).children().children().width() + 'px'
			}, 'fast', function() {
				_imgOnclick = false;
			});

		});

	}

	$(".btnwenxianhao").click(

			function() {

				if ($(this).hasClass("displayInline")) {
					$(this).removeClass("displayInline").addClass("displayNone");
					$(this).next().removeClass("displayNone").addClass("displayInline");
				}
				var pnsDiv = $(this).next();
				var sfpns = $(this).attr("v");
				var txnCode = $("#_txnCode").val();// PatentOverviewList
				var hrefDetail = "";
				var display = "";
				$.ajax({
					type : "POST",
					dataType : "xml",
					url : "/" + rootPath + "txnGetPnsBySfpns.ajax",
					data : "select-key:SFPNS=" + encodeURIComponent(sfpns),
					success : function(data) {
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						record.each(function(index, dom) {
							var pns = $(this).find("PNS").text();
							var pid = $(this).find("PID").text();
							var pno = $(this).find("PNO").text();

							if (txnCode == 'PatentOverviewList' && index > 2) {
								display = "displayNone";
							} else {

								if (index > 4) {
									display = "displayNone";
								}
							}

							hrefDetail += "<div  v='" + index + "' class='" + display + "' style='float:left;width:110px;line-height:20px;' ><a target='_blank' href='/" + rootPath
									+ "txnPatentDetail.do?select-key:PID=" + pid + "&select-key:PNO=" + pno + "'>" + pns + "</a></div>"

						});
						$(pnsDiv).append(hrefDetail);

					},
					error : function(e) {
					}
				});

				return false;

			});

	if ($("#select-key_expressCN").val().indexOf("(fspns#") != -1) {
		$(".btnwenxianhao").click();
	}

	// 替换摘要标签
	$(".signFilter").each(function() {

		var txt = $(this).html();

		txt = txt.replace(/(\&lt;)/g, "<");
		txt = txt.replace(/(\&gt;)/g, ">");
		txt = txt.replace(/(\&amp;)/g, "&");

		$(this).html(txt);

	});
	
	$(".pdfExist0").each(function() {
		$(this).attr("target", "");
		$(this).attr("href", 'javascript:$.fz_common.alert("提示", "该专利暂无PDF文件。");');
	});
	
	$(".APCLink").each(function() {
		buildLink(this, "申请人");
	});

	$(".IPCQLink").each(function() {
		if($(this).hasClass("pdt3")){
			buildLink(this, "洛迦诺");
		}else{
			buildLink(this, "IPC");
		}
		
	});

	$(".LJNQLink").each(function() {
		buildLink(this, "洛迦诺");
	});

	$(".PRNOLink").each(function() {
		buildLink(this, "优先权");
	});

	$(".AGCLink").each(function() {
		buildLink(this, "代理机构");
	});

	$(".AGLink").each(function() {
		buildLink(this, "代理人");
	});

	$(".INCLink").each(function() {
		buildLink(this, "发明人");
	});

	$("span[name='checkbox']").click(function() {
		$(this).toggleClass("checkBoxBg");
		$(this).toggleClass("checkBoxClickBg");
		_setSelectNum();
	});
	$("span[name='surfaceCheckbox']").click(function() {
		$(this).toggleClass("checkBoxBg");
		$(this).toggleClass("checkBoxClickBg");
		_setSelectNum();
	});
	$("span[name='tableCheck']").click(function() {
		$(this).toggleClass("checkBoxBg");
		$(this).toggleClass("checkBoxClickBg");
		_setSelectNum();
	});

	// IPC移动上去之后的AJAX装载提示

	$(".IPCQLink a").mouseover(function() {

		setIPCTitle(this);
	});

	// 合并同族显示隐藏
	if ($("#select-key_expressCN").val().indexOf("(fspns#") == -1) {
		$(".sfpnsContent").hide();
	}

	// 选中语言
	var languageSelectTxt = $("#languageSelect").text();

	$("#languageSelect_ul li").each(function() {

		if ($(this).text() == languageSelectTxt) {
			$(this).click();
		}

	});

	// 权限
	securityListFun();

	// 替换摘要里的图片地址
	if (txncode == "PatentImgTextList") {

		$(".imgSignFilter").each(function() {

			var pid = $(this).attr("pid");
			var pdt = $(this).attr("pdt");

			$(this).find("img").each(function() {

				var path = pid2Path(pid, pdt, __fzjhPathURL);
				var src = $(this).attr("src");

				$(this).attr("src", path + src);

			})

		});

	}

}
// 同族文献号
function wenxianhao(obj) {

	var txnCode = $("#_txnCode").val();
	if ($(obj).hasClass("addplus")) {
		$(obj).removeClass("addplus");
		$(obj).addClass("addminut");
		$(obj).parent().children("div").removeClass("displayNone");

	} else {

		$(obj).removeClass("addminut");
		$(obj).addClass("addplus");
		var div = $(obj).parent().children("div");
		for ( var i = 0; i < div.length; i++) {
			var v = $(div[i]).attr("v");
			if (txnCode == 'PatentOverviewList' && v > 2) {
				$(div[i]).addClass("displayNone");
			} else {
				if (v > 4) {
					$(div[i]).addClass("displayNone");
				}
			}
		}
	}

}
// 智能联想
function thinkSearch() {
	var query = "";

	var key = "";
	$("#associateSearch .colBlue").each(function(index, domEle) {
		var t = ($(this).text());

		if (key == "") {
			query += "(";
		}

		if (key != $(this).attr("key") && key != "") {
			query += ") AND (";
		} else {
			if (index != ($("#associateSearch .colBlue").size()) && key != "") {
				query += " OR ";
			}
		}

		key = ($(this).attr("key"));

		if (key == "关键词") {
			query += "名称,摘要,主权项" + "+=" + "'" + t + "' ";
		} else {
			query += key + "=" + "'" + t + "' ";
		}

	});

	if (query == null || query == "") {
		$.fz_common.alert("提示", "请选择智能联想关键词");
		return;
	}

	query += ")";

	_doTempPost("/" + rootPath + "txnPatentImgTextList.do", "select-key:expressCN=" + encodeURIComponent(query), true);

}

function imgWin(url, name, ele) {
	// 图片
	$("#bigimg1").attr("src", url);
	$("#imgAlertTitleLR").html(name);

	if (ele != null) {

		$("#thumbListLi" + ele).parent().children().removeClass("imgSelect");
		$("#thumbListLi" + ele).addClass("imgSelect");

	}
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

function imgWins(listID, url, name) {

	imgWin(url, name);

	// 构建列表
	var length = $("#imglist" + listID).find(".content_ul").attr("length");
	var imgName = $("#imglist" + listID).find(".content_ul").attr("imgName");
	var imgUrl = $("#imglist" + listID).find(".content_ul").attr("imgUrl");

	$("#thumbList-ctn").html(" ");

	var nameList = imgName.split("|");
	var urlList = imgUrl.split("|");

	var count = 1;
	var left = 0;
	for ( var i = 0; i < urlList.length; i++) {

		if (urlList[i] == null || urlList[i] == "") {

			continue;
		}

		var _n = nameList[i];
		if (_n == null || _n == "") {
			_n = "无标题";
		}

		var _w = 80;
		var selected = "";

		if (url == urlList[i]) {
			$("#thumbListDiv").css("left", left + "px");
			selected = 'class="imgSelect"';
		}

		$("#thumbList-ctn").append(
				' <li ' + selected + ' id="thumbListLi' + count + '" style="float:left; width:' + _w + 'px; text-align:center;" ><a href="javascript:imgWin(\'' + urlList[i] + '\',\'' + _n + '\' , \''
						+ count + '\');"><img class="surfaceImg" style=" width: 72px; height: 72px;" src="' + urlList[i] + '" /></a></li>');

		count++;
		$("#thumbListDiv").width(urlList.length * (_w));
		left = left - _w;

	}

	// 显示
	$("#showBigImageLR").show();
	$(".shielding_layer").removeClass("displayNone");
	var scrolltop = $(document).scrollTop();
	$("#showBigImageLR").css("margin-top", scrolltop);
	setLayerHeight();
	disabledMouseWheel();

	$(".bodyClass").addClass("overflowHidden");

}

function patentDetail(obj) {

	var language = $("#languageSelect").text();
	var language1 = "";
	if (language == "原文") {
		language1 = "o";
	} else if (language == "中文") {
		language1 = "cn";
	} else if (language == "English") {
		language1 = "en";
	}
	var _id = $(obj).attr("id");
	var _a = $(obj).attr("a");
	$(obj).siblings("div").css("backgroundColor", "");
	$(obj).siblings("div").removeClass("selectedDiv");
	$(obj).css("backgroundColor", "#e4f1fd");
	$(obj).addClass("selectedDiv");

	$("#__patentdetail iframe").attr("src", '/txnPatentOverviewD.do?select-key:PID=' + _id + '&select-key:PNO=' + _a + '&select-key:lang=' + language1);

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

	angularApp.filter('typeFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				if (input == "1") {
					return "发明";
				} else if (input == "3") {
					return "外观设计";
				} else if (input == "2") {
					return "实用新型";
				} else if (input == "8") {
					return "发明";
				} else if (input == "9") {
					return "实用新型";
				}
				return input;
			}
		}
	});

	angularApp.filter('typeFilter1', function() {
		return function(input) {
			if (input != null && input != "") {

				if (input == "1") {
					return "有效";
				} else if (input == "2") {
					return "无效";
				} else if (input == "3") {
					return "在审";
				} else if (input == "8") {
					return "不影响";
				} else if (input == "9") {
					return "不确定/待定";
				}

				return "";
			} else {
				return "";
			}
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

	angularApp.filter('cpqueryIDFilter', function() {
		return function(input) {
			if (input != null && input != "") {
				return "http://cpquery.sipo.gov.cn/txnQueryBibliographicData.do?select-key:shenqingh=" + input.substr(2, input.length).replace("\.", "");
			}
		}
	});

	angularApp.filter('vuFilter', function() {
		return function(input) {
			try {
				if ((parseInt(input) - 0) >= 90) {
					return "90";
				}

				if ((parseInt(input) - 0) >= 60) {
					return "60";
				}
				if ((parseInt(input) - 0) < 60) {
					return "20";
				}
			}

			catch (e) {
			}
			return "90";
		}
	});

	angularApp.filter('signFilter', function() {
		return function(input) {
			try {

				input = input.replace(/(\&lt;)/g, "<");
				input = input.replace(/(\&gt;)/g, ">");

			} catch (e) {
			}
			return input;
		}
	});
}
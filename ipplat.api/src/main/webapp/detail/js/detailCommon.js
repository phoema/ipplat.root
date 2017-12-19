var txncode = $("#_txnCode").val();

var queryAction = "";
if (txncode == "PatentDetail" || txncode == "PatentData") {
	queryAction = "txnPatentImgTextList";
} else if (txncode == "RefereeDetail" || txncode == "RefereeData") {
	queryAction = "txnRefereeList";
} else if (txncode == "DecisionDetail" || txncode == "DecisionData") {
	queryAction = "txnDecisionList";
} else if (txncode == "LawsDetail" || txncode == "LawsData") {
	queryAction = "txnLawsList";
} else if (txncode == "PeriodicalDetail" || txncode == "PeriodicalData") {
	queryAction = "txnPeriodicalList";
}

$(document)
		.ready(
				function() {

					{
						// 展开收起
						expandTable("cse", "expandRelationMoreCse");
						expandTable("dec", "expandRelationMoreDec");
						expandTable("pat", "expandRelationMorePat");
						expandTable("tra", "expandRelationMoreTra");
						expandTable("ise", "expandRelationMoreIse");
						expandTable("std", "expandRelationMoreStd");

					}

					// 高亮

					{

						if (txncode == "PatentDetail" || txncode == "PatentENDetail" || txncode == "PatentCNDetail" || txncode == "TradeMarkDetail" || txncode == "UsTradeMarkDetail"
								|| txncode == ("MdTradeMarkDetail") || txncode == "StandardDetail" || txncode == "PeriodicalDetail" || txncode == "DecisionDetail" || txncode == "RefereeDetail"
								|| txncode == "LawsDetail") {

							// 用户配置
							if (highlighted_word == "" || highlighted_word == "null") {
								highlighted_word = ",,,,;"
							}

							var high_word_list = highlighted_word.split(";");

							for ( var i = 0; i < high_word_list.length; i++) {

								var highKeyWord = high_word_list[i];

								if (highKeyWord != "") {

									var _highKeyWord = highKeyWord.split(",");

									$("#highlightUser").append(

											'<div class="marginTop10 highlightUserKeyWord"><input class="highlightUserRadio floatLeft" type="radio" name="highlightType" value="2" style="margin-left:20px; width:25px;">'
													+ '<div class="floatLeft h100Full marginLeft14 positionRelative"><div style="background-color: '
													+ color[0]
													+ '" class="colorlump floatLeft highlightUserBg0"></div>'
													+ '<input class="highlightUser0 floatLeft" type="text" value="'
													+ _highKeyWord[0].replace(/\"/g, "")
													+ '" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
													+ color[1]
													+ '" class="colorlump floatLeft highlightUserBg1"></div>'
													+ '<input class="highlightUser1 floatLeft" type="text" value="'
													+ _highKeyWord[1].replace(/\"/g, "")
													+ '"  placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
													+ color[2]
													+ '" class="colorlump floatLeft highlightUserBg2"></div>'
													+ '<input class="highlightUser2 floatLeft" type="text" value="'
													+ _highKeyWord[2].replace(/\"/g, "")
													+ '" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
													+ color[3]
													+ '" class="colorlump floatLeft highlightUserBg3"></div>'
													+ '<input class="highlightUser3 floatLeft" type="text" value="'
													+ _highKeyWord[3].replace(/\"/g, "")
													+ '" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
													+ color[4]
													+ '" class="colorlump floatLeft highlightUserBg4"></div>'
													+ '<input class="highlightUser4 floatLeft" type="text" value="'
													+ _highKeyWord[4].replace(/\"/g, "") + '" placeholder="添加词语" ></div></div>');

								}

							}
							
							//用户填加一行高亮词
							$("#addOneRowHlight").click(function(){
								if($("#highlightUser").find(".highlightUserKeyWord").length >= 8){
									$.fz_common.alert("提示", "最多只能设置8组高亮配置");
									return false;
								}
								$("#highlightUser").append('<div class="marginTop10 highlightUserKeyWord"><input class="highlightUserRadio floatLeft" type="radio" name="highlightType" value="2" style="margin-left:20px; width:25px;">'
												+ '<div class="floatLeft h100Full marginLeft14 positionRelative"><div style="background-color: '
												+ color[0]
												+ '" class="colorlump floatLeft highlightUserBg0"></div>'
												+ '<input class="highlightUser0 floatLeft" type="text" value="" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
												+ color[1]
												+ '" class="colorlump floatLeft highlightUserBg1"></div>'
												+ '<input class="highlightUser1 floatLeft" type="text" value=""  placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
												+ color[2]
												+ '" class="colorlump floatLeft highlightUserBg2"></div>'
												+ '<input class="highlightUser2 floatLeft" type="text" value="" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
												+ color[3]
												+ '" class="colorlump floatLeft highlightUserBg3"></div>'
												+ '<input class="highlightUser3 floatLeft" type="text" value="" placeholder="添加词语" ></div><div class="floatLeft marginLeft14 positionRelative"><div style="background-color: '
												+ color[4]
												+ '" class="colorlump floatLeft highlightUserBg4"></div>'
												+ '<input class="highlightUser4 floatLeft" type="text" value="" placeholder="添加词语" ></div></div>');
								initHighlightUserRadio();
							});

							$(".submitHighlightsetting").click(function() {

								var _kw = "";

								$(".highLightTopEdit").find("input[type='text']").each(function() {
									var val = $(this).val();
									_kw += val + ";";
								});

								if (_kw == "" || _kw == ";;;;;") {
									$.fz_common.alert("提示", "请设置高亮词汇");
									return;
								}

								// 重新设置关键词
								_kws = _kw;
								_kwList = new Array();
								setKws();

								// 删除以前所有的高亮
								for ( var i = 0; i < highlightDiv.length; i++) {
									$(highlightDiv[i]).find("span.highlightTxt").each(function() {
										$(this).after($(this).text());
										$(this).remove();
									})
								}

								// 高亮
								for ( var n = 0; n < highlightDiv.length; n++) {
									for ( var i = 0; i < _kwList.length; i++) {

										if (_kwList[i] != null && _kwList[i] != "") {

											var idDIV = highlightDiv[n] + "";
											$(idDIV).highlight(_kwList[i], {
												id : "highlightTxt" + idDIV.substring(1),
												clear_last : false
											});
										}
									}
								}

								// 判断是否重新高亮
								if ($(".highLightShowDiv").hasClass("disPlayNone")) {
								} else {
									doHighlightTxt(".highlightTxt");
								}

								// 关闭
								$("#highlightsettingbox").hide();
								$(".shielding_layer").addClass("displayNone");
								$(".bodyClass").removeClass("overflowHidden");
								MouseWheel();

								// 更新
								var highlighted_word_set = "";
								$(".highlightUserKeyWord").each(function() {

									$(this).find("input[type='text']").each(function() {
										var val = $(this).val();
										highlighted_word_set += val.replace(/\,/g, "").replace(/\;/g, "") + ",";
									});

									highlighted_word_set = highlighted_word_set.substr(0, (highlighted_word_set.length - 1)) + ";";

								});

								$.ajax({
									type : "POST",
									dataType : "xml",
									url : "/" + rootPath + "txnUserI00003.ajax",
									data : "select-key:key=highlighted_word&select-key:value=" + encodeURIComponent(highlighted_word_set),
									success : function(data) {

										console.log("更新成功");

									}
								});
								//释放 按智能推荐  区域
								var elem = $("#highlightsettingbox").find(".intellisenseArea");
								if(elem.is(".displayNone")){
									elem.removeClass("displayNone");
									$("#highlightUser").css("height","100px");
								}
							});
							//专利高亮弹出框
							$("#showHighLight").click(function() {
								showHighLightDiv();
								// 高亮
								if ($(".highLightShowDiv").hasClass("disPlayNone")) {
									doNormalTxt();
									$("#showHighLight span").text("高亮");
									$(".detailTopNav").css("margin-top", "20px");
								} else {
									$("#showHighLight span").text("取消高亮");
									doHighlightTxt(".highlightTxt");
									$(".detailTopNav").css("margin-top", "50px");

									$('#highlightTable').css("top", "0px");

								}
							});
							
							// 高亮显示
							function showHighLightDiv() {
								$(".highLightShowDiv").toggleClass("disPlayNone");
							}

						} else if (txncode == "PatentDoubleColumn") {

							$("#showHighLight").click(function() {

								// 删除所有高亮
								$("p").find("span.highlightTxt").each(function() {
									$(this).after($(this).text());
									$(this).remove();
								})

								$(".highLightShowDiv").toggleClass("disPlayNone");
								if ($(".highLightShowDiv").hasClass("disPlayNone")) {

									$("#showHighLight span").text("高亮");

								} else {
									$("#showHighLight span").text("取消高亮");

									// 高亮
									for ( var i = 0; i < _kwList.length; i++) {

										if (_kwList[i] != null && _kwList[i] != "") {

											$("p").highlight(_kwList[i], {
												id : "highlightTxt",
												clear_last : false
											});
										}
									}

									$(".highlightTxt").each(function() {

										// 高亮
										for ( var i = 0; i < _kwList.length; i++) {

											if ($(this).text() == _kwList[i]) {

												$(this).css({

													color : color[i],
													"font-weight" : "bold"

												});

											}

										}

									});

								}
							});

							$(".submitHighlightsetting").click(function() {

								var _kw = "";

								$(".highLightTopEdit").find("input[type='text']").each(function() {
									var val = $(this).val();
									_kw += val + ";";
								});

								if (_kw == "" || _kw == ";;;;;") {
									$.fz_common.alert("提示", "请设置高亮词汇");
									return;
								}

								// 重新设置关键词
								_kws = _kw;
								_kwList = new Array();
								setKws();

								// 删除所有高亮
								$("p").find("span.highlightTxt").each(function() {
									$(this).after($(this).text());
									$(this).remove();
								})

								// 高亮
								for ( var i = 0; i < _kwList.length; i++) {

									if (_kwList[i] != null && _kwList[i] != "") {

										$("p").highlight(_kwList[i], {
											id : "highlightTxt",
											clear_last : false
										});
									}
								}

								$(".highlightTxt").each(function() {

									// 高亮
									for ( var i = 0; i < _kwList.length; i++) {

										if ($(this).text() == _kwList[i]) {

											$(this).css({

												color : color[i],
												"font-weight" : "bold"

											});

										}

									}

								});

								// 关闭
								$("#highlightsettingbox").hide();
								$(".shielding_layer").addClass("displayNone");
								$(".bodyClass").removeClass("overflowHidden");
								MouseWheel();

								// 更新
								var highlighted_word_set = "";
								$(".highlightUserKeyWord").each(function() {

									$(this).find("input[type='text']").each(function() {
										var val = $(this).val();
										highlighted_word_set += val.replace(/\,/g, "").replace(/\;/g, "") + ",";
									});

									highlighted_word_set = highlighted_word_set.substr(0, (highlighted_word_set.length - 1)) + ";";

								});

								$.ajax({
									type : "POST",
									dataType : "xml",
									url : "/" + rootPath + "txnUserI00003.ajax",
									data : "select-key:key=highlighted_word&select-key:value=" + encodeURIComponent(highlighted_word_set),
									success : function(data) {

										console.log("更新成功");

									}
								});

							});

						}

						// 高亮层
						$(".highlightUserRadio").removeAttr("checked");
						$("#highlightNormalRadio").attr("checked", "checked");
						
						$(".highlightSetting").click(function() {
							if($(this).attr("v") != "专利"){
								$(".highLightTopEdit").removeClass("highLightTopEdit");
								$("#highlightUser").find("div:first").addClass("highLightTopEdit");
								$(".highlightUserRadio").first().click();
								$("#highlightUser").css("height","230px");
								$("#highlightsettingbox").find(".intellisenseArea").addClass("displayNone");
							}else{
								$(".highLightTopEdit").removeClass("highLightTopEdit");
								$("#highlightNormal").children().addClass("highLightTopEdit");
							}
							$("#highlightsettingbox").show();
							var scrolltop = $(document).scrollTop();
							$("#highlightsettingbox").css("margin-top", scrolltop);
							setLayerHeight();
							disabledMouseWheel();
							$(".shielding_layer").removeClass("displayNone");
							$(".bodyClass").addClass("overflowHidden");

						});
						
						initHighlightUserRadio();
						function initHighlightUserRadio(){
							$("input[name='highlightType']").click(function() {

								var txt = $(this).val();

								if (txt == "1") {

									$(".highLightTopEdit").removeClass("highLightTopEdit");
									$("#highlightNormal").children().addClass("highLightTopEdit");

								} else {

									$(".highLightTopEdit").removeClass("highLightTopEdit");
									$(this).parent().addClass("highLightTopEdit");

								}

							});
						}
		
						$(".closehighlightsetting").click(function() {
							//释放 按智能推荐  区域
							var elem = $("#highlightsettingbox").find(".intellisenseArea");
							if(elem.is(".displayNone")){
								elem.removeClass("displayNone");
								$("#highlightUser").css("height","100px");
							}
							$("#highlightsettingbox").hide();
							$(".shielding_layer").addClass("displayNone");
							$(".bodyClass").removeClass("overflowHidden");
							MouseWheel();
						});

					}

					{
						// 中英文
						$(".englishSelectDiv").click(function() {
							ulHide();
							$(this).next().show();
							$(this).css("background-image", "url(/" + rootPath + "module/di/img/patent/table/arrowbup.png)");
							return false;
						});
						$(".englishSelect_ul li").click(function() {
							$(this).parent().hide();
							var v = $(this).attr("v");

							var pid = $("#_PID").val();
							var pno = $("#_PNO").val();
							var txncode = $("#_txnCode").val();

							$(".englishSelectDiv").text($(this).text());
							if (v == "cn" && txncode != "") {
								// window.location.href = "/" + rootPath +
								// "txnPatentDoubleComColumn.do?select-key:PID="
								// + pid + "&select-key:PNO=" + pno +
								// "&select-key:lang=cn";
							}
							if (v == "normal" && txncode != "") {
								// window.location.href = "/" + rootPath +
								// "txnPatentDoubleComColumn.do?select-key:PID="
								// + pid + "&select-key:PNO=" + pno +
								// "&select-key:lang=o";
							}
							if (v == "en" && txncode != "") {
								// window.location.href = "/" + rootPath +
								// "txnPatentDoubleComColumn.do?select-key:PID="
								// + pid + "&select-key:PNO=" + pno +
								// "&select-key:lang=en";
							}

						});
						$(".englishSelect_ul li").mouseover(function() {
							$(this).siblings().removeClass("select_item");
							$(this).addClass("select_item");
						});

					}

					// 翻译功能
					{
						$("#translateFun").click(function() {

							if (getBt(_selecterLate) <= 10000) {
								var position = $("#dropdownMenu").position();

								$(".translation").css("position", "absolute");
								$(".translation").css("top", position.top - $(".dropdown-menu").height() + "px");
								$(".translation").removeClass("disPlayNone");
								$(".dropdown-menu").css("display", "none");

								$("#translationOld").val(_selecterLate);
								$("#translationTxt").val("");
							} else {
								alert("您选择的内容过长超过了10000字节");
							}

						});

						$("#languageSelect1").click(function() {
							$("#languageSelect_ul1").show();
							$($("#languageSelect_ul1").prev().children().get(0)).css("background-image", "url('/" + rootPath + "module/di/img/patent/table/arrowBlueuP.png')");
						});

						$("#languageSelect2").click(function() {
							if ($("#languageSelect1").text() == "中文") {
								$("#languageSelect_ul2").show();
								$($("#languageSelect_ul2").prev().children().get(0)).css("background-image", "url('/" + rootPath + "module/di/img/patent/table/arrowBlueuP.png')");
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
									$($("#languageSelect_ul2").prev().children().get(0)).css("background-image", "url('/" + rootPath + "module/di/img/patent/table/arrowBlueuP.png')");
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

					// 双栏
					{
						$("#doubleCompare").click(function() {
							var doubleTxnCodeAndID = getDoubleTxnCode(txncode);
							var doubleTxnCodeAndID1 = doubleTxnCodeAndID.split("+");
							var doubleTxnCode = doubleTxnCodeAndID1[0];
							var ID = doubleTxnCodeAndID1[1];
							var id = $("#_" + ID).val() + ";" + $("#_" + ID).val() + ";";
							var _id = $("#_ID").val() + ";" + $("#_ID").val();
							var pram = "select-key:" + ID + "=" + id + "&select-key:ID=" + _id + "&select-key:flag=1";
							_doTempPost("/" + rootPath + doubleTxnCode + ".do", pram);

						});

					}

					// 添加链接
					{
						// <a target="_blank"
						// href="txnStandardList.do?select-key%3AexpressCN=(发布单位='<%out.print(record.getValue("SIO"));%>')">
						if (txncode == "StandardDetail" || txncode == "StandardDoubleCompare" || txncode == "TradeMarkDetail" || txncode == "UsTradeMarkDetail" || txncode == "MdTradeMarkDetail"
								|| txncode == "PeriodicalDetail" || txncode == "PeriodicalDoubleCompare" || txncode == "DecisionDetail") {

							var node = "";
							var href = "";
							var node1 = "";
							var text = "";
							// 期刊作者
							var jourAuthor = $("#jourAuthor").text();
							$("#jourAuthor").html("");
							if (!jourAuthor.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#jourAuthor").append(node);
								text = encodeURIComponent(jourAuthor);
								href = "txnPeriodicalList.do?select-key%3AexpressCN=(作者='" + text.replace(/\'/g, "\\'") + "')";
								$("#jourAuthor").children(".href0").prop("href", href);
								$("#jourAuthor").children(".href0").text(jourAuthor);
							} else {
								var jourAuthors = jourAuthor.split(";");
								for ( var i = 0; i < jourAuthors.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#jourAuthor").append(node);
									node1 = "<span></span>";
									$("#jourAuthor").append(node1);
								}

								for ( var i = 0; i < jourAuthors.length; i++) {
									text = encodeURIComponent(jourAuthors[i]);
									href = "txnPeriodicalList.do?select-key%3AexpressCN=(作者='" + text.replace(/\'/g, "\\'") + "')";
									$("#jourAuthor").children(".href" + i).prop("href", href);
									$("#jourAuthor").children(".href" + i).text(jourAuthors[i]);
								}
							}
							// 期刊作者单位
							var jourAuthorOrg = $("#jourAuthorOrg").text();
							$("#jourAuthorOrg").html("");
							if (!jourAuthorOrg.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#jourAuthorOrg").append(node);
								text = encodeURIComponent(jourAuthorOrg);
								href = "txnPeriodicalList.do?select-key%3AexpressCN=(作者单位='" + text.replace(/\'/g, "\\'") + "')";
								$("#jourAuthorOrg").children(".href0").prop("href", href);
								$("#jourAuthorOrg").children(".href0").text(jourAuthorOrg);
							} else {
								var jourAuthorOrgs = jourAuthorOrg.split(";");
								for ( var i = 0; i < jourAuthorOrgs.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#jourAuthorOrg").append(node);
									node1 = "<span></span>";
									$("#jourAuthorOrg").append(node1);
								}

								for ( var i = 0; i < jourAuthorOrgs.length; i++) {
									text = encodeURIComponent(jourAuthorOrgs[i]);
									href = "txnPeriodicalList.do?select-key%3AexpressCN=(作者单位='" + text.replace(/\'/g, "\\'") + "')";
									$("#jourAuthorOrg").children(".href" + i).prop("href", href);
									$("#jourAuthorOrg").children(".href" + i).text(jourAuthorOrgs[i]);
								}
							}

							// 期刊关键词
							var jourKeyword = $("#jourKeyword").text();
							$("#jourKeyword").html("");
							if (!jourKeyword.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#jourKeyword").append(node);
								text = encodeURIComponent(jourKeyword);
								href = "txnPeriodicalList.do?select-key%3AexpressCN=(关键词='" + text.replace(/\'/g, "\\'") + "')";
								$("#jourKeyword").children(".href0").prop("href", href);
								$("#jourKeyword").children(".href0").text(jourKeyword);
							} else {
								var jourKeywords = jourKeyword.split(";");
								for ( var i = 0; i < jourKeywords.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#jourKeyword").append(node);
									node1 = "<span></span>";
									$("#jourKeyword").append(node1);
								}

								for ( var i = 0; i < jourKeywords.length; i++) {
									text = encodeURIComponent(jourKeywords[i]);
									href = "txnPeriodicalList.do?select-key%3AexpressCN=(关键词='" + text.replace(/\'/g, "\\'") + "')";
									$("#jourKeyword").children(".href" + i).prop("href", href);
									$("#jourKeyword").children(".href" + i).text(jourKeywords[i]);
								}
							}
							
							// 期刊核心收录悬浮
							var AShint = $("#AShint").text();
							$("#AShint").html("");
							if (!AShint.indexOf(";")) {
								node = "<a class='href0' title='' target='_blank' href=''>";
								$("#AShint").append(node);
								text = encodeURIComponent(AShint);
								var titlestr;
								$.each(stdTitle, function(index, content) {
									if (text == index) {
										titlestr = content;
									}
								});
								href = "txnPeriodicalList.do?select-key%3AexpressCN=(核心收录='" + text.replace(/\'/g, "\\'") + "')";
								title = titlestr;
								$("#AShint").children(".href0").prop("href", href);
								$("#AShint").children(".href0").prop("title", title);
								$("#AShint").children(".href0").text(AShint);
							} else {
								var AShints = AShint.split(";");
								for ( var i = 0; i < AShints.length; i++) {
									node = "<a class='href" + i + "' title='' target='_blank' href=''>";
									$("#AShint").append(node);
									node1 = "<span></span>";
									$("#AShint").append(node1);
								}

								for ( var i = 0; i < AShints.length; i++) {
									text = encodeURIComponent(AShints[i]);
									href = "txnPeriodicalList.do?select-key%3AexpressCN=(核心收录='" + text.replace(/\'/g, "\\'") + "')";
									$("#AShint").children(".href" + i).prop("href", href);
									var title;
									$.each(stdTitle, function(index, content) {
										if (text == index) {
											title = content;
										}
									});
									$("#AShint").children(".href" + i).prop("title", title);
									$("#AShint").children(".href" + i).text(AShints[i]);
								}
							}

							// 发布单位
							var publishUnit = $("#publishUnit").text();
							$("#publishUnit").html("");
							if (!publishUnit.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#publishUnit").append(node);
								text = encodeURIComponent(publishUnit);
								href = "txnStandardList.do?select-key%3AexpressCN=(发布单位='" + text.replace(/\'/g, "\\'") + "')";
								$("#publishUnit").children(".href0").prop("href", href);
								$("#publishUnit").children(".href0").text(publishUnit);
							} else {
								var publishUnits = publishUnit.split(";");
								for ( var i = 0; i < publishUnits.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#publishUnit").append(node);
									node1 = "</br>";
									$("#publishUnit").append(node1);
								}

								for ( var i = 0; i < publishUnits.length; i++) {
									text = encodeURIComponent(publishUnits[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(发布单位='" + text.replace(/\'/g, "\\'") + "')";
									$("#publishUnit").children(".href" + i).prop("href", href);
									$("#publishUnit").children(".href" + i).text(publishUnits[i]);
								}
							}

							var publishUnit1 = $("#publishUnit1").text();
							$("#publishUnit1").html("");
							if (!publishUnit1.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#publishUnit1").append(node);
								text = encodeURIComponent(publishUnit1);
								href = "txnStandardList.do?select-key%3AexpressCN=(发布单位='" + text.replace(/\'/g, "\\'") + "')";
								$("#publishUnit1").children(".href0").prop("href", href);
								$("#publishUnit1").children(".href0").text(publishUnit1);
							} else {
								var publishUnit1s = publishUnit1.split(";");
								for ( var i = 0; i < publishUnit1s.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#publishUnit1").append(node);
									node1 = "</br>";
									$("#publishUnit1").append(node1);
								}

								for ( var i = 0; i < publishUnit1.length; i++) {
									text = encodeURIComponent(publishUnit1s[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(发布单位='" + text.replace(/\'/g, "\\'") + "')";
									$("#publishUnit1").children(".href" + i).prop("href", href);
									$("#publishUnit1").children(".href" + i).text(publishUnit1s[i]);
								}
							}

							// 起草人
							var draft = $("#draft").text();
							$("#draft").html("");
							if (!draft.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#draft").append(node);
								text = encodeURIComponent(draft);
								href = "txnStandardList.do?select-key%3AexpressCN=(起草人='" + text.replace(/\'/g, "\\'") + "')";
								$("#draft").children(".href0").prop("href", href);
								$("#draft").children(".href0").text(draft);
							} else {
								var drafts = draft.split(";");
								for ( var i = 0; i < drafts.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#draft").append(node);
									node1 = "<span></span>";
									$("#draft").append(node1);
								}

								for ( var i = 0; i < drafts.length; i++) {
									text = encodeURIComponent(drafts[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(起草人='" + text.replace(/\'/g, "\\'") + "')";
									$("#draft").children(".href" + i).prop("href", href);
									$("#draft").children(".href" + i).text(drafts[i]);
								}
							}

							var draft1 = $("#draft1").text();
							$("#draft1").html("");
							if (!draft1.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#draft1").append(node);
								text = encodeURIComponent(draft1);
								href = "txnStandardList.do?select-key%3AexpressCN=(起草人='" + text.replace(/\'/g, "\\'") + "')";
								$("#draft1").children(".href0").prop("href", href);
								$("#draft1").children(".href0").text(draft1);
							} else {
								var draft1s = draft1.split(";");
								for ( var i = 0; i < draft1s.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#draft1").append(node);
									node1 = "<span></span>";
									$("#draft1").append(node1);
								}

								for ( var i = 0; i < draft1s.length; i++) {
									text = encodeURIComponent(draft1s[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(起草人='" + text.replace(/\'/g, "\\'") + "')";
									$("#draft1").children(".href" + i).prop("href", href);
									$("#draft1").children(".href" + i).text(draft1s[i]);
								}
							}

							// 起草人单位
							var draftUnit = $("#draftUnit").text();
							$("#draftUnit").html("");
							if (!draftUnit.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#draftUnit").append(node);
								text = encodeURIComponent(draftUnit);
								href = "txnStandardList.do?select-key%3AexpressCN=(起草单位='" + text.replace(/\'/g, "\\'") + "')";
								$("#draftUnit").children(".href0").prop("href", href);
								$("#draftUnit").children(".href0").text(draftUnit);
							} else {
								var draftUnits = draftUnit.split(";");
								for ( var i = 0; i < draftUnits.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#draftUnit").append(node);
									node1 = "<span></span>";
									$("#draftUnit").append(node1);
								}

								for ( var i = 0; i < draftUnits.length; i++) {
									text = encodeURIComponent(draftUnits[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(起草单位='" + text.replace(/\'/g, "\\'") + "')";
									$("#draftUnit").children(".href" + i).prop("href", href);
									$("#draftUnit").children(".href" + i).text(draftUnits[i]);
								}
							}

							var draftUnit1 = $("#draftUnit1").text();
							$("#draftUnit1").html("");
							if (!draftUnit1.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#draftUnit1").append(node);
								text = encodeURIComponent(draftUnit1);
								href = "txnStandardList.do?select-key%3AexpressCN=(起草单位='" + text.replace(/\'/g, "\\'") + "')";
								$("#draftUnit1").children(".href0").prop("href", href);
								$("#draftUnit1").children(".href0").text(draftUnit1);
							} else {
								var draftUnit1s = draftUnit1.split(";");
								for ( var i = 0; i < draftUnit1s.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#draftUnit1").append(node);
									node1 = "<span></span>";
									$("#draftUnit1").append(node1);
								}

								for ( var i = 0; i < draftUnit1s.length; i++) {
									text = encodeURIComponent(draftUnits[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(起草单位='" + text.replace(/\'/g, "\\'") + "')";
									$("#draftUnit1").children(".href" + i).prop("href", href);
									$("#draftUnit1").children(".href" + i).text(draftUnit1s[i]);
								}
							}

							// 请求人
							var appealPerson = $("#appealPerson").text();
							$("#appealPerson").html("");
							if (!appealPerson.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#appealPerson").append(node);
								text = encodeURIComponent(appealPerson);
								href = "txnDecisionList.do?select-key%3AexpressCN=(请求人='" + text.replace(/\'/g, "\\'") + "')";
								$("#appealPerson").children(".href0").prop("href", href);
								$("#appealPerson").children(".href0").text(appealPerson);
							} else {
								var appealPersons = appealPerson.split(";");
								for ( var i = 0; i < appealPersons.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#appealPerson").append(node);
									node1 = "<span></span>";
									$("#appealPerson").append(node1);
								}

								for ( var i = 0; i < appealPersons.length; i++) {
									text = encodeURIComponent(appealPersons[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(请求人='" + text.replace(/\'/g, "\\'") + "')";
									$("#appealPerson").children(".href" + i).prop("href", href);
									$("#appealPerson").children(".href" + i).text(appealPersons[i]);
								}
							}

							// 合议组组长
							var heyizuLeader = $("#heyizuLeader").text();
							$("#heyizuLeader").html("");
							if (heyizuLeader.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#heyizuLeader").append(node);
								text = encodeURIComponent(heyizuLeader);
								href = "txnDecisionList.do?select-key%3AexpressCN=(合议组组长='" + text.replace(/\'/g, "\\'") + "')";
								$("#heyizuLeader").children(".href0").prop("href", href);
								$("#heyizuLeader").children(".href0").text(heyizuLeader);
							} else {
								var heyizuLeaders = heyizuLeader.split(";");
								for ( var i = 0; i < heyizuLeaders.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#heyizuLeader").append(node);
									node1 = "<span></span>";
									$("#heyizuLeader").append(node1);
								}

								for ( var i = 0; i < heyizuLeaders.length; i++) {
									text = encodeURIComponent(heyizuLeaders[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(主审员='" + text.replace(/\'/g, "\\'") + "')";
									$("#heyizuLeader").children(".href" + i).prop("href", href);
									$("#heyizuLeader").children(".href" + i).text(heyizuLeaders[i]);
								}
							}

							// 主审员
							var mainJudge = $("#mainJudge").text();
							$("#mainJudge").html("");
							if (!mainJudge.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#mainJudge").append(node);
								text = encodeURIComponent(mainJudge);
								href = "txnDecisionList.do?select-key%3AexpressCN=(主审员='" + text.replace(/\'/g, "\\'") + "')";
								$("#mainJudge").children(".href0").prop("href", href);
								$("#mainJudge").children(".href0").text(mainJudge);
							} else {
								var mainJudges = mainJudge.split(";");
								for ( var i = 0; i < mainJudges.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#mainJudge").append(node);
									node1 = "<span></span>";
									$("#mainJudge").append(node1);
								}

								for ( var i = 0; i < mainJudges.length; i++) {
									text = encodeURIComponent(mainJudges[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(主审员='" + text.replace(/\'/g, "\\'") + "')";
									$("#mainJudge").children(".href" + i).prop("href", href);
									$("#mainJudge").children(".href" + i).text(mainJudges[i]);
								}
							}

							// 参审员
							var otherJudge = $("#otherJudge").text();
							$("#otherJudge").html("");
							if (!otherJudge.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#otherJudge").append(node);
								text = encodeURIComponent(otherJudge);
								href = "txnDecisionList.do?select-key%3AexpressCN=(参审员='" + text.replace(/\'/g, "\\'") + "')";
								$("#otherJudge").children(".href0").prop("href", href);
								$("#otherJudge").children(".href0").text(otherJudge);
							} else {
								var otherJudges = otherJudge.split(";");
								for ( var i = 0; i < otherJudges.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#otherJudge").append(node);
									node1 = "<span></span>";
									$("#otherJudge").append(node1);
								}

								for ( var i = 0; i < otherJudges.length; i++) {
									text = encodeURIComponent(otherJudges[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(参审员='" + text.replace(/\'/g, "\\'") + "')";
									$("#otherJudge").children(".href" + i).prop("href", href);
									$("#otherJudge").children(".href" + i).text(otherJudges[i]);
								}
							}

							// 专利申请号
							var ANOnumber = $("#ANOnumber").text();
							$("#ANOnumber").html("");
							if (!ANOnumber.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#ANOnumber").append(node);
								text = encodeURIComponent(ANOnumber);
								href = "txnPatentImgTextList.do?select-key%3AexpressCN=(申请号='" + text.replace(/\'/g, "\\'") + "')";
								$("#ANOnumber").children(".href0").prop("href", href);
								$("#ANOnumber").children(".href0").text(ANOnumber);
							} else {
								var ANOnumbers = ANOnumber.split(";");
								for ( var i = 0; i < ANOnumbers.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#ANOnumber").append(node);
									node1 = "<span></span>";
									$("#ANOnumber").append(node1);
								}

								for ( var i = 0; i < ANOnumbers.length; i++) {
									text = encodeURIComponent(ANOnumbers[i]);
									href = "txnPatentImgTextList.do?select-key%3AexpressCN=(申请号='" + text.replace(/\'/g, "\\'") + "')";
									$("#ANOnumber").children(".href" + i).prop("href", href);
									$("#ANOnumber").children(".href" + i).text(ANOnumbers[i]);
								}
							}

							// 专利申请人
							var appealDominated = $("#appealDominated").text();
							$("#appealDominated").html("");
							if (!appealDominated.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#appealDominated").append(node);
								text = encodeURIComponent(appealDominated);
								href = "txnDecisionList.do?select-key%3AexpressCN=(专利申请人='" + text.replace(/\'/g, "\\'") + "')";
								$("#appealDominated").children(".href0").prop("href", href);
								$("#appealDominated").children(".href0").text(appealDominated);
							} else {
								var appealDominateds = appealDominated.split(";");
								for ( var i = 0; i < appealDominateds.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#appealDominated").append(node);
									node1 = "<span></span>";
									$("#appealDominated").append(node1);
								}

								for ( var i = 0; i < appealDominateds.length; i++) {
									text = encodeURIComponent(appealDominateds[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(专利申请人='" + text.replace(/\'/g, "\\'") + "')";
									$("#appealDominated").children(".href" + i).prop("href", href);
									$("#appealDominated").children(".href" + i).text(appealDominateds[i]);
								}
							}

							// 专利权人
							var ledgeDominated = $("#ledgeDominated").text();
							$("#ledgeDominated").html("");
							if (!ledgeDominated.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#ledgeDominated").append(node);
								text = encodeURIComponent(ledgeDominated);
								href = "txnDecisionList.do?select-key%3AexpressCN=(专利权人='" + text.replace(/\'/g, "\\'") + "')";
								$("#ledgeDominated").children(".href0").prop("href", href);
								$("#ledgeDominated").children(".href0").text(ledgeDominated);
							} else {
								var ledgeDominateds = ledgeDominated.split(";");
								for ( var i = 0; i < ledgeDominateds.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#ledgeDominated").append(node);
									node1 = "<span></span>";
									$("#ledgeDominated").append(node1);
								}

								for ( var i = 0; i < ledgeDominateds.length; i++) {
									text = encodeURIComponent(ledgeDominateds[i]);
									href = "txnDecisionList.do?select-key%3AexpressCN=(专利权人='" + text.replace(/\'/g, "\\'") + "')";
									$("#ledgeDominated").children(".href" + i).prop("href", href);
									$("#ledgeDominated").children(".href" + i).text(ledgeDominateds[i]);
								}
							}

							// IPC
							var IPCnumber = $("#IPCnumber").text();
							$("#IPCnumber").html("");
							if (!IPCnumber.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#IPCnumber").append(node);
								text = encodeURIComponent(IPCnumber);
								href = "txnPatentImgTextList.do?select-key%3AexpressCN=(IPC='" + text.replace(/\'/g, "\\'") + "')";
								$("#IPCnumber").children(".href0").prop("href", href);
								$("#IPCnumber").children(".href0").text(IPCnumber);
							} else {
								var IPCnumbers = IPCnumber.split(";");
								for ( var i = 0; i < IPCnumbers.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#IPCnumber").append(node);
									node1 = "<span></span>";
									$("#IPCnumber").append(node1);
								}

								for ( var i = 0; i < IPCnumbers.length; i++) {
									text = encodeURIComponent(IPCnumbers[i]);
									href = "txnPatentImgTextList.do?select-key%3AexpressCN=(IPC='" + text.replace(/\'/g, "\\'") + "')";
									$("#IPCnumber").children(".href" + i).prop("href", href);
									$("#IPCnumber").children(".href" + i).text(IPCnumbers[i]);
								}
							}

							// 提出部门
							var putDepartment = $("#putDepartment").text();
							$("#putDepartment").html("");
							if (!putDepartment.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#putDepartment").append(node);
								text = encodeURIComponent(putDepartment);
								href = "txnStandardList.do?select-key%3AexpressCN=(提出部门='" + text.replace(/\'/g, "\\'") + "')";
								$("#putDepartment").children(".href0").prop("href", href);
								$("#putDepartment").children(".href0").text(putDepartment);
							} else {
								var putDepartments = putDepartment.split(";");
								for ( var i = 0; i < putDepartments.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#putDepartment").append(node);
									node1 = "<span></span>";
									$("#putDepartment").append(node1);
								}

								for ( var i = 0; i < putDepartments.length; i++) {
									text = encodeURIComponent(putDepartments[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(提出部门='" + text.replace(/\'/g, "\\'") + "')";
									$("#putDepartment").children(".href" + i).prop("href", href);
									$("#putDepartment").children(".href" + i).text(putDepartments[i]);
								}
							}

							// 提出部门
							var putDepartment1 = $("#putDepartment1").text();
							$("#putDepartment1").html("");
							if (!putDepartment1.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#putDepartment1").append(node);
								text = encodeURIComponent(putDepartment1);
								href = "txnStandardList.do?select-key%3AexpressCN=(提出部门='" + text.replace(/\'/g, "\\'") + "')";
								$("#putDepartment1").children(".href0").prop("href", href);
								$("#putDepartment1").children(".href0").text(putDepartment1);
							} else {
								var putDepartment1s = putDepartment1.split(";");
								for ( var i = 0; i < putDepartment1s.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#putDepartment1").append(node);
									node1 = "<span></span>";
									$("#putDepartment1").append(node1);
								}

								for ( var i = 0; i < putDepartment1s.length; i++) {
									text = encodeURIComponent(putDepartment1s[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(提出部门='" + text.replace(/\'/g, "\\'") + "')";
									$("#putDepartment1").children(".href" + i).prop("href", href);
									$("#putDepartment1").children(".href" + i).text(putDepartment1s[i]);
								}
							}

							// 法律依据
							var lawrefer = $("#lawrefer").text();
							$("#lawrefer").html("");
							if (!lawrefer.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#lawrefer").append(node);
								text = encodeURIComponent(lawrefer);
								href = "txnStandardList.do?select-key%3AexpressCN=(法条名称='" + text.replace(/\'/g, "\\'") + "')";
								$("#lawrefer").children(".href0").prop("href", href);
								$("#lawrefer").children(".href0").text(lawrefer);
							} else {
								var lawrefers = lawrefer.split(";");
								for ( var i = 0; i < lawrefers.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#lawrefer").append(node);
									node1 = "<span></span>";
									$("#lawrefer").append(node1);
								}

								for ( var i = 0; i < lawrefers.length; i++) {
									text = encodeURIComponent(lawrefers[i]);
									href = "txnStandardList.do?select-key%3AexpressCN=(法条名称='" + text.replace(/\'/g, "\\'") + "')";
									$("#lawrefer").children(".href" + i).prop("href", href);
									$("#lawrefer").children(".href" + i).text(lawrefers[i]);
								}
							}

							// 尼斯分类
							var ncnum = $("#ncnum").text();
							$("#ncnum").html("");
							if (!ncnum.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#ncnum").append(node);
								text = encodeURIComponent(ncnum);
								href = "txnTradeMarkList.do?select-key%3AexpressCN=(尼斯分类='" + text.replace(/\'/g, "\\'") + "')";
								$("#ncnum").children(".href0").prop("href", href);
								$("#ncnum").children(".href0").text(ncnum);
							} else {
								var ncnums = ncnum.split(";");
								for ( var i = 0; i < ncnums.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#ncnum").append(node);
									node1 = "<span></span>";
									$("#ncnum").append(node1);
								}

								for ( var i = 0; i < ncnums.length; i++) {
									text = encodeURIComponent(ncnums[i]);
									href = "txnTradeMarkList.do?select-key%3AexpressCN=(尼斯分类='" + text.replace(/\'/g, "\\'") + "')";
									$("#ncnum").children(".href" + i).prop("href", href);
									$("#ncnum").children(".href" + i).text(ncnums[i]);
								}
							}

							// 申请人名称
							var appealTrademark = $("#appealTrademark").text();
							$("#appealTrademark").html("");
							if (!appealTrademark.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#appealTrademark").append(node);
								text = encodeURIComponent(appealTrademark);
								href = "txnTradeMarkList.do?select-key%3AexpressCN=(申请人名称='" + text.replace(/\'/g, "\\'") + "')";
								$("#appealTrademark").children(".href0").prop("href", href);
								$("#appealTrademark").children(".href0").text(appealTrademark);
							} else {
								var appealTrademarks = appealTrademark.split(";");
								for ( var i = 0; i < appealTrademarks.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#appealTrademark").append(node);
									node1 = "<span></span>";
									$("#appealTrademark").append(node1);
								}

								for ( var i = 0; i < appealTrademarks.length; i++) {
									text = encodeURIComponent(appealTrademarks[i]);
									href = "txnTradeMarkList.do?select-key%3AexpressCN=(申请人名称='" + text.replace(/\'/g, "\\'") + "')";
									$("#appealTrademark").children(".href" + i).prop("href", href);
									$("#appealTrademark").children(".href" + i).text(appealTrademarks[i]);
								}
							}

							// 代理人名称
							var dailiTrademark = $("#dailiTrademark").text();
							$("#dailiTrademark").html("");
							if (!dailiTrademark.indexOf(";")) {
								node = "<a class='href0' target='_blank' href=''>";
								$("#dailiTrademark").append(node);
								text = encodeURIComponent(dailiTrademark);
								href = "txnTradeMarkList.do?select-key%3AexpressCN=(代理人名称='" + text.replace(/\'/g, "\\'") + "')";
								$("#dailiTrademark").children(".href0").prop("href", href);
								$("#dailiTrademark").children(".href0").text(dailiTrademark);
							} else {
								var dailiTrademarks = dailiTrademark.split(";");
								for ( var i = 0; i < dailiTrademarks.length; i++) {
									node = "<a class='href" + i + "' target='_blank' href=''>";
									$("#dailiTrademark").append(node);
									node1 = "<span></span>";
									$("#dailiTrademark").append(node1);
								}

								for ( var i = 0; i < dailiTrademarks.length; i++) {
									text = encodeURIComponent(dailiTrademarks[i]);
									href = "txnTradeMarkList.do?select-key%3AexpressCN=(代理人名称='" + text.replace(/\'/g, "\\'") + "')";
									$("#dailiTrademark").children(".href" + i).prop("href", href);
									$("#dailiTrademark").children(".href" + i).text(dailiTrademarks[i]);
								}
							}

						}
					}
					// 相关数据隐藏项
					{
						var similary = true;
						// 相关商标
 

						// 相关标准
						if ($(".similarySta").length == 0) {
							$(".similarySta1").addClass("displayNone");
							$(".similarySta2").addClass("displayNone");
							$(".similarySta3").addClass("displayNone");
						} else {
							similary = false;
						}

					 

						// 相关期刊
						if ($(".similaryPer").length == 0) {
							$(".similaryPer1").addClass("displayNone");
							$(".similaryPer2").addClass("displayNone");
							$(".similaryPer3").addClass("displayNone");
						} else {
							similary = false;
						}

						var similaryCase = true;
						// 裁判文书
						if ($(".similaryRef").length == 0) {
							$(".similaryRef1").addClass("displayNone");
							$(".similaryRef2").addClass("displayNone");
							$(".similaryRef3").addClass("displayNone");
						} else {
							similaryCase = false;
						}

						// 复审无效决定
						if ($(".similaryDec").length == 0) {
							$(".similaryDec1").addClass("displayNone");
							$(".similaryDec2").addClass("displayNone");
							$(".similaryDec3").addClass("displayNone");
						} else {
							similaryCase = false;
						}

						// 相关判例
						if (similaryCase) {
							$(".similaryCase1").addClass("displayNone");
							$(".similaryCase2").addClass("displayNone");
						} else {
							similary = false;
						}

						// 专利权人信息
						if (true) {
							$(".similaryPatentInfo1").addClass("displayNone");
							$(".similaryPatentInfo2").addClass("displayNone");
						} else {
							similary = false;
						}

						// 发明人信息
						if (true) {
							$(".similaryInterInfo1").addClass("displayNone");
							$(".similaryInterInfo2").addClass("displayNone");
						} else {
							similary = false;
						}

						if (!similary) {
							$("#NoData").addClass("displayNone");
						}
					}
					// 添加分组分行处理
					{
						if (txncode == "MdTradeMarkDetail" || txncode == "TradeMarkDetail" || txncode == "UsTradeMarkDetail") {

							var markList = $("#markList").text();
							$("#markList").html("");
							if (!markList.indexOf(";")) {
								$("#markList").text("00 " + markList);
							} else {
								markLists = markList.split(";");
								var node = "<table id='markTable'></table>";
								$("#markList").append(node);
								for ( var num = 0; num < markLists.length; num++) {
									node = "<tr class='trNum" + num + "'></tr>";
									$("#markTable").append(node);
									node = "<td  valign='top' style='width:30px;'>0" + num + "</td>";
									$("#markTable").children().children(".trNum" + num).append(node);
									node = "<td>" + markLists[num] + "</td>";
									$("#markTable").children().children(".trNum" + num).append(node);
								}
							}
						}

					}

					{

						// 翻译功能

						$("#translationOld").val("");
						$("#translationTxt").val("");

						$("#dropdown_menu_close").click(function() {
							$(".translation").addClass("disPlayNone");
							try {
								$("#translationTxt").hideLoading();
							} catch (e) {
							}
						});

						// 需要增加翻译和标注功能的交易号
						if (txncode == "PatentDetail" || txncode == "PatentENDetail" || txncode == "PatentCNDetail" || txncode == "PatentDoubleColumn" || txncode == "PatentLegalStatus"
								|| txncode == "PatentData" || txncode == "PatentIntensity") {

							$(document).click(function() {
								// $(".translation").addClass("disPlayNone");
								// $("#dropdownMenu").css("display", "none");
							});
							var sign_status = $("#sign_status").val();
							var project_id1 = $("#project_id").val();
							var show_type = $("#show_type").val();
							var pid = $("#_PID").val();
							var status = false;
							if (sign_status == "N") {
								$("#status").attr("src", "/module/di/img/patent/peruseView/biaoqianGray.png");
								$("#status").addClass("no").removeClass("yes");
							} else if (sign_status == "Y") {
								$("#status").attr("src", "/module/di/img/patent/peruseView/biaoqianYellow.png");
								$("#status").addClass("yes").removeClass("no");
							} else {
								$("#status").hide();
							}

							if (project_id1 != "") {
								status = true;

								$("#status").click(function() {

									var sign_status1 = "";
									var sign_src = $("#status").attr("src");
									if ($("#status").hasClass("no") || sign_status == "") {
										sign_status1 = "Y";
										$("#status").attr("src", "/module/di/img/patent/peruseView/biaoqianYellow.png");
										$("#status").addClass("yes").removeClass("no");
									} else if ($("#status").hasClass("yes")) {
										sign_status1 = "N";
										$("#status").attr("src", "/module/di/img/patent/peruseView/biaoqianGray.png");
										$("#status").addClass("no").removeClass("yes");
									}

									var pno = $("#_PNO").val();
									$.ajax({
										type : "POST",
										dataType : "xml",
										url : "/" + rootPath + "txnUpdateStatus.ajax",
										data : "select-key:project_id=" + project_id1 + "&select-key:pno=" + pno + "&select-key:sign_status=" + sign_status1 + "&select-key:pid=" + pid,
										success : function(data) {
											alert("成功修改标记");
										}
									});
								});

								$('#labelDelBtn').click(
										function(e) {

											var project_id = $("#project_id").val();
											var note_object_type = $("#labelType").val();
											var pno = $("#_PNO").val();
											var pid = $("#_PID").val();
											var note_object = "";
											var note_content = "";
											var note_time = "";
											var note_relate = "";
											var note_relateType = "";
											var num = 0;
											$(".lableList input").each(function() {
												if ($(this).prop("checked")) {
													num++;
													note_object += $(this).next().children(".note_object").attr("v") + "~";
													note_content += $(this).next().children(".note_content").attr("v") + "~";
													note_relate += $(this).next().children(".note_relate").attr("v") + "~";
													note_relateType += $(this).next().children(".note_relateType").attr("v") + "~";
													note_time += $(this).next().children(".note_time").attr("v") + "~";
												}
											});
											if (num == 0) {
												alert("请选择您要删除的内容");
												return;
											}
											note_object = note_object.substring(0, note_object.length - 1);
											note_content = note_content.substring(0, note_content.length - 1);
											note_relate = note_relate.substring(0, note_relate.length - 1);
											note_relateType = note_relateType.substring(0, note_relateType.length - 1);
											note_time = note_time.substring(0, note_time.length - 1);
											$.ajax({
												type : "POST",
												dataType : "xml",
												url : "/" + rootPath + "txnDeleteLabeled.ajax",
												data : "select-key:project_id=" + project_id + "&select-key:note_object_type=" + note_object_type + "&select-key:pno=" + pno
														+ "&select-key:note_object=" + encodeURIComponent(note_object) + "&select-key:note_content=" + encodeURIComponent(note_content)
														+ "&select-key:note_time=" + note_time + "&select-key:note_relate_no=" + note_relate + "&select-key:note_relate_type=" + note_relateType
														+ "&select-key:pid=" + pid,
												success : function(data) {
													alert("删除成功！");
												}
											});
											$(".labelListWindow").hide();

										});

								// 显示所有标引
								$("#showAllLabelBtn").click(function() {
									$("#_changeInxTable").show();
									$("#_InxTable").hide();

								});

								if (show_type == "myShare") {

									$("#labelDelBtn").unbind('click');
									$("#labelDelBtn").attr("title", "该项目为共享项目不能做此操作");

									$("#showAllLabelBtn").unbind('click');
									$("#showAllLabelBtn").attr("title", "该项目为共享项目不能做此操作");

									$("#onclickLabel").unbind('click');
									$("#onclickLabel").attr("title", "该项目为共享项目不能做此操作");

									$("#status").unbind('click');
									$("#status").attr("title", "该项目为共享项目不能做此操作");
								} else {
									// 标注
									$(".shuoming, .neirong").mouseup(function(e) {
										$("#labelType").val("0");
										labelWindowShow(e);
										return false;
									});
								}
							} else {
								$(".labelSign").each(function() {
									$(this).addClass("displayNone");
								});
								$("#status").hide();
							}

							$("#selectAll").click(function() {
								var isChecked = $(this).prop("checked");
								$(".lableList input").prop("checked", isChecked);
							});

							$('.labelSign')
									.click(
											function(e) {
												var project_id = $("#project_id").val();
												var pno = $("#_PNO").val();
												var note_object_type = $(this).next().val();
												$("#labelType").val(note_object_type);
												$("#labelList").html("");
												$
														.ajax({
															type : "POST",
															dataType : "xml",
															url : "/" + rootPath + "txnQueryLabeled.ajax",
															data : "select-key:project_id=" + project_id + "&select-key:pno=" + pno + "&select-key:note_object_type=" + note_object_type
																	+ "&select-key:pid=" + pid,
															success : function(data) {

																var flag = 0;
																var record = $.fz_common.getXmlNodeValues(data, "context>record");
																$(record)
																		.each(
																				function(index, domEle) {
																					var ele = $(this);

																					if (ele.text() == null || ele.text() == "") {

																					} else {
																						flag++;
																						var num = 0;
																						var note_time = "";
																						var note_content = "";
																						var note_object = "";
																						var note_relate = "";
																						var note_relateType = "";
																						ele.children().each(function(index, domEle) {
																							if (num == 0) {
																								note_time = $(this).text();
																							} else if (num == 1) {
																								note_content = $(this).text();
																							} else if (num == 2) {
																								note_object = $(this).text();
																							} else if (num == 3) {
																								note_relate = $(this).text();
																							} else if (num == 4) {
																								note_relateType = $(this).text();
																							}
																							num++;
																						});

																						m_node = $("<div style=' border-bottom: 1px solid #333333; padding:10px;' class='lableList'><input style=' float:left; ' type='checkbox'  /><ul style=' margin-left:25px;'><li class='note_time' v='"
																								+ note_time
																								+ "'>标注日期："
																								+ note_time
																								+ "</li><li class='note_object' v='"
																								+ note_object
																								+ "'>标注对象："
																								+ note_object
																								+ "</li><li class='note_content' v = '"
																								+ note_content
																								+ "'>标注内容："
																								+ note_content
																								+ "</li><li class='note_relate' v='"
																								+ note_relate
																								+ "'>关联号:"
																								+ note_relate
																								+ "</li><li class='note_relateType' v='"
																								+ note_relateType
																								+ "'>关联号类别："
																								+ note_relateType
																								+ "</li></ul></div>");
																						$("#labelList").append(m_node);
																					}

																				});
																if (flag < 1) {
																	m_node = $("<div style=' border-bottom: 1px solid #333333; padding:10px;' class='lableList'><ul style=' margin-left:25%; font-size:20px;'><li>该处没有添加任何标注</li>");
																	$("#labelList").append(m_node);
																}

															},
														});
												mousWindowShow(e, ".labelListWindow");
											});
							$(".translation").click(function() {
								return false;
							});

							$("#__abshtml").mouseup(function(e) {
								$("#labelType").val("1");
								dropdownMenuShow(e, status);
							});

							$("#__deshtml").mouseup(function(e) {
								$("#labelType").val("3");
								dropdownMenuShow(e, status);
							});

							$("#__clahtml").mouseup(function(e) {
								$("#labelType").val("2");
								dropdownMenuShow(e, status);
							});

						}

						// 标注功能
						$('.labelWindow').click(function() {
							return false;
						});

						$('#labelWindowBtn2').click(function() {
							$(".labelWindow").hide();
						});

						$('#labelWindowBtn1').click(
								function() {

									var labelObject = $("#labelObject").text();
									var labelText = $("#labelText").val();
									var labelType = $("#labelType").val();
									var relateType = $("#relateNum").val();
									var relate = $("#relate").val();
									var pid = $("#_PID").val();
									var pno = $("#_PNO").val();
									var project_id = $("#project_id").val();
									if (labelText == "") {
										alert("标注内容不能为空");
										return;
									} else if (labelText.length > 50) {
										alert("标注内容不能超过50个汉字。");
										return;
									}
									$.ajax({
										type : "POST",
										dataType : "xml",
										url : "/txnAddLabeled.ajax",
										data : "select-key:pid=" + pid + "&select-key:pno=" + pno + "&select-key:project_id=" + project_id + "&select-key:note_object=" + labelObject
												+ "&select-key:note_content=" + labelText + "&select-key:note_object_type=" + labelType + "&select-key:note_relate_type=" + relateType
												+ "&select-key:note_relate=" + relate,
										success : function(data) {
											var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
											if (errCode == "000000") {

												alert("添加标注成功！");
											} else {
											}
										},
										error : function(XMLHttpRequest, textStatus, errorThrown) {

											alert("提价评论发生错误，请稍后重试。");

										}
									});
									$(".labelWindow").hide();
									// 交易号AddLabel
								});

						$('#labelListWinClose').click(function(e) {
							$(".labelListWindow").hide();
						});

						$("#onclickLabel").click(function(e) {
							labelWindowShow1(e, _selecterLate);
							$("#dropdownMenu").hide();
						});

						// 打开窗口
						$("#addLabelFieldBtn").click(function() {
							$("#labelAlertWindow").show();
							var scrolltop = $(document).scrollTop();
							$("#labelAlertWindow").css("margin-top", scrolltop);
							setLayerHeight();
							disabledMouseWheel();
							$(".shielding_layer").removeClass("displayNone");
							$(".bodyClass").addClass("overflowHidden");

						});
						// 关闭
						$(".closeLabelAlertWindow").click(function() {
							$("#labelAlertWindow").hide();
							$(".shielding_layer").addClass("displayNone");
							$(".bodyClass").removeClass("overflowHidden");
							MouseWheel();
						});
						// loadLabel();//标引
						isShowLabel($("#project_id").val());// 显示标引

						// 取消
						$("#cancleLabelBtn").click(function() {
							loadLabel();
							// $("#_InxTable").show();
							// $("#_changeInxTable").hide();
						});

						// 增加标引
						$("#addLabelBtn").click(
								function() {

									var chooseItem = $('#_chooseInxItem').val();
									if (!chooseItem) {
										alert('请选择标引项');
										return false;
									}

									var inputWord = $('#_inputInxWord').val();
									if (!inputWord) {
										alert("请输入标引词");
										return false;
									}

									if ($('#_changeInxTable').find("[v_pos_name='" + chooseItem + "']").find("[v_word='" + inputWord + "']").length != 0) {
										alert("标引词重复:" + inputWord);
										return;
									}

									var htmlStr = "<div style='display:inline-block; width:200px;float:left;'> "
											+ "<input name='clk' class='_inxWord cursorPointer' checked style='display:inline-block;border:red;margin-top: -5px;' type='checkbox' v_word='" + inputWord
											+ "' onclick='setColor(this);'/>" + "<label style='display:inline-block;color:red;' >" + inputWord + "</label></div>";//

									// $('#_changeInxTable').find("
									// [v_pos_name='" + chooseItem +
									// "']").parent().getCell(0);
									$('#_changeInxTable').find(" [v_pos_name='" + chooseItem + "']").append($(htmlStr));

									return false;
								});

						// 保存标引
						$("#saveLabelFieldBtn").click(function() {

							var postData = "";
							var itemCount = 1;
							var project_id = $("#project_id").val();
							var pno = $("#_PNO").val();
							var pid = $("#_PID").val();
							postData += "select-key:project_id=" + project_id + "&select-key:pno=" + pno + "&select-key:pid=" + pid;
							$("._inxItem").each(function() {
								var item = $(this).attr('v_item');
								var wordStr = "";
								$(this).parent().find('._inxWord').each(function() {
									var word = $(this).attr('v_word');
									var checked = $(this).prop('checked');
									if (word) {
										wordStr += (word + ":" + checked + ",");
									}
								});
								wordStr = wordStr.replace(/,\s*$/, "");
								postData += "&inx:inx_item_" + itemCount + "=" + encodeURIComponent(item);
								postData += "&inx:inx_word_" + itemCount + "=" + encodeURIComponent(wordStr);
								itemCount = itemCount + 1;
							});
							$.ajax({
								type : "POST",
								dataType : "xml",
								url : "/txnSaveLabel.ajax",
								data : postData,
								success : function(data) {
									var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
									if (errCode != "000000") {
										return false;
									}
									alert('保存成功');
									loadLabel();
								},
								error : function(data) {
									alert("保存失败");
								}
							});
						});
						$(document).click(function() {
							// $(".labelWindow").hide();
						});

					}

	// 导航栏滚动 通用隐藏显示
	{

		$('.keywordUl li').click(
				function() {
					var v = $(this).attr("v");
					$("#" + v).parent().next().removeClass("displayNone");
					$("#" + v).parent().children(".classificationIcon").css("background", "url(/" + rootPath + "module/di/img/patent/peruseView/ic1.png)").css("background-repeat",
							"no-repeat");
					animateAnchor(this);
				});

		$(".classificationIcon").click(function() {
			if ($(this).parent().next().hasClass("displayNone")) {
				$(this).css("background", "url(images/ic1.png)");

				$(this).css("background-repeat", "no-repeat");
			} else {
				$(this).css("background", "url(images/icup.png)");
				$(this).css("background-repeat", "no-repeat");
			}
			$(this).parent().next().toggleClass("displayNone");
		});

		$(".classificationTextNew").click(function() {
			if ($(this).parent().parent().next().hasClass("displayNone")) {
				$(this).css("background", "url(images/ic1.png)");
				$(this).css("background-repeat", "no-repeat");
			} else {
				$(this).css("background", "url(images/icup.png)");
				$(this).css("background-repeat", "no-repeat");
			}
			$(this).parent().parent().next().toggleClass("displayNone");
		});

		var lastAnimateH = 0;
		function animateAnchor(obj, t) {

			if (t == null) {
				t = 1000;
			}
			$('.keywordUl li').css("color", "rgb(102, 102, 102)");
			$(obj).css("color", "#6478b3");
			var v = $(obj).attr("v");

			// 移动到100的位置
			var h = 100;

			$('html,body').animate({
				scrollTop : ($('#' + v).offset().top - h)
			}, t, function() {
				// 牵扯到AJAX加载的内容可能要重新移动
				// if (txncode == "PatentDetail") {
				var top = (getTop(v));

				if (top == lastAnimateH) {
					return;
				}

				lastAnimateH = top;
				// alert(top);
				// alert(h);
				// 有可能每次都移动不到h 会有比如100.xx的情况 不能直接 > h 要有个偏移量
				if (top > h + 20) {
					animateAnchor(obj, 500);
				}
				// }
			});

		}

	}

	// 评论
	{

		$('#subCommentSubmit').click(function() {

			var commentTxt = $("#subCommentTxt").val();
			var _pId = $("#_commentID").val();

			if (_pId == null || _pId == "") {

				alert("数据异常");
				return;
			}

			if (commentTxt == null || commentTxt == "") {

				alert("请添加回复内容");
				return;

			} else if (commentTxt.length > 256) {

				alert("评价内容最多256个字");
				return;
			}

			$("#mGrid_gridComment").append($("#subCommentForm"));
			$("#subCommentForm").hide();

			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/txnAddSubComment.ajax",
				data : "freezeTxnAction=" + freezeTxnAction + "&select-key:COMMENT=" + encodeURIComponent(commentTxt) + "&select-key:commentID=" + encodeURIComponent(_pId),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {

						mGrid_gridComment_obj.query(1, function() {
							alert("回复成功");
							$("#subCommentTxt").val("");
							buildCommentStar();
						});

					} else if (errCode == "collError") {

						$("#preSubComment" + _pId).click();
						$.fz_common.alert("评论存在敏感词。", "您的回复存在敏感词，请修改后评论。", null);

					} else {
						errorDescAlert(data);
					}
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {

					alert("提价评论发生错误，请稍后重试。");

				}
			});

		});
		$('#commentSubmit').click(function() {

			var commentTxt = $("#commentTxt").val();
			var _pId = $("#_PID").val();

			if (_pId == null || _pId == "") {
				_pId = $("#_ID").val();
			}

			if (_pId == null || _pId == "") {

				alert("数据异常");
				return;
			}

			if (commentTxt == null || commentTxt == "") {

				alert("请添加评论内容");
				return;

			} else if (commentTxt.length > 256) {
				alert("评论内容不得大于256");
				return;
			}

			var star = 0;
			$("#commentStar .OrangeStar").each(function() {
				star++;
			});

			// 移动回复框防止列表加载被刷新
			$("#mGrid_gridComment").append($("#subCommentForm"));
			$("#subCommentForm").hide();

			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/txnAddComment.ajax",
				data : "freezeTxnAction=" + freezeTxnAction + "&select-key:COMMENT=" + encodeURIComponent(commentTxt) + "&select-key:MAINID=" + _pId + "&select-key:STAR=" + "" + star,
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {

						mGrid_gridComment_obj.query(1, function() {
							alert("添加成功");
							$("#commentTxt").val("");
							buildCommentStar();
						});

					} else if (errCode == "collError") {

						$.fz_common.alert("提示", "您的回复存在敏感词，请修改后评论。", null);

					} else {

						errorDescAlert(data);
					}
				},
				error : function(XMLHttpRequest, textStatus, errorThrown) {

					alert("提价评论发生错误，请稍后重试。");

				}
			});
		});

		$("#commentStar .star").click(function() {
			$(this).prevAll().filter(".star").removeClass("GreyStar");
			$(this).prevAll().filter(".star").addClass("OrangeStar");

			$(this).nextAll().filter(".star").removeClass("OrangeStar");
			$(this).nextAll().filter(".star").addClass("GreyStar");

			$(this).removeClass("GreyStar");
			$(this).addClass("OrangeStar");
		});
	}

	// 相关数据页面的标准类型由英文转换成中文
	{
		$(".SCCNClass").each(function() {
			$(this).text(iseLibrary[$(this).text()]);
		});
	}

	// 通用链接重置 格式化等
	{
		$(".pdfExist0").each(function(){
			$(this).attr("target", "");
			$(this).attr("href", 'javascript:$.fz_common.alert("提示", "该专利暂无PDF文件。");');
		});
		$(".pdfExist1").each(function(){
			var _paramsData = $(this).attr("outhref");
			if(_paramsData != null && _paramsData != ""){
				var _params = _paramsData.split(";");
				var _pc = _params[0];
				if(_pc == "CN" || _pc == "US" || _pc == "JP" || _pc == "KR" || _pc == "EP"){
					var inHref = $(this).attr("innerhref");
					console.debug(inHref);
					$(this).attr("href",inHref)
				}else{
					var _pno = $.trim(_params[1]).substring(2,$.trim(_params[1]).length);
					var _pk = _params[2];
					var _pd = $.trim(_params[3]).substring(0,10).replace(/\//g,"");
					$(this).attr("href","https://worldwide.espacenet.com/publicationDetails/originalDocument?"
								+"CC="+_pc+"&NR="+_pno+"&KC="+_pk+"&FT=D&ND=3&date="+_pd+"&DB=EPODOC&locale=en_EP#");
				}
			}
		});
		
		$(".APCLink").each(function() {
			buildLink(this, "申请人", queryAction);
		});

		$(".AP1OLink").each(function() {
			buildLink(this, "申请人", queryAction);
		});
		$(".UCLink").each(function() {
			buildLink(this, "UC");
		});

		$(".IPCQLink").each(function() {

			buildLink(this, "IPC", queryAction);
			// IPC移动上去之后的AJAX装载提示
			$(".IPCQLink a").mouseover(function() {
				setIPCTitle(this);
			});
		});
		
		$(".FTERMLink").each(function(){
			buildLink(this, "FTERM",queryAction);
		});

		$(".FILink").each(function() {
			buildLink(this, "FI", queryAction);
		});

		$(".PRNOLink").each(function() {
			buildLink(this, "优先权", queryAction);
		});

		$(".AGCLink").each(function() {
			buildLink(this, "代理机构", queryAction);
		});

		$(".AGLink").each(function() {
			buildLink(this, "代理人", queryAction);
		});

		$(".INCLink").each(function() {
			buildLink(this, "发明人", queryAction);
		});

		$(".EPRYLink").each(function() {
			buildLink(this, "优先权", queryAction);
		});

		$(".PCTAOLink").each(function() {
			buildLink1(this, "国际申请", queryAction);
		});

		$(".PCTPOLink").each(function() {
			buildLink1(this, "国际公布", queryAction);
		});

		$(".CIELink").each(function() {
			buildLink(this, "审查员", queryAction);
		});

		$(".CANLink").each(function() {
			buildLink(this, "案件发文号", queryAction);
		});

		$(".PLOLink").each(function() {
			buildLink(this, "原告或上诉人", queryAction);
		});

		$(".DEOLink").each(function() {
			buildLink(this, "被告或被上诉人", queryAction);
		});

		$(".LCLink").each(function() {
			buildLink(this, "洛迦诺", queryAction);
		});

		$(".TPOLink").each(function() {
			buildLink(this, "第三人", queryAction);
		});

		$(".ANOLink").each(function() {
			buildLink(this, "专利申请号", queryAction);
		});

		$(".RNLink").each(function() {
			buildLink(this, "商标注册号", queryAction);
		});

		$(".RIDNLink").each(function() {
			buildLink(this, "决定号", queryAction);
		});

		$(".RIAPOLink").each(function() {
			buildLink(this, "请求人", queryAction);
		});

		$(".RILBLink").each(function() {
			buildLink(this, "法律依据", queryAction);
		});

		$(".ATIOLink").each(function() {
			buildLink(this, "标题原文", queryAction);
		});

		$(".AAOLINK").each(function() {
			queryAction = "txnPeriodicalList";
			buildLink(this, "作者", queryAction);
		});

		$(".AJTOLINK").each(function() {
			queryAction = "txnPeriodicalList";
			buildLink(this, "文献来源原文", queryAction);
		});

		// 作者单位
		$(".AAFOLINK").each(function() {
			queryAction = "txnPeriodicalList";
			buildLink(this, "作者单位", queryAction);
		});
		
		//裁判文书细览页面连接重置
		$(".CDNLINK").each(function() {
			buildLink(this, "案号", queryAction);
		}); 
		$(".UCNLINK").each(function() {
			buildLink(this, "上级案号", queryAction);
		});
		/*
		$(".CCTCLINK").each(function() {
			buildLink(this, "名称中文", queryAction);
		}); //案件名称（中文）
		*/
		$(".PLLINK").each(function() {
			buildLink(this, "原告或上诉人", queryAction);
		}); 
		$(".PLAGLINK").each(function() {
			buildLink(this, "原告代理机构", queryAction);
		});//原告或上诉人委托代理机构（原文）
		$(".PLAGNLINK").each(function() {
			buildLink(this, "原告代理人", queryAction);
		}); //原告或上诉人委托代理人姓名（原文）
		$(".PLLRLINK").each(function() {
			buildLink(this, "原告法定代表人", queryAction);
		}); //原告或上诉人法定代表人（原文）
		$(".DELINK").each(function() {
			buildLink(this, "被告或被上诉人", queryAction);
		}); //被告或被上诉人（原文）
		$(".DEAGLINK").each(function() {
			buildLink(this, "被告代理机构", queryAction);
		}); //被告或被上诉人委托代理机构（原文）
		$(".DEAGNLINK").each(function() {
			buildLink(this, "被告代理人", queryAction);
		}); //被告或被上诉人委托代理人姓名（原文）
		$(".DELRLINK").each(function() {
			buildLink(this, "被告法定代表人", queryAction);
		}); //被告或被上诉人法定代表人（原文）
		$(".TPLINK").each(function() {
			buildLink(this, "第三人", queryAction);
		}); //第三人（原文）
		$(".TPAGLINK").each(function() {
			buildLink(this, "第三人代理机构", queryAction);
		}); //第三人委托代理人机构（原文）
		$(".TPAGNLINK").each(function() {
			buildLink(this, "第三人代理人", queryAction);
		}); //第三人委托代理人姓名（原文）
		$(".TPLRLINK").each(function() {
			buildLink(this, "第三人法定代表人", queryAction);
		}); //第三人法定代表人（原文）
		$(".CNLINK").each(function() {
			buildLink(this, "法院名称", queryAction);
		}); //法院名称
		$(".PJLINK").each(function() {
			buildLink(this, "审判长", queryAction);
		}); //审判长（原文）
		$(".PGALINK").each(function() {
			buildLink(this, "代理审判长", queryAction);
		}); //代理审判长（中文)
		$(".JOLINK").each(function() {
			buildLink(this, "审判员", queryAction);
		}); //审判员（中文）
		$(".JOALINK").each(function() {
			buildLink(this, "代理审判员", queryAction);
		}); //代理审判员（中文）
		$(".PALINK").each(function() {
			buildLink(this, "人民陪审员", queryAction);
		}); //人民陪审员（中文）
		$(".CCLINK").each(function() {
			buildLink(this, "书记员", queryAction);
		}); //书记员（原文）
		
		//优先权号加链接进细览页面
		$(".PRNSLINK").each(function(){
			var values = $(this).attr("v");
			var valueList = values.split(";");
			
			var keys = $(this).text();
			var keyList = keys.split(";");
			
			$(this).text("");
			var link = "";
			
			for(var index = 0; index < valueList.length; index ++){
				if(keyList[index] != undefined && keyList[index] != ""){
					var value = valueList[index].substring(0, valueList[index].length - 9);
					var key = keyList[index];
					
					link += "<a style='margin-left:5px;' href=\""
					+ "/" + rootPath + "txnPatentDetailByANS.do?select-key:ANS=" + value
					+ "\" target=\"_blank\" >" + key + "</a>";
				}
			}
			
			$(this).append(link);
		});

		// 增加各类链接 (每个检索地址不同)--对应相关数据--quhang
		// 这里缺少专利的LIST配置，下方的js会报错不执行
		var patFreezeTxnAction = "PatentImgTextList";
		var cseFreezeTxnAction = "RefereeList";
		var decFreezeTxnAction = "DecisionList";
		var lawFreezeTxnAction = "LawsList";
		var iseFreezeTxnAction = "PeriodicalList";
		var stdFreezeTxnAction = "StandardList";
		var traFreezeTxnAction = "TradeMarkList";
		// 细览相关数据页面--关联裁判文书链接
		$(".CSEPLOLink").each(function() {
			buildLink(this, "原告或上诉人", "txn" + cseFreezeTxnAction);
		});

		$(".CSEDEOLink").each(function() {
			buildLink(this, "被告或被上诉人", "txn" + cseFreezeTxnAction);
		});

		$(".CSECDNLink").each(function() {
			buildLink(this, "案号", "txn" + cseFreezeTxnAction);
		});

		$(".CSETPOLink").each(function() {
			buildLink(this, "第三人", "txn" + cseFreezeTxnAction);
		});

		$(".CSEANSLink").each(function() {
			buildLink(this, "申请号标准", "txn" + cseFreezeTxnAction);
		});

		$(".CSERNLink").each(function() {
			buildLink(this, "注册号", "txn" + traFreezeTxnAction);
		});

		// $(".CSERNLink a").mouseover(function() {
		// setIPCTitle(this);
		// });

		$(".TRAHNLink").each(function() {
			buildLink(this, "申请人名称", "txn" + traFreezeTxnAction);
		});

		$(".NCLink").each(function() {
			buildLink(this, "尼斯分类", "txn" + traFreezeTxnAction);
		});

		$(".CSEJALink").each(function() {
			buildLink(this, "判决金额", "txn" + cseFreezeTxnAction);
		});
		// 细览相关数据页面--关联审查决定链接
		// 这个是专利细览的链接
		$(".DECANOLink").each(function() {
			buildLink(this, "申请号", "txn" + patFreezeTxnAction);
		});

		//$(".DECRIDNLink").each(function() {
		//	buildLink(this, "决定号", "txn" + decFreezeTxnAction);
		//});

		$(".DECRIAPOLink").each(function() {
			buildLink(this, "请求人", "txn" + decFreezeTxnAction);
		});

		$(".DECRILBLink").each(function() {
			buildLawLink(this, "法条名称");
		});
		$(".DECLAWRILBLink").each(function() {
			buildLink(this, "法条名称" ,"txn" + lawFreezeTxnAction);
		});
		// 细览相关数据页面--关联专利链接
		$(".PATAPCLink").each(function() {
			buildLink(this, "申请人", "txn" + patFreezeTxnAction);
		});
		$(".PATANOLink").each(function() {
			buildLink(this, "申请号", "txn" + patFreezeTxnAction);
		});

		$(".ANOLink").each(function() {
			buildLink(this, "申请号", "txn" + patFreezeTxnAction);
		});

		$(".PATIPCQLink").each(function() {
			buildLink(this, "IPC", "txn" + patFreezeTxnAction);
		});
		$(".PATCPCQLink").each(function() {
			buildLink(this, "CPC", "txn" + patFreezeTxnAction);
		});
		// 细览相关数据页面--关联商标链接
		$(".TRARNLink").each(function() {
			buildLink(this, "注册号", "txn" + traFreezeTxnAction);
		});
		// 细览相关数据页面--关联标准链接

		$(".STDSDCOLink").each(function() {
			buildLink(this, "起草单位", "txn" + stdFreezeTxnAction);
		});

		$(".STDSNLink").each(function() {
			buildLink(this, "标准号", "txn" + stdFreezeTxnAction);
		});

		// 细览相关数据页面--关联期刊链接
		// 作者

		$(".filterDay").each(function() {
			var txt = $(this).text();
			if(txt.length == 8){
				$(this).text(_dateFilterDay(txt));
			}
		});

		$(".filterDay1").each(function() {
			var txt = $.trim($(this).text());
			if(txt.length >= 8){
				$(this).text(_dataFilterDayXian(txt));
			}
			
		});
		
		$(".filterDay2").each(function() {
			var txt = $.trim($(this).text());
			if(txt.length >= 9){
				$(this).text(_dataFilterDayXian(txt));
			}
			
		});

		$(".filterDayDian").each(function() {
			var txt = $(this).text();
			if(txt.length == 8){
				$(this).text(_dateFilterDayDian(txt));
			}
			
		});

		$(".PRNOData").each(function() {
			var prnos = $(this).text();
			if (prnos != "" && prnos != null) {
				var prnoList = prnos.split(";");
				prnos = "";
				for ( var i = 0; i < prnoList.length; i++) {
					prnos += prnoList[i].substr(0, prnoList[i].length - 8) + " " + prnoList[i].substr(prnoList[i].length - 8, 8).substr(0, 4) + "."
							+ prnoList[i].substr(prnoList[i].length - 8, 8).substr(4, 2) + "." + prnoList[i].substr(prnoList[i].length - 8, 8).substr(6, 2) + ";";
				}
				$(this).text(prnos);
			}
		});
	}

	// 优先权点击事件
	{
		$(".EPRYClick").click(function() {
			var ANO = $(this).text().split(" ")[0];
			window.open("/" + rootPath + "txnPatentDetailByANO.do?select-key:ANO=" + ANO);

		});
	}
	// 国际申请点击事件
	{
		$(".PCTAOClick").click(function() {
			var pctao = $(this).text().substring(0, $(this).text().length - 12);
			window.open("/" + rootPath + "txnPatentImgTextList.do?select-key:expressCN=(国际申请= '" + pctao + "')");
		});
	}

	// 国际公布点击事件
	{
		$(".PCTPOClick").click(function() {
			var pctpo = $(this).text().substring(0, $(this).text().length - 12);
			window.open("/" + rootPath + "txnPatentImgTextList.do?select-key:expressCN=(国际公布= '" + pctpo + "')");
		});
	}

});

// 评论点赞回复

function commentOK(obj) {

	var id = $(obj).attr("v");

	$("#commentOK" + id).showLoading({});

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : "/" + rootPath + "txncommentOK.ajax",
		data : "select-key:ID=" + id,
		success : function(data) {

			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {

				var comment = $.fz_common.getXmlNodeValues(data, "context>comment");
				var numOk = comment.text();
				var id1 = "#commentOK" + id;
				$(id1).text("(" + numOk + ")");

				$("#commentOK" + id).hideLoading();

			} else {
				alert("您已经点过赞了！");
				$("#commentOK" + id).hideLoading();
			}

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			alert("提价发生错误，请稍后重试。");
			$("#commentOK" + id).hideLoading();

		}
	});

}

// 高亮全局对象
var _kwList = new Array();
var color = [ "#7C00FA", "#FFCC00", "#00A2FF", "#FF2400", "#26E746" ];

// 高亮节点

function doNormalTxt() {
	$(".highlightTxt").each(function() {

		$(this).css({

			color : $(this).parent().css("color"),
			"font-weight" : $(this).parent().css("font-weight")

		});

	});

}

var _tableKwList;
function doHighlightTxt(ele) {

	$(ele).each(function() {

		// 高亮
		for ( var i = 0; i < _kwList.length; i++) {

			if ($(this).text() == _kwList[i]) {

				$(this).css({

					color : color[i],
					"font-weight" : "bold"

				});

			}

		}

	});

	// 更新所有高亮导航 每次都重新更新
	$("#highlightTable").empty();
	_tableKwList = new Array();
	var h = 0;
	var kwLine;
	$("span.highlightTxt").each(function() {

		// 当前元素的距离

		var eleOffsetTop = ($(this).offset().top);
		var eleOffsetLeft = ($(this).offset().left);

		if (h != eleOffsetTop) {
			kwLine = new Map();
			_tableKwList.push(kwLine);
			h = eleOffsetTop;
		}

		// 需要判断去重复 一行只添加一个相同的关键字
		var obj = kwLine.get($(this).text());

		if (obj == null) {
			kwLine.put($(this).text(), {
				"txt" : $(this).text(),
				"color" : $(this).css("color"),
				"id" : $(this).attr("id"),
				"top" : eleOffsetTop,
				"left" : eleOffsetLeft
			});
		}

	});

	// alert(_tableKwList);
	// 最少的TR数
	var trNum = 120;

	if (_tableKwList.length == 0) {

		for ( var i = 0; i < trNum; i++) {
			$("#highlightTable").append("<tr><td></td><td></td><td></td><td></td><td></td></tr>");
		}
	} else {

		for ( var i = 0; i < _tableKwList.length; i++) {
			var maps = _tableKwList[i];
			var _trid = "_tableKwTr" + i;
			$("#highlightTable").append("<tr id='" + _trid + "'></tr>");

			// 需要根据color来设置颜色 每一列的颜色相同
			for ( var c = 0; c < color.length; c++) {

				var b = false;
				var keySet = maps.keySet();

				// alert(color[c] + "-------------------");

				for ( var n = 0; n < keySet.length; n++) {

					var key = keySet[n];
					var map = maps.get(key);

					// alert((rgb2hex(map.color) + "").toUpperCase());

					if ((rgb2hex(map.color) + "").toUpperCase() == (color[c] + "").toUpperCase()) {
						$("#" + _trid).append(
								'<td onclick="animateTO(\'' + map.id + '\', this);" v="' + map.id + '" title="' + map.txt + '" class="cursorPointer" style="background-color: ' + map.color
										+ ';"></td>');
						b = true;
						break;

					}

				}

				if (!b) {
					$("#" + _trid).append('<td></td>');
				}

			}

			// 下面是不排序颜色的
			// var keySet = maps.keySet();
			// for ( var n = 0; n < keySet.length; n++) {
			//
			// var key = keySet[n];
			// var map = maps.get(key);
			// $("#" + _trid).append(
			// '<td onclick="animateTO(\'' + map.id + '\', this);" v="' + map.id
			// + '" title="' + map.txt + '" class="cursorPointer"
			// style="background-color: ' + map.color + ';"></td>');
			//
			// }
			//
			// for ( var n = 0; n < 5 - keySet.length; n++) {
			//
			// $("#" + _trid).append('<td></td>');
			//
			// }

		}

		if (_tableKwList.length < trNum) {

			for ( var i = 0; i < trNum - _tableKwList.length; i++) {
				$("#highlightTable").append("<tr><td></td><td></td><td></td><td></td><td></td></tr>");
			}
		}

	}

}

var kwInit = false;
// 设置关键词
function setKws() {

	// 关键字
	if (_kws == null || _kws == "") {
		_kws = ';;;;;;;';
	}

	// 默认五个关键字
	var kwList = _kws.split(";");

	var length = 5;
	if (kwList.length < 5) {
		length = kwList.length;
	}

	$("#highLightKeys").empty();
	for ( var i = 0; i < length; i++) {

		if (kwList[i] != null && kwList[i] != "") {

			var html = '<div class="displayInline borderD3Radius2 ver_alignMid h2020Center marginLeft15" style="width: 110px;"><div class="displayInline h100Full ver_alignMid"><div class="compareColor marginLeft6" style="width: 6px; height: 6px; background-color: '
					+ color[i]
					+ ';"></div></div><div class="displayInline shenglue marginLeft5px" style="width: 70px">'
					+ kwList[i]
					+ '</div><div class="tabDelete tabDeleteStyle floatRight w20H20px ver_alignMid cursorPointer" style=""></div></div>';

			$("#highLightKeys").append(html);

			if (!kwInit) {
				$("#highlightNormal" + i).val(kwList[i]);
				$("#highlightNormalBg" + i).css({
					"background-color" : color[i]
				});

				$(".highlightUserBg" + i).css({
					"background-color" : color[i]
				});
			}

		}

		_kwList.push(kwList[i]);

	}

	kwInit = true;

}

function subComment(obj) {

	var id = $(obj).attr("v");

	$("#_commentID").val(id);
	$("#subCommentForm").show();

	$("#subCommentForm" + id).append($("#subCommentForm"));

}

function buildCommentStar() {

	$(".commentStarPut").each(function() {

		var star = $(this).attr("v");

		if (star == null || star == "" || star == "0") {

			for ( var i = 0; i < 5; i++) {
				$(this).append('<div class="GreyStar floatLeft marginTop12"></div>');
			}
		} else {

			for ( var i = 0; i < (star - 0); i++) {

				$(this).append('<div class="OrangeStar floatLeft marginTop12"></div>');

			}

			for ( var i = 0; i < (5 - star); i++) {
				$(this).append('<div class="GreyStar floatLeft marginTop12"></div>');
			}

		}

	});

	// 加载子评论

	var subComment = $.fz_common.getXmlNodeValues(mGrid_gridComment_obj.recordData, "context>SubComment");

	$(subComment)
			.each(
					function() {

						var COMMENTID = $(this).children("COMMENTID").text();
						var OPERATERID = $(this).children("OPERATERID").text();

						var OPERATERNAME = $(this).children("OPERATERNAME").text();
						var OPERATIONTIME = $(this).children("OPERATIONTIME").text();
						var COMMENT = $(this).children("COMMENT").text();
						var ID = $(this).children("ID").text();
						var HEADIMG = $(this).children("HEADIMG").text();

						$("#subCommentData" + COMMENTID)
								.append(
										"<div style=\"padding:5px; margin:10px; border: 1px #CCC dotted;\"><div class=\"floatLeft divImg headImg marginLeft10\" style=\"background:none;\"><img style=\"width:40px; height:38px; border-radius:30px; box-shadow:1px 1px 1px 1px #ccc; -moz-box-shadow:1px 1px 1px 1px #ccc; -webkit-box-shadow:1px 1px 1px 1px #ccc; margin-right:8px;\" class=\"ver_alignMid\" src=\""
												+ HEADIMG
												+ "\"></div><p><span style='color: #0085d0'>"
												+ OPERATERNAME
												+ "</span> <span style='color: #666666;font-weight: bold; margin-right:10px;'>"
												+ _dateFilter(OPERATIONTIME) + "</span></p><p>" + COMMENT + "</p></div>");

					});

}

// 翻译功能
var _selecterLate = "";

function getSelecterLate() {

	var selecterLate;

	try {
		selecterLate = window.getSelection();
	} catch (err) {
		var selecter = document.selection.createRange();
		selecterLate = selecter.text;
	}
	_selecterLate = selecterLate + "";
	return _selecterLate;
}

function dropdownMenuShow(e, status) {

	if (!status) {
		$("#onclickLabel").parent().addClass("displayNone");
	}
	var selecterLate = getSelecterLate();

	if (selecterLate == null || selecterLate == "") {
		$("#dropdownMenu").hide();
		$(".translation").addClass("disPlayNone");
		return false;
	}

	$('#dropdownMenu').css({
		top : e.pageY - 35 - $('#dropdownMenu').height(),
		left : e.pageX - 20
	});

	$("#dropdownMenu").show();

	// 在判断一次 防止点击后出现没有内容还未关闭的情况

	setTimeout(function() {
		var selecterLate = getSelecterLate();

		if (selecterLate == null || selecterLate == "") {
			$("#dropdownMenu").hide();
			$(".translation").addClass("disPlayNone");
			return false;
		}
	}, 100);

	return false;
}

function mousWindowShow(e, win) {

	if (win == null || win == "") {
		return;
	}

	$(win).css({
		top : e.pageY + 14,
		left : e.pageX - 144
	});

	// $.ajax({
	// type: "POST",
	// dataType: "xml",
	// url:
	// });

	$(win).show();
	$(win).css("display", "block");

	return false;
}

function labelWindowShow(e) {
	var selecterLate = getSelecterLate();
	if (selecterLate == "" || selecterLate == null) {
		$(".labelWindow").hide();
		return false;
	} else if (selecterLate.length > 50) {
		alert("标注对象的长度不能超过50个字");
		return false;
	}

	$(".labelWindow").css({
		top : e.pageY + 14,
		left : e.pageX - 144
	});

	$("#labelObject").text(selecterLate);
	$(".labelWindow").show();
	$(".labelWindow").css("display", "block");

	// 在判断一次 防止点击后出现没有内容还未关闭的情况
	setTimeout(function() {
		var selecterLate = getSelecterLate();

		if (selecterLate == null || selecterLate == "") {
			$(".labelWindow").hide();
			return false;
		}
	}, 100);

	return false;
}

function labelWindowShow1(e, selecterLate) {
	if (selecterLate == "" || selecterLate == null) {
		$(".labelWindow").hide();
		return false;
	} else if (selecterLate.length > 50) {
		alert("标注对象的长度不能超过50个字");
		return false;
	}
	var pointX = e.pageX;
	var bodyWidth = parseInt($(document.body).width());
	var labelWidth = parseInt($(".labelWindow").css("width"));
	if (pointX + labelWidth > bodyWidth) {
		var width = pointX + labelWidth - bodyWidth;
		$(".labelWindow").css({
			top : e.pageY + 14,
			left : e.pageX - 144 - width
		});
	} else {

		$(".labelWindow").css({
			top : e.pageY + 14,
			left : e.pageX - 144
		});
	}

	$("#labelObject").text(selecterLate);
	$(".labelWindow").show();
	$(".labelWindow").css("display", "block");

	return false;
}

function dotranslation(url, data, lang) {

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : url,
		data : encodeURI(data),
		success : function(data) {
			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {
				var record = $.fz_common.getXmlNodeValues(data, "context>record>" + lang);
				var translation = record.text();
				$("#translationOld").val(_selecterLate);
				$("#translationTxt").val($.trim(translation));
				$("#translationTxt").hideLoading();
			} else {
				alert("翻译发生错误 ， 请稍后重试");
				$("#translationTxt").hideLoading();
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			alert("翻译发生错误 ， 请稍后重试");
			$("#translationTxt").hideLoading();
		}
	});

}

function dotranslation2(url, data, lang) {

	$("#translationTxt").showLoading({});
	$("#translationTxt").val("");

	$.ajax({
		type : "POST",
		dataType : "xml",
		url : url,
		data : encodeURI(data),
		success : function(data) {
			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {
				var record = $.fz_common.getXmlNodeValues(data, "context>record>" + lang);
				var translation = record.text();
				$("#translationTxt").val($.trim(translation));
				$("#translationTxt").hideLoading();
			} else {
				alert("翻译发生错误 ， 请稍后重试");
				$("#translationTxt").hideLoading();
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			alert("翻译发生错误 ， 请稍后重试");
			$("#translationTxt").hideLoading();
		}

	});

}

// 翻译交易调用
function translation() {

	var srcLan = translationCNToEN($("#languageSelect1").text());
	var tgtLan = translationCNToEN($("#languageSelect2").text());

	var srcSen = $("#translationOld").val();

	if (srcSen == null || srcSen == "") {
		alert("没有需要翻译的内容");
		return;
	} else if (getBt(srcSen) > 10000) {
		alert("您选择的内容过长超过了10000字节");
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
				alert("翻译发生错误 ， 请稍后重试");
				$("#translationTxt").hideLoading();
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			alert("翻译发生错误 ， 请稍后重试!");
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

function switchSelectCommon(obj) {

	// 通用方法 隐藏DIV 并且带值到父级
	var div_selectUl = $(obj).parent().parent();
	$(div_selectUl).hide();
	$($(div_selectUl).prev().children().get(0)).css("background-image", "url('/" + rootPath + "module/di/img/patent/table/arrowBlueDown.png')").html(($(obj).text())).attr("v", $(obj).attr("value"));
}

// 滑动到位置 高亮用
function animateTO(v, obj) {

	var h = $(".patentHeadFixed").height();

	$('html,body').animate({
		scrollTop : ($('#' + v).offset().top - h - 10)
	});

	// alert($(obj).offset().top);
	// alert($("#showHighLight").offset().top);

	// 比较当前导航锚点距离下面高亮按钮的距离 如果小于50 已经到了最下面的地图锚点 则判断是否需要往上移动
	var offsetTop = ($("#showHighLight").offset().top - $(obj).offset().top);
	if (offsetTop < 80) {
		// 向上移动100的距离

		var highlightTableTop = parseInt($('#highlightTable').css("top"));

		$('#highlightTable').animate({
			top : (highlightTableTop - 80)
		}, 1000, function() {
		});
	}

	// 点击上面有超出的话向下移动
	// 相对于父窗口的高度
	var top = parseInt($(obj).parent().position().top);
	// 父窗口的偏移量
	var pTop = parseInt($('#highlightTable').css("top"));

	if ((top - 0 + pTop) < 50 && pTop < 0) {

		pTop = pTop + 100;
		if (pTop > 0) {
			pTop = 0;
		}

		$('#highlightTable').animate({
			top : (pTop)
		}, 1000, function() {
		});

	}
}

// 获取元素的纵坐标（相对于窗口）
function getTop(e) {

	var scrollTop = 0;
	// if (document.documentElement && document.documentElement.scrollTop) {
	// scrollTop = document.documentElement.scrollTop;
	// } else if (document.body) {
	// scrollTop = document.body.scrollTop;
	// }

	if ($("#" + e).offset() == null) {
		return 0;
	}

	// 滚动条到顶部的垂直高度
	scrollTop = ($(document).scrollTop());
	// 当前元素到顶部的距离
	var eleOffsetTop = ($("#" + e).offset().top);

	return eleOffsetTop - scrollTop;

}

function _dateFilter(input) {

	if (input != null && input != "") {
		// 20150408104240
		return input.substr(0, 4) + "." + input.substr(4, 2) + "." + input.substr(6, 2) + " " + input.substr(8, 2) + ":" + input.substr(10, 2);
	} else {
		return "";
	}

}

function _dateFilterDay(input) {
	if (input != null && input != "" && input.length >= 8) {

		// 20150408104240

		return input.substr(0, 4) + "." + input.substr(4, 2) + "." + input.substr(6, 2);
	} else {
		return "";
	}

}

function _dateFilterDayDian(input) {
	if (input != null && input != "" && input.length >= 8) {

		// 20150408104240
		return input.substr(0, 4) + "." + input.substr(4, 2) + "." + input.substr(6, 2);
	} else {
		return "";
	}

}



function _dataFilterDayReplace(input) {
	var regS = new RegExp("\\-", "g");
	input = input.replace(regS, ".");
	return input;
}

function _dataFilterDayXian(input) {
	if (input != null && input != "" && input.length >= 0) {

		return input.substr(0, 4) + "." + input.substr(5, 2) + "." + input.substr(8, 2);
	}
}

function _dataFilterDayKong(input) {
	if (input != null && input != "" && input.length >= 0) {

		// 2015/04/08

		return input.substr(1, 4) + "." + input.substr(6, 2) + "." + input.substr(9, 2);
	}
}

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// 用于滚动标题标红
function anchorRed() {

	$(".anchorEle").each(function() {

		var _id = $(this).attr("id");
		var _top = getTop(_id);

		var _h = $(".patentHeadFixed").height();

		if ((_top - 0) == 0) {
			return true;
		}

		if (_top < (parseInt(_h) + 20)) {

			$('.keywordUl li').each(function() {

				var v = $(this).attr("v");

				if (_id == v) {
					$(this).css("color", "#6478b3");
				} else {
					$(this).css("color", "rgb(102, 102, 102)");
				}
			});

			// return false;

		}

	});
}

// 细览相关数据Table展开收起
function expandTable(type, selectName) {
	var tableName = "#table_" + type;
	var noExpand = false;
	for ( var i = 1; i < $(tableName + " tr").length; i++) {
		if (i > 5) {
			$(".tr" + type + "_" + i).hide();
			noExpand = true;
		}
	}
	if (noExpand) {
		var m_tr = document.createElement("tr");
		var m_td = document.createElement("p");
		$(m_tr).addClass(selectName);
		$(m_td).text("展开更多666");
		$(m_tr).append(m_td);
		//$(tableName).append(m_tr);
	}
	$("." + selectName).click(function() {
		if ($(this).children("p").text() == "展开更多") {
			$(this).parent().children(tableName + " tr").show();
			$(this).children("p").text("收起");
		} else {
			for ( var i = 1; i < $(tableName + " tr").length; i++) {
				if (i > 5) {
					$(".tr" + type + "_" + i).hide();
				}
			}
			$(this).children("p").text("展开更多");
		}
	});
}

var angularApp;
if (typeof (angular) != "undefined" && angular != null) {
	angularApp = angular.module('patentApp', []);
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

	angularApp.filter('trimInt', function() {
		return function(input) {
			if (input == null || input == "") {
				return 0;
			} else {
				return input;
			}
		}
	});

	angularApp.filter('filterName', function() {
		return function(input) {
			if (input == null || input == "") {
				return "匿名用户 ";
			} else {
				return input;
			}
		}
	});
}

function loadLabel() {
	$('.num0').remove();
	$('.num1').remove();
	$('#_chooseInxItem').children().remove();

	var project_id = $("#project_id").val();
	var pno = $("#_PNO").val();
	var pid = $("#_PID").val();
	$.ajax({
		type : "POST",
		dataType : "xml",
		url : "/txnQueryAllLabel.ajax",
		data : "select-key:project_id=" + project_id + "&select-key:pno=" + pno + "&select-key:pid=" + pid,
		success : function(data) {
			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {
				var inx = $.fz_common.getXmlNodeValues(data, "context>inx");
				if (!inx) {
					alert('没有取到数据');
					return false;
				}
				if (inx != null) {
					labelShow(inx);// 当前默认选中的标引项与标引词如果没有就不显示
					allLabelShow(inx);// 显示所有标引项
					$("#_InxTable").show();
					$("#_changeInxTable").hide();
				}
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			alert("提价评论发生错误，请稍后重试。");

		}
	});

}

function allLabelShow(inx) {
	var htmlStr = "";
	for ( var i = 1; i <= 8; i++) {

		var inxItemIndex = i;

		var inxItem = inx.find("inx_item_" + i).text(); // 标引项
		var inxWord = inx.find("inx_word_" + i).text(); // 标引词
		if (inxItem) {

			$('#_chooseInxItem').append("<option>" + inxItem + "</option>");

			if (i % 2 == 0) {
				htmlStr += "<tr class='num0'>";
			} else {
				htmlStr += "<tr class='num1 tableChooseBlue'>";
			}
			// 项
			htmlStr += "<td  class='_inxItem fontWeightBold1' v_item_id='" + inxItemIndex + "' v_item='" + inxItem + "' width='120px' style=' padding-top:5px;' align='right'>" + inxItem + "：</td>";
			// 词
			if (inxWord) {
				htmlStr += "<td colspan='3' align='left' class='_inxWord fontWeightBold1' v_pos_name='" + inxItem + "' style=' padding-top:5px;'>";// line-height:
				// 30px;
				var inxWordArr = inxWord.split(',');

				if (inxWordArr && inxWordArr.length > 0) {
					for ( var j = 0; j < inxWordArr.length; j++) {
						var inxWordIndex = j;
						var word = inxWordArr[j];
						// 标引词
						if (word) {

							var trueWord = word.split(':')[0];
							var isSelected = word.split(':')[1];
							// alert(isSelected);

							if (isSelected && isSelected === "true") {
								htmlStr += "<div style='display: inline-block; width:200px;float:left;'> " + "<input checked name='clk' class='_inxWord' v_item_id='" + inxItemIndex + "'  v_word_id='"
										+ inxWordIndex + "' style='display: inline-block;color:red;margin-top: -5px;' type='checkbox' v_word='" + trueWord + "' onclick='setColor(this);'/>"
										+ "<label style='display:inline-block;color:red;' >" + trueWord + "</label></div>";

							} else {
								htmlStr += "<div style='display: inline-block;width:200px;float:left;'> " + "<input class='_inxWord' name='clk' v_item_id='" + inxItemIndex + "'  v_item_name='"
										+ inxItem + "'   v_word_id='" + inxWordIndex + "' style='display: inline-block;margin-top: -5px' type='checkbox' v_word='" + trueWord
										+ "' onclick='setColor(this);' />" + "<label style='display:inline-block' >" + trueWord + "</label></div>";
							}
						}
					}
				}
				htmlStr += "</td>";
			}
			htmlStr += "</tr>";
		}
	}
	$('#_labelbtns').before($(htmlStr));
}

function labelShow(inx) {
	var htmlStr = "";

	for ( var i = 1; i <= 8; i++) {
		var bn = true;
		var inxItemIndex = i;

		var inxItem = inx.find("inx_item_" + i).text(); // 标引项
		var inxWord = inx.find("inx_word_" + i).text(); // 标引词
		if (inxItem) {

			if (inxWord) {
				// 项

				var inxWordArr = inxWord.split(',');
				if (inxWordArr && inxWordArr.length > 0) {
					for ( var j = 0; j < inxWordArr.length; j++) {
						var inxWordIndex = j;
						var word = inxWordArr[j];
						// 标引词
						if (word) {

							var trueWord = word.split(':')[0];
							var isSelected = word.split(':')[1];
							// alert(isSelected);

							if (isSelected && isSelected === "true") {
								if (bn) {
									bn = false;

									htmlStr += "<tr class='num0 tableChooseBlue'>";
									htmlStr += "<td  class=' fontWeightBold1'  v_item='" + inxItem + "' width='120px' style=' padding-top:5px;' align='right'>" + inxItem + "：</td>";
									htmlStr += "<td colspan='3' align='left' class='_inxWord fontWeightBold1' v_pos_name='" + inxItem + "' style=' padding-top:5px;' >";// line-height:
									// 30px;
								}
								htmlStr += "<div style='display: inline-block; width:200px;float:left;'> " + "<label style='display:inline-block;' >" + trueWord + "</label></div>";

							}
						}
					}
					htmlStr += "</td>";
					htmlStr += "</tr>";
				}

			}

		}
	}
	$('#_labelbtn').before($(htmlStr));
}

function setColor(obj) {
	if ($(obj).prop("checked")) {

		$(obj).next().css("color", "red");
	} else {
		$(obj).next().css("color", "");

	}
}

function isShowLabel(project_id) {

	if (project_id) {
		loadLabel();
		$("#anchor10").addClass("anchorEle");
		$("#_labelContent").show();
		$("#_labelLi").show();
		$("#_labelLi").removeClass("displayNone");
	}

}

function getBt(str) {

	var bytesCount = 0;
	for ( var i = 0; i < str.length; i++) {
		var c = str.charAt(i);
		if (/^[\u0000-\u00ff]$/.test(c)) // 匹配双字节
		{
			bytesCount += 1;
		} else {
			bytesCount += 3;
		}
	}

	return bytesCount;
}
function ulHide() {
	$(".compareSelect_ul").hide();
	$(".compareSelect").css("background-image", "url(/" + rootPath + "module/di/img/patent/table/arrowBlueDown.png)");
	$(".selLanguage_ul").hide();
	$(".selLanguage").css("background-image", "url(/" + rootPath + "module/di/img/patent/table/arrowBlueDown.png)");
	$(".englishSelect_ul").hide();
	$(".englishSelectDiv").css("background-image", "url(/" + rootPath + "module/di/img/patent/table/arrowBlueDown.png)")
}

function getDoubleTxnCode(txnCode) {
	if (txnCode == "TradeMarkDetail" || txnCode == "UsTradeMarkDetail" || txnCode == "MdTradeMarkDetail") {
		return "txnTrademarkDoubleComColumn+TMID";
	} else if (txnCode == "StandardDetail") {
		return "txnStandardDoubleCompare+STN";
	} else if (txnCode == "PeriodicalDetail") {
		return "txnPeriodicalDoubleCompare+PNO";
	} else if (txnCode == "DecisionDetail") {
		return "txnDecisionDoubleCompare+RIDN";
	} else if (txnCode == "RefereeDetail") {
		return "txnRefereeDoubleCompare+CAN";
	} else if (txnCode == "LawsDetail") {
		return "txnLawsDoubleCompare+LAN";
	}
}

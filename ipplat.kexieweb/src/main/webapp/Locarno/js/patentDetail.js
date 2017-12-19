var highlightDiv = [ "#__abshtml", "#__clahtml", "#__deshtml", "#__abs3html" ];

$(document)
		.ready(
				function() {

					$(document).click(function() {
						ulHide();
					});

					// 引证专利与被引证专利
					{
						if ($(".cit").length == 0) {
							$(".citList1").addClass("displayNone");
							$(".citList2").addClass("displayNone");
						}

						if ($(".citByRefdt").length == 0) {
							$(".citByRefdtList1").addClass("displayNone");
							$(".citByRefdtList2").addClass("displayNone");
						}

						if ($(".cit").length == 0 && $(".citByRefdt").length == 0) {
							$(".allCitAndcitByRefd1").addClass("displayNone");
							$(".allCitAndcitByRefd2").addClass("displayNone");
						}
					}

					// 关键字 检索
					{
						// 关键字
						if (typeof (_kws) != "undefined" && _kws != null && _kws != "") {

							var kwList = _kws.split(";");

							var n = 15;
							if (kwList.length < n) {
								n = kwList.length;
							}
							var r = 0;
							for ( var i = 0; i < n; i++) {
								if ((i % 5) == 0) {
									$("#__kwBody").append("<tr style='height: 30px;' id='kwtr" + i + "'></tr>");
									if (i != 0) {
										r++
									}
								}

								$($("#__kwBody tr")[r])
										.append(
												'<td align="left" style="vertical-align: middle; padding-left:20px;"><span v="'
														+ kwList[i]
														+ '" class="checkBoxStyle checkBoxBg marginLeft10 marginRight10 ver_alignMid " onClick="checkboxClick(this)"></span><span style=" overflow:hidden; white-space:nowrap; width: 120px; " class="marginRight10 ver_alignMid marginTop10">'
														+ kwList[i] + '</span></td>');

							}

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
					}

					{

						// 中英文
						$(".englishSelectDiv").click(function() {

							ulHide();
							$(this).next().show();
							$(this).css("background-image", "url(/" + rootPath + "../images//arrowbup.png)");
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
								window.location.href = "/" + rootPath + "txnPatentCNDetail.do?select-key:PID=" + pid + "&select-key:PNO=" + pno + "&select-key:lang=cn";
							}
							if (v == "normal" && txncode != "") {
								window.location.href = "/" + rootPath + "txnPatentDetail.do?select-key:PID=" + pid + "&select-key:PNO=" + pno + "&select-key:lang=normal";
							}
							if (v == "en" && txncode != "") {
								window.location.href = "/" + rootPath + "txnPatentENDetail.do?select-key:PID=" + pid + "&select-key:PNO=" + pno + "&select-key:lang=en";
							}

						});
						$(".englishSelect_ul li").mouseover(function() {
							$(this).siblings().removeClass("select_item");
							$(this).addClass("select_item");
						});

					}

					// 图片滚动列表
					{
						if (typeof (_imgUrlD) != "undefined" && _imgUrlD != null && _imgUrlD != "") {
							// 初始化图片列表
							var _imgUrlList = _imgUrlD.split("|");
							var _imgTitleList = _imgTitleD.split("|");
							for ( var i = 0; i < _imgUrlList.length; i++) {

								if (_imgUrlList[i] == null || _imgUrlList[i] == "") {
									continue;
								}
								$(".imgListDoubleWrap").append(
										'<a href="' + _imgUrlList[i] + '" target="_blank" title="' + _imgTitleList[i]
												+ '" style=" padding:10px; border: 1px #CCCCCC solid; float:left; margin:5px; "><img  style="width:140px; height:140px;" src="' + _imgUrlList[i]
												+ '" border="0" ><p style="text-align:center; line-height:normal; margin-top:10px;">' + _imgTitleList[i] + '</p></a>');

							}
						} else {

							$(".imgListDoubleWrap").text("暂无图片");

						}
						
						if (typeof (_imgUrlD1) != "undefined" && _imgUrlD1 != null && _imgUrlD1 != "") {
							// 初始化图片列表
							var _imgUrlList = _imgUrlD1.split("|");
							var _imgTitleList = _imgTitleD1.split("|");

							for ( var i = 0; i < _imgUrlList.length; i++) {

								if (_imgUrlList[i] == null || _imgUrlList[i] == "") {
									continue;
								}

								$(".imgListDoubleWrap1").append(
										'<a href="' + _imgUrlList[i] + '" target="_blank" title="' + _imgTitleList[i]
												+ '" style=" padding:10px; border: 1px #CCCCCC solid; float:left; margin:5px; "><img  style="width:140px; height:140px;" src="' + _imgUrlList[i]
												+ '" border="0" ><p style="text-align:center; line-height:normal; margin-top:10px;">' + _imgTitleList[i] + '</p></a>');

							}
						} else {

							$(".imgListDoubleWrap1").text("暂无图片");

						}

						if (typeof (_imgUrl) != "undefined" && _imgUrl != null && _imgUrl != "") {

							// 初始化图片列表
							var _imgUrlList = _imgUrl.split("|");
							var _imgTitleList = _imgTitle.split("|");
							var imageindex = 0;
							var liWidth = 140;

							var count = 0;
							for ( var i = 0; i < _imgUrlList.length; i++) {

								if (_imgUrlList[i] == null || _imgUrlList[i] == "") {
									continue;
								}

								var _class = "noborder";
								if (count == 0) {
									$("#_zoompic").attr("src", _imgUrlList[i]);
									$("#_zoompiclink").attr("href", _imgUrlList[i]);
									_class = "current";
								}

								var _n = _imgTitleList[i];
								if (_n == null || _n == "") {
									_n = "无标题";
								}

								$("#_imagelist").append(
										'<li class="' + _class + '"><a href="' + _imgUrlList[i] + '" target="_blank"><div style="width: 132px; height: 131px"><img title="' + _n + '" src="' + _imgUrlList[i]
												+ '" style=" height: 100%" /></div></a></li>');

								count++;

							}

							// 140是每个li的宽
							$('#_imagelist').width(liWidth * count);

							if (count == 0) {
								$("#_imgListWrap").html('<h2 style=" text-align:center; width:100%; font-size:16px;">暂无图片列表</h2>');
							}

							function setPatentImg() {

								$("#_zoompic").hide();
								$("#_zoompic").attr("src", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));

								var _w = ($("#_zoompic").width());
								var _h = ($("#_zoompic").height());

								if (_w > _h) {
									$("#_zoompic").width(422);
									$("#_zoompic").height("auto");


								}
								if (_h > _w || _h == _w) {

									$("#_zoompic").width("auto");
									$("#_zoompic").height(382);


								}

								$("#_zoompic").show();

							}

							$('#previous').click(function() {

								imageindex--;

								if (imageindex < 0) {
									imageindex = 0;
									$.fz_common.alert("提示", "这已经是第一张图片了");
									return;
								}

								if (imageindex >= $('.slider ul li').length) {
									imageindex = ($('.slider ul li').length - 1);
									return;
								}

								// $(".zoompic img").attr("src", "");

								setPatentImg();

								$(".zoombox a").attr("href", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));
								$("#thumbnail li.current").addClass("noborder");
								$("#thumbnail li.current").removeClass("current");
								$($('.imagelist li')[imageindex]).removeClass("noborder");
								$($('.imagelist li')[imageindex]).addClass("current");

								setImgListLeft();

							});

							$('#next').click(function() {

								imageindex++;

								if (imageindex < 0) {
									imageindex = 0;
									return;
								}

								if (imageindex >= $('.slider ul li').length) {
									imageindex = ($('.slider ul li').length - 1);
									$.fz_common.alert("提示", "这已经是最后一张图片了");
									return;
								}

								// $(".zoompic img").attr("src", "");

								setPatentImg();

								$(".zoombox a").attr("href", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));
								$("#thumbnail li.current").addClass("noborder");
								$("#thumbnail li.current").removeClass("current");
								$($('.imagelist li')[imageindex]).removeClass("noborder");
								$($('.imagelist li')[imageindex]).addClass("current");

								setImgListLeft();

							});

							// 每次点击切换图片后设置图片列表的偏移值
							function setImgListLeft() {

								var i = $($('#_imagelist .current')[0]).index();
								$("#_imagelist").css("left", (($('#_imagelist li').width() * i * -1) + 'px'));
							}

							// 点击小图切换大图
							$("#thumbnail li a").click(function() {

								$(".zoombox a").attr("href", $(this).attr("href"));
								$("#thumbnail li.current").addClass("noborder");
								$("#thumbnail li.current").removeClass("current");
								$(this).parents("li").removeClass("noborder");
								$(this).parents("li").addClass("current");
								imageindex = $(this).parents("li").index();

								setPatentImg();
								return false;
							});
							
							//点击第一个防止第一张图片过大撑开
							$("#thumbnail li:first-child a").click();

							var num = parseInt($('#_imagelist').width()) - 0;
							var _imgOnclick = false;

							$('#btn-right').click(function() {

								if (_imgOnclick) {
									return;
								}

								var l = parseInt($('#_imagelist').css("left")) * -1;

								if ((num - liWidth * 3) < l) {
									return false;
								}

								_imgOnclick = true;
								$('.slider ul').animate({
									left : '-=' + $('.slider ul li').width() + 'px'
								}, 'fast', function() {
									_imgOnclick = false;
								});
							});

							$('#btn-left').click(function() {

								if (_imgOnclick) {
									return;
								}

								if (parseInt($('#_imagelist').css("left")) >= 0) {
									$('#_imagelist').css("left", "0");
									return;
								}

								_imgOnclick = true;

								$('.slider ul').animate({
									left : '+=' + $('.slider ul li').width() + 'px'
								}, 'fast', function() {
									_imgOnclick = false;
								});
							});

						} else {
							$("#_imgListWrap").html('<h2 style=" text-align:center; width:100%; font-size:16px;">暂无图片列表</h2>');
						}

					}

					// AJAX 其它内容
					{

						function patentDetailHTML(url, id) {

							// $("#" + id).css("min-height", "260px");
							// $("#" + id).showLoading({});

							$.ajax({
								type : "GET",
								dataType : "html",
								// url : "/" + rootPath +
								// "txnPatentDetailHTML.do",
								// data : "select-key:url=" +
								// encodeURIComponent(url),
								url : url,
								success : function(data) {

									if (($(data).text()) == null || ($(data).text()) == "" || ($(data).text()) == "暂无内容") {

										$("#" + id).css("min-height", "10px");
										$("#" + id).html("暂无内容");
										// $("#" + id).hideLoading();
										return;
									}

									var arrUrl = url.split("/");
									var strPage = arrUrl[arrUrl.length - 1];
									strPage = url.substr(0, url.indexOf(strPage));
									strPage = strPage.replace("10.10.1.5", "image.zldsj.com");

									var _data = $(data);

									// 替换所有地址
									var hasImg = false;
									// 同级
									_data.each(function() {

										var nodeName = $(this).context.nodeName + "";

										if (id == "__abshtml" && nodeName.toUpperCase() == "P") {
											$(this).css({
												"float" : "left",
												width : "75%"
											})
										}

										var src = $(this).attr("src");

										if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
											$(this).attr("src", strPage + src);

											// 设置高度
											if (id == "__abshtml") {
												$(this).width(180);
												$(this).height(160);
												$(this).css({
													border : "3px #EEE solid",
													padding : "5px",
													"margin-left" : "25px",
													"float" : "left"
												});
												hasImg = true;
											}

										}

									});

									// 子集
									_data.find("img").each(function() {
										var src = $(this).attr("src");
										var nodeName = $(this).context.nodeName + "";
										if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
											$(this).attr("src", strPage + src);
										}

									});

									$("#" + id).html(_data);

									if (id == "__abshtml" && !hasImg) {

										$("#__abshtml p").css({
											width : "95%"
										})

									}

									// 高亮
									for ( var i = 0; i < _kwList.length; i++) {

										if (_kwList[i] != null && _kwList[i] != "") {

											$("#" + id).highlight(_kwList[i], {
												id : "highlightTxt" + id,
												clear_last : false
											});
										}
									}

									// 高亮 如果打开了高亮则立即找色
									if (!$(".highLightShowDiv").hasClass("disPlayNone")) {

										doHighlightTxt("#" + id + " .highlightTxt");

									}

									// $("#" + id).hideLoading();

								},
								error : function(XMLHttpRequest, textStatus, errorThrown) {

									$("#" + id).css("min-height", "10px");
									$("#" + id).html("暂无内容");
									// $("#" + id).hideLoading();

								}
							});
						}

						// 使用懒加载
						// 距离顶部多少距离的时候开始加载
						var _h = 500;

						var loadingTxt = "正在加载......";

						if (txncode == "PatentDetail" || txncode == "PatentENDetail" || txncode == "PatentCNDetail") {

							$("#" + "__abshtml").html(loadingTxt);
							$("#" + "__clahtml").html(loadingTxt);
							$("#" + "__deshtml").html(loadingTxt);

							var abshtml = false;
							var clahtml = false;
							var deshtml = false;

							// 滚动条事件增加一个延迟 防止过多事件程序产生
							var timeout = false;
							var firstScroll = false;
							$(document).scroll(function() {

								if (!timeout && firstScroll) {
									return;
								}

								firstScroll = true;
								timeout = false;

								setTimeout(function() {

									timeout = true;

									// 判断标红
									anchorRed();

									if (!abshtml) {
										if (getTop("__abshtml") < _h) {
											abshtml = true;
											if (_abshtml != null && _abshtml != "") {
												patentDetailHTML(_abshtml, "__abshtml");
											} else {
												$("#" + "__abshtml").html("暂无内容");
											}
										}
									}

									if (!clahtml) {
										if (getTop("__clahtml") < _h) {
											clahtml = true;
											if (_clahtml != null && _clahtml != "") {
												patentDetailHTML(_clahtml, "__clahtml");
											} else {
												$("#" + "__clahtml").html("暂无内容");
											}
										}
									}

									if (!deshtml) {
										if (getTop("__deshtml") < _h) {
											deshtml = true;
											if (_deshtml != null && _deshtml != "") {
												patentDetailHTML(_deshtml, "__deshtml");
											} else {
												$("#" + "__deshtml").html("暂无内容");
											}
										}
									}

								}, 100);

							})

						}

						if (txncode == "PatentData") {

							var timeout = false;
							var firstScroll = false;
							$(document).scroll(function() {

								if (!timeout && firstScroll) {
									return;
								}

								firstScroll = true;
								timeout = false;

								setTimeout(function() {
									timeout = true;

									// 判断标红
									anchorRed();

								}, 100);

							})
						}

						// 双栏
						if (txncode == "PatentDoubleColumn") {

							$("#doubleColumnContentLeftCN").html($("#doubleColumnContentMain").html());
							$("#doubleColumnContentLeftEN").html($("#doubleColumnEnContentMain").html());

							$("#doubleColumnContentMidRightCN").html($("#doubleColumnContentMain").html());
							$("#doubleColumnContentMidRightEN").html($("#doubleColumnEnContentMain").html());

							// 关键字
							if (typeof (_kws) != "undefined" && _kws != null && _kws != "") {

								var kwList = _kws.split(";");

								var n = 15;
								if (kwList.length < 15) {
									n = kwList.length;
								}

								for ( var i = 0; i < n; i++) {

									if ((i % 3) == 0) {
										$(".__doubleKwBody").prepend("<tr style='height: 30px;'></tr>");
									}

									$(".__doubleKwBody")
											.each(
													function() {

														$($(this).children()[0])
																.append(
																		'<td align="left"><span v="'
																				+ kwList[i]
																				+ '" class="checkBoxStyle checkBoxBg marginLeft10 marginRight10 ver_alignMid " onClick="checkboxClick(this)"></span><span style=" overflow:hidden; white-space:nowrap; width: 120px; " class="marginRight10 ver_alignMid marginTop10">'
																				+ kwList[i] + '</span></td>');

													});

								}

								$(".doubleSerachKeyWords").click(function() {

									var ex = "";

									$(this).parent().parent().parent().parent().find(".checkBoxClickBg").each(function() {

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

							function patentDoubleDetailHTML(url, id) {

								$("." + id).css("min-height", "100px");

								$.ajax({
									type : "GET",
									dataType : "html",
									// url : "/" + rootPath +
									// "txnPatentDetailHTML.do",
									// data : "select-key:url=" +
									// encodeURIComponent(url),
									url : url,
									success : function(data) {

										if (($(data).text()) == null || ($(data).text()) == "" || ($(data).text()) == "暂无内容") {

											$("#" + id).css("min-height", "10px");
											$("#" + id).html("暂无内容");
											// $("#" + id).hideLoading();

											return;
										}

										var arrUrl = url.split("/");
										var strPage = arrUrl[arrUrl.length - 1];
										strPage = url.substr(0, url.indexOf(strPage));
										strPage = strPage.replace("10.10.1.5", "image.zldsj.com");

										var _data = $(data);

										// 替换所有地址

										// 同级
										_data.each(function() {
											var src = $(this).attr("src");
											var nodeName = $(this).context.nodeName + "";
											if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
												$(this).attr("src", strPage + src);
											}
										});

										// 子集
										_data.find("img").each(function() {
											var src = $(this).attr("src");
											var nodeName = $(this).context.nodeName + "";
											if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
												$(this).attr("src", strPage + src);
											}
										});

										$("." + id).html(_data);

									},
									error : function(XMLHttpRequest, textStatus, errorThrown) {

										$("." + id).css("min-height", "10px");

										$("." + id).html("暂无内容");

									}
								});
							}

							// 加载数据 和文献详情不同的是 这里都是class
							if (typeof (_abshtml) != "undefined" && _abshtml != null && _abshtml != "") {
								patentDoubleDetailHTML(_abshtml, "__abshtml");
							} else {
								$("." + "__abshtml").html("暂无内容");
							}

							if (typeof (_clahtml) != "undefined" && _clahtml != null && _clahtml != "") {
								patentDoubleDetailHTML(_clahtml, "__clahtml");
							} else {
								$("." + "__clahtml").html("暂无内容");
							}

							if (typeof (_deshtml) != "undefined" && _deshtml != null && _deshtml != "") {
								patentDoubleDetailHTML(_deshtml, "__deshtml");
							} else {
								$("." + "__deshtml").html("暂无内容");
							}

							if (typeof (_desehtml) != "undefined" && _desehtml != null && _desehtml != "") {
								patentDoubleDetailHTML(_desehtml, "__desehtml");
							} else {
								$("." + "__desehtml").html("暂无内容");
							}

							if (typeof (_absehtml) != "undefined" && _absehtml != null && _absehtml != "") {
								patentDoubleDetailHTML(_absehtml, "__absehtml");
							} else {
								$("." + "__absehtml").html("暂无内容");
							}

							if (typeof (_claehtml) != "undefined" && _claehtml != null && _claehtml != "") {
								patentDoubleDetailHTML(_claehtml, "__claehtml");
							} else {
								$("." + "__claehtml").html("暂无内容");
							}

							// 下拉列表
							$(".compareSelect").click(function() {
								ulHide();
								$(this).next().show();
								$(this).css("background-image", "url(/" + rootPath + "../images//arrowbup.png)");
								return false;
							});
							$(".compareSelect_ul li").click(
									function() {

										var m_nodeLi = $(this);
										m_nodeLi.parent().prev().text(m_nodeLi.text()).css("background-image", "url(/" + rootPath + "../images//arrowBlueDown.png)");
										m_nodeLi.parent().hide();

										var v = $(this).attr("v");
										var div = "#doubleColumnContentLeft";
										if (v.indexOf("r") > -1) {
											div = "#doubleColumnContentMidRight";
										}

										var _id = v.substr(1);

										var scrollTop = ($(div).scrollTop());
										$(div + ' .anchor' + _id).parent().next().removeClass("displayNone");
										$(div + ' .anchor' + _id).parent().children(".classificationIcon").css("background", "url(/" + rootPath + "module/di/img/patent/peruseView/ic1.png)").css(
												"background-repeat", "no-repeat");

										$(div).animate({
											scrollTop : (scrollTop + $(div + ' .anchor' + _id).offset().top - 293)
										}, 1000);

									});

							// 右边默认权利要求
							setTimeout(
									'$("#doubleColumnContentMidRight").animate({scrollTop : (($("#doubleColumnContentMidRight").scrollTop()) + $("#doubleColumnContentMidRight .anchor7").offset().top - 293)},1);',
									1000);

							$(".compareSelect_ul li").mouseover(function() {
								$(this).siblings().removeClass("select_item");
								$(this).addClass("select_item");
							});

							// 选择语种
							$(".selLanguage").click(function() {
								ulHide();
								$(this).next(".selLanguage_ul").show();
								$(this).css("background-image", "url(/" + rootPath + "../images//arrowbup.png)");
								return false;
							});
							// 选择语种点击具体一项
							$(".selLanguage_ul li").click(function() {
								var divNode = $(this).parent().prev();
								$(divNode).text($(this).text());
								$(divNode).css("background-image", "url(/" + rootPath + "../images//arrowBlueDown.png)");
								$(this).parent().hide();

								var v = $(this).attr("v");

								var v = $(this).attr("v");
								var div = "#doubleColumnContentLeft";
								if (v.indexOf("r") > -1) {
									div = "#doubleColumnContentMidRight";
								}
								var lang = v.substr(1);

								if (lang == "normal" || lang == "cn") {
									$(div + "CN").show();
									$(div + "EN").hide();
								} else {
									$(div + "CN").hide();
									$(div + "EN").show();
								}

								return false;
							});

						}

						// 统计
						if (txncode == "PatentDetail" || txncode == "PatentENDetail" || txncode == "PatentCNDetail") {
							$.ajax({
								type : "GET",
								dataType : "xml",
								url : "/txnPatentCount.ajax",
								data : "select-key:PID=" + encodeURIComponent($("#_PID").val()) + "&select-key:PNO=" + encodeURIComponent($("#_PNO").val()),
								success : function(data) {
									var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
									if (errCode == "000000") {

										var similar = $.fz_common.getXmlNodeValue(data, "context>PAT_NUM>NUM");
										var inc = $.fz_common.getXmlNodeValue(data, "context>patent>inc");
										var asc = $.fz_common.getXmlNodeValue(data, "context>patent>asc");
										var std = $.fz_common.getXmlNodeValue(data, "context>STD_NUM>NUM");// 标准
										var deccse = $.fz_common.getXmlNodeValue(data, "context>DECCSE_NUM>NUM");// 判例
										var tra = $.fz_common.getXmlNodeValue(data, "context>TRA_NUM>NUM");// 商标
										var ise = $.fz_common.getXmlNodeValue(data, "context>ISE_NUM>NUM");//期刊
										// var pat =
										// $.fz.common.getXmlNodeValue(data,"context>PAT_NUM>NUM");//专利
										$("#deccseCount").text(deccse);
										$("#stdCount").text(std);
										$("#traCount").text(tra);
										$("#iseCount").text(ise);
										// $("#patCount").text(pat);
										$("#similarCount span").text(similar);
										$("#incCount span").text(inc);
										$("#ascCount span").text(asc);

									} else {
									}
								},
								error : function(XMLHttpRequest, textStatus, errorThrown) {
								}
							});

							$("#patCount, #deccseCount, #traCount, #iseCount, #stdCount").click(
									function() {
										var num = parseInt($(this).text());
										if (num != 0) {
											_doTempPost("/" + rootPath + "txnPatentData.do", "select-key:PID=" + encodeURIComponent($("#_PID").val()) + "&select-key:PNO="
													+ encodeURIComponent($("#_PNO").val()));
										}
									});

						}

					}

					// 高亮
					{
						if (txncode == "PatentDetail" || txncode == "PatentENDetail" || txncode == "PatentDoubleColumn" || txncode == "PatentCNDetail") {

							if (_kws == null || _kws == "") {

								if (highlighted_word != "" && highlighted_word != "null" && highlighted_word != ",,,,;") {
									_kws = highlighted_word.replace(/(\,)/g, ";")
								}
							}
							setKws();
						}
					}

					//标题根据长度进行相应的字号缩小，默认单行长度120，两行显示，防止出现遮盖现象
					var tiLength = $("#patentTitle").text().length;
					var fontSizeOrg = parseFloat($("#patentTitle").css("font-size"));
					$("#patentTitle").css("font-size", tiLength / 120 <= 2 ? fontSizeOrg : fontSizeOrg - tiLength / 120);

					{
						//引证分析
						$(".buttonPatentAnalysis").click(function() {
							var _PID = $("#_PID").val();
							var _PNO = $("#_PNO").val();
							_doTempPost("/" + rootPath + "txnAnalyzeRedirect.do", "select-key:txncode=txnSR4_0_0&select-key:_PID=" + _PID + "&select-key:_PNO=" + _PNO, true)
						});

					}

					// 引证来源提示信息
					{
						$(".CISTitle").each(function() {
							$(this).attr("title", CISTitle[$(this).text()]);
						});

					}

				});

function ulHide() {
	$(".compareSelect_ul").hide();
	$(".compareSelect").css("background-image", "url(/" + rootPath + "../images//arrowBlueDown.png)");
	$(".selLanguage_ul").hide();
	$(".selLanguage").css("background-image", "url(/" + rootPath + "../images//arrowBlueDown.png)");
	$(".englishSelect_ul").hide();
	$(".englishSelectDiv").css("background-image", "url(/" + rootPath + "../images//arrowBlueDown.png)")
}

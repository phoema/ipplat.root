//预检索地址
var preQueryAction = "txnPatentPreQuery.ajax";

$(document).ready(
		function() {
			// 失去焦点
			$(document).click(function() {
				$("#fieldMorePages").addClass("displayNone");
				$(".BtnexpandMoreFinish").addClass("displayNone");

				// 初始化更多字段选择样式
				$("#fieldMorePages").hide();
				$("#fieldMorePages").find("td").each(function() {
					if ($(this).hasClass("fieldMorePagesTdSel")) {
						$(this).removeClass("fieldMorePagesTdSel");
					}
				});

				$("#addFieldPage").hide();

			});

			// 字段检索区域
			// 字段提示文字功能
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

				// 点击字段箭头 更改字段
				var imgPreNode = null;
				$(".AddfieldMorePages").click(function() {

					$(".andWindow").addClass("displayNone");
					$("#addFieldPage").find("td").removeClass("fieldMorePageBgGray");

					var position = $(this).offset(); // 第二个td
					$("#addFieldPage").css("left", position.left + "px");
					$("#addFieldPage").css("top", position.top + 43 + "px");
					$("#addFieldPage").removeClass("displayNone");
					$("#addFieldPage").show();

					var length = $("#tabOpenDay").find("tr").length;
					var m_str = "";
					var strarr = [];
					for ( var i = 0; i < length; i++) {
						var m_tr = $("#tabOpenDay").children().children().eq(i); // tr
						var m_td2 = m_tr.children().eq(1);
						if (!(m_tr.hasClass("displayNone"))) {
							m_str = m_td2.children().children().text();
							strarr.push(m_str);
						}
					}
					var list = $("#addFieldPage tr td");
					for ( var i = 0; i < list.length; i++) {

						if (!$(list[i]).hasClass("cursorPointer")) {
							$(list[i]).addClass("cursorPointer");
						}

						for ( var j = 0; j < strarr.length; j++) {
							if ($(list[i]).html() == strarr[j]) {
								// $(list[i]).addClass("fieldMorePageBgGray");
								// $(list[i]).removeClass("cursorPointer");
							}
						}
					}

					if ($(this)[0].previousElementSibling != null) {
						imgPreNode = $(this)[0].previousElementSibling;
					} else {
						imgPreNode = $(this)[0];
					}
					$(".fieldMorePagesTitle").each(function() {
						$(this).removeClass("cursorPointer");
						$(this).addClass("fieldMorePageBgGray");
					});

					return false;
				});

				// 替换字段点击
				$("#addFieldPage").find('td').click(function() {
					var thisObj = this;
					if ($(this).hasClass("fieldMorePageBgGray") || $(this).text() == null || $(this).text() == "") {
						return false;
					}
					fieldMorePagesClick(thisObj);
				});

				function fieldMorePagesClick(thisObj) {
					
					if (imgPreNode != null) {
						if (imgPreNode.children[0] != null) {
							imgPreNode.children[0].innerHTML = $(thisObj)[0].innerHTML; // div
							var m_tdInput = $(imgPreNode).parent().next(); // input
							// td
						} else {
							imgPreNode.innerHTML = $(thisObj)[0].innerHTML; // button
							var m_tdInput = $(imgPreNode).parent().parent().next(); // input
							// td
						}
						var expre = placeholder[$(thisObj)[0].innerHTML];
						if (expre == null) {
							expre = "";
						}
						var m_inputRequest = $(m_tdInput).children().children().get(1);
						
						$(m_inputRequest).children().children().attr("placeholder", expre);
						$(m_inputRequest).children().children().attr("title", $(thisObj)[0].innerHTML);
						
						if($(thisObj).parent().children(":first").hasClass("noSeaInput")){
							$(m_inputRequest).children().children().removeClass("seaInput");
							$(m_inputRequest).children().children().addClass("seaInput2");
						}else{
							$(m_inputRequest).children().children().removeClass("seaInput2");
							$(m_inputRequest).children().children().addClass("seaInput");
						}
						
						ckmTypeahead('.seaInput');

						// 增加或删除代码集弹出事件
						var t = $(thisObj)[0].innerHTML;
						var code = false;
						for ( var i = 0; i < codeSetFieldList.length; i++) {

							if (t == codeSetFieldList[i]) {
								code = true;
								break;
							}

						}

						if (code) {

							var plus = $(m_inputRequest).find("div.inputRequestplus");

							if (plus.length == 0) {
								$(m_inputRequest).find("div.codeSetButton").addClass("inputRequestplus");
								setCodeSetEvent($(m_inputRequest).find("div.inputRequestplus"));
							}

						} else {
							// 删除样式
							$(m_inputRequest).find("div.inputRequestplus").removeClass("inputRequestplus");
						}
						
						if($(thisObj).hasClass("textType")){
							$(imgPreNode).parent().parent().children(".exactSearch3").removeClass("exactSearch1").addClass("exactSearch2").addClass("exactSearch");
							$(imgPreNode).parent().parent().children(".exactSearch").unbind("click").click(function(){
								$(this).toggleClass("exactSearch1");
								$(this).toggleClass("exactSearch2");
							});
						}else{
							$(imgPreNode).parent().parent().children(".exactSearch3").removeClass("exactSearch2").removeClass("exactSearch1").removeClass("exactSearch");
						}

					}
					
					$("#fieldMorePages").hide();
				}

				// 展开更多字段
				$("#BtnexpandMore").click(function() {
					$(".OpenDay").removeClass("displayNone");
					if ($("#BtnexpandMoreSpan").text() == "添加") {
						$(".BtnexpandMoreFinish").removeClass("displayNone");
						openFieldMoreWindow(this);
					}
					if($("#_semanSeaIndex").val()!="semanSeaIndex"){
						$("#BtnexpandMoreSpan").text("添加");
						$("#BtnexpandMoreSpan").addClass("letterSpace2em");
					}else{
						$("#BtnexpandMore").addClass("displayNone");
					}
					return false;
				});

				function openFieldMoreWindow(content) {
					$(".andWindow").addClass("displayNone");
					$("#fieldMorePages").find("td").removeClass("fieldMorePageBgGray");
					$("#fieldMorePages").removeClass("displayNone");
					$("#fieldMorePages").show();
					return false;
				}
				function setCodeSetEvent(obj) {

					obj.click(function() {
						var name = $(this).parent().parent().parent().parent().prev().children().children().text();
						callBackText = $(this).parent().prev().children()[0];
						$(".conditionsItem,.linker").remove();// 清空下面展示区选择内容
						$(".conditionsItempan,.linker").remove();// 清空下面展示区选择内容//
						$(".btnGrid").addClass("displayNone");
						$(".searchInputText").val("");
						$("#winType").val("table");// 弹框页面入口类型
						disableWindowWheel();
						// 扩展词表
						if (name == "名称" || name == "摘要和说明" || name == "主权项" || name == "权利要求书" || name == "说明书全文" || name == "名称+摘要和说明" || name == "名称+摘要和说明+权利要求书" || name == "名称+摘要和说明+权利要求书+说明书全文"
								|| name == "名称+摘要和说明+主权项" || name == "关键词" || name == "技术领域" || name == "背景技术" || name == "发明内容" || name == "附图说明" || name == "具体实施方式") {

							expressionText = $(obj).parent().prev().children("input");
							// getWord();//获取词表数据
							// 扩展词表内容
							system_synonym = new Array();
							person_synonym = new Array();
							system_crossLanguage = new Array();
							person_crossLanguage = new Array();
							codeSetWinCommon("#WordSelectwindow");
							// loadUserData();

						}

						// 法律状态
						else if (name == "法律状态" || name == "当前法律状态") {

							$(".typePage").removeClass("displayNone");
							codeSetWinCommon("#LegalStatusWindow");
							initZTree($("#chinaLawTree"), chinaLawSearchSetting, zLawNodes, "chinalaw", "");// 注：db查询
							treeShow($("#legalList"), $("#chinaLawTree"));// 显示树div
							treeShow($("#LegalStatusWindow .btnLaw"), $("#LegalStatusWindow .areaList"));// 显示对应
							$("#LegalStatusWindow .searchInputText").val("");

						}

						// 洛迦诺
						else if (name == "洛迦诺") {
							$(".typePage").removeClass("displayNone");
							$('.radioCatergoriesDiv').click();// 语言栏
							initZTree($("#locanoTreeDemo"), setting, zZhLocanoNodes, "locanojson", 1);
							codeSetWinCommon("#LocanoWindow");
						}

						// IPC
						else if (name == "IPC") {

							$("#IpcResult").addClass("displayNone");// ipc统计
							initTypeRadio("IPCwindow");
							$(".typePage").removeClass("displayNone");
							initZTree($("#ipcTreeDemo"), setting, zIPCCnNodes, "ipcjson", 1);
							codeSetWinCommon("#IPCwindow");
						}

						// CPC
						else if (name == "CPC") {

							$(".typePage").removeClass("displayNone")
							$("#cpcResult").addClass("displayNone");// cpc统计
							$(".contrastPage").addClass("displayNone");
							initZTree($("#cpcTreeDemo"), setting, zCPCNodes, "cpcjson", 2);
							initTypeRadio("CPCwindow");
							codeSetWinCommon("#CPCwindow");

						}

						// FI
						else if (name == "FI") {

							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							$("#fiResult").addClass("displayNone");// fi统计
							initTypeRadio("FIWindow");
							initZTree($("#fiTreeDemo"), setting, zFIJpNodes, "fijson", 3);
							codeSetWinCommon("#FIWindow");

						}

						// Fterm
						else if (name == "FTERM") {

							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							$("#ftResult").addClass("displayNone");
							initTypeRadio("FtermWindow");
							initZTree($("#ftermTreeDemo"), setting, zFTERMNodes, "ftermjson/00000", 3);
							codeSetWinCommon("#FtermWindow");
						}

						// UC
						else if (name == "UC") {
							$("#ucResult").addClass("displayNone");// ipc统计
							$(".typePage").removeClass("displayNone");
							$(".contrastPage").addClass("displayNone");
							initZTree($("#ucTreeDemo"), setting, zUSPCNodes, "ucjson", 2);
							initTypeRadio("UCWindow");
							codeSetWinCommon("#UCWindow");
						}

						// 公司代码
						else if (name == "申请人" || name == "专利权人" || name == "当前权利人" || name == "相关权利人") {

							$("#companySysDiv").removeClass("displayNone");// 
							treeShow($(".comSysRightResult"), $(".sqrContentText"));// 
							codeSetWinCommon("#companyWindow");

						}

						// 区域代码
						else if (name == "申请人地址" || name == "专利权人地址" || name == "专利权人区域代码") {

							initZTree($("#provinceTreeDemo"), regsetting, zRegNodes, "regionjson", "")
							codeSetWinCommon("#provinceWindow");
							expressionText = $(obj).parent().prev().children("input");

						}
						// 区域代码
						else if ( name == "申请人区域代码" ) {
							//右侧导航
							initZTree($("#applicantTreeDemo"), applicantsetting, zPetitionerNodes, "petitionerjson", "")
							codeSetWinCommon("#applicantWindow");
							expressionText = $(obj).parent().prev().children("input");
							
						}

						// 代理机构代码
						else if (name == "代理机构") {

							$(".typePage").removeClass("displayNone");
							codeSetWinCommon("#agencyWindow");
							mGrid_gridAge_obj.opt.action = "/txnGetAgencyName.ajax";
							mGrid_gridAge_obj.query(1, function() {// 异步加载
								$("#agencyWindow .modelGridPaginatorContainer li a").attr("href", "javascript:void(0);");// 锚点

							});
						}

					});

				}
				setCodeSetEvent($(".inputRequestplus"));

				var copyTrID = 1;
				// 展开更多字段选择后完成
				$(".BtnexpandMoreFinish").click(function() {
					
					// 循环添加
					$("#fieldMorePages").find("td").each(function() {

						if ($(this).hasClass("fieldMorePagesTdSel")) {
							
							var item = $(".copyTr").clone(true);
							item.removeClass("copyTr displayNone");
							item.attr("id", "copyTr_" + copyTrID);
							var t = $(this).text();

							$(item).find(".AddfieldMorePages span").text(t);
							$(item).find(".tabSaeInput input").attr("title", t);
							var expre = placeholder[t];
							if (expre == null) {
								expre = "";
							}
							$(item).find(".tabSaeInput input").attr("placeholder", expre);

							for ( var i = 0; i < codeSetFieldList.length; i++) {

								if (t == codeSetFieldList[i]) {
									$(item).find("div.codeSetButton").addClass("inputRequestplus");
									setCodeSetEvent($(item).find("div.inputRequestplus"));
									break;
								}

							}
							if($(this).hasClass("textType")){
								$(item).children(".exactSearch3").removeClass("exactSearch1").addClass("exactSearch2").addClass("exactSearch");
							}else{
								$(item).children(".exactSearch3").removeClass("exactSearch1").removeClass("exactSearch2").removeClass("exactSearch");
							}
							$(item).insertBefore($("#tabOpenDay tr:last"));
							ckmTypeahead("#copyTr_" + copyTrID + " .seaInput");
							copyTrID++;

						}

					});
					closeFieldMorePages();
					$(".BtnexpandMoreFinish").addClass("displayNone");
					return false;
				})

				// 需要弹出代码集的字段
				var codeSetFieldList = new Array("IPC", "CPC", "FI", "FTERM", "UC", "洛迦诺", "申请人", "申请人地址", "专利权人", "专利权人地址", "专利权人区域代码", "申请人区域代码", "当前权利人", "相关权利人", "代理机构", "名称", "摘要和说明", "主权项",
						"权利要求书", "说明书全文", "名称+摘要和说明", "名称+摘要和说明+权利要求书", "名称+摘要和说明+权利要求书+说明书全文", "名称+摘要和说明+主权项", "关键词", "技术领域", "背景技术", "发明内容", "附图说明", "具体实施方式", "法律状态", "当前法律状态", "中图分类");

				// 字段增加页
				$("#fieldMorePages").find('td').click(function() {
					var thisObj = this;
					if ($(this).hasClass("exclude")) {
						return false;
					}
					if ($(this).hasClass("fieldMorePageBgGray")) {
						return false;
					}
					if ($(this).hasClass("fieldMorePagesTitle")) {
						return false;
					}
					if ($(this).text() == "") {
						return false;
					}
					$(this).toggleClass("fieldMorePagesTdSel");
					return false;
				});

				function closeFieldMorePages() {
					$("#fieldMorePages").hide();
					$("#fieldMorePages").find("td").each(function() {
						if ($(this).hasClass("fieldMorePagesTdSel")) {
							$(this).removeClass("fieldMorePagesTdSel");
						}
					});
				}

				$(".exactSearch").unbind("click").click(function(){
					$(this).toggleClass("exactSearch1");
					$(this).toggleClass("exactSearch2");
				});
			}
			
			// 新加入全字段添加弹出页面
			{
				// 展开更多字段
				$("#BtnCompleteColumnOpenMultiChoose").click(function() {
					disabledMouseWheel();
					$(".bodyClass").addClass("overflowHidden");
					closeFieldMorePages();
					$(".BtnexpandMoreFinish").addClass("displayNone");
					$("#completeFieldPage").show();
					var scrolltop = $(document).scrollTop();
					$("#completeFieldPage").css("margin-top", scrolltop);
					$(".shielding_layer").removeClass("displayNone");
//					$(".bodyClass").addClass("overflowHidden");
				});
				
				$("#completeFieldPage").mouseover(function(){
					if($(".shielding_layer").hasClass("displayNone")==false){
						MouseWheel();
					}
				});
				
				$("#completeFieldPage").mouseout(function(){
					if($(".shielding_layer").hasClass("displayNone")==false){
						disabledMouseWheel();
					}
				});
				
				// 字段增加页
				$("#completeFieldPage").find('td').click(function() {
					var thisObj = this;
					if ($(this).hasClass("fieldMorePageBgGray")) {
						return false;
					}
					if ($(this).hasClass("fieldMorePagesTitle")) {
						return false;
					}
					if ($(this).text() == "") {
						return false;
					}
					$(this).toggleClass("fieldMorePagesTdSel");
					return false;
				});
				
				$("#BtnCompletePageCloseX").click(function() {
					$("#completeFieldPage").hide();
					$("#completeFieldPage").find("td").each(function() {
						if ($(this).hasClass("fieldMorePagesTdSel")) {
							$(this).removeClass("fieldMorePagesTdSel");
						}
					});
					
					MouseWheel();
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
				});
				
				$("#BtnCompletePageClose").click(function() {
					$("#completeFieldPage").hide();
					$("#completeFieldPage").find("td").each(function() {
						if ($(this).hasClass("fieldMorePagesTdSel")) {
							$(this).removeClass("fieldMorePagesTdSel");
						}
					});
					MouseWheel();
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
				});
				
				function closeFieldCompletePages() {
					$("#completeFieldPage").hide();
					$("#completeFieldPage").find("td").each(function() {
						if ($(this).hasClass("fieldMorePagesTdSel")) {
							$(this).removeClass("fieldMorePagesTdSel");
						}
					});
					MouseWheel();
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
				}
				
				// 展开更多字段选择后完成
				$("#BtnCompletePageFinish").click(function() {
					// 循环添加
					$("#completeFieldPage").find("td").each(function() {

						if ($(this).hasClass("fieldMorePagesTdSel")) {

							var item = $(".copyTr").clone(true);
							item.removeClass("copyTr displayNone");
							item.attr("id", "copyTr_" + copyTrID);
							var t = $(this).text();

							$(item).find(".AddfieldMorePages span").text(t);
							$(item).find(".tabSaeInput input").attr("title", t);
							var expre = placeholder[t];
							if (expre == null) {
								expre = "";
							}
							$(item).find(".tabSaeInput input").attr("placeholder", expre);

							for ( var i = 0; i < codeSetFieldList.length; i++) {

								if (t == codeSetFieldList[i]) {
									$(item).find("div.codeSetButton").addClass("inputRequestplus");
									setCodeSetEvent($(item).find("div.inputRequestplus"));
									break;
								}

							}

							$(item).insertBefore($("#tabOpenDay tr:last"));
							ckmTypeahead("#copyTr_" + copyTrID + " .seaInput");
							copyTrID++;

						}

					});

					closeFieldCompletePages();
					$(".BtnCompletePageFinish").addClass("displayNone");
					return false;
				});
			}

			// 生成表达式及提交
			{

				// 生成表达式和追加表达式
				$(".generateExpress").click(function() {
					
					// 对应库
					// var m_str = getLibsExpress();
					var m_str = "";

					// 快捷
					var fe_str = getShortcutExpress();

					m_str = getFieldExpress(m_str);

					if (fe_str != null && fe_str != "" && m_str != null && m_str != "") {
						m_str += " AND " + fe_str;
					} else if (m_str == null || m_str == "") {
						m_str = fe_str;
					}

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

				// 生成表达式然后检索
				$("#submitExpress").click(function() {
					
					// 需要选择库
					var length = $(".patentLib").length;
					if (length == 0) {
						$.fz_common.alert("没有选择检索库", "请选择检索库");
						return;
					}

					// 表达式编辑框
					var expressTxt = $("#expressCN").val();

					// 对应字段表达式
					var field_str_tmp = getFieldExpress("");
					// 快捷检索
					var se_str = getShortcutExpress();
					if (field_str_tmp == "" && expressTxt == "" && se_str == "") {
						$.fz_common.alert("错误", "没有填写任何查询项");
						return;
					}

					var preCheckExpress = field_str_tmp;
					if (expressTxt != "") {
						preCheckExpress = expressTxt;
					}

					// 对应库
					var le_str = getLibsExpress();

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
					
					if (expressTxt.trim() == "") {
						$.fz_common.alert("错误", "没有填写任何查询项");
						return;
					}
					
					var checkstr = encodeURIComponent(expressTxt);
					if(preCheckExpress.length > 3000){
						$.fz_common.alert("提示", "表达式长度不能超过3000个字，请重新编辑表达式");
						return;
					}
					
					// 检查表达式
					$.ajax({
						type : "POST",
						dataType : "xml",
						async : false,
						url : "/" + rootPath + "txnCheckPatentQuery.ajax",
						data : "select-key:express=" + encodeURIComponent(preCheckExpress),
						success : function(data) {

							checkLoginStatus(data);

							var check = $.fz_common.getXmlNodeValue(data, "context>record>check");

							if (check == "true") {

								var _thesaurus = "";
								if (document.getElementById("_thesaurus").checked) {
									_thesaurus = true;
								}

								var _cross = "";
								if (document.getElementById("_cross").checked) {
									_cross = true;
								}
								if (_cross == true || _thesaurus == true) {

									$("#lastExpressCN").val("");

									$("#subExpressionWindow").removeClass("displayNone");
									var scrolltop = $(document).scrollTop();
									$("#subExpressionWindow").css("margin-top", scrolltop);
									$(".shielding_layer").removeClass("displayNone");
									setLayerHeight();
									disabledMouseWheel();
									$(".bodyClass").addClass("overflowHidden");

									$("#subExpressionWindow").showLoading();

									$.ajax({
										type : "POST",
										dataType : "xml",
										url : "/" + rootPath + "txnPatentGetExpress.ajax",
										data : "select-key:expressCN=" + checkstr + "&select-key:thesaurus=" + _thesaurus + "&select-key:cross=" + _cross,
										success : function(data) {
											$("#subExpressionWindow").hideLoading();
											var patent = $.fz_common.getXmlNodeValues(data, "context>patent");
											var express = $(patent).text();
											$("#lastExpressCN").val(express);
										},
										error : function(data) {
											$("#subExpressionWindow").hideLoading();
											$.fz_common.alert("发生错误", data + "", null);
											$(".subExpressionClose").click();
										}
									});

								} else {
									// 记录日志
									saveSearchLog("", le_str, expressTxt, "", "", "", "", freezeTxnAction);
									// 提交
									expressTxt = expressTxt.replace(/\n/g," ");
									_doTempPost("/" + rootPath + "txnPatentImgTextList.do", "select-key:expressCN=" + encodeURIComponent(le_str + " AND (" + expressTxt + ")"), true);
									// 刷新检索历史
									// setTimeout("mGrid_gridHis_obj.query(1,
									// function() { hisRecordComplete (); });",
									// 2000);
								}

							} else {
								var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
								if (errCode == "000000") {
									_expressExpMes(data);
								} else {
									errorDescAlert(data);
								}
							}

						},
						error : function(data) {
							$.fz_common.alert("错误", data.status + data.readyState + data.responseText + "", null);
						}
					});

				});

				// 表达式表单验证
				var patentform_form = new $.fz_form("#patentform", null);

				function _bootstrap2_errorPlacement(label, elem) {
					elem.parent("div").append(label);
				}

				var patentform_validate = $('#patentform').validate({
					errorPlacement : _bootstrap2_errorPlacement,
					rules : {
						"select-key:expressCN" : {
							required : true
						}
					},
					messages : {
						"select-key:expressCN" : {
							required : '生成表达式才能进行检索'
						}
					}
				});

				// 表达式截断浮动窗口关闭
				$(".subExpressionClose").click(function() {
					$("#expressionWindow").addClass("displayNone");
					$(".shielding_layer").addClass("displayNone");
					$(".bodyClass").removeClass("overflowHidden");
					MouseWheel();
				});

				// 确定表达式提交
				$("#expressionSubmit").click(function() {

					// 对应库
					var le_str = getLibsExpress();
					var express = $("#lastExpressCN").val();

					// 记录日志
					saveSearchLog("", le_str, express, "", "", "", "", freezeTxnAction);
					// 提交
					express = express.replace(/\n/g," ");
					_doTempPost("/" + rootPath + "txnPatentImgTextList.do", "select-key:expressCN=" + encodeURIComponent(le_str + " AND " + express), true);
					// 刷新检索历史
					// setTimeout("mGrid_gridHis_obj.query(1, function() {
					// hisRecordComplete ();});", 2000);
				});

			}

			// 检索库
			{

				// 判断父目录国家是否选中
				function ifCountrySelect(obj) {

					var _select = true;
					$(obj).parent().children(".country:first-child").nextAll().each(function() {

						if ($(this).hasClass("contryNormal")) {
							_select = false;
						}

					});

					if (_select) {
						$(obj).parent().children(".country").removeClass("contryNormal");
						$(obj).parent().children(".country").addClass("countrySelect");
					}
				}

				// 常用组合
				$("#0F4G17SN370103D8 , #0F4G185TOU01053F , #0F4G17TR17010407 , #0F4H0SS60G0154D2").click(function() {

					var lib = $(this).children("span").attr("v");
					var libs = lib.split(",");

					$(".patentLibDivSelect").each(function() {

						$(this).removeClass("patentLibDivSelect");

					});

					$(this).addClass("patentLibDivSelect");

					$(".tabAddCommon").find('td').each(function() {

						if ($(this).hasClass("countrySelect")) {
							$(this).removeClass("countrySelect");
							$(this).addClass("contryNormal");
						}

					});

					$("#_tabChinaUtlityPatent td:first-child .patentLib").remove();

					for ( var i = 0; i < libs.length; i++) {

						// 点击具体某一项
						$(".tabAddCommon").find('td').each(function() {

							var v = $(this).attr("v");
							if (v == null || v == "") {
								return;
							}

							if (libs[i] == v) {
								$(this).removeClass("contryNormal");
								$(this).addClass("countrySelect");
								ifCountrySelect(this);
								addTabLib(this);

							}
						});
					}
				});

				// 检索库重置
				$("#reSet").click(function() {
					$("#0F4H0SS60G0154D2").click();
					$(".patentLibDivSelect").each(function() {

						$(this).removeClass("patentLibDivSelect");

					});
				});

				// 添加到常用组合弹窗
				$("#AddToCommon").click(function() {
					var num = $("#patentLibs").children().length;
					if (num < 7) {
						$("#inputCommon").val("");
						$("#addToCommonWindow").show();
						var scrolltop = $(document).scrollTop();
						$("#addToCommonWindow").css("margin-top", scrolltop);
						setLayerHeight();
						disabledMouseWheel();
						$(".shielding_layer").removeClass("displayNone");
						$(".bodyClass").addClass("overflowHidden");
					} else {
						$.fz_common.alert("错误", "自定义组合最多添加三组");
					}

				});

				// 添加到常用组合弹窗-关闭
				$("#commonWindClose").click(function() {
					$("#addToCommonWindow").hide();
					CommonWindowClose();
				});

				// 添加到常用组合弹窗-取消
				$("#AddToCommonCancel").click(function() {
					$("#addToCommonWindow").hide();
					CommonWindowClose();
				});

				function addPatentLibButton(_id, lib, name) {

					// 增加按钮
					$("#patentLibs").append(
							'<div id="' + _id + '" class="btnWhite commonPatentLibDiv cursorPointer afterAdd"> <span style="width:90px; height:30px; overflow: hidden; display: inline-block;" uuid="'
									+ _id + '" ondblclick="ShowElement(this)" v="' + lib + '" class="marginLeft10">' + encodeHtml(name) + '</span> <img class="commonDel cursorPointer" src="/'
									+ rootPath + 'module/di/img/public/closeGray.png"> </div>')

					// 删除事件
					$("#" + _id + " img").click(
							function() {
								var _otherFunction1 = function() {

									var _id = $("#_delLibsConfirm").val();
									$("#" + _id).addClass("willdellib");

									var patent_database = getPatentDatabase();
									$.ajax({
										type : "POST",
										dataType : "xml",
										url : "/" + rootPath + "txnDelUserLibs.ajax",
										data : "select-key:patent_database=" + patent_database,

										success : function(data) {
											var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
											if (errCode != "000000") {
											} else {

												$("#" + _id).remove();

											}
										},
										error : function(data) {
											$("#" + _id).removeClass("willdellib");
											$.fz_common.alert("发生错误", "发生错误，请稍后再试");
										}
									});

								}

								var _otherButtons = [ "确定" ];
								var _otherButtonStyles = [ 'btn-danger' ];
								var _otherFunction = [ _otherFunction1 ];

								$.fz_common.confirm("提示", "确认要删除当前检索库组合？<input type=\"hidden\" value=\"" + _id + "\" id=\"_delLibsConfirm\" />", null, _otherButtons, _otherButtonStyles,
										_otherFunction);

							});

					// 点击事件
					$("#" + _id).click(function() {

						var lib = $(this).children("span").attr("v");
						var libs = lib.split(",");

						$(".patentLibDivSelect").each(function() {

							$(this).removeClass("patentLibDivSelect");

						});

						$(this).addClass("patentLibDivSelect");

						$(".tabAddCommon").find('td').each(function() {

							if ($(this).hasClass("countrySelect")) {
								$(this).removeClass("countrySelect");
								$(this).addClass("contryNormal");
							}

						});

						$("#_tabChinaUtlityPatent td:first-child .patentLib").remove();

						for ( var i = 0; i < libs.length; i++) {

							// 点击具体某一项
							$(".tabAddCommon").find('td').each(function() {

								var v = $(this).attr("v");
								if (v == null || v == "") {
									return;
								}

								if (libs[i] == v) {
									$(this).removeClass("contryNormal");
									$(this).addClass("countrySelect");
									ifCountrySelect(this);
									addTabLib(this);

								}

							});

						}

					});

				}
				// 初始检索库信息（如果用户那边配置了常用检索库那就用客户那边配置的检索库）
				if (_patent_database != null && _patent_database != "" && _patent_database != "null") {
					// 将常用组合与检索库解析出来
					var _patent_common = _patent_database.split(";");
					for ( var i = 0; i < _patent_common.length - 1; i++) {

						// var _patent_common_i = _patent_common[i];
						var libs_list = _patent_common[i].split(":")[1];
						var libs = libs_list.split(",");
						var CNLibs = "";

						CNLibs = patentLibrary[libs[0]];

						for ( var j = 1; j < libs.length; j++) {

							if(libs[j] != "台湾"){
								CNLibs = CNLibs + "," + patentLibrary[libs[j]];
							}else{
								CNLibs = CNLibs + "," + libs[j];
							}
							var _id = new Date().getTime() + "_" + i;
						}
						addPatentLibButton(_id, CNLibs, _patent_common[i].split(":")[0]);

					}

				}

				// 添加到常用组合弹窗-确认-增加

				$("#AddToCommonConfirm").click(
						function() {
							// 增加
							var name = $("#inputCommon").val();
							name = name.replace(/&/g, "");
							name = name.replace(/\+/g, "");
							var nameOld = "";
							var flag = false;
							$(".commonPatentLibDiv span").each(function() {
								nameOld = $(this).text();
								if (nameOld == name) {
									flag = true;
								}
							});
							if (flag) {
								$.fz_common.alert("错误", "您添加的组合名称已存在！");
								return;
							}
							$("#inputCommon").val(name);
							if (name != null && $.trim(name) != "") {

								var lib = new Array();
								var CNLib = new Array();
								$("#_UtlityPatentTable td").each(function() {

									if ($(this).hasClass("countrySelect")) {
										var v = $(this).attr("v");
										if (v == null || v == "") {
											return;
										}
										CNLib.push(v);
										if ($.trim(v) != "台湾") {
											for ( var key in patentLibrary) {
												if (patentLibrary[key] == v) {
													lib.push(key);
												}
											}
										} else {
											lib.push($.trim(v));
										}

									}

								});

								if (lib.length == 0) {

									$.fz_common.alert("错误", "没有选择要检索的库");
									return;
								}

								$.ajax({
									type : "POST",
									dataType : "xml",
									url : "/" + rootPath + "txnUserPatentLibs.ajax",
									data : "select-key:name=" + encodeURIComponent(name) + "&select-key:libs=" + encodeURIComponent(lib) + "&select-key:patent_database="
											+ encodeURIComponent(getPatentDatabase()),
									success : function(data) {
										var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
										if (errCode != "000000") {

											errorDescAlert(data);

										} else {

											// 添加成功
											CommonWindowClose();

											var _id = new Date().getTime() + "_1";
											addPatentLibButton(_id, CNLib, name);

										}
									},
									error : function(data) {
										$.fz_common.alert("发生错误", "发生错误，请稍后再试");
									}
								});

							} else {

								$.fz_common.alert("错误", "请填写名称");
							}

						});

				$(".chinaUtilityDelete").click(function() {

					chinaUtilityDeleteFun(this);

				});

				function chinaUtilityDeleteFun(obj) {
					var index = $(obj).parent().index();
					$(obj).parent().remove();

					var v = $(obj).attr("v");

					$(".tabAddCommon td.countrySelect").each(function() {

						if ($(this).attr("v") == v) {
							$(this).removeClass("countrySelect");
							$(this).addClass("contryNormal");

							$(this).parent().children(".country").removeClass("countrySelect");
							$(this).parent().children(".country").addClass("contryNormal");

						}

					});

					$(".patentLibDivSelect").each(function() {

						$(this).removeClass("patentLibDivSelect");

					});

					if ($(".patentLib").length == 0) {
						$.fz_common.alert("提示", "您当前没有选择检索库");
					}

				}

				// 选择常用专利库

				$(".country").click(function() {
					// var m_parent = $(this).parent();
					if ($(this).nextAll().hasClass("contryNormal")) {
						$(this).removeClass("contryNormal");
						$(this).addClass("countrySelect");
						$(this).nextAll().removeClass("contryNormal");
						$(this).nextAll().addClass("countrySelect");
						$(this).nextAll().each(function() {
							addTabLib(this);
						});
					} else {
						$(this).removeClass("countrySelect");
						$(this).addClass("contryNormal");

						$(this).nextAll().removeClass("countrySelect");
						$(this).nextAll().addClass("contryNormal");
						$(this).nextAll().each(function() {
							delTabLib(this)
						});
					}

				});

				function delTabLib(obj) {

					var v = $(obj).attr("v");

					if (v == null || v == "") {
						return;
					}

					$("#_tabChinaUtlityPatent td:first-child span").each(function() {
						if ($(this).text() == v) {
							var index = $(this).parent().index();
							$(this).parent().remove();
						}
					});

				}

				function addTabLib(obj) {

					var v = $(obj).attr("v");

					if (v == null || v == "") {
						return;
					}
					var add = false;
					$("#_tabChinaUtlityPatent td:first-child span").each(function() {
						if ($(this).text() == v) {
							add = true;
						}
					});

					if (add) {

						return;
					}
					var random = (Math.random() * 10000 % 10000 + "").split(".")[0];

					var _id = "_cTmpB" + new Date().getTime() + random;
					$("#_tabChinaUtlityPatent td:first-child").append(
							'<div class="patentLib"> <span title="' + v + '" class="floatLeft fontSize12 btnSmallWhite">' + v + '</span><input id="' + _id + '" type="button" v="' + v
									+ '" class="chinaUtilityDelete buttonNobgBd floatLeft delete"></div>')

					$("#" + _id).click(function() {
						chinaUtilityDeleteFun(this);
					});
				}

				// 点击具体某一项
				$(".tabAddCommon").find('td').click(function() {
					if ($(this).hasClass("country") == false) {
						if ($(this).hasClass("contryNormal")) {
							$(this).removeClass("contryNormal");
							$(this).addClass("countrySelect");

							ifCountrySelect(this);

							addTabLib(this);

						} else {
							$(this).removeClass("countrySelect");
							$(this).addClass("contryNormal");

							$(this).parent().children(".country").removeClass("countrySelect");
							$(this).parent().children(".country").addClass("contryNormal");

							delTabLib(this)
						}
					}

					$(".patentLibDivSelect").each(function() {

						$(this).removeClass("patentLibDivSelect");

					});

				});

				// 常用组合弹窗
				function CommonWindowClose() {
					MouseWheel();
					$("#addToCommonWindow").hide();
					$(".shielding_layer").addClass("displayNone");

					$(".bodyClass").removeClass("overflowHidden");
				}

				// 新增选库展开页-完成
				$("#AddCommonFinish").click(function() {
					$("#CommonCombinations").addClass("displayNone");
					$("#AddCommonFinish").addClass("displayNone");
					$("#addPatent").removeClass("displayNone");
					$("#AddToCommon").addClass("displayNone");

					CommonWindowClose();
				});

				// 新增选库展开页
				$("#addPatent").click(function() {
					$("#CommonCombinations").removeClass("displayNone");
					$("#AddCommonFinish").removeClass("displayNone");
					$("#AddToCommon").removeClass("displayNone");
					$("#addPatent").addClass("displayNone");
				});

			}

		});

// 获取当前专利组合
function getPatentDatabase() {
	var patent_database = "";
	$(".afterAdd").each(function() {
		if (!$(this).hasClass("willdellib")) {
			patent_database = patent_database + $(this).children("span").text() + ":";
			var patent_libs_list = $(this).children("span").attr("v").split(",");
			var patent_libs = "";
			for ( var i = 0; i < patent_libs_list.length; i++) {
				if (patent_libs_list[i] == "台湾") {
					patent_libs = "台湾" + "," + patent_libs;
				} else {
					for ( var key in patentLibrary) {
						if (patentLibrary[key] == patent_libs_list[i]) {
							patent_libs = key + "," + patent_libs;
						}
					}
				}
			}
			patent_libs = patent_libs.substr(0, patent_libs.length - 1);
			patent_database = patent_database + patent_libs + ";";

		}
	});
	return patent_database;
}

// 双击库修改名称
function ShowElement(element) {

	var uuid = $(element).attr("uuid");

	var oldhtml = element.innerHTML;
	var newobj = document.createElement('input');// 创建新的input元素
	newobj.type = 'text';// 为新增元素添加类型
	newobj.id = 'input' + uuid;
	newobj.maxLength = 30;
	newobj.className = 'patentLibNameInput';
	newobj.onblur = function() {

		element.innerHTML = this.value ? this.value : oldhtml;

		// 读取检索库
		$.ajax({
			type : "POST",
			dataType : "xml",
			url : "/" + rootPath + "txnUpdataPatentName.ajax",
			data : "select-key:patent_database=" + encodeURIComponent(getPatentDatabase()),
			success : function(data) {
				var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
				if (errCode != "000000") {
				} else {
				}
			},
			error : function(data) {
			}
		});

		// 当触发时判断新增元素值是否为空，为空则不修改，并返回原有值
	}
	element.innerHTML = '';
	element.appendChild(newobj);
	newobj.focus();
	// $('#input' + uuid).attr("txt", $(element).text());
	$('#input' + uuid).attr("uuid", uuid);
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
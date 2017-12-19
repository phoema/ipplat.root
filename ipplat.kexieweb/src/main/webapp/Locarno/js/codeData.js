		//var _jsonrootpath = "http://10.10.1.5";
		//var _jsonrootpath = __fzjhPathURL;
		var nginxJsonFilePath = '';//_jsonrootpath+"/U/data/json/";//服务器代码集路径
		var wordPath = "";//同义词代码集路径// __userServerURL +
		/** ****通用变量***** */
		var callBackText;// 检索内容
		var checkValues = "";//加入检索内容
		var wordList =""; //加入词表内容
		var otherCountry =new Array();//外国 国家代码集
		var expressionText;//设置代码集按钮事件
		var person_synonym =new Array(); //个人词表
		var person_crossLanguage = new Array(); //跨语言词表
		var system_synonym = new Array();//系统词表
		var system_crossLanguage = new Array();//系统跨语言词表
		
		///////检索按钮部分/////
		
		/*法律状态查询*/
		
		$(".btnLegal").click(function() {
			var windowForm = $(this).attr("v");
			var btnTree = $("#" + windowForm + " .btnTree");//tree加入检索按钮
			var chinaTree = $("#chinaLawTree");//中国法律状态
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			if ($.trim(searchText) == "") {
				searchText = $.trim(searchText) ;
			}
			
			
			//删除原有树//检索效果为树时sh
			$(chinaTree).children().remove();
			//加载查询树
			queryCompanyData("txnSearchLawTree.ajax","select-key:nodeName=" + searchText +"&select-key:level=-1");//系统查询
			
			var nodes = $("#com_nodes").val();//根节点
			if(nodes){
				
				$("#_treeNull").addClass("displayNone");
				var law_node = eval('(' + nodes + ')');
				var winType = $("#winType").val();
				if("tools" == winType){//工具栏
					chinaLawSearchSetting.check.enable = false;
				}
				$.fn.zTree.init($("#chinaLawTree"), chinaLawSearchSetting, law_node);
				//将检索到的内容展开
				var treeObj = $.fn.zTree.getZTreeObj("chinaLawTree");
				var nodes = treeObj.getNodes();
				if (nodes.length>0) {
					for (var i = 0; i < nodes.length; i++) {
						
						$("#"+nodes[i].tId+"_switch").click();
					}
				}
				
			}else{
				
				$("#_treeNull").removeClass("displayNone");
			}
			
		});
		
		/*代理机构检索*/
		$(".btnAgency").click(function() {
			var windowForm = $(this).attr("v");
			var gridDiv = $("#" + windowForm).find(".gridListDiv");
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			if ($.trim(searchText) == "") {
				searchText = $.trim(searchText) ;
			}
			if("" != searchText){
				$("#agencyname").val(searchText);
				mGrid_gridAge_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);
				});
				
				
			}
		});
		
		//尼斯分类查询
		$(".btnNiceSearch").click(function() {
			var windowForm = $(this).attr("v");
			var gridDiv = $("#" + windowForm).find(".gridListDiv");
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			if ($.trim(searchText) == "") {
				searchText = $.trim(searchText) ;
			}
			 
			var radiospan = $(this).parent().parent().find(".keyRadio");// 中英文单选按钮
			var languageType = getLanguageValue(radiospan);//获取语种
			$("#nctitle").val(searchText);
			grid_Query2(mGrid_gridNice_obj,windowForm,searchText,languageType);
			$("#nctitle").val("");
			
		});
		//usa
		$(".btnNiceUsaSearch").click(function() {
			var windowForm = $(this).attr("v");
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			if ($.trim(searchText) == "") {
				searchText = $.trim(searchText) ;
			}
			$("#nusatitle").val(searchText);
			grid_Query2(mGrid_gridNiceUsa_obj,windowForm,searchText,"2");
			$("#nusatitle").val("");
			
		});
		
		//重置
		$(".btnWordRest").click(function(){
			var value = $(this).next().next().val();//检索内容 不支持逻辑符的查询
			clearSearchText("#WordSelectwindow .searchInputText");//清空复选框
			//清空下面内容//treeShow($("#" + windowForm).find(".btnGrid"), $("#" + windowForm).find(".btnTree"));
			
		});
		function clearSearchText(input){
			$(input).val("");
		}
		
			//词表检索
		$(".btnWordSearch").click(function (){
			var value = $(this).next().val();//检索内容 不支持逻辑符的查询 
			if($.trim(value) == ""){
				$.fz_common.alert("提示","请输入检索词。");
				return;
			}
			$("#WordSelectwindow").showLoading();
			var radiospan = $(this).parent().parent().find(".keyRadio");// 中英文单选按钮
			var lang = getLanguageValue(radiospan);
			
			if($(".Crosslanguage").hasClass("typeSelect")){
				system_crossLanguage = new Array();
				person_crossLanguage = new Array();
				
				
				if($(".personWord").hasClass("typeSelect")){
					var param = wordParam(lang,value,"1");
					getWord("txnGetCrossLanguage",param,"lang");//跨语言
					
					createCrossLanguageTable(person_crossLanguage,"personWord");//个人跨语言
				}
				if($(".systemWord").hasClass("typeSelect")){
					var param = wordParam(lang,value,"2");
					getWord("txnGetCrossLanguage",param,"lang");//跨语言
					
					createCrossLanguageTable(system_crossLanguage,"systemWord");//系统跨语言
				}
			}
			if($(".synonym").hasClass("typeSelect")){
				person_synonym = new Array();
				system_synonym = new Array();
				if($(".personWord").hasClass("typeSelect")){
					
					getWord("txnGetSynonymWord","select-key:vocabulary_type=1&select-key:key_word="+value,"syn");//同义词
					createSynonymTable(person_synonym,"personWord");//个人同义词
				}
				if($(".systemWord").hasClass("typeSelect")){
					getWord("txnGetSynonymWord","select-key:vocabulary_type=2&select-key:key_word="+value,"syn");//同义词
					createSynonymTable(system_synonym,"systemWord");//系统同义词
				}
			}
			
		});
		
		function wordParam(lang,value,type){
			var param = "" ;
			if(lang == "1"){
				
				param = "select-key:chinese_word="+ value +"&select-key:vocabulary_type="+type;
				
			}
			if(lang == "2"){
				
				param = "select-key:english_word="+ value +"&select-key:vocabulary_type="+type;
			}
			return param;
		}
		
		
		/**
		 * 分类表查询
		 */
		$(".btnSearch").click(function() {
			// 窗体名
		
			var windowForm = $(this).attr("v");
			var treeDiv = $("#" + windowForm).find("div.typePage").children().find(".ztree");// div
			var gridDiv = $("#" + windowForm).find(".typePage .gridListDiv");
			var gridButton = $("#" + windowForm).find("button.btnGrid");// 检索按钮
			var treeButton = $("#" + windowForm).find("button.btnTree");
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			var titleInput = gridDiv.find(".tle");//grid 内部的加载条件
			var languageInput = gridDiv.find(".lge");//grid 内部的加载条件
			var radiospan = $(this).parent().parent().find(".keyRadio");// 中英文单选按钮
			$("input[name='ckb']").prop("checked", false);// 全全框
			
			clearSymbol();	//清空分组查询条件
			
		
			if ($.trim(searchText) == "") {
				$("#UCWindow .typePage").children("div").css("height","270px");
				textIsEmpty(windowForm, treeDiv, gridDiv, gridButton, treeButton);// 检索框为空
				setZbtnTree($(treeDiv).attr("id"), false);
				$(this).next().val("");
				filterDivHide();
				$.fz_common.alert("提示","请输入检索词内容。");
				return;
			}
			processParam(searchText);	//处理参数
			
			filterDivShow();
			removeFilterChildren();
			
			languageInput.val(getLanguageValue(radiospan));//获取语种
			if (gridDiv.hasClass("displayNone")) {
				setZbtnTree($(treeDiv).attr("id"), false);
			}
	
			gridShow(gridButton, treeButton);// 搜索内容
			titleInput.val(searchText);// 检索内容赋值
			gridDiv.removeClass("displayNone");// grid显示
			treeDiv.addClass("displayNone");// zTree显示
			typeQuery(windowForm, searchText, languageInput.val());// 查询显示
		
		});
		
		/*分类对照表查询*/
		$(".btnSearchItem").click(function() {
			// 窗体名
			var windowForm = $(this).attr("v");
			var gridDiv = $("#" + windowForm).find(".contrastPage .gridListDiv");
			var tabDiv = $("#" + windowForm).find(".contrastPageLRSty .divSmallSelect");
			var gridButton = $("#" + windowForm).find("button.btnGrid");// 检索按钮
			var sTypeDiv = $("#" + windowForm + " .divSmallSelect").attr("v");// 获取选中的div
			var searchText = $(this).next().val();// 查询内容
			searchText = stripscript(searchText);//过滤特殊字符
			var titleInput = gridDiv.find(".smalltle");
			var languageInput = gridDiv.find(".smallge");
			var radiospan = $(this).parent().next().find("span");// 中英文单选按钮
			var language = getLanguageValue(radiospan);//语种
			$("input[name='ckb']").prop("checked", false);// 全全框
		
			filterDivHide();
			clearSymbol();
			if(checkQueryParam(searchText,gridDiv,tabDiv)){
				removeFilterChildren();
				titleInput.val(searchText);// 检索内容赋值
				gridDiv.removeClass("displayNone");// grid显示
				contrastQuery(windowForm, searchText, languageInput,language, sTypeDiv, gridDiv);// 查询显示
				
			}
			
		
		});
		
		//验证
		function checkQueryParam(searchText,gridDiv,tabDiv){
			
			var treeParent = tabDiv.attr("id").replace("Tab", "Tree");
			var treeDiv = $("#" + treeParent);
			
			if ($.trim(searchText) == "") {
				treeDiv.removeClass("displayNone").addClass("displayInline")
				gridDiv.addClass("displayNone");
				$(this).next().val("");
				$.fz_common.alert("提示","请输入检索词内容。");
				return false;
			}
			
			processParam(searchText);
			
//			gridDiv.removeClass("displayNone");
//			treeDiv.addClass("displayNone")
			gridShow(gridDiv,treeDiv);
			if (gridDiv.siblings("div").hasClass("displayInline")) {
		
				gridDiv.siblings("div").removeClass("displayInline").addClass("displayNone");
			} else {
				gridDiv.siblings("div").addClass("displayNone");
		
			}
			return true;
		}
		function processParam(searchText){
		
			var k = $.trim(searchText);//清空两侧空格
			var s = k;
			var dataLength = 0;
			//带有逻辑符
			if (k.indexOf(" ") != -1) {
				k = toUpper(k);
				dataLength = getArrayDataLength(k);//获取检索内容 
			}else{
				dataLength = 1;
				}
			searchText = strSplit(k);//截取多余逻辑词
			if (dataLength > 3) {
				$.fz_common.alert("提示","最多可输入三个检索词。");
				return;
			}
			if (dataLength == 0) {
				$.fz_common.alert("提示","请输入检索词内容。");
				return;
			}
		}
		
		/*
		 * 区域代码查询
		 */
		$(".btnProvinceSearch").click(function() {
			var windowForm = "provinceWindow";// 当前窗口
			var searchText = $(this).next().val();// 查询内容
			if(""==$.trim(searchText)){
				return;
			}
			
			var gridDiv = $("#regionList");
			var treeDiv = $("#provinceTreeDemo");// 国内
			var btnType = $(this).attr("v");// 国内或国外
			var gridbtn = $("#provinceWindow .areaList");
			var txnCode = "";
			$(".conditionsItempan,.linker").remove();
			if (btnType == "china") {// 中国
				
				var winType = $("#winType").val();
				if("tools" == winType){
					
					chinaRegionSetting.check.enable = false;//工具栏
				}
				
				$(treeDiv).children().remove();//删除原有树//检索效果为树时sh
				
				try{
					queryCompanyData("txnSearchRegionTree.ajax","select-key:text=" + searchText +"&select-key:level=-1");//系统查询
					
				}catch(e){
					$("#com_nodes").val("");
				}
				
				var nodes = $("#com_nodes").val();//根节点

				if(nodes){
					$("#companySysDiv").css("top","5px").css("left","20px");//top:5px; left:20px;
					$("#_provinceNull").addClass("displayNone");
					$(treeDiv).removeClass("displayNone");
					var reg_node = eval('(' + nodes + ')');
					$.fn.zTree.init(treeDiv, chinaRegionSetting, reg_node);
					//将检索到的内容展开
					var treeObj = $.fn.zTree.getZTreeObj("provinceTreeDemo");
					var nodes = treeObj.getNodes();
					if (nodes.length>0) {
					
						for(var i = 0; i < nodes.length; i++){
							$("#"+nodes[i].tId+"_switch").click();
						}
						for (var k = 0; k < nodes.length; k++) {
							
						
							if (nodes[k].children) {
								setInterval("openChildren(nodes[k].children)",10000);
								//openChildren(nodes[k].children);
								/*for(var j = 0; j<nodes[k].children.length;j++){
									if(nodes[k].children[j]){
										$("#"+nodes[k].children[j].tId+"_switch").click();
										
									}
									
									//$("#"+nodes[k].children[0].tId+"_switch").click();
									//$("#"+nodes[k].children[j]).open();
								//	break;
								}*/
							}
						}
				
						
					}
					
				}else{
					
					$("#_provinceNull").removeClass("displayNone");
					$("#provinceTreeDemo").children().remove();
					$("#provinceTreeDemo").addClass("displayNone");
				}
				
				
				/*if ("" != searchText && $.trim(searchText) != "") {
					gridDiv.removeClass("displayNone");
					treeDiv.addClass("displayNone");// 显示查询结果

					$("#city").val(searchText);
				} else {
					// tree显示
					gridDiv.addClass("displayNone");
					treeDiv.removeClass("displayNone");
					$("#btnChina").removeClass("displayNone");
					gridbtn.addClass("displayNone");
					$("#provinceWindow .searchInputText").val("");
					$(".china").click();
					return;
				}
				mGrid_gridCountry_obj.query(1, function() {// 异步加载
					anchorRedirect("provinceWindow", searchText);// 高亮
				});
				
				*/
				
				
			} else if (btnType == "otherCy") {
				if ("" != searchText && $.trim(searchText) != "") {
					
					$("#alltcty").addClass("displayNone");
					$("#othertcty").removeClass("displayNone");
					$("#letter").val("");
					$("#codevalue").val(searchText);
					
				} else {
					$("#alltcty").removeClass("displayNone");
					$("#othertcty").addClass("displayNone");
					restAreaList();
				}
				var param ="select-key:codevalue="+searchText;
				findCountry("txnCountryCode.ajax", param, "code_type_group", windowForm);
				mGrid_gridCty_obj.query(1, function() {// 异步加载
					gridLoadData(windowForm, "otherCyType>.btnProvinceSearch", "1");
				});
			} 
			
		});
		
		function openChildren(node){
			for(var i = 0; i < node.length; i++){
				$("#"+node[i].tId+"_switch").click();
			}
		}
		
		//////加入检索按钮部分////

		// grid通用查询加入检索
		$("button.btnGrid").click(function() {
		
			var windowForm = $(this).attr("v");
			var treeDiv = $("#" + windowForm).find("div.typePage").children().find(".ztree");// tree
			var gridDiv = $("#" + windowForm).find(".gridListDiv");
			var value = getAreaItemValue($("#"+windowForm+" .Conditions1").children("div"));//获取选中的内容
			addConditionsArea(value, windowForm);// 加入输入框
			if("NiceGroupWindow" == windowForm){//类似群号时，将大类添加到尼斯分类检索框中
				addNiceClass(value,windowForm);
				}
			$("input.searchInputText").val(""); // 清空查询内容
			treeShow($("#" + windowForm).find(".btnGrid"), $("#" + windowForm).find(".btnTree"));
			treeShow(gridDiv, treeDiv);
			checkValues = "";//清空选择内容
			filterDivHide();//隐藏
			clearSymbol();//清空
			removeFilterChildren();
		});
		//代理机构 加入检索按钮
		$("#btnAgency").click(function() {
		
			var windowId = $(this).attr("v");
			var value = getAreaItemValue($("#"+windowId+" .Conditions1").children("div"));//获取选中的内容
			addConditionsArea(value, windowId);// 加入输入框
			$("input.searchInputText").val(""); // 清空查询内容
		
		});
		
		//法律状态  加入检索
		$("button.btnlawstatus").click(function() {
			var windowId = $(this).attr("v");
			var value = getAreaItemValue($("#"+windowId+" .Conditions1").children("div"));//获取选中的内容
			addConditionsArea(value, windowId);// 加入输入框//系统代码
			$("#"+windowId+" .ztree").children().remove();//删除检索树
		});
		
		//词表加入检索
		$(".wordAddToSearch").click(function (){
			//恢复默认状态
			$(".worditem").removeClass("checkBoxClickBg");
			$(".worditem").addClass("checkBoxBg");
			var value = getAreaItemValueQuotes($("#WordSelectwindow .Conditions1").children("div"));//获取选中的内容
			addConditionsArea(value, "WordSelectwindow");//加入输入框
			$("input.searchInputText").val(""); // 清空查询内容
			
			
		});
		
		// 分类 加入检索
		$("button.btnTree,.addToArea").click(function() {
			var windowId = $(this).attr("v");
			var id = $(this).attr("id")//
			var textvalue = getAreaItemValue($("#"+windowId+" .Conditions1").children("div"));//获取选中的内容
			initType();
			addConditionsArea(textvalue, windowId);// 加入输入框
			if("NiceGroupWindow" == windowId){//类似群号时，将大类添加到尼斯分类检索框中
				addNiceClass(textvalue,windowId);
				}
			deleteConditionsItem();// 清空下面展示区选择内容
		});
		
		// 分类对照表 加入检索
		$("button.areaAddToSearch").click(function() {
			var windowForm = $(this).attr("v");//当前窗体id
			initType();
			var textvalue = getAreaItemValue($("#"+windowForm+" .Conditions1").children("div"));//获取选中的内容
			addConditionsArea(textvalue, windowForm);// 加入输入框
			typePageShow();// 分类显示
			deleteConditionsItem();// 删除展示区内容
			$("#itemsTable").remove();// 删除分类对照关联结果去内容
			//tree显示隐藏grid
			checkValues ="";
		
		});
		
		//加入检索（公司代码）
		$("button.btncompanysearch").click(function (){
			var windowId = $(this).attr("v");
			var list = $("#"+windowId+" .Conditions1").children("div");
			var value = ""; 
			if(list.length>0){
				for(var i= 0 ;i<list.length;i++){
					if(i==0){
						value = "'"+list.eq(i).attr("v").replace(/[ ]/g,"#####") +"'";
					}else{
						
						value += "$$$$'"+list.eq(i).attr("v").replace(/[ ]/g,"#####") +"'";
					}
				}
			}
			addConditionsArea(value, windowId);// 加入输入框//系统代码
			$("#companySearchText").val("");//清空复选框
			$("#"+windowId+" .ztree").children().remove();//删除检索树
			$("#treePage").addClass("displayNone");
			$("#_sysTreeNull").removeClass("displayInline").addClass("displayNone");
			$("#companyWindow .system").click();
		});
		
		// 区域代码  加入检索
		$("#btnOtherCountry").click(function() {
			
			if($("#alltcty").hasClass("displayNone")){
				$(this).addClass("btnGridAreaList")
				$(this).removeClass("btnAllAreaList")
				areaGridListOnClick(this);
			}
			if($("#othertcty").hasClass("displayNone")){
				$(this).addClass("btnAllAreaList");
				$(this).removeClass("btnGridAreaList");
				allAreaListOnClick(this);
			}
			restAreaList();
			$(".china").click();
		});
		
		
		function chinaPageShow() {
			
			$(".chinalaw").removeClass("typeNormal").addClass("typeSelect");
			$("#chinaLawTree").removeClass("displayNone");
			$(".typeButton").removeClass("displayNone");
			$(".contrastButton").addClass("displayNone");
			$("input.searchInputText").val("");
		}
		
		
		///////////词表查询////////////\
	
		
		//同义词
		function createSynonymTable(synonym,id){
			
			$("#"+id+" .synonymTr").remove();
			
			var div = "";
			if(synonym){
				$(synonym).each(
						function(index, dom) {
							
							div += "<tr class='synonymTr'><td style='vertical-align: top'><div class='floatLeft displayInline'>" ;
							div +=" <span class='checkBoxStyle checkBoxBg  ver_alignMid marginLeft10 worditem cursorPointer '  name='ck1' onclick='wordItemClick(this)'></span>" +
							"<span class='wordText '  style='margin-left: 3px;line-height:20px;' >"+dom.key_word+"</span></div></td><td> ";
							if(dom.synonym_word.indexOf(';') !=-1){
								var synArray = dom.synonym_word.split(';');//
								for(var i = 0 ;i < synArray.length ; i++){
									
									div +=	"<div class='floatLeft ' style='line-height:30px;'><span class='checkBoxStyle checkBoxBg ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
									"<span class='wordText'  style='margin-left: 3px' >"+synArray[i]+"</span></div>" ;
								}
							}else{
								
								div +=	"<div class='floatLeft '><span class='checkBoxStyle checkBoxBg ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
								"<span class='wordText'  style='margin-left: 3px' >"+dom.synonym_word+"</span></div>" ;
							}
							
							div += "</td></tr><tr class='synonymTr'> <td colspan='2'><div style='background-color: #d3d3d3;height: 1px'></div></td></tr>";//水平线
							
						});
				$("#"+id+" .wordTable").append(div);//id
			}
		
		}
		//跨语言
		function createCrossLanguageTable(crossLanguage,id){
			var radiospan = $("#WordSelectwindow").find(".keyRadio");// 中英文单选按钮
			var lang = getLanguageValue(radiospan);
			var div = "";
			if(crossLanguage){
				$("#"+id+" .languageTr").remove();
				$("#removeId").remove();
				if("1" == lang ){
					 
					div +="<tr class='languageTr'>" +
					"<td class='' width='15%'><span class='marginLeft20 selectWordTitle'>中文</span> </td>" +
					"<td class=''><span class='marginLeft10 selectWordTitle'>英文</span> </td>" +
					"</tr>";
				}
				if("2" == lang ){
					div +="<tr class='languageTr'>" +
					"<td class='' width='15%'><span class='marginLeft20 selectWordTitle'>英文</span> </td>" +
					"<td class=''><span class='marginLeft10 selectWordTitle'>中文</span> </td>" +
					"</tr>";
				}
				$(crossLanguage).each(
						function(index, dom) {
							//中英文位置调换 
							if("1" == lang ){
								
								div +="<tr class='languageTr'>" +
								"<td  >" +
								"<div class='floatLeft num1'  >" ;
								div +=" <span class='checkBoxStyle checkBoxBg displayInline ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
								"<span class='wordText'  style='margin-left: 3px; line-height: 20px;' v='cn' >"+dom.chinese_word+"</span>" +
								"</div>" +
								"</td>" +
								"<td class=' '> " ;
								if(dom.english_word.indexOf("$$$$$$") != -1){
									var arrayEnglish = dom.english_word.split("$$$$$$");
									for(var i =0; i<arrayEnglish.length;i++){
										div +="<div class='floatLeft num2'>"+//$$$$$$
										" <span class='checkBoxStyle checkBoxBg ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
										"<span class='wordText'  style='margin-left: 3px;line-height:20px;' v='en' >"+arrayEnglish[i]+"</span>" +
										"</div>" ;
									}
								}
								
								 div +="</td>";
							 }
							if("2" == lang ){
								
								div +="<tr class='languageTr'>" +
								"<td  >" +
								"<div class='floatLeft num2'  >" ;
								div +=" <span class='checkBoxStyle checkBoxBg ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
								"<span class='wordText'  style='margin-left: 3px;line-height:20px;' v='en' >"+dom.english_word+"</span>" +
								"</div>" +
								"</td>" +
								"<td class=' '> " ;
								if(dom.chinese_word.indexOf("$$$$$$") != -1){
									var arrayChinese = dom.chinese_word.split("$$$$$$");
									for(var i =0; i<arrayChinese.length;i++){
								div +="<div class='floatLeft num1'>"+
								" <span class='checkBoxStyle checkBoxBg displayInline ver_alignMid marginLeft10 worditem cursorPointer' name='ck1' onclick='wordItemClick(this)'></span>" +
								"<span class='wordText'  style='margin-left: 3px; line-height: 20px;' v='cn' >"+arrayChinese[i]+"</span>"+
								"</div>" ;
									}
								}
								div += "</td>";
							 }
							div +="</tr><tr class='languageTr'> <td colspan='2'>" +
							"<div style='background-color: #d3d3d3;height: 1px'></div>" +
							"</td>" +
							"</tr>";//水平线
								  
					});
				$("#"+id+" .languageTable").append(div);//id
			}
		}
		
		function loadUserData(){
			var radiospan = $("#WordSelectwindow").find(".keyRadio");// 中英文单选按钮
			var lang = getLanguageValue(radiospan);
			person_synonym = new Array();
			getWord("txnGetSynonymWord","select-key:vocabulary_type=1","syn");//同义词
			createSynonymTable(person_synonym,"personWord");//个人同义词
			var param = wordParam(lang,"","1");
			person_crossLanguage = new Array();
			getWord("txnGetCrossLanguage",param,"lang");//个人跨语言
			createCrossLanguageTable(person_crossLanguage,"personWord");//个人跨语言
		}
		//词表选中事件
		function wordItemClick(obj){
			// 关键词点击
				var word = $(obj).parent().find(".wordText").text();
						if ($(obj).parent().children("span[name='ck1']").hasClass("checkBoxClickBg")) {
							$(obj).removeClass("checkBoxClickBg");
							$(obj).addClass("checkBoxBg");
							$("#WordSelectwindow .Conditions1").find(".conditionsItempan").each(function() {
								if ($(this).attr("v") == word) {
									delSpanArea(this);
								}
							});
						} else {
							$(obj).removeClass("checkBoxBg");
							$(obj).addClass("checkBoxClickBg");
							var con = $(".Conditions1").children().length;
							if (con == 0) {
								$("#WordSelectwindow .Conditions1").append("<div class='borderD3 positionRelative conditionsItempan cond areaKeyWord' v='"+word+"' >" + word + "<b class='positionAbsolute' style='bottom:0px; right:8px;cursor: pointer;'>X</b></div>");
							} else {
								$("#WordSelectwindow .Conditions1").append(
										"<span class='linker' onclick='changeWord1(this)' style='color:rgb(152,153,153); width:20px; height: 30px;float: left;margin-left: 8px;margin-right: 8px'>or</span>"
												+ "<div class='borderD3 positionRelative conditionsItempan cond areaKeyWord' v='"+word+"' >" + word + "<b class='positionAbsolute'  style='bottom:0px; right:8px;cursor: pointer;'>X</b></div>");
							}
						}
						//点击展示区内容事件
						$("#WordSelectwindow b").click(function(){
							var word = $(this).parent().attr("v");
							//取消勾选
							$("span.wordText").each(function() {
								if ($(this).text() == word) {
									$(this).prev().removeClass("checkBoxClickBg");
									$(this).prev().addClass("checkBoxBg");
								}
							});
						
							delSpanArea($(this).parent());
							
						});
		}
		
		function getWord(txnCode,url,type){
			$.ajax({
				type : "POST",
				dataType : "xml",
				async:false,
				url : "/" + rootPath + txnCode + ".ajax?",
				data :   encodeURI(url),
				success : function(data) {
					$("#WordSelectwindow").hideLoading();
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					
					if (errCode != "000000") {
					} else {
						
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (record != null) {
							
							$(record).each(
									
								function(index, dom) {
									var ele = $(this);
										
									// 按照个人和系统进行分类
									if ( ele.find("vocabulary_type").text() != "") {//ele.find("vocabulary_id").text() != "" &&
										
										if(ele.find("vocabulary_type").text() == '1'){
											persionData(ele,type);//个人词表
										}
										if(ele.find("vocabulary_type").text() == '2'){
											systemData(ele,type);//系统词表
										}
									}
									
								});
						}
					}
				},
				error : function(data) {
					$("#WordSelectwindow").hideLoading();
					return;
				}
			});
		}
		
		//个人 
		function persionData(obj,type){
			if("syn" == type){//词表
				person_synonym.push({key_word:obj.find("key_word").text(),vocabulary_type:obj.find('vocabulary_type').text(),synonym_word:obj.find('synonym_word').text()});
			}
				
			if("lang" == type){//跨语言
				person_crossLanguage.push({chinese_word:obj.find("chinese_word").text(),vocabulary_type:obj.find('vocabulary_type').text(),english_word:obj.find('english_word').text()});
			}
		}
		
		//系统词表
		function systemData(obj,type){
			if("syn" == type){//词表、
				system_synonym.push({key_word:obj.find("key_word").text(),vocabulary_type:obj.find('vocabulary_type').text(),synonym_word:obj.find('synonym_word').text()});
			}
			
			if("lang" == type){//跨语言
				system_crossLanguage.push({chinese_word:obj.find("chinese_word").text(),vocabulary_type:obj.find('vocabulary_type').text(),english_word:obj.find('english_word').text()});
			}
		}
		
		
	
		// 词表查询切换
		$(".personWord").click(function() {
			if($(this).hasClass("typeSelect")){
				return;
			}
			$(".systemWord").removeClass("typeSelect");
			$(".systemWord").addClass("typeNormal");
			$(this).removeClass("contrastNormal");
			$(this).addClass("typeSelect");
			$(this).css("border-right", "none");
			$(this).css("border-left", "1px solid #d3d3d3");
			$(".systemWord").css("border-left", "1px solid #d3d3d3");
			$("#systemWord").addClass("displayNone");
			$("#personWord").removeClass("displayNone");
			$(".addToWord").addClass("displayNone");
			$(".addToWord2").addClass("displayNone");
			loadUserData();
			
		});
		$(".systemWord").click(function() {
			if($(this).hasClass("typeSelect")){
				return;
			}
			$(this).removeClass("typeNormal");
			$(this).addClass("typeSelect");
			$(".personWord").removeClass("typeSelect");
			$(".personWord").addClass("contrastNormal");
			$(this).css("border-left", "none");
			$(this).css("border-right", "1px solid #d3d3d3");
			$(".personWord").css("border-right", "1px solid #d3d3d3");
			$(".personWord").css("border-left", "1px solid #d3d3d3");
			$("#systemWord").removeClass("displayNone");
			$("#personWord").addClass("displayNone");
			//同义词
			if($(".synonym").hasClass("typeSelect")){
				$("#WordSelectwindow .addToWord").removeClass("displayNone");
				
			} 
			if($(".Crosslanguage").hasClass("typeSelect")){
				$("#WordSelectwindow .addToWord2").removeClass("displayNone");
			}
			
			
			
		});
		$(".Crosslanguage").click(function() {
			$(".CrosslanguageDiv").removeClass("displayNone");
			$(".synonymDiv").addClass("displayNone");
			$(".Crosslanguage").addClass("typeSelect");
			$(".Crosslanguage").removeClass("typeNormal");
			$(this).removeClass("cursorPointer");
			$(this).css("border-right", "1px solid #d3d3d3");
			$(this).css("border-left", "none");
			$(".synonym").addClass("typeNormal");
			$(".synonym").addClass("cursorPointer");
			$(".synonym").removeClass("typeSelect");
			
			$("#WordSelectwindow .addToWord").addClass("displayNone");
			if($(".systemWord").hasClass("typeSelect")){
				$("#WordSelectwindow .addToWord2").removeClass("displayNone");
				
			} 
			$("#WordSelectwindow .radiosDiv").removeClass("displayNone");
		
		});
		$(".synonym").click(function() {
			$(".CrosslanguageDiv").addClass("displayNone");
			$(".synonymDiv").removeClass("displayNone");
			$(".synonym").addClass("typeSelect");
			$(".synonym").removeClass("typeNormal");
			$(this).removeClass("cursorPointer");
			$(this).css("border-right", "1px solid #d3d3d3");
			$(".Crosslanguage").addClass("cursorPointer");
			$(".Crosslanguage").addClass("typeNormal");
			$(".Crosslanguage").removeClass("typeSelect");
			$("#WordSelectwindow .addToWord2").addClass("displayNone");
			if($(".systemWord").hasClass("typeSelect")){
				$("#WordSelectwindow .addToWord").removeClass("displayNone");
				
			}
			$("#WordSelectwindow .radiosDiv").addClass("displayNone");

		});
		
	
		//加入词表(跨语言)点击
		$(".addToWord2").click(function(){
			var windowId = $(this).attr("v");
			$("#"+windowId+" .addToWordDiv2").removeClass("displayNone");
			var wordItem = $("#"+windowId+" .wordItem");
			var s = $("#"+windowId+" #systemWord .languageTr .num1 .wordText ");
			
			var cnList = $(wordItem).find(".wordCnList");
			var enList = $(wordItem).find(".wordEnList");
			//遍历选中行
			var tr = $("#"+windowId+" #systemWord .languageTr");
			for ( var i= 0;  i< tr.length; i++) {
				var array_element = tr[i];
				var  word1 = $(array_element).find(".num1 .wordText").text();
				var  word2 = $(array_element).find(".num2 .wordText").text();
				if( $(array_element).find("span").hasClass("checkBoxClickBg")){//判断是否有选中内容 checkBoxStyle
				
					if(null == cnList || cnList.length == 0){
						
						$(wordItem).append("<div  class='wordCnList' style='width:150px;float:left;height: 20px;line-height: 20px; margin-left: 10px; margin-right: 5px;overflow:auto'>" + word1 +"</div>");//中
						$(wordItem).append("<div  class='wordEnList' style='width:160px;float:left;height: 20px;line-height: 20px; margin-left: 10px; margin-right: 5px;overflow:auto'>" + word2 +"</div>");//英
					}else{
						var s = false;
						for(var j = 0 ;j <cnList.length;j++){
							if($(cnList[j]).text()!= "" && $(cnList[j]).text() == word1 ){
								
								s = true ;
								break;
							}
						}
						if(!s){
							
							$(wordItem).append("<div  class='wordCnList' style='width:150px;float:left;height: 20px;line-height: 20px; margin-left: 10px; margin-right: 5px;overflow:auto'>" + word1 +"</div>");//中
							$(wordItem).append("<div  class='wordEnList' style='width:160px;float:left;height: 20px;line-height: 20px; margin-left: 10px; margin-right: 5px;overflow:auto'>" + word2 +"</div>");//英
						}
					}
					
					
				}
			}
			
		});
		//加入词表点击
		$(".addToWord").click(function(){
			var windowId = $(this).attr("v");
			$("#"+windowId+" .addToWordDiv").removeClass("displayNone");
			var wordListDiv = $("#"+windowId+" .wordList");
			wordListDiv.html("");
			$("#"+windowId+" .oldword").val("");
			
			wordList ="";//全局
			for(var i = 0; i < $("#"+windowId+" .Conditions1").children("div").length;i++)
			{
				wordListDiv.append("<div class=' wordlist-word'>"+ $(".Conditions1").children("div").eq(i).attr("v") +"</div>");
				if(wordList){
					
					wordList = wordList +"&&"+$(".Conditions1").children("div").eq(i).attr("v");//%3B
				}else{
					wordList = $(".Conditions1").children("div").eq(i).attr("v");
				}
			}
			
		});
		
		
		//加入词表取消
		$(".cancelWordDiv,.cancelWordDivCom").click(function(){
			$(".addToWordDiv").addClass("displayNone");
		});
		$(".cancelWordDiv2").click(function(){
			$(".addToWordDiv2").addClass("displayNone");
		});
		
		//加入词表（确认）
		$(".confirmWordDiv").click(function(){
			
			var oldword = $("#oldword").val();
			
			if(wordList.length>50){
				
				$("#wordList").css("color","red");
				$.fz_common.alert("提示","内容过多请重新填写");
				return ;
			}else{
				if(wordList.indexOf("&&") != -1){
					wordList = wordList.replace("&&",";");
					
				}
				$("#wordList").css("color","");
			}
			
			if($(".synonym").hasClass("typeSelect")){
				
				try {												
					
					var param =  "record:synonym_word="+wordList+"&record:key_word="+oldword+"&record:vocabulary_type=1";//同义词
					getWord("txnInsertPersonWord",param,"syn");
					$.fz_common.alert("提示","添加成功");
					
					person_synonym = new Array();
					getWord("txnGetSynonymWord","select-key:vocabulary_type=1","syn");//个人同义词
					createSynonymTable(person_synonym,"personWord");//同义词
					
				} catch (e) {
					$.fz_common.alert("提示","获取服务器信息错误");
					return;
				}
				
			}
		/*	if($(".Crosslanguage").hasClass("typeSelect")){  
				try{
					
					var param = "record:chinese_word="+oldword+"&record:english_word="+wordList+"&record:vocabulary_type=1";//跨语言
					getWord("txnInsertPersonCL",param,"lang");
					$.fz_common.alert("提示","添加成功");
					person_crossLanguage = new Array();
					var param = "select-key:chinese_word="+oldword+"&select-key:english_word="+wordList+"&select-key:vocabulary_type=1";//跨语言
					getWord("txnGetCrossLanguage",param,"lang");//跨语言
					createCrossLanguageTable(person_crossLanguage,"personWord");//个人跨语言
				
				} catch (e){
					$.fz_common.alert("提示","获取服务器信息错误");
					return;
				}
			}*/
			
			
			$(".addToWordDiv").addClass("displayNone");//隐藏词表
		});
		
		//加入词表(跨语言)（确认）
		$(".confirmWordDiv2").click(function(){
			
			var wordItem = $("#WordSelectwindow .wordItem");
			var cnList = $(wordItem).find(".wordCnList");
			var enList = $(wordItem).find(".wordEnList");
			try{
				for(var j = 0 ;j <cnList.length;j++){
					var param = "record:chinese_word="+ $(cnList[j]).text() +"&record:english_word="+ $(enList[j]).text() +"&record:vocabulary_type=1";//跨语言
					getWord("txnInsertPersonCL",param,"lang");
					$.fz_common.alert("提示","添加成功。");
				}
					
				person_crossLanguage = new Array();
				getWord("txnGetCrossLanguage","record:vocabulary_type=1","lang");//跨语言
				createCrossLanguageTable(person_crossLanguage,"personWord");//个人跨语言
			} catch (e){
				$.fz_common.alert("提示","获取服务器信息错误");
				return;
			}
			
				closeAddToWord2(wordItem);
			
		});
		
		function closeAddToWord2(wordItem){
			$(".addToWordDiv2").addClass("displayNone");//隐藏词表
			$(wordItem).html("");
		}
		//加入词表(公司代码)
		$(".confirmWordDivCom").click(function(){
			var companyId = $("#oldword1").val();//代码
			if($.trim(companyId) == ""){
				
				$("#oldword1").css("border-color","red");
				//$.fz_common.alert("提示","请输入公司代码。");
				return;
			}else{
				$("#oldword1").css("border-color","companyId");
				
			}
			//查询提示是否存在
			selectData("txnSelectCompany.ajax","select-key:company_name="+ companyId ,companyId);
			
			showCompanyTree("txnGetPerCompanyTree.ajax","select-key:nodeName=" ,$("#_perTreeNull"),$("#companyPerTreeDemo"),com_PerSetting);//检索个人词表
			
			$(".addToWordDiv").addClass("displayNone");//隐藏弹框
		});
		//添加公司个人代码
		function insertCompany(companyName,companyId){
			var dataParam = "select-key:company_name="+ companyName + "&select-key:company_id=" +companyId;
			insertData("txnInsertCompany.ajax",dataParam);//添加数据
		
		}
		
		function insertData(txnCode,dataParam){
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + txnCode,
				data : encodeURI(dataParam),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
					} else {
						//刷新列表
					
					}
				},
				error : function(data) {
				}
			});
		}
		function selectData(txnCode,dataParam,companyId){
			
			var _addComFunction = function() {
				var com_id = $("#oldword1").val();//代码
				if(wordList.indexOf('&&') != -1){
					
					var arrList = wordList.split('&&');
					for(var i=0; i<arrList.length;i++){
						 insertCompany(arrList[i],com_id);
					}
				}else{
					
					 insertCompany(wordList,com_id);
				}
				$.fz_common.alert("提示","词表加入成功");
			}
			
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + txnCode,
				data : encodeURI(dataParam),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
					} else {
						//刷新列表
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (null != record && "" != record && record.find("count").text() != "") {
							if(record.find("count").text() =="1"){
								//$.fz_common.alert("提示",value+"已存在个人词表中，如确认添加将替换原数据，是否确认添加？");
								var _otherButtons = [ "确定" ];
								var _otherButtonStyles = [ 'btn-danger' ];
								var _otherFunction = [ _addComFunction ];

								$.fz_common.confirm("提示","【"+companyId+"】已存在个人词表中，如确认将追加到原数据下，是否确认添加？", null, _otherButtons, _otherButtonStyles, _otherFunction);
							}else{
								_addComFunction();
							}
							
								
						}
					}
				},
				error : function(data) {
				}
			});
		}
		
		//ipc 与 fi 分类对照 tab事件
		function ipcTabSelectClick(windowId){
			var contrastType = $("#"+ windowId +" .contrastPage").find(".divSmallSelect").attr("v");
			if(contrastType == "cpc"){
				$("#smallcpcTab").click();
			}if(contrastType == "uc"){
				$("#smallucTab").click();
			}if(contrastType == "fi" && $("#IPCwindow  .contrastPage .gridListDiv").hasClass("displayNone")){//grid为隐藏状态时
				$("#smallfiTab").click();
			}if(contrastType == "gm"){
				$("#smallgmTab").click();
			}if(contrastType == "fi_ipc" && $("#FIWindow  .contrastPage .gridListDiv").hasClass("displayNone")){//grid隐藏状态时
				$("#fi_smallipcTab").click();
			}if(contrastType == "fi_ft" && $("#FIWindow  .contrastPage .gridListDiv").hasClass("displayNone")){
				$("#fi_smallftermTab").click();
			}
		}
		
		// 分类号码radioBox样式更改  中文
		$('.radioCatergoriesDiv').click(function() {
			var windowFormId = $(this).attr("v");
			$("#" + windowFormId).find(".radioCatergories").toggleClass("radioChecked", true);
			$("#" + windowFormId).find(".radioCatergories").toggleClass("radioNormal", false);
			$("#" + windowFormId).find('.radioKeyWords').toggleClass("radioNormal", true);
			$("#" + windowFormId).find('.radioKeyWords').toggleClass("radioChecked", false);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioChecked", false);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioNormal", true);
			//语言切换
			zhLanguageClick(windowFormId);
			
		});
		
		function zhLanguageClick(windowFormId){
			if ("IPCwindow" == windowFormId) {
				//显示树的时候
				if($("#IPCwindow .gridListDiv").hasClass("displayNone")){
					setIpcLanguage(zIPCCnNodes,1);
				}
				
				//显示列表的时候
				$("#ipclanguage").val('1');
				$("#sIpclanguage").val('1');
				$("#IPCwindow .enDiv").addClass("displayNone");
				$("#IPCwindow .zhDiv").removeClass("displayNone");
			}
			
			if("CPCwindow" == windowFormId){
				if ($("#CPCwindow .contrast").hasClass("contrastSelect")) {
					$("#cpc_smallIpcTreeDemo").children().remove();
					initZTree($("#cpc_smallIpcTreeDemo"), contrastSetting, zIPCCnNodes, "ipcjson", 1);
					$("#sCpclanguage").val('1');
				}
				$("#CPCwindow .zhDiv").siblings("div").addClass("displayNone");
				$("#CPCwindow .zhDiv").removeClass("displayNone");
				
			}
			if ("UCWindow" == windowFormId) {
				if ($("#UCWindow .contrast").hasClass("contrastSelect")) {//分类对照
					$("#uc_smallIpcTreeDemo").children().remove();
					initZTree($("#uc_smallIpcTreeDemo"), contrastSetting, zIPCCnNodes, "ipcjson", 1);
					$("#sUclanguage").val('1');
				}
				$("#UCWindow .enDiv").addClass("displayNone");
				$("#UCWindow .zhDiv").removeClass("displayNone");
			}
			if("FIWindow" == windowFormId){
				if ($("#FIWindow .contrast").hasClass("contrastSelect")) {
					ipcTabSelectClick("FIWindow");
				}
				$("#FIWindow .zhDiv").siblings("div").addClass("displayNone");
				$("#FIWindow .zhDiv").removeClass("displayNone");

			}
			if ("LocanoWindow" == windowFormId) {
				$("#locanoTreeDemo").children().remove();
				initZTree($("#locanoTreeDemo"), setting, zZhLocanoNodes, "locanojson", 1);
				$("#LocanoWindow .enDiv").addClass("displayNone");
				$("#LocanoWindow .zhDiv").removeClass("displayNone");
				$("#locanolanguage").val('1');
			}
			if ("NiceGroupWindow" == windowFormId) {
				$("#niceGroupTreeDemo").children().remove();
				initZTree($("#niceGroupTreeDemo"), setting, zNiceClassGroupCnNodes, "nicegroupjson/niceclassgroup", 1);
				$("#NiceGroupWindow .enDiv").addClass("displayNone");
				$("#NiceGroupWindow .zhDiv").removeClass("displayNone");
				
			}
			if ("NiceWindow" == windowFormId) {
				$("#NiceWindow .enDiv").addClass("displayNone");
				$("#NiceWindow .zhDiv").removeClass("displayNone");
				$("#nclanguage").val('1');
			}
		
			if ("ICSWindow" == windowFormId) {
				$("#icsTreeDemo").children().remove();
				initZTree($("#icsTreeDemo"), setting, zZhIcsNodes, "icsjson", 1);
				$("#ICSWindow .enDiv").addClass("displayNone");
				$("#ICSWindow .zhDiv").removeClass("displayNone");
				
			}
			if ("SfxWindow" == windowFormId) {
				$("#sfxTreeDemo").children().remove();
				initZTree($("#sfxTreeDemo"), setting, zZhSfxNodes, "sfxjson", 1);
				$("#SfxWindow .enDiv").addClass("displayNone");
				$("#SfxWindow .zhDiv").removeClass("displayNone");
				$("#sfxlanguage").val('1');
			}
		}
		//英文
		$('.radioKeyWordsDiv').click(function() {
			var windowFormId = $(this).attr("v");
			$("#" + windowFormId).find(".radioKeyWords").toggleClass("radioChecked", true);
			$("#" + windowFormId).find(".radioKeyWords").toggleClass("radioNormal", false);
			$("#" + windowFormId).find('.radioCatergories').toggleClass("radioNormal", true);
			$("#" + windowFormId).find('.radioCatergories').toggleClass("radioChecked", false);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioNormal", true);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioChecked", false);
			//语言切换
			enLanguageClick(windowFormId);
			
		
		});
		
		function enLanguageClick(windowFormId){
			if ("IPCwindow" == windowFormId) {
				setIpcLanguage(zIPCEnNodes,2);
				$("#IPCwindow .enDiv").siblings("div").addClass("displayNone");
				$("#IPCwindow .enDiv").removeClass("displayNone");
				$("#ipclanguage").val('2');
			}
			
			if("CPCwindow" == windowFormId){
				if ($("#CPCwindow .contrast").hasClass("contrastSelect")) {
					$("#cpc_smallIpcTreeDemo").children().remove();
					initZTree($("#cpc_smallIpcTreeDemo"), contrastSetting, zIPCEnNodes, "ipcjson", 2);
					$("#sCpclanguage").val('2');
				}
				$("#CPCwindow .enDiv").siblings("div").addClass("displayNone");
				$("#CPCwindow .enDiv").removeClass("displayNone");
				
			}
			
			if ("FIWindow" == windowFormId) {
				if ($("#FIWindow .type").hasClass("typeSelect")) {//分类
					$("#fiTreeDemo").children().remove();
					initZTree($("#fiTreeDemo"), setting, zFIEnNodes, "fijson", 2);
					$("#filanguage").val('2');
				}
				if ($("#FIWindow .contrast").hasClass("contrastSelect")) {//分类对照
					ipcTabSelectClick("FIWindow");
					$("#sFilanguage").val('2');
				}
				$("#FIWindow .enDiv").siblings("div").addClass("displayNone");
				$("#FIWindow .enDiv").removeClass("displayNone");
			}
			
			if ("UCWindow" == windowFormId) {
				if ($("#UCWindow .contrast").hasClass("contrastSelect")) {//分类对照
					$("#uc_smallIpcTreeDemo").children().remove();
					initZTree($("#uc_smallIpcTreeDemo"), contrastSetting, zIPCEnNodes, "ipcjson", 2);
					$("#sUclanguage").val('2');
				}
				$("#UCWindow .zhDiv").addClass("displayNone");
				$("#UCWindow .enDiv").removeClass("displayNone");
			}
			
			if ("FtermWindow" == windowFormId) {
				if ($("#FtermWindow .type").hasClass("typeSelect")) {//分类选中
					$("#ftermTreeDemo").children().remove();
					initZTree($("#ftermTreeDemo"), setting, zFTERMNodes, "ftermjson/00000", 2);
					$("#ftermTreeDemo_1").addClass("displayNone");
					$("#ftermlanguage").val('2');
				}
				if ($("#FtermWindow .contrast").hasClass("contrastSelect")) {//分类对照选中
					$("#ft_smallFiTreeDemo").children().remove();
					initZTree($("#ft_smallFiTreeDemo"), contrastSetting, zFIEnNodes, "fijson", 2);
					$("#sFiclanguage").val('2');
					
				}
				$("#FtermWindow .jpDiv").addClass("displayNone");
				$("#FtermWindow .enDiv").removeClass("displayNone");
			}
			
			if ("LocanoWindow" == windowFormId) {//洛迦诺切换英文
					$("#locanoTreeDemo").children().remove();
					initZTree($("#locanoTreeDemo"), setting, zEnLocanoNodes, "locanojson", 2);
					$("#LocanoWindow .zhDiv").addClass("displayNone");
					$("#LocanoWindow .enDiv").removeClass("displayNone");
					$("#locanolanguage").val('2');
			}
			
			if ("NiceGroupWindow" == windowFormId) {//类似群号切换英文
				$("#niceGroupTreeDemo").children().remove();
				initZTree($("#niceGroupTreeDemo"), setting, zNiceClassGroupEnNodes, "nicegroupjson/niceclassgroup", 2);
				$("#NiceGroupWindow .zhDiv").addClass("displayNone");
				$("#NiceGroupWindow .enDiv").removeClass("displayNone");
			}
			
			if ("NiceWindow" == windowFormId) {
				$("#NiceWindow .zhDiv").addClass("displayNone");
				$("#NiceWindow .enDiv").removeClass("displayNone");
				$("#nclanguage").val('2');
			}
			
			if ("ICSWindow" == windowFormId) {//国际标准分类切换英文
				$("#icsTreeDemo").children().remove();
				initZTree($("#icsTreeDemo"), setting, zEnIcsNodes, "icsjson", 2);
				$("#ICSWindow .zhDiv").addClass("displayNone");
				$("#ICSWindow .enDiv").removeClass("displayNone");
			}
			
			if ("SfxWindow" == windowFormId) {//科学分类切换英文
				$("#icsTreeDemo").children().remove();
				initZTree($("#sfxTreeDemo"), setting, zEnSfxNodes, "sfxjson", 2);
				
				$("#SfxWindow .zhDiv").addClass("displayNone");
				$("#SfxWindow .enDiv").removeClass("displayNone");
				$("#sfxlanguage").val('2');
			}
			
		}
		
		//日文
		$('.radioKeyWordsDiv1').click(function() {
			var windowFormId = $(this).attr("v");
			$("#" + windowFormId).find(".radioCatergories").toggleClass("radioChecked", false);
			$("#" + windowFormId).find(".radioCatergories").toggleClass("radioNormal", true);
			$("#" + windowFormId).find('.radioKeyWords').toggleClass("radioNormal", true);
			$("#" + windowFormId).find('.radioKeyWords').toggleClass("radioChecked", false);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioChecked", true);
			$("#" + windowFormId).find(".radioKeyWords1").toggleClass("radioNormal", false);
			//语言切换
			jpLanguageClick(windowFormId);
			
		});
		
		function jpLanguageClick(windowFormId){
			var winType = $("#winType").val();
			if("tools" == winType){//工具栏
				setting = contrastSetting;
			}
			
			if("IPCwindow" == windowFormId){
				setIpcLanguage("","");
				$("#IPCwindow .jpDiv").siblings("div").addClass("displayNone");
				$("#IPCwindow .jpDiv").removeClass("displayNone");
			}
			if ("FIWindow" == windowFormId) {
				if ($("#FIWindow .type").hasClass("typeSelect")) {
					
					$("#fiTreeDemo").children().remove();
					initZTree($("#fiTreeDemo"), setting, zFIJpNodes, "fijson", 3);
					$("#filanguage").val('3');
				}
				if($("#FIWindow .contrast").hasClass("contrastSelect")){
					ipcTabSelectClick("FIWindow");
					$("#sFilanguage").val('3');
				}
				$("#FIWindow .jpDiv").siblings("div").addClass("displayNone");
				$("#FIWindow .jpDiv").removeClass("displayNone");
			}
			if ("FtermWindow" == windowFormId) {
				if ($("#FtermWindow .type").hasClass("typeSelect")) {
					$("#ftermTreeDemo").children().remove();
					initZTree($("#ftermTreeDemo"), setting, zFTERMNodes, "ftermjson/00000", 3);
					$("#ftermTreeDemo_1").addClass("displayNone");
				}
				if ($("#FtermWindow .contrast").hasClass("contrastSelect")) {//分类对照选中
					$("#ft_smallFiTreeDemo").children().remove();
					initZTree($("#ft_smallFiTreeDemo"), contrastSetting, zFIJpNodes, "fijson", 3);
				}
				$("#FtermWindow .jpDiv").siblings("div").addClass("displayNone");
				$("#FtermWindow .jpDiv").removeClass("displayNone");
				$("#ftermlanguage").val('3');
			}
		}
		
		function setIpcLanguage(zNodes,num){
			var winType = $("#winType").val();
			if(zNodes){
				if ($("#IPCwindow .type").hasClass("typeSelect")) {
					$("#ipcTreeDemo").children().remove();
					if("tools" == winType){//工具栏
						setting = contrastSetting;
					}
					initZTree($("#ipcTreeDemo"), setting, zNodes, "ipcjson", num);
				}
				
			}
			//分类对照
			if($("#IPCwindow .contrast").hasClass("contrastSelect")){
				ipcTabSelectClick("IPCwindow");
			}
		}
	
		/**
		 * 检索框为空
		 */
		function textIsEmpty(windowForm, treeDiv, gridDiv, gridButton, treeButton) {
			if (treeDiv.hasClass("displayNone")) {
				setZbtnTree($(treeDiv).attr("id"), false);
				$("#" + windowForm).find(".conditionsItempan").each(function() {
					$(this).next("span").remove();
					$(this).remove();
				});
			}
			treeShow(gridButton, treeButton);
			treeDiv.removeClass("displayNone");
			gridDiv.addClass("displayNone");
			filterDivHide();
			removeFilterChildren();
		}
		
		/**
		 * 分类对照表grid列表加载内容
		 */
		function contrastQuery(windowForm, searchText, languageInput,language, classificationType, gridDiv) {
			languageInput.val(language);
			if ("IPCwindow" == windowForm) {// ipc窗体//ipc 分类对照检索
				
				mGrid_gridsmallCpc_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);// 高亮
					languageInput.val(language);//检索条件
					showLangDiv(language,gridDiv);//显示对应语种
						
				});
			} else if ("UCWindow" == windowForm) {// uc 分类对照检索
				mGrid_gridSmallIpc_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);// 高亮
					languageInput.val(language);//检索条件
					showLangDiv(language,$("#UCWindow"));//显示对应语种
				});
			} else if ("CPCwindow" == windowForm) {// CPC
				// 分类对照检索
			
				mGrid_gridCpcSmallIpc_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);// 高亮
					languageInput.val(language);//检索条件
					showLangDiv(language,$("#CPCwindow"));//显示对应语种
				});
			} else if ("FtermWindow" == windowForm) {// Fterm
				// 分类对照检索
				mGrid_gridFtSmallFi_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);// 高亮
					languageInput.val(language);//检索条件
					showLangDiv(language,$("#FtermWindow"));//显示对应语种
				});
			} else if ("FIWindow" == windowForm) {// FI 分类对照
				// 检索
				
				mGrid_gridFiSmallIpc_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);// 高亮
					showLangDiv(language,$("#FIWindow"));//对应语种
					languageInput.val(language);//参数
				});
			}
		}
		//显示对应语言
		function showLangDiv(language,gridDiv){
			if(language == '1'){
				gridDiv.find(".zhDiv").removeClass("displayNone");
				gridDiv.find(".zhDiv").siblings("div").addClass("displayNone");
			}
			if(language == '2'){
				gridDiv.find(".enDiv").removeClass("displayNone");
				gridDiv.find(".enDiv").siblings("div").addClass("displayNone");
			}
			if(language == '3'){
				gridDiv.find(".jpDiv").removeClass("displayNone");
				gridDiv.find(".jpDiv").siblings("div").addClass("displayNone");
			}
		}
		/**
		 * Grid列表加载内容
		 */
		function typeQuery(windowForm, searchText, languageInput) {
			var winType = $("#winType").val();
			if ("IPCwindow" == windowForm) {// ipc窗体
		
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchIpcCount.ajax", dataParam, "IpcResult", windowForm);// ipc分组统计
		
				// 分组显示数目
				if ('2' == languageInput) {// 切换语言
					$(".enDiv").removeClass("displayNone");
					$(".zhDiv").addClass("displayNone");
				} else {
					$(".enDiv").addClass("displayNone");
					$(".zhDiv").removeClass("displayNone");
		
				}
				mGrid_gridIpc_obj.query(1, function() {// 异步加载
					anchorRedirect(windowForm, searchText);
					divsiling(windowForm, languageInput);// 语言切换
					if("tools" == winType){
						$("#"+windowForm+" .tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
						$("#"+windowForm).find("span.getAllCode").hide();
					}
					$("#ipcNum").text("");
					
					$("#ipcNum").text($("#IPCwindow #mGrid_gridIpc .modelGridPaginatorContainer .totalnumber").text());
				});
		
			} else if ("CPCwindow" == windowForm) {// cpc窗体
		
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchCpcCount.ajax", dataParam, "cpcResult", windowForm);// cpc分组统计
		
				mGrid_gridCpc_obj.query(1, function() {
					anchorRedirect(windowForm, searchText);
					if("tools" == winType){
						$("#"+windowForm+" .tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
						$("#"+windowForm).find("span.getAllCode").hide();
					}
					$("#cpclanguage").val("2");
					$("#cpcNum").text("");
					$("#cpcNum").text($("#CPCwindow #mGrid_gridCpc .modelGridPaginatorContainer .totalnumber").text());
				});
		
			} else if ("UCWindow" == windowForm) {// uc窗体
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchUcCount.ajax", dataParam, "ucResult", windowForm);// cpc分组统计
				mGrid_gridUc_obj.query(1, function() {
					anchorRedirect(windowForm, searchText);
					if("tools" == winType){
						$("#"+windowForm+" .tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
						$("#"+windowForm).find("span.getAllCode").hide();
					}
					$("#ucNum").text("");
					$("#ucNum").text($("#UCWindow #mGrid_gridUc .modelGridPaginatorContainer .totalnumber").text());
				});
				//$("#UCWindow .typePage").children("div").css("height","230px");
				
			} else if ("FIWindow" == windowForm) {// fi窗体
				
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchFiCount.ajax", dataParam, "fiResult", windowForm);// fi分组统计
		
				mGrid_gridFi_obj.query(1, function() {
					anchorRedirect(windowForm, searchText);
					divsiling(windowForm, languageInput);// 语言切换
					$("#fiNum").text("");
					$("#fiNum").text($("#FIWindow #mGrid_gridFi .modelGridPaginatorContainer .totalnumber").text());
					if ('2' == languageInput) {
						$(".enDiv").removeClass("displayNone");
						$(".jpDiv").addClass("displayNone");
					} else {
						$(".enDiv").addClass("displayNone");
						$(".jpDiv").removeClass("displayNone");
		
					}
					if("tools" == winType){
						$("#"+windowForm+" .tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
						$("#"+windowForm).find("span.getAllCode").hide();
					}
				});
		
			} else if ("FtermWindow" == windowForm) {// fterm窗体
				
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchFtCount.ajax", dataParam, "ftResult", windowForm);// cpc分组统计
				mGrid_gridFterm_obj.query(1, function() {
					anchorRedirect(windowForm, searchText);
					divsiling(windowForm, languageInput);// 语言切换
					$("#ftermNum").text("");
					$("#ftermNum").text($("#FtermWindow #mGrid_gridFterm .modelGridPaginatorContainer .totalnumber").text());
					if ('2' == languageInput) {
						$(".enDiv").removeClass("displayNone");
						$(".jpDiv").addClass("displayNone");
					} else {
						$(".enDiv").addClass("displayNone");
						$(".jpDiv").removeClass("displayNone");
		
					}
					if("tools" == winType){
						$("#"+windowForm+" .tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
						$("#"+windowForm).find("span.getAllCode").hide();
					}
				});
				
			} else if ("LocanoWindow" == windowForm) {// 洛迦诺窗体
				
				var dataParam = "select-key:title=" + searchText + "&select-key:language=" + languageInput;
				findDataCount("txnSearchLocanoCount.ajax", dataParam, "loResult", windowForm);// cpc分组统计
				grid_Query2(mGrid_gridLocano_obj,windowForm,searchText,languageInput);
			}else if ("NiceWindow" == windowForm) {// 尼斯分类中国窗体
		
				grid_Query2(mGrid_gridNice_obj,windowForm,searchText,languageInput);
			}else if ("NiceUsaWindow" == windowForm) {// 尼斯分类美国窗体
		
				grid_Query2(mGrid_gridNiceUsa_obj,windowForm,searchText,languageInput);
			}else if ("NiceGroupWindow" == windowForm) {// 类似群号窗体
		
				grid_Query2(mGrid_gridNiceGroup_obj,windowForm,searchText,languageInput);
			}else if ("ICSWindow" == windowForm) {// 国际标准分类窗体
					
				grid_Query2(mGrid_gridICS_obj,windowForm,searchText,languageInput);
			}else if ("SfxWindow" == windowForm) {//科学分类窗体
				
				grid_Query2(mGrid_gridSfx_obj,windowForm,searchText,languageInput);
			}else if ("CCSWindow" == windowForm) {// 中国标准分类窗体
				
				grid_Query(mGrid_gridCCS_obj,windowForm,searchText,languageInput);
			}else if ("CnlibWindow" == windowForm) {//中图分类窗体
		   
				grid_Query(mGrid_gridCnLib_obj,windowForm,searchText,languageInput);
			}else if ("AsjcWindow" == windowForm) {//中图分类窗体
				
				grid_Query(mGrid_gridAsjc_obj,windowForm,searchText,languageInput);
			}else if ("JcrWindow" == windowForm) {//Jcr分类窗体
				
				grid_Query(mGrid_gridJcr_obj,windowForm,searchText,languageInput);
			}else if ("CjcrWindow" == windowForm) {//Cjcr分类窗体
				
				grid_Query(mGrid_gridCjcr_obj,windowForm,searchText,languageInput);
			}else if ("CourtAreaWindow" == windowForm) {//法律名称窗体
				
				grid_Query(mGrid_gridCourt_obj,windowForm,searchText,languageInput);
			}else if("agencyWindow" == windowForm){//代理机构
				
				grid_Query(mGrid_gridAge_obj,windowForm,searchText,languageInput);
			}               
			
		}
		
		function grid_Query(grid_obj,windowForm,searchText,language){
			grid_obj.query(1, function() {
				anchorRedirect(windowForm, searchText);
				divsiling(windowForm, language);// 语言切换
			
			});
		}
		
		function grid_Query2(grid_obj,windowForm,searchText,language){
			grid_obj.query(1, function() {
		
				anchorRedirect(windowForm, searchText);
				divsiling(windowForm, language);// 语言切换
				if ('2' == language) {
					$(".enDiv").removeClass("displayNone");
					$(".zhDiv").addClass("displayNone");
				} else {
					$(".enDiv").addClass("displayNone");
					$(".zhDiv").removeClass("displayNone");
		
				}
		
			});
			
		}
		/**
		
		 * 查询数量
		 */
		function findDataCount(txnCode, dataParam, resultDivId, windowId) {
		
			var k = 0;
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + txnCode,
				data : encodeURI(dataParam),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
					} else {
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (record != null) {
							var spans = "";
							$(record).each(
									function(index, dom) {
									
										// 获取div
										var ele = $(this);
										if (ele.find("count").text() != null && ele.find("symbol").text() != "") {
											// 增加按钮
											if("UCWindow" == windowId && 6== index){spans+="<br><span style='margin-right:90px;'></span>"}
											spans += "<span style='margin-left:10px;display:line; width:100px;'>&nbsp;" + ele.find("symbol").text() + "&nbsp;(<span style ='color:blue;cursor: pointer;' onclick='findDataBySymbol(\""
													+ ele.find("symbol").text() + "\",\"" + windowId + "\",this);'>&nbsp; " + ele.find("count").text() + "&nbsp;</span> )</span>";
										}
		
									});
							$("#" + resultDivId).append(spans);
						}
					}
				},
				error : function(data) {
					$("#" + resultDivId + " span").remove();
				}
			});
		}
		
		function findCountry(txnCode, dataParam, resultDivId, windowId) {
			$("#" + resultDivId + " span").remove();
			var k = 0;
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + txnCode,
				data : encodeURI(dataParam),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
					} else {
						var record = $.fz_common.getXmlNodeValues(data, "context>select-key");
						if (record != null) {
							var spans = "";
							$(record).each(
									function(index, dom) {
										
										// 获取div
										var ele = $(this);
										if (ele.find("codevalue").text() != null ) {
											// 增加按钮
		//									if("provinceWindow" == windowId && 13== index){spans+="<br><span style='margin-right:0px;'></span>"}
											spans += "<span style ='color:blue;cursor: pointer;margin-left:10px;display:line; width:100px;' onclick='findDataBySymbol(\""
											+ ele.find("codevalue").text() + "\",\"provinceWindow\",this);'>&nbsp;"+ ele.find("codevalue").text() +" &nbsp;</span> ";
										}
										
									});
							$("#" + resultDivId).append(spans);
						}
					}
				},
				error : function(data) {
					$("#" + resultDivId + " span").remove();
				}
			});
		}
		
		function gridShow(grid, tree) {
			grid.removeClass("displayNone");
			tree.addClass("displayNone");
		}
		
		function treeShow(grid, tree) {
			grid.addClass("displayNone");
			tree.removeClass("displayNone");
		}
		
		
		
		//隐藏筛选
		function filterDivHide(){
			$("#IpcResult").addClass("displayNone");
			$("#cpcResult").addClass("displayNone");	
			$("#fiResult").addClass("displayNone");
			$("#ftResult").addClass("displayNone");
			$("#ucResult").addClass("displayNone");
		
		}
		
		//展示筛选
		function filterDivShow(){
			$("#IpcResult").removeClass("displayNone");
			$("#IpcResult a strong").text("");
			$("#cpcResult").removeClass("displayNone");
			$("#cpcResult  a strong").text("");
			$("#fiResult").removeClass("displayNone");
			$("#fiResult  a strong").html("");
			$("#ftResult").removeClass("displayNone");
			$("#ftResult  a strong").html("");
			$("#ucResult").removeClass("displayNone");
			$("#ucResult  a strong").html("");
		}
		//删除分组显示内容
		function removeFilterChildren(){
			$("#cpcResult span,br").remove();
			$("#IpcResult span,br").remove();
			$("#fiResult span,br").remove();
			$("#ftResult span,br").remove();
			$("#ucResult span,br ").remove();
		}
		//清空分组筛选条件
		function clearSymbol(){
			$("#ipcsymbol").val("");
			$("#cpcsymbol").val("");
			$("#fisymbol").val("");
			$("#ftsymbol").val("");
			$("#ucsymbol").val("");
		}
		
		
		
		
		
		//区域代码加入检索按钮事件
		function allAreaListOnClick(obj){
			if($(obj).hasClass("btnGridAreaList")){
				$(obj).removeClass("btnGridAreaList");
				$(obj).addClass("btnAllAreaList");
			}
			
			initType();
			var windowId = $(obj).attr("v");
			addSeachText(windowId,"cty");
		}
		
		//区域代码加入检索按钮事件
		function areaGridListOnClick(obj){
			if($(obj).hasClass("btnAllAreaList")){
				$(obj).removeClass("btnAllAreaList");
				$(obj).addClass("btnGridAreaList");
			}
			
			var windowId = $(obj).attr("v");
			addSeachText(windowId,"octyuuid")
		}

		
		function addSeachText(windowId,ck){
			initType();
			var textvalue = "";
			if(ck.indexOf(',') != -1){
				var arrck = ck.split(',');
				for(var i =0 ; i<arrck.length;i++){
					
					textvalue += getCheckBoxValue(arrck[i]);
				}
				
			}else{
				
				textvalue =getCheckBoxValue(ck);
			}
			
			addConditionsArea(textvalue, windowId);// 加入输入框
			$(".conditionsItempan,.linker").remove();// 清空下面展示区内容选择内容
		}
		
		//清空内容
		function restAreaList(){
			$("#letter").val("");
			$("#codevalue").val("");
		}
		

		
		/////窗体关闭部分////
		function LegalStatusClose() {
			MouseWheel();
			//$("#LegalStatusWindow").hide();
			$("#LegalStatusWindow").addClass("displayNone");
			$(".shielding_layer").addClass("displayNone");
			$(".bodyClass").removeClass("overflowHidden");
			treeShow($("#legalList"), $("#chinaLawTree"));// 显示树div
			treeShow($("#LegalStatusWindow .btnLaw"), $("#LegalStatusWindow .btnTree"));// 显示对应
			$("#LegalStatusWindow .searchInputText").val("");
			$("#fieldMorePages").hide();
			// initLegal();
		}
		//弹出层关闭
		$("#WordSelectclose,#canWordSelect").click(function() {
			closeWordSelect();
		});
		$("#candecide").click(function() {
			decideClose("decideWindow");
		});
		
		
		function closeWordSelect() {
			MouseWheel();
			$("#WordSelectwindow").addClass("displayNone");
			$("#WordSelectwindow addToWord2").addClass("displayNone");
			$("#WordSelectwindow addToWord").removeClass("displayNone");
			overFlowHidden();
			$("#fieldMorePages").hide();
			$("#WordSelectwindow").find(".searchInputText").val("");
			
		}
		// IPC关闭
		$("#IPCclose,#IPCcancel").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			closeIPCWindow(windowId);
		});
		
		function closeIPCWindow(windowId) {
			$("#IPCwindow #IPCList").addClass("displayNone");
			$("#IPCwindow #ipcTreeDemo").removeClass("displayNone");
			$("#IPCwindow .contrastButton").addClass("displayNone");
			windowClose(windowId);
		}
		// CPC关闭
		$("#CPCclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			closeCPCWindow(windowId);
		});
		
		function closeCPCWindow(windowId) {
		
			$("#CPCwindow #CPCList").addClass("displayNone");
			$("#CPCwindow #cpcTreeDemo").removeClass("displayNone");
			$("#CPCwindow .contrastButton").addClass("displayNone");
			windowClose(windowId);
		}
		// FI关闭
		$("#FIclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			FIClose(windowId);
		});
		
		function FIClose(windowId) {
			$("#FIWindow #FIList").addClass("displayNone");
			$("#FIWindow #fiTreeDemo").removeClass("displayNone");
			$("#FIWindow .contrastButton").addClass("displayNone");
			windowClose(windowId);
		}
		
		/* Fterm */
		$("#Ftermclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			FtermClose(windowId);
		});
		
		function FtermClose(windowId) {
			MouseWheel();
			$("#FtermWindow #FtermList").addClass("displayNone");
			$("#FtermWindow #ftermTreeDemo").removeClass("displayNone");
			$("#FtermWindow .contrastButton").addClass("displayNone");
			windowClose(windowId);
		}
		
		/* 尼斯分类 */
		$("#Niceclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			NiceClose(windowId);
		});
		$("#NiceUsaclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			NiceUsaClose(windowId);
		});
		function NiceClose(windowId) {
			$("#"+windowId+" .searchInputText").val("");
			$("#"+windowId).addClass("displayNone");
			$("#fieldMorePages").hide();
			overFlowHidden();
			initType();
			initContrast();
		
		}
		function NiceUsaClose(windowId) {
			$("#"+windowId+" .searchInputText").val("");
			$("#"+windowId).addClass("displayNone");
			$("#fieldMorePages").hide();
			overFlowHidden();
			initType();
			initContrast();
			
		}
		/* 类类似群号 */
		$("#NiceGroupclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			niceGroupClose(windowId);
		});
		
		function niceGroupClose(windowId) {
			$("#"+windowId+" #NiceGroupList").addClass("displayNone");
			$("#"+windowId+" #niceGroupTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		
		/* 中国标准分类号(CCS) */
		$("#Ccsclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			CcsClose(windowId);
		});
		function CcsClose(windowId) {
			$("#CCSWindow #CCSList").addClass("displayNone");
			$("#CCSWindow #ccsTreeDemo").removeClass("displayNone");
			windowClose(windowId);
		
		}
		
		/* 国际标准分类号(ICS)*/
		$("#Icsclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			IcsClose(windowId);
		});
		function IcsClose(windowId) {
			$("#ICSWindow #ICSList").addClass("displayNone");
			$("#ICSWindow #icsTreeDemo").removeClass("displayNone");
			windowClose(windowId);
		
		}
		/* 决定类型，决定结果，判决类型(ICS)*/
		$("#decideclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			decideClose(windowId);
		});
		function decideClose(windowId) {
			//$("#"+windowId).hide();
			$("#"+windowId).addClass("displayNone");
			$("#fieldMorePages").hide();
			overFlowHidden();
			initType();
			initContrast();
			
		}
		
		/*代理机构*/
		$("#agencyclose,#agencyCancel").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			agencyClose(windowId);
		});
		function agencyClose(windowId) {
			windowClose(windowId);
			
		}
		/* 法院名称*/
		$("#courtclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			courtClose(windowId);
		});
		function courtClose(windowId) {
			$("#CourtAreaWindow #CourtList").addClass("displayNone");
			$("#CourtAreaWindow #courtTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		
		/* 洛迦诺*/
		$("#locanoclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
		
			locanoClose(windowId);
		});
		function locanoClose(windowId) {
			$("#LocanoWindow #LocanoList").addClass("displayNone");
			$("#LocanoWindow #locanoTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		/* 中图分类*/
		$("#cnlibclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			
			cnlibClose(windowId);
		});
		function cnlibClose(windowId) {
			$("#CnlibWindow #CnlibList").addClass("displayNone");
			$("#CnlibWindow #cnlibTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		/* 科学分类*/
		$("#sfxclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			
			sfxClose(windowId);
		});
		function sfxClose(windowId) {
			$("#SfxWindow #SfxList").addClass("displayNone");
			$("#SfxWindow #sfxTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		/* JCR分类*/
		$("#jcrclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			
			jcrClose(windowId);
		});
		function jcrClose(windowId) {
			$("#JcrWindow #JcrList").addClass("displayNone");
			$("#JcrWindow #jcrTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		/*CJCR分类*/
		$("#cjcrclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			
			cjcrClose(windowId);
		});
		function cjcrClose(windowId) {
			$("#CjcrWindow #CjcrList").addClass("displayNone");
			$("#CjcrWindow #cjcrTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		/*ASJC分类*/
		$("#asjcclose").click(function() {
			var windowId = $(this).parent().parent().attr("id");
			
			asjcClose(windowId);
		});
		function asjcClose(windowId) {
			$("#AsjcWindow #AsjcList").addClass("displayNone");
			$("#AsjcWindow #asjcTreeDemo").removeClass("displayNone");
			windowClose(windowId);
			
		}
		
		
		
		// 申请人取消
		$("#companyCancel").click(function() {
			requestPerson();
		});
		//申请人（公司代码）
		$("#companyClose").click(function() {
			
			requestPerson();
		});
		
		// 申请人事件
		function requestPerson() {
			MouseWheel();
			$("#companyWindow").addClass("displayNone");
			$("#companyWindow addToWord").removeClass("displayNone");
			$(".shielding_layer").addClass("displayNone");
			$(".bodyClass").removeClass("overflowHidden");
			$("#fieldMorePages").hide();
			$("#companySearchText").val("");
			$("#treePage").addClass("displayNone");
			$('#companyWindow .system').click();
			$("#companyWindow .ztree").children().remove();
			$("#_sysTreeNull").removeClass("displayInline").addClass("displayNone");
		}
		
		// UC取消
		$("#UCcancel").click(function() {
			closeUCWindow();
		});
		// UC关闭
		$("#UCclose").click(function() {
			closeUCWindow();
		});
		
		function closeUCWindow() {
			MouseWheel();
			$("#UCWindow #UCList").addClass("displayNone");
			$("#UCWindow #ucTreeDemo").removeClass("displayNone");
			$("#UCWindow .btnTree").removeClass("displayNone");
			$("#UCWindow .btnGrid").addClass("displayNone");
			$("#UCWindow .contrastButton").addClass("displayNone");
			$("#UCWindow .typeButton").removeClass("displayNone");
			$("#UCWindow .searchInputText").val("");
			$("#UCWindow").addClass("displayNone");
			$(".shielding_layer").addClass("displayNone");
			$(".bodyClass").removeClass("overflowHidden");
			$("#fieldMorePages").hide();
			$("#itemsTable").remove();
			initType();
			initContrast();
		}
		
		// 分类表初始状态
		function initType() {
			$(".IPCInput").val("");
			$(".typePage").addClass("displayNone");
			$(".contrastPage").addClass("displayNone");
			$(".IPCTypeTree").children("div").remove();
			$(".type").removeClass("typeNormal").addClass("typeSelect");
			$(".contrast").removeClass("contrastSelect").addClass("contrastNormal");
			$("#classifyType").removeClass("displayNone");
			$("#classifyContrast").addClass("displayNone");
			IPCSubEditArea();
	
		}
		//分类表页面初始化按钮
		function initTypeRadio(windowId){
			if("IPCwindow" == windowId){
				$("#IPCwindow").find(".radioKeyWordsDiv1").addClass("displayNone");
				$("#IPCwindow").find(".radioKeyWordsDiv1").removeClass("displayInline");
				$("#IPCwindow").find(".radioCatergoriesDiv").click();
			}
			if("FIWindow" == windowId){
				$("#" + windowId + " .radioCatergoriesDiv").addClass("displayNone");
				$("#" + windowId + " .radioCatergoriesDiv").removeClass("displayInline");
				$("#FIWindow").find(".radioKeyWordsDiv1").click();
			}
			if("CPCwindow" == windowId){
				$("#CPCwindow .radiosDiv").addClass("displayNone");
				$("#CPCwindow").find(".radioKeyWords").click();
			}
			if("FtermWindow" == windowId){//radioKeyWordsDiv1 
				$("#FtermWindow").find(".radioKeyWordsDiv1").click();
				
			}
			if("UCWindow" == windowId){//radioKeyWordsDiv1 
				$("#UCWindow .radiosDiv").addClass("displayNone");
				$("#UCWindow").find(".radioKeyWordsDiv1").click();
				
			}
		}
		//分类对照表初始化选中按钮
		function initContrastRadio(windowId){
			if("IPCwindow" == windowId){
				$("#IPCwindow").find(".radioKeyWordsDiv1").addClass("displayInline");
				$("#IPCwindow").find(".radioKeyWordsDiv1").removeClass("displayNone");
				$("#IPCwindow .radioKeyWordsDiv").click();
			}
			if("FIWindow" == windowId){
				$("#" + windowId + " .radioCatergoriesDiv").addClass("displayInline");
				$("#" + windowId + " .radioCatergoriesDiv").removeClass("displayNone");
				$("#fi_smallipcTab").click();//
				$('#FIWindow .radioKeyWordsDiv').click();
			}
			if("CPCwindow" == windowId){
				$("#" + windowId + " .radiosDiv").removeClass("displayNone");
				$("#CPCwindow .radioKeyWordsDiv").click();//默认英文显示
			}
			if("FtermWindow" == windowId){
				$("#FtermWindow").find(".radioKeyWordsDiv1").click();
			}
			if("UCWindow" == windowId){//radioKeyWordsDiv1 
				$("#UCWindow .radiosDiv").removeClass("displayNone");
				$("#UCWindow").find(".radioKeyWordsDiv").click();
			}
		}
		// 点击分类
		$(".type").click(function() {
			var windowId = $(this).attr("v");
			var winType = $("#winType").val();
			if ($(this).hasClass("typeSelect")) {
				return;
			}
			initTypeRadio(windowId);//初始化语言框
			typePageShow();// 分类显示
			deleteConditionsItem();// 删除下面展示区内容
			$("#itemsTable").remove();// 删除分类对照关联结果区内容
			if (!$(this).hasClass("typeSelect")) {
				$("#IPCList").addClass("displayNone");
			}
			if(winType == "tools"){
				setting = contrastSetting;
			}
			if (windowId == "IPCwindow") {
				
				$("#" + windowId + " .radiosDiv radioKeyWordsDiv1").addClass("displayNone");
				initZTree($("#ipcTreeDemo"), setting, zIPCCnNodes, "ipcjson", 1);
			}
			if (windowId == "CPCwindow") {
				initZTree($("#cpcTreeDemo"), setting, zCPCNodes, "cpcjson", 2);
			}
			if (windowId == "UCWindow") {
				initZTree($("#ucTreeDemo"), setting, zUSPCNodes, "ucjson", 2);
			//	$("#UCWindow .typePage").children("div").css("height","270px");
			}
			if (windowId == "FIWindow") {
				initZTree($("#fiTreeDemo"), setting, zFIJpNodes, "fijson", 3);
		
			}
			if (windowId == "FtermWindow") {
				initZTree($("#ftermTreeDemo"), setting, zFTERMNodes, "ftermjson/00000", 3);
			}
		});
		
		// 点击分类对照表初始状态
		function initContrast() {
			$(".IPCInput").val("");
			$(".contrastPageItem").addClass("displayNone");
			$(".contrastPage").addClass("displayNone");
			$(".conIPCArea").children().remove();
			$(".IPCContrastTip").text("");
			$(".IPCContrastTree").children("div").remove();
			$(".classifyType").removeClass("displayNone");
			$(".classifyContrast").addClass("displayNone");
			if ($(".contrast").hasClass("contrastSelect")) {
				$(".contrast").removeClass("contrastSelect").addClass("contrastNormal");
			}
			$(".conditionsItempan,.linker").remove();// 清空下面选择内容
			IPCSubEditArea();
		}
		
		// 编辑区隐藏
		function IPCSubEditArea() {
			if (!$(".IPCEditArea").hasClass("displayNone")) {
				$(".IPCEditArea").addClass("displayNone");
				var height = $(".IPCwindow").height();
				var marginTop = parseInt($(".IPCEditArea").css("margin-top"));
				$(".IPCwindow").height(height - $(".IPCEditArea").height() - marginTop);
				$(".IPCEditArea1").children().remove();
		
			}
		}
		// 分类对照检索框显示
		function contrastPageShow() {
			$(".typePage").addClass("displayNone");
			$(".contrastPage").removeClass("displayNone");
			$(".type").removeClass("typeSelect").addClass("typeNormal");
			$(".contrast").removeClass("contrastNormal").addClass("contrastSelect");
			$(".classifyType").addClass("displayNone");
			$(".classifyContrast").removeClass("displayNone");
			$(".typeButton").addClass("displayNone");
			$(".contrastButton").removeClass("displayNone");
			$("input.searchInputText").val("");// 清空检索框
		}
		// 分类显示
		function typePageShow() {
			$(".typePage").removeClass("displayNone");
			$(".type").removeClass("typeNormal").addClass("typeSelect");
			$(".contrast").removeClass("contrastSelect").addClass("contrastNormal");
			$(".typePage .ztree").removeClass("displayNone");
			$(".contrastPage").addClass("displayNone");
			$(".classifyType").removeClass("displayNone");
			$(".classifyContrast").addClass("displayNone");
			$(".typeButton").removeClass("displayNone");
			$(".contrastButton").addClass("displayNone");
			$("input.searchInputText").val("");
		
		}
		// 点击分类对照表
		$(".contrast").click(function() {
			var windowId = $(this).attr("v");
			if ($(this).hasClass("contrastSelect")) {
				return;
			}
			contrastPageShow();// 分类对照显示
			$(".contrastPageItem").removeClass("displayNone");
			filterDivHide();//隐藏
			removeFilterChildren();
			deleteConditionsItem();// 删除下面展示区内容
			initContrastRadio(windowId);//语言
	
			$("#" + windowId + " .gridListDiv").addClass("displayNone");
		
			clearItemsTable();
			//$("#" + windowId + " .radiosDiv").addClass("displayNone");
			if (windowId == "IPCwindow") {
				//语言默认为中文
				$("#smallcpcTab").click();
				//$('.radioCatergoriesDiv').click();
				initZTree($("#ipc_smallcpcTreeDemo"), contrastSetting, zCPCNodes, "cpcjson", 2);// cpc
			}
			if (windowId == "CPCwindow") {
				$("#cpc_smallIpcTree").removeClass("displayNone");
				initZTree($("#cpc_smallIpcTreeDemo"), contrastSetting, zIPCEnNodes, "ipcjson", 2);// cpc
			}
			if (windowId == "UCWindow") {
		
				$("#uc_smallIpcTree").removeClass("displayNone");
				initZTree($("#uc_smallIpcTreeDemo"), contrastSetting, zIPCEnNodes, "ipcjson", 2);// cpc
			}
			if (windowId == "FIWindow") {
			
				initZTree($("#fi_smallipcTreeDemo"), contrastSetting, zIPCEnNodes, "ipcjson", 2);// ipc
				//隐藏grid
			}
			if (windowId == "FtermWindow") {
				$("#ft_smallFiTree").removeClass("displayNone");
		
				$('.radioKeyWordsDiv1').click();
				initZTree($("#ft_smallFiTreeDemo"), contrastSetting, zFIJpNodes, "fijson", 3);// fi
			}
		});
		
		
		// 分类对照表-cpc，ipc，fl，uc，gj tab切换
		$("#smallcpcTab,#smallucTab,#smallfiTab,#smallgmTab,#fi_smallftermTab,#fi_smallipcTab").click(function() {
			var tab = $(this);
			
			if (tab.parent().children("div").hasClass("divSmallSelect")) {
				tab.siblings("div").removeClass("divSmallSelect").addClass("divSmallNormal");
			}
			if (tab.hasClass("divSmallNormal")) {
				tab.removeClass("divSmallNormal").addClass("divSmallSelect");
			}
			var treeParent = tab.attr("id").replace("Tab", "Tree");//id与tree名称关系 
			var treeDiv = $("#" + treeParent);
			if (treeDiv.hasClass("displayNone")) {
				treeDiv.removeClass("displayNone").addClass("displayInline");
			}
			if (treeDiv.siblings("div").hasClass("displayInline")) {
				treeDiv.siblings("div").removeClass("displayInline").addClass("displayNone");
			}
			$("#IPCwindow .gridListDiv").addClass("displayNone");// 隐藏grid
			var ipc_radiospan = $("#IPCwindow .radiosDiv").find("span");
			var ipclanguage = getLanguageValue(ipc_radiospan);//语种
			var fi_radiospan = $("#FIWindow .radiosDiv").find("span");
			var filanguage = getLanguageValue(fi_radiospan);//Fi语种
			var type = $(this).attr("v");
			$("#tabType").val(type);// 切换grid查询结果
		
			if ("cpc" == type) {
				if(ipclanguage == 2){
					
					initZTree($("#ipc_smallcpcTreeDemo"), contrastSetting, zCPCNodes, "cpcjson", 2);// cpc
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchCpcList.ajax";
				}
				if(ipclanguage != 2){
					clearTree("ipc_smallcpcTreeDemo");
				}
			} else if ("uc" == type) {// ipc 分类对照 uc
				if(ipclanguage != 2){
					
					clearTree("ipc_smallucTreeDemo");
				}
				if(ipclanguage == 2){
					
					initZTree($("#ipc_smallucTreeDemo"), contrastSetting, zUSPCNodes, "ucjson", 2);// uc
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchUcList.ajax";
				}
			} else if ("fi" == type) {// ipc 分类对照fi
				if(ipclanguage == 1){//中
					clearTree("ipc_smallfiTreeDemo");
				}
				if(ipclanguage == 2){//英文
					
					initZTree($("#ipc_smallfiTreeDemo"), contrastSetting, zFIEnNodes, "fijson", 2);// fi
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchFiList.ajax";
				}
				if(ipclanguage == 3){//日文
					
					initZTree($("#ipc_smallfiTreeDemo"), contrastSetting, zFIJpNodes, "fijson", 3);// fi
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchFiList.ajax";
				}
				
			} else if ("gm" == type) {// ipc 国民经济类
				if(ipclanguage == 1){
					
					initZTree($("#ipc_smallgmTreeDemo"), contrastSetting, zGMCnNodes, "gmjson", 1);// gm
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchGmList.ajax";
				} else 
					
				if(ipclanguage == 2){
					
					initZTree($("#ipc_smallgmTreeDemo"), contrastSetting, zGMEnNodes, "gmjson", 2);// gm
					mGrid_gridsmallCpc_obj.opt.action = "/txnSearchGmList.ajax";
				}
				else{
					clearTree("ipc_smallgmTreeDemo");
				}
				
			} else if ("fi_ft" == type) {// fi分类对照 fterm
				
				$("#FIWindow .contrastPage .gridListDiv").addClass("displayNone");// 隐藏grid
				if(filanguage == "2"){
					
					initZTree($("#fi_smallftermTreeDemo"), contrastSetting, zFTERMNodes, "ftermjson/00000", 2);// fi_fterm
					mGrid_gridFiSmallIpc_obj.opt.action = "/txnSearchFtList.ajax";
				} else 
				if(filanguage == "3"){
					
					initZTree($("#fi_smallftermTreeDemo"), contrastSetting, zFTERMNodes, "ftermjson/00000", 3);// fi_fterm
					mGrid_gridFiSmallIpc_obj.opt.action = "/txnSearchFtList.ajax";
				}else {
					clearTree("fi_smallftermTreeDemo");
				}
				
				$("#fi_smallftermTreeDemo_1").addClass("displayNone");
				$("#sFilanguage").val(filanguage);
			} else if ("fi_ipc" == type) {// fi分类对照 cpc
				$("#FIWindow .contrastPage .gridListDiv").addClass("displayNone");// 隐藏grid
				if(filanguage == "1"){
					
					initZTree($("#fi_smallipcTreeDemo"), contrastSetting,zIPCCnNodes, "ipcjson", 1);// ipc
					mGrid_gridFiSmallIpc_obj.opt.action = "/txnFiSearchIpcList.ajax";
				}
				else if(filanguage == "2"){
					
					initZTree($("#fi_smallipcTreeDemo"), contrastSetting,zIPCEnNodes, "ipcjson", 2);// ipc
					mGrid_gridFiSmallIpc_obj.opt.action = "/txnFiSearchIpcList.ajax";
				}else {
					clearTree("fi_smallipcTreeDemo");
				}
				
				$("#sFilanguage").val(filanguage);
			}
		
		});
		
		
		//删除树
		function clearTree(treeId){
			$("#"+treeId).children().remove();
			$("#"+treeId).html("<span style='margin: 10px; display:block;'>暂时没有当前语言对应数据。</span>");
		}
		
		// 公司代码-系统无数据
		function initSystem() {
			$(".CompanyInput").val("");
			$(".sysPage").removeClass("displayNone");
			$(".personalPage").addClass("displayNone");
			$(".system").removeClass("typeNormal").addClass("typeSelect");
			$(".personal").removeClass("contrastSelect").addClass("contrastNormal");
		}
		
		// 公司代码-个人
		function initPersonal() {
			$(".CompanyInput").val("");
			$(".sysPage").addClass("displayNone");
			$(".personalPage").removeClass("displayNone");
			showCompanyTree("txnGetPerCompanyTree.ajax","select-key:nodeName=" ,$("#_perTreeNull"),$("#companyPerTreeDemo"),com_PerSetting);//检索
		
		}
		
		// 点击系统
		$(".system").click(function() {
			$("#companyWindow .addToWord").removeClass("displayNone")//显示加入词表按钮
			initSystem();
		});
		
		// 点击个人
		$(".personal").click(function() {
			$(".system").removeClass("typeSelect").addClass("typeNormal");
			$(".personal").removeClass("contrastNormal").addClass("contrastSelect");
			$("#companyWindow .addToWord").addClass("displayNone")//隐藏加入词表按钮
			initPersonal();
		});
		
		//公司代码检索
		$(".btnCompany").click(function(){
		
			var value = $(this).next().val();//检索内容
		
			var systemtab = $(".system");
			var flag = false;
			if($.trim(value)){
				flag = true;
			}
			
			if(systemtab.hasClass("typeSelect")){//系统
				
				$("input[name='select-key:sqrName']").val(value);//条件
				if(flag){
				
					
					showCompanyTree("txnGetSysCompanyTree.ajax","select-key:nodeName=" + value + "&select-key:page=0",$("#_sysTreeNull"),$("#companySysTreeDemo"),com_SysSetting);//检索
					
					querySqrData(value);//申请人查询
				
				}else{
					$("#companySysTreeDemo").children().remove();	
					$("#treePage").addClass("displayNone");
					$("#companySysDiv").removeClass("displayNone");//系统检索
					$(".comSysRightResult").addClass("displayNone");//系统检索
					
				}
				
			}else{//个人
				
				
				if(flag){
					
					showCompanyTree("txnGetPerCompanyTree.ajax","select-key:nodeName=" + value,$("#_perTreeNull"),$("#companyPerTreeDemo"),com_PerSetting);//检索

				}else{
					
					gridShow($("#usercompany"),$("#companyPerson"));//系统检索
				}
				
			}
		});
		
		//检索
		function showCompanyTree(txnCode,param,treeDivId,treeDemo,setting){
			
			var winType = $("#winType").val();
		
			if(winType == "tools"){//工具条
				setting.check.enable = false;
			}
			try {
							
				queryCompanyData(txnCode,param);//查询
			
			} catch (e) {
				$("#com_nodes").val("");
			}
			
			var nodes = $("#com_nodes").val();//根节点
			
			
			if(nodes){
				treeDivId.removeClass("displayInline").addClass("displayNone");
				var com_node = eval( '('+nodes+')');
				if(com_node[0].count){
					$("#treePage").removeClass("displayNone");
					$("#compage").val(1);
					$("#treePage .p").text(1)
					var maxPage = 1;
					var count = com_node[0].count;
					
					if(count > 100){
						
						 maxPage = Math.round(count/100) + (count%100 == 0 ? 0:1);
						
					}else{
						
						maxPage = 1;
					}
					
					$("#comcount").val(count);
					$("#treePage .p").text($("#compage").val());
					$("#treePage .c").text(maxPage);
					com_node.shift();
				}
				$.fn.zTree.init(treeDemo, setting, com_node);
			}else{
				
				treeDemo.children().remove();
				treeDivId.removeClass("displayNone").addClass("displayInline");//无检索结果
				$("#treePage").addClass("displayNone");
			}
		}
		
		//公司代码    系统代码
		function queryCompanyData(txnCode,param){
		
			$.ajax({
				type : "POST",
				async:false,
				url : "/" + rootPath + txnCode,
				data :param ,
				success : function(data) {
		
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
		
					} else {
		
						var select = $.fz_common.getXmlNodeValues(data, "context>select-key");
						if (null != select && "" != select && select.find("nodes").text() != "") {
							$("#com_nodes").val(select.find("nodes").text());
						}else{
							$("#com_nodes").val("");
						} 
					}
				},
				error : function(data) {
				}
			});
		}
		
		//公司代码  申请人
		function querySqrData(value){
			
			
			$(".comSysRightResult").removeClass("displayNone");
			mGrid_gridSqr_obj.query(1, function() {// 异步加载
				anchorRedirect("companyWindow", value);// 高亮
				if($("#companyWindow .modelGridPaginatorContainer .totalnumber").text()=="0"){
					
					$("#sqrPageTr").hide();
					
				}else{
					$("#sqrPageTr").show();
				
				}
	
			});
		}
		
		
		// 法律状态浮层 关闭
		$("#Legalclose").click(function() {
		
			LegalStatusClose();
		});
		
		//法律状态取消
		$("#LegalStatusCancel").click(function() {
			LegalStatusClose();
		});
		
		// 国省事件
		function applyPerson() {
			MouseWheel();
			$("#provinceWindow").addClass("displayNone");
			$(".shielding_layer").addClass("displayNone");
			$(".bodyClass").removeClass("overflowHidden");
			$("#fieldMorePages").hide();
		}
		
		// 国省关闭
		$("#provinceClose").click(function() {
			restAreaList();
			$(".china").click();
			$(".conditionsItempan,.linker").remove();// 清空下面选择内容
			treeShow($("#regionList"), $("#provinceTreeDemo"));// 显示树div
			treeShow($(".areaList"), $("#btnChina"));// 显示对应
			// 检索按钮
			$("#provinceWindow .searchInputText").val("");
			applyPerson();
		});
		
		// 国省取消
		$("#provinceCancel").click(function() {
			$(".conditionsItempan,.linker").remove();// 清空下面选择内容
			treeShow($("#regionList"), $("#provinceTreeDemo"));// 显示树div
			treeShow($(".areaList"), $("#btnChina"));// 显示对应
			// 检索按钮
			$("#provinceWindow .searchInputText").val("");
			restAreaList();
			$(".china").click();
			applyPerson();
		});
		
		function codeSetWinCommon(codeWin) {
		
			$(codeWin).removeClass("displayNone");
			var scrolltop = $(document).scrollTop();
			$(codeWin).css("margin-top", scrolltop);
		
			setLayerHeight();
			disabledMouseWheel();
			$(".shielding_layer").removeClass("displayNone");
			$(".bodyClass").addClass("overflowHidden");
		
		}
		
		// 读取文件
		function getPosUrl(posUrl, treeNode) {
			if (treeNode) {
				
				posUrl = "/" + treeNode.num.replace("/", "-") + posUrl;
				posUrl = getPosUrl(posUrl, treeNode.getParentNode());
			}
			return posUrl;
		}
		
		function filter(treeId, parentNode, childNodes) {
			var treedata = [];
			try {
		
				$.each(childNodes, function(i, record) {
					var num = record.symbol;
					var name;
					// 中文切换
					if (titleType == 1) {
						name = record.zh_title_text;
						// 英文
					} else if (titleType == 2) {
						name = record.en_title_text;
						// 日文
					} else if (titleType == 3) {
						name = record.jp_title_text;
		
					} else {// 默认中文
						name = record.zh_title_text;
		
					}
					
					var isparent = record.isParent;
					if(isparent){
						f = isparent;
						
					}else{
						f = true;
					}
					var id = record.uuid;
					var onedata = {
						id : id,
						pId : parentNode.id,
						name : name,
						num : num,
						isParent : f
						
					};
					treedata.push(onedata);
				
				});
			} catch (e) {
				$.fz_common.alert("错误",e);
			}
			return treedata;
		}
		
		/**
		 *错误处理 
		 * @param event
		 * @param treeId
		 * @param node
		 * @param XMLHttpRequest
		 * @param textStatus
		 * @param errorThrown
		 */
		function zTreeOnAsyncError(event, treeId, node, XMLHttpRequest, textStatus, errorThrown) {
			node.isParent = false;
			var tree = $.fn.zTree.getZTreeObj(treeId);
			tree.updateNode(node);
		}
		
		function zTreeOnAsyncSuccess(event, treeId, node, msg) {
			
			addzNodeMarginleft(node);
			//异步加载 父节点  选中   联动 子节点
			
//			alert("成功");
		
		
			if (node.children.length>0) {
				for (var i = 0; i < node.children.length; i++) {
					if(node.checked){
						$("#" + node.children[i].tId+"_check").click();
					}
					if(node.children[i].isParent == false){//最底层节点
						var this_Img = $("#" + node.children[i].tId).find("a>span");
						var this_marign = this_Img.css("margin-left")
						var margin = parseInt(this_marign);
							this_margin = ( margin - 8) + "px";
						this_Img.css("display", "inline-block").css("margin-left", this_margin);
					}
				}
			}
		}
		
		function coyzTreeOnAsyncSuccess(event, treeId, node, msg) {
			
			addzNodeMarginleft(node);
			//异步加载 父节点  选中   联动 子节点
			
			if (node.children.length>0) {
				for (var i = 0; i < node.children.length; i++) {
				
					if(node.checked){
						$("#" + node.children[i].tId+"_check").click();
					}
					if(node.children[i].isParent == false){//最底层节点
						var this_Img = $("#" + node.children[i].tId).find("a>span");
						var this_marign = this_Img.css("margin-left")
						var margin = parseInt(this_marign);
						this_margin = ( margin - 8) + "px";
						this_Img.css("display", "inline-block").css("margin-left", this_margin);
					}
				}
			}
		}
		
		function zTreeOnClick(event, treeId, node) {
			
			// 如果子节点是无子节点将展开图标隐藏
			if (node&&node.children) {
		
				for ( var i = 0; i < node.children.length; i++) {
					// 子和父相同删除子
					if (node.id) {
						if (undefined == node.children[0].id||node.id == node.children[0].id) {
							$("#" + node.children[0].tId).addClass("displayNone");
							if ($("#" + node.tId).find("a>span").hasClass("center_open")) {
								$("#" + node.tId).find("a>span").removeClass("center_open");
							}
							
							if ($("#" + node.tId).find("a>span").hasClass("bottom_open")) {
								$("#" + node.tId).find("a>span").removeClass("bottom_open");
							}
						}
						
					}
				}
			}
		}
		
		// 代码集点击复选框
		function contrastzTreeOnCheck(event, treeId, treeNode) {
			var windowId = $("#" + treeId).attr("v");
			var value = treeNode.num;// 分类代码
			var textvalue = "";
			//重新加载
			deleteConditionsItem();
			//遍历选中复选框并添加到复选框
			var selectedArray = $("#" + windowId + " .checkbox_true_full");// 获取当前所有选择节点
			if (selectedArray.length > 0) {
				for ( var i = 0; i < selectedArray.length; i++) {
					textvalue = $(selectedArray[i]).parent().parent().attr("name");
					addConditions(windowId, textvalue, ".EditAreaText", ".conditionsItempan", treeId);
				}
			}
				
			var focusstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full_focus");
			var defstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full");
			if (focusstatus) {
				// 判断重复
				addConditions(windowId, value, ".EditAreaText", ".conditionsItempan", treeId);
			} else {
				// 删除
				delConditions(windowId, value, ".EditAreaText", ".conditionsItempan");
			}
		
		}
		
		// 法律代码集点击复选框
		function zTreeOnCheck(event, treeId, treeNode) {
			
			var windowId = $("#" + treeId).attr("v");
			var value = treeNode.num;// 分类代码
			if("courtTreeDemo" == treeId || "chinaLawTree" == treeId){//courtTreeDemo ： 区域代码,chinaLawTree : 法律状态
				value = treeNode.name;
			}
				
				zTreeCheckBoxOnClick(treeId,treeNode,value,windowId,".EditAreaText",".conditionsItempan");
			
		}
		
		// 点击ztree获取所对应的关系数据添加到右侧区域中
		function addTreeToRightArea(event, treeId, treeNode) {
			var txnCode = "";// cpc
			var symbol = treeNode.num;
			var itemDiv = $("#ipcItem");
			var windowForm = $("#" + treeId).attr("v");
			var winType = $("#winType").val();
			var radiospan = $("#"+windowForm +" .radiosDiv").find("span");
			var language = getLanguageValue(radiospan);//语种
			
			if (treeId == "ipc_smallcpcTreeDemo") {// ipc 分类对照
				// 开始
				txnCode = "txnGetIpcByCpc.ajax";// ipc cpc
			} else if (treeId == "ipc_smallucTreeDemo") {
		
				txnCode = "txnGetIpcByUc.ajax";// ipc uc
				if(treeNode.name.indexOf(' ')!=0){
					
					symbol = treeNode.name.substring(0, treeNode.name.indexOf(' '));
				}else{
					symbol = treeNode.name; 
				}
				
			} else if (treeId == "ipc_smallfiTreeDemo") { // ipc
				// fi
				txnCode = "txnGetIpcByFi.ajax";
			} else if (treeId == "ipc_smallgmTreeDemo") {// 国民经济
		
				txnCode = "txnGetIpcByGm.ajax";//国民经济类
			} else if (treeId == "uc_smallIpcTreeDemo") {
		
				itemDiv = $("#ucItem");
				txnCode = "txnGetUcByIpc.ajax";
			} else if (treeId == "cpc_smallIpcTreeDemo") {// cpc分类对照
		
				itemDiv = $("#cpcItem");
				txnCode = "txnGetCpcByIpc.ajax";
			} else if (treeId == "ft_smallFiTreeDemo") {// fterm
				
				itemDiv = $("#ftItem");
				txnCode = "txnGetFtByFi.ajax";
			} else if (treeId == "fi_smallftermTreeDemo") {// fi
				
				itemDiv = $("#fiItem");
				txnCode = "txnGetFiByFt.ajax";
			} else if (treeId == "fi_smallipcTreeDemo") {
		
				itemDiv = $("#fiItem");
				txnCode = "txnGetFiByIpc.ajax";
			} 
			else {
				return ;
				}
		
			// 获取内容添加到右侧区域
			$.ajax({
				type : "POST",
				url : "/" + rootPath + txnCode,
				data : "select-key:symbol=" + symbol,
				success : function(data) {
		
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
		
					} else {
		
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (null != record && "" != record && record.find("symbol").text() != "") {
							var table = createDataTable(record, language, windowForm);// 生成表格数据
							itemDiv.append(table);
							if(winType == "tools"){
								$("input[name='ckbx']").hide();
							}
						} else {
							var table = createNullDataTable();
							itemDiv.append(table);
						}
					}
				},
				error : function(data) {
					var nullTable = createNullDataTable();
					itemDiv.append(nullTable);
				}
			});
		}
		
		//文件名
		var jsonFileName = "";
		var titleType;
		var setting = {
			check : {
				enable : true
			},
			data : {
				simpleData : {
					enable : true,
					expandAll:false
				}
			},
			async : {
				enable : true,
				type:"get",
				url : function(treeId, treeNode) {
					var urlprefix = nginxJsonFilePath + jsonFileName;
					var urlpostfix = getPosUrl(".json", treeNode);
					return urlprefix + urlpostfix;
				},
				autoParam : [ "num", "level" ],
				dataFilter : filter
			// 异步返回后经过Filter
			},
			callback : {
				// beforeAsync: zTreeBeforeAsync,
				onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的fun
				onAsyncError : zTreeOnAsyncError,
				onCheck : zTreeOnCheck
				//onExpand : zTreeOnClick
			// 加载错误的fun
			}
		};
		var contrastSetting = {
			check : {
				enable : false
			},
			data : {
				simpleData : {
					enable : true
				}
			},
			async : {
				enable : true,
				type:"get",
				url : function(treeId, treeNode) {
					var urlprefix = nginxJsonFilePath + jsonFileName;
					var urlpostfix = getPosUrl(".json", treeNode);
					return urlprefix + urlpostfix;
				},
				autoParam : [ "num", "level" ],
				dataFilter : filter
			// 异步返回后经过Filter
			},
			callback : {
				onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的fun
				onAsyncError : zTreeOnAsyncError,
				onCheck : contrastzTreeOnCheck,
				//onExpand : zTreeOnClick,
				onClick : addTreeToRightArea
			// 添加到右侧区域
			// 加载错误的fun
			}
		};
		
		// 初始化时树的背景颜色设置
		function initTreeStyle(data) {
			for ( var j = 0; j < $(".titleCheckShow").length; j++) {
				$(".titleCheckShow")[j].innerHTML = "";
			}
			$(".checkBoxIconSet span.checkbox_true_full").parent(".checkBoxIconSet").parent(".everyTreeLine").toggleClass("everyTreeLineChecked", true);
			$(".checkBoxIconSet span.checkbox_false_full").parent(".checkBoxIconSet").parent(".everyTreeLine").toggleClass("everyTreeLineNormal", true);
			$(".checkBoxIconSet span.checkbox_true_part").parent(".checkBoxIconSet").parent(".everyTreeLine").toggleClass("everyTreeLineNormal", true);
			$(".checkBoxIconSet span.checkbox_false_part").parent(".checkBoxIconSet").parent(".everyTreeLine").toggleClass("everyTreeLineNormal", true);
		}
		
		// 区域代码(中国)
		var regsetting = {
			check : {
				enable : true
			},
			data : {
				simpleData : {
					enable : true
				}
			},
			async : {
				enable : true,
				type:"get",
				url : function(treeId, treeNode) {
					var urlprefix = nginxJsonFilePath + jsonFileName;
					var urlpostfix = getPosUrl(".json", treeNode);
					return urlprefix + urlpostfix;
				},
				autoParam : [ "num", "level" ],
				dataFilter : regfilter
			// 异步返回后经过Filter
			},
			callback : {
				onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的fun
				onAsyncError : zTreeOnAsyncError,
				onCheck : areazTreeOnCheck,
			// 加载错误的fun
			}
		};
		function regfilter(treeId, parentNode, childNodes) {
			var treedata = [];
			try {
		
				$.each(childNodes, function(i, record) {
					var num = record.areacode;
					var name = record.areaname;
					// 中文切换
					var isparent = record.isParent;
					var id = record.id;
					var onedata = {
						id : id,
						pId : parentNode.id,
						name : name,
						num : num,
						isParent : isparent
					};
					treedata.push(onedata);
				});
			} catch (e) {
				parentNode.isParent = false;
			}
			return treedata;
		}
		
		/**
		 * 公司代码
		 */
		/*系统*/
		var com_SysSetting = {		
				
				check : {
						enable : true
				},
				async: {
					    contentType : "application/json",
					    enable : true,
					    dataType : "text",
					    type : "post",
					    url :
					    function(treeId, treeNode) {
							var txnCode= "/" + rootPath + "txnGetSysCompanyNode.do?";
							var param="select-key:p_rid="+treeNode.num+"&select-key:level="+(treeNode.level+1)+"&select-key:text="+$("#companySearchText").val();
							//aObj = $("#" + treeNode.tId + "_a");
							//aObj.attr("title", "当前第 " + treeNode.page + " 页 / 共 " + treeNode.maxPage + " 页")
							return txnCode + param;
						},
					    autoParam : [ "id", "num" ],
					    dataFilter: null
				},
				
				data: { 
					    simpleData: { 
					    enable: true,
					    idKey: "id", 
					    pIdKey: "pId",
					    rootPId: 0 //根节点
					    } 
				},
				callback : {
					onAsyncSuccess : coyzTreeOnAsyncSuccess,// 异步加载成功的fun
					onAsyncError : zTreeOnAsyncError,
					beforeCheck: zTreeBeforeCheck,
					onCheck : coyzTreeOnCheck,
					onExpand : zTreeOnClick,
					beforeExpand: beforeExpand
					
				// 加载错误的fun
				}
		};
		
		function beforeExpand(treeId, treeNode) {
			if (treeNode.page == 0) treeNode.page = 1;
			return !treeNode.isAjaxing;
		}
		function addDiyDom(treeId, treeNode) {
			treeNode.maxPage = Math.round(treeNode.count/treeNode.pageSize - .5) + (treeNode.count%treeNode.pageSize == 0 ? 0:1);
		};
		
		$("#firstBtn").click( function(){
			
				goPage(1);
		});
		$("#lastBtn").click( function(){
				goPage($("#treePage .c").text());
		});
		$("#prevBtn").click( function(){
				var page = $("#compage").val();
				goPage(parseInt(page)-1);
		});
		$("#nextBtn").click( function(){
				var page = $("#compage").val();
				goPage(parseInt(page)+1);
		});
		
		function goPage(page) {
			if (page<1){
				page = 1;
				return;
			}
			var maxPage = $("#treePage .c").text();
			if (page>parseInt(maxPage)){
				page = parseInt(maxPage);
				return ;
			}
			$("#compage").val(page);
			$("#treePage .p").text(page);
			var text = stripscript($("#companySearchText").val());
			var param = "select-key:nodeName="+text+"&select-key:page="+page;
			showCompanyTree("txnGetSysCompanyTree.ajax",param,$("#_sysTreeNull"),$("#companySysTreeDemo"),com_SysSetting);//检索
			var page = $("#compage").val();
			
		}
		/*个人*/
		var com_PerSetting = {		
				
				check : {
					enable : true
				},
				async: {
					contentType : "application/json",
					enable : true,
					dataType : "text",
					type : "post",
					url :
						function(treeId, treeNode) {
						var txnCode= "/" + rootPath + "txnGetPerCompanyNode.do?";
						var param="select-key:gsdm="+treeNode.num +"&select-key:nodeName="+stripscript($("#companySearchText").val());
						return txnCode + param;
					},
					autoParam : [ "id", "num" ],
					dataFilter: null
				},
				data: { 
					simpleData: { 
						enable: true,
						idKey: "id", 
						pIdKey: "pId",
						rootPId: 0 //根节点
					} 
				},
				callback : {
					onAsyncSuccess : coyzTreeOnAsyncSuccess,// 异步加载成功的fun
					onAsyncError : zTreeOnAsyncError,
					beforeCheck: zTreeBeforeCheck,
					onCheck : coyzTreeOnCheck,
					onExpand : zTreeOnClick
					// 加载错误的fun
				}
		};
		

	
		
		/*用于查询时显示的树节点*/
		var chinaLawSearchSetting = {
				check : {
					enable : true
				},
				data: { 
				    simpleData: { 
				    enable: true,
				    idKey: "id", 
				    pIdKey: "pId",
				    rootPId: 0 //根节点
				    } 
				},
				async: {
					contentType : "application/json",
					enable : true,
					dataType : "text",
					type : "post",
					url : function(treeId, treeNode) {
						var txnCode= "/" + rootPath + "txnSearchLawTree.do?";
//						var param="select-key:codename="+treeNode.name+"&select-key:level="+(treeNode.level);//+"&select-key:nodeName="+ stripscript($("#s_value").val())
						var param="select-key:pid="+treeNode.num+"&select-key:level="+(treeNode.level)+"&select-key:nodeName="+ stripscript($("#s_value").val());
						return txnCode + param;
					},
					autoParam : [ "level", "num" ],
					dataFilter : null
					// 异步返回后经过Filter
				},
				callback : {
					onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的fun
					onAsyncError : zTreeOnAsyncError,
					onCheck : zTreeOnCheck,
					//onExpand : zTreeOnClick
					// 加载错误的fun
				}
		};
		
		var chinaRegionSetting = {
				check : {
					enable : true
				},
				data: { 
					simpleData: { 
						enable: true,
						idKey: "id", 
						pIdKey: "pId",
						rootPId: 0 //根节点
					} 
				},
				async: {
					contentType : "application/json",
					enable : true,
					dataType : "text",
					type : "post",
					url : function(treeId, treeNode) {
						var txnCode= "/" + rootPath + "txnSearchRegionTree.do?";
						var nodeName = "select-key:nodeName="+treeNode.num;
						if(treeNode.getParentNode()){
							nodeName = "select-key:nodeName="+treeNode.getParentNode().num+"/"+treeNode.num;
						}
						var param=nodeName+"&select-key:level="+(treeNode.level)+"&select-key:text="+ stripscript($("#regionText").val());
						return txnCode + param;
					},
					autoParam : [ "level", "num" ],
					dataFilter : null
					// 异步返回后经过Filter
				},
				callback : {
					onAsyncSuccess : zTreeOnAsyncSuccess,// 异步加载成功的fun
					onAsyncError : zTreeOnAsyncError,
					onCheck : zTreeOnCheck,
					//onExpand : zTreeOnClick
					// 加载错误的fun
				}
		};
		

		
		// 区域代码展开
		function regzTreeOnClick(event, treeId, node) {
			var cname = node.name;
			// 申请人地址 复选框层级缩进显示
			for ( var i = 0; i < node.children.length; i++) {
		
				$("#" + node.children[i].tId).find(".checkBoxIconSet").css("margin-left", "30px");
				$("#" + node.children[i].tId).find(".checkBoxIconSet").removeClass("checkBoxIconSet").css({
					"border-left-width" : "1px;",
					"border-left-style" : "sold",
					"border-left-color" : "rgb(228,228,228)",
					"display" : "inline-block"
				});
		
				if (cname == "北京市" || cname == "天津市" || cname == "重庆市" || cname == "上海市" || node.level == 1) {
		
					$("#" + node.children[i].tId).children().children().prev("div").css("margin-left", "50px");
					$("#" + node.children[i].tId).css("float", "left");
					$("#" + node.children[i].tId).parent().css("height", "100%").css("overflow-x", "hidden");
					$("#" + node.children[i].tId).find(".center_close").removeClass("center_close");
					$("#" + node.children[i].tId).find(".bottom_close").removeClass("bottom_close");
				}
			}
		}
		
		// 区域代码填加到展示区
		function areazTreeOnCheck(event, treeId, treeNode) {
			var windowId = $("#" + treeId).attr("v");//窗口Id
			var value = treeNode.name;//名称
			var treeObj = $.fn.zTree.getZTreeObj(treeId);//当前tree对象
			var focusstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full_focus");//当前节点选中状态
			//异步加载县和市辖区下的内容
			zTreeCheckBoxOnClick(treeId,treeNode,value,windowId,".EditAreaText",".conditionsItempan");
			
		}
		
		function areazTreeParenNode(treeId,treeNode,windowId){
			if(treeNode ){
				//添加
				if(treeNode.getParentNode() && $("#" +treeNode.getParentNode().tId+"_check").hasClass("checkbox_true_full")){
					delItemsNode(treeId, treeNode.getParentNode());
					areazTreeParenNode(treeNode.getParentNode(),windowId,treeId);
				}else{
					value = treeNode.name;
					if(value !="县" && value != "市辖区"){
						addConditions(windowId, value,".EditAreaText",".conditionsItempan", treeId);
						
					}
				}
			}else{
				return ;
			}
		}
		
		function zTreeBeforeCheck(treeId, treeNode){
			if(!treeNode.children){
				
				var treeObj = $.fn.zTree.getZTreeObj(treeId);
				treeObj.reAsyncChildNodes(treeNode,"refresh",false);
				$("#" + treeNode.tId).click();
			}
			return true;
		}
		// 公司代码
		function coyzTreeOnCheck(event, treeId, treeNode) {
			var windowId = $("#" + treeId).attr("v");
			if(treeNode){
				
				var value = treeNode.name;
				
				coyzTreeCheckBoxOnClick(treeId,treeNode,value,windowId,".EditAreaText",".conditionsItempan");
			}
	
		}
		
		//复选框事件 选取公司代码 展示区显示公司名称
		function coyzTreeCheckBoxOnClick(treeId,treeNode,value,windowId,parentDiv,childrenDiv){
			var focusstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full_focus");
			var defstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full");
			if(treeNode.getParentNode() && $("#" +treeNode.getParentNode().tId+"_check").hasClass("checkbox_true_full")){
				
				addConditions(windowId, value,".EditAreaText",".conditionsItempan", treeId);
			}else{
				
				if (focusstatus) {
					addItemsNode(treeId, treeNode);
				} else {
					// 删除
					delzTreeChildrenNodesChecked(treeId,treeNode,windowId);//删除子节点选中效果
					delConditions(windowId, value, parentDiv, childrenDiv);
				}
				
				delzTreeParentNodesChecked(treeId,treeNode.getParentNode(),windowId);//删除父节点选中效果
				addNodesToItem(treeId,treeNode.getParentNode(),windowId);
			}
			
		}
		
		function zTreeCheckBoxOnClick(treeId,treeNode,value,windowId,parentDiv,childrenDiv){
			
			var focusstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full_focus");
			var defstatus = $("#" + treeNode.tId).find(".checkBoxIconSet").children("span").hasClass("checkbox_true_full");
			if(treeNode.getParentNode() && $("#" +treeNode.getParentNode().tId+"_check").hasClass("checkbox_true_full")){
					
				addzTreeParentNodesChecked(treeNode,windowId,treeId);
			}else{
					
				if (focusstatus) {
						// 判断重复
					addConditions(windowId, value, parentDiv, childrenDiv, treeId);
				} else {
						// 删除
					delzTreeChildrenNodesChecked(treeId,treeNode,windowId);
					delConditions(windowId, value, parentDiv, childrenDiv);
				}
		
				delzTreeParentNodesChecked(treeId,treeNode.getParentNode(),windowId);
				addNodesToItem(treeId,treeNode.getParentNode(),windowId);
			}
		}
		
		///-----
		
		//国内
		$(".china").click(function() {
			if($(this).hasClass("typeSelect")){return ;}
			$(".otherCountry").removeClass("typeSelect");
			$(".otherCountry").addClass("contrastNormal");
			$(this).removeClass("contrastNormal");
			$(this).addClass("typeSelect");
			$(this).css("border-right", "none");
			$(this).css("border-left", "1px solid #d3d3d3");
			$(".otherCountry").css("border-left", "1px solid #d3d3d3");
			$(".areaCodeTree").removeClass("displayNone");//中国
			$(".allAreaList").addClass("displayNone");//外国
			$(".otherCountry").addClass("cursorPointer");//手
			$(this).removeClass("cursorPointer");
			$("#btnChina").removeClass("displayNone");// tree加入检索
			$("#btnOtherCountry").addClass("displayNone");// 国外加入检索
			$(".chinaType").removeClass("displayNone");// 检索框切换
			$(".otherCyType").addClass("displayNone"); // 检索框切换
			$(".conditionsItempan,.linker").remove();// 清空下面选择内容
			$("#provinceWindow ").click();// 调用窗口事件
			$("input[name='cty']").prop("checked", false);// 将复选框设置为默认状态
			$("#provinceWindow .searchInputText").val("");// 清空检索框
			// 重新加载ztree 
			initZTree($("#provinceTreeDemo"), regsetting, zRegNodes, "regionjson", "");
			//删除提示
			$("#_provinceNull").addClass("displayNone");
		});
		
		//外国事件
		$(".otherCountry").click(function() {
			if($(this).hasClass("typeSelect")){return ;}
			$(this).removeClass("contrastNormal");
			$(this).addClass("typeSelect");
			$(".china").removeClass("typeSelect");
			$(".china").addClass("contrastNormal");
			$(this).css("border-left", "none");
			$(this).css("border-right", "1px solid #d3d3d3");
			$(".china").css("border-right", "1px solid #d3d3d3");
			$(".china").css("border-left", "1px solid #d3d3d3");
			$(".allAreaList").removeClass("displayNone");
			$(".areaCodeTree").addClass("displayNone");
			$(".chinaType").addClass("displayNone");// 中国检索框隐藏
			$(".otherCyType").removeClass("displayNone");// 外国检索框显示
			$("#btnOtherCountry").removeClass("displayNone");// 检索按钮(外国)
			$("#btnChina").addClass("displayNone");// 检索按钮(中国)
			$(".china").addClass("cursorPointer");
			$(this).removeClass("cursorPointer");
			$("#alltcty").removeClass("displayNone");
			$("#othertcty").addClass("displayNone");
			loadOtherCountry();//所有国别
			findCountry("txnCountryCode.ajax", "", "code_type_group", "provinceWindow");//字母
			$(".conditionsItempan,.linker").remove();// 清空下面选择内容
			$("#provinceWindow .checkbox_true_full").click();// 调用复选框事件清空复选框
			$("#provinceWindow .searchInputText").val("");// 清空检索框
			showChina();
		});
		
		function showChina(){
			$("#regionList").addClass("displayNone");//中国 tree显示
			$("#provinceTreeDemo").removeClass("displayNone");// 清空检索框
		}
		
		//加载外国国别名称
		function loadOtherCountry(){
			otherCountry = new Array(); 
			$.ajax({
				type : "POST",
		//		async:false,
				url : "/" + rootPath + "txnOtherCountry.ajax",
				success : function(data) {
		
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode == "000000") {
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (null != record && "" != record ) {
							$(record).each(function (){
								var ele = $(this);
								if(ele.find("codename").text()!= "" && ele.find("codevalue").text()!=  ""){
									
									otherCountry.push(ele.find("codevalue").text()+" "+ele.find("codename").text());
								}
							});
							showCountry($("#alltcty"), otherCountry);
							var winType = $("#winType").val();
							if(winType == "tools"){
								$("input[name='cty']").hide();
							}
							
						} 
					}
				},
				error : function(data) {
					var nullTable = createNullDataTable();
					itemDiv.append(nullTable);
				}
			});
		}
		
		
		$(".leibie li").click(function() {
			$(".leibieSelected").addClass("leibieUnSelected");
			$(".leibieSelected").removeClass("leibieSelected");
			$(this).addClass("leibieSelected");
			$(this).removeClass("leibieUnSelected");
		});
		
		
		
		
		// 加载所有国家
		function showCountry(Id, arry) {
			var newtr = "";
			var alldiv = Id;
			$("#ctyTable").remove();
			var table = "<table id='ctyTable' style='width:90%' align='center' class='countryTable'>"
			var i = 0
			for (; i < arry.length;) {
				var value1 = arry[i].substring(0,arry[i].indexOf(" "));
				table += "<tr style='line-height:20px;'>" + "<td ><div class='floatLeft' style='color:rgb(52, 152, 219); '><input type='checkbox' name='cty' style='vertical-align:middle; margin-bottom:5px;margin-right:20px;' onclick='cuntryOnChecked(this);' value='" +value1
						+ "'></input>" + arry[i] + "</div> </td>";
						
						if(arry[i + 1]){
							var value2 = arry[i+1].substring(0,arry[i+1].indexOf(" "));
							table += "<td ><div class='floatLeft' style='color:rgb(52, 152, 219); '><input type='checkbox' name='cty' style='vertical-align:middle; margin-bottom:5px;margin-right:20px;' onclick='cuntryOnChecked(this);' value='" + value2+ "'></input>"
								  + arry[i + 1] + "</div></td>" ;
							
						}
				
						if(arry[i + 2]){
							var value3 = arry[i+2].substring(0,arry[i+2].indexOf(" "));
							table += "<td ><div class='floatLeft' style='color:rgb(52, 152, 219); '><input type='checkbox' name='cty' style='vertical-align:middle; margin-bottom:5px;margin-right:20px;' onclick='cuntryOnChecked(this);' value='"
								  + value3+ "'></input>" + arry[i + 2] + "</div></td>";
							
						}
						table += "</tr>";
				i = i + 3;
			}
			table += "</table>";
			alldiv.append(table);
		}
		
		// 显示全部国家
		$("#allt").click(function() {
			$("#letter").val("");
			var searchText = $("#provinceWindow .otherCyType>.btnProvinceSearch").next().val();// 查询内容
			if(searchText){
				
				var param ="select-key:codevalue="+searchText;
				mGrid_gridCty_obj.query(1, function() {// 异步加载
					gridLoadData("provinceWindow", "otherCyType>.btnProvinceSearch", "1");
				});
			}else{
				$("#alltcty").removeClass("displayNone");
				$("#othertcty").addClass("displayNone");
				loadOtherCountry();//加载所有外国代码集
				//隐藏复选框
			}
			findCountry("txnCountryCode.ajax", param, "code_type_group", "provinceWindow");//字母
		
		});
		
		
		// 外国区域复选框事件cuntryOnChecked
		function cuntryOnChecked(obj) {
		
			if (obj.checked == true) {
				// 添加
				addConditions("provinceWindow", obj.value, ".EditAreaText", ".conditionsItempan", "");
				checkValues = checkValues + " " + obj.value;
			} else {
				delConditions("provinceWindow", obj.value, ".EditAreaText", ".conditionsItempan");
				// 删除
				var arr = checkValues.split(" ");
				for ( var i = 0; i < arr.length; i++) {
					if (obj.value == arr[i]) {
						arr[i] = "";// 删除 当前文本
					}
				}
		
			}
		}
		///
		
		
		
		// 图片缩进
		function addzNodeMarginleft(node) {
			var node_id = $("#" + node.tId);
			var this_Img = node_id.find("a>span").css("margin-left");
			var this_margin = 0;
			var spanImg = node_id.find("ul").find("li").find("a>span");
			if (this_Img == "" || null == this_Img) {
				this_margin = (this_margin + 20) + "px";
			} else {
				var margin = parseInt(this_Img);
				this_margin = (20 + margin) + "px";
				
			}
			spanImg.css("display", "inline-block").css("margin-left", this_margin);
		}
		
		
		
		/**
		 * 列表加载
		 * @param windowId
		 * @param key
		 * @param language
		 */
		function loadGrid(windowId, key, language) {
			
			if (language) {
				var lang = $("#" + language).val();
				switchLanguage(windowId,lang);
			}
			$("input[name='ckb']").prop("checked", false);// 取消选项
			var item = "";
			if ($("#" + windowId).hasClass("conditionsItempan")) {
				item = $("#" + windowId).find(".conditionsItempan");
			} else if ($("#" + windowId).hasClass("conditionsItempan")) {
				item = $("#" + windowId).find(".conditionsItempan");
			}
			if (item) {
				item.each(function() {// 清空展示区内容
					$(this).next("span").remove();
					$(this).remove();
				});
			}
			var keys = key;
			if (key.indexOf(" ") != -1) {
		
				var keys = key.split(" ");
			}
			$(".zhDiv,.enDiv,.jpDiv,.symbolDiv").highlight(keys, {// 高亮显示
				insensitive : 100
			});
		}
		
		function switchLanguage(windowId,lang){
			if (1 == lang) {
				$("#" + windowId + " .zhDiv").removeClass("displayNone");
				$("#" + windowId + " .zhDiv").siblings("div").addClass("displayNone");
			} else if (2 == lang) {
				$("#" + windowId + " .enDiv").removeClass("displayNone");
				$("#" + windowId + " .enDiv").siblings("div").addClass("displayNone");
			} else if (3 == lang) {
				$("#" + windowId + " .jpDiv").siblings("div").addClass("displayNone");
				$("#" + windowId + " .jpDiv").removeClass("displayNone");
			}
		}
		
		/**
		 * 点击数字查询
		 */
		function findDataBySymbol(symbol, windowId,obj) {
			var winType = $("#winType").val();
			if(obj.tagName == "SPAN"){
				$(obj).css("color","red");
				$(obj).parent().siblings("span").children().css("color","blue");
				
			}
			if(obj.tagName == "A"){
				$(obj).siblings("span").children().css("color","blue");
			}
			
			if ("IPCwindow" == windowId) {
				$("#ipcsymbol").val(symbol);
				mGrid_gridIpc_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "btnSearch", "ipclanguage");
					if("tools" == winType){
						$(".tabSeaHisoederRight>input").hide();//￥查询时 隐藏列表中的复选框         
					}
				});
		
			} else if ("CPCwindow" == windowId) {
				$("#cpcsymbol").val(symbol);
				mGrid_gridCpc_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "btnSearch", "cpclanguage");
		
				});
		
			} else if ("FIWindow" == windowId) {
				$("#fisymbol").val(symbol);
				mGrid_gridFi_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "btnSearch", "filanguage");
				});
		
			}else if("FtermWindow" == windowId){
				$("#ftsymbol").val(symbol);
				mGrid_gridFterm_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "btnSearch", "ftlanguage");
				});
				
			}else if("UCWindow" == windowId){
				$("#ucsymbol").val(symbol);
				mGrid_gridUc_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "btnSearch", "uclanguage");
				});
				
			}else if("provinceWindow" == windowId){
				
				$("#alltcty").addClass("displayNone");
				$("#othertcty").removeClass("displayNone");
				$("#letter").val(symbol);
				$("#codevalue").val($("#"+windowId+" .otherCyType>.btnProvinceSearch").next().val());
				mGrid_gridCty_obj.query(1, function() {// 异步加载
					gridLoadData(windowId, "otherCyType>.btnProvinceSearch", "1");
				});
			}
			
		
		}
		
		/**
		 * 切换语言类型显示不同语言内容
		 */
		function divsiling(windowForm, languageValue) {
			if ('1' == languageValue) {
				$("#" + windowForm).find(".zhDiv").removeClass("displayNone");
				$("#" + windowForm).find(".zhDiv").siblings("div").addClass("displayNone");
			} else if ('2' == languageValue) {
				$("#" + windowForm).find(".enDiv").removeClass("displayNone");
				$("#" + windowForm).find(".enDiv").siblings("div").addClass("displayNone");
			} else if ('3' == languageValue) {
				$("#" + windowForm).find(".jpDiv").removeClass("displayNone");
				$("#" + windowForm).find(".jpDiv").siblings("div").addClass("displayNone");
			}
		}
		
		
		// ipc 根据对照表获取ipc对照表信息
		function addIpcDataToRightArea(obj) {
			var radiospan = $("#IPCwindow .radiosDiv").find("span");
			var language = getLanguageValue(radiospan);//语种
			var txnCode = "txnGetIpcByCpc.ajax";// cpc
			if ("cpc" == $("#tabType").val()) {
				txnCode = "txnGetIpcByCpc.ajax";// cpc
			} else if ("uc" == $("#tabType").val()) {
				txnCode = "txnGetIpcByUc.ajax";// uc
			} else if ("fi" == $("#tabType").val()) {
				txnCode = "txnGetIpcByFi.ajax";// fi
			} else if ("gm" == $("#tabType").val()) {
				txnCode = "txnGetIpcByGm.ajax";// fi
			}
			symbol =  $(obj).attr("v");
			
			doPostAjax(txnCode,symbol,language, "IPCwindow",$("#ipcItem"));
			switchLanguage("IPCwindow",language);
			
		}
		
		// 不包括ipc的其他窗口 添加数据到右侧区域显示
		function otherAddDataToRightArea(obj) {
			var txnCode = "";
			var symbol = $(obj).attr("v");
			var type = $(obj).attr("s");
			var tab = $("#tabType").val();
	
			var itemDiv = "";
			var windowForm = "";
			if ("cpc" == type) {// cpc
		
				txnCode = "txnGetCpcByIpc.ajax";
				itemDiv = $("#cpcItem");
				windowForm = "CPCwindow";
			} else if ("ft" == type) { // fterm
		
				txnCode = "txnGetFtByFi.ajax";
				windowForm = "FtermWindow";
				itemDiv = $("#ftItem");
			} else if ("fi" == type) {// fi
				//获取关联
				if ("cpc" == tab || "fi_ipc" == tab) {
		
					txnCode = "txnGetFiByIpc.ajax";
				} else if ("fi_ft" == tab) {
		
					txnCode = "txnGetFiByFt.ajax";
				}
				windowForm = "FIWindow";
				itemDiv = $("#fiItem");
		
			} else if ("uc" == type) {// uc
		
				txnCode = "txnGetUcByIpc.ajax";
				windowForm = "UCWindow";
				itemDiv = $("#ucItem");
			}
			var radiospan = $("#"+windowForm +" .radiosDiv").find("span");
			var language = getLanguageValue(radiospan);//语种
			doPostAjax(txnCode,symbol,language, windowForm,itemDiv);
			
		}
		
		
		
		// 点击展示事件
		function deleteAreaTtem(obj, treeId) {// ".areaItem
		
			var text = $(obj).parent().attr("v");
			if (treeId != null && treeId != "" && treeId != "undefined") {// zTree
				// 删除选中项
		
				var zTree = $.fn.zTree.getZTreeObj(treeId);
				var nodes = zTree.getCheckedNodes(true);
				for ( var i = 0; i < nodes.length; i++) {
		
					var nodename = nodes[i].num;
					//公司代码，区域代码显示为中文名称
					if ("companySysTreeDemo" == treeId || "provinceTreeDemo" == treeId ||"companyPerTreeDemo" == treeId 
						||"courtTreeDemo" == treeId || "chinaLawTree" == treeId) {
						nodename = nodes[i].name;
					}
					if (nodename == text) {
						 $(nodes[i]).attr("checked", false);
						 //$("#" + nodes[i].tId).find(".checkbox_true_full").click();
						 zTree.updateNode(nodes[i]);
						
						if (nodes[i].children) {
							for ( var j = 0; j < nodes[i].children.length; j++) {
								$(nodes[i].children[j]).attr("checked", false);
								zTree.updateNode(nodes[i].children[j]);
							}
		
						}
					}
				}
				
			} 
			delSpanArea($(obj).parent());
			
		}
		
		/**
		 * 非专利代码集开始
		 */
		function niceInit(){
			
			$.ajax({
				type : "POST",
				dataType : "xml",
				url : "/" + rootPath + "txnNiceClassInit.ajax",//txnCode
				//data : encodeURI(dataParam),
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
					} else {
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
						if (record != null) {
							var spans = "<table width:100px><tbody>";
							$(record).each(
									function(index, dom) {
										
										// 获取div
										var ele = $(this);
										if (ele.find("nice_code").text() != null && ele.find("goods_service_cn").text() != "") {
											// 增加按钮
											if(index%10==0){spans+="<tr><td></td></tr>"}
											spans += "<tr><td> style='margin-left:20px;margin-top:20px;display:inline; ' title='"+ele.find("goods_service_cn").text()+"'>" + ele.find("nice_code").text() + "</td></tr>";
										}
										
									});
							spans+= "</tbody></table>"
							$("#NiceList").append(spans);
						}
					}
				},
				error : function(data) {
					$("#NiceList span").remove();
				}
			});
		}
		
		/** 非专利代码集结束 **/
		//获取当前展示区内的值
		function getAreaItemValue(list){
			var value= "";
			if($(list).length>0){
				
				for(var i= 0 ;i<$(list).length;i++){
					if(i==0){
						
						value = ""+$(list).eq(i).attr("v")+"";
					}else{
						
						value += "$$$$"+$(list).eq(i).attr("v")+"";
					}
				}
			}
			return value;
		}
		function getAreaItemValueQuotes(list){
			var value= "";
			if($(list).length>0){
				
				for(var i= 0 ;i<$(list).length;i++){
					if(i==0){
						value = "'"+$(list).eq(i).attr("v")+"'"
					}else{
						
						value += "$$$$'"+$(list).eq(i).attr("v")+"'";
					}
				}
			}
			return value;
		}
		//清空展示区
		function deleteConditionsItem() {
			$(".conditionsItempan,.linker").remove();// 清空下面展示区选择内容
			$(".conditionsItempan,.linker").remove();// 清空下面展示区选择内容
		}
		// 加入输入框
		function addConditionsArea(textValue, windowForm) {
			var arr = $.trim(textValue).split("$$$$");
			var resultArry = unique(arr);//去重复
			var result = getResultText(resultArry, windowForm);//逻辑符
			textValue = result.join(" ");
			if (textValue != "") {
				$(callBackText).val(textValue.replace(/[#####]/g," "));//检索内容
				
			}
		
			MouseWheel();
			$("#" + windowForm).addClass("displayNone");
			$("#fieldMorePages").hide();
			overFlowHidden();
			$(callBackText).focus();
			$(callBackText).blur();
		}
		
		//获取尼斯分类
		function addNiceClass(textValue,windowForm){
			var arr = $.trim(textValue).split("$$$$");
			var niceValue = getNiceTextValue(arr);
			var niceClass = getResultText(niceValue, windowForm)
			var result = niceClass.join(" ");
			 
			$("#niceInputId").val(result);
		}
		//窗口关闭
		function windowClose(windowId){
			MouseWheel();
			$("#"+windowId+" .btnTree").removeClass("displayNone");
			$("#"+windowId+" .btnGrid").addClass("displayNone");
			$("#"+windowId).find(".searchInputText").val("");
			//$("#"+windowId).hide();
			$("#"+windowId).addClass("displayNone");
			$("#fieldMorePages").hide();
			$("#itemsTable").remove();
			overFlowHidden();
			initType();
			initContrast();
			$("#"+windowId+" .typeButton").removeClass("displayNone");
			
		}
		// 隐藏浮层
		function overFlowHidden() {
			$(".shielding_layer").addClass("displayNone");
			$(".bodyClass").removeClass("overflowHidden");
		}
		
		//浮层（点击分页锚点重定向）The anchor
		function anchorRedirect(windowId, searchText) {
		
			$("#" + windowId + " .modelGridPaginatorContainer li a").attr("href", "javascript:void(0);");
			var key = searchText;// 检索文本
			loadGrid(windowId, key);
			//工具条隐藏复选框
			var winType = $("#winType").val();
			if(winType == "tools"){
				gridHideCheckBox(windowId);
			}
		}
		
		// 列表加载数据
		function gridLoadData(windowId, btnClass, language) {
			$("#" + windowId + " .modelGridPaginatorContainer li a").attr("href", "javascript:void(0);");//锚点
			var key = $("#" + windowId + " ." + btnClass).next().val();// 检索文本
			loadGrid(windowId, key, language);// 翻页
			//工具条隐藏复选框
			var winType = $("#winType").val();
			if(winType == "tools"){
				gridHideCheckBox(windowId);
			}
			
		}
		
		function gridHideCheckBox(windowId){
			$("#"+windowId).find("span.getAllCode").hide();//全选
			$("#"+windowId+" .getAllCode").parent().children().hide();//全选
			//专利
			$("input[name='ipcuuid']").hide();
			$("input[name='cpcuuid']").hide();
			$("input[name='ucuuid']").hide();
			$("input[name='fiuuid']").hide();
			$("input[name='ftuuid']").hide();
			$("input[name='louuid']").hide();
			$("input[name='ctyuuid']").hide();
			$("input[name='octyuuid']").hide();
			$("input[name='cty']").hide();
			
			//商标
			$("input[name='ncguuid']").hide();
			//标准
			$("input[name='ccsuuid']").hide();
			$("input[name='icsuuid']").hide();
			//期刊
			$("input[name='sfxuuid']").hide();
			$("input[name='jcruuid']").hide();
			$("input[name='cjcruuid']").hide();
			$("input[name='asjcuuid']").hide();
			$("input[name='cnlibuuid']").hide();
			//判例
			$("input[name='patentuuid']").hide();
			$("input[name='cauuid']").hide();
			$("#mGrid_gridSqr input[name='sqruuid']").remove();
		}
		
		/**zTree扩展函数**/
		//获取所有公司父节点数据
		var parentNode ;
		function getCompanyParentNodes(treeNode,nodeParam){
			if(treeNode && treeNode.getParentNode()){
				parentNode = treeNode.getParentNode().num +":"+nodeParam ;
				getCompanyParentNodes(treeNode.getParentNode(),parentNode);
				
			}
				
			
		}
		//将子节点为选中状态的添加到下方展示区
		function addNodesToItem(treeId,treeNode,windowId){
			if(treeNode){
				if(treeNode.children){
					
					for(var i =0; i<treeNode.children.length; i++ ){
						if($("#" +treeNode.children[i].tId+"_check").hasClass("checkbox_true_full")){
							var value = treeNode.children[i].num;
							if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
								|| "courtTreeDemo" == treeId  || "chinaLawTree" == treeId){
								value = treeNode.children[i].name;
							}
								
							addConditions(windowId, value, ".EditAreaText", ".conditionsItempan", treeId);
						}
					}
					
				}else{
					
					addNodesToItem(treeId,treeNode.getParentNode(),windowId);
				}
				
			}else{
				return ;
			}
		}
		
		function areaAddNodesToItem(treeId,treeNode,windowId){
			if(treeNode){
				if(treeNode.children){
					
					for(var i =0; i<treeNode.children.length; i++ ){
						if($("#" +treeNode.children[i].tId+"_check").hasClass("checkbox_true_full")){
							
							var value = treeNode.children[i].name;
								if(!treeNode.children[i].children){
									$("#" + treeNode.children[i].tId+"_switch").click();
								}
								addNodesToItem(treeId,treeNode[i],windowId);
							addConditions(windowId, value, ".EditAreaText", ".conditionsItempan", treeId);
						}
					}
				}
				
			}else{
				return ;
			}
		}
		
		//父节点选中，将父节点的名称添加到下方展示区
		function addzTreeParentNodesChecked(treeNode,windowId,treeId){
			if(treeNode ){
				//添加
				if(treeNode.getParentNode() && $("#" +treeNode.getParentNode().tId+"_check").hasClass("checkbox_true_full")){
					delItemsNode(treeId, treeNode.getParentNode());
					addzTreeParentNodesChecked(treeNode.getParentNode(),windowId,treeId);
				}else{
					var value =  treeNode.num;
					if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
						|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
						value = treeNode.name;
					}
					addConditions(windowId, value,".EditAreaText",".conditionsItempan", treeId);
				}
			}else{
				return ;
			}
		}
		//取消当前节点上所有父节点的联动取消状态将下方内容删除
		function delzTreeParentNodesChecked(treeId,treeNode,windowId){
			if(treeNode){
				// 删除
				var value = treeNode.num;
				if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
					|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
					value = treeNode.name;
				}
				if(treeNode.children.length>1){
					
					delConditions(windowId, value, ".EditAreaText", ".conditionsItempan");
					delzTreeParentNodesChecked(treeId,treeNode.getParentNode(),windowId);
				}
			}else{
				return ;
			}
		}
		
		//取消当前节点下的所有子节点勾选状态
		function delzTreeChildrenNodesChecked(treeId,treeNode,windowId){
			if(treeNode.children){
				for ( var i = 0; i < treeNode.children.length; i++) {
					$(treeNode.children[i]).attr("checked", false);
					var value = treeNode.children[i].num;
					if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
						|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
						value = treeNode.children[i].name;
					}
					delConditions(windowId, value, ".EditAreaText", ".conditionsItempan");
					delzTreeChildrenNodesChecked(treeId,treeNode.children[i],windowId);
				}
				
			}
		}
		//删除与复选框相同名称的内容
		function delItemsNode(treeId, treeNode){
			var windowId = $("#" + treeId).attr("v");
			if(treeNode.children){
				for ( var i = 0; i < treeNode.children.length; i++) {
					var value = treeNode.children[i].num;
					if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
						|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
						value = treeNode.children[i].name;
					}
					delConditions(windowId, value, ".EditAreaText", ".conditionsItempan");
				}
			}
		}
		
		//添加子节点
		function addItemsNode(treeId, treeNode){
			var windowId = $("#" + treeId).attr("v");
			if(treeNode.children){
				
				for ( var i = 0; i < treeNode.children.length; i++) {
					var value = treeNode.children[i].num;
					if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId || "provinceTreeDemo" == treeId 
						|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
						value = treeNode.children[i].name;
					}
					addConditions(windowId, value,".EditAreaText",".conditionsItempan", treeId);
					//addItemsNode(treeId, treeNode);复用时打开
				}
			}
			if(treeNode.getParentNode()){
				var value = treeNode.num;
				if("companySysTreeDemo" == treeId || "companyPerTreeDemo" == treeId|| "provinceTreeDemo" == treeId 
					|| "courtTreeDemo" == treeId || "chinaLawTree" == treeId){
						value = treeNode.name;
						addConditions(windowId, value,".EditAreaText",".conditionsItempan", treeId);
				}
				
			}
		}
		
		
		/**公用函数*/
		
		//加载树，保持当前页面只有一个tree 加载。用于（优化页面）
		function initZTree(treeId, setting, zNodes, fileName, type) {
		
			jsonFileName = fileName;
			titleType = type;
			$.fn.zTree.init(treeId, setting, zNodes);
			initTreeStyle(zNodes);
		}
		//检索生成的grid列表复选框操作
		function gridOnChecked(obj, windowId) {
			var parentDiv = ".EditAreaText";
			var childrenDiv = ".conditionsItempan";
		/*if (windowId == "provinceWindow") {
				parentDiv = ".EditAreaText";
				childrenDiv = ".conditionsItempan";
			}*/
			if (obj.checked == true) {
				// 添加
				addConditions(windowId, obj.value, parentDiv, childrenDiv, "");
			} else {
		
				delConditions(windowId, obj.value, parentDiv, childrenDiv);
			}
		}
		//检索生成的grid列表复选框操作
		function agencyGridOnChecked(obj, windowId) {
			var parentDiv = ".EditAreaText";
			var childrenDiv = ".conditionsItempan";
			if (windowId == "agencyWindow") {
			
				$.ajax({
					type : "POST",
					dataType : "xml",
					async:false,
					url : "/" + rootPath + "txnGetUsedNameByAgencyName.ajax?",
					data : "select-key:agencyname=" + encodeURIComponent(obj.value),
					success : function(data) {
						var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
						if (errCode != "000000") {
						} else {
							var record = $.fz_common.getXmlNodeValues(data, "context>record");
							if (record != null) {
								$(record).each(
										function(index, dom) {
											var ele = $(this);
											
											// 按照个人和系统进行分类
											if (ele.find("usedname").text() != "") {
												if (obj.checked == true) {
													// 添加
													addConditions(windowId, ele.find("usedname").text(), parentDiv, childrenDiv, "");
												} else {
													
													delConditions(windowId, ele.find("usedname").text(), parentDiv, childrenDiv);
												}
												
											}
										});
							}
						}
					},
					error : function(data) {
						return;
					}
				});
			}

		}
		//选中复选框后加载列表下方DIV 内容 .EditAreaText .conditionsItempan
		function addConditions(windowId, value, parentDiv, itemDiv, treeId) {
		
			var words = new Array();
			
			if(windowId == "UCWindow"){
				if(value.indexOf('/') != -1){
					words[1] = value.replace("/","");
				}
			}
			if(windowId == "LocanoWindow"){
				if(value.indexOf('-') != -1){
					words[1] = value.replace("-","");
				}
			}
			words[0] = value;
			
			for(var i = 0; i < words.length; i++ ){
				var at =words[i];
				delConditions(windowId, words[i], parentDiv, itemDiv);
				var reg = /[\u4e00-\u9fa5]/g;
				if(reg.test(words[i])){
					if (words[i].length > 8) {
						at = words[i].substring(0, 8) + "...";
					}
					
				}else{
					if (words[i].length > 15) {
						at = words[i].substring(0, 15) + "...";
					}
					
				}
				
				
				var con = $("#" + windowId).find(parentDiv).children().length;
				if (con == 0) {
					$("#" + windowId).find(parentDiv).append("<div class='borderD3 positionRelative conditionsItempan areaItem' title='"+words[i]+"' v='" + words[i] + "' >" + at + "<b class='positionAbsolute' onclick='deleteAreaTtem(this,\"" + treeId + "\");' style='bottom:0px; right:8px;cursor: pointer;'>X</b></div>");
				} else {
					$("#" + windowId).find(parentDiv).append(
							"<span class='linker' onclick='changeWord1(this)' style='color:rgb(152,153,153); width:20px; height: 30px;float: left;margin-left:8px; margin-bottom:10px; margin-right: 8px;cursor: pointer;'>or</span>"
							+ "<div class='borderD3 positionRelative conditionsItempan areaItem' title='"+words[i]+"' v='" + words[i] + "' >" + at + "<b class='positionAbsolute' style='bottom:0px; right:8px;cursor: pointer' onclick='deleteAreaTtem(this,\"" + treeId + "\");'>X</b></div>");
				}
			}
		
		}
		
		function doPostAjax(txnCode,symbol,language, windowForm,itemDiv){
			$.ajax({
				type : "POST",
				url : "/" + rootPath + txnCode,
				data : "select-key:symbol=" + symbol,
				success : function(data) {
					var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
					if (errCode != "000000") {
		
					} else {
						var record = $.fz_common.getXmlNodeValues(data, "context>record");
		
						if (null != record && "" != record && record.text() != "") {
							var table = createDataTable(record, language, windowForm);
							$(itemDiv).append(table);
							var winType = $("#winType").val();
							if(winType == "tools"){
								$("input[name='ckbx']").hide();
							}
						} else {
							var nullTable = createNullDataTable();
							$(itemDiv).append(nullTable);
						}
					}
				},
				error : function(data) {
					var nullTable = createNullDataTable();
					$(itemDiv).append(nullTable);
				}
			});
		}
		
		function getLanguageValue(radiospan){
			
			for ( var i = 0; i < radiospan.length; i++) {// 语言类型
				if ($(radiospan.get(i)).hasClass("radioChecked")) {
					return $(radiospan.get(i)).attr("v");
				}
			}
		
		}
		/**
		 * 代码集全选
		 * @param name
		 *            复选框名
		 * @param windowId
		 *            窗体名
		 * @param parentDiv
		 *            父div
		 * @param childrenDiv
		 *            子div
		 */
		function selectAllCheckedBox(obj, name, windowId, parentDiv, childrenDiv) {
			var isChecked = $(obj).prop("checked");
			$("input[name='" + name + "']").prop("checked", isChecked);
			var symboText = "";
			checkValues = "";
			if (isChecked == true) {// 展示区显示
				$("input[name='" + name + "']").each(function() {
					addConditions(windowId, $(this).val(), "." + parentDiv, "." + childrenDiv);
					symboText = symboText + " " + $(this).val();
				});
		
			} else {// 展示区取消内容
		
				$("input[name='" + name + "']").each(function() {
					delConditions(windowId, $(this).val(), "." + parentDiv, "." + childrenDiv);
				});
		
			}
			checkValues = symboText;
		}
		
		/**
		 * 数据table
		 */
		function createDataTable(record, language, windowForm) {
			$("#itemsTable").remove();
			var zh = "";
			var en = "";
			var jp = "";
			if(language == 1){
				 en ="displayNone";
				 jp ="displayNone";
			}
			if(language == 2){
				zh ="displayNone";
				jp ="displayNone";
			}
			if(language == 3){
				zh ="displayNone";
				en ="displayNone";
			}
			var table = "<table id='itemsTable' style='border-bottom: 1px solid #d3d3d3;background-repeat: repeat;line-height:100%;width:100%;'><tbody>";
			$(record)
					.each(
							function() {
								var ele = $(this);
								if (ele.find("symbol").text() != null && ele.find("symbol").text() != "") {
		
									table += "<tr class='tabNum1 list'  style='border-bottom: 1px solid #d3d3d3;background-repeat: repeat;line-height:100%;'><td style='width:8%'><input type='checkbox' style='margin-bottom:5px;' name='ckbx' onclick='addIpcArea(this,\""
											+ windowForm + "\");' value='" + ele.find("symbol").text() + "'></td>" 
											+ "<td class='tabSeaHisoederRight'  style='width:20%;'> &nbsp;<span style='vertical-align:bottom;display:block;' >"
											+ ele.find("symbol").text() + "</span> &nbsp;</td>";
											if("FtermWindow" == windowForm && language == 3){
												table += "<td class='tabSeaHisoederRight'><div class='jpDiv'>"+ ele.find("number2_text").text() +"</div> </td>";
												}
											table += "<td class='tabSeaHisoederRight' style='line-height:20px;'><div class='zhDiv " + zh + "'>" + ele.find("zh_title_text").text() + "</div><div class='enDiv " + en + "'>" + ele.find("en_title_text").text() + "</div><div class='jpDiv " + jp + "'>" + ele.find("jp_title_text").text() + "</div></td></tr>"
								}
							});
			+"</tbody></table>";
			
			return table;
		}
		
		//清空右侧分类对照区内容
		function clearItemsTable() {
			$("#itemsTable").remove();
		}
		/**
		 * 空Table
		 */
		function createNullDataTable() {
			$("#itemsTable").remove();
			var table = "<table id='itemsTable' style='border-bottom: 1px solid #d3d3d3;background-repeat: repeat;line-height:100%;width:100%;'><tbody>";
			table += "<tr class='tabNum1 list'><td align='center' height='20px;'>未检索到对应结果。</td></tr>";
			table += "</tbody></table>";
			return table;
		}
		
		//分类对照右侧窗口/点击复选框事件
		function addIpcArea(obj, windowForm) {
			
			if(isRepeatSign(checkValues,$(obj).val())){
				alert("当前分类号已经存在。");
			}
			
			if ($(obj).is(':checked') == true) {
				addConditions(windowForm, $(obj).val(), ".EditAreaText", ".conditionsItempan");
				checkValues += $(obj).val() + " ";
			} else {
				delConditions(windowForm, $(obj).val(), ".EditAreaText", ".conditionsItempan");
				var arr = checkValues.split(" ");
				for ( var i = 0; i < arr.length; i++) {
					if (arr[i] == $(obj).val()) {
						arr[i] = "";// 删除 当前文本
					}
				}
				checkValues = arr.join(" ");
			}
		}
		function delSpanArea(obj){
			$(obj).each(function() {
				if ($(obj).prev().is("span")) {
					$(obj).prev("span").remove();
				} else {
					$(obj).next("span").remove();
				}
				$(obj).remove();
			});
			$(obj).remove();
		}
		//切除多余内容
		function strSplit(str) {
			var arr = str.split(" ");
			var b = new Array();
			for ( var i = 0; i < arr.length; i++) {
				if (arr[i] == "AND" || arr[i] == "OR" || arr[i] == "NOT") {
					arr[i] = "";
				} else {
		
					break;
				}
			}
			str = arr.join(" ");
			return str;
		}
		//文本框返回结果
		function getResultText(array, windowId) {
			var k = 0;
			$("#" + windowId).find("span.linker").each(function() {
				if ($.trim($(this).text()) != "") {
					for ( var i = 0; i < array.length; i++) {
						if (i == k && array[i] != "") {
							array[i] = array[i] + " " + $(this).text().toUpperCase() + " ";
						}
						
					}
					k++;
				}
			});
			if(array.length > 0&&(array[array.length-1].indexOf("OR")!=-1||array[array.length-1].indexOf("AND")!=-1)){
				array[array.length-1] = array[array.length-1].substring(0,array[array.length-1].indexOf(' '));
			}
			
			return array;
		}
		
		//重复提示
		function isRepeatSign(array,a){
			for(var i =0;i<array.length;i++){
				if(array[i]==a){
					return true
				}
			}
			return false
		}
		
		//获取逻辑符以外的检索词
		function getArrayDataLength(ar) {
			var textArr = new Array();
			var arr = ar.split(" ");
			for ( var i = 0; i < arr.length; i++) {
				if (arr[i] != "AND" && arr[i] != "OR" && arr[i] != "NOT" && arr[i] != "") {
		
					textArr.push(arr[i]);
				}
		
			}
			return textArr.length;
		}
		//将逻辑符转大写
		function toUpper(k) {
			var s = k.split(" ");
		
			for ( var i = 0; i < s.length; i++) {
				if (s[i] == "or" || s[i] == "and" || s[i] == "not") {
					s[i] = s[i].toUpperCase();
				}
			}
		
			if (s[s.length - 1] == "AND" || s[s.length - 1] == "OR" || s[s.length - 1] == "NOT") {
				s[s.length - 1] = "";
			}
			return s.join(" ");
		}
		
		/**
		 * 展示区逻辑符点击事件
		 * @param obj
		 */
		function changeWord1(obj) {
			var word = obj.innerHTML;
			if (word == "or") {
				obj.innerHTML = "and";
			} else {
				obj.innerHTML = "or"
			}
		}
		
		function setZbtnTree(zTreeId, checked) {
			var treeObj = $.fn.zTree.getZTreeObj(zTreeId);
			var nodes = treeObj.getCheckedNodes(true);
			for ( var i = 0, l = nodes.length; i < l; i++) {
				// 联动 设定 选择状态
				treeObj.checkNode(nodes[i], checked, true);
			}
		
		}
		
		/**
		 * 删除展示区内容
		 * @param windowId
		 * @param value
		 * @param parentDiv
		 * @param itemDiv
		 */
		function delConditions(windowId, value, parentDiv, itemDiv) {
			var words = new Array();
			
			if(windowId == "UCWindow"){
				if(value.indexOf('/') != -1){
					words[1] = value.replace("/","");
				}
			}
			if(windowId == "LocanoWindow"){
				if(value.indexOf('-') != -1){
					words[1] = value.replace("-","");
				}
			}
			words[0] = value;
			for(var i = 0; i < words.length; i++ ){
				$("#" + windowId).find(parentDiv + " " + itemDiv).each(function() {
					
					if ($(this).attr("v") == words[i]) {
						if ($(this).prev().is("span")) {
							$(this).prev("span").remove();
						} else {
							$(this).next("span").remove();
						}
						$(this).remove();
						return false;
					}
				});
			}
		}
		
		function getNiceTextValue(arr){
			
			if (arr.length > 0) {
				
				for(var i = 0; i<arr.length;i++){
					
					arr[i] = arr[i].substring(0,2);
				}
				
			}
			var resultArr = unique(arr);//去重复
			return resultArr;
		}
		
		/**
		 *列表 复选框事件 
		 * @param chk
		 * @returns {String}
		 */
		function getCheckBoxValue(chk) {
			var symbol = "";
			var arr = document.getElementsByName(chk);
			for ( var i = 0; i < arr.length; i++) {
				if (arr[i].checked == true) {
					symbol = symbol + "$$$$" + arr[i].value;
				}
			}
			return symbol;
		}
		
		/**
		 * 去重复
		 * @param arr
		 * @returns {Array}
		 */
		function unique(arr) {
			var result = [], hash = {};
			for ( var i = 0, elem; (elem = arr[i]) != null; i++) {
				if (!hash[elem]) {
					result.push(elem);
					hash[elem] = true;
				}
			}
			return result;
		
		}
		
		function getGroundColor(obj){
			
			$(obj).siblings("tr").css("background-color","");
			$(obj).css("background-color","#bfffff");
		}
		
		

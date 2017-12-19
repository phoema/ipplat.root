	
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

 
	ex='';
$(function(){ 
	
	var url=location.href;
	ex=decodeURIComponent(url.split('=')[1]); 
	 
	// start//关键字 
	$('#keyWord').click(function(){
		$('#keyWord_ul').show();
		
	});
	//关键字 
$("#keyWord_ul").mouseleave(function(){
		
		$("#keyWord_ul").hide();
		$(".keyWord").css("background-image", "url('images/btn_arrow_down.png')");
		
	});
	
	
	// 检索按钮
	$(".keyWord_Div").click(function() {
		$("#keyWord_ul").show();
		$("#keyWord").css("background-image", "url('images/btn_arrow_up.png')");
		return false;
	});
	$("#keyWord_ul li").mouseover(function() {
		$("#keyWord_ul li").removeClass("select_item");
		$(this).addClass("select_item");
	});
	$("#keyWord_ul li").click(function() {
		$("#keyWord_ul").hide();
		$("#keyWord").css("background-image", "url('images/btn_arrow_down.png')");
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
    ///end
	
	//start 排序
	$("#patentStrength").click(function() { 
	 $('#patentStrength_ul').show(); 
	});
	
	
	$("#patentStrength_ul").mouseleave(function(){ 
		$("#patentStrength_ul").hide();
		$($("#patentStrength_ul").prev().children().get(0)).css("background-image", "url('images/arrowBlueDown.png')");
 });
	
	
	//正序  降序
	$('#order').click(function(){
		 
		var orderType=$("#order").attr("v");
		 //alert('orderType'+orderType);
        var  sortname=$('#patentStrength').attr('v');
		if(orderType=='-'){
			//是降序
			$("#order").css("background-image", "url('images/btn8_1.png')");
			$("#order").attr("v","%2B"); 
			sort(orderType,sortname,1);
			
		 }else{
			//是升序
			$("#order").css("background-image", "url('images/btn7_1.png')");
			$("#order").attr("v","-");
			sort(orderType,sortname,1);
		 }  
	});
	 
	
	//end 排序
	
	 var express = $.trim($("#_expressCN2").val()); 
		if(express!=''){ 
			do2Search('AND');
			return;
		}else{
			getlist(ex,1);
		}
	
	
});
//弹出大图图层
function tobig(e,src){
//	var top=$(e).offset().top;
//	var left=$(e).offset().left;
	$("#showBigImage").show();
	$(".shielding_layer").removeClass("displayNone");
	  var scrolltop = $(document).scrollTop();
	  
	 $("#showBigImage").css("margin-top", scrolltop);
	  $("#bigimg").attr("src", src);
	 	$("#imgAlertTitle").html("");
	  setLayerHeight();
	 disabledMouseWheel();
	 $(".bodyClass").addClass("overflowHidden");
	
}
// 缩略图关闭
$(".closeBigImage").click(function() {
	$("#showBigImage").hide();
	$(".shielding_layer").addClass("displayNone"); 
	MouseWheel();
	$(".bodyClass").removeClass("overflowHidden");
});
//鼠标滚动
function MouseWheel() {
	window.onmousewheel = document.onmousewheel = true;
}

//设置浮层高度
function setLayerHeight() {
	var screenHeight = $(window).height();
	var scrolltop = $(document).scrollTop();
	$(".shielding_layer").css({
		height : screenHeight + scrolltop + 'px'
	});
	var screenWidth = document.body.scrollWidth;// 当前窗口宽度
	$("body").css({
		width : screenWidth + 'px'
	});
}
//鼠标禁止滚动
function disabledMouseWheel() { 
	var screenHeight = $(window).height();
	var scrolltop = $(document).scrollTop();
	$(".shielding_layer").css({
		height : screenHeight + scrolltop + 'px'
	});
	if (document.addEventListener) {
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	window.onmousewheel = document.onmousewheel = scrollFunc;
}
function scrollFunc(evt) {
	return false;
}



//获取排序

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


function switchSelectCommon(obj) {

	// 通用方法 隐藏DIV 并且带值到父级
	var div_selectUl = $(obj).parent().parent();
	$(div_selectUl).hide();
	$($(div_selectUl).prev().children().get(0)).css("background-image", "url('images/arrowBlueDown.png')").html(($(obj).text())).attr("v", $(obj).attr("value"));
}

//点击排序后调用的方法
function switchSelect_shanchu(content) {
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


//通用下拉列表
function switchMoseover(content) {
	$(content).mouseover(function(e) {
		$(content).removeClass("select_item");
		$(this).addClass("select_item");
	});
}

/*排序查询*/
 
function sort(orderType,sortname,currentpage){ // 

	$('#uul li').each(function(){
		 
		if($(this).attr('vvl')==sortname){
			$('#patentStrength').html($(this).html());
			$('#patentStrength').attr('v',sortname); 
		}
		
	});
	 //$('#patentStrength').html(sortstr);
	 $('#patentStrength_ul').hide();//让下来列表隐藏 用户体验好
	 //按照正序 倒序修正sotrname
	 var orderType=$("#order").attr("v");
	// alert('orderType---'+orderType);
	 if(orderType=='%2B'){
		 //要升序 需要修正   降序不必修正
		  sortname='+'+sortname;
	 }
 // alert('sortname***'+sortname);
	var sortex=ex;
	var express = $.trim($("#_expressCN2").val());
	if(express!='')
		{ // 有了二次检索 要带着二次检索表达式来排序查询
		var tit=$.trim($('#keyWord').text());
		sortex=ex+" AND ("+tit+'='+express+")"; 
		}  
	//初始化
	 $('#theme').html('');  
	  
		//初始化
		var innitstr='<div id="loading-indicator-theme-overlay" class="loading-indicator-overlay" style="width: 862px; height: 110px; left: 276.833px; position: absolute;  z-index: 5000;"></div>';
		innitstr+='<div id="loading-indicator-theme" class="loading-indicator" style="position: absolute; z-index: 5001; left:530px; "></div>';

		 $('#theme').html(innitstr);   
   var str='';  
 
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : _RootUrl+"zhuanli/getZhuanLi", 
		data:{
			 strWhere:sortex, 
			 page:currentpage,
			 sort:sortname
		}, 
		success : function(data) {
			
			var  obj=eval("("+data.option+")"); 
			if(obj=='null'|| obj==null){
				 $('#theme').html("<div>暂无内容</div>");  	
				 $('#contentTipNumList').html('0');
				return;
			}
			 else{  
				var  objrecord=eval( obj.records );
				 
				 if(objrecord!==undefined&&objrecord!='undefined'&&objrecord!=0){
					  
					 for(var i=0;i<objrecord.length;i++){ 
					 
						 
						 /*处理法律状态start*/
						  
				     	 str+='<div class="secondDiv ng-scope" ng-repeat="patent in data">';
				     	   str+='<div class="marginTop10 displayInline positionRelative" style="width:70%; overflow:hidden; float:left; height:auto!important; height:220px; min-height:220px;">';
						   str+='<div class=""><div class="displayInline title marginLeft40px titleDiv">';
						   str+='<a  href="detailZL.htm?pid='+objrecord[i].PID+'"  target="_blank" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">';
						   str+=fixnull(objrecord[i].TIO)+'</a></div>';          
						   str+='<div class="displayInline" style="float:right;">';           
						   str+='<a class="btntextalink TIChighlight account_state_1_link _link" style="float:left" >';  
						 if(objrecord[i].LSSC!=''&&objrecord[i].LSSC!='null'&&objrecord[i].LSSC!=null){ 
							  
							 str+='<div class="lssc2 iconFirst displayInline statusPatent">'+fixstate(objrecord[i].LSSC)+'</div></a>';
						 }
						 if(objrecord[i].PDT!=''&&objrecord[i].PDT!=null&&objrecord[i].PDT!='null'){
							 str+='<div class="pdt2 iconSecond displayInline statusPatent" style="background-color:#648bcf; float:left">'+objrecord[i].PDT+'</div></a>';
						 }   
						 
						                  
						   str+='</div></div>';                 
						   str+='<div class="marginLeft25 "><div class="marginleft imgContentLighHight">';            
						   str+='<div class="displayInline shuoming">申请号：</div>';     
						   if(ex.indexOf('OTHE')>-1){
							   //是其他地区
							   str+='<div style=" width:300px;" class="displayInline arial neirong ng-binding">'+objrecord[i].ANDB+'</div>';   
						   }else{
							   str+='<div style=" width:300px;" class="displayInline arial neirong ng-binding">'+objrecord[i].ANO+'</div>';
						   }
						                
						   str+='<div class="displayInline shuoming">申请日：</div>';            
						   str+='<div class="displayInline arial neirong ng-binding">'+fixdate(objrecord[i].AD)+'</div></div>';              
						   str+='<div class="marginleft imgContentLighHight">';               
						   str+='<div class="displayInline shuoming ">公布号：</div>';               
						   str+='<div style=" width:300px;" class="displayInline arial neirong ">';   
						   if(ex.indexOf('OTHE')>-1){
							   //是其他地区
							   str+=objrecord[i].PNDB+'</div>';//'<a  href="javascript:void(0);" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">'+objrecord[i].PNDB+'</a></div>';
							   }else{
								   str+=objrecord[i].PNO+'</div>';//'<a  href="javascript:void(0);" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">'+objrecord[i].PNO+'</a></div>';	   
							   }
						                   
						   str+='<div class="displayInline shuoming">公布日：</div>';              
						   str+='<div class="displayInline arial neirong ng-binding">'+fixdate(objrecord[i].PD)+'</div>';            
						   str+='</div><div class="marginleft imgContentLighHight">'; 
						   str+='<div class="displayInline shuoming" style="vertical-align: top">申请人：</div>';
						   str+='<div class="displayInline arial neirong blue APCLink APChighlight ng-binding" style="width: 70%;">';                
						 
                          if(objrecord[i].APO!=''&&objrecord[i].APO!=null&&objrecord[i].APO!='null'){
							    str+=objrecord[i].APO;//'<a href="javascript:void(0)" >'+objrecord[i].APO+'</a>';   
						   }
						   
						   str+='</div></div>';                
						   
						   //外观用这个 
						   if(objrecord[i].PDT=="外观设计"){ 
							   str+='<div class="lc2show marginleft imgContentLighHight">';                
							   str+='<div class="displayInline shuoming">洛迦诺分类：</div>';               
							   str+='<div class="displayInline arial blue neirong LJNQLink ng-binding">'+fixnull(objrecord[i].LC)+'</div></div>';              
							 }else{
								  str+='<div class="ipc2 marginleft imgContentLighHight">';                
								   str+='<div class="displayInline shuoming">IPC：</div>';              
								   str+='<div class="displayInline arial blue neirong IPCQLink ng-binding">'+fixnull(objrecord[i].IPC)+'</div></div>';               
							 }              
						   str+='<div style="display: none;" class="sfpnsContent marginleft imgContentLighHight">';              
						   str+='<div class="displayInline shuoming floatLeft">同族文献号：</div>';                 
						   str+='<div class="displayInline statusPatent arial neirong cursorPointer btnwenxianhao" style="background-color: rgb(100, 139, 255);" v="CN2512017Y">点击显示同族文献号</div>';                 
						   str+='<div class="displayNone wenxianhaoitems floatLeft patentfontword abstractDiv "><strong onclick="wenxianhao(this);" class="addplus cursorPointer" style="float:right;"></strong></div></div>';
						   
						   if(objrecord[i].PDT=="外观设计"){
							   //外观设计
							   str+='<div class=" marginleft imgContentLighHight">';
							   str+='<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_debe" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';
							   str+='<span class="shuoming">简要说明：</span>'+fixnull(objrecord[i].DEBEO)+'</div>';
							   str+='</div>';    
							   //外观结束
						   }else{
							 //摘要
							   str+='<div class="ipc2 marginleft imgContentLighHight">';                 
							   str+='<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_abs" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';                
							   str+='<span class="shuoming eshuomingt">摘要：</span>'+fixnull(objrecord[i].ABSO)+'</div>';
							   //摘要结束 
							 }
						   
						   //外观设计结束
						   
						   
						   if(objrecord[i].PDT=="外观设计"){
							   //外观设计   另一种
							   str+='</div></div>';  
							   str+='<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';   
							   str+='<div class="smallBigBox positionAbsolute">';
							   str+='<div style="display: none;" class="boxBig positionAbsolute">';   
							   str+='<div style="display: none; left: -456.409px; top: 0px;" class="big">';   
							   str+='<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
							   str+='</div><div class="small cursorPointer">';   
							   str+='<span style="left: 135.467px; top: 0px; display: none;"   class="markkk"></span>';    
							   str+='<img onerror="imgonerror(this);" onclick="tobig(this,\''+objrecord[i].src+'\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'+objrecord[i].src+'" class="im1 smallImgDisplay"></div>';   
							   str+='</div></div>';
							   str+='</div>'; 
							   str+='<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';   
							   str+='</div></div>';
						   }else{
							   
							   //   另一种
							   str+='</div></div></div>';  
							   str+='<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';   
							   str+='<div class="smallBigBox positionAbsolute">';
							   str+='<div style="display: none;" class="boxBig positionAbsolute">';   
							   str+='<div style="display: none; left: -456.409px; top: 0px;" class="big">';   
							   str+='<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
							   str+='</div><div class="small cursorPointer">';   
							   str+='<span style="left: 135.467px; top: 0px; display: none;" v="" class="markkk"></span>';    
							   str+='<img onerror="imgonerror(this);" onclick="tobig(this,\''+objrecord[i].src+'\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'+objrecord[i].src+'" class="im1 smallImgDisplay"></div>';   
							   str+='</div></div>';
							   str+='<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';   
							   str+='</div></div>';
						   } 
						  
						   
					}
					 $('#theme').html(str);  
					 $('#contentTipNumList').html(obj.total);
					  if(orderType=='%2B'){
			        		 //传给分页的  要还原回去
			        		  sortname=sortname.split('+')[1];
			        	 }  
			         getSortPage(obj.total,currentpage,sortname,orderType); 
					  
				  }else{
						 $('#theme').html("<div>暂无内容</div>");  
						 $('#contentTipNumList').html('0');
				  }  
			} 
		},
		error:function(){
			
			
		}
	});
 
      
}


function getlist(ex,currentpage){
	
	//初始化
	var innitstr='<div id="loading-indicator-theme-overlay" class="loading-indicator-overlay" style="width: 862px; height: 110px; left: 276.833px; position: absolute;  z-index: 5000;"></div>';
	innitstr+='<div id="loading-indicator-theme" class="loading-indicator" style="position: absolute; z-index: 5001; left:530px; "></div>';

	 $('#theme').html(innitstr);  
	  
	
	 
   var str='';  
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : _RootUrl+"zhuanli/getZhuanLi", 
		data:{
			 strWhere:ex, 
			 page:currentpage,
			 sort:''
		}, 
		success : function(data) {
			
			var  obj=eval("("+data.option+")"); 
			if(obj=='null'|| obj==null){
				  $('#theme').html("<div>暂无内容</div>");
				  $('#contentTipNumList').html('0');
				return;
			}
			 else{  
				var  objrecord=eval( obj.records );
				 if(objrecord!==undefined&&objrecord!='undefined'&&objrecord!=0){
					  
					 for(var i=0;i<objrecord.length;i++){ 
					 
						 
						 /*处理法律状态start*/
						  
				     	 str+='<div class="secondDiv ng-scope" ng-repeat="patent in data">';
				     	   str+='<div class="marginTop10 displayInline positionRelative" style="width:70%; overflow:hidden; float:left; height:auto!important; height:220px; min-height:220px;">';
						   str+='<div class=""><div class="displayInline title marginLeft40px titleDiv">';
						   str+='<a  href="detailZL.htm?pid='+objrecord[i].PID+'"  target="_blank" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">';
						   str+=fixnull(objrecord[i].TIO)+'</a></div>';          
						   str+='<div class="displayInline" style="float:right;">';           
						   
						 if(objrecord[i].LSSC!=''&&objrecord[i].LSSC!='null'&&objrecord[i].LSSC!=null){ 
							 str+='<a class="btntextalink TIChighlight account_state_1_link _link" style="float:left" >';  
							 str+='<div class="lssc2 iconFirst displayInline statusPatent">'+fixstate(objrecord[i].LSSC)+'</div></a>';
						 }
						        
						 if(objrecord[i].PDT!=''&&objrecord[i].PDT!=null&&objrecord[i].PDT!='null'){
							 str+='<div class="pdt2 iconSecond displayInline statusPatent" style="background-color:#648bcf; float:left">'+objrecord[i].PDT+'</div>';
						 }
						                  
						   str+='</div></div>';               
 						   str+='<div class="marginLeft25 "><div class="marginleft imgContentLighHight">';            
						   str+='<div class="displayInline shuoming">申请号：</div>';   
						   if(ex.indexOf('OTHE')>-1){
							   //是其他地区
							   str+='<div style=" width:300px;" class="displayInline arial neirong ng-binding">'+objrecord[i].ANDB+'</div>';   
						   }
						   else{
							   str+='<div style=" width:300px;" class="displayInline arial neirong ng-binding">'+objrecord[i].ANO+'</div>';  
						   }
						                
						   str+='<div class="displayInline shuoming">申请日：</div>';            
						   str+='<div class="displayInline arial neirong ng-binding">'+fixdate(objrecord[i].AD)+'</div></div>';              
						   str+='<div class="marginleft imgContentLighHight">';               
						   str+='<div class="displayInline shuoming ">公布号：</div>';               
						   str+='<div style=" width:300px;" class="displayInline arial neirong ">';                 
						   if(ex.indexOf('OTHE')>-1){
							   str+=objrecord[i].PNDB+'</div>';//'<a  href="javascript:void(0);" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">'+objrecord[i].PNDB+'</a></div>';   
						   }
						   else{
							   str+=objrecord[i].PNO+'</div>';//'<a  href="javascript:void(0);" class="signFilter TIChighlight languageSelectField account_state_1_link _link ng-binding">'+objrecord[i].PNO+'</a></div>';
						   }
						                  
						   str+='<div class="displayInline shuoming">公布日：</div>';              
						   str+='<div class="displayInline arial neirong ng-binding">'+fixdate(objrecord[i].PD)+'</div>';            
						   str+='</div><div class="marginleft imgContentLighHight">'; 
						   str+='<div class="displayInline shuoming" style="vertical-align: top">申请人：</div>';
						   str+='<div class="displayInline arial neirong blue APCLink APChighlight ng-binding" style="width: 70%;">';                
						   if(objrecord[i].APO!=''&&objrecord[i].APO!=null&&objrecord[i].APO!='null'){
							   
							   str+=objrecord[i].APO;//'<a href="javascript:void(0)" >'+objrecord[i].APO+'</a>';   
						   }
						   str+='</div></div>';
						                   
						   
						   //外观用这个 
						   if(objrecord[i].PDT=="外观设计"){ 
							   str+='<div class="lc2show marginleft imgContentLighHight">';                
							   str+='<div class="displayInline shuoming">洛迦诺分类：</div>';               
							   str+='<div class="displayInline arial blue neirong LJNQLink ng-binding">'+fixnull(objrecord[i].LC)+'</div></div>';              
							 }else{
								  str+='<div class="ipc2 marginleft imgContentLighHight">';                
								   str+='<div class="displayInline shuoming">IPC：</div>';              
								   str+='<div class="displayInline arial blue neirong IPCQLink ng-binding">'+fixnull(objrecord[i].IPC)+'</div></div>';               
							 }              
						   str+='<div style="display: none;" class="sfpnsContent marginleft imgContentLighHight">';              
						   str+='<div class="displayInline shuoming floatLeft">同族文献号：</div>';                 
						   str+='<div class="displayInline statusPatent arial neirong cursorPointer btnwenxianhao" style="background-color: rgb(100, 139, 255);" v="CN2512017Y">点击显示同族文献号</div>';                 
						   str+='<div class="displayNone wenxianhaoitems floatLeft patentfontword abstractDiv "><strong onclick="wenxianhao(this);" class="addplus cursorPointer" style="float:right;"></strong></div></div>';
						   
						   if(objrecord[i].PDT=="外观设计"){
							   //外观设计
							   str+='<div class=" marginleft imgContentLighHight">';
							   str+='<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_debe" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';
							   str+='<span class="shuoming">简要说明：</span>'+fixnull(objrecord[i].DEBEO)+'</div>';
							   str+='</div>';    
							   //外观结束
						   }else{
							 //摘要
							   str+='<div class="ipc2 marginleft imgContentLighHight">';                 
							   str+='<div pdt="2" pid="PIDCNY020020918000000000025120FCF0AJ3JB014094" docid="PIDCNY020020918000000000025120FCF0AJ3JB014094_abs" class="displayInline text abstractDiv ABSOhighlight languageSelectField signFilter imgSignFilter ng-binding">';                
							   str+='<span class="shuoming eshuomingt">摘要：</span>'+fixnull(objrecord[i].ABSO)+'</div>';
							   //摘要结束 
							 }
						   
						   //外观设计结束
						   
						   
						   if(objrecord[i].PDT=="外观设计"){
							   //外观设计   另一种
							   str+='</div></div>';  
							   str+='<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';   
							   str+='<div class="smallBigBox positionAbsolute">';
							   str+='<div style="display: none;" class="boxBig positionAbsolute">';   
							   str+='<div style="display: none; left: -456.409px; top: 0px;" class="big">';   
							   str+='<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
							   str+='</div><div class="small cursorPointer">';   
							   str+='<span style="left: 135.467px; top: 0px; display: none;"  class="markkk"></span>';    
							   str+='<img onerror="imgonerror(this);" onclick="tobig(this,\''+objrecord[i].src+'\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'+objrecord[i].src+'" class="im1 smallImgDisplay"></div>';   
							   str+='</div></div>';
							   str+='</div>'; 
							   str+='<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';   
							   str+='</div></div>'; 
						   }else{
							   
							   //   另一种
							   str+='</div></div></div>';  
							   str+='<div class="displayInline positionAbsolute marginTop15 marginLeft10 list_zl">';   
							   str+='<div class="smallBigBox positionAbsolute">';
							   str+='<div style="display: none;" class="boxBig positionAbsolute">';   
							   str+='<div style="display: none; left: -456.409px; top: 0px;" class="big">';   
							   str+='<img onerror="imgonerror(this);" style="width:936px; height:848px;" class="borderD3Radius2 bigImgDisplay" title="缩略图" src="images/THB_006.GIeF"></div>';
							   str+='</div><div class="small cursorPointer">';   
							   str+='<span style="left: 135.467px; top: 0px; display: none;" v="" class="markkk"></span>';    
							   str+='<img onerror="imgonerror(this);" onclick="tobig(this,\''+objrecord[i].src+'\')" alt="缩略图" style="width:214px; height:194px;" title="缩略图" src="'+objrecord[i].src+'" class="im1 smallImgDisplay"></div>';   
							   str+='</div></div>';
							   str+='<hr style=" border: 1px #cccccc dashed;clear:both; width:99%; margin:0 auto">';   
							   str+='</div></div> '; 
						   } 
					}
					 $('#theme').html(str);  
					 $('#contentTipNumList').html(obj.total);
			         getPage(obj.total,currentpage,ex); 
					  
				  }else{
					  $('#theme').html("<div>暂无内容</div>");  
					  $('#contentTipNumList').html('0');
					  
				  }  
			} 
		},
		error:function(){
			
			
		}
	});
 
      
}




//二次检索
function do2Search(_exp) {
	var final2ex=ex;
	var express = $.trim($("#_expressCN2").val());
	if(express!='')
		{
		var tit=$.trim($('#keyWord').text());
		 final2ex=ex+" AND ("+tit+'='+express+")"; 
		} 
	
	
	//alert('final2ex****'+final2ex);
	getlist(final2ex,1);
}



/*修正时间格式*/
function fixdate(str){
if(str==null||str=='null'){
	return '';
}else{
	var year=	str.substring(0,4);
	var month=	str.substring(4,6);
	var day=	str.substring(6,8);

	return year+'.'+month+'.'+day;
	
}
	

}

/*修正null值*/
function fixnull(str){
	if(str==null||str=='null')
	{
 str='';
	}
	return str;
}

/*修正显示状态*/
function fixstate(str){
	var reStr='';
	switch (str){
	case "1":
		reStr='有效';
	break;
	case "2":
		reStr='无效';
	break;
	case "3":
		reStr='在审';
	break;
	}
	
	return reStr;
}


function imgonerror(e){
	e.src='images/nopic.jpg';
	
}

 
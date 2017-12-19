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

// 采用正则表达式获取地址栏参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = decodeURIComponent(window.location.search).substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
 
$(function(){ 
	 
	var ex = GetQueryString("ex");//获得表达式    
	var db = GetQueryString("pdb");//获得数据库类型
	var union = GetQueryString("union");//
	$("#select-key_express").val(ex);
	$("#select-key_pdb").val(db);
	initleft();
	getlist(1,union);

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
	
	/*start 排序*/
	$("#patentStrength").click(function() { 
	 $('#patentStrength_ul').show(); 
	});
	
	
	$("#patentStrength_ul").mouseleave(function(){ 
		$("#patentStrength_ul").hide();
		$($("#patentStrength_ul").prev().children().get(0)).css("background-image", "url('images/arrowBlueDown.png')");
 });
	
	
	/*正序  降序*/
	$('#order').click(function(){
		 
		var orderType=$("#order").attr("v");
        var sortname=$('#patentStrength').attr('v');
		if(orderType=='-'){
			//是降序
			$("#order").css("background-image", "url('images/btn8_1.png')");
			$("#order").attr("v","+"); 
			sort(sortname,1); 
		 }else{
			//是升序
			$("#order").css("background-image", "url('images/btn7_1.png')");
			$("#order").attr("v","-");
			sort(sortname,1);
		 }  
	}); //end 排序
	
	
});
//弹出大图图层
function tobig(e,src){ 
	$("#showBigImage").show();
	$(".shielding_layer").removeClass("displayNone");
	  var scrolltop = $(document).scrollTop();
	  
	 $("#showBigImage").css("margin-top", scrolltop);
	  $("#bigimg").attr("src", src);
	 	$("#imgAlertTitle").html("");
	  setLayerHeight();
	 disabledMouseWheel();
	 $(".bodyClass").addClass("overflowHidden");
	 
	 
	// 大图出现后，再绑定缩略图关闭
	 $(".closeBigImage").click(function() { 
	 	$("#showBigImage").hide();
	 	$(".shielding_layer").addClass("displayNone"); 
	 	MouseWheel();
	 	$(".bodyClass").removeClass("overflowHidden");
	 });
	
} 

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
	var order = $.trim($("#order").attr("v"));

	return order + patentStrength;
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

/*点击按钮排序查询*/
function sort(sortname,currentpage){   
	$('#uul li').each(function(){ 
		if($(this).attr('value')==sortname){
			$('#patentStrength').html($(this).html());
			$('#patentStrength').attr('value',sortname); 
			$('#patentStrength').attr('v',sortname); 
		} 
	}); 
	 $('#patentStrength_ul').hide();//让下拉列表隐藏 用户体验好

	getlist(1); 

	 
 	
 }


function getlist(currentpage,union){  //,sort_column
	var express = $("#select-key_express").val();
	var pdb = $("#select-key_pdb").val();
	var leftEx = getCategorySelectExpress();
	var finalEx = express + leftEx;

    //初始化
	var innitstr='<div id="loading-indicator-theme-overlay" class="loading-indicator-overlay" style="width: 862px; height: 110px; left: 276.833px; position: absolute;  z-index: 5000;"></div>';
	innitstr+='<div id="loading-indicator-theme" class="loading-indicator" style="position: absolute; z-index: 5001; left:530px; "></div>';
	var	sort_column = getSort();
 
	$('#theme').html(innitstr);   
     
   var str='';  
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : "../api/trademark/search/expression", 
		data:{
			 express: finalEx, 
			 page:currentpage,
			 sort_column:sort_column//sort_column//+升序 -降序  默认按公布日降序
		     
		}, 
		success : function(data) {  
			var  obj=data.context; 
			if(!data.total || data.total == "0"){
				  $('#theme').html("<div style='padding:15px;'>当前没有查询出结果，请重新编辑，尝试再次查询。</div>");
				  $('#contentTipNumList').html('0');
				  $('#top300').hide();
				return;
			}		
			 else{  	
					var  objrecord=eval( obj.records ); 
					 if(objrecord!==undefined&&objrecord!='undefined'){
						 for(var i=0;i<objrecord.length;i++){ 
								
							  str+='<li class="ng-scope" style="line-height:15px; height:auto!important; height:120px; min-height:120px;" ng-repeat="patent in data">';
							  str+='<img onerror="imgonerror(this);"  onclick="showDetail(\''+objrecord[i].tid+'\')" style=" margin-right:20px;" class="tradtr-ImagTet-fit mark cursorPointer" src="'+ objrecord[i].tmsg+'">';
							  str+='<div class="tradtr-ImagTet-sec" style=" float:none;">';
							  str+='<table style=" width:600px;" border="0" cellpadding="0" cellspacing="0">';
							  str+='<tbody><tr>';
							  str+='<td style=" width:540px;" colspan="2"><h4 style="overflow:hidden; max-width:540px;" class="listHightDiv">';
							  str+='<a class="signFilter account_state_1_link _link ng-binding"  style=" display:block; width:95%; height:30px; line-height:30px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap;" target="_blank" href="../detail/txnTradeMarkDetail.html?tid='+objrecord[i].tid+'">';
							  str+= ((i+1)+(currentpage-1)*10)+'、'+fixnull(objrecord[i].mno)+'</a></h4></td></tr>';
							  str+='<tr><td style=" width:540px; white-space:normal;" colspan="2">';
							  str+='<b style=" float:left; line-height:20px;">尼斯分类：</b>';
							  str+='<span style=" width:88%;" class="displayInline NCLink patentfontword ng-binding"><a href="../list/trademarklist.html?ex= (尼斯分类 =  ( \''+objrecord[i].nc+'\'))" target="_blank" >'+ objrecord[i].nc+'</a></span>';
							  str+='</td></tr><tr>';
							  str+='<td class="ng-binding" style=" width:240px;"><b>注册号：</b>'+ objrecord[i].rn+'</td>';
							  str+='<td class="ng-binding"><b>注册日期：</b>'+ fixdate(objrecord[i].rd)+'</td></tr>';
							  str+='<tr><td class="ng-binding"><b>申请号：</b><a href="../detail/txnTradeMarkDetail.html?tid='+objrecord[i].tid+'" target="_blank">'+ objrecord[i].sn+'</a></td>';
							  str+='<td class="ng-binding"><b>申请日期：</b>'+ fixdate(objrecord[i].fd)+'</td></tr>';
							  str+='<tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
							  str+='<b>申请人名称：</b><span class="HNOLink listHightDiv ng-binding">';
							  str+='<a href="../list/trademarklist.html?ex= (申请人名称 =  ( \''+objrecord[i].hno+'\'))" target="_blank" style="word-break: break-all; word-wrap: break-word;"  >'+ objrecord[i].hno+'</a></span></td>';
							  str+='</tr><tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
							  str+='<b>代理人名称：</b><span class="ARLink listHightDiv ng-binding"> <a href="../list/trademarklist.html?ex= (代理人名称 =  ( \''+objrecord[i].aro+'\'))" target="_blank">'+ fixnull(objrecord[i].aro)+'</span></td>';
							  str+='</tr></tbody></table></div>';
							  str+='<div style="position: absolute;right:20px;top:0;margin-top:15px;"><span style="display: none;" class="tradtrRANK ng-binding"></span>';
							  str+='<span class="tradtrCS ng-binding">'+ objrecord[i].cs+'</span>';
							  str+='<span class="tradtrKind ng-binding">'+ objrecord[i].mk+'</span>';
							  str+='</div></li>';  	   
							}
						 $('#theme').html(str);   
						// 联合检索
						if (!!union) {
							// 联合检索显示
							$("#span-relation").show();
							var union_data=GetQueryString("union_data");
							if(!union_data){
								union_data = data.total+";" + data.trade_total+";"+data.soft_total+";"+data.work_total;
							}
							var express = GetQueryString("ex");//获得表达式    
							// 作成大数据关联数据显示条
							buildAllLinkRelation(union_data,express);
						}

				         getsbPage(data.total,currentpage);    
						 $('#contentTipNumList').html(data.total);
						 if(data.total>300){
							 $('#top300').show();
						 }else{
							 $('#top300').hide();
						 }
						  
					  }else{
						  $('#theme').html('暂无数据');
						  $('#contentTipNumList').html('0');
					  }  
				} 
  
  
		},
		error:function(){
			  $('#theme').html("<div style='padding:15px;'>当前没有查询出结果，请重新编辑，尝试再次查询。</div>");
			  $('#contentTipNumList').html('0');
			  $('#top300').hide();
		}
	});
 
      
}




/*重新检索 不是二次检索 不用加AND条件了*/
function do2Search() {  
	$('#categorySelectButton').html(''); 
	//触发左边栏统计或者上方重新检索后，关联数据条不再显示。
	$("#span-relation").hide();

	var txt=$.trim($("#_expressCN2").val()); //二次检索的文本框
	var keyWord=$('#keyWord').text();
	var m_str='';
	$("#_expressCN2").attr("title",keyWord);
	var express = fieldExpress($("#_expressCN2"), null, null, "");
		  
	if(express==''){
		$.fz_common.alert("提示", "请填写检索信息");
	}else{ 
		$("#select-key_express").val(express);
			initleft();
			getlist(1); 
	}   
}
 
 


/*修正时间格式*/
function fixdate(str){  
if(str==null||str=='null'){
	return '';
}else{
	var year=	str.substring(0,4);
	var month=	str.substring(5,7);
	var day=	str.substring(8,10);

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

/*左侧展示更多*/
function leftmore(e){ 
	var dd=$(e).parent().parent().find('div[class="selectContentMore disPlayNone"]').removeClass('disPlayNone');
	$('#leftup').show();
	$('#leftmore').hide();
	
}
/*左侧收起*/
function leftup(e){
	var dd=$(e).parent().parent().find('div[class="selectContentMore"]').addClass('disPlayNone');
	$('#leftup').hide();
	$('#leftmore').show(); 
}

/*左侧初始化*/
function initleft(){   
	var express = $("#select-key_express").val();
	var pdb = $("#select-key_pdb").val();
	var leftEx = getCategorySelectExpress();
	var finalEx = express + leftEx;
	$.ajax({
		url:'../api/trademark/statistics',
		type:'post',
		dataType:'json',
		data:{
			express:finalEx
		},
		success:function(sender){
			var  obj=sender.context; 
			if(obj=='null'|| obj==null){
				  $('#theme').html("<div>暂无内容</div>");
				  $('#contentTipNumList').html('0');
				return;
			}else{
				/*尼斯分类*/
				bulidLeft($('#NC'),obj.nc);
				/*申请人名称*/
				bulidLeft($('#HNO'),obj.hno);
				/*注册年*/
				bulidLeft($('#RY'),obj.ry);
				/*中国省区*/
				bulidLeft($('#CNR'),obj.cnr);
				/*代理人名称*/
				bulidLeft($('#ARO'),obj.aro);
				/*当前专利状态*/
				bulidLeft($('#CS'),obj.cs);
				
			}
		},
		error:function(){
			
		} 
	}); 
}



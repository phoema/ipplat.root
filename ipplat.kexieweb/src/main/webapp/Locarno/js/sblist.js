	 		 

 
	ex='';
$(function(){ 
 
	var url=location.href;
	 ex=decodeURIComponent(url.split('=')[1]);
	//alert('ex'+ex);
	 
	getsblist(ex,1); 
   ////////////////start
	//关键字 
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
 	
	//////////////////end
	
	//start 排序
	$("#patentStrength").click(function() { 
	 $('#patentStrength_ul').show(); 
	});
	
	
	$("#patentStrength_ul").mouseleave(function(){ 
		$("#patentStrength_ul").hide();
		$($("#patentStrength_ul").prev().children().get(0)).css("background-image", "url('images/arrowBlueDown.png')");
	 });
	
	
	
	//end 排序
	
	
	
	
});

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

 


//通用下拉列表
function switchMoseover(content) {
	$(content).mouseover(function(e) {
		$(content).removeClass("select_item");
		$(this).addClass("select_item");
	});
}

/*排序查询*/
 
function sort(orderType,sortname,currentpage){  
	  
	$('#uul li').each(function(){ 
		if($(this).attr('vvl')==sortname){ 
			 
				$('#patentStrength').html($(this).html()); 
				$('#patentStrength').attr('v',sortname); 
		}
		
	}); 
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
	  
   var str=''; 
  // alert('ex123___'+ex);
 
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : _RootUrl+"logo/getLogo", 
		data:{
			 strWhere:sortex, 
			 page:currentpage,
			 sort:sortname
		}, 
		success : function(data) {
			
			var  obj=eval("("+data.option+")"); 
			if(obj=='null'|| obj==null){
				 
				return;
			}
			 else{  
				var  objrecord=eval( obj.records );
				 if(objrecord!==undefined&&objrecord!='undefined'){
					 for(var i=0;i<objrecord.length;i++){ 
							
						  str+='<li class="ng-scope" style="line-height:15px; height:auto!important; height:120px; min-height:120px;" ng-repeat="patent in data">';
						  str+='<img onerror="imgonerror(this);"  style=" margin-right:20px;" class="tradtr-ImagTet-fit mark cursorPointer" src="'+ objrecord[i].src3+'">';
						  str+='<div class="tradtr-ImagTet-sec" style=" float:none;">';
						  str+='<table style=" width:600px;" border="0" cellpadding="0" cellspacing="0">';
						  str+='<tbody><tr>';
						  str+='<td style=" width:540px;" colspan="2"><h4 style="overflow:hidden; max-width:540px;" class="listHightDiv">';
						  str+='<a class="signFilter account_state_1_link _link ng-binding"  style=" display:block; width:95%; height:30px; line-height:30px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap;" target="_blank" href="trademarkdetail.htm?tid='+objrecord[i].TID+'">';
						  str+= objrecord[i].MNO+'</a></h4></td></tr>';
						  str+='<tr><td style=" width:540px; white-space:normal;" colspan="2">';
						  str+='<b style=" float:left; line-height:20px;">尼斯分类：</b>';
						  str+='<span style=" width:88%;" class="displayInline NCLink patentfontword ng-binding"><a  >'+ objrecord[i].NC+'</a></span>';
						  str+='</td></tr><tr>';
						  str+='<td class="ng-binding" style=" width:240px;"><b>注册号：</b>'+ objrecord[i].RN+'</td>';
						  str+='<td class="ng-binding"><b>注册日期：</b>'+ fixdate(objrecord[i].RD)+'</td></tr>';
						  str+='<tr><td class="ng-binding"><b>申请号：</b>'+ objrecord[i].SN+'</td>';
						  str+='<td class="ng-binding"><b>申请日期：</b>'+ fixdate(objrecord[i].FD)+'</td></tr>';
						  str+='<tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
						  str+='<b>申请人名称：</b><span class="HNOLink listHightDiv ng-binding">';
						  str+='<a style="word-break: break-all; word-wrap: break-word;"  >'+ objrecord[i].HNO+'</a></span></td>';
						  str+='</tr><tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
						  str+='<b>代理人名称：</b><span class="ARLink listHightDiv ng-binding">'+ fixnull(objrecord[i].ARO)+'</span></td>';
						  str+='</tr></tbody></table></div>';
						  str+='<div style="position: absolute;right:20px;top:0;margin-top:15px;"><span style="display: none;" class="tradtrRANK ng-binding"></span>';
						  str+='<span class="tradtrCS ng-binding">'+ objrecord[i].CS+'</span>';
						  str+='<span class="tradtrKind ng-binding">'+ objrecord[i].MK+'</span>';
						  str+='</div></li>';  	   
						}
						 $('#theme').html(str);    
			             $('#contentTipNumList').html(obj.total);
			             if(orderType=='%2B'){
			        		 //传给分页的  要还原回去
			        		  sortname=sortname.split('+')[1];
			        	 }  
			             getsbSortPage(obj.total,currentpage,sortname,orderType); 
					  
				  }  
			} 
		},
		error:function(){
			
			
		}
	});
 
      
}

//商标列表
function getsblist(ex,currentpage){
	 
	//初始化
	 $('#theme').html('');  
	  
   var str=''; 
   //alert('ex123___'+ex);
 
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : _RootUrl+"logo/getLogo", 
		data:{
			 strWhere:ex, 
			 page:currentpage
		}, 
		success : function(data) {
			
			var  obj=eval("("+data.option+")"); 
			if(obj=='null'|| obj==null){
				 
				return;
			}
			 else{  	
				var  objrecord=eval( obj.records ); 
				 if(objrecord!==undefined&&objrecord!='undefined'){
					  
					 
							 for(var i=0;i<objrecord.length;i++){ 
									
								  str+='<li class="ng-scope" style="line-height:15px; height:auto!important; height:120px; min-height:120px;" ng-repeat="patent in data">';
								  str+='<img onerror="imgonerror(this);"  onclick="showDetail(\''+objrecord[i].TID+'\')" style=" margin-right:20px;" class="tradtr-ImagTet-fit mark cursorPointer" src="'+ objrecord[i].src3+'">';
								  str+='<div class="tradtr-ImagTet-sec" style=" float:none;">';
								  str+='<table style=" width:600px;" border="0" cellpadding="0" cellspacing="0">';
								  str+='<tbody><tr>';
								  str+='<td style=" width:540px;" colspan="2"><h4 style="overflow:hidden; max-width:540px;" class="listHightDiv">';
								  str+='<a class="signFilter account_state_1_link _link ng-binding"  style=" display:block; width:95%; height:30px; line-height:30px; overflow:hidden; text-overflow:ellipsis; -o-text-overflow:ellipsis; white-space:nowrap;" target="_blank" href="trademarkdetail.htm?tid='+objrecord[i].TID+'">';
								  str+= objrecord[i].MNO+'</a></h4></td></tr>';
								  str+='<tr><td style=" width:540px; white-space:normal;" colspan="2">';
								  str+='<b style=" float:left; line-height:20px;">尼斯分类：</b>';
								  str+='<span style=" width:88%;" class="displayInline NCLink patentfontword ng-binding"><a  >'+ objrecord[i].NC+'</a></span>';
								  str+='</td></tr><tr>';
								  str+='<td class="ng-binding" style=" width:240px;"><b>注册号：</b>'+ objrecord[i].RN+'</td>';
								  str+='<td class="ng-binding"><b>注册日期：</b>'+ fixdate(objrecord[i].RD)+'</td></tr>';
								  str+='<tr><td class="ng-binding"><b>申请号：</b>'+ objrecord[i].SN+'</td>';
								  str+='<td class="ng-binding"><b>申请日期：</b>'+ fixdate(objrecord[i].FD)+'</td></tr>';
								  str+='<tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
								  str+='<b>申请人名称：</b><span class="HNOLink listHightDiv ng-binding">';
								  str+='<a style="word-break: break-all; word-wrap: break-word;"  >'+ objrecord[i].HNO+'</a></span></td>';
								  str+='</tr><tr><td colspan="2" style="word-break:break-all; word-wrap:break-word; width:540px;" valign="top">';
								  str+='<b>代理人名称：</b><span class="ARLink listHightDiv ng-binding">'+ fixnull(objrecord[i].ARO)+'</span></td>';
								  str+='</tr></tbody></table></div>';
								  str+='<div style="position: absolute;right:20px;top:0;margin-top:15px;"><span style="display: none;" class="tradtrRANK ng-binding"></span>';
								  str+='<span class="tradtrCS ng-binding">'+ objrecord[i].CS+'</span>';
								  str+='<span class="tradtrKind ng-binding">'+ objrecord[i].MK+'</span>';
								  str+='</div></li>';  	   
								}
								 $('#theme').html(str);   
						         getsbPage(obj.total,currentpage,ex);    
					 $('#contentTipNumList').html(obj.total);
					  
				  }else{
					  $('#theme').html('暂无数据');
					  $('#contentTipNumList').html('0');
				  }  
			} 
		},
		error:function(){
			
			
		}
	});
 
      
}

//跳转至详情页面
function showDetail(tid){ 
	// location.href='trademarkdetail.htm?tid='+tid;
	 window.open('trademarkdetail.htm?tid='+tid);
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
	 getsblist(final2ex,1);
}


//字段生成表达式

function fieldExpress(input, button, sign, m_str) {
 
	// 字段内容
	var v = $.trim($(input).val());
	v = v.replace("’", "'");
	v = v.replace("‘", "'");
	// 字段标题
	var t = $.trim($(input).attr("title"));

	// 字段连接符号
	var buttonVal = "";
	if (button != null && $(button).val() != null) {
		buttonVal = $(button).val() + "";
	}

	// 判断之前的内容
	if (buttonVal == "" && $.trim(m_str) != "") {
		m_str += " AND ";
	} else if ($.trim(m_str) == "") {
		 
	} else {
		m_str += buttonVal ;
	}

	// 判断单引号是否成对出现
	var regExp = /'(.*?)'/gi;

	// 匹配所有单引号引起来的部分
	var result = [];
	var match;
	while (match = regExp.exec(v)) {
		result.push(match[1]);
	}

	// 设置占位符
	for ( var i = 0; i < result.length; i++) {
		v = v.replace("'" + result[i] + "'", "#a#" + i + "#z#");
	}

	// 之后的内容需要做的处理
	// 2、英文文本不加单引号时，AND OR PRE/1 NOT XOR 、% 、?、#、( )不进行转义，其他的关键字全部转义处理
	// 3、单引号不成对出现时，需要做转义

	// 先替换转义字符
	// v = v.replace("\\", "\\\\");

	// 单引号转义(如果有也只有一个了 不需要正则)
	v = v.replace("'", "\\'");

	// 其他字符转义(全词不区分大小写匹配 全部替换)
	for ( var i = 0; i < trsKeyWord.length; i++) {

		if (v.indexOf(trsKeyWord[i]) > -1) {
			var pattern = eval("/\\b" + trsKeyWord[i] + "\\b/gmi");
			// var pattern = new RegExp("/\\b" + trsKeyWord[i] + "\\b/", "gmi");
			v = v.replace(pattern, "\\" + trsKeyWord[i]);
		}

	}

	// 符号直接全部替换 不进行全词匹配
	for ( var i = 0; i < trsKeySign.length; i++) {

		var pattern = new RegExp("\\" + trsKeySign[i], "gm");
		v = v.replace(pattern, "\\" + trsKeySign[i]);

	}

	// PRE/ AND/再替换回来
	v = v.replace(/(pre\\\/)/gmi, "PRE\/");
	v = v.replace(/(and\\\/)/gmi, "AND\/");

	// 判断百分号
	var perCent = "";
	for ( var i = 0; i < trsSpField.length; i++) {
		if (trsSpField[i] == t) {
			perCent = "%";
			break;
		}
	}

	// 单引号内部的内容不做任何处理 不加% 之后每个连接符前面增加%号
	if (perCent == "%") {
		var vTmplist = v.split(" ");

		var fieldStr = "";
		for ( var i = 0; i < vTmplist.length; i++) {

			var str = $.trim(vTmplist[i]);

			// 需要判断结尾是不是已经有%和是不是占位符
			for ( var n = 0; n < trsTranKeySign2.length; n++) {
				// 是连接符
				if (trsTranKeySign2[n] == str.toUpperCase()) {

					if (fieldStr != "") {

						if (!fieldStr.endWith("%") && !fieldStr.endWith("#z#")) {

							v = v.replace(fieldStr, fieldStr + "%");

						}

					}

				}
			}

			fieldStr = str;

		}

		// 最后一个
		if (!fieldStr.endWith("%") && !fieldStr.endWith("#z#") && fieldStr != "") {
			v = v.replace(fieldStr, fieldStr + "%");
		}
	}

	// 替换占位符 单引号内部的内容不做任何处理 不加%
	for ( var i = 0; i < result.length; i++) {
		v = v.replace("#a#" + i + "#z#", "'" + result[i] + "'");
	}

	if (t.indexOf("+") > 0 || t.indexOf(",") > 0) {
 
		//t = t.replace(/(\+)/g, ",");
		//m_str += t + " += "  + v ;
//上面这两句要保留 是DI上的 原始的格式规范
		m_str += t + " = "  + v ;
		
	} else {

		if ($.trim(v).indexOf("\\=") == 0 || $.trim(v).indexOf("\\<") == 0 || $.trim(v).indexOf("\\>") == 0 || $.trim(v).indexOf("\\!") == 0) {

			v = v.replace(/(\\=)/g, "=").replace(/(\\<)/g, "<").replace(/(\\>)/g, ">").replace(/(\\!)/g, "!");
			m_str += t + " " + v;

		} else {

			m_str += t + " = " + v  ;
		}
	}

	return m_str;

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

 
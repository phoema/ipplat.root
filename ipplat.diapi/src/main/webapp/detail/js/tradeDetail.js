tid='';
$(function(){
	  var url=location.href;
	  tid=url.split('=')[1];
	  getDetail(tid); 
	  getSeq(tid);
	  getRl(tid);
	  /*展示  商标详情*/
	  $('#tdmarkdtil1').click(function(){
		/*样式更改*/
		  $('#tdmarkdtil1').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		  /*内容更改*/
 		  $('#part1').show().siblings().hide();
 		//  $('#tradehook').show();
 		//  $('#tradeRlhook').hide();
	  });
	  
	  /*展示  商标流程*/
	  $('#tdmarkdtil2').click(function(){
		/*样式更改*/
		  $('#tdmarkdtil2').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		
		  /*内容更改*/
 		  $('#part2').show().siblings().hide();
 		//  $('#tradehook').hide();
 		//  $('#tradeRlhook').hide();
	  });
	  
	  /*展示  商标相关数据*/
	  $('#tdmarkdtil3').click(function(){
		/*样式更改*/
		  $('#tdmarkdtil3').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		  /*内容更改*/ 
 		 $('#part3').show().siblings().hide(); 
 		  //  $('#tradehook').hide();
 		//  $('#tradeRlhook').show();
	  });
	  
	  
	  $('#traCount').click(function(){
			 cutway('traCount');  
		 });
	  $('#patCount').click(function(){
			 cutway('patCount');  
		 });
	  $('#stdCount').click(function(){
			 cutway('stdCount');  
		 });
	  $('#iseCount').click(function(){
			 cutway('iseCount');  
		 });
	  
});

/*处理快捷方式*/
function cutway(str){
	if($.trim($('#'+str).html())!=0){
		 $('#tdmarkdtil3').click();
	 }
}

/*商标相关数据 card*/
function getRl(tid){ 
	/*相关商标   表格*/
//      var ce1="序号1"; 
//      var ce2="注册号1";
//      var ce3="注册日期";
//      var ce4="tradename";
//      var ce5="applyname";
//      var ce6="nctype";
//      var ce7="imgsrc";
      var  str='';
	 
 
//
///*相关软著*/
//  str='';
//str='<tr class="trstd_1 similarySta">';
//str+='<td>'+ce1+'</td>';
//str+='<td class=" ">'+ce2+'</td>';
//str+='<td class="">'+ce3+'</td>';
//str+='<td class="filterDay1">'+ce4+'</td>';
//str+='<td><a target="_blank" href="http">'+ce5+'</a></td>';
//str+='<td class="STDSDCOLink">';
//str+='<a href="h9" target="_blank">'+ce6+'</a></td>';
//str+='<td>'+ce7+'</td></tr>';
//$('#similarStdLinkTB').append(str);
///*相关作品*/
//  str='';
//str='<tr class="trpat_1 similarExpLink1 similaryPat">';
//str+='<td>'+ce1+'</td>';
//str+='<td>'+ce2+'</td>';
//str+='<td class="filterDay1">'+ce3+'</td>';
//str+='<td><a href="htt" target="_blank" title="'+ce4+'">'+ce4+'</a></td>';
//str+='<td class="PATAPCLink">';
//str+='<a href="http" target="_blank">'+ce5+'</a></td>';
//str+='<td class="PATIPCQLink" style=" padding: 0 10px 0 10px;">'+ce6+'</td>';
//str+='</tr>';
//$('#similarPieceTB').append(str);
//  return;
		
		 /*处理总数字段@@@@@@@@@@*/
		 $('#similarTraLink').html('没接口').hide();
		 $('#similarPatLink').html('没接口').hide();
		 $('#similarStdLink').html('没接口').hide();
		 $('#similarPiece').html('没接口').hide();
		 /*@@@@@没接口的先隐藏*/
		 $('#table_std').parent().hide(); 
		 $('#tradeRlhook').find("li[v='a8']").hide();
		 $('#table_work').parent().hide(); 
		 $('#tradeRlhook').find("li[v='a9']").hide();
		  
	$.ajax({
		type : "post",
		dataType : "json",  
        url :"../api/trademark/related", 
		data:{
			id:tid
		}, 
		success:function(data){   
			var objor= data.context;
			var objRecords= objor.records ;  
			var tra= objRecords[0].tra;  //相关 
			var pat= objRecords[0].pat;  //相关    
			if(!objor||(!pat&&!tra)){ 
				
				var tstr='<div style="height:110px">';
		    	tstr+='<div  style="padding-top:20px;font-size:30px" align="center">';
		    	tstr+='暂无相关数据的任何数据</div></div>';
		    	  $("#part3").html(tstr);
				return;
			}
			 else{    
				 str='';   
				 if(!!tra){ 
					  
					 for(var i=0;i<tra.length;i++){
						str+='<tr class="trtra_1 similaryTra">';
						str+='<td>'+tra[i].id+'</td>';
						str+='<td>'+tra[i].rn+'</td>';
						str+='<td class="filterDay2">'+fixdate2(tra[i].rd)+'</td>';
						str+='<td>'+tra[i].mno+'</td>';
						str+='<td>'+fixnull(tra[i].hn)+'</td>';
						str+='<td>'+fixnull(tra[i].nc)+'</td>';
						str+='<td><img onerror="imgonerror(this);"  src="'+tra[i].tmsg+'" width="150" height="120"></td>';
						str+='</tr>';
//						str+='<td class="TRAHNLink">';
//						str+='<a href="../list/trademarklist.html?ex= (申请人名称= (\''+tra[i].hn+'\' ) )" target="_blank">'+fixnull(tra[i].hn)+'</a></td>';
//						str+='<td class="NCLink">' ;
//						 if(tra[i].nc!=''){
//								var ipcs=tra[i].nc.split(';'); 
//								for(var j=0;j<ipcs.length;j++){
//									str+='<a href="../list/trademarklist.html?ex=尼斯分类=(\''+ipcs[j]+'\')" target="_blank" >'+ipcs[j]+'</a>  ';
//								}  
//							} 
						
						
//						str+='</td><td><img onerror="imgonerror(this);"  src="'+tra[i].tmsg+'" width="150" height="120"></td></tr>';
				 }
					 $('#table_traTB').append(str);
				 }
				 else{
					 $('#table_tra').parent().hide(); 
					 $('#tradeRlhook').find("li[v='a6']").hide();
				 }
				 /*相关专利表格*/
				 str=''; 
				 if(!!pat){ 
					 for(var i=0;i<pat.length;i++){
						  str+='<tr class="trpat_1 similarExpLink1 similaryPat">';
						  str+='<td>'+pat[i].id+'</td>';
						  str+=' <td>'+pat[i].pno+'</td>';
						  str+='<td class="filterDay1">'+fixdate2(pat[i].ad)+'</td>';
						  str+='<td>'+pat[i].tio+'</td>';
						  
						  str+=' <td>'+fixnull(pat[i].ap1o)+'</td>';
						  str+=' <td>'+fixnull(pat[i].ipc)+'</td>';
						  str+='</tr>';

//						  str+='<td class="PATAPCLink">';
//						  str+='<a href="../list/patentlist.html?ex=申请人=(\''+pat[i].ap1o+'\')" target="_blank">'+fixnull(pat[i].ap1o)+'</a></td>';
//						  str+='<td class="PATIPCQLink" style=" padding: 0 10px 0 10px;">';
//						  
//						  if(pat[i].ipc!=''&& pat[i].ipc!=undefined&& pat[i].ipc!='undefined'){
//								var ipcs=pat[i].ipc.split(';'); 
//								for(var j=0;j<ipcs.length;j++){
//									str+='<a href="../list/patentlist.html?ex=IPC=(\''+ipcs[j]+'\')" target="_blank" >'+ipcs[j]+'</a>  ';
//								}
//								 
//							} 
//						  
//						  
//						  str+='</td></tr>';  
					 } 
						$('#table_patTB').append(str);
					} else{
						 $('#table_pat').parent().hide(); 
						 $('#tradeRlhook').find("li[v='a7']").hide();
					 }
				 
			 }
		
			 
		},
		error:function(){ 
		}
	});
}
/*商标流程card*/
function getSeq(tid){
	 
	$.ajax({
		type : "post",
		dataType : "json",  
        url :"../api/trademark/detail/procedure", 
		data:{
			id:tid
		}, 
		success:function(data){ 
			
			
			 var objor= data.context;
		      if(objor==''){
		    	  var sstr='<tr style="height:110px">';
		    		sstr+='<td colspan="3" style="font-size:30px" align="center">';
		    		sstr+='没有相关流程信息';
		    		sstr+='</td></tr>'; 
		    		$('#overflow').html(sstr); 
		    		return;
		      }
		     var objRecords= objor.records ;  
		     if(objRecords==undefined&&objRecords=='undefined')
		     {      
		    	 var sstr='<tr style="height:110px">';
		    		sstr+='<td colspan="3" style="font-size:30px" align="center">';
		    		sstr+='没有相关流程信息';
		    		sstr+='</td></tr>'; 
		    		$('#overflow').html(sstr); 
		    		return;
		     } 
		    	 var obj= objRecords[0];
		     		  
			if(obj=='null'|| obj==null){ 
				 var sstr='<tr style="height:110px">';
		    		sstr+='<td colspan="3" style="font-size:30px" align="center">';
		    		sstr+='没有相关流程信息';
		    		sstr+='</td></tr>'; 
		    		$('#overflow').html(sstr); 
				return;
			}
			 else{   
      		 for(var i=0;i<obj.length;i++){
					str='<tr style="height:110px">';
					str+='<td class="firsttd">';
					str+='<li class="legalStatusWarning" title="'+obj[i].mpd+'"></li>';
					str+='</td><td colspan="2"><div style="position:relative">';
					str+='<div style="width:10px;background:url(images/left.png) no-repeat;background-size:10px 100%;height:100px;display:inline-block;position:absolute;left:0"></div>';
					str+='<table class="Width100P borderD3" style="margin-left:8px;height:100px;border-left:0px" cellspacing="0" cellpadding="0">';
					str+='<tbody><tr><td class="cc legalStatusTdWidth" align="center">';
					str+='<div class="tdPadding"><span class="fontSize20">'+obj[i].mpd;
					str+='</span></div></td><td class="cc legalStatusTdWidth">';
					str+='<div class="tdPadding" style="text-align:center">'+obj[i].mpde;
					str+='</div></td></tr>';
					str+='</tbody></table></div></td></tr>';
					$('#overflow').append(str); 
				 }
 
			 }
			 
		},
		error:function(){ 
		}
	});
}

/*商标详情card*/
function getDetail(tid){ 
	$.ajax({
		type : "post",
		dataType : "json",  
        url :"../api/trademark/detail/china", 
		data:{
			 id:tid
		}, 
		success:function(data){    
		    var objor= data.context;
			var objRecords= objor.records ;  
			var obj= objRecords[0].tradeMark; 
			 var applicants='';
			if(!!objRecords[0].applicants)
				{ 
				  applicants= objRecords[0].applicants[0];
				}
			
			var kinds =   objRecords[0].kinds; 
			if(objor=='null'|| objor==null){ 
				return;
			}
			 else{       
				$('#tip0').html(obj.mno);
				$('#tip1').html(obj.cs);  
				 
				// jia 商标类型拼装
				if(kinds){
					var kindstr='';
					for(var i =0 ;i< kinds.length;i++){
						kindstr += kinds[i].mk + ';';
					}
					if(kindstr.length > 0) kindstr = kindstr.substring(0,kindstr.length-1);
					$('#tip2').html(kindstr); 
				}
				$('#picsrc').attr('src',obj.tmsg); //商标大图片
				$('#registno').html(obj.rn);//注册号
				$('#registDT').html(fixdate(obj.rd));//注册日期
				$('#applyNO').html(objRecords[0].sn);//申请号
				$('#applyDT').html(fixdate(obj.fd));//申请日期
				$('#ncnum').html(obj.nc);//尼斯分类
				$('#ncnum').attr('href','../list/trademarklist.html?ex= (尼斯分类 =(\''+obj.nc+'\') ) ');
				$('#sameNO').html(obj.ncs);//类似群号
				
				if(!!objRecords[0].applicants)
					{
					
					$('#appealTrademark').html(applicants.hno);//申请人名称
					$('#applyareaCode').html(applicants.hnac);//申请人区域代码
					$('#applyAddr').html(applicants.hnado);//申请人地址
					}
				
				
				$('#appealTrademark').attr('href','../list/trademarklist.html?ex= (申请人名称= (\''+applicants.hno+' \') )');
				
				$('#dailiTrademark').html(obj.aro);//代理人名称
				$('#dailiTrademark').attr('href','../list/trademarklist.html?ex= (代理人名称= (\''+obj.aro+'\' ) )'); 
				$('#serve').html(obj.cnncs);//商品/服务列表
				$('#cshhqh').html(obj.peai); //初审公告期号
				$('#csggrq').html(fixdate(obj.fad));//初审公告日期
				$('#csggym').html(obj.peap);//初审公告页码
				$('#gjzcrq').html(fixdate(obj.ird));//国际注册日期
				$('#zcggqh').html(obj.rai);//注册公告期号
				$('#yxqrq').html(fixdate(obj.mprd));//优先权日期
				$('#zyqqxstart').html(fixdate(obj.rd));//专用权期限开始日期
				$('#zyqqxend').html(fixdate(obj.sred));//专用权期限截止日期
				$('#yyend').html(fixdate(obj.oed));//异议截止日期
				$('#hqzdrq').html(fixdate(obj.lsd));//后期指定日期
				$('#color').html(obj.msc);//指定颜色 
				$('#sharetrade').html(obj.ts=="0"?"否":"是");//共有商标  
				$('#nr').html(obj.mas);
  
			 }
			 
		},
		error:function(){ 
		}
	});
	
}	
	
//logo图片错误处理
var imgonerror = function (_obj) {    
  _obj.src='images/nopic.jpg';
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

/*修正时间格式2*/
function fixdate2(str){  
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
	if(str==null||str=='null'||str==undefined||str=='undefined')
	{
 str='';
	}
	return str;
}

pid='';
$(function(){
	
	/*显示文献详情*/
	  $(".patentdetail").click(function(){
	 $('#wxSelect').show();
	 $('#wxunSelect').hide();
	 $('#flunSelect').show();
	 $('#flSelect').hide();
	 
	 $('#wxCard').show();
	 $('#flCard').hide();
	  });
	  
	  /*显示法律状态*/
	  $('#flunSelect').click(function(){
		  $('#wxSelect').hide();
			 $('#wxunSelect').show();
			 $('#flunSelect').hide();
			 $('#flSelect').show();
		  
			 $('#flCard').show();
			 $('#wxCard').hide();
	  });
	  
	  var url=location.href;
	  pid=url.split('=')[1];
	  getDetail(pid);
	  getDetail2(pid);//  执行法律专题 和 pdf全文功能
	  
});

 
function getDetail(pid){
 
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : _RootUrl+"zhuanli/getDetail", 
		data:{
			 strWhere:'PID='+pid 
		}, 
		success:function(data){  
			var  obj=eval( data.option );   
			 
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{  
				 // alert(obj[0].CRO);
				 
				 $('#patentTitle').html(fixnull(obj[0].TIO)); //title
				if(obj[0].ANO==null||obj[0].ANO=='null'){
					 $('#sqh').html(obj[0].ANDB); //申请号
				}else{
					 $('#sqh').html(obj[0].ANO); //申请号
				}
				
				if(obj[0].PNO==null||obj[0].PNO=='null'){
					$('#gbh').html(obj[0].PNDB);//公布号
					 pubno=obj[0].PNDB;
				 
				 }else{
					 pubno=obj[0].PNO;
					 $('#gbh').html(obj[0].PNO);//公布号
					
				 }
					
					$('#sqr').html(obj[0].AD);//申请日
					$('#gbr').html(obj[0].PD);//公布日
					$('#sqren').html(obj[0].APO);//申请日
					$('#patentren').html(obj[0].ASO);//专利权人
					$('#patentaddr').html(obj[0].AP1ADO);//申请人地址
					$('#areacode').html(obj[0].APAC);//区域代码
					$('#famingren').html(obj[0].INO);//发明人
				 
					$('#ipc').html(obj[0].IPC); //IPC
					$('#cpc').html(obj[0].CPC);
					if(obj[0].PRNO==null||obj[0].PRNO=='null')
						{
						$('#prior').html(obj[0].PRNDB);//优先权
						}else{
							$('#prior').html(obj[0].PRNO);//优先权
						}
					
					
					$('#checker').html(obj[0].EXO);//审查员
					$('#agency').html(obj[0].CRO);//代理机构
					$('#agent').html(obj[0].AGO);//代理人
					$('#internationapply').html(obj[0].PCTA); //国际申请
					$('#internationalpub').html(obj[0].PCTP); //国际公布
					$('#enterdate').html(obj[0].PCTSD);//进入国家日期
					
					
					$('#catelog').html(obj[0].NC); //本国分类
					$('#fayshenqing').html(obj[0].DP);//分案原申请
					 
				
					if(obj[0].PDT=='外观设计'){ 
						$('#abs').html(obj[0].DEBEO);//简要说明
						$('#anchor3').html('简要说明');
						$('#absimg').hide();//隐藏图
					}else{
						$('#abs').html(obj[0].ABSO);//摘要
					}
					
					
					if((obj[0].PDT=='null'||obj[0].PDT==null)&&(obj[0].LSSC=='null'||obj[0].LSSC==null))
					{
						$('#tip2').hide();
					}
					else if((obj[0].PDT=='null'||obj[0].PDT==null)&&(obj[0].LSSC!='null'||obj[0].LSSC!=null))
					{
						$('#pdtpic').hide();
						$('#straight').hide();
					}
					else if((obj[0].PDT!='null'||obj[0].PDT!=null)&&(obj[0].LSSC=='null'||obj[0].LSSC==null))
					{
						$('#statepic').hide();
						$('#straight').hide();
						$('#pdt').html(obj[0].PDT); //专利类型
					}
					else{ 
						$('#pdt').html(obj[0].PDT); //专利类型
						if(obj[0].LSSC=='1')
							{
						$('#state').prev().removeClass('legalStatusWarning')
							 .addClass('legalStatusRight');
							
							}
						 
						$('#state').html(fixstate(obj[0].LSSC)); //法律状态代码
					}
					  
					//alert('obj[0].src2'+obj[0].src2);
				 $('#absimg').attr('src',''+obj[0].src2+'');
				 
				// getFalv(obj[0].ANO);
				 
				 //getDown(pubno);
				 
			 }
			
			
			
			
			
		},
		error:function(){ 
		}
	});
	 
}



 
function getDetail2(pid){  
	$.ajax({
		
		type : "post",
		dataType : "json",  
        url : _RootUrl+"zhuanli/getDetail", 
		data:{
			 strWhere:'PID='+pid 
		}, 
		success:function(data){  
			var pubno='';//公布号
			var  obj=eval( data.option );   
			
			
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{   
				if(obj[0].PNO==null||obj[0].PNO=='null'){
					 
					 pubno=obj[0].PNDB;
				 
				 }else{
					 pubno=obj[0].PNO; 
				 }  
				 getFalv(obj[0].ANO);  
				 getDown(pubno);
				 
			 } 
		},
		error:function(){ 
		}
	});
	 
}

/*下载PDF全文*/
function getDown(pubno){
	$.ajax({
		  
		url:_RootUrl+'zhuanli/getPdf',
		type:'post',
			dataType:'json',
			data:{
				pid:pid,
				pno:pubno//公布号
			},
			success:function(data){
				//layer.alert("后台成功"+data.option1);
				// $('#thisdown').attr('href',''+data.option1+'');
				 $('#patentTitle').append('<span class="tradtrdetail_d"><a target="_blank" href="'+data.option1+'">PDF全文</a></span>');
			},
				error:function(){
				//	layer.alert("下载失败，请联系管理员");
				}
		
	});
	
}

/*法律状态*/
function getFalv(ano){
	  
	 $.ajax({
		 
		 type:'post',
		 url:_RootUrl+'zhuanli/getStatus',
		 dataType:'json',
		 data:{
			 pid:pid
			 //  旧参数  不用了：strAn:ano  //ANO号
		 },
		 success:function(data){ 
	         //  var json = $.parseJSON(data.context);   
	           var jsn =  data.context.records[0];   
	           var jslen=jsn.length;
	     
	           if (!!jsn) {
				    if (jslen == 0) {
				    	  $("#flzt").html('该专利无法律状态信息');
				        return;
				    } 
				    var str='';    
				    for(var i=0;i<jslen;i++){
			str+='<tr style="height: 110px">';
			str+='<td class="firsttd">';  
			if(fixnull(jsn[i].ilssc)=="授权"){
		          str+='<li class="litest legalStatusRight"> </li></td>';   
		       }
			else{
				str+='<li class="litest legalStatusWarning"> </li></td>'; 
			}
			str+='<td colspan="4"><div style="position: relative">';
			str+='<div style="width: 10px;background: url(images/left2.png) no-repeat;background-size: 10px 100%;height: 100px;display: inline-block;position: absolute;left: 0"></div>';
			str+='<table cellspacing="0" cellpadding="0" style="margin-left: 8px;height: 100px;border-left: 0px" class="Width100P borderD3">';
			str+='<tbody><tr>';
			str+='<td align="center" class="cc legalStatusTdWidth"><div class="tdPadding"><span class="fontSize20">' + jsn[i].ilsad + '</span></div></td>';
			str+='<td class="cc legalStatusSeprateWidth"><div class="tabSeprate"></div></td>';
			str+='<td class="cc legalStatusTdWidth"><div class="tdPadding">' + fixnull(jsn[i].ilssc) + '</div></td>';
			str+='<td class="cc legalStatusSeprateWidth"><div class="tabSeprate"></div></td>';
			str+='<td class="cc"><div style=" max-height:80px; overflow: auto; " class="tdPadding">' + fixnull(jsn[i].ilsic) + '</div></td>';
			str+='</tr></tbody></table></div></td></tr>';
				    	
				    }
				    
				    
				    
				    $('#flzt').append(str);
			    } else {
				    $("#flzt").html('该专利无法律状态信息');
			    }
	           
	           
	           
	           
		 },
		 error:function(){ 
		 } 
		 
	 }); 
	
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

/*修正null值*/
function fixnull(str){
	if(str==null||str=='null')
	{
 str='';
	}
	return str;
}

/*图片默认*/
var imgonerror 	 = function (_obj) { 
	  _obj.src = '/IPOperate/images/useradmin/noimg.jpg';
	}


 



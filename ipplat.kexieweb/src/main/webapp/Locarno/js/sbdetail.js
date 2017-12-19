tid='';
$(function(){
	 
	  var url=location.href;
	  tid=url.split('=')[1];
	  getDetail(tid);
	  
});

/*详情信息*/
function getDetail(tid){ 
	$.ajax({
		type : "post",
		dataType : "json",  
        url : _RootUrl+"logo/getDetail", 
		data:{
			 strWhere:'TID='+tid
		}, 
		success:function(data){   
			var  obj=eval('('+data.option+')');   
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{   
				var records= obj.records  ;
				 
				 //getFalv(obj[0].ANO);
			  $('#registno').html(records[0].RN);//注册号
			  $('#registDT').html(fixdate(records[0].RD));//注册日期
			  $('#applyNO').html(records[0].SN);//申请号
			  $('#applyDT').html(fixdate(records[0].FD));//申请日期
			  $('#ncnum').html(records[0].NC);//尼斯分类
			  $('#sameNO').html(records[0].NCS);//类似群号
			  $('#appealTrademark').html(records[0].HNO);//申请人名称
			  $('#applyareaCode').html(records[0].HNAC);//申请人区域代码
			  $('#applyAddr').html(records[0].HNADO);//申请人地址
			  $('#dailiTrademark').html(records[0].ARO);//代理人名称
			  $('#serve').html(records[0].PHRASE);//商品/服务列表
			  //$('#pubstate').html('这里字段暂无');//商标公告状态
			  $('#certainno').html(records[0].WKCN);//认证编号
			  $('#area').html(records[0].WKA);//所在地区
			  $('#certainoffice').html(records[0].WKCA);//认证机关
			  $('#certainmethod').html(records[0].WKCM);//认证方式 
			  $('#certaincount').html(records[0].WKCB);//认证批次
			  $('#certainDt').html(fixdate(records[0].WKCD));//认定公告日期
			  $('#pics').attr('src',''+records[0].src3+'');//图片
			  $('#state').html(records[0].CS);//状态 
			  $('#sbtype').append('&nbsp;&nbsp;|&nbsp;&nbsp;'+records[0].MK+'');
			  $('#title').html(records[0].MNO);
			  
			  
			  
				 
			 }
			 
		},
		error:function(){ 
		}
	});
	
}	
	
//logo图片错误处理
var imgonerror = function (_obj) { //alert('123'); 
  _obj.src = '/IPOperate/images/useradmin/noimg.jpg';
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




 

 
$(function(){ 
	getRnzhu('1'); 
	
});

/*查询*/
function getser(){
	var type=$('.current').html(); 
	if(type=='作品版权'){
		getZpin('1'); 
	}else{
		getRnzhu('1');
	}
	
}

/*软著查询*/
function getRnzhu(currentpage){
	//初始化 
	 $('#wrapPage').html('');
	 $('#cptype').html('软件著作');
	// 查询显示下浮层 
  
//	var innitstr=' <div id="loading-indicator-theme-overlay" class="loading-indicator-overlay" style="width: 862px; height: 110px; left: 276.833px; position: absolute;  z-index: 5000;"></div>';
//	innitstr+='<div id="loading-indicator-theme" class="loading-indicator" style="position: absolute; z-index: 5001; left:530px; "></div> ';
//    $('#rnTable tbody').html(innitstr);   
//    
    var innitstr='<tr><td></td><td></td><td></td><td></td>';
    innitstr+='<td style="width: 100px;">';
    innitstr+='<div style="" class="loading-indicator" id="loading-indicator-theme"></div>';
    innitstr+='</td><td></td><td></td><td></td></tr>';
    $('#rnTable tbody').html(innitstr);   
 
	var full_name=$.trim($('#fulname').val())==''?'':'full_name:'+$.trim($('#fulname').val())+' AND~ ';//软件全称
	var register_num=$.trim($('#registerNO').val())==''?'':'register_num:*'+$.trim($('#registerNO').val())+'* AND~ ';//登记号
	var copyright_owner=$.trim($('#author').val())==''?'':'copyright_owner:'+$.trim($('#author').val());//著作权人
	var strQ=$.trim(full_name + register_num + copyright_owner);
	 
	var judge=strQ.charAt(strQ.length - 1);
	 if(judge=="~"){
		 //去掉最后一个AND~
		 strQ=strQ.substring(0,strQ.length-4); 
		 //将AND~替换成AND
		 var regall = new RegExp("AND~", "g"); 
		 strQ  = strQ.replace(regall, "AND");   
	 }else if(strQ.indexOf("AND~")>=0){
		 //三个都齐全  含有AND~  要修改为AND 
		 var regall = new RegExp("AND~", "g"); 
		 strQ  = strQ.replace(regall, "AND");   
	 }else if(strQ==''){
		 strQ='*:*'; 
	 }
	  
	$.ajax({
		type : "post",
		dataType : "json",  
        url : _RootUrl+"ruanzhu/getRuanZhu", 
		data:{
			 q:strQ,
			 page:currentpage
		}, 
		success:function(data){   
			if(data=='null'|| data==null){ 
				return;
			}
			var  obj= data.response ;  
			var  highObj= data.highlighting ;  
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{   
				 
				var str='';
			var listObj=obj.docs;	
				for(var i=0;i<listObj.length;i++){    
                 str+='<tr><td>';
                
                 
              
                	 str+='<div class="span">'+listObj[i].register_num+'</div>';
                     str+='</td>';
                     str+='<td style="width:100px">'+listObj[i].classify_num+'</td>';
                     str+='<td>'+listObj[i].full_name+'</td>';
                     if(listObj[i].abbr_name==""){
                    	 str+='<td>&nbsp;</td>';
                     }else{
                    	 str+='<td>'+listObj[i].abbr_name+'</td>';
                     }
                     if(listObj[i].abbr_name==""){
                    	 str+='<td>&nbsp;</td>';
                     }else{
                     str+='<td>'+listObj[i].version_num+'</td>';
                     }
                     str+='<td>'+listObj[i].copyright_owner+'</td>';
                     str+='<td>'+fixdate(listObj[i].publish_date)+'</td>';
                     str+='<td>'+fixdate(listObj[i].register_date)+'</td></tr>'; 
 
                 
				}  
				 
				$('#rnTable tbody').html(str);
				
				getrnPage(obj.numFound, currentpage);
			    $('#cpcount').html(obj.numFound);
			 }
			 
		},
		error:function(){ 
		}
	}); 
} 
 

/*作品查询*/
function getZpin(currentpage){
	//初始化

	 
    $('#wrapPage').html('');
	 $('#cptype').html('作品版权');
	 var innitstr='<tr><td></td><td></td><td></td>';
	    innitstr+='<td style="width: 100px;">';
	    innitstr+='<div style="" class="loading-indicator" id="loading-indicator-theme"></div>';
	    innitstr+='</td><td></td><td></td><td></td><td></td></tr>';
	    $('#pnTable tbody').html(innitstr);  
	 
	 
	 var full_name=$.trim($('#fulname').val())==''?'':'name:'+$.trim($('#fulname').val())+' AND~ ';//软件全称
		var register_num=$.trim($('#registerNO').val())==''?'':'register_num:*'+$.trim($('#registerNO').val())+'* AND~ ';//登记号
		var copyright_owner=$.trim($('#author').val())==''?'':'copyright_owner:'+$.trim($('#author').val());//著作权人
		var strQ=$.trim(full_name + register_num + copyright_owner);
		 
		var judge=strQ.charAt(strQ.length - 1);
		 if(judge=="~"){
			 //去掉最后一个AND~
			 strQ=strQ.substring(0,strQ.length-4); 
			 //将AND~替换成AND
			 var regall = new RegExp("AND~", "g"); 
			 strQ  = strQ.replace(regall, "AND");   
		 }else if(strQ.indexOf("AND~")>=0){
			 //三个都齐全  含有AND~  要修改为AND 
			 var regall = new RegExp("AND~", "g"); 
			 strQ  = strQ.replace(regall, "AND");   
		 }else if(strQ==''){
			 strQ='*:*'; 
		 }
	
	$.ajax({
		type : "post",
		dataType : "json",  
        url : _RootUrl+"zuopin/getZuoPin", 
		data:{
			 q:strQ,
			 page:currentpage
		}, 
		success:function(data){ 
			if(data=='null'|| data==null){ 
				return;
			}
			var  obj= data.response ;
			var  highObj= data.highlighting ;  
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{   
				 var str='';
					var listObj=obj.docs;
					for(var i=0;i<listObj.length;i++){   
						  
								str+='<tr><td>';
								str+='<div class="span">'+listObj[i].register_num+'</div></td>';
								str+='<td>'+fixdate(listObj[i].register_date)+'</td>';
								str+='<td>'+listObj[i].name+'</td>';
								str+='<td>'+listObj[i].type+'</td><td>'+listObj[i].copyright_owner+'</td>';
								str+='<td>'+fixdate(listObj[i].finish_date)+'</td>';
								str+='<td>'+fixdate(listObj[i].first_publish_date)+'</td></tr>'; 
 
						
					
					}
				     $('#pnTable tbody').html(str);
				     getpnPage(obj.numFound, currentpage);
				     $('#cpcount').html(obj.numFound);
				     
			 }
			 
		},
		error:function(){ 
		}
	});
	
}

/*重置*/
function reset(){
	$('#fulname').val('');
	$('#registerNO').val('');
	$('#author').val('');
}

/*修改card*/
function changecss(str,e){
	/*初始化input*/
	$('#fulname').val('');
	$('#registerNO').val('');
	$('#author').val('');
	
	$(e).addClass('current').siblings().removeClass('current');
	if(str=='rnzhu'){
		getRnzhu('1'); 
		 $('#rn').show();
		 $('#zpin').hide();
		 $('#pnTable').hide();
		 $('#rnTable').show();
	}else{
		getZpin('1');
		 $('#zpin').show();
		 $('#rn').hide();
		 $('#pnTable').show();
		 $('#rnTable').hide();
	}
	
}
	
 
/*修正时间格式*/
function fixdate(str){
	str=str.toString(); 
	if(str==null||str=='null'||str.length<8){
		return '';
	}else{
		var year=str.substring(0,4);
		var month=str.substring(4,6);
		var day=str.substring(6,8);

		return year+'.'+month+'.'+day;
	} 
}	



 
 

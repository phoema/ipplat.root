 
$(function(){
	 
	 
	  //getRnzhu(1);
	  
});

/*软著查询*/
function getRnzhu(currentpage){ 
	var full_name=$.trim($('#').val())==''?'*':$.trim($('#').val());//软件全称
	var register_num=$.trim($('#').val())==''?'*':$.trim($('#').val());//登记号
	var copyright_owner=$.trim($('#').val())==''?'*':$.trim($('#').val());//著作权人
	var str='q:q=full_name:'+full_name+' AND register_num:'
	+register_num+' AND copyright_owner:'+copyright_owner+'';
	
	$.ajax({
		type : "post",
		dataType : "json",  
        url : _RootUrl+"ruanzhu/getRuanZhu", 
		data:{
			 q:str,
			 page:currentpage
		}, 
		success:function(data){   
			var  obj=eval('('+data.option+')');   
			if(obj=='null'|| obj==null){ 
				return;
			}
			 else{   
				var records= obj.records  ;
				 
				 //getFalv(obj[0].ANO);
			  alert('okkkkkkkkkkkkk');
			  
			  
			  
				 
			 }
			 
		},
		error:function(){ 
		}
	});
	
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




 

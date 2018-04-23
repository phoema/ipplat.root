$(function(){
	


});	

 


/*正序  降序*/
$('#btn-search').click(function(){

	 
	var express = $("#txt_express").val();
	if(!express || express.trim() == ""){
		alert('请输入关键字，再进行检索');
		return;
	}else{
		express = "AN,AD,PN,PD,APO,INO,TIO,ABSO+=(" + express + ")";
			 var url = "list/patentlist.html?union=true&ex="+ encodeURIComponent(express);
			 window.open(url); 
		 
	}
	 

}); //end 排序


/* 回车检索 */
function keySearch(event) { 
	event = event || window.event;
	var keyCode = event.keyCode;
	if (keyCode == 13) // 回车键的键值为13
		$('#btn-search').click();
}



$(function(){
	initHeader();
	initFooter();
    initHeight();
});
function initHeader(){

	var str=''; 
	str+='<ul id="nav1">';
	str+='<a href="javascript:void(0);" style="cursor:default"><li class="logo">中国知识产权大数据与智慧服务系统</li></a>';
	str+='<li><a href="index.html" class="selected" >首页</a></li>';
	str+='<li><a href="list/patent.html" >专利</a></li>';
	str+='<li><a href="list/trademark.html">商标</a></li>';
	str+='<li><a href="list/crsoft.html">版权</a></li>';
	str+='<li class="login">';
	str+='<ul><li>';
	str+='<a target="_blank" href="connect/data.html">数据范围</a>';
	str+='<a target="_blank" href="connect/connect.html">联系我们</a>';
	str+='</li><li>&nbsp;&nbsp;010-82000906</li>';
	str+='</ul></li></ul>'; 
	$('#headerNav').html(str);

}
function initFooter(){ 
	var str='';
	str+='<div class="footer">';
	str+='版权所有：北京中知智慧科技有限公司&nbsp; &nbsp;&nbsp;&nbsp;          Copyright 2017 All Rights Reserved.';
	str+='</div>';
	$('#footerNew').html(str);
	 
	 
}
function initHeight(){  
var hh = $(window).height(); 
hh = hh - $("#headerNav").height() - $("#footerNew").height()-120;
$(".whole").css("min-height", hh + "px");
 
}
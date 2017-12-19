$(function(){
	initHeader();
	initFooter();
    initHeight();
});
function initHeader(){
	var patentselected = "";	
	var trademarkselected = "";	
	var crsoftselected = "";	
	var indexselected="";
	var url = window.location.href;
	if(url.indexOf("patent")>0){
		patentselected = 'class="selected"';
	}else if (url.indexOf("trademark")>0||url.indexOf('txnTradeMark')>0){
		trademarkselected = 'class="selected"';
	}else if (url.indexOf("crsoft")>0 || url.indexOf("crwork")>0){
		crsoftselected = 'class="selected"';
	}else if(url.indexOf("index")>0){
		indexselected = 'class="selected"';
	}else{
		indexselected = 'class="selected"';
	}
	var str=''; 
	str+='<ul id="nav1">';
	str+='<a href="javascript:void(0);" style="cursor:default"><li class="logo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></a>';
	str+='<li><a href="http://zs.ccxtcx.com/" '+indexselected+'>首页</a></li>';
	str+='<li><a href="http://cc.patsev.com/portal-cc/page/indexnew" '+patentselected+'>专利</a></li>';
	str+='<li><a href="../list/trademark.html"'+trademarkselected+'>商标</a></li>';
	str+='<li><a href="../list/crsoft.html"'+crsoftselected+'>版权</a></li>';
	str+='<li class="login">';
	str+='<ul><li>';
	str+='<a target="_blank" href="../connect/data.html">数据范围</a>';
	str+='<a target="_blank" href="../connect/connect.html">联系我们</a>';
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







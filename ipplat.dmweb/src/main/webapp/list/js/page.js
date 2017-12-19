/*作品分页*/
function getpnPage(totalcount, currentpage) {  
 
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="getZpin(\'1\')">首页</a><a href="javascript:void(0)" onclick="getZpin(\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getZpin(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getZpin(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getZpin(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getZpin(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="getZpin(\''+pageint+'\')">下一页</a>  <a href="javascript:void(0)" onclick="getZpin(\''+pageCount+'\')">最后一页</a>');
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#wrapPage');
    $div.appendTo($dv);
 
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
    str+='总记录数：<strong class="totalnumber ng-binding">';
    str+=totalcount+'</strong> | 页数：';
    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
    str+='</strong> </div>';
    var $dvtotal=$(''+str+'');
    $dvtotal.appendTo($dv);
}

/*软著分页*/
function getrnPage(totalcount, currentpage) {  
 
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="getRnzhu(\'1\')">首页</a><a href="javascript:void(0)" onclick="getRnzhu(\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getRnzhu(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getRnzhu(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getRnzhu(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getRnzhu(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="getRnzhu(\''+pageint+'\')">下一页</a>  <a href="javascript:void(0)" onclick="getRnzhu(\''+pageCount+'\')">最后一页</a>');
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#wrapPage');
    $div.appendTo($dv);
 
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
    str+='总记录数：<strong class="totalnumber ng-binding">';
    str+=totalcount+'</strong> | 页数：';
    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
    str+='</strong> </div>';
    var $dvtotal=$(''+str+'');
    $dvtotal.appendTo($dv);
}
/*软著和作品分页*/
function getsoftworkPage(totalcount, currentpage) {  
	 
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="getlist(\'1\')">首页</a><a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">下一页</a>');
    	 //商标没有最后一页   <a href="javascript:void(0)" onclick="getlist(\''+pageCount+'\')">最后一页</a>
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#theme');
    $div.appendTo($dv);
 
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
    str+='总记录数：<strong class="totalnumber ng-binding">';
    str+=totalcount+'</strong> | 页数：';
    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
    str+='</strong> </div>';
    var $dvtotal=$(''+str+'');
    $dvtotal.appendTo($dv);
    
}

/*商标分页*/
function getsbPage(totalcount, currentpage,ex) {  
	if(totalcount>300){ //在DI的公众版里 总页数控制在30页
		 totalcount=300;
	 }
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="getlist(\'1\')">首页</a><a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">下一页</a>');
    	 //商标没有最后一页   <a href="javascript:void(0)" onclick="getlist(\''+pageCount+'\')">最后一页</a>
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#theme');
    $div.appendTo($dv);
 
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
    str+='总记录数：<strong class="totalnumber ng-binding">';
    str+=totalcount+'</strong> | 页数：';
    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
    str+='</strong> </div>';
    var $dvtotal=$(''+str+'');
    $dvtotal.appendTo($dv);
    
}
/*排序的商标分页*/ 
function getsbSortPage(totalcount, currentpage,sortname,orderType) {  
 	 
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\'1\')">首页</a><a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+pageint+'\')">下一页</a>  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+pageCount+'\')">最后一页</a>');
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#theme');
    $div.appendTo($dv);
    
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
    str+='总记录数：<strong class="totalnumber ng-binding">';
    str+=totalcount+'</strong> | 页数：';
    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
    str+='</strong> </div>';
    var $dvtotal=$(''+str+'');
    $dvtotal.appendTo($dv);
    
    
 
}

/*排序的专利分页*/ 
//function getSortPage(totalcount, currentpage,sortname,orderType) {  
//  
//    var _totalCount = parseInt(totalcount);
//    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
//    var currentpage = parseInt(currentpage);
// 
//    var $div = $('<div class="paging fn-right"></div>');
//    //上一页
//    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
//    	var pageint=parseInt(currentpage)-1;
//        var $img1 = $('  <a href="javascript:void(0)" ="sort(\''+orderType+'\',\''+sortname+'\',\'1\')">首页</a><a href="javascript:void(0)" ="sort(\''+orderType+'\',\''+sortname+'\',\''+pageint+'\')">上一页</a>');
//        $img1.appendTo($div);
//    } //w_s"首页"去掉span 
//    //2~15 全显示
//    if (pageCount <= 15 && pageCount > 1) { 
//        for (var i = 0; i < pageCount; i++) {
//        	var $div1='';
//            if(currentpage == (i + 1)){ 
//            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
//            }else{
//            	 $div1 = $('  <a href="javascript:void(0)" ="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
//            }
//        	
//        	$div1.appendTo($div);
//        }
//    }
//    if (pageCount > 15 && currentpage - 5 < 0) {
//        for (var i = 0; i < 10; i++) {  
//        	var $div1='';
//            if(currentpage == (i + 1)){ 
//            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
//            }else{
//            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
//            }
//         $div1.appendTo($div);
//        }
//    }
//    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
//        for (var i = currentpage - 5; i < currentpage + 5; i++) {
//        	var $div1='';
//            if(currentpage == (i + 1)){ 
//            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
//            }else{
//            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
//            }
//            $div1.appendTo($div);
//        }
//    }
//    if (pageCount > 15 && currentpage + 5 >= pageCount) {
//        for (var i = pageCount - 10; i < pageCount; i++) {
//        	var $div1='';
//            if(currentpage == (i + 1)){ 
//            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
//            }else{
//            	 $div1 = $('  <a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+(i+1)+'\')">'+(i + 1)+'</a>');
//            }
//               $div1.appendTo($div);
//        }
//    }
//    //下一页
//    if (currentpage < pageCount) {
//    	var pageint=parseInt(currentpage)+1;
//    	 var $img1 = $('<a href="javascript:void(0)" onclick="sort(\''+orderType+'\',\''+sortname+'\',\''+pageint+'\')">下一页</a>');
//        $img1.appendTo($div);
//
//    } //w_s"尾页"去掉span
//    var $dv = $('#theme');
//    $div.appendTo($dv);
// 
//    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
//    str+='总记录数：<strong class="totalnumber ng-binding">';
//    str+=totalcount+'</strong> | 页数：';
//    str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
//    str+='</strong> </div>';
//    var $dvtotal=$(''+str+'');
//    $dvtotal.appendTo($dv);
//    
//}


//专利分页
function getPage(totalcount, currentpage) {  
	 if(totalcount>300){ //在DI的公众版里 总页数控制在30页
		 totalcount=300;
	 }
    var _totalCount = parseInt(totalcount);
    var pageCount = Math.floor((_totalCount + 10 - 1) / 10);
    var currentpage = parseInt(currentpage);
 
    var $div = $('<div class="paging fn-right"></div>');
    //上一页
    if (currentpage > 1 && _totalCount > 0 && currentpage <= pageCount) {
    	var pageint=parseInt(currentpage)-1;
        var $img1 = $('  <a href="javascript:void(0)" onclick="getlist(\'1\')">首页</a><a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">上一页</a>');
        $img1.appendTo($div);
    } //w_s"首页"去掉span 
    //2~15 全显示
    if (pageCount <= 15 && pageCount > 1) { 
        for (var i = 0; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
        	
        	$div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 < 0) {
        for (var i = 0; i < 10; i++) {  
        	var $div1='';
            if(currentpage == (i + 1)){   
            	  $div1 =  $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
         $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage - 5 >= 0 && currentpage + 5 < pageCount) {
        for (var i = currentpage - 5; i < currentpage + 5; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
            $div1.appendTo($div);
        }
    }
    if (pageCount > 15 && currentpage + 5 >= pageCount) {
        for (var i = pageCount - 10; i < pageCount; i++) {
        	var $div1='';
            if(currentpage == (i + 1)){ 
            	  $div1 = $('  <span  class="select">'+(i + 1)+'</span>');
            }else{
            	 $div1 = $('  <a href="javascript:void(0)" onclick="getlist(\''+(i+1)+'\')">'+(i + 1)+'</a>');
            }
               $div1.appendTo($div);
        }
    }
    //下一页
    if (currentpage < pageCount) {
    	var pageint=parseInt(currentpage)+1;
    	 var $img1 = $('<a href="javascript:void(0)" onclick="getlist(\''+pageint+'\')">下一页</a>');
        $img1.appendTo($div);

    } //w_s"尾页"去掉span
    var $dv = $('#theme');
    $div.appendTo($dv);
 
    var str='<div style="padding:18px;float:right; margin: 2px 10px 0px 5px;">';
     str+='总记录数：<strong class="totalnumber ng-binding">';
     str+=totalcount+'</strong> | 页数：';
    
     str+='<strong class="totalpage ng-binding">'+currentpage+' / '+pageCount;
     str+='</strong> </div>';
     var $dvtotal=$(''+str+'');
     $dvtotal.appendTo($dv);
    
}
 

 
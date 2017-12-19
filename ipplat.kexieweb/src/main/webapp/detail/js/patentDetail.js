/*di公众版 */
pid='';
$(function(){ 
	 var url=location.href;
	  pid=url.split('=')[1];
	  /*跳转页面到 文献详情*/
	  $("#wnxianSelect").click(function(){
			/*样式更改*/
		  $('#wnxianSelect').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		  /*内容更改*/
		  $('#part1').show().siblings().hide();
		   $('#wnxianhook').show();
		//  $('#relatehook').hide();
	  }); 
	  /*展示法律状态*/
	  $('#flunSelect').click(function(){
		/*样式更改*/
		  $('#flunSelect').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		  /*内容更改*/
		  $('#part2').show().siblings().hide();
	     $('#wnxianhook').hide();
		//  $('#relatehook').hide();
	  });
	  /*展示 专利相关数据*/
	  $('#relateSelect').click(function(){
		/*样式更改*/
		  $('#relateSelect').removeClass('unselectedli patentLegalStatus').addClass('selectedli')
		  .siblings().removeClass('selectedli').addClass('unselectedli patentLegalStatus'); 
		  /*内容更改*/ 
		  $('#part3').show().siblings().hide(); 
		  $('#wnxianhook').hide();
		 // $('#relatehook').show();
	  });
	   
	 $('#patCount').click(function(){
		 cutway('patCount');  
	 });
	 $('#traCount').click(function(){
		 cutway('traCount');   
	 });
	 $('#iseCount').click(function(){
		 cutway('iseCount');   
	 });
	 $('#stdCount').click(function(){
		 cutway('stdCount');   
	 });
	  
	  getDetail(pid); /*文献详情*/
	  getFalv(pid);/*法律状态*/
	  getRelateData(pid);/*专利相关数据*/
	  
   
	  
	  //getDetail2(pid);//  执行法律专题 和 pdf全文功能
	 
});

/*处理快捷方式*/
function cutway(str){
	if($.trim($('#'+str).html())!=0){
		 $('#relateSelect').click();
	 }
}
 

/*专利相关数据*/
function getRelateData(pid){  
	/*@@@@@处理总数字段*/ 
	 $('#similarTraLink').html('没接口').hide();
	 $('#similarStdLink').html('没接口').hide();
	 $('#similarZPLink').html('没接口').hide();
	 $('#table_std').parent().hide();
	 $('#table_std').parent().prev().hide();
	 $('#relatehook').find("li[v='anchor10']").hide();
	 $('#table_work').parent().hide();
	 $('#table_work').parent().prev().hide();
	 $('#relatehook').find("li[v='anchor11']").hide();
      
	
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : "../api/patent/related", 
		data:{
			pid:pid 
		}, 
		success:function(data){  
			var objor= data.context;
			if(!objor){
				return;
			}
			var objRecords=  objor.records ; 
			 
			var pat= objRecords[0].pat ; 
			var tra= objRecords[0].tra ; 
			var obj=''; 
			var str='';
			obj=pat; //相似专利   table_patTB
			 
			if(!objor||(!pat&&!tra)){  
				var tstr='<div style="height:110px">';
		    	tstr+='<div style="padding-top:20px;font-size:30px" align="center">';
		    	tstr+='暂无相关数据的任何数据</div></div>';
		    	  $("#part3").html(tstr);
		        return;	
			}
			if(obj=='null'|| obj==null||obj=='undefined'|| obj==undefined){ 
				$('#table_pat').parent().hide();
				$('#table_pat').parent().prev().hide();
				$('#relatehook').find("li[v='anchor8']").hide();
			}else{ 
				for(var i=0;i<obj.length;i++){ 
					str+='<tr class="trpat_1 similaryPat">';
					str+='<td>'+(i+1)+'</td>';
					str+='<td>'+fixnull(obj[i].pno)+'</td>';
					str+='<td class="filterDay1">'+fixdate2(obj[i].ad)+'</td>';
					str+='<td>';
					str+=fixnull(obj[i].tio)+'</td>';
					
					str+='<td >'+fixnull(obj[i].ap1o)+'</td>';;
					str+='<td >'+fixnull(obj[i].ipc)+'</td>';;
					str+='</tr>';
 
				}
				$('#table_patTB').html(str); 
				/*处理总数字段@@@@*/
				$('#similarExpLink').html('没接口').hide();
				
			}
			
			/*table_traTB  相关商标*/
			
			obj=tra;  str='';
			if(!obj){ 
				$('#table_tra').parent().hide();
				$('#table_tra').parent().prev().hide();
				$('#relatehook').find("li[v='anchor9']").hide();
			}else{
				for(var i=0;i<obj.length;i++){ 
				 str+='<tr class="trtra_1 similaryTra">';
				 str+='<td>'+(i+1)+'</td>';
				 str+='<td>'+obj[i].rn+'</td><td>'+fixdate2(obj[i].rd)+'</td>';
				 str+='<td>'+obj[i].mno+'</td>';
				 
				 
				 str+='<td >'+fixnull(obj[i].nc)+'</td>';;
				 str+='<td><img onerror="imgonerror(this);"  src="'+obj[i].tmsg+'" width="150" height="120"></td>';
 				 str+='<td >'+fixnull(obj[i].hn)+'</td>';;
				 str+='</tr>'; 
 
				} 
				$('#table_traTB').html(str); 
				
			} 
		
		},
		error:function(){ 
		}
	});
} 

 /*文献详情*/
function getDetail(pid){   
	$.ajax({ 
		type : "post",
		dataType : "json",  
        url : "../api/patent/detail/catalog", 
		data:{
			pid:pid 
		}, 
		success:function(data){  
			var objor= data.context; 
			if(!objor){ 
				return;
			}
			var objRecords=  objor.records ; 
			var catalogPatent= objRecords[0].catalogPatent ;  
			var absoHTML= objRecords[0].absoHTML ; //摘要
			  
			var obj=catalogPatent; 
			if(!obj){ 
				return;
			}
			 else{  
				 var fixtitle='';
				  if(fixnull(obj.tio)==''){
					  fixtitle='&nbsp;';
				  }else{
					  fixtitle = obj.tio;
				  }
				  
				  $('#patentTitle').html(fixtitle); //title
				  var titleH=  $('#patentTitle').height(); 
		  
				 // jia 图标相关显示
				 var lawstyle = "";
				 var typestyle = "";
				 if(obj.lssc=="有效"){
					 lawstyle = "legalStatusRight";
				 }else if(obj.lssc=="无效"){
					 lawstyle = "legalStatusWarning";
				 }else if(obj.lssc=="在审"){
					 lawstyle = "litest1";
				 }
				 if(objRecords[0].pdtStr =="实用新型"){
					 typestyle ="searchOverViewGray1";
				 }else if(objRecords[0].pdtStr =="发明"){
					 typestyle ="searchOverViewGray";
				 }else if(objRecords[0].pdtStr =="外观设计"){
					 typestyle ="searchOverViewGray2";
				 }
				 var statuStr='';  
				 statuStr+='<div class="w20H20px ver_alignMid  '+lawstyle+'  displayInline"></div>';
				
				var lssc= fixnull(obj.lssc); 
				 statuStr+='<div class="displayInline ver_alignMid" style=" ">'+lssc+'</div>';
				if(!!lawstyle){
				 statuStr+='<div class="separate_line2 displayInline marginLeft30 marginRight10 ver_alignMid"> </div>';
				}
				 statuStr+='<div class="w20H20px ver_alignMid  '+typestyle+' displayInline"></div>';
				 statuStr+='<div class="displayInline ver_alignMid">'+objRecords[0].pdtStr+'</div>';
				 if(!!typestyle){
				 statuStr+='<div class="separate_line2 displayInline marginLeft30 marginRight10 ver_alignMid"> </div>';
				 }
				 statuStr+='<div class="displayInline ver_alignMid" id="doPdf">PDF说明书</div>';
			     $('#titletip').html(statuStr); 
				  var titletipH=  $('#titletip').height(); 
				  
				  var verTop=titleH+titletipH;
$('#verTp').css({ "top": verTop+135+"px"});
				  
				 if(obj.ano==null||obj.ano=='null'){
					 $('#sqh').html(obj.ans); //申请号
				}else{
					 $('#sqh').html(obj.ano); //申请号
				}
				
				if(obj.pno==null||obj.pno=='null'){  
					$('#gbh').html(obj.pns);//公布号
					 pubno=obj.pns;
				 
				 }else{
					 pubno=obj.pno;
					 $('#gbh').html(obj.pno);//公布号
					
				 }
				$('#doPdf').click(function(){
					 $.ajax({ 
					type : "post",
					dataType : "json",  
			        url : "../api/patent/download", 
					data:{
						pid:pid, 
						pns:pubno
					}, 
					success:function(data){  
						 window.open('http://'+data.context.records[0].nginxPath);
					},
					error:function(){ 
					}
				});
				});

			
				
					
					$('#sqr').html(fixdate(obj.ad));//申请日
					$('#gbr').html(fixdate(obj.pd));//公布日
					
					$('#patentren').html(obj.aso);//专利权人
					
					if(obj.apo!=''){
						var apos=obj.apo.split(';');
						var  str='';
						for(var i=0;i<apos.length;i++){
							str+='<a href="../list/patentlist.html?ex='+ encodeURIComponent('申请人=(\''+apos[i]+'\')')+'" target="_blank" >'+apos[i]+'</a>  ';
						}
						$('#sqren').html(str);//申请人
					}
					
					$('#patentaddr').html(obj.ap1adc);//申请人地址
					$('#areacode').html(obj.ap1a);//区域代码
					 
					if(obj.ino!=''){
						var inos=obj.ino.split(';');
						var  str='';
						for(var i=0;i<inos.length;i++){
							str+='<a href="../list/patentlist.html?ex='+encodeURIComponent('发明人=(\''+inos[i]+'\')')+'" target="_blank" >'+inos[i]+'</a>  ';
						}
						$('#famingren').html(str);//发明人
					}
					 
					if(obj.ipc!=''){
						var ipcs=obj.ipc.split(';');
						var  str='';
						for(var i=0;i<ipcs.length;i++){
							str+='<a href="../list/patentlist.html?ex='+encodeURIComponent('IPC=(\''+ipcs[i]+'\')')+'" target="_blank" >'+ipcs[i]+'</a>  ';
						}
						$('#ipc').html(str);//IPC
					}
					 
					if(obj.lc!=''){
						var ljns=obj.lc.split(';');
						var  str='';
						for(var i=0;i<ljns.length;i++){
							str+='<a href="../list/patentlist.html?ex='+encodeURIComponent('洛迦诺=(\''+ljns[i]+'\')')+'" target="_blank" >'+ljns[i]+'</a>  ';
						}
						$('#ljns').html(str);//ljn
					}
					
					
					
					
					if(!!obj.prno)
						{ //优先权
						  
						var strprno='';
						var prnos=obj.prno.split(';'); 
						for(var j=0;j<prnos.length;j++){ 
							strprno+='<a  href="../list/patentlist.html?ex= '+encodeURIComponent(' (优先权=  ( \''+prnos[j]+'\' ) )')+'"  style="margin-left:5px;" target="_blank">'+prnos[j]+'</a>';
						} 
						$('#prior').html(strprno); 
						} 
			 
					$('#fayshenqing').html(obj.dppa);//分案原申请
					$('#agency').html('<a  href="../list/patentlist.html?ex='+encodeURIComponent(' (代理机构=  ( \''+obj.agc+'\' ) )')+'" target="_blank">'+obj.agc+'</a>');//代理机构
					
					if(obj.ag!=''){
						var strags='';
						var ags=obj.ag.split(';'); 
						for(var j=0;j<ags.length;j++){ 
						strags+='<a  href="../list/patentlist.html?ex='+encodeURIComponent(' (代理人=  ( \''+ags[j]+' \') )')+'"  style="margin-left:5px;" target="_blank">'+ags[j]+'</a>';
						}
						$('#agent').html(strags);
					}
					
					 
					//国际申请 
					$('#internationapply').html('<a  href="../list/patentlist.html?ex='+encodeURIComponent(' (国际申请=  ( \''+obj.pctao+'\' ) )')+'"  style="margin-left:5px;" target="_blank">'+obj.pcta+'</a>'); 
					//国际公布
					$('#internationalpub').html('<a  href="../list/patentlist.html?ex='+encodeURIComponent(' (国际公布=  ( \''+obj.pctpo+'\' ) )')+'"  style="margin-left:5px;" target="_blank">'+obj.pctp+'</a>'); 
				 
					$('#enterdate').html(fixdate(obj.pctsd));//进入国家日期 
					$('#catelog').html(obj.nc); //本国分类
					   
					if(objRecords[0].pdtStr=='外观设计'){
						//处理外观
						$('#innerpart1').hide();
						$('#innerpart2').show(); 
					 
						$('#ipc').prev().hide();
						$('#ipc').hide(); 
						$('#ljn').show();
						var  debeo=objRecords[0].debeo;
						$('#__abs3html').html(debeo); 
						// 图片滚动列表
						{
							
					var imgArrays=objRecords[0].imgArray;		
				    var _imgLength = imgArrays.length; 
				    var _imgTitle='';
				    var _imgUrl='';
				    var str='';
						for(var i=0;i<_imgLength;i++){
							 $.each(imgArrays[i],function(key){   
							    var value = imgArrays[i][key];   
							    _imgTitle+="|"+ key;
							    _imgUrl+='|'+value; 
							 }); 
							  
						} //for结束
						 
							if (typeof (_imgUrl) != "undefined" && _imgUrl != null && _imgUrl != "") {
 
								// 初始化图片列表
								var _imgUrlList = _imgUrl.split("|");
								var _imgTitleList = _imgTitle.split("|");
								var imageindex = 0;
								var liWidth = 140;

								var count = 0;
								for ( var i = 0; i < _imgUrlList.length; i++) {

									if (_imgUrlList[i] == null || _imgUrlList[i] == "") {
										continue;
									}

									var _class = "noborder";
									if (count == 0) {
										$("#_zoompic").attr("src", _imgUrlList[i]);
										$("#_zoompiclink").attr("href", _imgUrlList[i]);
										_class = "current";
									}

									var _n = _imgTitleList[i];
									if (_n == null || _n == "") {
										_n = "无标题";
									}
                                     
									$("#_imagelist").append(
											'<li class="' + _class + '"><a href="' + _imgUrlList[i] + '" target="_blank"><div style="width: 132px; height: 131px"><img onerror="imgonerror(this);"  title="' + _n + '" src="' + _imgUrlList[i]
													+ '" style="height:131px;max-width:100%" /></div></a></li>');

									count++;

								}

								// 140是每个li的宽
								$('#_imagelist').width(liWidth * count);

								if (count == 0) {
									$("#_imgListWrap").html('<h2 style=" text-align:center; width:100%; font-size:16px;">暂无图片列表</h2>');
								}

								function setPatentImg() {

									$("#_zoompic").hide();
									$("#_zoompic").attr("src", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));

									var _w = ($("#_zoompic").width());
									var _h = ($("#_zoompic").height());

									if (_w > _h) {
										$("#_zoompic").width(422);
										$("#_zoompic").height("auto");


									}
									if (_h > _w || _h == _w) {

										$("#_zoompic").width("auto");
										$("#_zoompic").height(382);


									}

									$("#_zoompic").show();

								}

								$('#previous').click(function() {

									imageindex--;

									if (imageindex < 0) {
										imageindex = 0;
										$.fz_common.alert("提示", "这已经是第一张图片了");
										return;
									}

									if (imageindex >= $('.slider ul li').length) {
										imageindex = ($('.slider ul li').length - 1);
										return;
									}

									// $(".zoompic img").attr("src", "");

									setPatentImg();

									$(".zoombox a").attr("href", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));
									$("#thumbnail li.current").addClass("noborder");
									$("#thumbnail li.current").removeClass("current");
									$($('.imagelist li')[imageindex]).removeClass("noborder");
									$($('.imagelist li')[imageindex]).addClass("current");

									setImgListLeft();

								});

								$('#next').click(function() {

									imageindex++;

									if (imageindex < 0) {
										imageindex = 0;
										return;
									}

									if (imageindex >= $('.slider ul li').length) {
										imageindex = ($('.slider ul li').length - 1);
										$.fz_common.alert("提示", "这已经是最后一张图片了");
										return;
									}
 
									setPatentImg();

									$(".zoombox a").attr("href", $($('.imagelist li')[imageindex].childNodes[0]).attr("href"));
									$("#thumbnail li.current").addClass("noborder");
									$("#thumbnail li.current").removeClass("current");
									$($('.imagelist li')[imageindex]).removeClass("noborder");
									$($('.imagelist li')[imageindex]).addClass("current");

									setImgListLeft();

								});

								// 每次点击切换图片后设置图片列表的偏移值
								function setImgListLeft() {

									var i = $($('#_imagelist .current')[0]).index();
									$("#_imagelist").css("left", (($('#_imagelist li').width() * i * -1) + 'px'));
								}

								// 点击小图切换大图
								$("#thumbnail li a").click(function() {

									$(".zoombox a").attr("href", $(this).attr("href"));
									$("#thumbnail li.current").addClass("noborder");
									$("#thumbnail li.current").removeClass("current");
									$(this).parents("li").removeClass("noborder");
									$(this).parents("li").addClass("current");
									imageindex = $(this).parents("li").index();

									setPatentImg();
									return false;
								});
								
								//点击第一个防止第一张图片过大撑开
								$("#thumbnail li:first-child a").click();

								var num = parseInt($('#_imagelist').width()) - 0;
								var _imgOnclick = false;

								$('#btn-right').click(function() {

									if (_imgOnclick) {
										return;
									}

									var l = parseInt($('#_imagelist').css("left")) * -1;

									if ((num - liWidth * 3) < l) {
										return false;
									}

									_imgOnclick = true;
									$('.slider ul').animate({
										left : '-=' + $('.slider ul li').width() + 'px'
									}, 'fast', function() {
										_imgOnclick = false;
									});
								});

								$('#btn-left').click(function() {

									if (_imgOnclick) {
										return;
									}

									if (parseInt($('#_imagelist').css("left")) >= 0) {
										$('#_imagelist').css("left", "0");
										return;
									}

									_imgOnclick = true;

									$('.slider ul').animate({
										left : '+=' + $('.slider ul li').width() + 'px'
									}, 'fast', function() {
										_imgOnclick = false;
									});
								});

							} else {
								$("#_imgListWrap").html('<h2 style=" text-align:center; width:100%; font-size:16px;">暂无图片列表</h2>');
							}

						}
						
						
					} else{
						$('#innerpart1').show();
						$('#innerpart2').hide();
				 
						$('#ipc').prev().show();
						$('#ipc').show();
						$('#ljn').hide();
						
						 if(!!absoHTML){  
							 patentDetailHTML(absoHTML,'__abshtml'); //摘要
						 }else{
							 $('#__abshtml').html('暂无内容');
						 }
 
					}
					
					 
 
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
        url : "../api/patent/detail/catalog", 
		data:{
			pid :pid 
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
		  
		url:'zhuanli/getPdf',
		type:'post',
			dataType:'json',
			data:{
				pid:pid,
				pno:pubno//公布号
			},
			success:function(data){
				 
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
		 url:'../api/patent/detail/law',
		 dataType:'json',
		 data:{
			 
			 pid:ano  //ANO号
		 },
		 success:function(data){ 
	         //  var json = $.parseJSON(data.option); 
			 
		var objor= data.context;
		if(!objor){
			return;
		}
		var objRecords=  objor.records ; 

		var laws= objRecords[0] ;   
	           if (!!laws) {
				    if (laws.length == 0) {
				    	var tstr='<tr style="height:110px">';
				    	tstr+='<td colspan="3" style="font-size:30px" align="center">';
				    	tstr+='该专利无法律状态信息</td></tr>';
				    	  $("#flzt").html(tstr);
				        return;
				    }
				    var str='';
				    
			    	for(var i=0;i<laws.length;i++){  
			    		var style = "";
			    		var status = laws[i].ilsc;
			    		if(!!status){
			    			var statuslevel1 = status.substring(0,1);
			    			if("2" == statuslevel1 ) style = "legalStatusWarning";
			    			else if ("1" == statuslevel1 ) style = "legalStatusRight";
			    			else if ("3" == statuslevel1 ) style = "";
			    			else if ("4" == statuslevel1 ) style = "legalStatusUndefine";
			    			
			    		}
			    		 str+='<tr style="height: 110px">';
				    	 str+='<td class="firsttd">';
                    	 str+='<li class="litest '+style +'"> </li></td>';   

    

				    	 str+='<td colspan="4"><div style="position: relative">';
					    	str+='<div style="width: 10px;background: url(images/left2.png) no-repeat;background-size: 10px 100%;height: 100px;display: inline-block;position: absolute;left: 0"></div>';
					    	str+='<table cellspacing="0" cellpadding="0" style="margin-left: 8px;height: 100px" class="Width100P borderD3">';
					    	str+='<tbody><tr>';
					    	str+='<td align="center" class="cc legalStatusTdWidth"><div class="tdPadding"><span class="fontSize20">' + laws[i].ilsad + '</span></div></td>';
					    	str+='<td class="cc legalStatusSeprateWidth"><div class="tabSeprate"></div></td>';
					    
					    	str+='<td class="cc legalStatusTdWidth"><div class="tdPadding">' + fixnull(laws[i].ilssc) + '</div></td>';
					    	str+='<td class="cc legalStatusSeprateWidth"><div class="tabSeprate"></div></td>';  
					    	//fixnull(laws[i].ilsic) 
					    	var  fixn=fixnull(laws[i].ilsic).replace(/[\r\n]/g,"<br>");
					    	str+='<td class="cc"><div style="  overflow: auto; " class="tdPadding">' + fixn + '</div></td>';
					    	str+='</tr></tbody></table></div></td></tr>';
				    }
				   
				    $('#flzt').append(str);
			    } else {
			    	var tstr='<tr style="height:110px">';
			    	tstr+='<td colspan="3" style="font-size:30px" align="center">';
			    	tstr+='该专利无法律状态信息</td></tr>';
			    	  $("#flzt").html(tstr);
				    
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
	if(str==null||str=='null'||str==undefined||str=='undefined')
	{
 str='';
	}
	return str;
}

/*图片默认*/
var imgonerror 	 = function (_obj) { 
	  _obj.src = '/IPOperate/images/useradmin/noimg.jpg';
	}



function patentDetailHTML(url, id) {
	$.ajax({
		type : "GET",
		dataType : "html", 
		url : url,
		success : function(data) {

			if (($(data).text()) == null || ($(data).text()) == "" || ($(data).text()) == "暂无内容") {

				$("#" + id).css("min-height", "10px");
				$("#" + id).html("暂无内容");
			 
				return;
			}

			var arrUrl = url.split("/");
			var strPage = arrUrl[arrUrl.length - 1];
			strPage = url.substr(0, url.indexOf(strPage));
			strPage = strPage.replace("10.10.1.5", "image.zldsj.com");

			var _data = $(data);

			// 替换所有地址
			var hasImg = false;
			// 同级
			_data.each(function() {

				var nodeName = $(this).context.nodeName + "";

				if (id == "__abshtml" && nodeName.toUpperCase() == "P") {
					$(this).css({
						"float" : "left",
						width : "75%"
					})
				}

				var src = $(this).attr("src");

				if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
					$(this).attr("src", strPage + src);

					// 设置高度
					if (id == "__abshtml") {
						$(this).width(180);
						$(this).height(160);
						$(this).css({
							border : "3px #EEE solid",
							padding : "5px",
							"margin-left" : "25px",
							"float" : "left"
						});
						hasImg = true;
					}

				}

			});

			// 子集
			_data.find("img").each(function() {
				var src = $(this).attr("src");
				var nodeName = $(this).context.nodeName + "";
				if (src != null && src != "" && nodeName.toUpperCase() == "IMG") {
					$(this).attr("src", strPage + src);
					$(this).css("max-width", "60%");
				}

			}); 
			$("#" + id).html(_data);

			if (id == "__abshtml" && !hasImg) {

				$("#__abshtml p").css({
					width : "95%"
				});

			}

			// 高亮
			for ( var i = 0; i < _kwList.length; i++) {

				if (_kwList[i] != null && _kwList[i] != "") {

					$("#" + id).highlight(_kwList[i], {
						id : "highlightTxt" + id,
						clear_last : false
					});
				}
			}

			// 高亮 如果打开了高亮则立即找色
			if (!$(".highLightShowDiv").hasClass("disPlayNone")) {

				doHighlightTxt("#" + id + " .highlightTxt");

			}

		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {

			$("#" + id).css("min-height", "10px");
			$("#" + id).html("暂无内容");
			 
		}
	});
}
 

/*修正时间格式*/
function fixdate(str){ 
	
if(str==null||str=='null'||str==''){
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
/*di公众版  end*/

















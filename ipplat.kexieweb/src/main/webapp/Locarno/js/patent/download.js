/**
 * 专利下载js文件 批量下载
 */
function downloadxls() {
	var ans = "";
	var sources = ""
	$("input[name='recordno']").each(function() {
		if ($(this).attr("checked") == true) {
			ans += $(this).attr("value") + ",";
			sources += $(this).attr("sectionName") + ",";
		}
	});
	if (ans == "") {
		$.dialog.alert("请勾选您需要下载的专利后点击下载。");
		return;
	}
	sources = sources.substring(0, sources.length - 1);
	ans = ans.substring(0, ans.length - 1);
	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download.action?rd=' + Math.random(), {
		ans:ans, source:sources
	}, function(json) {
		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				lock: true,
				min:false,
				content: html
			});
			return true;
			
		} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
			if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
				$.dialog({title:'信息',
					content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。<a style="text-decoration: underline;color: #0066ff;cursor: pointer" href="http://www.cnipr.com/services/hyzq/hyzq.html#tequan" target="_blank">如何成为高级会员？</a>',
					lock:true,
					icon:'face-smile.png',
					max:false,
					min:false,
					ok:function(){
					window.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'取消'
				});
			}else{
				$.dialog.alert(json.downloadbean.message);	
			}
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
//	document.location.href = 'download.action?ans=' + ans + '&source=' + source;
}

/**
 * 行业导航专利单条下载
 */
function navDownload(an,source){
	$(".dropmenu").unbind("click");
//	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download.action?rd=' + Math.random(), {
		ans:an, source:source
	}, function(json) {
//		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				content: html
			});
			return true;
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
}
/**
 * 专利细缆下载js文件 批量下载
 */
function detailDownload() {
	$(".dropmenu").unbind("click");
	ans = $("#paramAn").val();
	var source = $("#paramDB").val();
//	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download.action?rd=' + Math.random(), {
		ans:ans, source:source
	}, function(json) {
//		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				content: html
			});
			return true;
		} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
			if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
				$.dialog({title:'信息',
					content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。',
					lock:true,
					icon:'face-smile.png',
					max:false,
					min:false,
					ok:function(){
					window.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'取消'
				});
			}else{
				$.dialog.alert(json.downloadbean.message);	
			}	
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
//	document.location.href = 'download.action?ans=' + ans + '&source=' + source;
}

/**
 * 下载回调函数
 */
function downloadCallback() {
	$.dialog.alert($("#downloadParams").val());
}

/**
 * 下载单条专利著录项
 */
function downloadRecord(an, strSource) {
    alert("abc");
	$(".dropmenu").unbind("click");
	$.post('download.action?rd=' + Math.random(), {
		ans:an, source:strSource
	}, function(json) {
//		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				content: html
			});
			return true;
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
//	document.location.href = 'download.action?ans=' + an + "&source=" + source;
}

/**
 * 批量下载tif
 */
function tifDownload() {
	$(".dropmenu").unbind("click");
	var tifInfos = "";
	$("input[name='recordno']")
			.each(
					function(i) {
						if ($(this).attr("checked") == true) {
							tifInfos += $("#tifPath"+ (i + 1)).attr("tifvalue")
									+ ";";
						}
					});

	if (tifInfos == "") {
		$.dialog.alert("请勾选您需要下载的专利后点击下载。");
		return;
	}
	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download!downloadtif.action?rd=' + Math.random(), {
		tifInfos : tifInfos
	}, function(json) {
		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，(请求下载"+ json.downloadbean.requestCount +"件，成功打包"+ json.downloadbean.responseCount+"件)，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				content: html
			});
			return true;
		} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
			if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
				$.dialog({title:'信息',
					content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。',
					lock:true,
					icon:'face-smile.png',
					max:false,
					min:false,
					ok:function(){
					window.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'取消'
				});
			}else{
				$.dialog.alert(json.downloadbean.message);	
			}	
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
}
/**
 * 批量下载tif
 */
function detailTifDownload(type) {
	$(".dropmenu").unbind("click");
	var tifInfos = "";
	
	if (type != null && type == 'sq') {
		tifInfos = sqtifpath +","+sqtiftotalpages+","+$("#paramAn").val();
	} else {
		tifInfos = gktifpath+","+gktiftotalpages+","+$("#paramAn").val();
	}
	
	if (!tifInfos) {
		$.dialog.alert("无下载内容");
		return;
	}
	//tifInfos = tifInfos+","+$("#paramPages").val()+","+$("#paramAn").val();
	
//	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download!downloadtif.action?rd=' + Math.random(), {
		tifInfos : tifInfos
	}, function(json) {
//		$(".content").unmask();
		if (json.downloadbean && json.downloadbean.returncode == 1) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，(请求下载"+ json.downloadbean.requestCount +"件，成功打包"+ json.downloadbean.responseCount+"件)，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				content: html
			});
		} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
			if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
				$.dialog({title:'信息',
					content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。',
					lock:true,
					icon:'face-smile.png',
					max:false,
					min:false,
					ok:function(){
					window.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'取消'
				});
			}else{
				$.dialog.alert(json.downloadbean.message);	
			}
		}
		else{
			$.dialog.alert("未找到下载资源！");	
		}
	});
}

/**
 * 批量下载代码化
 */
function xmlDownload() {
	$(".dropmenu").unbind("click");
	$(".dropmenu").hide();
	$(".dropmenu").show();
	var patInfos = "";
	$("input[name='recordno']")
			.each(
					function(i) {
						if ($(this).attr("checked") == true) {
							patInfos += $("#tifPath"
									+ (i + 1)).attr("xmlvalue")
									+ ";";
						}
					});

	if (patInfos == "") {
		$.dialog.alert("请勾选您需要下载的专利后点击下载。");
		return;
	}
	if(!checkSession()){
		openLoginWin("");
	}
	else{
		$(".content").mask("正在生成下载文件，请稍候...");
		$.post('download!downloadxml.action?rd=' + Math.random(), {
			patInfos : patInfos
		}, function(json) {
			$(".content").unmask();
			if (json.downloadbean && json.downloadbean.returncode == 1) {
				var html =
					"<div style='line-height:22px;'>资源获取成功，(请求下载"+ json.downloadbean.requestCount +"件，成功打包"+ json.downloadbean.responseCount+"件)，请点击<a href='"
					+ json.downloadbean.fileURLPath
					+ "' target='_blank'>[这里]</a>进行下载 !</div>"
				$.dialog({
					title:'下载',
					max:false,
					min:false,
					lock: true,
					content: html
				});
			} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
				if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
					$.dialog({title:'信息',
						content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。',
						lock:true,
						icon:'face-smile.png',
						max:false,
						min:false,
						ok:function(){
						window.location.href='register.jsp';
					},
					okVal:'注册新会员',
					cancel:true,
					cancelVal:'取消'
					});
				}else{
					$.dialog.alert(json.downloadbean.message);	
				}
			}
			else{
				$.dialog.alert("未找到下载资源！");	
			}
		});
	}
}

function _download2000(){
	$(".dropmenu").unbind("click");
	$(".dropmenu").hide();
	$(".dropmenu").show();
	
	var begin=$("#_begin").val();
	var end=$("#_end").val();
	
	//var downloadenab=$("#downloadenab").attr("checked");
	var r = /^\+?[1-9][0-9]*$/;
	if(!r.test(begin)||!r.test(end)){
		alert("输入件数错误，请重新输入！");
		return false;
	}else if(begin <= 0 || end <= 0){
		alert("请输入大于0的数字！");
		return false;
	}else if((end-begin)<0){
		alert("结束标记应大于开始标记！");
		return false;
	}else if((end-begin)>downloadCount){
		alert("您所在的权限组，每次下载仅限 "+downloadCount+" 件专利著录项！");
		return false;
	}else{
		var where =document.searchForm.strWhere.value;
	var source = document.searchForm.strSources.value;
	var strSortMethod=document.searchForm.strSortMethod.value;
	var option=document.searchForm.option.value;
	var iHitPointType=document.searchForm.iHitPointType.value;
	var filterChannel=document.searchForm.filterChannel.value;
	var strSynonymous=document.searchForm.strSynonymous.value;
	$(".content").mask("正在生成下载文件，请稍候...");
	$.post('download!download2000.action?rd=' + Math.random(), {
		strWhere : where,
		source : source,
		strSortMethod : strSortMethod,
		option : option,
		iHitPointType : iHitPointType,
		filterChannel : filterChannel,
		strSynonymous : strSynonymous,
		begin : begin,
		end:end
		//downloadenab:downloadenab
	}, function(json) {
		$(".content").unmask();
		if (json.success) {
			var html =
				"<div style='line-height:22px;'>资源获取成功，请点击<a href='"
				+ json.downloadbean.fileURLPath
				+ "' target='_blank'>[这里]</a>进行下载 !</div>"
			$.dialog({
				title:'下载',
				max:false,
				min:false,
				lock: true,
				content: html
			});
			return true;
		} else {
			if (json.cnipr_ajax_status_code == ajaxLogin) {
				alert(json.msg);
				// 后续处理
			} else if (json.cnipr_ajax_status_code == ajaxDeny) {
				alert(json.msg);
				// 后续处理
			} else {
				alert(json.msg);
				// 后续处理
			}
			return false;
		}
	});
	}
	
}
var downloadCount = 0;
function _open2000(){
	$(".dropmenu").unbind("click");
//	$(".dropmenu").hide();
//	$(".dropmenu").show();
	
	var all = $("#allRecordCnt").val();
	if(all<=0){
//		$.dialog.alert('无分析数据');
		$.dialog({title:'温馨提示',
			content:'您的检索结果为0，请您重新检索后下载。',
			lock:true,
			icon:'face-sad.png',
			max:false,
			min:false,
			cancel:true,
			cancelVal:'关闭'
		});
		return;
	}
	
	if(!checkSession()){
		openLoginWin("");
	}else{
		downloadCount = getDownloadCount();
		
		if (downloadCount == 0) {
			$.dialog({title:'批量下载著录项',
				content:"<div style='height:70px;width:390px;overflow-y:auto;'>对不起，您所在的权限组不能使用该功能，请成为高级会员后，再使用！<a href=\"http://www.cnipr.com/services/hyzq/hyzq.html#tequan\" target=\"_blank\">如何成为高级会员？</a><\div>",
				padding:10,
				width:400,
				resizable:true,
				
				max:false,
				min:false,		
				button:[
				{
					name:'确定',
					callback:true
				}
				],
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}
		
		var selectChannel=$("#selectChannel").val();
		dialog = $.dialog({title:'批量下载著录项',
			id:'downloadDialog',
			content:"<div style='height:110px;width:380px;overflow-y:auto;'>请选择下载范围：<br><br>开始：<input type='text' id='_begin' name='begin' value='' onkeydown='keydownAction();'>&nbsp;&nbsp;结束：<input id='_end' type='text' name='end' value='' onkeydown='keydownAction();'><br><br>您所在的权限组，每次最多可下载 "+ downloadCount +" 件专利<\div>",
			padding:10,
			width:400,
			resizable:true,
			
			max:false,
			min:false,		
			button:[
			{
				id:'downloadBtn',
				name:'确定',
				callback:_download2000
			}
			],
			cancel:true,
			cancelVal:'关闭'
		});
	}
}

var dialog = null;

function keydownAction(){
	if (window.event.keyCode == 13)
	{      
		var flag = _download2000();
		if(flag || flag==null) {
			dialog.close();
		}
	}	
}

/**
 * 批量下载代码化
 */
function detailXmlDownload() {
	$(".dropmenu").unbind("click");
	var patInfos = $("#paramDB").val()+","+$("#paramAn").val()+","+$("#paramPd").val();
	if (!patInfos) {
		$.dialog.alert("无下载内容");
		return;
	}
	if(!checkSession()){
		openLoginWin("");
	}
	else{
//		$(".content").mask("正在生成下载文件，请稍候...");
		$.post('download!downloadxml.action?rd=' + Math.random(), {
			patInfos : patInfos
		}, function(json) {
//			$(".content").unmask();
			if (json.downloadbean && json.downloadbean.returncode == 1) {
				var html =
					"<div style='line-height:22px;'>资源获取成功，(请求下载"+ json.downloadbean.requestCount +"件，成功打包"+ json.downloadbean.responseCount+"件)，请点击<a href='"
					+ json.downloadbean.fileURLPath
					+ "' target='_blank'>[这里]</a>进行下载 !</div>"
				$.dialog({
					title:'下载',
					max:false,
					min:false,
					lock: true,
					content: html
				});
			} else if (json.downloadbean && json.downloadbean.returncode == 4002) { 
				if(json.downloadbean.message=='匿名用户不能进行批量下载！'){
					$.dialog({title:'信息',
						content:'非注册用户不能进行批量下载，请注册成为Cnipr会员享受更高级服务。',
						lock:true,
						icon:'face-smile.png',
						max:false,
						min:false,
						ok:function(){
						window.location.href='register.jsp';
					},
					okVal:'注册新会员',
					cancel:true,
					cancelVal:'取消'
					});
				}else{
					$.dialog.alert(json.downloadbean.message);	
				}
			}
			else{
				$.dialog.alert("未找到下载资源！");	
			}
		});
	}
}

function checkSelected() {
	var ans = "";
	$("input[name='recordno']").each(function() {
		if ($(this).attr("checked") == true) {
			ans += $(this).attr("value") + ",";
		}
	});
	return ans;
}


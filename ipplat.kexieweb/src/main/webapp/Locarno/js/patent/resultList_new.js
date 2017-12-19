var num=0;
var picServerURL="http://pic.cnipr.com:8080/";
var suffix = ".gif";

function SameHigh(ah,bh)
{
var a=document.getElementById(ah);
var b=document.getElementById(bh);
if (a.scrollHeight < b.scrollHeight)
{
a.style.height= b.scrollHeight+"px";
}
else
{
b.style.height= a.scrollHeight+"px";
}
}

function displayPic(name) {
	var an = $("#"+name).attr('an');
	var pd = $("#"+name).attr('pd');
	var dbName = $("#"+name).attr('dbname');
	var obj = $("#"+name);
	var pubPath = $("#"+name).attr('pubPath');
	var url = $("#"+name).attr('picServerURL');
	if(url!=null&&url!=""){
		picServerURL = url;
	}
	if(pubPath) pubPath = pubPath.replace("\\","/");
	//拼URL
	if(an!=null && an!=""){
		var tempAN = an.replace("CN", "");
		tempAN = (tempAN.indexOf(".")>-1) ? tempAN.substring(0,tempAN.indexOf(".")) : tempAN;
		var subStr = "";
		if(tempAN.length<=10){
			subStr = tempAN.substring(2,3);
		}else{
			subStr = tempAN.substring(4,5);
		}
		if(subStr == "3"){//判断是否为外观专利
			var figureURL = picServerURL;
			figureURL +=pubPath.toLowerCase().replace("books","ThumbnailImage");
			figureURL = figureURL.replace("/000001.tif", "");
			figureURL += "/000001.jpg"; 
			obj.attr('src', figureURL);	
		}else{				
			var shortAN = getShortAN(pd, an);
			shortAN = shortAN.indexOf(".") > -1 ? shortAN.substring(0,
					shortAN.indexOf(".")) : shortAN;
			var figureURL = picServerURL + "XmlData/"
			+ getPatentType(dbName)+ "/" +pd.substring(0, 10).replace(".", "").replace(".", "")
			+ "/" + an.toUpperCase().replace("CN", "")
			+ "/" + shortAN + suffix;
			if (figureURL.toLowerCase().indexOf("books")> -1) {
				figureURL = figureURL.toLowerCase().replace("/books", "");
			}
			obj.attr('src', figureURL);	
		}
	}
	num+=1;
}
function showAll() {
	var limit = $("#limit").val();
	if (limit == null || limit == '') {
		limit = 10
	}
	
	if (navigator.userAgent.indexOf("Firefox") > 0) {
		for (i = 1; i <= limit; i++) {
			// document.getElementById("click"+i).class="gailan_shousuo_u";
			$("#click" + i).attr('class', 'gailan_shousuo_u_nav');
			$("#title" + i).slideUp(function() {
				// reloadHeightFF(navPageHeight);
				// navPageHeight = navPageHeight-$("#title"+i).height();
			});
			$("#show" + i).slideDown(function() {
				// navPageHeight = navPageHeight+$("#show"+i).height();
			});
			displayPic("pic"+(i-1));
		}
		changeAllFlag(1);
	} else {
		for (i = 1; i <= limit; i++) {
			$("#click" + i).attr('class', 'gailan_shousuo_u');
			$("#show" + i).slideDown(function() {
			});
			$("#title" + i).slideUp(function() {
			});
			displayPic("pic"+(i-1));
		}
		changeAllFlag(1);
	}
}
function closeAll() {
	var limit = $("#limit").val();
	if (limit == null || limit == '') {
		limit = 10
	}
	
	if (navigator.userAgent.indexOf("Firefox") > 0) {
	for (i = 1; i <= limit; i++) {
		$("#click" + i).attr('class', 'gailan_shousuo_nav');
		$("#show" + i).slideUp(function() {
		});
		$("#title" + i).slideDown(function() {
		});
	}
	changeAllFlag(0);
	}else{
		for (i = 1; i <= limit; i++) {
			$("#click" + i).attr('class', 'gailan_shousuo');
			$("#show" + i).slideUp(function() {
			});
			$("#title" + i).slideDown(function() {
			});
		}
		changeAllFlag(0);
	}
}
function getShortAN(strPD, strAN) {
	var strANShort = strAN;
	if (strPD.substring(0, 4) < '1989') {
		if (strAN.indexOf(".") > -1) {
			strANShort = strAN.substring(0, strAN.indexOf("."));
		}
	}
	strANShort = strANShort.toUpperCase().replace("CN", "");
	return strANShort;
}
function getPatentType(channelName) {
	channelName = channelName.toLowerCase();
	var patentType = "";
		if (channelName.indexOf("fmzl") > -1) {
			patentType = "fm";
		} else if (channelName.indexOf("syxx") > -1) {
			patentType = "xx";
		} else if (channelName.indexOf("wgzl") > -1) {
			patentType = "wg";
		} else if (channelName.indexOf("fmsq") > -1) {
			patentType = "sq";
		} else if (channelName.indexOf("fmsx") > -1) {
			patentType = "fm";
		} else if (channelName.indexOf("xxsx") > -1) {
			patentType = "xx";
		} else if (channelName.indexOf("wgsx") > -1) {
			patentType = "wg";
		}
	return patentType;
}

var zTree1;
var setting;

var zNodes = [];
function refreshTree() {
	zTree1 = $("#treeDIV").zTree(setting, zNodes);
}

function ajaxDataFilter(treeId, parentNode, childNodes) {
	return childNodes.statisticsInfoList;
}

function zTreeOnClick(event, treeId, treeNode) {
	var s = "";
	
	if (treeNode.pid == null || treeNode.pid == '0') {
		return;
	} else if (treeNode.pid == '1') {
		s = "申请（专利权）人='";
	} else if (treeNode.pid == '2') {
		s = "发明（设计）人='";
	} else if (treeNode.pid == '3') {
		s = "公开（公告）日='";
	} else if (treeNode.pid == '4') {
		s = "申请日='";
	} else if (treeNode.pid == '5') {
		s = "最新法律状态='";
	} else if (treeNode.pid == '6') {
		s = "分类号='";
	}
	
	s += treeNode.name.split(")")[1] + "'";
	
	document.searchForm.strWhere.value = $("#strWhere").val() + " and " + s;
	document.searchForm.start.value = "1";
	document.searchForm.limit.value = $("#showLimit").val();
	document.searchForm.submit();
}

String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}

//给菜单添加title
function setTitleTs(event, treeId, treeNode)
{
	var span=$("#"+treeNode.tId+"_span");
	span[0].title=treeNode.name;
}

function beforeNodeExpand() {
	var all = $("#allRecordCnt").val();
	if(all<=0){
//		$.dialog.alert('无分析数据');
		$.dialog({title:'温馨提示',
			content:'您的检索结果为0，请您重新检索后统计。',
			lock:true,
			icon:'face-sad.png',
			max:false,
			min:false,
			cancel:true,
			cancelVal:'关闭'
		});
		return false;
	}
	if(all>1000 && ($("#loginText2").text()).indexOf('登录')>-1){
//		$.dialog.alert("非注册用户分析数量不能超过10000，请注册成为Cnipr会员享受更高级服务");
		$.dialog({title:'温馨提示',
			content:'非注册用户统计数量不能超过1000，请注册成为Cnipr会员享受更高级服务。',
			lock:true,
			icon:'face-smile.png',
			max:false,
			min:false,
			ok:function(){
				window.top.location.href='register.jsp';
			},
			okVal:'注册新会员',
			cancel:true,
			cancelVal:'关闭'
		});
		return false;
	}else if(all>30000){
//		$.dialog.alert("分析数量最大不能超过50000，请您缩小检索范围!");
		$.dialog({title:'温馨提示',
			content:'统计数量最大不能超过30000，请您缩小检索范围，如需更多服务，请点击点击\"更多服务\"按钮。',
			lock:true,
			icon:'face-smile.png',
			max:false,
			min:false,
			ok:function(){
				window.top.location.href='http://www.cnipr.com/services/';
			},
			okVal:'更多服务',
			cancel:true,
			cancelVal:'关闭'
		});
		return false;
	}
}


$(document).ready(function(){
	
//	var data = $("#strWhere").val().replace(/\+/g, "%2B");
//	data = data.replace(/\&/g, "%26");
//alert(data);
	
//	setting = {
//			async : true,
//			asyncUrl : "statistics!doStatistics.action", // 获取节点数据的URL地址
//			showLine : true,// 显示虚线
//			asyncDataFilter : ajaxDataFilter,
//			type:"post",
//			remark:"remark",
//			asyncParam : [ "name", "id" ], // 获取节点数据时，必须的数据名称，例如：id、name
//			asyncParamOther: {"strSource":$("#strSources").val(),"strWhere":encodeURI($("#strWhere").val()).replace(/\+/g, "%2B"),
//				"filterChannel":$("#filterChannel").val(),"strSynonymous":$("#strSynonymous").val()},
//				
//				//["test","true","strSource",$("#strSources").val(),
//			    //              "strWhere",$("#strWhere").val(),"filterChannel",$("#filterChannel").val()
//			    //              ,"strSynonymous",$("#strSynonymous").val()], //其它参数 ( key, value 键值对格式)
//			isSimpleData : true,
//			treeNodeKey : "id",
//			treeNodeParentKey : "pid",
//			nameCol : "name",
//			callback : {
//				nodeCreated:setTitleTs,
//				click : zTreeOnClick,
//				beforeExpand:beforeNodeExpand
//			}
//		};
//	
//	refreshTree();
	
	$("#saveToTopic1").click(scSelectedPat);
	$("#saveAllToTopic1").click(scAllPat);
	$("#saveToTopic2").click(scSelectedPat);
	$("#saveAllToTopic2").click(scAllPat);
	$("#zlxDownload").click(downloadxls);
	$("#tifDownload").click(tifDownload);
	$("#xmlDownload").click(xmlDownload);
//	$("#saveExp1").click(saveExp);
//	批量获取法律状态
//	batGetPatLegalStat();
//	changeAll();
//	SameHigh("treeDIV","overviewtab");
//	$("#closeAll").click(function(){
//		changeAllFlag(0);
//		var limit = $("#limit").val();
//		if (limit == null || limit == '') {
//			limit = 10
//		}
//		for(i=1;i<=limit;i++){
//			$("#show"+i).slideUp();
//			$("#click"+i).attr('class','gailan_shousuo');
//			$("#title"+i).slideDown();
//		}
//	});
//	$("#showAll").click(function(){
//		changeAllFlag(1);
//		var limit = $("#limit").val();
//		if (limit == null || limit == '') {
//			limit = 10
//		}
//		for(i=1;i<=limit;i++){
//			$("#show"+i).slideDown();
//			$("#click"+i).attr('class','gailan_shousuo_u');
//			$("#title"+i).slideUp();
//		}
//	});
	$("#allrecords").click(function(){
		if($(this).attr("checked")==true){
			$("input[name='recordno']").each(function(){
				$(this).attr("checked",true);
			});
		}else{
			$("input[name='recordno']").each(function(){
				$(this).attr("checked",false);
			});
			
		}
	});
	$("#analyse_btn1").click(function(){
		var all = $("#allRecordCnt").val();
		if(all<=0){
//			$.dialog.alert('无分析数据');
			$.dialog({title:'温馨提示',
				content:'您的检索结果为0，请您重新检索后分析。',
				lock:true,
				icon:'face-sad.png',
				max:false,
				min:false,
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}
		if(all>10000 && ($("#loginText2").text()).indexOf('登录')>-1){
//			$.dialog.alert("非注册用户分析数量不能超过10000，请注册成为Cnipr会员享受更高级服务");
			$.dialog({title:'温馨提示',
				content:'非注册用户分析数量不能超过10000，请注册成为Cnipr会员享受更高级服务。',
				lock:true,
				icon:'face-smile.png',
				max:false,
				min:false,
				ok:function(){
					window.top.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}else if(all>50000){
//			$.dialog.alert("分析数量最大不能超过50000，请您缩小检索范围!");
			$.dialog({title:'温馨提示',
				content:'分析数量最大不能超过50000，请您缩小检索范围，如需更多服务，请点击点击\"更多服务\"按钮。',
				lock:true,
				icon:'face-smile.png',
				max:false,
				min:false,
				ok:function(){
					window.top.location.href='http://www.cnipr.com/services/';
				},
				okVal:'更多服务',
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}
		
			var strWhere = document.searchForm.strWhere.value;
			var filterChannel = document.searchForm.filterChannel.value;
			var strSources = document.searchForm.strSources.value;
			var strSortMethod = document.searchForm.strSortMethod.value;
			var iOption = document.searchForm.option.value;
			$("#analyseForm input[name='strWhere']").val(strWhere);
			$("#analyseForm input[name='filterChannel']").val(filterChannel);
			$("#analyseForm input[name='strSources']").val(strSources);
			$("#analyseForm input[name='strSortMethod']").val(strSortMethod);
			$("#analyseForm input[name='option']").val(iOption);
			$("#analyseForm input[name='patCount']").val(all);
			$("#analyseForm").submit();
//		}
	});
	
	$("#analyse_btn2").click(function(){
		var all = $("#allRecordCnt").val();
		if(all<=0){
//			$.dialog.alert('无分析数据');
			$.dialog({title:'温馨提示',
				content:'您的检索结果为0，请您重新检索后分析。',
				lock:true,
				icon:'face-sad.png',
				max:false,
				min:false,
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}
		if(all>10000 && ($("#loginText2").text()).indexOf('登录')>-1){
//			$.dialog.alert("非注册用户分析数量不能超过10000，请注册成为Cnipr会员享受更高级服务");
			$.dialog({title:'温馨提示',
				content:'非注册用户分析数量不能超过10000，请注册成为Cnipr会员享受更高级服务。',
				lock:true,
				icon:'face-smile.png',
				max:false,
				min:false,
				ok:function(){
					window.top.location.href='register.jsp';
				},
				okVal:'注册新会员',
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}else if(all>50000){
//			$.dialog.alert("分析数量最大不能超过50000，请您缩小检索范围!");
			$.dialog({title:'温馨提示',
				content:'分析数量最大不能超过50000，请您缩小检索范围，如需更多服务，请点击点击\"更多服务\"按钮。',
				lock:true,
				icon:'face-smile.png',
				max:false,
				min:false,
				ok:function(){
					window.top.location.href='http://www.cnipr.com/services/';
				},
				okVal:'更多服务',
				cancel:true,
				cancelVal:'关闭'
			});
			return;
		}
			var strWhere = document.searchForm.strWhere.value;
			var filterChannel = document.searchForm.filterChannel.value;
			var strSources = document.searchForm.strSources.value;
			var strSortMethod = document.searchForm.strSortMethod.value;
			var iOption = document.searchForm.option.value;
			$("#analyseForm input[name='strWhere']").val(strWhere);
			$("#analyseForm input[name='filterChannel']").val(filterChannel);
			$("#analyseForm input[name='strSources']").val(strSources);
			$("#analyseForm input[name='strSortMethod']").val(strSortMethod);
			$("#analyseForm input[name='option']").val(iOption);
			$("#analyseForm input[name='patCount']").val(all);
			$("#analyseForm").submit();
//			$(".content").mask("正在收集数据，请稍候...");
	});
	
	
	
	/**
	 * 收藏专利
	 */
	function scSelectedPat(){
		if(!checkSession()){
			openLoginWin("");
			return;
		}
		
		
		$(".dropmenu").unbind("click");
		$(".dropmenu").hide();
		$(".dropmenu").show();
		var ans = "";
		var pnms = "";
		var sysids = "";
		var appids = "";
		var sectionNames = "";
		$("input[name='recordno']").each(function(){
			if($(this).attr("checked")==true){
				ans+=$(this).val()+",";
				pnms+=$(this).attr("pnm")+",";
				sysids+=$(this).attr("sysid")+",";
				appids+=$(this).attr("appid")+",";
				sectionNames+=$(this).attr("sectionName")+",";
			}
		});
		if(ans==""){
			alert('请选择收藏的专利');
			return;
		}else{
			ans = ans.substring(0,ans.length-1);
			pnms = pnms.substring(0,pnms.length-1);
			sysids = sysids.substring(0,sysids.length-1);
			appids = appids.substring(0,appids.length-1);
			sectionNames = sectionNames.substring(0,ans.length-1);

			var scSelectedPat = $.dialog({
				id : "scSelectedPat",
				title : "选择专题库",
				content : "url:topic!initTopicWin.action?all=0&ans="+ans+"&pns="+pnms+"&sec="+sectionNames+"&sysids="+sysids+"&appids="+appids,
				left : '50%',
				top : '50%',
				lock: true,
				fixed : true,
				drag : true,
//				width : 300,
//				height : 190,
				max : false,
				min : false,
				cancelVal: '取消',
			    cancel: true ,
				close : function() {
				},
				ok: function(){
					scSelectedPat.content.docreate();
			        return false;
			    },
				resize : false
			});
			return;
		}
	}
	/**
	 * 收藏特定的专利
	 */
	
	function scAllPat(){
		var scAllPat = $.dialog({
			id : "scAllPat",
			title : "选择专题库",
			content : "url:topic!initTopicWin.action?all=1",
			left : '50%',
			top : '50%',
			lock: true,
			fixed : true,
			drag : true,
//			width : 300,
//			height : 190,
			max : false,
			min : false,
			cancelVal: '取消',
		    cancel: true ,
			close : function() {
			},
			ok: function(){
				scAllPat.content.docreate();
		        return false;
		    },
			resize : false
		});
	}
	
});

function checkall(){
	var num=0;
	$("input[name='recordno']").each(function(){
		if($(this).attr("checked")==true){
			num++;
		}
	});
	if(num<30){
		$("#allrecords").attr("checked",false);
	}else{
		$("#allrecords").attr('checked',true);
	}
}
function filterChannel(obj){
	
	if(obj.options[obj.selectedIndex].cnt<=0){
		if ($("#filterChannel").val() == null || $("#filterChannel").val() == '') {
			obj.selectedIndex = 0;
		} else {
			obj.value = $("#filterChannel").val();
		}
		alert("无此类数据");
		return;
	}else if(obj.value!=$("#filterChannel").val()){
		$(".content").mask("请稍候...");
		$("#start").val("1");
		$("#filterChannel").val(obj.value);
		if (obj.value != "WGZL" || obj.value != "wgzl" || obj.value != "WGSX" || obj.value != "wgsx") {
			$("#wgViewmodle").val("");
		}
		$("#strSortMethod").val("RELEVANCE");
		$("#searchForm").submit();
	}
}

function filterDB(dbname, count){
	if(count<=0){
		alert("无此类数据");
		return;
	}else {
		$(".content").mask("请稍候...");
		$("#start").val("1");
		$("#filterChannel").val(dbname);
		if (dbname != "WGZL" || dbname != "wgzl" || dbname != "WGSX" || dbname != "wgsx") {
			$("#wgViewmodle").val("");
		}
		$("#strSortMethod").val("RELEVANCE");
		$("#searchForm").submit();
	}
}

String.prototype.startWith=function(str){
	if(str==null||str==""||this.length==0||str.length>this.length)
	  return false;
	if(this.substr(0,str.length)==str)
	  return true;
	else
	  return false;
	return true;
	}
function scSpcPat(id,n){
		var checkboxItem = document.getElementById(id);
		var ans = checkboxItem.value;
		var pnms = checkboxItem.pnm;
		var sysids = checkboxItem.sysid;
		var sectionNames = checkboxItem.sectionName;
		var scSpcPat = $.dialog({
			id : "scSpcPat",
			title : "选择专题库",
			content : 'url:topic!initTopicWin.action?all=0&ans='+ans+'&pns='+pnms+'&sec='+sectionNames+'&sysids='+sysids,
			left : '50%',
			top : '50%',
			lock: true,
			fixed : true,
			drag : true,
//			width : 300,
//			height : 190,
			max : false,
			min : false,
			cancelVal: '取消',
		    cancel: true ,
			close : function() {
			},
			ok: function(){
				scSpcPat.content.docreate();
		        return false;
		    },
			resize : false
		});
		return;
	}
/**
 * 概览页面，重新检索，二次检索，过滤检索
 */
	function resultSearch() {
	    
	var key = $.trim($("#keywords").val());
	var text = $.trim($("#keytexts").val());
	//var f = $("#searchFlag").attr("checked");
	var t = $.trim($("input[name='searchType']:checked").val());
	//alert(t);return false;	
	var strSources = document.searchForm.strSources.value;
	if(text!=""){
		
//		设置检索条件
		$("#keyword2Save").val(text);
		$("#key2Save").val(key);
		var strWhere = "(" + $("#strWhere").val() + ") ";//document.searchForm.strWhere.value;
		var newWhere = "";
		if(key=='申请号' || key == '公开（公告）号'){
			text = isAppendCN(text);//是否追加CN
			if((text!=null)&&(text.substring(text.length-1,text.length)!="%")){
				newWhere = key+"=("+text+"%)";
			}
			else{
				newWhere = key+"=("+text+")";
			}
		}else if(key=='ss'){
            layer.alert('请选择关键词');
            $(".xubox_layer").css({"top":"150px"});
            return false;
//		}else if(key=='ss' && strSources.indexOf('patent')>-1){
			//newWhere = "名称,摘要,主权项+=(" + text + ")";
		}else{
			newWhere = key + "=(" + text + ")";
		}

//		alert(t);
//		alert(strWhere);
//		alert(strSources);
        $("body").mask("请稍候...");
		if(t==2){//二次检索
		    strWhere += " and " + newWhere;		   
			document.searchForm.strWhere.value=strWhere;
		}else if(t==3){//过滤检索
            strWhere = strWhere + " not (" + newWhere + ")";  
			document.searchForm.strWhere.value=strWhere;
		}else{
			document.searchForm.strWhere.value=newWhere;
		}
		document.searchForm.start.value = "1";
		
		if ($("#showLimit").length > 0) {
			document.searchForm.limit.value = $("#showLimit").val();
		}
		
		document.searchForm.strSortMethod.value="RELEVANCE";
		//$(".content").unmask();
		document.searchForm.submit();
	}
	return false;
}

//定期预警
function confrmWarn(name){
	var warnName=$("#warnname").val();
	if(!warnName){
		alert("请输入名称！");
		return;
	}
	if(!trim(warnName)){
		alert("请输入名称！");
		return;
	}
	if(warnName.length>20){
		alert("预警名称长度不能超过20！");
		return ;
	}
	var strWhere=$("#strWhere").val();
	var strSources=$("#strSources").val();
	var strSynonymous=$("#strSynonymous").val();
	var option=$("#option").val();
	var iHitPointType=$("#iHitPointType").val();
	var url = "/exp!createTimeWarn4NoId.action";
	var returnText = ajaxCallBySync(url, "strWhere="+encodeURIComponent(strWhere)+"&strSources="+strSources+"&strSynonymous="
	+strSynonymous+"&option="+option+"&iHitPointType="+iHitPointType+"&title="+encodeURIComponent(warnName));
	if(returnText){
		var array = eval("["+returnText+"]");
		if(array[0].success){
			alert("创建预警成功！");
			window.location="warn.action";
		}
		else{
			if(array[0].msg){
				alert(array[0].msg);
			}
			else{
				alert("创建预警失败！");
			}
			//window.location.reload();
		}
	}
	else{
		alert("创建预警异常！");
		//window.location.reload();
	}
}
function dingqiyujing(id){
	$("#"+id).unbind("click");
	if(!checkSession()){
		openLoginWin("");
	}
	else{
		var exp=$("#h_exp").val();
		if(exp.indexOf("公开（公告）日")>=0){
			alert("表达式含有公开公告日，无法进行预警！");
			return ;
		}
		var url = "/exp!checkCreateTimeWarn.action";
		var returnText = ajaxCallBySync(url, "id=");
		var array = eval("["+returnText+"]");
		if(array[0].success){
			var html="<div class='windows_wap'>"
			+ "<div class='windows_cet'>"
			+ "  <table width='100%' border='0' cellspacing='0' cellpadding='0' style='font-weight:normal;'>"
      		+ "    <tr>"
        	+ "      <th width='24%' align='right'>定期预警名称：</th>"
        	+ " 	 <td width='76%'><input name='warnname' id='warnname' type='text' class='gailan_search_int' style='margin:0;'/></td>"
      		+ "    </tr>"
      		+ "    <tr>"
        	+ "      <th align='right' >表达式：</th>"
        	+ " 	 <td style='line-height:18px;'> "+$("#h_exp").val()+"</td>"
      		+ "    </tr>"
      		+ "  </table></div>";
			var dingqiyujing = $.dialog({
				id : "dingqiyujing",
				title : "新建定期预警",
				content : html,
				left : '50%',
				top : '50%',
				lock: true,
				fixed : true,
				drag : true,
//				height : 400,
				max : false,
				min : false,
				cancelVal: '取消',
			    cancel: true ,
				close : function() {
				},
				ok: function(){
					confrmWarn();
			        return false;
			    },
				resize : false
			});
		}
		else{
			alert(array[0].msg);
		}
	}
}

function _search(condition,value){
	document.forms["detailOverviewSearchForm"].action="search!doDetailOverviewSearch.action";
	document.forms["detailOverviewSearchForm"].condition.value=condition;
	
	if(condition=='ad'){
		var strs=value.split("_");
		document.forms["detailOverviewSearchForm"].ad.value=strs[0];
		document.forms["detailOverviewSearchForm"].pic.value=strs[1];
	}else if(condition=='pd'){
		var strs=value.split("_");
		document.forms["detailOverviewSearchForm"].pd.value=strs[0];
		document.forms["detailOverviewSearchForm"].pic.value=strs[1];
	}
	
	
	
	document.forms["detailOverviewSearchForm"].pa.value=value;
	document.forms["detailOverviewSearchForm"].pin.value=value;
	document.forms["detailOverviewSearchForm"].sic.value=value;
	document.forms["detailOverviewSearchForm"].agt.value=value;
	document.forms["detailOverviewSearchForm"].target="_blank";
	document.forms["detailOverviewSearchForm"].submit();
}
function saveExp(){
	if(!checkSession()){
		openLoginWin("");
	}
	else{
		var strWhere = document.searchForm.strWhere.value;
		var strSources = document.searchForm.strSources.value;
		var option = document.searchForm.option.value;
		var strSynonymous = document.searchForm.strSynonymous.value;
		var filterChannel = document.searchForm.filterChannel.value;
		if(filterChannel!="")strSources = filterChannel;
		$.post('exp!saveMyexp.action?rd='+Math.random(),
			{strWhere:strWhere,
			 trsTable:strSources,
			 ioption:option,
			 synonym:strSynonymous
			},function(data){
//		$(".content").mask("正在保存表达式，请稍候...");
				if(data.title=='success'){
					$.dialog({title:'信息',
						content:'保存成功,是否查看已保存表达式？',
						lock:true,
						icon:'face-smile.png',
						max:false,
						min:false,
						ok:function(){
						window.location.href='exp!myExp.action';
					},
					okVal:'查看',
					cancel:true,
					cancelVal:'取消'
					});
				} else if (data.title=='4002'){
					$.dialog.alert("您保存的表达式数目已到到上限，请删除后再保存！");
					//alert('您保存的表达式数目已到到上限，请删除后再保存！');
				}
				else{
					$.dialog.alert('表达式保存失败');
				}
//				$(".content").unmask();
			}	
		)
//	});
	}
}
function batGetPatLegalStat(){
	var pats = "";
	$("input[name='recordno']").each(function(){
//		pats+=this.attributes['appid'].nodeValue+',';
		pats+=$(this).attr('appid')+',';
	});
	if(pats){
		// 将同步改为异步
		$.post('search!batGetPatLegalStat.action?rd=' + Math.random(), {
			id:pats
		}, function(json) {
			if(json){
				var legals = json.listLegalInfo;
				if(legals){
					for(var i=0;i<legals.length;i++){
						var imgsrc = "images/lay_none.jpg";
						var imgtitle="";
						if(legals[i].strLegalStatus=='失效'){
							imgsrc = "images/lay_3.jpg";
							imgtitle="失效";
						}
						if(legals[i].strLegalStatus=='在审'){
							imgsrc = "images/lay2.jpg";
							imgtitle="在审";
						}
						if(legals[i].strLegalStatus=='有效'){
							imgsrc = "images/lay1.jpg";
							imgtitle="有效";
						}
						$("#legalStat"+(i+1)).attr("src",imgsrc);
						$("#legalStat"+(i+1)).attr("title",imgtitle);
					}
				}
			}
		});
		
//		var returnText = ajaxCallBySync('/search!batGetPatLegalStat.action','id='+pats);
//		if(returnText){
//			var array = eval("["+returnText+"]");
//			var legals = array[0].listLegalInfo;
//			if(legals){
//				for(var i=0;i<legals.length;i++){
////					alert(legals[i].strLegalStatus);
//					var imgsrc = "images/lay_none.jpg";
//					var imgtitle="";
//					if(legals[i].strLegalStatus=='失效'){
//						imgsrc = "images/lay_3.jpg";
//						imgtitle="失效";
//					}
//					if(legals[i].strLegalStatus=='在审'){
//						imgsrc = "images/lay2.jpg";
//						imgtitle="在审";
//					}
//					if(legals[i].strLegalStatus=='有效'){
//						imgsrc = "images/lay1.jpg";
//						imgtitle="有效";
//					}
//					$("#legalStat"+(i+1)).attr("src",imgsrc);
//					$("#legalStat"+(i+1)).attr("title",imgtitle);
//				}
//			}
//		}
	}
}
function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }

//add by lq
//增加概览排序
//function sortResult(obj, totalcount){
//	if (totalcount > 50000) {
//		alert("命中专利总数超过5万，无法进行排序！");
//		obj.value = "RELEVANCE";
//		return;
//	}
//	$(".content").mask("请稍候...");
//	$("#strSortMethod").val(obj.value);
//	$("#searchForm").submit();
//}
function sortResult(strSortMethod, totalcount){
	if (totalcount > 50000) {
		alert("命中专利总数超过5万，无法进行排序！");
		strSortMethod = "RELEVANCE";
		return;
	}
	$("body").mask("请稍候...");
	$("#strSortMethod").val(strSortMethod);
	$("#searchForm").submit();
}

function setPageCount(obj){
	if (!checkAuthority()) {
		alert("对不起，该功能只有高级会员用户才可使用！");
		obj.value = 10;
		return false;
	}
	
	$(".content").mask("请稍候...");
	$("#limit").val(obj.value);
	$("#searchForm").submit();
}

//function viewWG(flag) {
//	if (!checkAuthority()) {
//		alert("对不起，该功能只有高级会员用户才可使用！");
//		return ;
//	}
//	
//	$("#wgViewmodle").val(flag);
//	
//	if (flag == "1") {
//		for(var i=0;i<document.getElementById("selectChannel").options.length;i++)
//	    {
//	        if (document.getElementById("selectChannel").options[i].value == 'WGZL' && document.getElementById("selectChannel").options[i].cnt > 0)
//	        {
//	        	$("#filterChannel").val('WGZL');
//	        	$("#searchForm").submit();
//	        	return ;
//	        } else if (document.getElementById("selectChannel").options[i].value == 'WGSX' && document.getElementById("selectChannel").options[i].cnt > 0) {
//	        	$("#filterChannel").val('WGSX');
//	        	$("#searchForm").submit();
//	        	return ;
//	        }
//	    }
//		
//		alert("只有中国外观专利才可以使用外观浏览模式！");
//	} else {
//		$("#filterChannel").val($("#strSources").val());
//		$("#searchForm").submit();
//	}
//	
//}

function viewWG(fillterdb, alldb, flag) {
	if (flag == "1") {
		
		if (fillterdb !=null && fillterdb == "WGZL")  {
			$("#filterChannel").val('WGZL');
			$("#wgViewmodle").val(flag);
        	$("#searchForm").submit();
        	return ;
		} else if (fillterdb !=null && fillterdb == "WGSX") {
			$("#filterChannel").val('WGSX');
			$("#wgViewmodle").val(flag);
        	$("#searchForm").submit();
        	return ;
		} else if (alldb != null && alldb == "WGZL") {
			$("#filterChannel").val('WGZL');
			$("#wgViewmodle").val(flag);
        	$("#searchForm").submit();
        	return ;
		} else if (alldb != null && alldb == "WGSX") {
			$("#filterChannel").val('WGSX');
			$("#wgViewmodle").val(flag);
        	$("#searchForm").submit();
        	return ;
		} else {
			alert("只有中国外观专利才可以使用外观浏览模式！");
		}
		
	} else {
		$("#wgViewmodle").val(flag);
		$("#filterChannel").val(fillterdb);
		$("#searchForm").submit();
	}
	
}

function viewExpAllInfoLink(id, exp) {
    exp=$("#strWhere").val();
	$.dialog({title:'表达式名称',
		content:"<textarea id='exparea' style='height:200px;width:380px;overflow-y:auto;'>"+exp+"</textarea>",
		padding:10,
		width:400,
		resizable:true,
		
		max:false,
		min:false,		
		button:[
//		        {
//			name:'重新检索',
//			callback:reSearch
//		},
		],
		cancel:true,
		cancelVal:'关闭'
		});
	}

function reSearch() {
	document.searchForm.strWhere.value = $("#exparea").val();
	$("#start").val("0");
	$("#searchForm").submit();
}


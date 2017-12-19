var arrSrcTi = new Array();
var arrSrcAb = new Array();

var arrTranslatedTi = new Array();
var arrTranslatedAb = new Array();


var tiTag = '';
var abTag = '';
var translateTag = '';
var backTag = '';

function translate(ctype) {
	if (ctype == 'outline') {
		tiTag = "li[name='patti']";
		abTag = "span[name='patab']";
		translateTag = "<a href='javascript:void(0);' class='zidongfanyi' onclick='translate(\"outline\")'>自动翻译</a>";
		backTag = "<a href='javascript:void(0);' class='zidongfanyi' onclick='backSrc()'>返回</a>";
	} else if(ctype == 'detail') {
		tiTag = "div[name='patti']";
		abTag = "span[name='patab']";
		translateTag = "<a href='javascript:noAction();' class='zidongfanyi' onclick='translate(\"detail\")'>翻译</a>";
		backTag = "<a href='javascript:noAction();' class='zidongfanyi' onclick='backSrc()'>返回</a>";
	}
	
	
	if (arrTranslatedTi.length > 0) {
		$(tiTag).each(function(i) {
			$(this)[0].innerHTML = arrTranslatedTi[i];
		});
		$(abTag).each(function(i) {
			$(this)[0].innerHTML = arrTranslatedAb[i];
		});
	} else {
		var arrSrcTransTi="";
		var arrti = new Array();
		$(tiTag).each(function() {
			arrti.push($(this));
			var s = "";
			if (ctype == 'outline') {
				s = $(this)[0].title;
			} else {
				s = $(this)[0].innerHTML;
			}
			 
			arrSrcTi.push($(this)[0].innerHTML);
			arrSrcTransTi = arrSrcTransTi +s + '===';
		});
		if (arrSrcTransTi != "") {
			arrSrcTransTi = arrSrcTransTi.substring(0, arrSrcTransTi.length - 3);
		}
		
		var arrab = new Array();
		var arrSrcTransAb="";
		$(abTag).each(function() {
			arrab.push($(this));
			var s = $(this)[0].innerHTML;
			arrSrcAb.push(s);
			arrSrcTransAb = arrSrcTransAb + s + '===';
		});
		if (arrSrcTransAb != "") {
			arrSrcTransAb = arrSrcTransAb.substring(0, arrSrcTransAb.length - 3);
		}
		if (arrSrcTransTi != "") {
			
			$(".content").mask("正在翻译，请稍候...");
			$.post(
				'translate!translate.action?rd='+Math.random(),
				{arrTi:arrSrcTransTi, arrAb:arrSrcTransAb},
				function(json){
					$(".content").unmask();
					if(json.translateInfoList){
						$.each(json.translateInfoList,function(i,item){
							arrTranslatedTi.push(item.translatedTi);
							arrTranslatedAb.push(item.translatedAb);
							arrti[i][0].innerHTML = item.translatedTi;
							arrab[i][0].innerHTML = item.translatedAb;
						});
					}
				}
			);
			
		}
	}
	
	$("li[name='zidongfanyi']").each(function() {
		$(this)[0].innerHTML = backTag; 
	});
}

function backSrc() {
	$(tiTag).each(function(i) {
		$(this)[0].innerHTML = arrSrcTi[i];
	});
	
	$(abTag).each(function(i) {
		$(this)[0].innerHTML = arrSrcAb[i];
	});
	
	$("li[name='zidongfanyi']").each(function() {
		$(this)[0].innerHTML = translateTag; 
	});
}


function translateToEn(an, strSources){
	if (!checkAuthority()) {
		$.dialog({title:'中译英',
			content:"<div style='height:70px;width:390px;overflow-y:auto;'>对不起，您所在的权限组不能使用该功能，请成为高级会员后，再使用！<a style=\"text-decoration: underline;color: #0066ff;cursor: pointer\" href=\"http://www.cnipr.com/services/hyzq/hyzq.html#tequan\" target=\"_blank\">如何成为高级会员？</a><\div>",
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
		return false;
	}
	
	
	$(".content").mask("正在翻译，请稍候...");
	
	var resp = ajaxCallBySync("/translate!translateToEn.action","an=" + an + "&strSources=" + strSources);
	var msg = null;
	if(resp){
		msg = eval('['+resp+']')[0].translateSearchDTO;
	}
	$(".content").unmask();
	if (msg == null || msg.returncode == null || msg.returncode != 1) {
		
		$.dialog({title:'中译英',
			content:"<div style='height:70px;width:390px;overflow-y:auto;'>对不起，您所在的权限组不能使用该功能，请成为高级会员后，再使用！<a style=\"text-decoration: underline;color: #0066ff;cursor: pointer\" href=\"http://www.cnipr.com/services/hyzq/hyzq.html#tequan\" target=\"_blank\">如何成为高级会员？</a><\div>",
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
	} else if (msg.returncode == 1) {
		
		if (msg.translateInfo != null) {
			$.dialog({title:'中译英',
//				content:"<div class='dl'>"
//					+ "  <div class='dlcn'>"
//					+ "     <ul class='dllf'>"
//					+ "          <li><strong>名称：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.tiCN +"</span></li>"
//					+ "          <li><strong>申请人：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.paCN +"</span></li>"
//					+ "          <li><strong>摘要：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.abCN +"</span></li>"
//					+ "     </ul>"
//					+ "     <ul class='dlrt'>"
//					+ "          <li><strong>Title：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.tiEN +"</span></li>"
//					+ "          <li><strong>Applicant：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.paEN +"</span></li>"
//					+ "          <li><strong>Abstract：</strong></li>"
//					+ "          <li><span>"+ msg.translateInfo.abEN +"</span></li>"
//					+ "     </ul>"
//					+ "  </div>"
//					+ "</div>",
				content:"<table width='720px' height='100%' border='0' cellpadding='0' cellspacing='0'>"
					+ "<tr>"
					+ "<td><b>名称：</b></td><td><b>Title：</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.tiCN +"</span></td><td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.tiEN +"</span></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td><b>申请人：</b></td><td><b>Applicant：</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.paCN +"</span></td><td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.paEN +"</span></td>"
					+ "<tr>"
					+ "<td><b>发明人：</b></td><td><b>Inventor：</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.innCN +"</span></td><td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.innEN +"</span></td>"
					+ "</tr><tr>"
					+ "<td><b>摘要：</b></td><td><b>Abstract：</b></td>"
					+ "</tr>"
					+ "<tr>"
					+ "<td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.abCN +"</span></td><td style='word-break:break-all;width:50%'><span>&nbsp;&nbsp;&nbsp;&nbsp;"+ msg.translateInfo.abEN +"</span></td>"
					+ "</tr>"
					+ "</table>",
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
		} else {
			alert("暂无收录该条专利的英文数据！");
		}
		
	}
}
		

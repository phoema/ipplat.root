$(function() {

	getinfosbyid();
});

var searchload;
function getinfosbyid() {
	var surl = "../api/agency/list";// _RootUrl+
	searchload = layer.load('加载中…');

	var ty = getpathname(1);
	var rid = getpathname(5);
	$.ajax({
		type : "post",
		url : "../api/article/get?id=" + rid,
		contentType : "application/json; charset=utf-8",// (可以)
		success : function(data) {

			ty = data.type;
			var infotype = "";
			var infotypeurl = "";
			var infotitle = data.title;
			var infotime = "";
			if (data.createtime.length >= 10)
				infotime = data.createtime.substring(0, 10);
			var infosource = data.source;// data.author;
			var infowebsite = data.link;// data.topimage //data.istop
			var infocontent = data.detail;
			var infofilelist = "";

			if (ty == "1") {
				infotypeurl =  "infolist.html?ty=" + ty;
				infotype = "工作动态";
			}

			else if (ty == "2") {
				infotypeurl = "infolist.html?ty=" + ty;
				infotype = "政策法规";
			} else if (ty == "3") {
				infotypeurl = "infolist.html?ty=" + ty;
				infotype = "服务指南";
			} else if (ty == "4") {
				infotypeurl ="infolist2.html?ty=" + ty;
				infotype = "典型判例";
			}

			$("#infotype").html(infotype);
			$("#infotype").attr("href", infotypeurl);
			$("#infotitle").html(infotitle);
			$("#infotitle1").html(infotitle);
			$("#infotime").html(infotime);
			$("#infosource").html(infosource);
			if (infowebsite != "" && infowebsite != null)
				$("#infosource").attr("href", infowebsite).attr("target",
						"_blank").addClass("link");
			$("#infocontent").html(infocontent);
			// $("#infofilelist").html(infofilelist);

			layer.close(searchload);

			var arrattachment = [];
			if (data.attachment != "" && data.attachment != null)
				arrattachment = data.attachment.split(';;');
			for (var i = 0; i < arrattachment.length; i++) {
				if (arrattachment[i] == "")
					continue;
				var listItem = '<li><a download="' + arrattachment[i]
						+ '" target="_blank" href="' + arrattachment[i + 1] + '">'
						+ arrattachment[i] + '</a></li>';
				$("#infofilelist").append(listItem);
				i++;
			}
			
			if ($("#infofilelist li").length == 0) {
				$(".appendix").hide();
			}
		}
	});

}

var articeid;
// 实例化编辑器
// 建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor', {
	// 这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
	toolbars : [ [ 'fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold',
			'italic', 'underline', 'fontborder', 'strikethrough',
			'superscript', 'subscript', 'removeformat', 'formatmatch',
			'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor',
			'backcolor', 'insertorderedlist', 'insertunorderedlist',
			'selectall', 'cleardoc', '|', 'rowspacingtop', 'rowspacingbottom',
			'lineheight', '|', 'customstyle', 'paragraph', 'fontfamily',
			'fontsize', '|', 'directionalityltr', 'directionalityrtl',
			'indent', '|', 'justifyleft', 'justifycenter', 'justifyright',
			'justifyjustify', '|', 'touppercase', 'tolowercase', '|', 'link',
			'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright',
			'imagecenter', '|', 'simpleupload', 'insertimage', 'emotion',
			'scrawl', 'insertvideo', 'music', 'map', 'insertframe',
			'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
			'horizontal', 'date', 'time', 'spechars', 'snapscreen',
			'wordimage', '|', 'inserttable', 'deletetable',
			'insertparagraphbeforetable', 'insertrow', 'deleterow',
			'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown',
			'splittocells', 'splittorows', 'splittocols', 'charts', '|',
			'print', 'preview', 'searchreplace', 'drafts', 'help' ] ]
});
// 编辑器加载完成后执行相关操作
ue
		.addListener(
				'ready',
				function(editor) {
					var map = urlparm(location.search.substr(1));
					if (map.id) {
						$("#id").val(map.id);
						$
								.ajax({
									type : "post",
									url : "../api/article/get?id=" + map.id,
									contentType : "application/json; charset=utf-8",// (可以)
									success : function(data) {
										$("#articletype").val(data.type);
										$("#title").val(data.title);
										$("#author").val(data.author);
										$("#source").val(data.source);
										$("#link").val(data.link);
										$("#istop").val(data.istop);
										$("#modelurl").attr("src",
												data.topimage);
										var arrattachment = [];
										if (data.attachment != ""
												&& data.attachment != null)
											arrattachment = data.attachment
													.split(';;');
										for (var i = 0; i < arrattachment.length; i++) {
											if (arrattachment[i] == "")
												continue;
											var listItem = '<li class="tsuc" style="list-style-type: none;" id="file_'
													+ i + '">';
											listItem += '<a style="float:left;" target="_blank" download="'
													+ arrattachment[i]
													+ '" name="fileinfo" href="'
													+ arrattachment[i + 1]
													+ '" data-url="'
													+ arrattachment[i + 1]
													+ '">'
													+ arrattachment[i]
													+ '</a>';
											listItem += '<div class="progressBar" style="float:left;"><div class="progress"></div></div>'
													// + '<p class="status"
													// style="float:left;">Pending</p>'
													+ '<a name="cancel" style="float:left;color: #0060a6;cursor:pointer">删除</a>'
													+ '</li>';
											$("#attachment").append(listItem);
											$("li#file_" + i).find(
													"a[name='cancel']").click(
													function(e) {
														$(this).parent()
																.remove();
													});
											i++;
										}

										UE
												.getEditor('editor')
												.setContent(
														data.detail);
									}
								});
					}
				});
$(document).ready(function() {
});
// 切取url中的参数集合
function urlparm(url) {
	var map = {};
	var qs = url.split("&");
	if (qs) {
		for (var i = 0; i < qs.length; i++) {
			var key = qs[i].substring(0, qs[i].indexOf("="));
			var value = qs[i].substring(qs[i].indexOf("=") + 1);
			map[key] = value;
		}
	}
	return map;
}
function saveData() {
	var title = $.trim($("#title").val());
	if (title == "") {
		layer.alert("请输入标题");
		return false;
	}
	var elink = $.trim($("#link").val());
	var str = elink.match(/http:\/\/.+/);
	if (str == null && elink != "") {
		str = elink.match(/https:\/\/.+/);
		if (str == null && elink != "") {
			layer.alert("链接以“http://”或“https://”开头");
			return false;
		}
	}
	if ($("#attachment li").hasClass("upload-state-loading")) {
		layer.alert("有附件正在上传，请上传成功后再保存");
		return false;
	}
	var detail = UE.getEditor('editor').getContent();
	var type = $("#articletype").val();
	var postdata = {};
	postdata.title = title;
	postdata.detail = detail;// detail;
	postdata.type = type;
	postdata.istop = $("#istop").val();
	postdata.topimage = $("#modelurl").attr("src");
	var strattachment = "";
	$("#attachment li").each(
			function() {// 名字+路径组合存储
				strattachment += $.trim($(this).find("[name='fileinfo']")
						.text())
						+ ";;"
						+ $(this).find("[name='fileinfo']").attr("data-url")
						+ ";;";
			});
	postdata.attachment = strattachment;
	postdata.author = $.trim($("#author").val());
	postdata.source = $.trim($("#source").val());
	postdata.link = elink;
	if ($("#id").val()) {
		postdata.id = $("#id").val();
	}

	$.ajax({
		type : "post",
		url : "../api/article/save",
		data : JSON.stringify(postdata),
		contentType : "application/json; charset=utf-8",// (可以)
		success : function(data) {
			layer.msg('保存成功', {
				icon : 1,
				time : 500
			// 2秒关闭（如果不配置，默认是3秒）
			});
			setTimeout(function() {

				location.href = "article.html";
			}, 500);
		},
		error : function(sender) {
			var test = sender;
		}
	});

}

// 附件上传封面图片上传 START
var uploader1;
uploader1 = init();
// uploader1.options.server="/api/articleurl/uploadimage?id=1";
var uploaderFile;
uploaderFile = initFile();
// uploaderFile.options.server="/api/articleurl/uploadfile?id=1";
function init() {
	// 初始化Web Uploader
	$list = $('#fileList');
	// 初始化Web Uploader
	var uploader = WebUploader.create({
		// 自动上传。
		auto : true,
		// swf文件路径
		swf : '../ueditor/thire-party/webuploader/Uploader.swf',
		// 文件接收服务端。
		server : '../ueditor/config?action=uploadimage',
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick : '#filePicker',
		// [默认值：'file'] 设置文件上传域的name。
		fileVal : 'upfile',
		// [默认值：undefined] 验证文件总数量, 超出则不允许加入队列。
		fileNumLimit : 1,
		fileSingleSizeLimit : 2 * 1024 * 1024,
		// [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数。
		// formData :{"productid":1},// 产品ID
		// 只允许选择文件，可选。
		accept : {
			title : 'Images',
			extensions : 'gif,jpg,jpeg,bmp,png',
			mimeTypes : 'image/jpeg,image/jpg,image/png,image/gif'
		}
	});

	// 文件上传成功，给item添加成功class, 用样式标记上传成功。
	uploader.on('uploadSuccess', function(file, response) {
		$('#' + file.id).addClass('upload-state-done');
		// input 的情况$("#modelurl").val(response.infoMap.url);
		// img的情况
		$("#modelurl").attr("src", "");
		$("#modelurl").attr("src", getdomainName("manage") + response.url);
		uploader.reset();
		$list.html("");
	});

	// 文件上传失败，现实上传出错。
	uploader.on('uploadError', function(file, e) {
		var $li = $('#' + file.id), $error = $li.find('div.error');

		// 避免重复创建
		if (!$error.length) {
			$error = $('<div class="error"></div>').appendTo($li);
		}

		$error.text('上传失败');
	});

	uploader.on("error", function(type) {
		if (type == "Q_EXCEED_NUM_LIMIT") {
			layer.alert('封面图片大小不能超过2M');
		} else if (type == "F_EXCEED_SIZE") {
			layer.alert('封面图片大小不能超过2M');
		} else if (type == "Q_TYPE_DENIED") {
			layer.alert('上传格式错误，仅允许上传图片');
		} else {
			layer.alert("上传出错！请检查后重新上传！错误代码" + type);
		}
	});
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on('uploadComplete', function(file) {
		$('#' + file.id).find('.progress').remove();
	});
	return uploader;
}
function initFile() {
	$list = $('#fileList2'), actionUrl = UE.getEditor('editor').getActionUrl(
			UE.getEditor('editor').getOpt('fileActionName')), fileMaxSize = UE
			.getEditor('editor').getOpt('fileMaxSize'), acceptExtensions = (UE
			.getEditor('editor').getOpt('fileAllowFiles') || []).join('')
			.replace(/\./g, ',').replace(/^[,]/, '');
	;

	// 初始化Web Uploader
	var uploader = WebUploader.create({
		// 自动上传。
		auto : true,
		// swf文件路径
		swf : '../ueditor/thire-party/webuploader/Uploader.swf',
		// 文件接收服务端。
		// server: '/ueditor/config?action=uploadimage',
		// server: '/api/articleurl/saveurl?id=1',
		server : '../ueditor/config?action=uploadfile',
		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick : '#filePicker2',
		// [默认值：'file'] 设置文件上传域的name。
		fileVal : 'upfile',
		// [默认值：undefined] 验证文件总数量, 超出则不允许加入队列。
		fileNumLimit : 1,
		// [默认值：{}] 文件上传请求的参数表，每次发送都会发送此对象中的参数。
		// formData :{"productid":1},// 产品ID
		// 只允许选择文件，可选。
		fileSingleSizeLimit : 10 * 1024 * 1024
	});

	// 文件上传成功，给item添加成功class, 用样式标记上传成功。
	uploader.on('uploadSuccess', function(file, response) {
		$('#' + file.id).addClass('upload-state-done').removeClass(
				"upload-state-loading");
		$('#' + file.id).find(".progress").text("");
		$('#' + file.id).find("[name='fileinfo']").attr("href",
				getdomainName("manage") + response.url).attr("data-url",
				getdomainName("manage") + response.url);
		// input 的情况$("#modelurl").val(response.infoMap.url);
		// img的情况
		// $("#attachment").append(response.original + response.url + "<br>");
		uploader.reset();
		$list.html("");
	});

	uploader.on("error", function(type) {
		if (type == "Q_EXCEED_NUM_LIMIT") {
			layer.alert('单个文件大小不能超过10M');
		} else if (type == "F_EXCEED_SIZE") {
			layer.alert('单个文件大小不能超过10M');
		} else {
			layer.alert("上传出错！请检查后重新上传！错误代码" + type);
		}
	});
	// 当文件被加入队列以后触发。
	uploader
			.on(
					'fileQueued',
					function(file, e) {
						var listItem = '<li class="tsuc upload-state-loading" style="list-style-type: none;" id="'
								+ file.id + '">';
						listItem += '<a style="float:left;" target="_blank" download="'
								+ file.name
								+ '" name="fileinfo" data-url="">'
								+ file.name + '</a>';
						// <span style="float:left;">(' + Math.round(file.size /
						// 1024)
						// + ' KB)</span>';
						listItem += // '<span class="progressValue"
						// style="float:left;"></span>'
						// +
						'<div class="progressBar" style="float:left;"><div class="progress">（上传中）</div></div>'
								// + '<p class="status"
								// style="float:left;">Pending</p>'
								+ '<a name="cancel" style="float:left;color: #0060a6;cursor:pointer">删除</a>'
								+ '</li>';
						$("#attachment").append(listItem);
						$("li#" + file.id + "").find("a[name='cancel']").click(
								function(e) {

									uploader.removeFile(file);

									$("li#" + file.id).remove();
								});
					});
	uploader.on('uploadError', function(file, e) {
		var $li = $('#' + file.id), $error = $li.find('div.error');
		$li.find(".progress").text("上传失败").css({
			"color" : "red"
		});
		// 避免重复创建
		// if (!$error.length) {
		// $error = $('<div class="error"></div>').appendTo($li);
		// }

		// $error.text('上传失败');
	});
	// 完成上传完了，成功或者失败，先删除进度条。
	uploader.on('uploadComplete', function(file) {
		$('#' + file.id).find('.progress').remove();
	});
	return uploader;
}

// 附件上传封面图片上传 END

// 获取域名
function getdomainName(filename) {
	var domainurl = location.href;
	var domainName = "";
	var domainindex = domainurl.indexOf("/" + filename + "/");
	if (domainindex == -1)
		domainindex = domainurl.lastIndexOf("/");
	domainName = domainurl.substring(0,domainindex)
	domainName=domainName.replace(location.origin,"");
	return domainName;
}
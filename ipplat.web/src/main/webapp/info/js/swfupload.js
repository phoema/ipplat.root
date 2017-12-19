var queueErrorArray;
var _RootUrl="http://localhost:8080/";var uid="";
function swfloadBegin(){ 
	var swfUpload = new SWFUpload(
			{
				upload_url : _RootUrl + 'attachment/swfupload?type=fm_img&uid='
						+ uid,
				flash_url : _RootUrl + 'js/swfupload.swf',

				file_post_name : 'filedata',
				use_query_string : true,
				post_params : {param1: 'Hello',
					param2: '你好'},

				file_size_limit : "10 MB",
				file_types : "*.jpg;*.png;*.bmp;*.gif",
				file_types_description : "允许上传文件类型*.jpg;*.png;*.bmp;*.gif",
				file_upload_limit : 0, // Zero means unlimited

				// handlers
				file_dialog_start_handler : fileDialogStart,
				file_queued_handler : fileQueued,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStart,
				upload_progress_handler : uploadProgress,
				upload_success_handler : uploadSuccess,
				upload_complete_handler : uploadComplete,
				button_text_style : ".btn-txt{color: #0A81A7; font-size:12px;font-family:'微软雅黑';cursor:pointer;}",
				button_placeholder_id : 'spanButtonPlaceholder',
				button_text : "<a class='btn-txt'> &nbsp;上传图片</a>",
				button_image_url : '',
				button_width : 270,
				button_height : 20,
				button_cursor : SWFUpload.CURSOR.HAND,
				button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
				button_action: SWFUpload.BUTTON_ACTION.SELECT_FILE,
				debug : false,

				custom_settings : {}
			});
	var swfUploadfile = new SWFUpload(
			{
				upload_url : _RootUrl + 'attachment/swfupload?uid=' + uid,
				flash_url : _RootUrl + 'js/swfupload.swf',

				file_post_name : 'filedata',
				use_query_string : true,
				post_params : {param1: 'Hello',
					param2: '你好'},

				file_size_limit : "20 MB",
				file_types : "*",
				file_types_description : "All Files",
				file_upload_limit : 0, // Zero means unlimited

				// handlers
				file_dialog_start_handler : fileDialogStart,
				file_queued_handler : fileQueuedfile,
				file_queue_error_handler : fileQueueError,
				file_dialog_complete_handler : fileDialogComplete,
				upload_start_handler : uploadStartfile,
				upload_progress_handler : uploadProgressfile,
				upload_success_handler : uploadSuccessfile,
				upload_complete_handler : uploadComplete,
				button_text_style : ".btn-txt{color: #0A81A7; font-size:12px;font-family:'微软雅黑';cursor:pointer;}",
				button_placeholder_id : 'spanButtonPlaceholderfile',
				button_text : "<a class='btn-txt'> &nbsp;上传文件</a>",
				button_image_url : '',
				button_width : 270,
				button_height : 20,
				button_cursor : SWFUpload.CURSOR.HAND,
				button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,
				button_action: SWFUpload.BUTTON_ACTION.SELECT_FILE,
				debug : false,

				custom_settings : {}
			});
	
}
// ======================================== 回调函数Handlers
// ===================================

/**
 * 打开文件选择对话框时响应
 */
function fileDialogStart() {
	if (queueErrorArray) {
		queueErrorArray = null;
	}
}

/**
 * 文件被加入上传队列时的回调函数,增加文件信息到列表并自动开始上传.<br />
 * <p>
 * </p>
 * SWFUpload.startUpload(file_id)方法导致指定文件开始上传, 如果参数为空,则默认上传队列第一个文件;<br />
 * SWFUpload.cancelUpload(file_id,trigger_error_event)取消指定文件上传并从队列删除,
 * 如果file_id为空,则删除队列第一个文件,trigger_error_event表示是否触发uploadError事件.
 * 
 * @param file
 *            加入队列的文件
 */
function fileQueued(file) {

	// swfUpload.startUpload();
}
function fileQueuedfile(file) {

	var swfUpload = this;
	var listItem = '<li class="tsuc" style="list-style-type: none;" id="'
			+ file.id + '">';
	listItem += '<div style="float:left;">' + file.name
			+ '</div>';
			//<span style="float:left;">(' + Math.round(file.size / 1024)
			//+ ' KB)</span>';
	listItem += //'<span class="progressValue" style="float:left;"></span>'
			//+ 
			'<div class="progressBar" style="float:left;"><div class="progress"></div></div>'
			//+ '<p class="status" style="float:left;">Pending</p>'
			+ '<a name="cancel" style="float:left;color: #0060a6;cursor:pointer">删除</a>'
			+ '</li>';
	$("#logListfile").append(listItem); 
	$("li#"+file.id+"").find("a[name='cancel']").click(function(e) {
		 
		 swfUpload.cancelUpload(file.id);
	 
		$("li#" + file.id).remove();
	});
	// swfUpload.startUpload();
}

/**
 * 文件加入上传队列失败时触发,触发原因包括:<br />
 * 文件大小超出限制<br />
 * 文件类型不符合<br />
 * 上传队列数量限制超出等.
 * 
 * @param file
 *            当前文件
 * @param errorCode
 *            错误代码(参考SWFUpload.QUEUE_ERROR常量)
 * @param message
 *            错误信息
 */
function fileQueueError(file, errorCode, message) {
	if (!queueErrorArray) {
		queueErrorArray = [];
	}
	var errorFile = {
		file : file,
		code : errorCode,
		error : ''
	};
	switch (errorCode) {
	case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
		errorFile.error = '文件大小超出限制.';
		break;
	case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
		errorFile.error = '文件类型受限.';
		break;
	case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
		errorFile.error = '文件为空文件.';
		break;
	case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
		errorFile.error = '超出文件数量限制.';
		break;
	default:
		layer.alert('加载入队列出错.');
		break;
	}
	queueErrorArray.push(errorFile);
}

/**
 * 选择文件对话框关闭时触发,报告所选文件个数、加入上传队列文件数及上传队列文件总数
 * 
 * @param numSelected
 *            选择的文件数目
 * @param numQueued
 *            加入队列的文件数目
 * @param numTotalInQueued
 *            上传文件队列中文件总数
 */
function fileDialogComplete(numSelected, numQueued, numTotalInQueued) {
	var swfupload = this;
	if (queueErrorArray && queueErrorArray.length) {
		var table = $('<table><tr><td>文件</td><td>大小</td></tr></table>');
		for ( var i in queueErrorArray) {
			var tr = $('<tr></tr>');
			var info = '<td>' + queueErrorArray[i].file.name
					+ '<span style="color:red">(' + queueErrorArray[i].error
					+ ')</span></td>' + '<td>' + queueErrorArray[i].file.size
					+ 'bytes</td>';
			table.append(tr.append(info));
		}
		var layerindex = $.layer({
			shade : [ 0 ],
			closeBtn : 0,
			area : [ 'auto', 'auto' ],
			dialog : {
				msg : queueErrorArray[i].error,
				btn : [ '确定' ],
				yes :function(btn, dialog, index) {
					$("#queueStatus").text(
							'选择文件:' + numSelected + ' / 加入队列文件:' + numQueued);
					swfupload.startUpload();
					layer.close(layerindex);
				} 
			}
		}); 
	} else {
		this.startUpload();
	}
}

/**
 * 文件开始上传时触发
 * 
 * @param file
 *            开始上传目标文件
 */
function uploadStart(file) {

}

function uploadStartfile(file) {
	if (file) {
		$("#logListfile li#" + file.id).find('p.status').text('上传中...');
		$("#logListfile li#" + file.id).find('p.progressValue').text('0%');
	}
}
/**
 * 文件上传过程中定时触发,更新进度显示
 * 
 * @param file
 *            上传的文件
 * @param bytesCompleted
 *            已上传大小
 * @param bytesTotal
 *            文件总大小
 */
function uploadProgress(file, bytesCompleted, bytesTotal) {

}
function uploadProgressfile(file, bytesCompleted, bytesTotal) {
	var percentage = Math.round((bytesCompleted / bytesTotal) * 100);
	$("#logListfile li#" + file.id).find('div.progress').css('width',
			percentage + '%');
	$("#logListfile li#" + file.id).find('span.progressValue').text(
			percentage + '%');
}

/**
 * 文件上传完毕并且服务器返回200状态码时触发
 * 
 * @param file
 *            上传的文件
 * @param serverData
 * @param response
 */
function uploadSuccess(file, serverData, response) {
  
	$("#fmimg").attr("src", _RootUrl + "attachment/getswfimg?id=" + serverData);//
	$("#fmimg").attr("value", serverData);
}

function uploadSuccessfile(file, serverData, response) {
	var item = $("#logListfile li#" + file.id);
	item.find('div.progress').css('width', '100%');
	item.find('span.progressValue').css('color', 'blue').text('100%');
	item.attr("data-pid", serverData);// data-pid
	item.addClass('success').find('p.status').html('上传完成!');
  
	//这里   是新上传的
		 
		 $("li#" + file.id + "").find("a[name='cancel']").unbind("click");
			$("li#" + file.id + "").find("a[name='cancel']").click(function(e) {
				delfile(serverData, file.id);
			}); 
	 
	
}
function delfile(fid,fileid){
	 
	 if(!(fileid.indexOf("SWFUpload")>-1)){  
		// 接口
		var url = _RootUrl + "attachment/delattach";
		$.ajax({
			type : "post",
			url : url,
			dataType : "json", // 返回值类型
			async : false,
			data : {
				fid : fileid
			},
			success : function(sender) { 
				if (sender.returnvalue != '0') {
					return;
				} else {
					 
					$("#"+fileid).remove();
				}
			},
			error : function(sender) {
			}

		});
	}else{  
		 
		// 接口
		var url = _RootUrl + "attachment/swfdel";
	 
		$.ajax({
			type : "post",
			url : url,
			dataType : "json", // 返回值类型
			async : false,
			data : {
				frid : fid,uid:uid
			},
			success : function(sender) {
				 
				if (sender!= '0') {
					return;
				} else {
					$("#"+fileid).remove();
				}
			},
			error : function(sender) {
			}

		});
	}
}
/**
 * 在一个上传周期结束后触发(uploadError及uploadSuccess均触发)
 * 在此可以开始下一个文件上传(通过上传组件的uploadStart()方法)
 * 
 * @param file
 *            上传完成的文件对象
 */
function uploadComplete(file) {
	this.uploadStart();
}
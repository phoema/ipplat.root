function fnIndex(value, row, index) {
			return index + 1;
		}

		var API_URL = '../api/article/list';
		var API_URL_SAVE = '../api/article/save';
		var API_URL_DEL = '../api/article/delete?id=';
		//实例化编辑器
		//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
		var ue = UE.getEditor('editor');
		//var bootdata = [{"uid":1,"username":"admin","name":"管理员","salt":"8d78869f470951332959580424d4bf4f","state":0,"scores":110,"roleList":[{"id":1,"role":"admin","description":"管理员","available":true,"permissions":[{"id":1,"name":"用户管理","resourceType":"menu","url":"user_info/userList","permission":"user_info:view","parentId":0,"parentIds":"0/","available":true},{"id":2,"name":"用户添加","resourceType":"button","url":"user_info/userAdd","permission":"user_info:add","parentId":1,"parentIds":"0/1","available":true}]},{"id":2,"role":"vip","description":"VIP会员","available":true,"permissions":[]}],"credentialsSalt":"admin8d78869f470951332959580424d4bf4f"},{"uid":2,"username":"jiahh","state":0,"scores":0,"roleList":[],"credentialsSalt":"jiahhnull"},{"uid":4,"username":"username","name":"jiahh","state":0,"scores":0,"roleList":[],"credentialsSalt":"usernamenull"}];
		var $table = $('#table').bootstrapTable({
			url : API_URL,
			sortName:'createtime',
			sortOrder:'desc'
		}), $modal = $('#modal').modal({
			show : false
		}), $alert = $('#alert').hide();

		$(document).ready(function() {

		});
		var type = {
			"1" : "工作动态",
			"2" : "政策法规",
			"3" : "服务指南",
			"4" : "典型判例",
			"5" : "其他"
		}
		// 分类格式化
		function fnType(value, row, index) {
			return type[row.type];
		}
		// 标题格式化
		function fnUrl(value, row, index) {
			return '<a  target="_blank" href="../info/infodetail.html?ty='+row.type+'&id=' + row.id + '">' + value
					+ '</a>';

		}

		function queryParams(params) {
			return {};
		}

		function actionFormatter(value, row, index) {
			return [
					'<a class="update" target="_blank" href="articleedit.html?id='
							+ row.id
							+ '" title="修改"><i class="glyphicon glyphicon-edit"></i></a>',
					'<a class="remove" href="javascript:" title="删除"><i class="glyphicon glyphicon-remove-circle"></i></a>', ]
					.join('');
		}

		// update and delete events
		window.actionEvents = {
			//'click .update': function (e, value, row) {
			//    showModal($(this).attr('title'), row);
			//},
			'click .remove' : function(e, value, row) {
				if (confirm('确定删除此条数据吗?')) {
					$.ajax({
						url : API_URL_DEL + row.id,
						type : 'post',
						success : function() {
							$table.bootstrapTable('refresh');
							showAlert('删除数据成功!', 'success');
						},
						error : function(error) {
							showAlert('删除数据失败!', 'danger');
						}
					})
				}
			}
		};

		// 显示消息
		function showAlert(title, type) {
			$alert.attr('class', 'alert alert-' + type || 'success').html(
					'<i class="glyphicon glyphicon-check"></i> ' + title)
					.show();
			setTimeout(function() {
				$alert.hide();
			}, 3000);
		}
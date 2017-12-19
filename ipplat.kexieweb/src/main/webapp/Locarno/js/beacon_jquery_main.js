/**
 * @author 19 烽火台基础JS
 */
(function($) {

	/** 基础函数* */
	var _fz_common = {

		// 接口
		// 弹出层
		popoverList : {},
		popover : function(id, _placement, _content, _title) {

			// 只判断做一次绑定
			var _popover = $.fz_common.popoverList[id];

			if (typeof (_popover) == 'undefined') {
				var options = {
					placement : _placement,
					content : _content,
					title : _title,
					trigger : "manual"
				}
				_popover = $(id).popover(options);
				$(id).popover('show');
				$.fz_common.popoverList[id] = _popover;
			} else {
				$(id).popover('toggle');
			}

		},
		// alert
		alert : function(_title, _content, _dialogHidden) {

			$.teninedialog({
				title : _title,
				content : _content,
				dialogHidden : _dialogHidden,
				bootstrapModalOption : {
					keyboard : true
				}
			});

		},
		// confirm
		confirm : function(_title, _content, _dialogHidden, _otherButtons, _otherButtonStyles, _otherFunction, _url) {
			$.teninedialog({
				title : _title,
				content : _content,
				showCloseButton : true,
				otherButtons : _otherButtons,
				otherButtonStyles : _otherButtonStyles,
				otherFunction : _otherFunction,
				bootstrapModalOption : {
					keyboard : true,
					remote : _url
				},
				// dialogShow : function() {
				// // alert('即将显示对话框');
				// },
				// dialogShown : function() {
				// // alert('显示对话框');
				// },
				// dialogHide : function() {
				// // alert('即将关闭对话框');
				// },
				dialogHidden : _dialogHidden,
				clickButton : function(sender, modal, index) {
					// alert('选中第' + index + '个按钮：' + sender.html());
					$(this).closeDialog(modal);
				}
			});
		},
		// 弹出页面
		open : function(_title, _dialogHidden, _otherButtons, _otherButtonStyles, _otherFunction, _url) {
			$.fz_common.confirm(_title, null, _dialogHidden, _otherButtons, _otherButtonStyles, _otherFunction, _url);
		}
	};

	$.extend($.fz_common, _fz_common);

	// form函数
	// 提交表单
	$.fz_form.prototype.ajaxSubmit = function(_url, _validateError, _success, _error) {

		var v = this.validateForm();

		if (!v) {
			// 验证错误
			if (_validateError) {
				_validateError();
			}
			return;
		}

		this.form.ajaxSubmit({
			type : "POST", // 提交方式 post
			contentType : "application/x-www-form-urlencoded; charset=utf-8", // 提交内容格式及编码
			// 根据服务器配置设置编码
			// 附件可能需要修改
			// data: $('#form1').serialize(),
			dataType : "xml", // 预期服务器返回数据类型
			// async : true, //异步模式
			url : _url, // 请求url
			success : _success,// 提交成功的回调函数
			error : _error
		});

	}

	// 验证表单
	$.fz_form.prototype.validateForm = function() {
		var id = this.form.attr("id");
		// 当前form默认的_validate对象
		try {

			var _validate
			try {
				_validate = eval(id + "_validate");
			} catch (e) {

			}

			if (_validate != null && typeof (_validate) != 'undefined') {
				return _validate.form();
			} else {
				return true;
			}
		} catch (e) {
			return true;
		}
	}

	// 重置表单内表单项
	$.fz_form.prototype.resetForm = function() {
		var id = this.form.attr("id");
		$("#_" + id + "_reset").click();

		// 重置提示内容
		var _validate
		try {
			_validate = eval(id + "_validate");
		} catch (e) {

		}
		if (_validate != null && typeof (_validate) != 'undefined') {
			_validate.resetForm();
		}

		// 移动到FORM位置
		$("#" + id + " input:first-child").focus()
	}

})(jQuery);

(function($) {

	// 基于bootstrap的简单grid
	$.fz_simple_grid = function(gridID, options) {

		var _prefix = "s_grid_";
		this.prefix = _prefix;

		// ID
		this.id = gridID;
		var _paginator = _prefix + gridID + "_paginator";
		this.paginatorID = _paginator;
		var _tbody = _prefix + gridID + "_tbody";
		this.tbodyID = _tbody;

		// 当前加载的数据
		this.data = new Array();

		// 配置
		var defaults = {

			// action
			action : "",
			// 节点
			property : "",
			// 对应列
			th : [],
			// 序号
			sequence : false,
			// 选择框类型
			rowselect : "none",
			// 选择框对应的列
			rowselectkey : "key",
			// 分页配置
			containerClass : "pagination",
			// 每页显示数量
			pageRow : 10,
			// 当前页

			currentPage : 1,
			// 分页按钮的数量
			numberOfPages : 5,
			// 默认排序字段
			sortColumn : "",

			// 分页前内容
			paginatorPrefix : "<div style='float:left; margin: 5px 0 0px 5px;'>总记录数：<strong class='totalnumber'></strong> 总页数：<strong class='totalpage'></strong> </div>",

			// 总页数
			totalPages : 1,
			onPageClicked : function(event, originalEvent, type, page) {
				alert(page);
			},
			// 可以设置连接地址，锚点还是具体的连接比如"http://example.com/list/page/"+page
			// 设置具体连接则没有ajax效果
			pageUrl : function(type, page, current) {
				return "#" + _prefix + gridID + "_table";
			},
			onPageChanged : null,
			alignment : "right"
		}

		var options = $.extend(defaults, options);
		this.opt = options;

		$("#" + _paginator).bootstrapPaginator(defaults);

	}

	// 刷新分页
	$.fz_simple_grid.prototype.resetPaginator = function(options) {
		$("#" + this.paginatorID).bootstrapPaginator("setOptions", options);
	}

	// 当前所选择的行（element）
	$.fz_simple_grid.prototype.selectRowsElement = function() {

		var tbody = this.prefix + this.id + "_tbody";
		var selectName = this.opt.property + ":" + this.opt.rowselectkey;

		var array = new Array();

		$("#" + tbody + " input[name='" + selectName + "']").each(function() {

			if ($(this).is(':checked') == true) {
				array.push($(this));
			}

		});

		return array;

	}

	// 当前选中行索引
	$.fz_simple_grid.prototype.selectRowsIndex = function() {

		var eles = this.selectRowsElement();
		var array = new Array();

		for ( var i = 0; i < eles.length; i++) {
			array.push(eles[i].attr("index"));
		}

		return array;
	}

	// 当前所选择的内容
	$.fz_simple_grid.prototype.selectRows = function() {

		var eles = this.selectRowsElement();
		var array = new Array();

		for ( var i = 0; i < eles.length; i++) {
			var index = eles[i].attr("index");
			array.push(this.data[index]);
		}

		return array;

	}

	// 当前所选择的input内容
	$.fz_simple_grid.prototype.selectInputValues = function() {

		var eles = this.selectRowsElement();
		var array = new Array();

		for ( var i = 0; i < eles.length; i++) {
			array.push(eles[i].val());
		}

		return array;

	}

	// 获取行内容
	$.fz_simple_grid.prototype.getRow = function(index) {
		return this.data[index];
	}

	// 全选取消全选
	$.fz_simple_grid.prototype.select = function(ele) {

		var tbody = this.prefix + this.id + "_tbody";
		var selectName = this.opt.property + ":" + this.opt.rowselectkey;

		if (ele.is(':checked') == true) {
			$("#" + tbody + " input[name='" + selectName + "']").attr("checked", true);
		} else {
			$("#" + tbody + " input[name='" + selectName + "']").attr("checked", false);
		}
	}

	// 查询
	$.fz_simple_grid.prototype.query = function(startPage, fun) {

		var _grid = this;
		var _opt = this.opt;
		var _prefix = this.prefix;
		var gridID = _prefix + this.id + "_table";

		$("#" + gridID).showLoading({});

		var _success = function(data) {

			$("#" + gridID).hideLoading();

			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {

				// 开始记录
				var start_row = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_start-row");
				// 每页的记录数量
				var page_row = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_page-row");
				// 查询出的总数
				var record_number = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_record-number");

				// 结果
				var record = $.fz_common.getXmlNodeValues(data, "context>" + _opt.property);

				$("#" + _grid.tbodyID).empty();
				_grid.data = new Array();

				if (record_number != 0) {

					// 循环节点
					$(record).each(function(index, domEle) {

						var td = "";
						var ele = $(this);

						if (ele.text() == null || ele.text() == "") {
							return;
						}

						if (_opt.rowselect == "checkbox" || _opt.rowselect == "radio") {

							var selectName = _opt.property + ":" + _opt.rowselectkey;

							td += "<td><input type=\"" + _opt.rowselect + "\" name=\"" + selectName + "\" value=\"" + ele.find(_opt.rowselectkey).text() + "\" index=\"" + index + "\"/></td>";
						}

						if (_opt.sequence) {
							td += "<td>" + (start_row - 0 + index) + "</td>";
						}

						for ( var i = 0; i < _opt.th.length; i++) {
							var th = _opt.th[i];

							// 链接@link#link文字'
							var parten = /\@(.+)\#(.+)/;
							if (parten.test(th + "")) {

								var l = (th + "").match(parten);

								var link = l[1];
								var text = l[2];

								if (link == "link") {
									td += "<td><a href=\"javascript:void(0);\" onClick=\"_sgrid_row_click(" + index + ",'" + text + "','" + link + "');\">" + text + "</a></td>";
								} else if (link == "button") {
									td += "<td><button type=\"button\" onclick=\"_sgrid_row_click(" + index + ",'" + text + "','" + link + "');\" class=\"btn\">" + text + "</button></td>";
								}

							} else {
								td += "<td>" + ele.find(th).text() + "</td>";
							}
						}

						_grid.data.push(ele);
						$("#" + _grid.tbodyID).append("<tr>" + td + "</tr>");

					});

					// 翻页
					var totalpage = 0;
					if (record_number % page_row == 0)
						totalpage = parseInt(record_number / page_row);
					else
						totalpage = parseInt(record_number / page_row) + 1;

					var currentPage = parseInt(start_row / page_row) + 1;

					var opt = {
						currentPage : currentPage,
						totalPages : totalpage
					}

					_grid.resetPaginator(opt);

					$("#" + _grid.paginatorID + " .totalnumber").text(record_number);
					$("#" + _grid.paginatorID + " .totalpage").text(totalpage);

				} else {

					var _thead = _prefix + _grid.id + "_thead";
					var thLength = $("#" + _thead + " th").size();

					$("#" + _grid.tbodyID).append("<tr><td colspan=\"" + thLength + "\"><h3 class=\"text-center\">没有查询出结果</h3></td></tr>");

					_grid.resetPaginator({
						currentPage : 1,
						totalPages : 1
					});

					$("#" + _grid.paginatorID + " .totalnumber").text(0);
					$("#" + _grid.paginatorID + " .totalpage").text(0);

				}

			} else {
				var errorDesc = $.fz_common.getXmlNodeValue(data, "context>error-desc");
				$.fz_common.alert("提交发生错误", errCode + "<p>" + errorDesc + "</p>", null);
			}

			if (fun != null) {
				fun();
			}
		}

		var _error = function(data) {
			$("#" + gridID).hideLoading();
			$.fz_common.alert("服务器发生错误", data + "", null);
			if (fun != null) {
				fun();
			}
		}

		var opt = {

			// 不使用缓存
			data : $('#' + gridID).parent("form").serialize() + "&attribute-node:" + this.opt.property + "_cache-flag=false&attribute-node:" + this.opt.property + "_start-row="
					+ (((startPage - 1) * this.opt.pageRow) + 1) + "&attribute-node:" + this.opt.property + "_page-row=" + this.opt.pageRow + "&attribute-node:" + this.opt.property + "_sort-column="
					+ this.opt.sortColumn,
			url : this.opt.action,
			type : "POST", // 提交方式 post
			success : _success,// 提交成功的回调函数
			error : _error
		}

		$.ajax(opt);

		// //保存关键字信息的属性名称
		// client.setParameter( "attribute-node:selected-key", "" );
		//
		// // 数据库操作时翻页的属性
		// 开始记录
		// client.setParameter( "attribute-node:start-row", "1" );
		// 每页的记录数量
		// client.setParameter( "attribute-node:page-row", "0" );
		// 查询出的总数
		// client.setParameter( "attribute-node:record-number", "0");
		//
		// //数据库查询的排序字段名称
		// client.setParameter( "attribute-node:sort-column", "" );

	}

})(jQuery);

(function($) {

	function empty($scope, _grid) {

		// alert("没有查询结果");
		$scope.update(null);

		var opt = {
			currentPage : 1,
			totalPages : 1,
			totalNumber : 0
		}

		_grid.resetPaginator(opt);
		$scope.updatePaginator(opt);

	}

	// 基于bootstrap和AngularJS的模板grid paginator可以配置多个
	$.fz_model_grid = function(gridID, options, paginator) {

		// ID
		this.id = gridID;

		// 翻页
		this.paginator = paginator;

		// 每次返回的完整对象
		this.recordData = null;

		// 配置
		var defaults = {
			// action
			action : "",
			// 遮罩层显示ID
			showLoadingID : "",
			// AJAX提交方式
			method : "get",
			// 节点
			property : "",
			// 每页显示数量
			pageRow : 10,
			// 默认排序字段
			sortColumn : ""

		}

		var opt = $.extend(defaults, options);
		this.opt = opt;
	}

	// 刷新分页
	$.fz_model_grid.prototype.resetPaginator = function(options) {

		for ( var i = 0; i < this.paginator.length; i++) {
			$("#" + this.paginator[i]).bootstrapPaginator("setOptions", options);
		}

	}

	// 获取当前控制器的$scope
	$.fz_model_grid.prototype.getScope = function() {

		var ele = document.querySelector("[ng-controller=" + this.id + "_controller]");
		var $scope = angular.element(ele).scope();
		return $scope;

	}

	// 当前所选择的行（element）
	$.fz_model_grid.prototype.selectRowsElement = function() {
	}

	// 当前选中行索引
	$.fz_model_grid.prototype.selectRowsIndex = function() {
	}

	// 当前所选择的内容
	$.fz_model_grid.prototype.selectRows = function() {
	}

	// 获取行内容
	$.fz_model_grid.prototype.getRow = function(index) {
		return this.getScope().data[index];
	}

	// 查询
	$.fz_model_grid.prototype.query = function(startPage, fun) {

		var _grid = this;
		var _opt = this.opt;
		var _id = this.id;

		var _showLoading = _opt.showLoadingID;
		if (_showLoading == null || _showLoading == "") {
			_showLoading = _id;
		}

		$("#" + _showLoading).showLoading({});

		var $scope = _grid.getScope();

		var _success = function(data) {

			_grid.recordData = data;

			var errCode = $.fz_common.getXmlNodeValue(data, "context>error-code");
			if (errCode == "000000") {

				// 开始记录
				var start_row = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_start-row");
				// 每页的记录数量
				var page_row = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_page-row");
				// 查询出的总数
				var record_number = $.fz_common.getXmlNodeValue(data, "context>attribute-node>" + _opt.property + "_record-number");

				// 结果
				// var record = $.fz_common.getXmlNodeValues(data, "context>"
				// + _opt.property);
				var json = $.xml2json(data);
				if (record_number != 0 && json[_opt.property] != null && json[_opt.property].length != 0) {

					if (json[_opt.property].length == null || json[_opt.property].length == 1) {
						var arrayObj = new Array();
						arrayObj.push(json[_opt.property]);
						$scope.update(arrayObj);
					} else {
						$scope.update(json[_opt.property]);
					}

					// 翻页
					var totalpage = 0;
					if (record_number % page_row == 0)
						totalpage = parseInt(record_number / page_row);
					else
						totalpage = parseInt(record_number / page_row) + 1;

					var currentPage = parseInt(start_row / page_row) + 1;

					var opt = {
						currentPage : currentPage,
						totalPages : totalpage,
						totalNumber : record_number,
						pageRow : page_row,
						startRow : start_row
					}

					_grid.resetPaginator(opt);
					$scope.updatePaginator(opt);

				} else {

					empty($scope, _grid);

				}

			} else {
				var errorDesc = $.fz_common.getXmlNodeValue(data, "context>error-desc");
				// $.fz_common.alert("提交发生错误", errCode + "<p>" + errorDesc +
				// "</p>", null);
				console.error("提交发生错误" + errCode + "<p>" + errorDesc + "</p>");
				empty($scope, _grid);
			}

			if (fun != null) {
				fun();
			}

			$("#" + _showLoading).hideLoading();

		}

		var _error = function(data) {
			_grid.recordData = data;
			$("#" + _showLoading).hideLoading();
			// $.fz_common.alert("服务器发生错误", data.responseText + data.status +
			// "", null);

			console.error("提交发生错误" + data.responseText + data.status);
			empty($scope, _grid);

			if (fun != null) {
				fun();
			}
		}

		var opt = {

			// 不使用缓存
			data : $('#' + _id).parent("form").serialize() + "&attribute-node:" + this.opt.property + "_cache-flag=false&attribute-node:" + this.opt.property + "_start-row="
					+ (((startPage - 1) * this.opt.pageRow) + 1) + "&attribute-node:" + this.opt.property + "_page-row=" + this.opt.pageRow + "&attribute-node:" + this.opt.property + "_sort-column="
					+ this.opt.sortColumn + "&attribute-node:" + this.opt.property + "_page=" + startPage,

			url : this.opt.action,
			type : this.opt.method, // 提交方式
			success : _success,// 提交成功的回调函数
			error : _error
		}

		$.ajax(opt);

	}

})(jQuery);

/*
 * 针对bootstrap模态对话框的二次封装。
 */
(function($) {
	$.fn.teninedialog = function(options) {
		var defaults = {
			title : '提示',
			content : '内容',
			showCloseButton : true,// 显示关闭按钮
			otherButtons : [],// 其他按钮文本，样式默认,["确定","取消"]
			otherButtonStyles : [],// 其他按钮的样式，['btn-primary','btn-primary'],bootstrap按钮样式
			otherFunction : [], // 按钮的回调函数
			bootstrapModalOption : {},// 默认的bootstrap模态对话框参数,即bootstrap.modal的options
			dialogShow : function() {

				var winHeight = $("#" + modalID).height();
				var screenHeight = $(window).height();
				var scrolltop = $(document).scrollTop();

				$("#" + modalID).css({
					"top" : ((screenHeight - winHeight) / 2 - 0) + 'px'
				});

			},// 对话框即将显示事件
			dialogShown : function() {

			},// 对话框已经显示事件
			dialogHide : function() {
			},// 对话框即将关闭
			dialogHidden : function() {
			},// 对话框已经关闭事件
			clickButton : function(sender, modal, index) {
			}// 选中按钮的序号，排除关闭按钮。sender:按钮jquery对象，model:对话框jquery对象,index:按钮的顺序,otherButtons的数组下标
		}
		var options = $.extend(defaults, options);
		var modalID = '';

		// 生成一个惟一的ID
		function getModalID() {
			var d = new Date();
			var vYear = d.getFullYear();
			var vMon = d.getMonth() + 1;
			var vDay = d.getDate();
			var h = d.getHours();
			var m = d.getMinutes();
			var se = d.getSeconds();
			var sse = d.getMilliseconds();
			return 't_' + vYear + vMon + vDay + h + m + se + sse;
		}

		$.fn.extend({
			closeDialog : function(modal) {
				var modalObj = modal;
				modalObj.modal('hide');
			}
		});

		return this
				.each(function() {
					var obj = $(this);
					modalID = getModalID();
					var tmpHtml = '<div id="{ID}" class="modal hide fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h3 id="myModalLabel">{title}</h3></div><div class="modal-body"><p>{body}</p></div><div class="modal-footer">{button}{script}</div></div>';
					var buttonHtml = '<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>';
					var scriptHtml = "";
					if (!options.showCloseButton && options.otherButtons.length > 0) {
						buttonHtml = '';
					}

					// 生成按钮
					var btnClass = 'cls-' + modalID;
					for ( var i = 0; i < options.otherButtons.length; i++) {

						var fun = options.otherFunction[i];
						var id = btnClass + "_" + i;
						// fun = (fun + '').replace(/[\r\n]/g, '');
						buttonHtml += '<button id="' + id + '"  buttonIndex="' + i + '" class="' + btnClass + ' btn ' + options.otherButtonStyles[i] + '">' + options.otherButtons[i] + '</button>';

						scriptHtml += '<script type="text/javascript">$("#' + id + '").click(' + fun + ');</script>';

					}
					// 替换模板标记
					tmpHtml = tmpHtml.replace(/{ID}/g, modalID).replace(/{title}/g, options.title).replace(/{body}/g, options.content).replace(/{button}/g, buttonHtml)
							.replace(/{script}/g, scriptHtml);
					obj.append(tmpHtml);

					var modalObj = $('#' + modalID);
					// 绑定按钮事件,不包括关闭按钮
					$('.' + btnClass).click(function() {
						var index = $(this).attr('buttonIndex');
						options.clickButton($(this), modalObj, index);
					});
					// 绑定本身的事件
					modalObj.on('show', function() {
						if (options.dialogShow != null) {
							options.dialogShow();
						}
					});
					modalObj.on('shown', function() {
						if (options.dialogShown != null) {
							options.dialogShown();
						}
					});
					modalObj.on('hide', function() {
						if (options.dialogHide != null) {
							options.dialogHide();
						}
					});
					modalObj.on('hidden', function() {
						if (options.dialogHidden != null) {
							options.dialogHidden();
						}
						modalObj.remove();
					});
					modalObj.modal(options.bootstrapModalOption);

				});


	};

	$.extend({
		teninedialog : function(options) {
			$("body").teninedialog(options);
		}
	});

})(jQuery);

/**
 * 
 * 分页插件
 * 
 * bootstrap-paginator.js v0.5 -- Copyright 2013 Yun Lai <lyonlai1984@gmail.com> --
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function($) {

	"use strict"; // jshint ;_;

	/*
	 * Paginator PUBLIC CLASS DEFINITION =================================
	 */

	/**
	 * Boostrap Paginator Constructor
	 * 
	 * @param element
	 *            element of the paginator
	 * @param options
	 *            the options to config the paginator
	 * 
	 */
	var BootstrapPaginator = function(element, options) {
		this.init(element, options);
	}, old = null;

	BootstrapPaginator.prototype = {

		/**
		 * Initialization function of the paginator, accepting an element and
		 * the options as parameters
		 * 
		 * @param element
		 *            element of the paginator
		 * @param options
		 *            the options to config the paginator
		 * 
		 */
		init : function(element, options) {

			this.$element = $(element);

			var version = (options && options.bootstrapMajorVersion) ? options.bootstrapMajorVersion : $.fn.bootstrapPaginator.defaults.bootstrapMajorVersion, id = this.$element.attr("id");

			if (version === 2 && !this.$element.is("div")) {

				throw "in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option";
			} else if (version > 2 && !this.$element.is("ul")) {
				throw "in Bootstrap version 3 the pagination root item must be an ul element."
			}

			this.currentPage = 1;

			this.lastPage = 1;

			this.setOptions(options);

			this.initialized = true;

		},

		/**
		 * Update the properties of the paginator element
		 * 
		 * @param options
		 *            options to config the paginator
		 */
		setOptions : function(options) {

			this.options = $.extend({}, (this.options || $.fn.bootstrapPaginator.defaults), options);

			this.totalPages = parseInt(this.options.totalPages, 10); // setup
			// the
			// total
			// pages
			// property.
			this.numberOfPages = parseInt(this.options.numberOfPages, 10); // setup
			// the
			// numberOfPages
			// to
			// be
			// shown

			// move the set current page after the setting of total pages.
			// otherwise it will cause out of page exception.
			if (options && typeof (options.currentPage) !== 'undefined') {

				this.setCurrentPage(options.currentPage);
			}

			this.listen();

			// render the paginator
			this.render();

			if (!this.initialized && this.lastPage !== this.currentPage) {
				this.$element.trigger("page-changed", [ this.lastPage, this.currentPage ]);
			}

		},

		/**
		 * Sets up the events listeners. Currently the pageclicked and
		 * pagechanged events are linked if available.
		 * 
		 */
		listen : function() {

			this.$element.off("page-clicked");

			this.$element.off("page-changed");// unload the events for the
			// element

			if (typeof (this.options.onPageClicked) === "function") {
				this.$element.bind("page-clicked", this.options.onPageClicked);
			}

			if (typeof (this.options.onPageChanged) === "function") {
				this.$element.on("page-changed", this.options.onPageChanged);
			}

			this.$element.bind("page-clicked", this.onPageClicked);
		},

		/**
		 * 
		 * Destroys the paginator element, it unload the event first, then empty
		 * the content inside.
		 * 
		 */
		destroy : function() {

			this.$element.off("page-clicked");

			this.$element.off("page-changed");

			this.$element.removeData('bootstrapPaginator');

			this.$element.empty();

		},

		/**
		 * Shows the page
		 * 
		 */
		show : function(page) {

			this.setCurrentPage(page);

			this.render();

			if (this.lastPage !== this.currentPage) {
				this.$element.trigger("page-changed", [ this.lastPage, this.currentPage ]);
			}
		},

		/**
		 * Shows the next page
		 * 
		 */
		showNext : function() {
			var pages = this.getPages();

			if (pages.next) {
				this.show(pages.next);
			}

		},

		/**
		 * Shows the previous page
		 * 
		 */
		showPrevious : function() {
			var pages = this.getPages();

			if (pages.prev) {
				this.show(pages.prev);
			}

		},

		/**
		 * Shows the first page
		 * 
		 */
		showFirst : function() {
			var pages = this.getPages();

			if (pages.first) {
				this.show(pages.first);
			}

		},

		/**
		 * Shows the last page
		 * 
		 */
		showLast : function() {
			var pages = this.getPages();

			if (pages.last) {
				this.show(pages.last);
			}

		},

		/**
		 * Internal on page item click handler, when the page item is clicked,
		 * change the current page to the corresponding page and trigger the
		 * pageclick event for the listeners.
		 * 
		 * 
		 */
		onPageItemClicked : function(event) {

			var type = event.data.type, page = event.data.page;

			this.$element.trigger("page-clicked", [ event, type, page ]);

		},

		onPageClicked : function(event, originalEvent, type, page) {

			// show the corresponding page and retrieve the newly built item
			// related to the page clicked before for the event return

			var currentTarget = $(event.currentTarget);

			switch (type) {
			case "first":
				currentTarget.bootstrapPaginator("showFirst");
				break;
			case "prev":
				currentTarget.bootstrapPaginator("showPrevious");
				break;
			case "next":
				currentTarget.bootstrapPaginator("showNext");
				break;
			case "last":
				currentTarget.bootstrapPaginator("showLast");
				break;
			case "page":
				currentTarget.bootstrapPaginator("show", page);
				break;
			}

		},

		/**
		 * Renders the paginator according to the internal properties and the
		 * settings.
		 * 
		 * 
		 */
		render : function() {

			// fetch the container class and add them to the container
			var containerClass = this.getValueFromOption(this.options.containerClass, this.$element), size = this.options.size || "normal", alignment = this.options.alignment || "left", pages = this
					.getPages(), listContainer = this.options.bootstrapMajorVersion === 2 ? $("<ul></ul>") : this.$element, listContainerClass = this.options.bootstrapMajorVersion === 2 ? this
					.getValueFromOption(this.options.listContainerClass, listContainer) : null, first = null, prev = null, next = null, last = null, p = null, i = 0;

			this.$element.prop("class", "");

			this.$element.addClass("pagination");

			switch (size.toLowerCase()) {
			case "large":
			case "small":
			case "mini":
				this.$element.addClass($.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][size.toLowerCase()]);
				break;
			default:
				break;
			}

			if (this.options.bootstrapMajorVersion === 2) {
				switch (alignment.toLowerCase()) {
				case "center":
					this.$element.addClass("pagination-centered");
					break;
				case "right":
					this.$element.addClass("pagination-right");
					break;
				default:
					break;
				}
			}

			this.$element.addClass(containerClass);

			// empty the outter most container then add the listContainer
			// inside.
			this.$element.empty();

			if (this.options.bootstrapMajorVersion === 2) {
				if (this.options.paginatorPrefix != null && this.options.paginatorPrefix != "") {
					this.$element.append(this.options.paginatorPrefix);
				}
				this.$element.append(listContainer);

				listContainer.addClass(listContainerClass);
			}


			// update the page element reference
			this.pageRef = [];

			if (pages.first) {// if the there is first page element
				first = this.buildPageItem("first", pages.first);

				if (first) {
					listContainer.append(first);
				}

			}

			if (pages.prev) {// if the there is previous page element

				prev = this.buildPageItem("prev", pages.prev);

				if (prev) {
					listContainer.append(prev);
				}

			}

			for (i = 0; i < pages.length; i = i + 1) {// fill the numeric
				// pages.

				p = this.buildPageItem("page", pages[i]);

				if (p) {
					listContainer.append(p);
				}
			}

			if (pages.next) {// if there is next page

				next = this.buildPageItem("next", pages.next);

				if (next) {
					listContainer.append(next);
				}
			}

			if (pages.last) {// if there is last page

				last = this.buildPageItem("last", pages.last);

				if (last) {
					listContainer.append(last);
				}
			}
		},

		/**
		 * 
		 * Creates a page item base on the type and page number given.
		 * 
		 * @param page
		 *            page number
		 * @param type
		 *            type of the page, whether it is the first, prev, page,
		 *            next, last
		 * 
		 * @return Object the constructed page element
		 */
		buildPageItem : function(type, page) {

			var itemContainer = $("<li></li>"), // creates the item container
			itemContent = $("<a></a>"), // creates the item content
			text = "", title = "", itemContainerClass = this.options.itemContainerClass(type, page, this.currentPage), itemContentClass = this.getValueFromOption(this.options.itemContentClass, type,
					page, this.currentPage), tooltipOpts = null;

			switch (type) {

			case "first":
				if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) {
					return;
				}
				text = this.options.itemTexts(type, page, this.currentPage);
				title = this.options.tooltipTitles(type, page, this.currentPage);
				break;
			case "last":
				if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) {
					return;
				}
				text = this.options.itemTexts(type, page, this.currentPage);
				title = this.options.tooltipTitles(type, page, this.currentPage);
				break;
			case "prev":
				if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) {
					return;
				}
				text = this.options.itemTexts(type, page, this.currentPage);
				title = this.options.tooltipTitles(type, page, this.currentPage);
				break;
			case "next":
				if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) {
					return;
				}
				text = this.options.itemTexts(type, page, this.currentPage);
				title = this.options.tooltipTitles(type, page, this.currentPage);
				break;
			case "page":
				if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) {
					return;
				}
				text = this.options.itemTexts(type, page, this.currentPage);
				title = this.options.tooltipTitles(type, page, this.currentPage);
				break;
			}

			itemContainer.addClass(itemContainerClass).append(itemContent);

			itemContent.addClass(itemContentClass).html(text).on("click", null, {
				type : type,
				page : page
			}, $.proxy(this.onPageItemClicked, this));

			if (this.options.pageUrl) {
				itemContent.attr("href", this.getValueFromOption(this.options.pageUrl, type, page, this.currentPage));
			}

			if (this.options.useBootstrapTooltip) {
				tooltipOpts = $.extend({}, this.options.bootstrapTooltipOptions, {
					title : title
				});

				itemContent.tooltip(tooltipOpts);
			} else {
				itemContent.attr("title", title);
			}

			return itemContainer;

		},

		setCurrentPage : function(page) {
			if (page > this.totalPages || page < 1) {// if the current page
				// is out of range,
				// throw exception.

				throw "Page out of range";

			}

			this.lastPage = this.currentPage;

			this.currentPage = parseInt(page, 10);

		},

		/**
		 * Gets an array that represents the current status of the page object.
		 * Numeric pages can be access via array mode. length attributes
		 * describes how many numeric pages are there. First, previous, next and
		 * last page can be accessed via attributes first, prev, next and last.
		 * Current attribute marks the current page within the pages.
		 * 
		 * @return object output objects that has first, prev, next, last and
		 *         also the number of pages in between.
		 * 
		 */
		getPages : function() {

			var totalPages = this.totalPages, // get or calculate the total
			// pages via the total records
			pageStart = (this.currentPage % this.numberOfPages === 0) ? (parseInt(this.currentPage / this.numberOfPages, 10) - 1) * this.numberOfPages + 1 : parseInt(this.currentPage
					/ this.numberOfPages, 10)
					* this.numberOfPages + 1, // calculates the start
			// page.
			output = [], i = 0, counter = 0;

			pageStart = pageStart < 1 ? 1 : pageStart;// check the range of
			// the page start to see
			// if its less than 1.

			for (i = pageStart, counter = 0; counter < this.numberOfPages && i <= totalPages; i = i + 1, counter = counter + 1) {// fill
				// the
				// pages
				output.push(i);
			}

			output.first = 1;// add the first when the current page leaves
			// the 1st page.

			if (this.currentPage > 1) {// add the previous when the current
				// page leaves the 1st page
				output.prev = this.currentPage - 1;
			} else {
				output.prev = 1;
			}

			if (this.currentPage < totalPages) {// add the next page when the
				// current page doesn't reach
				// the last page
				output.next = this.currentPage + 1;
			} else {
				output.next = totalPages;
			}

			output.last = totalPages;// add the last page when the current
			// page doesn't reach the last page

			output.current = this.currentPage;// mark the current page.

			output.total = totalPages;

			output.numberOfPages = this.options.numberOfPages;

			return output;

		},

		/**
		 * Gets the value from the options, this is made to handle the situation
		 * where value is the return value of a function.
		 * 
		 * @return mixed value that depends on the type of parameters, if the
		 *         given parameter is a function, then the evaluated result is
		 *         returned. Otherwise the parameter itself will get returned.
		 */
		getValueFromOption : function(value) {

			var output = null, args = Array.prototype.slice.call(arguments, 1);

			if (typeof value === 'function') {
				output = value.apply(this, args);
			} else {
				output = value;
			}

			return output;

		}

	};

	/*
	 * TYPEAHEAD PLUGIN DEFINITION ===========================
	 */

	old = $.fn.bootstrapPaginator;

	$.fn.bootstrapPaginator = function(option) {

		var args = arguments, result = null;

		$(this).each(function(index, item) {
			var $this = $(item), data = $this.data('bootstrapPaginator'), options = (typeof option !== 'object') ? null : option;

			if (!data) {
				data = new BootstrapPaginator(this, options);

				$this = $(data.$element);

				$this.data('bootstrapPaginator', data);

				return;
			}

			if (typeof option === 'string') {

				if (data[option]) {
					result = data[option].apply(data, Array.prototype.slice.call(args, 1));
				} else {
					throw "Method " + option + " does not exist";
				}

			} else {
				result = data.setOptions(option);
			}
		});

		return result;

	};

	$.fn.bootstrapPaginator.sizeArray = {

		"2" : {
			"large" : "pagination-large",
			"small" : "pagination-small",
			"mini" : "pagination-mini"
		},
		"3" : {
			"large" : "pagination-lg",
			"small" : "pagination-sm",
			"mini" : ""
		}

	};

	$.fn.bootstrapPaginator.defaults = {
		containerClass : "",
		size : "normal",
		alignment : "left",
		bootstrapMajorVersion : 2,
		listContainerClass : "",
		itemContainerClass : function(type, page, current) {
			if (type == "first") {
				return "firstPage";
			} else if (type == "last") {
				return "lastPage";
			} else if (type == "next") {
				return "nextPage";
			} else if (type == "prev") {
				return "prevPage";
			}
			return (page === current) ? "active" : "";
		},
		itemContentClass : function(type, page, current) {
			return "";
		},
		currentPage : 1,
		numberOfPages : 5,
		totalPages : 1,
		pageUrl : function(type, page, current) {
			return null;
		},
		onPageClicked : null,
		onPageChanged : null,
		useBootstrapTooltip : false,
		shouldShowPage : function(type, page, current) {

			var result = true;

			switch (type) {
			case "first":
				result = (current !== 1);
				break;
			case "prev":
				result = (current !== 1);
				break;
			case "next":
				result = (current !== this.totalPages);
				break;
			case "last":
				result = (current !== this.totalPages);
				break;
			case "page":
				result = true;
				break;
			}

			return result;

		},
		itemTexts : function(type, page, current) {
			switch (type) {
			case "first":
				return "&lt;&lt;";
			case "prev":
				return "&lt;";
			case "next":
				return "&gt;";
			case "last":
				return "&gt;&gt;";
			case "page":
				return page;
			}
		},
		tooltipTitles : function(type, page, current) {

			switch (type) {
			case "first":
				return "第一页";
			case "prev":
				return "上一页";
			case "next":
				return "下一页";
			case "last":
				return "最后一页";
			case "page":
				return (page === current) ? "当前页 " + page : "前往 " + page;
			}
		},
		bootstrapTooltipOptions : {
			animation : true,
			html : true,
			placement : 'top',
			selector : false,
			title : "",
			container : false
		}
	};

	$.fn.bootstrapPaginator.Constructor = BootstrapPaginator;

}(window.jQuery));

/*
 * 遮罩层插件
 * 
 * jQuery showLoading plugin v1.0
 * 
 * Copyright (c) 2009 Jim Keller Context - http://www.contextllc.com
 * 
 * Dual licensed under the MIT and GPL licenses.
 * 
 */
jQuery.fn.showLoading = function(options) {
	var indicatorID;
	var settings = {
		'addClass' : '',
		'beforeShow' : '',
		'afterShow' : '',
		'hPos' : 'center',
		'vPos' : 'center',
		'indicatorZIndex' : 5001,
		'overlayZIndex' : 5000,
		'parent' : '',
		'marginTop' : 0,
		'marginLeft' : 0,
		'overlayWidth' : null,
		'overlayHeight' : null
	};
	jQuery.extend(settings, options);
	var loadingDiv = jQuery('<div></div>');
	var overlayDiv = jQuery('<div></div>');
	if (settings.indicatorID) {
		indicatorID = settings.indicatorID;
	} else {
		indicatorID = jQuery(this).attr('id');
	}
	jQuery(loadingDiv).attr('id', 'loading-indicator-' + indicatorID);
	jQuery(loadingDiv).addClass('loading-indicator');
	if (settings.addClass) {
		jQuery(loadingDiv).addClass(settings.addClass);
	}
	jQuery(overlayDiv).css('display', 'none');
	jQuery(document.body).append(overlayDiv);
	jQuery(overlayDiv).attr('id', 'loading-indicator-' + indicatorID + '-overlay');
	jQuery(overlayDiv).addClass('loading-indicator-overlay');
	if (settings.addClass) {
		jQuery(overlayDiv).addClass(settings.addClass + '-overlay');
	}
	var overlay_width;
	var overlay_height;
	var border_top_width = jQuery(this).css('border-top-width');
	var border_left_width = jQuery(this).css('border-left-width');
	border_top_width = isNaN(parseInt(border_top_width)) ? 0 : border_top_width;
	border_left_width = isNaN(parseInt(border_left_width)) ? 0 : border_left_width;
	var overlay_left_pos = jQuery(this).offset().left + parseInt(border_left_width);
	var overlay_top_pos = jQuery(this).offset().top + parseInt(border_top_width);
	if (settings.overlayWidth !== null) {
		overlay_width = settings.overlayWidth;
	} else {
		overlay_width = parseInt(jQuery(this).width()) + parseInt(jQuery(this).css('padding-right')) + parseInt(jQuery(this).css('padding-left'));
	}
	if (settings.overlayHeight !== null) {
		overlay_height = settings.overlayWidth;
	} else {
		overlay_height = parseInt(jQuery(this).height()) + parseInt(jQuery(this).css('padding-top')) + parseInt(jQuery(this).css('padding-bottom'));
	}
	jQuery(overlayDiv).css('width', overlay_width.toString() + 'px');
	jQuery(overlayDiv).css('height', overlay_height.toString() + 'px');
	jQuery(overlayDiv).css('left', overlay_left_pos.toString() + 'px');
	jQuery(overlayDiv).css('position', 'absolute');
	jQuery(overlayDiv).css('top', overlay_top_pos.toString() + 'px');
	jQuery(overlayDiv).css('z-index', settings.overlayZIndex);
	if (settings.overlayCSS) {
		jQuery(overlayDiv).css(settings.overlayCSS);
	}
	jQuery(loadingDiv).css('display', 'none');
	jQuery(document.body).append(loadingDiv);
	jQuery(loadingDiv).css('position', 'absolute');
	jQuery(loadingDiv).css('z-index', settings.indicatorZIndex);
	var indicatorTop = overlay_top_pos;
	if (settings.marginTop) {
		indicatorTop += parseInt(settings.marginTop);
	}
	var indicatorLeft = overlay_left_pos;
	if (settings.marginLeft) {
		indicatorLeft += parseInt(settings.marginTop);
	}
	if (settings.hPos.toString().toLowerCase() == 'center') {
		jQuery(loadingDiv).css('left', (indicatorLeft + ((jQuery(overlayDiv).width() - parseInt(jQuery(loadingDiv).width())) / 2)).toString() + 'px');
	} else if (settings.hPos.toString().toLowerCase() == 'left') {
		jQuery(loadingDiv).css('left', (indicatorLeft + parseInt(jQuery(overlayDiv).css('margin-left'))).toString() + 'px');
	} else if (settings.hPos.toString().toLowerCase() == 'right') {
		jQuery(loadingDiv).css('left', (indicatorLeft + (jQuery(overlayDiv).width() - parseInt(jQuery(loadingDiv).width()))).toString() + 'px');
	} else {
		jQuery(loadingDiv).css('left', (indicatorLeft + parseInt(settings.hPos)).toString() + 'px');
	}
	if (settings.vPos.toString().toLowerCase() == 'center') {
		jQuery(loadingDiv).css('top', (indicatorTop + ((jQuery(overlayDiv).height() - parseInt(jQuery(loadingDiv).height())) / 2)).toString() + 'px');
	} else if (settings.vPos.toString().toLowerCase() == 'top') {
		jQuery(loadingDiv).css('top', indicatorTop.toString() + 'px');
	} else if (settings.vPos.toString().toLowerCase() == 'bottom') {
		jQuery(loadingDiv).css('top', (indicatorTop + (jQuery(overlayDiv).height() - parseInt(jQuery(loadingDiv).height()))).toString() + 'px');
	} else {
		jQuery(loadingDiv).css('top', (indicatorTop + parseInt(settings.vPos)).toString() + 'px');
	}
	if (settings.css) {
		jQuery(loadingDiv).css(settings.css);
	}
	var callback_options = {
		'overlay' : overlayDiv,
		'indicator' : loadingDiv,
		'element' : this
	};
	if (typeof (settings.beforeShow) == 'function') {
		settings.beforeShow(callback_options);
	}
	jQuery(overlayDiv).show();
	jQuery(loadingDiv).show();
	if (typeof (settings.afterShow) == 'function') {
		settings.afterShow(callback_options);
	}
	return this;
};
jQuery.fn.hideLoading = function(options) {
	var settings = {};
	jQuery.extend(settings, options);
	if (settings.indicatorID) {
		indicatorID = settings.indicatorID;
	} else {
		indicatorID = jQuery(this).attr('id');
	}
	jQuery(document.body).find('#loading-indicator-' + indicatorID).remove();
	jQuery(document.body).find('#loading-indicator-' + indicatorID + '-overlay').remove();
	return this;
};

/*
 * ### jQuery XML to JSON Plugin v1.3 -
 */
if (window.jQuery)
	(function($) {

		// Add function to jQuery namespace
		$.extend({

			// converts xml documents and xml text to json object
			xml2json : function(xml, extended) {
				if (!xml)
					return {}; // quick fail

				// ### PARSER LIBRARY
				// Core function
				function parseXML(node, simple) {
					if (!node)
						return null;
					var txt = '', obj = null, att = null;
					var nt = node.nodeType, nn = jsVar(node.localName || node.nodeName);
					var nv = node.text || node.nodeValue || '';

					if (node.childNodes) {
						if (node.childNodes.length > 0) {

							$.each(node.childNodes, function(n, cn) {
								var cnt = cn.nodeType, cnn = jsVar(cn.localName || cn.nodeName);
								var cnv = cn.text || cn.nodeValue || '';

								if (cnt == 8) {

									return;
								} else if (cnt == 3 || cnt == 4 || !cnn) {

									if (cnv.match(/^\s+$/)) {

										return;
									}
									;

									txt += cnv.replace(/^\s+/, '').replace(/\s+$/, '');

								} else {

									obj = obj || {};
									if (obj[cnn]) {
										if (!obj[cnn].length)
											obj[cnn] = myArr(obj[cnn]);
										obj[cnn] = myArr(obj[cnn]);

										obj[cnn][obj[cnn].length] = parseXML(cn, true/* simple */);
										obj[cnn].length = obj[cnn].length;
									} else {

										obj[cnn] = parseXML(cn);
									}
									;
								}
								;
							});
						}
						;
					}
					;
					if (node.attributes) {
						if (node.attributes.length > 0) {

							att = {};
							obj = obj || {};
							$.each(node.attributes, function(a, at) {
								var atn = jsVar(at.name), atv = at.value;
								att[atn] = atv;
								if (obj[atn]) {

									obj[cnn] = myArr(obj[cnn]);

									obj[atn][obj[atn].length] = atv;
									obj[atn].length = obj[atn].length;
								} else {

									obj[atn] = atv;
								}
								;
							});

						}
						;
					}
					;
					if (obj) {
						obj = $.extend((txt != '' ? new String(txt) : {}),/* {text:txt}, */obj || {}/*
																									 * ,
																									 * att || {}
																									 */);
						// txt = (obj.text) ?
						// (typeof(obj.text)=='object' ? obj.text :
						// [obj.text || '']).concat([txt]) : txt;
						txt = (obj.text) ? ([ obj.text || '' ]).concat([ txt ]) : txt;
						if (txt)
							obj.text = txt;
						txt = '';
					}
					;
					var out = obj || txt;
					// console.log([extended, simple, out]);
					if (extended) {
						if (txt)
							out = {};// new String(out);
						txt = out.text || txt || '';
						if (txt)
							out.text = txt;
						if (!simple)
							out = myArr(out);
					}
					;
					return out;
				}
				;// parseXML
				// Core Function End
				// Utility functions
				var jsVar = function(s) {
					return String(s || '').replace(/-/g, "_");
				};

				function isNum(s) {

					var regexp = /^((-)?([0-9]+)(([\.\,]{0,1})([0-9]+))?$)/
					return (typeof s == "number") || regexp.test(String((s && typeof s == "string") ? jQuery.trim(s) : ''));
				}
				;

				var myArr = function(o) {

					if (!$.isArray(o))
						o = [ o ];
					o.length = o.length;

					return o;
				};

				// Convert plain text to xml
				if (typeof xml == 'string')
					xml = $.text2xml(xml);

				// Quick fail if not xml (or if this is a node)
				if (!xml.nodeType)
					return;
				if (xml.nodeType == 3 || xml.nodeType == 4)
					return xml.nodeValue;

				// Find xml root node
				var root = (xml.nodeType == 9) ? xml.documentElement : xml;

				// Convert xml to json
				var out = parseXML(root, true /* simple */);

				// Clean-up memory
				xml = null;
				root = null;

				// Send output
				return out;
			},

			// Convert text to XML DOM
			text2xml : function(str) {

				/* jquery 1.9+ */
				return $.parseXML(str);
			}

		}); // extend $

	})(jQuery);

//基础接口
(function($) {

	function _abstractFn(isRequired) {
		if (isRequired) {
			alert("未引入正确，方法尚未实现!");
			// throw "未引入正确，方法尚未实现!";
		}
	}

	/** 基础函数* */
	$.fz_common = {

		getXmlNodeValue : function(xDoc, xpath) {
			var path = ($(xDoc).find(xpath + ":first"));
			return path.text();
		},
		getXmlNodeValues : function(xDoc, xpath) {
			return $(xDoc).find(xpath);
		},

		// popover
		popover : function() {
			_abstractFn(true);
		},
		// alert
		alert : function(_title, _content) {
			_abstractFn(true);
		},
		// confirm
		confirm : function(_title, _content) {
			_abstractFn(true);
		},
		// 弹出页面
		open : function() {
			_abstractFn(true);
		}

	};

	// 扩展对象
	$.fz_form = function(formID, options) {
		this.form = $(formID);
		this.options = options;
	}

	// 接口属性定义
	// AJAX提交表单
	$.fz_form.prototype.ajaxSubmit = function() {
		_abstractFn(true);
	};

	// 验证表单
	$.fz_form.prototype.validateForm = function() {
		_abstractFn(true);
	};

	// 重置表单
	$.fz_form.prototype.resetForm = function() {
		_abstractFn(true);
	};

	// AJAX提交后，根据返回XML获取烽火台错误代码 通用方法
	// <?xml version="1.0" encoding="UTF-8"?>
	// <context>
	// <error-code>000000</error-code>
	// <error-desc/>
	// <flowno>0EAU0L28TT013C19</flowno>
	// <record>
	// .........
	// </record>
	// </context>
	$.fz_form.prototype.getErrorCode = function(result) {
		var errCode = $.fz_common.getXmlNodeValue(result, "context>error-code");
		return errCode;
	};

	// ///////////////////////////////////////////////////////////////////////////////////

	$.fz_valueset = $.fz_common.valuesetApi = _valuesetApi = {}

	// 接口定义
	$.fz_grid = $.fz_common.gridApi = _gridApi = $.extend($.fz_grid, {
	// insertRow : _abstractFn(true),
	// insertRows : _abstractFn(true),
	// updateRow : _abstractFn(true),
	// setColumnVisible : _abstractFn(true),
	// getFormFieldValue : _abstractFn(true), // 取指定行单元格内容
	// setFormFieldValue : _abstractFn(true), // 设置指定行单元格内容
	// getFormFieldValues : _abstractFn(true)
	// 取选中行单元格内容

	});

	$.fz_tree = $.fz_common.treeApi = _treeApi = {

	}

})(jQuery);

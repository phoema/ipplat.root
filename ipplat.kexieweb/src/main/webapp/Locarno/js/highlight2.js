var highlightTxtIndex = 0;
jQuery.fn.extend({

	highlight : function(search, configs) {
		if (typeof (search) == 'undefined')
			return;
		var configs = jQuery.extend({
			insensitive : 1,
			hls_class : 'highlightTxt',
			clear_last : true,
			id : "highlightTxt"

		}, configs);
		if (configs.clear_last) {
			$(this).find("span." + configs.hls_class).each(function() {
				$(this).after($(this).text());
				$(this).remove();
			})
		}
		return this.each(function() {
			if (typeof (search) == "string") {
				$(this).highregx(search, configs);
			} else if (search.constructor === Array) {
				for ( var query in search) {
					var search_str = $.trim(search[query]);
					if (search_str != "")
						$(this).highregx(search_str, configs);
				}
			}
		});
	},
	highregx : function(query, configs) {
		var regExp = /[a-z]|[A-Z]$/;
		var regex;
		var flag = true;
		for(var i = 0; i < query.length; i ++){
			if(!regExp.test(query[i])){
				flag = false;
			}
		}
		if(!flag){
			query = this.unicode(query);
			var regex = new RegExp("(<[^>]*>)|(" + query + ")", configs.insensitive ? "g" : "ig");
			this.html(this.html().replace(regex, function(a, b, c) {
				highlightTxtIndex = highlightTxtIndex + 1;
				// 只标记不上色
				return (a.charAt(0) == "<") ? a : "<span index=\"" + highlightTxtIndex + "\" id=\"" + configs.id + "_" + highlightTxtIndex + "\" class=\"" + configs.hls_class + "\">" + c + "</span>";
			}));
		}else{
			
			regex = new RegExp("(<[^>]*>)|(\\b"+ query +"\\b)", configs.insensitive ? "g":"ig");
			this.html(this.html().replace(regex, function(a, b, c){
				highlightTxtIndex = highlightTxtIndex + 1;
				return (a.charAt(0) == "<") ? a : "<span index='" + highlightTxtIndex + "' id='" + configs.id + "_" + highlightTxtIndex + "' class='"+ configs.hls_class +"'>" + a + "</span>";
			}));
		}

	},
	unicode : function(s) {
		var len = s.length;
		var rs = "";
		s = s.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
		for ( var i = 0; i < s.length; i++) {
			if (s.charCodeAt(i) > 255)
				rs += "\\u" + s.charCodeAt(i).toString(16);
			else
				rs += s.charAt(i);
		}
		return rs;
	}
});
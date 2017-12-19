jQuery.fn.extend({
	highlight: function(search, configs){
		if(typeof(search) == 'undefined') return;
		var configs =  jQuery.extend({
			insensitive: 1, //是否匹配大小写  0匹配 1不匹配
			hls_class: 'highlight', // 高亮后的class
			clear_last: true, // 高亮后的class
		},configs);	  
		if(configs.clear_last) {
			$(this).find("strong."+configs.hls_class).each(function(){ 
				$(this).after($(this).text());
				$(this).remove(); 
			})
		}
		return this.each(function() {
			if(typeof(search) == "string") {
				$(this).highregx(search,configs);
			} else if (search.constructor === Array ) {
				for(var query in search){ 
					var search_str = $.trim(search[query]);
					if(search_str != "") $(this).highregx(search_str,configs);
				}
			} 
		});				  
	},				
	highregx: function(query,configs){
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
			regex = new RegExp("(<[^>]*>)|("+ query +")", configs.insensitive ? "g" : "ig");
			this.html(this.html().replace(regex, function(a, b, c){
				return (a.charAt(0) == "<") ? a : "<strong class=\""+ configs.hls_class +"\">" + c + "</strong>";
			}));
		}else{
			regex = new RegExp("(<[^>]*>)|(\\b"+ query +"\\b)", configs.insensitive ? "g":"ig");
			this.html(this.html().replace(regex, function(a, b, c){
				return (a.charAt(0) == "<") ? a : "<strong class='"+ configs.hls_class +"'>" + a + "</strong>";
			}));
		}
		
	},
	unicode: function(s){ 
		 var len=s.length; 
		 var rs="";
		 s = s.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");
		 for(var i=0;i<s.length;i++){
			if(s.charCodeAt(i) > 255)
				rs+="\\u"+ s.charCodeAt(i).toString(16);
			else rs +=  s.charAt(i);
		 }   
		 return rs; 
	}  
});